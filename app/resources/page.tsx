import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, ArrowRight } from 'lucide-react';
import { SiteHeader, SiteFooter } from '@/components/authority-shell';
export const metadata: Metadata = {
  title: 'Free Defence Preparation Worksheets | March Ahead Academy',
  description:
    'Download practical study planners, personal reflection worksheets, GD practice sheets and a notification reading checklist.',
  alternates: { canonical: '/resources/' },
};
const resources = [
  {
    slug: 'weekly-preparation-planner',
    title: 'Weekly preparation planner',
    description: 'Turn study goals into a realistic week.',
  },
  {
    slug: 'personal-reflection-worksheet',
    title: 'Personal reflection worksheet',
    description:
      'Prepare real examples for the personal interview and Self Description.',
  },
  {
    slug: 'gd-practice-sheet',
    title: 'Group discussion practice sheet',
    description:
      'Structure a discussion and review listening as well as speaking.',
  },
  {
    slug: 'notification-reading-checklist',
    title: 'Notification reading checklist',
    description: 'Record the controlling source before acting on an entry.',
  },
];
export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#0a1e33]">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-5 py-12 lg:px-8 lg:py-16">
        <p className="section-kicker">Preparation library</p>
        <h1 className="mt-5 font-heading text-4xl sm:text-5xl">
          Build a preparation habit you can sustain.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#536371]">
          Free worksheets from March Ahead Academy to help you organise
          preparation, reflect on experience and ask better questions. Download
          an editable text file, open it in your preferred editor and print it
          if useful.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {resources.map((item) => (
            <article key={item.slug} className="border border-[#d8e1dd] p-6">
              <h2 className="font-heading text-2xl">{item.title}</h2>
              <p className="mt-3 leading-7 text-[#536371]">
                {item.description}
              </p>
              <a
                className="text-link mt-6 inline-flex min-h-11 items-center gap-2 font-bold"
                href={`/resources/${item.slug}.txt`}
                download
              >
                <Download size={18} aria-hidden="true" />
                Download worksheet (.txt)
              </a>
            </article>
          ))}
        </div>
        <section className="mt-12 border-t border-[#d8e1dd] pt-8">
          <h2 className="font-heading text-2xl">
            Use one worksheet, then review it.
          </h2>
          <p className="mt-4 max-w-3xl leading-8 text-[#536371]">
            Choose the resource that matches your next step. Complete it in your
            own words, revisit it after practice and decide what to improve.
            These are learning tools; they do not score your suitability or
            predict selection.
          </p>
          <div className="mt-6 flex flex-wrap gap-6">
            <Link className="text-link" href="/selection/ssb/group-discussion">
              Group discussion guide
            </Link>
            <Link
              className="text-link"
              href="/selection/ssb/personal-interview"
            >
              Personal interview guide
            </Link>
            <Link className="text-link" href="/eligibility">
              Eligibility guide
            </Link>
          </div>
        </section>
        <Link
          href="/consultation"
          className="mt-10 inline-flex min-h-11 items-center gap-3 bg-[#30471f] px-6 py-4 font-bold text-white transition hover:bg-[#3f5b2b]"
        >
          Discuss your preparation <ArrowRight size={18} />
        </Link>
      </div>
      <SiteFooter />
    </main>
  );
}
