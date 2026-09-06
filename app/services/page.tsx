import type { Metadata } from 'next';
import Link from 'next/link';
import { Anchor, ArrowRight, Mountain, Wind } from 'lucide-react';
import { ContactBand } from '@/components/contact-band';
import { SiteFooter, SiteHeader } from '@/components/authority-shell';

export const metadata: Metadata = {
  title: 'Indian Armed Forces Career Hubs | March Ahead Academy',
  description:
    'Compare career pathways across the Indian Army, Indian Navy and Indian Air Force.',
};
const services = [
  [
    Mountain,
    'Indian Army',
    'Officer, technical and Agniveer pathways across arms and services.',
    '/services/army',
    '#4b6228',
  ],
  [
    Anchor,
    'Indian Navy',
    'Sea-going, aviation, technical and specialist career routes.',
    '/services/navy',
    '#071f3d',
  ],
  [
    Wind,
    'Indian Air Force',
    'Flying, ground duty, technical and Agniveervayu pathways.',
    '/services/air-force',
    '#397fa8',
  ],
] as const;
export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#0a1e33]">
      <SiteHeader />
      <section className="command-blue text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-20">
          <p className="text-xs font-bold tracking-[.18em] text-[#9bd1ea] uppercase">
            Service career hubs
          </p>
          <h1 className="mt-5 font-heading text-5xl sm:text-6xl">
            Three services. Distinct careers.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Start with the service environment and nature of work, then
            investigate the entries that match your education and current
            notification.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-5 px-5 py-16 md:grid-cols-3 lg:px-8 lg:py-20">
        {services.map(([Icon, title, copy, href, color]) => (
          <Link
            key={href}
            href={href}
            className="group border border-[#dbe2de] border-t-4 bg-white p-7"
            style={{ borderTopColor: color }}
          >
            <span
              className="grid h-12 w-12 place-items-center"
              style={{ backgroundColor: `${color}14`, color }}
            >
              <Icon strokeWidth={1.6} />
            </span>
            <h2 className="mt-7 font-heading text-3xl">{title}</h2>
            <p className="mt-3 text-sm leading-7 text-[#5c6974]">{copy}</p>
            <span className="mt-7 inline-flex items-center gap-2 text-sm font-bold">
              Explore service <ArrowRight size={15} />
            </span>
          </Link>
        ))}
      </section>
      <ContactBand />
      <SiteFooter />
    </main>
  );
}
