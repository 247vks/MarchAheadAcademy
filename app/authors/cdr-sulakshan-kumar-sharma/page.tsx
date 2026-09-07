import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  Atom,
  Anchor,
  Building2,
  Presentation,
  Brain,
  ClipboardCheck,
  MessagesSquare,
  BookOpenCheck,
  GraduationCap,
  ShieldCheck,
} from 'lucide-react';
import { ContactBand } from '@/components/contact-band';
import { SiteFooter, SiteHeader } from '@/components/authority-shell';

export const metadata: Metadata = {
  alternates: { canonical: '/authors/cdr-sulakshan-kumar-sharma' },
  title: 'Cdr Sulakshan Kumar Sharma (Retd) | March Ahead Academy',
  description:
    'Qualifications and professional experience behind Cdr Sulakshan Kumar Sharma’s defence-career and SSB guidance at March Ahead Academy.',
};

const qualifications = [
  'MSc Psychology — First Class',
  'Psychologist’s course — Defence Institute of Psychological Research (DIPR)',
  'Postgraduate Diploma in Guidance and Counselling',
  'MEd and BEd — First Class',
  'MSc Defence Studies — A Grade',
  'MSc Physics/Electronics and BSc Chemistry, Physics and Mathematics — First Class',
];

const qualificationIcons = [
  Brain,
  ClipboardCheck,
  MessagesSquare,
  GraduationCap,
  ShieldCheck,
  Atom,
];

const roles = [
  [
    'National Defence Academy',
    'Taught BSc classes for Army, Navy and Air Force cadets for four years.',
  ],
  [
    'Naval College of Engineering, INS Shivaji',
    'Headed Basic Sciences and taught mathematics, physics and naval orientation to BTech classes for three years.',
  ],
  [
    'Sailors Training Institute, INS Mandovi',
    'Served as Chief Instructor for three years, planning and overseeing recurring sailor training.',
  ],
  [
    'Headquarters, Western Naval Command',
    'Served for five years in education planning and execution for naval personnel, including teaching mathematics, English and general science.',
  ],
  [
    'Naval Selection Centre, Bangalore',
    'Served for three years as Senior Service Psychologist in officer selection involving Indian Army, Indian Navy and Indian Air Force candidates.',
  ],
  [
    'Other education and training roles',
    'Taught science, electronics, psychology, communication, ethics and trainer development across naval, academic and professional settings.',
  ],
] as const;

const roleIcons = [GraduationCap, Atom, Anchor, Building2, Brain, Presentation];

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#0a1e33]">
      <SiteHeader />
      <section className="command-blue text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="text-xs font-bold tracking-[.18em] text-[#9bd1ea] uppercase">
            Academy director · Expert contributor
          </p>
          <h1 className="mt-5 max-w-4xl font-heading text-5xl leading-tight sm:text-6xl">
            Cdr Sulakshan Kumar Sharma (Retd)
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Military educator, psychologist and director of March Ahead Academy,
            bringing a long view of learning, selection and responsible career
            preparation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="section-kicker">Experience at a glance</p>
            <dl className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {[
                ['32 years', 'Military service'],
                ['57 years', 'Teaching experience'],
                [
                  '4.5 years',
                  'Independent Indian Navy and Army recruitment experience',
                ],
                ['3 years', 'SSB psychologist experience'],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="border-l-4 border-[#397fa8] bg-[#f8faf9] p-5"
                >
                  <dt className="font-heading text-3xl">{value}</dt>
                  <dd className="mt-1 text-sm leading-6 text-[#5c6974]">
                    {label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <article>
            <p className="section-kicker">Professional perspective</p>
            <h2 className="mt-3 font-heading text-4xl">
              Education across the candidate journey
            </h2>
            <div className="mt-6 space-y-5 leading-8 text-[#536371]">
              <p>
                Cdr Sharma’s experience connects classroom teaching,
                institutional training, education planning, candidate
                development and officer selection. That combination informs
                March Ahead Academy’s emphasis on understanding the career
                before choosing an examination and developing the person rather
                than rehearsing a performance.
              </p>
              <p>
                His historical roles include teaching tri-service cadets at the
                National Defence Academy, leading basic-sciences education at
                the Naval College of Engineering, planning training for sailors
                and serving as Senior Service Psychologist at the Naval
                Selection Centre in Bangalore.
              </p>
              <p>
                On this website, official notifications and service sources
                control eligibility, examination and current-intake facts. Cdr
                Sharma’s contribution is identified as expert perspective. A
                page will be described as reviewed by him only after that review
                is recorded.
              </p>
            </div>
          </article>
        </div>

        <section className="mt-16 border-y border-[#d8e0dc] py-12">
          <div className="grid gap-9 lg:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 text-[#397fa8]">
                <GraduationCap size={19} />
                <p className="text-xs font-bold tracking-[.15em] uppercase">
                  Selected qualifications
                </p>
              </div>
              <ul className="mt-5 grid gap-3">
                {qualifications.map((item, index) => {
                  const Icon = qualificationIcons[index];
                  return (
                    <li
                      key={item}
                      className="flex items-start gap-3 border border-[#dfe5e2] bg-white p-4 text-sm leading-6"
                    >
                      <Icon
                        size={21}
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-[#397fa8]"
                      />
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-2 text-[#4b6228]">
                <ShieldCheck size={19} />
                <p className="text-xs font-bold tracking-[.15em] uppercase">
                  Areas of contribution
                </p>
              </div>
              <ul className="mt-5 grid gap-3 text-sm leading-6">
                {[
                  'Defence-career orientation and informed entry choice',
                  'Ethical familiarisation with SSB and AFSB settings',
                  'Psychology-informed self-reflection and candidate development',
                  'Communication, responsibility and trainer development',
                  'Science and mathematics education for school, undergraduate and technical learners',
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <BookOpenCheck
                      size={17}
                      className="mt-1 shrink-0 text-[#4b6228]"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <p className="section-kicker">Selected professional history</p>
          <h2 className="mt-3 font-heading text-4xl">
            Roles relevant to March Ahead Academy’s work
          </h2>
          <div className="mt-7 grid gap-px overflow-hidden border border-[#d8e0dc] bg-[#d8e0dc] md:grid-cols-2">
            {roles.map(([title, copy], index) => {
              const Icon = roleIcons[index];
              return (
                <article key={title} className="bg-white p-6">
                  <div className="flex items-start gap-3">
                    <Icon
                      size={23}
                      aria-hidden="true"
                      className="mt-0.5 shrink-0 text-[#397fa8]"
                    />
                    <h3 className="font-heading text-xl">{title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-[#5c6974]">
                    {copy}
                  </p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="mt-16 bg-[#071f3d] p-7 text-white md:p-9">
          <p className="text-xs font-bold tracking-[.15em] text-[#9bd1ea] uppercase">
            Explore his subject area
          </p>
          <h2 className="mt-3 font-heading text-3xl">
            Ethical SSB preparation
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-300">
            The SSB library distinguishes official process information from
            academy-created illustrative practice and never promises
            confidential methods or selection.
          </p>
          <Link
            href="/selection/ssb"
            className="mt-6 inline-flex items-center gap-2 bg-[#77b9da] px-5 py-3 text-sm font-bold text-[#071f3d]"
          >
            Open the SSB guide <ArrowRight size={15} />
          </Link>
        </section>
      </section>
      <ContactBand />
      <SiteFooter />
    </main>
  );
}
