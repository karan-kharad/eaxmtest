#!/usr/bin/env python3
"""Compare PDF questions with our question bank and create a PDF of different questions."""

import json
import re
import os
from PyPDF2 import PdfReader
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.units import inch
from reportlab.lib.enums import TA_LEFT

# File paths
PDF_PATH = "/home/karan/Downloads/Normal_Physiology_Answers.pdf"
QUESTION_BANK_PATH = "/home/karan/physiology-exam/question_bank.json"
OUTPUT_PDF_PATH = "/home/karan/physiology-exam/different_questions.pdf"


def extract_questions_from_pdf(pdf_path):
    """Extract questions from PDF file."""
    print(f"Reading PDF: {pdf_path}")
    reader = PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"

    # Try to extract questions (lines starting with numbers or containing question marks)
    questions = []
    lines = text.split("\n")
    current_question = ""

    for line in lines:
        line = line.strip()
        if not line:
            continue

        # Check if line starts a new question (e.g., "1.", "1)", "Q1.", etc.)
        if re.match(r'^\d+[\.\)]\s', line) or re.match(r'^Q\d+[\.\:]', line, re.IGNORECASE):
            if current_question:
                questions.append(current_question)
            current_question = line
        elif current_question:
            current_question += " " + line

    if current_question:
        questions.append(current_question)

    print(f"Extracted {len(questions)} questions from PDF")
    return questions


def load_question_bank():
    """Load our question bank."""
    with open(QUESTION_BANK_PATH) as f:
        data = json.load(f)
    return [q["question"] for q in data]


def normalize_text(text):
    """Normalize text for comparison."""
    text = text.lower().strip()
    text = re.sub(r'\s+', ' ', text)
    text = re.sub(r'[^\w\s]', '', text)
    return text


def compare_questions(pdf_questions, bank_questions):
    """Compare PDF questions with question bank."""
    bank_normalized = {normalize_text(q): q for q in bank_questions}

    # Questions in PDF but NOT in our bank
    different_questions = []
    for q in pdf_questions:
        normalized = normalize_text(q)
        if normalized not in bank_normalized:
            different_questions.append(q)

    return different_questions


def create_pdf(questions, output_path):
    """Create a PDF with the different questions."""
    print(f"Creating PDF with {len(questions)} different questions...")

    doc = SimpleDocTemplate(
        output_path,
        pagesize=letter,
        rightMargin=72,
        leftMargin=72,
        topMargin=72,
        bottomMargin=72
    )

    styles = getSampleStyleSheet()
    story = []

    # Title
    title_style = ParagraphStyle(
        'CustomTitle',
        parent=styles['Heading1'],
        fontSize=18,
        spaceAfter=30,
        alignment=TA_LEFT
    )
    story.append(Paragraph("Different Questions (Not in Our Question Bank)", title_style))
    story.append(Spacer(1, 0.2 * inch))

    # Questions
    question_style = ParagraphStyle(
        'CustomQuestion',
        parent=styles['Normal'],
        fontSize=11,
        spaceAfter=12,
        leftIndent=20
    )

    for i, question in enumerate(questions, 1):
        story.append(Paragraph(f"{i}. {question}", question_style))

    doc.build(story)
    print(f"PDF created: {output_path}")


def main():
    # Load our question bank
    print("Loading question bank...")
    bank_questions = load_question_bank()
    print(f"Question bank: {len(bank_questions)} questions")

    # Extract questions from PDF
    pdf_questions = extract_questions_from_pdf(PDF_PATH)

    # Compare
    print("\nComparing questions...")
    different_questions = compare_questions(pdf_questions, bank_questions)

    print(f"\nResults:")
    print(f"  PDF questions: {len(pdf_questions)}")
    print(f"  Our bank: {len(bank_questions)}")
    print(f"  Different questions: {len(different_questions)}")

    # Create PDF with different questions
    if different_questions:
        create_pdf(different_questions, OUTPUT_PDF_PATH)
    else:
        print("No different questions found!")

    # Save results to JSON for reference
    results = {
        "pdf_questions_count": len(pdf_questions),
        "bank_questions_count": len(bank_questions),
        "different_questions_count": len(different_questions),
        "different_questions": different_questions
    }

    with open("/home/karan/physiology-exam/comparison_results.json", "w") as f:
        json.dump(results, f, indent=2, ensure_ascii=False)

    print(f"\nResults saved to comparison_results.json")


if __name__ == "__main__":
    main()
