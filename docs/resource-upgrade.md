# Preparation resource upgrade

Implemented 9 September 2026. These are original academy learning resources, not official selection materials. No expert-review claim, address, selection guarantee or eligibility decision is included.

## Routes and assets

| HTML route | Download |
| --- | --- |
| `/resources/personal-interview-worksheet/` | `/resources/personal-interview-worksheet.pdf` |
| `/resources/self-description-reflection/` | `/resources/self-description-reflection.pdf` |
| `/resources/group-discussion-practice/` | `/resources/group-discussion-practice.pdf` |
| `/resources/nda-preparation-planner/` | `/resources/nda-preparation-planner.pdf` |

Each HTML page has its own title, description and canonical, an introduction, three usage steps, six working prompts, review advice, a next step and related guide/consultation links. The Print worksheet action prints the working page without the site header, footer or navigation. Download PDF serves a two-page A4 document: guidance followed by lined working notes. The library now links to both the HTML page and PDF. Existing `.txt` assets remain unchanged for backwards compatibility.

Content is held in `app/resources/worksheets.json`. Rebuild PDFs with the available ReportLab Python runtime using `docs/build-resource-pdfs.py`. Final PDFs intentionally live in `public/resources/` for static hosting.

## Verification

- Four PDF files generated with descriptive document titles and March Ahead Academy as organisational author.
- All eight pages rendered through Poppler and visually inspected: readable text, consistent navy/olive/blue header strips, lined response areas, page numbering, and no clipped or overlapping content.
- HTML related-guide targets checked against existing routes.
- The parent agent should run the integrated production build, add the four HTML routes to the sitemap, and verify the print action and PDF responses after deployment.
- No commits, pushes or deployment were performed by the resource agent.
