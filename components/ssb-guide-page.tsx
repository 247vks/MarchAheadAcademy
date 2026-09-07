import Link from 'next/link';
import { TopicIcon } from '@/components/topic-icon';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react';
import { ContactBand } from '@/components/contact-band';
import { ExpertByline } from '@/components/expert-byline';
import { ContextualGuidance } from '@/components/contextual-guidance';
import {
  Breadcrumbs,
  SiteFooter,
  SiteHeader,
} from '@/components/authority-shell';
import { siteReviewedAt } from '@/lib/site';
import { SsbJourneyMap } from '@/components/decision-visuals';
import { GuideStructuredData } from '@/components/guide-structured-data';

export type SsbGuideData = {
  reviewedAt?: string;
  modifiedAt?: string;
  currentHref: string;
  eyebrow: string;
  title: string;
  lede: string;
  summary: string;
  sections: { title: string; body: string; points?: string[] }[];
  exercise: { title: string; prompt: string; practise: string[] };
  mistakes: string[];
  faqs: { question: string; answer: string }[];
  sources: { label: string; href: string; note: string }[];
  related: { label: string; href: string }[];
};

export function SsbGuidePage({ guide }: { guide: SsbGuideData }) {
  return (
    <main className="min-h-screen bg-white text-[#0a1e33]">
      <GuideStructuredData
        path={guide.currentHref}
        title={guide.title}
        description={guide.lede}
        section="SSB selection"
        faqs={guide.faqs}
        modifiedAt={guide.modifiedAt}
      />
      <SiteHeader />
      <section className="command-blue text-white">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:py-14 lg:px-8 lg:py-18">
          <Breadcrumbs
            parent={
              guide.eyebrow.startsWith('SSB guide') ? 'SSB guide' : undefined
            }
            parentHref={
              guide.eyebrow.startsWith('SSB guide')
                ? '/selection/ssb'
                : undefined
            }
            current={
              guide.eyebrow.startsWith('SSB guide')
                ? guide.eyebrow.replace('SSB guide · ', '')
                : 'SSB overview'
            }
          />
          <p className="text-xs font-bold tracking-[.17em] text-[#9bd1ea] uppercase">
            {guide.eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl font-heading text-4xl leading-tight sm:text-6xl">
            {guide.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {guide.lede}
          </p>
          <div className="mt-8 flex flex-wrap gap-2 text-xs font-semibold text-[#cce7f5]">
            <span className="inline-flex items-center gap-2 border border-[#80a6bd]/50 bg-[#103353] px-4 py-2">
              <ShieldCheck size={15} />
              Evergreen guide · Reviewed {guide.reviewedAt ?? siteReviewedAt}
            </span>
            <Link
              href="/authors/cdr-sulakshan-kumar-sharma"
              className="border border-[#80a6bd]/50 px-4 py-2"
            >
              March Ahead Academy editorial team · Cdr Sharma perspective
            </Link>
            <Link
              href="/editorial-standards"
              className="border border-[#80a6bd]/50 px-4 py-2"
            >
              Sources and corrections
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto grid max-w-5xl gap-8 px-5 py-12 lg:grid-cols-[1fr_260px] lg:gap-10 lg:px-8 lg:py-16">
        <article className="space-y-10 lg:space-y-12">
          <ExpertByline context="Cdr Sharma’s three years of SSB psychologist experience and wider work in military education inform March Ahead Academy’s ethical orientation. Official sources control the published process; no confidential selection material is used." />
          {guide.currentHref === '/selection/ssb' && <SsbJourneyMap />}
          {(guide.currentHref === '/selection/ssb' ||
            guide.currentHref === '/selection/ssb/psychology-tests') && (
            <section aria-labelledby="psychology-guides-heading">
              <h2
                id="psychology-guides-heading"
                className="font-heading text-2xl"
              >
                Explore the psychology tests
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#536371]">
                Understand each exercise, try original practice prompts and
                learn how to review your preparation.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {[
                  ['srt', 'SRT', 'Situation Reaction Test'],
                  ['tat', 'TAT', 'Thematic Apperception Test'],
                  ['wat', 'WAT', 'Word Association Test'],
                  [
                    'self-description',
                    'Self Description',
                    'Reflect on experience and feedback',
                  ],
                ].map(([slug, label, description]) => (
                  <Link
                    key={slug}
                    href={`/selection/ssb/${slug}`}
                    className="linked-panel block border border-[#d8e1dd] bg-white p-5"
                  >
                    <span className="flex items-center justify-between gap-3 font-bold text-[#2f6f94]">
                      {label}
                      <ArrowRight size={17} aria-hidden="true" />
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-[#536371]">
                      {description}
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
          <section aria-labelledby="discussion-interview-heading">
            <h2
              id="discussion-interview-heading"
              className="font-heading text-2xl"
            >
              Group discussion and personal interview
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#536371]">
              Practise exchanging ideas with a group and explaining your own
              experiences in a personal conversation.
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                [
                  'group-discussion',
                  'Group Discussion (GD)',
                  'Original topics, listening and constructive contributions',
                ],
                [
                  'personal-interview',
                  'Personal Interview',
                  'Practice questions, reflection and career motivation',
                ],
              ]
                .filter(
                  ([slug]) => guide.currentHref !== `/selection/ssb/${slug}`,
                )
                .map(([slug, label, description]) => (
                  <Link
                    key={slug}
                    href={`/selection/ssb/${slug}`}
                    className="linked-panel block border border-[#d8e1dd] bg-white p-5"
                  >
                    <span className="flex items-center justify-between gap-3 font-bold text-[#2f6f94]">
                      {label}
                      <ArrowRight size={17} aria-hidden="true" />
                    </span>
                    <span className="mt-2 block text-sm leading-6 text-[#536371]">
                      {description}
                    </span>
                  </Link>
                ))}
            </div>
          </section>
          <nav
            aria-label="On this page"
            className="border-y border-[#d9e3df] py-4"
          >
            <p className="text-xs font-bold tracking-[.15em] text-[#397fa8] uppercase">
              On this page
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
              <a className="text-link" href="#guide-sections">
                Guide
              </a>
              <a className="text-link" href="#practice">
                Practice
              </a>
              <a className="text-link" href="#common-mistakes">
                Common mistakes
              </a>
              <a className="text-link" href="#frequently-asked-questions">
                FAQs
              </a>
              <a className="text-link" href="#official-sources">
                Official sources
              </a>
            </div>
          </nav>
          <section className="border-l-4 border-[#4b6228] bg-[#f8faf9] p-6">
            <p className="text-xs font-bold tracking-[.15em] text-[#4b6228] uppercase">
              The short answer
            </p>
            <p className="mt-3 leading-8">{guide.summary}</p>
          </section>
          <ContextualGuidance topic={guide.title} />

          <div
            id="guide-sections"
            className="scroll-mt-6 space-y-10 lg:space-y-12"
          >
            {guide.sections.map((section, index) => (
              <section
                key={section.title}
                className="border-l-2 border-[#397fa8] pl-6"
              >
                <p className="text-xs font-bold tracking-[.15em] text-[#397fa8] uppercase">
                  0{index + 1}
                </p>
                <h2 className="mt-2 flex items-start gap-3 font-heading text-2xl sm:text-3xl">
                  <TopicIcon topic={section.title} />
                  <span>{section.title}</span>
                </h2>
                <p className="mt-4 leading-8 text-[#536371]">{section.body}</p>
                {section.points && (
                  <ul className="mt-5 grid gap-3">
                    {section.points.map((point) => (
                      <li
                        key={point}
                        className="flex gap-3 border border-[#e0e5e2] bg-[#fafcfb] p-4 text-sm leading-6"
                      >
                        <CheckCircle2
                          size={17}
                          className="mt-1 shrink-0 text-[#4b6228]"
                        />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>

          <section
            id="practice"
            className="scroll-mt-6 border border-[#d6a44b] bg-[#fff9ed] p-7"
          >
            <p className="text-xs font-bold tracking-[.15em] text-[#805b19] uppercase">
              March Ahead Academy illustrative practice
            </p>
            <h2 className="mt-3 font-heading text-3xl">
              {guide.exercise.title}
            </h2>
            <p className="mt-4 leading-8">{guide.exercise.prompt}</p>
            <ul className="mt-5 grid gap-2 text-sm">
              {guide.exercise.practise.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
            <p className="mt-5 border-t border-[#ead29d] pt-4 text-xs leading-5 text-[#6f5017]">
              Created by March Ahead Academy. This is not an official, recalled
              or predictive SSB/AFSB question and is not a model answer.
            </p>
          </section>

          <section id="common-mistakes" className="scroll-mt-6">
            <p className="text-xs font-bold tracking-[.15em] text-[#4b6228] uppercase">
              Common mistakes
            </p>
            <h2 className="mt-2 font-heading text-3xl">
              What gets in the way of useful preparation
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {guide.mistakes.map((item) => (
                <li
                  key={item}
                  className="border-t-2 border-[#4b6228] bg-[#f8faf9] p-5 text-sm leading-6"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section id="frequently-asked-questions" className="scroll-mt-6">
            <p className="text-xs font-bold tracking-[.15em] text-[#397fa8] uppercase">
              Candidate questions
            </p>
            <h2 className="mt-2 font-heading text-3xl">
              Frequently asked questions
            </h2>
            <div className="mt-5 divide-y divide-[#dbe2de] border-y border-[#dbe2de]">
              {guide.faqs.map((item) => (
                <details key={item.question} className="group">
                  <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-4 font-bold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#2f6f94]">
                    <span>{item.question}</span>
                    <ChevronDown
                      size={18}
                      className="shrink-0 text-[#397fa8] transition-transform group-open:rotate-180"
                      aria-hidden="true"
                    />
                  </summary>
                  <p className="max-w-3xl pb-5 text-sm leading-7 text-[#536371]">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </section>

          <section
            id="official-sources"
            className="scroll-mt-6 border-t border-[#cbd3ce] pt-8"
          >
            <h2 className="font-heading text-2xl">Official sources used</h2>
            <p className="mt-2 text-sm leading-6 text-[#5c6974]">
              Official sources describe the process. They do not provide a
              public bank of live assessment material or a formula for
              recommendation.
            </p>
            <div className="mt-4 grid gap-3">
              {guide.sources.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="linked-panel border border-[#cbd3ce] border-l-4 border-l-[#397fa8] bg-[#f9fbfc] p-4"
                >
                  <span className="flex items-center justify-between text-sm font-bold">
                    {source.label}
                    <ExternalLink size={15} />
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-[#687781]">
                    {source.note}
                  </span>
                </a>
              ))}
            </div>
          </section>
        </article>

        <aside>
          <div className="sticky top-6 border-t-4 border-[#397fa8] bg-[#f8faf9] p-5">
            <p className="text-xs font-bold tracking-[.15em] text-[#397fa8] uppercase">
              SSB learning path
            </p>
            <nav className="mt-4 grid">
              {guide.related
                .filter((item) => item.href !== guide.currentHref)
                .map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="linked-panel flex items-center justify-between border-b border-[#dde3df] px-2 py-3 text-sm font-semibold"
                  >
                    {item.label}
                    <ArrowRight size={14} />
                  </Link>
                ))}
            </nav>
            <p className="mt-6 text-xs leading-5 text-[#687781]">
              Familiarity can reduce uncertainty. No coaching provider can
              guarantee recommendation, medical fitness or joining.
            </p>
          </div>
        </aside>
      </div>
      <ContactBand />
      <SiteFooter />
    </main>
  );
}
