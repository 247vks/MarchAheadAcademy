# Article/schema consistency — 9 September 2026

## Implemented

- Removed the invented shared fallback `dateModified` from guide JSON-LD. Added distinct optional `datePublished`.
- AuthorityPage now labels explicit publication dates as publication, not review or modification. No fallback review date is displayed.
- SSB template no longer presents legacy `reviewedAt` or `modifiedAt` fields as verified article review/update evidence. These fields remain accepted for source compatibility but are not output by the template.
- Three guidance articles have explicit 2026-09-09 publication metadata. Git addition record `51ed316`, author timestamp `2026-09-09T12:03:38+05:30`, is consistent with that day. This is repository provenance, not independent proof of a deployment timestamp or expert approval. Other dates are omitted rather than guessed.
- Organization remains the Article author and publisher. Visible SSB byline says “By March Ahead Academy”; AuthorityPage identifies March Ahead Academy in its metadata strip.
- Credentials box is labelled “Academy expertise” and states relevant service history only. Shared callers no longer pass prose implying Cdr Sharma's involvement in every article. No Person review/author relationship was invented.
- Shared breadcrumb builder powers both visible and JSON-LD breadcrumbs: Home → Knowledge Centre → relevant SSB/Psychology/Exams hub → article. Existing article URLs remain unchanged.

## Existing identity verified

Root layout already uses native JSON-LD with Organization/EducationalOrganization `/#organization` and WebSite; it has no public street address. Expert profile already defines ProfilePage → Person `/#cdr-sharma`, with `worksFor` pointing to the same Organization. Those existing records were inspected and retained without unnecessary changes. They do not claim authorship of every guide. No Course record is fabricated.

## Tests

Native React server rendering of GuideStructuredData passed JSON parsing for both absent publication metadata and an explicit 2026-09-09 publication date. No fallback modification date is emitted; four-level supplied breadcrumbs retain positions. Shared breadcrumb rendering and schema both consume the same array builder, preventing independent hierarchy drift.

Formatting/lint targeted to the four changed components and metadata helper. Full export and post-deployment live verification are coordinator steps; no deployment or Google validation is claimed in this report.

## Remaining limitations

- A commit timestamp is not an article-specific substantive review record. No expert review dates were inferred from it.
- Historic SSB data fields can be removed from source in a later cleanup; they are deliberately not repurposed as publication dates.
- When genuine authorship or review is documented, add it through an explicit record and matching visible attribution; do not infer it from expertise.
- FAQPage markup is retained only for visible matching FAQs. It does not promise Google FAQ rich results (retired in May 2026).
- Original article URLs/canonicals are preserved; any pre-existing trailing-slash canonical normalization is outside this bounded consistency pass.
