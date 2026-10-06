# Implementation brief reconciliation — 7 October 2026

## Scope and architecture

The supplied implementation brief is reconciled with the deployed site, not treated as an instruction to recreate existing URLs. Retain `/how-to-choose-ssb-coaching/` and `/academy-evidence/`. No redirects, address disclosure, new prices, packages, guarantees or invented expert reviews.

## This release

- `/ssb-coaching/`: consultation, Individual Preparation Review within coaching, and personal mentoring made explicit; visible limitations; matching Service entities (not fabricated Course, pricing or ratings).
- `/consultation/`: clarify the starting discussion and link to the service choices.
- Existing psychologist-assessment article: contextual preparation overview, repeat-candidate section, concise questions; preserve approved contributor passage and Organization authorship. Cross-link TAT/WAT/SRT/SD, SSB, coaching, profile and planner.
- `/resources/ssb-preparation-planner/`: distinct, account-free interactive weekly allocation tool; first/repeat context, short-window handling, input validation, print/save-as-PDF. No eligibility or recommendation score, storage or input transmission.
- Resources/Knowledge Centre discovery links and sitemap date registry updated.
- Existing Entry Finder retained as education-stage exploration, with explicit non-determination wording and official-source directory link. No stale numerical eligibility rules added.
- Consent-gated tool events, service interest, consultation CTA, resource downloads and article-to-service navigation. Existing contact clicks retained separately.
- Privacy description updated to reflect actual tool behaviour.

## Event contract

Custom events: `preparation_tool_start`, `preparation_tool_complete`, `preparation_tool_print`, `service_interest`, `consultation_cta`, `resource_download`, `article_to_service`.
Only `content_group` (fixed allowlisted categories), query-free `page_location` and transport are passed. Tool hours/days/focus/attempt, worksheet notes, identities, enquiry text and contact destinations are excluded. No event is a booking or selection result. Existing `contact_intent` stays unchanged. GA4 reporting dimensions/property settings are not changed in this release; confirm reporting needs in GA4 before adding dimensions. Do not count automatic file-download tracking and this custom resource event as separate conversions.

## Evidence-dependent rollout items

- Candidate Stories: do not publish an empty route or claim 'verified' without records. Use the evidence checklist below for actual submissions.
- Expert videos: require recording, publication consent, transcript approval, real upload date and thumbnail. Only then add VideoObject matching visible material. No synthetic Commander video or first-person scripts.
- New expert articles: source exact statements from approved interview input; do not expand three approved passages into whole-article authorship/review.
- Psychology Review as a standalone paid product: owner must confirm scope, schedule and commercial terms; currently described only within confirmed one-to-one coaching.
- Community evidence: existing July 26, 2025 event remains; institution name and external host link await input. No institution inferred from image.
- Exam decision expansion: existing NDA/CDS/AFCAT and PI/GTO/OLQ guides retained; further age/subject/branch-specific facts require currently accessible controlling official notices. No generic duplicate pages created to satisfy headings in the brief.
- External outreach, videos, testimonials, rankings monitoring and Search Console account actions are not claimed as completed by this code release.

## Publication evidence checklist (internal only)

For a candidate story: category, exact candidate-approved wording, claimed result/cycle where relevant, privately checked supporting record, checker/date, consent for name/photo/quote, permitted anonymisation, final copy approval and withdrawal contact. Store private documents outside Git/public assets. Avoid identity numbers, marksheets and unneeded personal data. Publish only the approved excerpt and factual context, with no causal promise or invented aggregate success rate. For a minor obtain appropriate guardian consent before publication.

For a community event: confirmed date, institution permission/name, topic, speaker confirmation, image permission, approved caption and genuine host URL if supplied. Do not infer endorsement from attendance.

For expert content: original input, edited passage, approval scope/date, source links, attribution type (contributor/author/reviewer), canonical article and reciprocal profile link. A contributor passage does not imply whole-page review.

## Schema and source notes

Google's FAQ rich result documentation redirects to its updates page; the FAQ feature was retired in May 2026. Existing truthful FAQPage markup is semantic only, not a rich-result promise. No new FAQ markup was added in this batch.
Sources checked: https://schema.org/Service and https://developers.google.com/search/updates . IAF direct pages timed out during this run; no new current eligibility rules or fresh official review dates are claimed from search snippets.

## Release gates

Run production build, existing consent/cluster/authority tests, planner and engagement tests, exported SEO checks and full responsive/link audit. Record actual results and production deployment below after verification. Field Core Web Vitals and Search Console crawl/index status require live reporting and are not inferred from a build or DOM audit.

## Verified local results

- Production static export: successful (106 content pages; Next also lists framework routes).
- `tests/exported-seo.cjs`: 106 sitemap pages pass unique titles/descriptions, canonical consistency, indexability, H1/TOC counts, JSON-LD parsing, internal targets and orphan checks.
- `tests/site-quality.cjs`: 106 pages pass mobile/tablet/desktop overflow, metadata relationships and local links; keyboard skip checks pass.
- `tests/brief-release.cjs`: boundary input cases, allocation totals, stale-plan clearing, print rendering, matching Service entities, opt-in/withdrawal and event payload allowlists pass.
- Existing cookie consent, authority-refinement, approved-insight, psychology-cluster and WebP checks pass.
- Targeted lint passes. Visual review of generated mobile planner and desktop service presentation completed.
- Shared first-load JS remains 103 kB in the build report; no new third-party script or image dependency. This is not a field Core Web Vitals measurement.
- No claims of Search Console indexing, Google rich-result approval, completed bookings or ranking changes.
