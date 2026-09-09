# Editorial cleanup disposition — 9 September 2026

Implementation against `editorial-audit-2026-09-09.md`. No publication/deployment performed by the editorial agent. Shared provenance/schema work is owned by the schema specialist.

| Finding | Disposition |
|---|---|
| 01 | Done: eligibility hero now directly asks candidate to check birth date, qualifications and chosen intake. |
| 02 | Done: career-paths note describes pre-application checks, no internal result state. |
| 03 | Done: exams roadmap replaced with existing service-guide next step. |
| 04 | Done: about publishing checklist replaced with useful guidance description. |
| 05 | Done: about status labels replaced with coverage headings. |
| 06 | Done: withheld-notices statement replaced with linked official portals. |
| 07 | Done: profile review-workflow paragraph replaced with useful SSB-guide orientation; no schema touched. |
| 08 | Delegated: schema specialist owns shared SSB attribution; no editorial-agent patch. |
| 09 | Delegated: schema specialist owns date defaults/review labels. |
| 10 | Done: removed notification monitoring cadence data and column; adjusted table grid from four to three columns. |
| 11 | Done: notifications hero gives direct purpose, no future tracker promise. |
| 12 | Done: removed duplicate tracker-status banner. |
| 13 | Done: removed unconfirmed daily/90-day commitments; tells visitors where to check current facts. |
| 14 | Done: corrections copy invites source-supported reports; no unconfirmed review-date/change-log promise. |
| 15 | Done: source directory is accurately labelled and linked. |
| 16 | Done: coaching FAQ invites discussion of needs/time/session arrangements without inventing counts. |
| 17 | Done: shared contextual CTA focuses on preparation, not a repeated global disclaimer. |
| 18 | Done: Eligibility checklist / Check each requirement before you apply. |
| 19 | Done: career-paths hero directly explains use. |
| 20 | Done: natural SSB/AFSB difference answer retains entry-specific call-up caution. |
| 21 | Done: one clear example-provenance notice retained at section level; duplicate per-card badges removed. |
| 22 | Delegated: schema specialist owns credentials-box provenance wording. |
| 23 | Done: Knowledge Centre says practical advice, not editorial guidance. |
| 24 | Done: first-attempt lede/meta removes production description. |
| 25 | Done: all three guidance articles status now Preparation guide. |
| 26 | Done: WAT support copy promises useful feedback, not instructions to the feedback writer. |
| 27 | Done: GD support copy names practical feedback areas. |

## Checks and safeguards

- Scoped oxfmt completed on all 18 edited files.
- `git diff --check` passed (Windows line-ending warnings only).
- Regression search across public app/lib/components finds none of: unable to determine, Current publishing status, Foundation library, Withheld until, Daily in/around, working-day monitoring, 90 days, Open source tracker, session count advertised, verification in progress, review is recorded, Detailed guides will be.
- `npx tsc --noEmit` passed.
- No credentials changed, no invented session arrangements, review attribution, prices, address or course availability. Existing official-source and medical eligibility safeguards retained.
- No shared template/schema changes made by editorial agent outside the three explicitly allowed components.
