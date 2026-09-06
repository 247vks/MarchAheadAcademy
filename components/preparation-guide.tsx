import Link from 'next/link';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ContactBand } from '@/components/contact-band';
import { SiteHeader } from '@/components/authority-shell';
import {
  preparationGuides,
  type PreparationGuideData,
} from '@/lib/preparation-guides';

export function PreparationGuide({ guide }: { guide: PreparationGuideData }) {
  return (
    <main className="min-h-screen bg-white text-[#0a1e33]">
      <SiteHeader />
      <section className="grid bg-[#071f3d] text-white lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-16 lg:px-[max(2rem,calc((100vw-80rem)/2))] lg:py-20">
          <p
            className="text-xs font-bold tracking-[.18em] uppercase"
            style={{ color: guide.accent }}
          >
            {guide.eyebrow}
          </p>
          <h1 className="mt-5 font-heading text-5xl leading-tight sm:text-6xl">
            {guide.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            {guide.lede}
          </p>
          <div className="mt-7 inline-flex w-fit items-center gap-2 border border-white/20 px-4 py-2 text-xs text-slate-200">
            <ShieldCheck size={15} />
            Original March Ahead preparation guide
          </div>
        </div>
        <div className="min-h-[360px]">
          <img
            src={guide.image}
            alt={`Indian defence aspirants practising how to ${guide.slug}`}
            className="h-full w-full object-cover"
          />
        </div>
      </section>
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-[1fr_280px] lg:px-8 lg:py-20">
        <article className="space-y-14">
          {guide.sections.map((section, index) => (
            <section
              key={section.title}
              className="border-l-2 pl-6"
              style={{ borderLeftColor: guide.accent }}
            >
              <p
                className="text-xs font-bold tracking-[.16em] uppercase"
                style={{ color: guide.accent }}
              >
                0{index + 1}
              </p>
              <h2 className="mt-2 font-heading text-3xl">{section.title}</h2>
              <p className="mt-4 leading-8 text-[#536371]">{section.body}</p>
              <ul className="mt-5 grid gap-3">
                {section.actions.map((action) => (
                  <li
                    key={action}
                    className="flex gap-3 border border-[#e0e5e2] bg-[#fafcfb] p-4 text-sm leading-6"
                  >
                    <CheckCircle2
                      size={17}
                      className="mt-1 shrink-0"
                      style={{ color: guide.accent }}
                    />
                    {action}
                  </li>
                ))}
              </ul>
            </section>
          ))}
          <section className="border border-[#d9e3df] bg-[#f8faf9] p-7">
            <p
              className="text-xs font-bold tracking-[.16em] uppercase"
              style={{ color: guide.accent }}
            >
              Practise this
            </p>
            <p className="mt-3 leading-8">{guide.practice}</p>
          </section>
        </article>
        <aside>
          <div
            className="sticky top-6 border-t-4 bg-[#f8faf9] p-5"
            style={{ borderTopColor: guide.accent }}
          >
            <p
              className="text-xs font-bold tracking-[.15em] uppercase"
              style={{ color: guide.accent }}
            >
              Continue the series
            </p>
            <div className="mt-4 grid">
              {preparationGuides
                .filter((item) => item.slug !== guide.slug)
                .map((item) => (
                  <Link
                    key={item.slug}
                    href={`/preparation/${item.slug}`}
                    className="flex items-center justify-between border-b border-[#dde3df] py-3 text-sm font-semibold"
                  >
                    {item.title}
                    <ArrowRight size={14} />
                  </Link>
                ))}
            </div>
            <p className="mt-6 text-xs leading-5 text-[#687781]">
              These guides support genuine development. They are not tricks,
              scripts or a guarantee of selection.
            </p>
          </div>
        </aside>
      </div>
      <ContactBand />
    </main>
  );
}
