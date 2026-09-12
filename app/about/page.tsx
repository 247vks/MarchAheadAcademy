import { withPageMetadata } from '@/lib/page-metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BookOpenCheck, ShieldCheck, Users } from 'lucide-react';
import { SiteFooter, SiteHeader } from '@/components/authority-shell';
import { ContactBand } from '@/components/contact-band';

export const metadata: Metadata = withPageMetadata({
  alternates: { canonical: '/about' },
  title: 'About March Ahead Academy',
  description:
    'Why March Ahead Academy exists and how it approaches independent Indian defence career guidance.',
});

const principles = [
  [
    BookOpenCheck,
    'Explain before advising',
    'Candidates should understand the entry, commitment, selection process and official rules before choosing preparation.',
  ],
  [
    ShieldCheck,
    'Evidence before claims',
    'Decision-critical facts must be traced to the current controlling notification or official recruitment authority.',
  ],
  [
    Users,
    'Candidate and parent clarity',
    'We write for informed decisions—not fear, urgency, prestige alone or guaranteed-selection marketing.',
  ],
] as const;

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#0a1e33]">
      <SiteHeader />
      <section className="command-blue text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="text-xs font-bold tracking-[.18em] text-[#9bd1ea] uppercase">
            About March Ahead Academy
          </p>
          <h1 className="mt-5 max-w-4xl font-heading text-5xl leading-tight sm:text-6xl">
            Independent guidance for a consequential career decision.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Our purpose is to help candidates and families understand careers in
            the Indian Army, Indian Navy and Indian Air Force with clarity,
            context and respect for the official process.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <article>
            <p className="section-kicker">Our role</p>
            <h2 className="mt-3 font-heading text-4xl">
              A guide—not a recruitment authority.
            </h2>
            <div className="mt-6 space-y-5 leading-8 text-[#536371]">
              <p>
                March Ahead Academy is an independent education and
                career-guidance organisation. We organise complex entry routes,
                explain selection systems and help readers locate the official
                rule that governs their decision.
              </p>
              <p>
                We are not affiliated with or endorsed by the Ministry of
                Defence, the Armed Forces, the Indian Coast Guard, UPSC or
                another government body. We cannot influence recruitment,
                medical assessment, merit or selection.
              </p>
              <p>
                Explore practical guidance on defence careers, examinations and
                SSB preparation, informed by Commander Sharma&apos;s military,
                teaching and selection experience.
              </p>
            </div>
          </article>
          <aside className="border-t-4 border-[#4b6228] bg-white p-7">
            <p className="text-xs font-bold tracking-[.16em] text-[#4b6228] uppercase">
              Explore our guidance
            </p>
            <h2 className="mt-3 font-heading text-2xl">
              Careers, examinations and SSB preparation
            </h2>
            <dl className="mt-6 grid gap-5 text-sm">
              <div>
                <dt className="font-bold">Coverage</dt>
                <dd className="mt-1 text-[#5c6974]">
                  Career pathways, core examinations, service overviews,
                  eligibility and SSB.
                </dd>
              </div>
              <div>
                <dt className="font-bold">Live notices</dt>
                <dd className="mt-1 text-[#5c6974]">
                  Find current application notices on the{' '}
                  <Link href="/notifications/" className="text-link">
                    official recruitment portals
                  </Link>
                  .
                </dd>
              </div>
              <div>
                <dt className="font-bold">Expert leadership</dt>
                <dd className="mt-1 text-[#5c6974]">
                  Guidance informed by Commander Sharma&apos;s military, teaching,
                  recruitment and SSB psychology experience.
                </dd>
              </div>
            </dl>
          </aside>
        </div>
        <section className="mt-16 border-y border-[#d8e0dc] py-12">
          <div className="grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="section-kicker">Experience behind the academy</p>
              <h2 className="mt-3 font-heading text-4xl">
                Commander Sulakshan Kumar Sharma (Retd)
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-7 text-[#5c6974]">
                Military educator, psychologist and academy director with
                experience spanning tri-service cadet education, naval training,
                education planning and officer selection.
              </p>
              <Link
                href="/authors/cdr-sulakshan-kumar-sharma"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold underline decoration-[#9bc9df] underline-offset-4"
              >
                Full qualifications and experience <ArrowRight size={14} />
              </Link>
            </div>
            <dl className="grid gap-4 sm:grid-cols-2">
              <div className="border-l-4 border-[#4b6228] bg-[#f8faf9] p-5">
                <dt className="font-heading text-3xl">32 years</dt>
                <dd className="mt-1 text-sm text-[#5c6974]">
                  Military service
                </dd>
              </div>
              <div className="border-l-4 border-[#397fa8] bg-[#f8faf9] p-5">
                <dt className="font-heading text-3xl">57 years</dt>
                <dd className="mt-1 text-sm text-[#5c6974]">
                  Teaching experience
                </dd>
              </div>
              <div className="border-l-4 border-[#071f3d] bg-[#f8faf9] p-5">
                <dt className="font-heading text-3xl">4.5 years</dt>
                <dd className="mt-1 text-sm text-[#5c6974]">
                  Independent Indian Army and Navy recruitment experience
                </dd>
              </div>
              <div className="border-l-4 border-[#397fa8] bg-[#f8faf9] p-5">
                <dt className="font-heading text-3xl">3 years</dt>
                <dd className="mt-1 text-sm text-[#5c6974]">
                  SSB psychologist experience
                </dd>
              </div>
            </dl>
          </div>
        </section>
        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {principles.map(([Icon, title, copy]) => (
            <article
              key={title}
              className="border border-[#cbd3ce] bg-white p-7"
            >
              <Icon
                className="text-[#397fa8]"
                strokeWidth={1.6}
                aria-hidden="true"
              />
              <h2 className="mt-6 font-heading text-2xl">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#5c6974]">{copy}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            href="/editorial-standards"
            className="inline-flex items-center gap-2 bg-[#071f3d] px-5 py-3 text-sm font-bold text-white"
          >
            Read our editorial standards <ArrowRight size={15} />
          </Link>
          <Link
            href="/career-paths"
            className="border border-[#071f3d] px-5 py-3 text-sm font-bold"
          >
            Explore career paths
          </Link>
        </div>
      </section>
      <ContactBand />
      <SiteFooter />
    </main>
  );
}
