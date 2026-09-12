import { withPageMetadata } from '@/lib/page-metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Download, ArrowRight } from 'lucide-react';
import { SiteHeader, SiteFooter } from '@/components/authority-shell';
import { TopicIcon } from '@/components/topic-icon';
import resources from './worksheets.json';
export const metadata: Metadata = withPageMetadata({
  title: 'Free Defence Preparation Worksheets | March Ahead Academy',
  description:
    'Explore free personal interview, Self Description, group discussion and NDA preparation worksheets. Read the guidance, download a branded PDF or print a worksheet.',
  alternates: { canonical: '/resources/' },
});
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
          a branded PDF or open the worksheet page for practical guidance and a
          print-friendly version. No sign-up is required.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {resources.map((item, index) => (
            <article
              key={item.slug}
              className="flex flex-col border border-[#d8e1dd] border-t-4 bg-white p-6 sm:p-8"
              style={{
                borderTopColor: ['#4b6228', '#397fa8', '#071f3d', '#946719'][
                  index
                ],
              }}
            >
              <div className="mb-5 flex items-center justify-between">
                <TopicIcon topic={item.title} />
                <span className="text-xs font-bold tracking-widest text-[#536371]">
                  WORKSHEET 0{index + 1}
                </span>
              </div>
              <h2 className="font-heading text-2xl">{item.title}</h2>
              <p className="mt-3 leading-7 text-[#536371]">
                {item.description}
              </p>
              <div className="mt-auto pt-5">
                <Link
                  href={`/resources/${item.slug}/`}
                  className="text-link inline-flex items-center gap-2"
                >
                  Open worksheet and guidance{' '}
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
                <a
                  className="mt-5 flex min-h-11 items-center gap-2 border-t border-[#d8e1dd] pt-4 font-bold text-[#2f6f94] underline underline-offset-4 transition hover:text-[#4b6228]"
                  href={`/resources/${item.slug}.pdf`}
                  download
                >
                  <Download size={18} aria-hidden="true" />
                  Download PDF
                </a>
              </div>
            </article>
          ))}
        </div>
        <section className="mt-12 border-t border-[#d8e1dd] pt-8">
          <h2 className="flex items-center gap-4 font-heading text-2xl">
            <TopicIcon topic="practice" /> Use one worksheet, then review it.
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
