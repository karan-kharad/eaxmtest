#!/usr/bin/env python3
"""Generate MCQ options and answers for biochemistry questions using Gemini API."""

import json
import time
import os
import re
import requests

# Load API key from .env file
def load_env():
    env_path = os.path.join(os.path.dirname(os.path.abspath(__file__)), '.env')
    if os.path.exists(env_path):
        with open(env_path) as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('#') and '=' in line:
                    key, value = line.split('=', 1)
                    os.environ[key.strip()] = value.strip()

load_env()
API_KEY = os.environ.get('GEMINI_API_KEY', '')
# Use flash-lite for higher rate limits
API_URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-lite-latest:generateContent?key={API_KEY}"
INPUT_FILE = "/home/karan/semester2_questions.json"
OUTPUT_FILE = "/home/karan/physiology-exam/question_bank.json"
PROGRESS_FILE = "/home/karan/physiology-exam/progress.json"

BATCH_SIZE = 1  # One question at a time to avoid rate limits
DELAY_BETWEEN_REQUESTS = 30  # seconds between requests
MAX_RETRIES = 5


def load_questions():
    """Load biochemistry questions from the input JSON."""
    with open(INPUT_FILE) as f:
        data = json.load(f)
    biochem = [q["text"] for q in data["questions"] if "Biochemistry" in q["subject"]]
    return biochem


def load_progress():
    """Load progress from previous runs."""
    if os.path.exists(PROGRESS_FILE):
        with open(PROGRESS_FILE) as f:
            return json.load(f)
    return {"completed": 0, "results": []}


def save_progress(progress):
    """Save progress to file."""
    with open(PROGRESS_FILE, "w") as f:
        json.dump(progress, f)


def save_results(results):
    """Save final results."""
    with open(OUTPUT_FILE, "w") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)


def call_gemini_api(question):
    """Call Gemini API to generate MCQ options for a single question."""
    prompt = f"""You are a medical exam question generator specializing in biochemistry.
For the following biochemistry question, generate exactly 4 multiple choice options and indicate the correct answer.

Question: {question}

Respond in this exact JSON format (no other text, no markdown, no code blocks):
{{"options": ["Option A", "Option B", "Option C", "Option D"], "correct": 0}}

Rules:
- Exactly 4 options
- "correct" is the index (0-3) of the correct answer
- Options should be medically accurate and plausible
- Distractors should be reasonable but clearly wrong
- Make sure the correct answer is actually correct"""

    for attempt in range(MAX_RETRIES):
        try:
            response = requests.post(
                API_URL,
                headers={"Content-Type": "application/json"},
                json={
                    "contents": [{"parts": [{"text": prompt}]}]
                },
                timeout=60
            )

            if response.status_code == 200:
                data = response.json()
                if "candidates" in data:
                    text = data["candidates"][0]["content"]["parts"][0]["text"]
                    text = text.strip()
                    text = re.sub(r'^```json\s*', '', text)
                    text = re.sub(r'^```\s*', '', text)
                    text = re.sub(r'\s*```$', '', text)
                    text = text.strip()

                    try:
                        result = json.loads(text)
                        if isinstance(result, dict) and "options" in result and "correct" in result:
                            return result
                        else:
                            print(f"  Unexpected format, retrying...")
                    except json.JSONDecodeError:
                        print(f"  JSON parse error, retrying...")
                else:
                    print(f"  No candidates in response")
            elif response.status_code == 429:
                wait = 180 * (attempt + 1)
                print(f"  Rate limited, waiting {wait}s...")
                time.sleep(wait)
            elif response.status_code == 503:
                wait = 60 * (attempt + 1)
                print(f"  Service unavailable, waiting {wait}s...")
                time.sleep(wait)
            else:
                print(f"  HTTP {response.status_code}: {response.text[:200]}")
                time.sleep(30)

        except Exception as e:
            print(f"  Error: {e}")
            time.sleep(30)

    return None


def main():
    print("Loading questions...")
    questions = load_questions()
    print(f"Total biochemistry questions: {len(questions)}")

    progress = load_progress()
    start_idx = progress["completed"]
    results = progress["results"]

    if start_idx > 0:
        print(f"Resuming from question {start_idx + 1}")

    for i in range(start_idx, len(questions)):
        q = questions[i]
        print(f"[{i+1}/{len(questions)}] Processing...")

        result = call_gemini_api(q)

        if result:
            results.append({
                "id": i + 1,
                "question": q,
                "options": result["options"],
                "correct": result["correct"]
            })
            progress["completed"] = i + 1
            progress["results"] = results
            save_progress(progress)
            print(f"  OK - {len(results)} total")
        else:
            print(f"  Failed after {MAX_RETRIES} retries, saving and exiting...")
            save_progress(progress)
            return

        if i + 1 < len(questions):
            time.sleep(DELAY_BETWEEN_REQUESTS)

    save_results(results)
    print(f"\nDone! Generated {len(results)} MCQs.")
    print(f"Results saved to {OUTPUT_FILE}")


if __name__ == "__main__":
    main()
