import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, MessagesSquare, UserRound, ClipboardCheck } from 'lucide-react';
import { withPageMetadata } from '@/lib/page-metadata';
import { Breadcrumbs, SiteFooter, SiteHeader } from '@/components/authority-shell';

const title = 'SSB Personal Interview Preparation | March Ahead Academy';
const description = 'A practical SSB personal interview hub covering PIQ reflection, education, family, hobbies, motivation and preparation for first-time candidates and repeaters.';
export const metadata: Metadata = withPageMetadata({ title, description, alternates: { canonical: '/ssb-personal-interview/' }, openGraph: { title, description, url: '/ssb-personal-interview/', type: 'website', images: ['/og-tri-service.webp'] } });

const topics = [
  ['Personal interview guide', '/selection/ssb/personal-interview/', MessagesSquare, 'Understand the interview as a conversation grounded in your own experiences.'],
  ['PIQ and self-reflection', '/selection/ssb/self-description/', UserRound, 'Prepare accurate examples about education, family, interests and responsibility.'],
  ['Interview preparation for repeaters', '/guidance/ssb-repeaters/', ClipboardCheck, 'Review preparation habits without inventing reasons for a previous outcome.'],
] as const;

export default function Page() { return <main className="min-h-screen bg-white text-[#0a1e33]"><SiteHeader /><div className="mx-auto max-w-6xl px-5 py-10 lg:px-8"><Breadcrumbs current="SSB personal interview" tone="light" /><p className="section-kicker">SSB knowledge centre · interview</p><h1 className="mt-4 max-w-4xl font-heading text-4xl leading-tight sm:text-5xl">SSB Personal Interview Preparation</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-[#536371]">Prepare for the SSB personal interview through self-knowledge, clear communication and realistic reflection—not perfect answers.</p><section className="mt-10 grid gap-6 md:grid-cols-3">{topics.map(([label, href, Icon, copy]) => <Link key={href} href={href} className="linked-panel border-t-2 border-[#397fa8] p-6"><Icon className="text-[#397fa8]" size={28} aria-hidden="true" /><h2 className="mt-4 font-heading text-2xl">{label}</h2><p className="mt-3 leading-7 text-[#536371]">{copy}</p><span className="mt-5 inline-flex items-center gap-2 font-bold text-[#2f6f94]">Open guide <ArrowRight size={17} aria-hidden="true" /></span></Link>)}</section><section className="mt-12 border-t border-[#d8e1dd] pt-8"><h2 className="font-heading text-3xl">Questions worth preparing for</h2><p className="mt-4 max-w-3xl leading-8 text-[#536371]">Expect questions about your education, family and background, current interests, hobbies, defence motivation, responsibilities and choices. Use these themes to organise truthful examples; do not memorise a script or assume a question has one preferred answer.</p><p className="mt-4 leading-8 text-[#536371]">For individual support, <Link className="text-link" href="/ssb-coaching/">explore one-on-one SSB coaching</Link> or begin with a <Link className="text-link" href="/consultation/">consultation</Link>.</p></section></div><SiteFooter /></main>; }
