import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, GraduationCap } from 'lucide-react';
import { ContactBand } from '@/components/contact-band';
import { SiteFooter, SiteHeader } from '@/components/authority-shell';

export const metadata: Metadata = {
  title: 'Defence Exams and Entries | March Ahead Academy',
  description:
    'Understand NDA, CDS and AFCAT pathways and the official notifications that control each examination.',
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
            Understand the route behind the examination.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Compare purpose, education stage and selection pathway before
            checking the exact eligibility rules in the current official notice.
          </p>
        </div>
      </section>
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
      <ContactBand />
      <SiteFooter />
    </main>
  );
}
