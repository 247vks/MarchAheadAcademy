import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { ContactBand } from '@/components/contact-band';
import { SiteFooter, SiteHeader } from '@/components/authority-shell';
import { ExamComparison } from '@/components/decision-visuals';
import { examHubGroups } from '@/lib/exam-guide-additions';

export const metadata: Metadata = {
  alternates: { canonical: '/exams' },
  title: 'Indian Defence Exams & Officer Entry Routes: NDA, CDS, AFCAT & More',
  description:
    'Explore NDA, CDS and AFCAT preparation, distinguish other officer-entry routes and Agniveer pathways, and find official recruitment sources.',
};
const exams = [
  [
    'NDA & NA',
    'A Class 12-stage pathway to Army, Navy and Air Force officer training routes.',
    '/exams/nda',
    '#4b6228',
  ],
  [
    'CDS',
    'A graduate pathway linked to notified academy and commission choices.',
    '/exams/cds',
    '#071f3d',
  ],
  [
    'AFCAT',
    'An Air Force officer-entry examination for notified Flying and Ground Duty branches.',
    '/exams/afcat',
    '#397fa8',
  ],
] as const;
export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#0a1e33]">
      <SiteHeader />
      <section className="command-blue text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
          <div className="flex items-center gap-3 text-xs font-bold tracking-[.18em] text-[#9bd1ea] uppercase">
            <GraduationCap size={17} />
            Exams and entries
          </div>
          <h1 className="mt-5 font-heading text-5xl sm:text-6xl">
            Indian Defence Exams & Officer Entry Routes
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Compare purpose, education stage and selection pathway before
            checking the exact eligibility rules in the current official notice.
          </p>
        </div>
      </section>
      <ExamComparison />
      <section className="mx-auto grid max-w-6xl gap-5 px-5 py-16 md:grid-cols-3 lg:px-8 lg:py-20">
        {exams.map(([title, copy, href, color], index) => (
          <Link
            key={href}
            href={href}
            className="group border border-[#dbe2de] border-t-4 bg-white p-7"
            style={{ borderTopColor: color }}
          >
            <span
              className="font-heading text-5xl"
              style={{ color }}
            >{`0${index + 1}`}</span>
            <h2 className="mt-7 font-heading text-3xl">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-[#5c6974]">{copy}</p>
            <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold">
              Open guide <ArrowRight size={15} />
            </span>
          </Link>
        ))}
      </section>
      <section
        className="mx-auto max-w-6xl px-5 pb-12 lg:px-8"
        aria-labelledby="entry-route-heading"
      >
        <h2 id="entry-route-heading" className="font-heading text-3xl">
          Choose the career route, then the preparation.
        </h2>
        <p className="mt-4 max-w-3xl leading-8 text-[#536371]">
          An examination is one part of an entry pathway. Start with your
          education stage and the kind of service career you want, then
          investigate the relevant selection process. Other officer entries and
          Agniveer should not be treated as extra versions of NDA, CDS or AFCAT.
        </p>
        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {examHubGroups.map((group) => (
            <article
              key={group.title}
              className="flex flex-col border-t-4 border-[#397fa8] bg-white p-6 shadow-sm"
            >
              <GraduationCap
                size={24}
                className="text-[#397fa8]"
                aria-hidden="true"
              />
              <h3 className="mt-4 font-heading text-xl">{group.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[#536371]">
                {group.description}
              </p>
              <div className="mt-auto grid gap-3 pt-6">
                {group.links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-link inline-flex items-center gap-2 text-sm font-bold"
                  >
                    {link.label}
                    <ArrowRight size={15} aria-hidden="true" />
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
        <section
          className="mt-10 border-t border-[#dbe2de] pt-7"
          aria-labelledby="official-entry-sources"
        >
          <h2 id="official-entry-sources" className="font-heading text-2xl">
            Go to the source for the current entry
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#536371]">
            Use the issuing authority’s current notice for application dates,
            qualifications, vacancies and selection requirements. A route being
            listed here does not mean applications are open.
          </p>
          <div className="mt-5 flex flex-wrap gap-5 text-sm font-bold">
            <a
              className="text-link"
              href="https://www.upsc.gov.in/exams-related-info/exam-notification"
              target="_blank"
              rel="noreferrer"
            >
              UPSC notifications
            </a>
            <a
              className="text-link"
              href="https://joinindianarmy.nic.in/"
              target="_blank"
              rel="noreferrer"
            >
              Join Indian Army
            </a>
            <a
              className="text-link"
              href="https://www.joinindiannavy.gov.in/"
              target="_blank"
              rel="noreferrer"
            >
              Join Indian Navy
            </a>
            <a
              className="text-link"
              href="https://www.careerairforce.gov.in/"
              target="_blank"
              rel="noreferrer"
            >
              Indian Air Force careers
            </a>
          </div>
        </section>
      </section>
      <ContactBand />
      <SiteFooter />
    </main>
  );
}
