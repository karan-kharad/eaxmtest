#!/usr/bin/env python3
"""Generate PDF from question bank JSON."""

import json
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import inch, cm
from reportlab.lib.colors import HexColor, black, white
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle,
    PageBreak, ListFlowable, ListItem
)
from reportlab.lib.enums import TA_LEFT, TA_CENTER

# Load questions
with open('/home/karan/physiology-exam/question_bank.json', 'r') as f:
    questions = json.load(f)

# Find duplicates
seen = {}
duplicates = []
for q in questions:
    qtext = q['question'].strip().lower()
    if qtext in seen:
        duplicates.append((seen[qtext], q['id'], q['question']))
    else:
        seen[qtext] = q['id']

# Create PDF
doc = SimpleDocTemplate(
    '/home/karan/physiology-exam/Physiology_Questions.pdf',
    pagesize=A4,
    rightMargin=72, leftMargin=72,
    topMargin=72, bottomMargin=72
)

# Styles
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(
    name='Question',
    parent=styles['Normal'],
    fontSize=11,
    leading=14,
    spaceAfter=6,
    spaceBefore=12,
    textColor=HexColor('#1a1a2e'),
    fontName='Helvetica-Bold'
))
styles.add(ParagraphStyle(
    name='Option',
    parent=styles['Normal'],
    fontSize=10,
    leading=13,
    leftIndent=20,
    spaceAfter=2,
    textColor=HexColor('#333333')
))
styles.add(ParagraphStyle(
    name='Answer',
    parent=styles['Normal'],
    fontSize=10,
    leading=13,
    leftIndent=20,
    spaceAfter=6,
    textColor=HexColor('#0f3460'),
    fontName='Helvetica-Bold'
))
styles.add(ParagraphStyle(
    name='CustomTitle',
    parent=styles['Title'],
    fontSize=24,
    leading=30,
    spaceAfter=20,
    textColor=HexColor('#1a1a2e'),
    alignment=TA_CENTER
))
styles.add(ParagraphStyle(
    name='Subtitle',
    parent=styles['Normal'],
    fontSize=12,
    leading=16,
    spaceAfter=30,
    textColor=HexColor('#555555'),
    alignment=TA_CENTER
))
styles.add(ParagraphStyle(
    name='SectionHeader',
    parent=styles['Heading1'],
    fontSize=16,
    leading=20,
    spaceAfter=12,
    spaceBefore=20,
    textColor=HexColor('#1a1a2e')
))

story = []

# Title page
story.append(Paragraph("Physiology Question Bank", styles['CustomTitle']))
story.append(Paragraph(f"Total Questions: {len(questions)}", styles['Subtitle']))
story.append(Paragraph(f"Duplicate Questions Found: {len(duplicates)}", styles['Subtitle']))
story.append(Spacer(1, 30))

# Summary table
summary_data = [
    ['Metric', 'Value'],
    ['Total Questions', str(len(questions))],
    ['Unique Questions', str(len(questions) - len(duplicates))],
    ['Duplicate Questions', str(len(duplicates))],
]
summary_table = Table(summary_data, colWidths=[3*inch, 2*inch])
summary_table.setStyle(TableStyle([
    ('BACKGROUND', (0, 0), (-1, 0), HexColor('#1a1a2e')),
    ('TEXTCOLOR', (0, 0), (-1, 0), white),
    ('ALIGN', (0, 0), (-1, -1), 'CENTER'),
    ('FONTNAME', (0, 0), (-1, 0), 'Helvetica-Bold'),
    ('FONTSIZE', (0, 0), (-1, 0), 12),
    ('BOTTOMPADDING', (0, 0), (-1, 0), 12),
    ('BACKGROUND', (0, 1), (-1, -1), HexColor('#f0f0f0')),
    ('GRID', (0, 0), (-1, -1), 1, HexColor('#cccccc')),
    ('FONTNAME', (0, 1), (0, -1), 'Helvetica-Bold'),
    ('FONTSIZE', (0, 1), (-1, -1), 10),
    ('TOPPADDING', (0, 1), (-1, -1), 8),
    ('BOTTOMPADDING', (0, 1), (-1, -1), 8),
]))
story.append(summary_table)
story.append(PageBreak())

# Questions
story.append(Paragraph("Questions", styles['SectionHeader']))
story.append(Spacer(1, 10))

for i, q in enumerate(questions):
    # Question text
    q_num = q['id']
    q_text = q['question']
    story.append(Paragraph(f"Q{q_num}. {q_text}", styles['Question']))

    # Options
    options = q['options']
    correct_idx = q['correct']

    for j, opt in enumerate(options):
        letter = chr(65 + j)  # A, B, C, D
        is_correct = (j == correct_idx)
        prefix = f"{letter}. "
        if is_correct:
            story.append(Paragraph(f"<b>{prefix}{opt}</b> ✓", styles['Answer']))
        else:
            story.append(Paragraph(f"{prefix}{opt}", styles['Option']))

    story.append(Spacer(1, 8))

    # Page break every ~5 questions to avoid overflow
    if (i + 1) % 5 == 0 and i < len(questions) - 1:
        story.append(Spacer(1, 10))

# Duplicates section
if duplicates:
    story.append(PageBreak())
    story.append(Paragraph("Duplicate Questions", styles['SectionHeader']))
    story.append(Spacer(1, 10))

    for orig_id, dup_id, qtext in duplicates:
        story.append(Paragraph(
            f"<b>Question {orig_id}</b> and <b>Question {dup_id}</b> are duplicates:",
            styles['Question']
        ))
        story.append(Paragraph(f'"{qtext}"', styles['Option']))
        story.append(Spacer(1, 8))

# Build PDF
doc.build(story)
print(f"PDF created: /home/karan/physiology-exam/Physiology_Questions.pdf")
print(f"Total questions: {len(questions)}")
print(f"Duplicates found: {len(duplicates)}")
