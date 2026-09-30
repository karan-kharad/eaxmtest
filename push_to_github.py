#!/usr/bin/env python3
"""Push files to GitHub repository using the GitHub API."""

import base64
import json
import requests

# Load config from .env file
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
TOKEN = os.environ.get('GITHUB_TOKEN', '')
OWNER = os.environ.get('GITHUB_OWNER', 'karan-kharad')
REPO = os.environ.get('GITHUB_REPO', 'eaxmtest')

HEADERS = {
    "Authorization": f"token {TOKEN}",
    "Accept": "application/vnd.github.v3+json",
    "Content-Type": "application/json"
}

FILES = [
    "index.html",
    "style.css",
    "script.js",
    "server.py",
    "DEPLOY.md",
    ".gitignore"
]


def create_blob(file_path):
    """Create a git blob for a file."""
    with open(file_path, "r", encoding="utf-8") as f:
        content = f.read()

    response = requests.post(
        f"https://api.github.com/repos/{OWNER}/{REPO}/git/blobs",
        headers=HEADERS,
        json={
            "content": content,
            "encoding": "utf-8"
        }
    )

    if response.status_code == 201:
        return response.json()["sha"]
    else:
        print(f"  Error creating blob: {response.status_code} - {response.text[:200]}")
        return None


def main():
    print("Creating blobs...")
    tree = []

    for file_path in FILES:
        full_path = f"/home/karan/physiology-exam/{file_path}"
        print(f"  Processing {file_path}...")

        sha = create_blob(full_path)
        if sha:
            tree.append({
                "path": file_path,
                "mode": "100644",
                "type": "blob",
                "sha": sha
            })
            print(f"    Blob created: {sha[:12]}...")
        else:
            print(f"    FAILED to create blob for {file_path}")

    if not tree:
        print("No blobs created. Exiting.")
        return

    print(f"\nCreating tree with {len(tree)} files...")

    # Create tree
    tree_response = requests.post(
        f"https://api.github.com/repos/{OWNER}/{REPO}/git/trees",
        headers=HEADERS,
        json={"tree": tree}
    )

    if tree_response.status_code != 201:
        print(f"Error creating tree: {tree_response.status_code} - {tree_response.text[:200]}")
        return

    tree_sha = tree_response.json()["sha"]
    print(f"Tree created: {tree_sha[:12]}...")

    # Create commit
    print("\nCreating commit...")
    commit_response = requests.post(
        f"https://api.github.com/repos/{OWNER}/{REPO}/git/commits",
        headers=HEADERS,
        json={
            "message": "Initial commit: MBBS Physiology Exam Portal\n\n- Exam portal with 4 exams, 100 questions each\n- 2-hour timer with visual warnings\n- Question navigator with answered/unanswered tracking\n- Results screen with score breakdown\n- Answer review functionality\n- Auto-save progress to localStorage\n- Responsive design for all devices",
            "tree": tree_sha,
            "parents": []
        }
    )

    if commit_response.status_code != 201:
        print(f"Error creating commit: {commit_response.status_code} - {commit_response.text[:200]}")
        return

    commit_sha = commit_response.json()["sha"]
    print(f"Commit created: {commit_sha[:12]}...")

    # Update branch reference
    print("\nUpdating branch reference...")
    ref_response = requests.patch(
        f"https://api.github.com/repos/{OWNER}/{REPO}/git/refs/heads/main",
        headers=HEADERS,
        json={
            "sha": commit_sha,
            "force": True
        }
    )

    if ref_response.status_code == 200:
        print("Branch updated successfully!")
    else:
        print(f"Error updating branch: {ref_response.status_code} - {ref_response.text[:200]}")

    print(f"\n✅ Files pushed to GitHub!")
    print(f"Repository: https://github.com/{OWNER}/{REPO}")


if __name__ == "__main__":
    main()
