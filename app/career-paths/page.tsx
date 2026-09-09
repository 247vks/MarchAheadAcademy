import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { SiteFooter, SiteHeader } from '@/components/authority-shell';
import { ContactBand } from '@/components/contact-band';
import { CareerPathFinder } from '@/components/career-path-finder';

export const metadata: Metadata = {
  alternates: { canonical: '/career-paths' },
  title: 'Defence Career Path Finder | March Ahead Academy',
  description:
    'Explore Indian Army, Navy and Air Force entry routes by your current education stage.',
};
const paths = [
  [
    'After Class 10',
    'Build the right subject, fitness and activity foundation before entry windows open.',
    '/career-paths/foundation',
  ],
  [
    'After Class 12',
    'Compare NDA, technical, service-specific and notified Agniveer pathways.',
    '/career-paths/after-12th',
  ],
  [
    'During college',
    'Align your degree, NCC activity and preparation with graduate entry requirements.',
    '/career-paths/after-graduation',
  ],
  [
    'After graduation',
    'Compare CDS, AFCAT, NCC and degree-specific direct entries.',
    '/career-paths/after-graduation',
  ],
];
export default function CareerPaths() {
  return (
    <main className="min-h-screen bg-white text-[#0a1e33]">
      <SiteHeader />
      <section className="command-blue text-white">
        <div className="mx-auto max-w-6xl px-5 py-12 sm:py-14 lg:px-8 lg:py-16">
          <p className="text-xs font-bold tracking-[.17em] text-[#b9e2f5] uppercase">
            Defence Career Path Finder
          </p>
          <h1 className="mt-5 max-w-4xl font-heading text-5xl leading-tight sm:text-6xl">
            Start with where you are. Find where you can go.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Explore career routes for your education stage, then check the
            requirements for your chosen entry.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-12 lg:px-8 lg:py-16">
        <CareerPathFinder />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {paths.map(([title, copy, href], i) => (
            <Link
              key={title}
              href={href}
              className="group border-t-4 bg-white p-7 shadow-sm"
              style={{
                borderTopColor: ['#4b6228', '#071f3d', '#397fa8', '#4b6228'][i],
              }}
            >
              <span className="text-xs font-bold tracking-widest text-[#397fa8] uppercase">
                Stage 0{i + 1}
              </span>
              <h2 className="mt-8 font-heading text-3xl">{title}</h2>
              <p className="mt-3 leading-7 text-[#5c6b77]">{copy}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold">
                Explore routes{' '}
                <ArrowRight
                  size={16}
                  className="transition group-hover:translate-x-1"
                />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-10 border border-[#dbe3df] border-l-4 border-l-[#4b6228] bg-[#f8faf9] p-6 text-sm leading-7">
          <strong>Before applying:</strong> check your exact date of birth and
          education against the current entry notification. If a requirement is
          unclear, seek clarification before submitting your application.
        </div>
      </section>
      <ContactBand />
      <SiteFooter />
    </main>
  );
}
