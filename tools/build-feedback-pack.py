from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.utils import simpleSplit

target = Path('output/pdf/sample-feedback-pack.pdf')
target.parent.mkdir(parents=True, exist_ok=True)
c = canvas.Canvas(str(target), pagesize=A4)
c.setTitle('Sample SSB Preparation Feedback Pack | March Ahead Academy')
c.setAuthor('March Ahead Academy')
width, height = A4
def start(number, title, subtitle):
    c.setFillColor(HexColor('#30471f')); c.rect(42, height-45, width-84, 3, fill=1, stroke=0)
    c.setFont('Helvetica-Bold', 11); c.drawString(42, height-68, 'MARCH AHEAD ACADEMY')
    c.setFillColor(HexColor('#0a1e33')); c.setFont('Helvetica-Bold', 21); c.drawString(42, height-110, title)
    c.setFont('Helvetica', 10); c.drawString(42, height-131, subtitle)
    c.setFont('Helvetica', 9); c.drawString(42, 30, 'marchaheadacademy.com | +91 98200 96800')
    c.drawRightString(width-42, 30, f'{number} / 3')
def block(y, heading, text):
    c.setFillColor(HexColor('#30471f')); c.setFont('Helvetica-Bold', 12); c.drawString(42,y,heading)
    c.setFillColor(HexColor('#0a1e33')); c.setFont('Helvetica', 11)
    lines = simpleSplit(text, 'Helvetica', 11, width-84)
    for i,line in enumerate(lines): c.drawString(42,y-21-i*16,line)
    return y-21-len(lines)*16-23

start(1,'A sample preparation review','Illustrative communication exercise - not a psychological assessment')
y=height-174
y=block(y,'Read this first','This invented example shows how preparation feedback can lead to a practical action. It is not a real candidate case, an assessor report, a model answer or a prediction of selection. It does not represent a psychological assessment by Commander Sharma.')
y=block(y,'Practice prompt','Describe a time you helped a team finish a task.')
y=block(y,'Illustrative response','We organised a college event. We worked hard and it went well.')
y=block(y,'Observation','The account does not yet explain the speaker\'s own action or what "went well" means. This comments on the account, not the candidate\'s personality.')
y=block(y,'Questions to explore','What did you personally do? Who handled the other tasks? What difficulty arose? What outcome can you describe accurately?')
block(y,'What not to do','Do not add an impressive leadership claim or copy a polished answer. Revisit the facts and practise explaining a different genuine experience.')
c.showPage()
start(2,'Turn feedback into practice','An illustrative follow-up plan - adapt it to your own needs')
y=height-174
for heading,text in [
('1. Retain your original attempt','Keep the prompt and your first response. Record the conditions, including whether the activity was timed.'),
('2. Clarify the observation','Ask which part of the account was unclear. Distinguish a factual correction from a preference about style.'),
('3. Choose one action','For this example: distinguish your own contribution from the team result, without taking credit for others\' work.'),
('4. Use fresh material','Discuss a different experience from education, work or everyday responsibility. Do not rehearse the same revised answer indefinitely.'),
('5. Check and continue','Ask a listener to describe your role. Note what remains unclear and bring that question to your next review.'),
('Coaching arrangements','Actual Academy feedback may be written or verbal, with an individual follow-up plan. Agree scope and format before starting. This sample is not a promised report template. No selection score or guarantee is provided.')]: y=block(y,heading,text)
c.showPage()
start(3,'Your preparation review log','Print and write - keep personal details private')
y=height-174
for heading in ['Exercise, date and practice conditions','What did the reviewer observe?','What needs clarification?','One next action to try','Fresh practice: what did I attempt?','Follow-up: what changed and what remains?']:
    c.setFont('Helvetica-Bold',11); c.setFillColor(HexColor('#30471f')); c.drawString(42,y,heading)
    c.setStrokeColor(HexColor('#b7c2c7'))
    for offset in [24,44]: c.line(42,y-offset,width-42,y-offset)
    y-=88
c.save()
print(target.resolve())
