import { withPageMetadata } from '@/lib/page-metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ExternalLink, Radio } from 'lucide-react';
import { SiteFooter, SiteHeader } from '@/components/authority-shell';
import { ContactBand } from '@/components/contact-band';
export const metadata: Metadata = withPageMetadata({
  alternates: { canonical: '/notifications' },
  title: 'Official Defence Recruitment Sources | March Ahead Academy',
  description:
    'Find official Indian Defence recruitment portals for current notices, application dates and results.',
});
const sources = [
  [
    'UPSC active examinations',
    'NDA/NA and CDS notices, timetables and results',
    'https://www.upsc.gov.in/examinations/active-exams',
    '#071f3d',
  ],
  [
    'Join Indian Army',
    'Army officer direct entries and recruiting notices',
    'https://www.joinindianarmy.nic.in/',
    '#4b6228',
  ],
  [
    'Join Indian Navy',
    'Navy officer and Agniveer advertisements',
    'https://www.joinindiannavy.gov.in/',
    '#071f3d',
  ],
  [
    'IAF notifications',
    'AFCAT and officer-entry notices',
    'https://www.careerairforce.gov.in/notification',
    '#397fa8',
  ],
  [
    'Agniveervayu',
    'Intake notices, applications and results',
    'https://agnipathvayu.cdac.in/',
    '#397fa8',
  ],
];
export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#0a1e33]">
      <SiteHeader />
      <section className="command-blue text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
          <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-[#b9e2f5] uppercase">
            <Radio size={16} />
            Official sources
          </div>
          <h1 className="mt-5 max-w-4xl font-heading text-5xl sm:text-6xl">
            Official recruitment source directory
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
            Use the official portals below for current notices, application
            dates and results.
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 lg:px-8">
        <div className="overflow-hidden border border-[#cbd3ce] bg-white">
          <div className="hidden grid-cols-[1.1fr_1.6fr_40px] gap-4 bg-[#f6f9f7] px-5 py-3 text-xs font-bold uppercase lg:grid">
            <span>Authority</span>
            <span>What you can find</span>
            <span />
          </div>
          {sources.map(([name, controls, href, color]) => (
            <a
              key={name}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="grid gap-2 border-t border-[#dde3df] px-5 py-5 lg:grid-cols-[1.1fr_1.6fr_40px] lg:items-center"
            >
              <strong style={{ color }}>{name}</strong>
              <span className="text-sm text-[#526371]">{controls}</span>
              <ExternalLink size={15} />
            </a>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/eligibility"
            className="bg-[#4b6228] px-5 py-3 text-sm font-bold text-white"
          >
            Understand eligibility
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
