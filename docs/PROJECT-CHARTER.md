# Project charter

## Objective

Make March Ahead Academy a trusted independent authority for understanding and preparing for careers in India's Defence Forces.

The academy will earn authority through accurate structured guidance, transparent sourcing, credible expert review, useful tools, and consistent editorial quality.

## Primary audiences

1. Students aged 15–24 exploring viable entry routes.
2. Parents evaluating legitimacy, safety, career prospects, and preparation quality.
3. Repeat and serious candidates preparing for written examinations, SSB/AFSB, interviews, medicals, and physical standards.
4. Later: schools, colleges, NCC units, and institutional partners.

## Scope discipline

The core site covers the Indian Army, Indian Navy, and Indian Air Force. Coast Guard, CAPFs, Assam Rifles, and other uniformed services may be covered later in a clearly separate section. The site is independent and must never imply affiliation with the Ministry of Defence, UPSC, or a service headquarters.

## Initial information architecture

- `/` — authority-led home and route discovery
- `/careers` — career decision hub
- `/careers/after-10th`, `/after-12th`, `/after-graduation`, `/for-women`, `/technical`
- `/forces/army`, `/forces/navy`, `/forces/air-force`
- `/exams/nda`, `/exams/cds`, `/exams/afcat`
- `/eligibility` — entry finder and eligibility guidance
- `/selection/ssb` — selection and SSB hub
- `/notifications` — dated official-source ledger
- `/about`, `/editorial-policy`, `/fact-checking-policy`, `/corrections`, `/disclaimer`, `/contact`

## Editorial standard

Source priority:

1. Current official notification and corrigenda
2. Official recruitment portal
3. UPSC, Ministry of Defence, or service page
4. Official academy or training institution page

Every page containing volatile facts should store and display:

- official source URL and notification/cycle
- effective date and last-reviewed date
- named author and qualified reviewer
- correction/addendum links
- a reminder that the active notification controls

Exact date-of-birth windows must take precedence over approximate age summaries. Gender availability, commission type, vacancies, physical and medical standards, and entry categories are batch-dependent unless an official source proves otherwise.

## Phased roadmap

### Phase 1 — Local authority MVP

- Homepage and career finder
- Service and qualification hubs
- NDA, CDS, and AFCAT cornerstone guides
- Eligibility, SSB, notifications, and trust-policy pages
- Portable Markdown/JSON content model
- Responsive and accessible local build

### Phase 2 — Credibility engine

- Dated notification tracker and corrections log
- Exam and SSB preparation clusters
- Search, filters, FAQs, named authors, and structured data
- Editorial review workflow and analytics plan

### Phase 3 — Personalisation and operations

- Candidate profiles, saved pathways, and preparation plans
- Counselling workflow and lead attribution
- Hindi and additional languages based on measured demand

### Phase 4 — Domain and AWS

- Domain, HTTPS, canonical URLs, sitemap, and search-console setup
- Static assets through S3/CloudFront where appropriate
- API workloads through Lambda/API Gateway or ECS based on measured needs
- Managed data storage only when user accounts and operational workflows justify it
- Route 53, ACM, WAF, CloudWatch, backups, least-privilege IAM, and CI/CD

## Success measures

- Route-finder completions and useful career-page engagement
- Qualified counselling enquiries rather than raw lead volume
- Source freshness and correction turnaround
- Organic discovery for specific entry and eligibility questions after launch
- Strong performance on mid-range mobile devices and slower connections
