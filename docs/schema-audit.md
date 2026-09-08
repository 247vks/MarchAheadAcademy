# Structured-data audit

Audit date: 9 September 2026. Scope: actual exported HTML, HTTP responses from the live site, and the source generating the markup. This is not a claim that Google's Rich Results Test or Search Console validation passed.

## Observations before this change

All four sampled live URLs returned HTTP 200: `/`, `/selection/ssb/`, `/selection/ssb/srt/`, and `/authors/cdr-sulakshan-kumar-sharma/`.

Each response and each corresponding existing `out` HTML file contained **zero direct `application/ld+json` script elements**. Next.js `Script` serialized the data in its hydration payload for later insertion. This does not prove Google cannot render it, but is unnecessary dependence on client execution for static data.

| Entity                                 | Source/output finding                                                                                           | Action                                                                                                                                              |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Organization / EducationalOrganization | Shared layout defines one stable `/#organization`, visible academy name, email and telephone; no public address | Keep identity and privacy; output native server-rendered script                                                                                     |
| WebSite                                | Shared `/#website` links publisher to organization                                                              | Keep                                                                                                                                                |
| Person                                 | Absent on the expert profile despite substantial visible biography                                              | Add a profile-scoped Person and ProfilePage with stable ID, name, URL, director role and organization relationship; only visible biographical facts |
| Article                                | Guide component attributes authorship/publishing to academy organization, not Cdr Sharma                        | Retain until genuine individual contribution/review is recorded                                                                                     |
| BreadcrumbList                         | Guide schema only Home → article, whereas SRT and other child guides visibly show Home → SSB guide → topic      | Supply matching visible breadcrumb labels and paths from template                                                                                   |
| FAQPage                                | SSB template renders the same question/answer data in visible expandable details and schema                     | Semantically appropriate; no Google FAQ rich-result promise                                                                                         |
| Course                                 | No defined curriculum/session package represented in current source, and no Course node                         | Correct omission; do not manufacture course offers or fees                                                                                          |

## Bounded fix implemented

`components/guide-structured-data.tsx` now emits a native server-rendered JSON-LD script, escapes `<` in JSON, and accepts explicit breadcrumb entries. Defaults preserve existing callers. No Person author/reviewer claims were added.

Parent integration required: provide the breadcrumb array from `SsbGuidePage` using its visible labels; apply the same native-script change in root layout; add factual Person/ProfilePage data on the biography. These files are outside this specialist's ownership and have been reported to the coordinating developer.

## Dates and attribution

The guide default `dateModified` is 2026-09-06, with some explicit guide overrides. Do not automatically stamp the build date or label every article reviewed by the expert. Introduce an editorial involvement register with article URL, contribution type, approval date and reviewer confirmation. `reviewedBy` belongs to the WebPage node under Schema.org, rather than being blindly added to Article. Link actual authored/reviewed articles from the expert profile only when involvement is recorded.

The visible biography explicitly says a page is described as reviewed by Cdr Sharma only after review is recorded. Current organization attribution is therefore safer than inventing Person authorship.

## Tests completed

- Live HTTP 200 and initial-HTML JSON-LD counts for the four sample URLs above.
- Existing export inspection on the same four pages.
- Isolated server rendering of the edited guide component using TypeScript transpilation and React DOM server: JSON parses; explicit three-level breadcrumb positions present; FAQ generated; organization author unchanged; injected `</script>` text escaped safely.
- Full export and post-deployment verification remain coordinator integration checks, not yet claimed here.

## Current primary guidance

- [Google structured-data policies](https://developers.google.com/search/docs/appearance/structured-data/sd-policies): markup must represent visible page content; validity does not guarantee search features.
- [Google Article guidance](https://developers.google.com/search/docs/appearance/structured-data/article): clear author identity and profile links are useful; attribute accurately.
- [Google's current documentation changelog](https://developers.google.com/search/updates): FAQ rich results stopped appearing on 7 May 2026 and FAQ feature documentation was removed in June 2026. Earlier advice about eligibility being limited to government/health sites is now outdated.
- [Schema.org reviewedBy](https://schema.org/reviewedBy): property applies to WebPage and accepts Organization or Person.

## Acceptance checks after integration

Parse native JSON-LD from a fresh production export and live responses; compare breadcrumb labels and FAQ text to visible content; verify entity IDs resolve consistently; check public address remains absent; verify no unsupported Course, review, rating or Person authorship claims. Run an available structured-data validator and separately record its actual result, rather than inferring it from a successful build.
