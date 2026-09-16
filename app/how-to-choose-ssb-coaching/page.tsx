import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Scale } from 'lucide-react';
import { withPageMetadata } from '@/lib/page-metadata';
import { Breadcrumbs, SiteFooter, SiteHeader } from '@/components/authority-shell';

const title = 'How to Choose an SSB Coaching Institute';
const description = 'An objective checklist for comparing SSB coaching providers: teaching experience, individual feedback, transparency, group practice and responsible preparation.';
export const metadata: Metadata = withPageMetadata({ title: `${title} | March Ahead Academy`, description, alternates: { canonical: '/how-to-choose-ssb-coaching/' }, openGraph: { title, description, url: '/how-to-choose-ssb-coaching/', type: 'website', images: ['/og-tri-service.webp'] } });

const checks = [
  ['Who is actually teaching you?', 'Look for named instructors and a clear account of their relevant SSB or selection experience.'],
  ['Is psychology feedback individual?', 'Ask whether feedback responds to your own work or applies a fixed answer bank to everyone.'],
  ['Does the provider promise selection?', 'Responsible coaching explains what it can support and does not guarantee a recommendation or appointment.'],
  ['Are memorised answers encouraged?', 'Examples should explain an activity; preparation should not require you to perform a manufactured personality.'],
  ['Is the format clear?', 'Check whether coaching is one-to-one or batch based, whether group tasks are practised with groups, and what online delivery includes.'],
  ['Are fees and structure understandable?', 'You should know what is included, how the programme is shaped and when fees are agreed.'],
  ['Is official information distinguished from advice?', 'Entry requirements and dates should point back to the controlling recruitment authority.'],
];

export default function Page() { return <main className="min-h-screen bg-white text-[#0a1e33]"><SiteHeader /><div className="mx-auto max-w-6xl px-5 py-10 lg:px-8"><Breadcrumbs current="How to choose SSB coaching" tone="light" /><p className="section-kicker">Knowledge centre · decision guide</p><h1 className="mt-4 max-w-4xl font-heading text-4xl leading-tight sm:text-5xl">{title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-[#536371]">The right provider should help you understand the process and develop your own preparation—not sell certainty. Use this checklist before booking any programme.</p><section className="mt-10 border-t border-[#d8e1dd] pt-8"><div className="flex items-center gap-3"><Scale className="text-[#397fa8]" size={28} aria-hidden="true" /><h2 className="font-heading text-3xl">A candidate-first checklist</h2></div><div className="mt-6 grid gap-5 md:grid-cols-2">{checks.map(([question, answer]) => <article key={question} className="border border-[#d8e1dd] p-5"><h3 className="flex gap-3 font-heading text-xl"><CheckCircle2 className="mt-1 shrink-0 text-[#4b6228]" size={20} aria-hidden="true" />{question}</h3><p className="mt-3 leading-7 text-[#536371]">{answer}</p></article>)}</div></section><section className="mt-12 border-t border-[#d8e1dd] pt-8"><h2 className="font-heading text-3xl">How March Ahead describes its offer</h2><p className="mt-4 max-w-3xl leading-8 text-[#536371]">March Ahead Academy provides <strong>one-to-one</strong> coaching online or in person by appointment. It is suitable for first attempts and repeat candidates, with preparation across psychology, personal interview, SSB orientation and communication. Psychology work can include TAT, WAT, SRT and Self Description; routes include NDA, CDS, AFCAT/AFSB and applicable direct entries. Programme structure is personalised after an individual consultation.</p><p className="mt-4 leading-8 text-[#536371]">Review the <Link className="text-link" href="/ssb-coaching/">full coaching summary</Link> or <Link className="text-link" href="/consultation/">book a consultation</Link>.</p></section></div><SiteFooter /></main>; }
