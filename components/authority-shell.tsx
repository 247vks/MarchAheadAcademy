import Link from 'next/link';
import {
  ArrowRight,
  BellRing,
  ExternalLink,
  GraduationCap,
  Map,
  Menu,
  Scale,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { ContactBand } from '@/components/contact-band';
import { ExpertByline } from '@/components/expert-byline';
import { ContextualGuidance } from '@/components/contextual-guidance';
import {
  ExpectationPreview,
  type ExpectationPreviewData,
} from '@/components/expectation-preview';
import { siteReviewedAt } from '@/lib/site';
import { GuideStructuredData } from '@/components/guide-structured-data';
import type { ReactNode } from 'react';

type Section = { title: string; body: string; points?: string[] };
type Source = { label: string; href: string };

export function SiteHeader() {
  const navItems = [
    { label: 'Career paths', href: '/career-paths', icon: Map },
    { label: 'Forces', href: '/services', icon: ShieldCheck },
    { label: 'Exams', href: '/exams', icon: GraduationCap },
    { label: 'Eligibility', href: '/eligibility', icon: Scale },
    { label: 'SSB', href: '/selection/ssb', icon: Users },
    { label: 'Notifications', href: '/notifications', icon: BellRing },
  ];
  return (
    <>
      <div className="bg-[#061a30] px-5 py-2 text-center text-[10px] font-bold tracking-[.15em] text-[#d9e8f2] uppercase">
        Independent guidance · Official notification always controls
      </div>
      <header className="sticky top-0 z-40 border-b border-[#d6ddda] bg-white/95 text-[#071f3d] shadow-[0_1px_12px_rgba(7,31,61,.05)] backdrop-blur-md">
        <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link
            href="/"
            className="group border-l-[3px] border-[#397fa8] pl-3"
            aria-label="March Ahead Academy home"
          >
            <span className="block font-heading text-sm leading-tight tracking-[.045em] uppercase transition group-hover:text-[#2f6f94] sm:text-[15px]">
              March Ahead Academy
            </span>
          </Link>
          <nav
            className="hidden items-center gap-1 text-[13px] font-semibold text-[#33485b] lg:flex"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              const NavIcon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="flex min-h-10 items-center gap-1.5 px-2.5 transition hover:bg-[#f3f8fb] hover:text-[#2f6f94]"
                >
                  <NavIcon size={14} strokeWidth={1.7} aria-hidden="true" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <Link
              href="/consultation"
              className="bg-[#77b9da] px-4 py-3 text-xs font-bold tracking-[.04em] text-[#071f3d] uppercase transition hover:bg-[#a6d7ed]"
            >
              Book a consultation
            </Link>
          </div>
          <details className="relative lg:hidden">
            <summary
              className="grid h-11 w-11 cursor-pointer list-none place-items-center border border-[#cbd3ce]"
              aria-label="Open navigation"
            >
              <Menu size={21} aria-hidden="true" />
            </summary>
            <nav
              className="absolute right-0 top-[calc(100%+1rem)] z-50 grid min-w-64 border border-[#cbd3ce] bg-white p-2 shadow-xl"
              aria-label="Mobile navigation"
            >
              {navItems.map((item) => {
                const NavIcon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex min-h-11 items-center gap-3 border-b border-[#edf0ee] px-3 text-sm font-semibold last:border-0"
                  >
                    <NavIcon
                      size={16}
                      className="text-[#397fa8]"
                      aria-hidden="true"
                    />
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="/consultation"
                className="mt-2 bg-[#77b9da] px-4 py-3 text-center text-xs font-bold uppercase"
              >
                Book a consultation
              </Link>
            </nav>
          </details>
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

export function Breadcrumbs({
  parent,
  parentHref,
  current,
}: {
  parent?: string;
  parentHref?: string;
  current: string;
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mb-6 flex flex-wrap items-center gap-2 text-xs font-semibold text-[#cce7f5]"
    >
      <Link href="/" className="transition hover:text-white">
        Home
      </Link>
      {parent && parentHref && (
        <>
          <span aria-hidden="true">/</span>
          <Link href={parentHref} className="transition hover:text-white">
            {parent}
          </Link>
        </>
      )}
      <span aria-hidden="true">/</span>
      <span aria-current="page" className="text-white">
        {current}
      </span>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t-4 border-[#4b6228] bg-[#061a30] px-5 py-8 text-sm text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/">March Ahead Academy</Link>
          <p className="mt-2 text-xs text-slate-400">
            Official notification and recruitment authority always control.
          </p>
        </div>
        <nav className="grid content-start gap-2" aria-label="Career guidance">
          <strong className="text-white">Explore</strong>
          <Link className="text-link dark-text-link" href="/career-paths">
            Career paths
          </Link>
          <Link className="text-link dark-text-link" href="/services">
            Services
          </Link>
          <Link className="text-link dark-text-link" href="/eligibility">
            Eligibility
          </Link>
        </nav>
        <nav
          className="grid content-start gap-2"
          aria-label="Selection guidance"
        >
          <strong className="text-white">Prepare</strong>
          <Link className="text-link dark-text-link" href="/exams">
            Exams
          </Link>
          <Link className="text-link dark-text-link" href="/selection/ssb">
            SSB
          </Link>
          <Link className="text-link dark-text-link" href="/notifications">
            Official sources
          </Link>
        </nav>
        <nav
          className="grid content-start gap-2"
          aria-label="Trust and organisation"
        >
          <strong className="text-white">March Ahead Academy</strong>
          <Link className="text-link dark-text-link" href="/consultation">
            Book a consultation
          </Link>
          <Link className="text-link dark-text-link" href="/resources">
            Preparation library
          </Link>
          <Link
            className="text-link dark-text-link"
            href="/authors/cdr-sulakshan-kumar-sharma"
          >
            Cdr Sharma
          </Link>
          <Link className="text-link dark-text-link" href="/about">
            About
          </Link>
          <Link
            className="text-link dark-text-link"
            href="/editorial-standards"
          >
            Editorial standards
          </Link>
        </nav>
      </div>
    </footer>
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
  experience,
  expertContext,
  visual,
  currentHref,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  status?: string;
  accent?: string;
  sections: Section[];
  sources: Source[];
  related: { label: string; href: string }[];
  experience?: ExpectationPreviewData;
  expertContext?: string;
  visual?: ReactNode;
  currentHref: string;
}) {
  return (
    <main className="min-h-screen bg-white text-[#0a1e33]">
      <GuideStructuredData
        path={currentHref}
        title={title}
        description={lede}
        section={eyebrow}
      />
      <SiteHeader />
      <section className="command-blue relative overflow-hidden text-white">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.055)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.055)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto max-w-5xl px-5 py-11 sm:py-14 lg:px-8 lg:py-16">
          <Breadcrumbs current={eyebrow} />
          <div
            className="flex items-center gap-3 text-xs font-bold tracking-[.17em] uppercase"
            style={{ color: accent }}
          >
            <span className="h-px w-8" style={{ backgroundColor: accent }} />
            {eyebrow}
          </div>
          <h1 className="text-balance mt-5 max-w-4xl font-heading text-4xl leading-[1.12] tracking-[-.025em] sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            {lede}
          </p>
          <div className="mt-8 flex flex-wrap gap-2 text-xs font-semibold text-[#cce7f5]">
            <span className="inline-flex items-center gap-2 border border-[#80a6bd]/50 bg-[#103353] px-4 py-2">
              <ShieldCheck size={15} />
              {status} · Last reviewed {siteReviewedAt}
            </span>
            {expertContext && (
              <Link
                href="/authors/cdr-sulakshan-kumar-sharma"
                className="inline-flex items-center border border-[#80a6bd]/50 px-4 py-2 transition hover:border-[#9bd1ea]"
              >
                Expert perspective · Cdr Sharma
              </Link>
            )}
            <Link
              href="/editorial-standards"
              className="inline-flex items-center border border-[#80a6bd]/50 px-4 py-2 transition hover:border-[#9bd1ea]"
            >
              How we verify this guide
            </Link>
          </div>
        </div>
      </section>
      {experience && <ExpectationPreview data={experience} />}
      <div className="mx-auto grid max-w-5xl gap-10 px-5 py-12 lg:grid-cols-[minmax(0,1fr)_250px] lg:gap-14 lg:px-8 lg:py-16">
        <article className="space-y-10 lg:space-y-12">
          {expertContext && <ExpertByline context={expertContext} />}
          {visual}
          <nav
            aria-label="On this page"
            className="border-y border-[#d9e3df] py-4"
          >
            <p className="text-xs font-bold tracking-[.15em] text-[#397fa8] uppercase">
              On this page
            </p>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm font-semibold">
              {sections.map((section, index) => (
                <a
                  className="text-link"
                  key={section.title}
                  href={`#section-${index + 1}`}
                >
                  {section.title}
                </a>
              ))}
              <a className="text-link" href="#official-sources">
                Official sources
              </a>
            </div>
          </nav>
          <div className="border border-[#d9e3df] border-l-4 border-l-[#4b6228] bg-[#f8faf9] p-6">
            <p className="text-sm leading-7">
              <strong>Important:</strong> This guide explains career pathways;
              it does not replace the notification governing a particular
              examination, entry, or intake. Verify current requirements before
              acting.
            </p>
          </div>
          {sections.map((section, index) => {
            const sectionAccent = ['#4b6228', '#071f3d', '#397fa8'][index % 3];
            return (
              <div key={section.title} className="contents">
                <section
                  id={`section-${index + 1}`}
                  className="scroll-mt-28 border-t-2 pt-7"
                  style={{ borderTopColor: sectionAccent }}
                >
                  <div className="flex items-center gap-3">
                    <p
                      className="text-xs font-bold tracking-[.16em] uppercase"
                      style={{ color: sectionAccent }}
                    >
                      0{index + 1}
                    </p>
                    <span
                      className="h-px w-10 opacity-45"
                      style={{ backgroundColor: sectionAccent }}
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="text-balance mt-2 font-heading text-2xl leading-tight sm:text-3xl">
                    {section.title}
                  </h2>
                  <p className="mt-4 leading-8 text-[#536371]">
                    {section.body}
                  </p>
                  {section.points && (
                    <ul className="mt-5 grid gap-3">
                      {section.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-3 border border-[#e0e5e2] bg-[#fafcfb] p-4 text-sm leading-6"
                        >
                          <span
                            className="mt-2 h-2 w-2 shrink-0"
                            style={{ backgroundColor: sectionAccent }}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
                {index === 0 && <ContextualGuidance topic={title} />}
              </div>
            );
          })}
          <section
            id="official-sources"
            className="scroll-mt-28 border-t border-[#cbd3ce] pt-8"
          >
            <h2 className="font-heading text-2xl">Official sources</h2>
            <div className="mt-4 grid gap-3">
              {sources.map((source) => (
                <a
                  key={source.href}
                  href={source.href}
                  target="_blank"
                  rel="noreferrer"
                  className="linked-panel flex items-center justify-between border border-[#cbd3ce] border-l-4 border-l-[#397fa8] bg-[#f9fbfc] px-4 py-3 text-sm font-semibold"
                >
                  {source.label}
                  <ExternalLink size={15} className="text-[#397fa8]" />
                </a>
              ))}
            </div>
          </section>
        </article>
        <aside>
          <div className="sticky top-28 border border-[#dce3df] border-t-4 border-t-[#397fa8] bg-white p-5 shadow-[0_8px_28px_rgba(7,31,61,.06)]">
            <p className="text-xs font-bold tracking-[.15em] text-[#397fa8] uppercase">
              Continue exploring
            </p>
            <div className="mt-4 grid gap-2">
              {related.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="linked-panel flex items-center justify-between border-b border-[#e2e7e4] px-2 py-3 text-sm font-semibold"
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
      <ContactBand />
      <SiteFooter />
    </main>
  );
}
