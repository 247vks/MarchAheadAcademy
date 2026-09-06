import Link from 'next/link';
import { ArrowRight, Compass, ExternalLink, ShieldCheck } from 'lucide-react';

type Section = { title: string; body: string; points?: string[] };
type Source = { label: string; href: string };

export function SiteHeader() {
  return <>
    <div className="relative bg-[#061a30] px-5 py-2 text-center text-[10px] font-bold tracking-[.15em] text-[#d9e8f2] uppercase"><span className="absolute inset-x-0 top-0 grid h-1 grid-cols-3"><span className="bg-[#4b6228]" /><span className="bg-white" /><span className="bg-[#5aa6cf]" /></span>Independent guidance · Official notification always controls</div>
    <header className="border-b border-[#214665] bg-[#071f3d] text-white"><div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
      <Link href="/" className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center border border-[#8bc4e0] text-[#9bd1ea]"><Compass size={21} /></span><span><span className="block font-heading tracking-[.07em] uppercase">March Ahead</span><span className="block text-[9px] tracking-[.3em] text-[#9bd1ea] uppercase">Academy</span></span></Link>
      <nav className="hidden gap-6 text-sm text-slate-200 lg:flex"><Link href="/career-paths">Career paths</Link><Link href="/services/army">Forces</Link><Link href="/exams/nda">Exams</Link><Link href="/eligibility">Eligibility</Link><Link href="/selection/ssb">SSB</Link><Link href="/notifications">Notifications</Link></nav>
      <Link href="/career-paths" className="bg-[#77b9da] px-4 py-3 text-xs font-bold text-[#071f3d] uppercase">Find my path</Link>
    </div></header>
  </>;
}

export function AuthorityPage({ eyebrow, title, lede, status = 'Foundation guide', sections, sources, related }: { eyebrow: string; title: string; lede: string; status?: string; sections: Section[]; sources: Source[]; related: { label: string; href: string }[] }) {
  return <main className="min-h-screen bg-[#f3f5f2] text-[#0a1e33]">
    <SiteHeader />
    <section className="bg-[#071f3d] text-white"><div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
      <div className="flex items-center gap-3 text-xs font-bold tracking-[.17em] text-[#9bd1ea] uppercase"><span className="h-px w-8 bg-[#718a45]" />{eyebrow}</div>
      <h1 className="mt-6 max-w-4xl font-heading text-4xl leading-tight sm:text-6xl">{title}</h1><p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{lede}</p>
      <div className="mt-8 inline-flex items-center gap-2 border border-[#80a6bd]/50 bg-[#103353] px-4 py-2 text-xs font-semibold text-[#cce7f5]"><ShieldCheck size={15} />{status} · Last reviewed 6 September 2026</div>
    </div></section>
    <div className="mx-auto grid max-w-5xl gap-10 px-5 py-14 lg:grid-cols-[1fr_260px] lg:px-8 lg:py-20">
      <article className="space-y-12">
        <div className="border-l-4 border-[#4b6228] bg-white p-6"><p className="text-sm leading-7"><strong>Important:</strong> This guide explains career pathways; it does not replace the notification governing a particular examination, entry, or intake. Verify current requirements before acting.</p></div>
        {sections.map((section, index) => <section key={section.title}><p className="text-xs font-bold tracking-[.16em] text-[#397fa8] uppercase">0{index + 1}</p><h2 className="mt-2 font-heading text-3xl">{section.title}</h2><p className="mt-4 leading-8 text-[#536371]">{section.body}</p>{section.points && <ul className="mt-5 grid gap-3">{section.points.map(point => <li key={point} className="flex gap-3 bg-white p-4 text-sm leading-6"><span className="mt-2 h-2 w-2 shrink-0 bg-[#4b6228]" />{point}</li>)}</ul>}</section>)}
        <section className="border-t border-[#cbd3ce] pt-8"><h2 className="font-heading text-2xl">Official sources</h2><div className="mt-4 grid gap-3">{sources.map(source => <a key={source.href} href={source.href} target="_blank" rel="noreferrer" className="flex items-center justify-between border border-[#cbd3ce] bg-white px-4 py-3 text-sm font-semibold hover:border-[#397fa8]">{source.label}<ExternalLink size={15} /></a>)}</div></section>
      </article>
      <aside><div className="sticky top-6 border-t-4 border-[#397fa8] bg-white p-5"><p className="text-xs font-bold tracking-[.15em] text-[#397fa8] uppercase">Continue exploring</p><div className="mt-4 grid gap-2">{related.map(item => <Link key={item.href} href={item.href} className="flex items-center justify-between border-b border-[#e2e7e4] py-3 text-sm font-semibold">{item.label}<ArrowRight size={14} /></Link>)}</div><p className="mt-6 text-xs leading-5 text-[#687781]">Independent guidance. No selection guarantee or government affiliation.</p></div></aside>
    </div>
    <footer className="border-t-4 border-[#4b6228] bg-[#061a30] px-5 py-8 text-sm text-slate-300"><div className="mx-auto flex max-w-5xl flex-col justify-between gap-3 sm:flex-row"><Link href="/">March Ahead Academy</Link><span>Official notification and recruitment authority always control.</span></div></footer>
  </main>;
}
