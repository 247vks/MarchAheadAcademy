import Link from 'next/link';
import {
  ArrowRight,
  BellRing,
  ExternalLink,
  GraduationCap,
  Map,
  Phone,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react';

type Section = { title: string; body: string; points?: string[] };
type Source = { label: string; href: string };

export function SiteHeader() {
  const navItems = [
    { label: 'Career paths', href: '/career-paths', icon: Map },
    { label: 'Forces', href: '/services/army', icon: ShieldCheck },
    { label: 'Exams', href: '/exams/nda', icon: GraduationCap },
    { label: 'Eligibility', href: '/eligibility', icon: Scale },
    { label: 'SSB', href: '/selection/ssb', icon: Users },
    { label: 'Notifications', href: '/notifications', icon: BellRing },
  ];
  return (
    <>
      <div className="bg-[#061a30] px-5 py-2 text-[10px] font-bold text-[#d9e8f2]">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 sm:justify-between">
          <span className="tracking-[.13em] uppercase">Independent guidance · Official notification always controls</span>
          <a href="tel:+919820096800" className="inline-flex items-center gap-2 bg-[#77b9da] px-3 py-1 text-[#071f3d]" aria-label="Call March Ahead Academy on plus 91 98200 96800"><Phone size={13} aria-hidden="true" />Call +91 98200 96800</a>
        </div>
      </div>
      <header className="border-b border-[#d6ddda] bg-white text-[#071f3d]">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" className="border-l-2 border-[#397fa8] pl-3">
            <span className="block font-heading tracking-[.07em] uppercase">
              March Ahead
            </span>
            <span className="block text-[9px] tracking-[.3em] text-[#397fa8] uppercase">
              Academy
            </span>
          </Link>
          <nav
            className="hidden gap-5 text-sm text-[#33485b] lg:flex"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              const NavIcon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center gap-1.5 transition hover:text-[#2f6f94]"
                >
                  <NavIcon size={14} strokeWidth={1.7} aria-hidden="true" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/career-paths"
            className="bg-[#77b9da] px-4 py-3 text-xs font-bold text-[#071f3d] uppercase"
          >
            Find my path
          </Link>
        </div>
        <div className="tri-service-rule" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </header>
    </>
  );
}

export function AuthorityPage({
  eyebrow,
  title,
  lede,
  status = 'Foundation guide',
  accent = '#2f6f94',
  sections,
  sources,
  related,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  status?: string;
  accent?: string;
  sections: Section[];
  sources: Source[];
  related: { label: string; href: string }[];
}) {
  return (
    <main className="min-h-screen bg-white text-[#0a1e33]">
      <SiteHeader />
      <section
        className="command-blue border-t-4 text-white"
        style={{ borderTopColor: accent }}
      >
        <div className="mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <div
            className="flex items-center gap-3 text-xs font-bold tracking-[.17em] uppercase"
            style={{ color: accent }}
          >
            <span className="h-px w-8" style={{ backgroundColor: accent }} />
            {eyebrow}
          </div>
          <h1 className="mt-6 max-w-4xl font-heading text-4xl leading-tight sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {lede}
          </p>
          <div className="mt-8 flex flex-wrap gap-2 text-xs font-semibold text-[#cce7f5]">
            <span className="inline-flex items-center gap-2 border border-[#80a6bd]/50 bg-[#103353] px-4 py-2">
              <ShieldCheck size={15} />
              {status} · Last reviewed 6 September 2026
            </span>
            <Link
              href="/editorial-standards"
              className="inline-flex items-center border border-[#80a6bd]/50 px-4 py-2 transition hover:border-[#9bd1ea]"
            >
              How we verify this guide
            </Link>
          </div>
        </div>
      </section>
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-14 lg:grid-cols-[1fr_260px] lg:px-8 lg:py-20">
        <article className="space-y-12">
          <div className="border border-[#d9e3df] border-l-4 border-l-[#4b6228] bg-[#f8faf9] p-6">
            <p className="text-sm leading-7">
              <strong>Important:</strong> This guide explains career pathways;
              it does not replace the notification governing a particular
              examination, entry, or intake. Verify current requirements before
              acting.
            </p>
          </div>
          {sections.map((section, index) => (
            <section key={section.title}>
              <p className="text-xs font-bold tracking-[.16em] text-[#397fa8] uppercase">
                0{index + 1}
              </p>
              <h2 className="mt-2 font-heading text-3xl">{section.title}</h2>
              <p className="mt-4 leading-8 text-[#536371]">{section.body}</p>
              {section.points && (
                <ul className="mt-5 grid gap-3">
                  {section.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-3 border border-[#e0e5e2] bg-white p-4 text-sm leading-6"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 bg-[#4b6228]" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
          <section className="border-t border-[#cbd3ce] pt-8">
            <h2 className="font-heading text-2xl">Official sources</h2>
            <div className="mt-4 grid gap-3">
              {sources.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border border-[#cbd3ce] bg-white px-4 py-3 text-sm font-semibold hover:border-[#397fa8]"
                >
                  {source.label}
                  <ExternalLink size={15} />
                </a>
              ))}
            </div>
          </section>
        </article>
        <aside>
          <div className="sticky top-6 border-t-4 border-[#397fa8] bg-white p-5">
            <p className="text-xs font-bold tracking-[.15em] text-[#397fa8] uppercase">
              Continue exploring
            </p>
            <div className="mt-4 grid gap-2">
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex items-center justify-between border-b border-[#e2e7e4] py-3 text-sm font-semibold"
                >
                  {item.label}
                  <ArrowRight size={14} />
                </Link>
              ))}
            </div>
            <p className="mt-6 text-xs leading-5 text-[#687781]">
              Independent guidance. No selection guarantee or government
              affiliation.
            </p>
          </div>
        </aside>
      </div>
      <footer className="border-t-4 border-[#4b6228] bg-[#061a30] px-5 py-8 text-sm text-slate-300">
        <div className="mx-auto flex max-w-5xl flex-col justify-between gap-5 sm:flex-row">
          <div>
            <Link href="/">March Ahead Academy</Link>
            <p className="mt-2 text-xs text-slate-400">
              Official notification and recruitment authority always control.
            </p>
          </div>
          <nav
            className="flex flex-wrap gap-x-5 gap-y-2"
            aria-label="Trust and organisation"
          >
            <Link href="/about">About</Link>
            <Link href="/editorial-standards">Editorial standards</Link>
              <Link href="/notifications">Source tracker</Link>
              <a href="tel:+919820096800" className="font-bold text-white">+91 98200 96800</a>
            </nav>
        </div>
      </footer>
    </main>
  );
}
