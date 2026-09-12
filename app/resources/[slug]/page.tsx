import type { Metadata } from 'next';
import { withPageMetadata } from '@/lib/page-metadata';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Download, ClipboardList, ArrowRight } from 'lucide-react';
import { SiteHeader, SiteFooter } from '@/components/authority-shell';
import worksheets from '../worksheets.json';
import { PrintButton } from '../print-button';

export function generateStaticParams() {
  return worksheets.map(({ slug }) => ({ slug }));
}
export const dynamicParams = false;
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = worksheets.find((worksheet) => worksheet.slug === slug);
  if (!item) return {};
  return withPageMetadata({
    title: `${item.title} | Free PDF | March Ahead Academy`,
    description: item.description,
    alternates: { canonical: `/resources/${slug}/` },
  });
}
export default async function WorksheetPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = worksheets.find((worksheet) => worksheet.slug === slug);
  if (!item) notFound();
  return (
    <main className="bg-white text-[#0a1e33]">
      <div className="worksheet-screen-only">
        <SiteHeader />
      </div>
      <article className="worksheet-content mx-auto max-w-5xl px-5 py-10 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="worksheet-screen-only mb-6 text-sm"
        >
          <Link href="/resources/" className="text-link">
            Preparation library
          </Link>
          <span aria-hidden="true"> / </span>
          <span>{item.title}</span>
        </nav>
        <p className="section-kicker">
          March Ahead Academy | Original practice resource
        </p>
        <h1 className="mt-4 font-heading text-4xl sm:text-5xl">{item.title}</h1>
        <p className="mt-5 text-lg leading-8 text-[#536371]">{item.intro}</p>
        <div className="worksheet-screen-only mt-6 flex flex-wrap gap-3">
          <a
            href={`/resources/${slug}.pdf`}
            download
            className="inline-flex min-h-11 items-center gap-2 bg-[#30471f] px-5 py-3 font-bold text-white transition hover:bg-[#3f5b2b]"
          >
            <Download size={18} aria-hidden="true" /> Download PDF
          </a>
          <PrintButton />
        </div>
        <section className="worksheet-screen-only mt-9 border-t border-[#d8e1dd] pt-7">
          <h2 className="font-heading text-2xl">How to use this worksheet</h2>
          <ol className="mt-4 list-decimal space-y-3 pl-6 leading-7">
            {item.steps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </section>
        <section className="worksheet-prompts mt-9">
          <h2 className="flex items-center gap-3 font-heading text-2xl">
            <ClipboardList className="text-[#397fa8]" aria-hidden="true" /> Your
            working notes
          </h2>
          <p className="mt-3 text-sm text-[#536371]">
            Complete in your own words. No upload or submission is required.
          </p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            {item.prompts.map((prompt, index) => (
              <div
                key={prompt}
                className="worksheet-prompt border border-[#d8e1dd] p-5"
              >
                <h3 className="font-semibold leading-7">
                  <span className="mr-2 text-[#397fa8]">{index + 1}.</span>
                  {prompt}
                </h3>
                <div aria-hidden="true" className="mt-4 space-y-5">
                  <div className="border-b border-[#d8e1dd]" />
                  <div className="border-b border-[#d8e1dd]" />
                  <div className="border-b border-[#d8e1dd]" />
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="worksheet-screen-only mt-9">
          <h2 className="font-heading text-2xl">Review your practice</h2>
          <p className="mt-4 leading-8 text-[#536371]">{item.review}</p>
          <h2 className="mt-7 font-heading text-2xl">
            Make your next step specific
          </h2>
          <p className="mt-4 leading-8 text-[#536371]">{item.next}</p>
          <div className="mt-6 flex flex-wrap gap-6">
            <Link className="text-link" href={item.guide}>
              {item.guideLabel}
            </Link>
            <Link
              className="text-link inline-flex items-center gap-2"
              href="/consultation/"
            >
              Book a consultation <ArrowRight size={16} />
            </Link>
          </div>
        </section>
        <p className="mt-8 text-sm leading-6 text-[#536371]">
          Original learning tool from March Ahead Academy, not an official test
          paper or selection prediction. Keep personal notes private.
        </p>
      </article>
      <div className="worksheet-screen-only">
        <SiteFooter />
      </div>
      <style>{`@media print { .worksheet-screen-only { display:none!important; } .worksheet-content { max-width:none;padding:0; } .worksheet-content h1 { font-size:24pt; } .worksheet-content p { font-size:10pt;line-height:1.5; } .worksheet-prompts { margin-top:16pt; } .worksheet-prompts>div { display:grid;grid-template-columns:1fr 1fr;gap:12pt; } .worksheet-prompt { break-inside:avoid;padding:10pt; } .worksheet-prompt h3 { font-size:10pt;line-height:1.4; } @page { size:A4;margin:16mm; } }`}</style>
    </main>
  );
}
