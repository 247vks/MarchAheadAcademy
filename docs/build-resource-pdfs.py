"""Rebuild the original printable resource PDFs from website worksheet content."""
import json
from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.utils import simpleSplit

ROOT = Path(__file__).resolve().parents[1]
items = json.loads((ROOT / 'app/resources/worksheets.json').read_text(encoding='utf-8'))
OUT = ROOT / 'public/resources'
NAVY = HexColor('#071f3d')
BLUE = HexColor('#397fa8')
OLIVE = HexColor('#4b6228')
GRAY = HexColor('#536371')

def paragraph(c, text, x, y, width, size=10, leading=15, color=GRAY):
    c.setFillColor(color)
    c.setFont('Helvetica', size)
    for line in simpleSplit(text, 'Helvetica', size, width):
        c.drawString(x, y, line)
        y -= leading
    return y

def frame(c, page):
    c.setStrokeColor(OLIVE)
    c.setLineWidth(3)
    c.line(42, 800, 212, 800)
    c.setStrokeColor(NAVY)
    c.line(212, 800, 382, 800)
    c.setStrokeColor(BLUE)
    c.line(382, 800, 553, 800)
    c.setFillColor(NAVY)
    c.setFont('Helvetica-Bold', 11)
    c.drawString(42, 776, 'MARCH AHEAD ACADEMY')
    c.setStrokeColor(HexColor('#d8e1dd'))
    c.setLineWidth(.5)
    c.line(42, 56, 553, 56)
    c.setFont('Helvetica', 8)
    c.setFillColor(GRAY)
    c.drawString(42, 42, 'marchaheadacademy.com | +91 98200 96800')
    c.drawRightString(553, 42, f'{page} / 2')

for item in items:
    c = canvas.Canvas(str(OUT / f"{item['slug']}.pdf"), pagesize=(595.28, 841.89))
    c.setTitle(item['title'] + ' | March Ahead Academy')
    c.setAuthor('March Ahead Academy')
    frame(c, 1)
    c.setFont('Helvetica-Bold', 21)
    c.setFillColor(NAVY)
    y = 739
    for line in simpleSplit(item['title'], 'Helvetica-Bold', 21, 510):
        c.drawString(42, y, line)
        y -= 26
    y = paragraph(c, item['intro'], 42, y - 8, 510)
    c.setFillColor(OLIVE)
    c.setFont('Helvetica-Bold', 12)
    c.drawString(42, y - 14, 'HOW TO USE THIS WORKSHEET')
    y -= 36
    for i, step in enumerate(item['steps'], 1):
        y = paragraph(c, f'{i}. {step}', 42, y, 510) - 10
    c.setFillColor(NAVY)
    c.setFont('Helvetica-Bold', 12)
    c.drawString(42, y - 6, 'Review your practice')
    y = paragraph(c, item['review'], 42, y - 28, 510)
    c.setFont('Helvetica-Bold', 12)
    c.setFillColor(NAVY)
    c.drawString(42, y - 15, 'Make your next step specific')
    y = paragraph(c, item['next'], 42, y - 37, 510)
    paragraph(c, 'Original academy learning tool. Not an official test paper or selection prediction. Keep personal notes private.', 42, 115, 510, 9, 13)
    c.showPage()
    frame(c, 2)
    c.setFillColor(NAVY)
    c.setFont('Helvetica-Bold', 18)
    c.drawString(42, 742, 'Your working notes')
    paragraph(c, item['title'] + ' | Complete in your own words.', 42, 721, 510, 10)
    y = 687
    for i, prompt in enumerate(item['prompts'], 1):
        paragraph(c, f'{i}. {prompt}', 42, y, 510, 10, 14, NAVY)
        c.setStrokeColor(HexColor('#cbd5d0'))
        c.setLineWidth(.5)
        for offset in (34, 52, 70):
            c.line(42, y-offset, 553, y-offset)
        y -= 98
    c.save()
    print(OUT / f"{item['slug']}.pdf")
