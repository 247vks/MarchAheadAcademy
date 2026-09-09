import { Compass, Eye, Route, ShieldCheck } from 'lucide-react';

export type ExpectationPreviewData = {
  label: string;
  heading: string;
  intro: string;
  format: { title: string; detail: string }[];
  samples: { area: string; prompt: string; lookFor: string }[];
  support: string[];
};

export function ExpectationPreview({ data }: { data: ExpectationPreviewData }) {
  return (
    <section className="border-y border-[#d9e3df] bg-[#f7faf8] py-10 sm:py-12 lg:py-14">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        <div className="flex items-center gap-3 text-xs font-bold tracking-[.16em] text-[#397fa8] uppercase">
          <Eye size={17} aria-hidden="true" />
          {data.label}
        </div>
        <h2 className="mt-4 max-w-3xl font-heading text-4xl leading-tight">
          {data.heading}
        </h2>
        <p className="mt-4 max-w-3xl leading-8 text-[#536371]">{data.intro}</p>

        <div className="mt-9 grid gap-px overflow-hidden border border-[#cdd8d3] bg-[#cdd8d3] sm:grid-cols-2 lg:grid-cols-3">
          {data.format.map((item, index) => (
            <div key={item.title} className="bg-white p-5">
              <span className="text-xs font-bold text-[#4b6228]">
                0{index + 1}
              </span>
              <h3 className="mt-2 font-heading text-xl">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#5c6974]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-col justify-between gap-3 sm:mt-10 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold tracking-[.16em] text-[#4b6228] uppercase">
              See the experience
            </p>
            <h3 className="mt-2 font-heading text-3xl">Illustrative samples</h3>
          </div>
          <p className="inline-flex items-center gap-2 border border-[#d6a44b] bg-[#fff9ed] px-3 py-2 text-xs font-semibold text-[#6f5017]">
            <ShieldCheck size={15} aria-hidden="true" />
            Original practice examples from March Ahead Academy; not official
            test questions
          </p>
        </div>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {data.samples.map((sample) => (
            <article
              key={sample.area}
              className="border border-[#d9e3df] bg-white p-5 sm:p-6"
            >
              <p className="text-xs font-bold tracking-[.14em] text-[#397fa8] uppercase">
                {sample.area}
              </p>
              <p className="mt-4 min-h-24 font-heading text-xl leading-7">
                {sample.prompt}
              </p>
              <p className="mt-5 border-t border-[#e1e7e4] pt-4 text-xs leading-5 text-[#687781]">
                <strong className="text-[#0a1e33]">Practise:</strong>{' '}
                {sample.lookFor}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-9 grid gap-6 bg-[#071f3d] p-6 text-white sm:mt-10 md:grid-cols-[.75fr_1.25fr] md:p-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-[.16em] text-[#9bd1ea] uppercase">
              <Compass size={17} aria-hidden="true" />
              How we help
            </div>
            <h3 className="mt-3 font-heading text-3xl">
              Navigate with purpose.
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Familiarity reduces uncertainty. Feedback then turns practice into
              a repeatable plan.
            </p>
          </div>
          <ol className="grid gap-3 sm:grid-cols-2">
            {data.support.map((item, index) => (
              <li
                key={item}
                className="flex gap-3 border border-white/15 p-4 text-sm leading-6"
              >
                <Route
                  size={16}
                  className="mt-1 shrink-0 text-[#9bd1ea]"
                  aria-hidden="true"
                />
                <span>
                  <strong className="mr-2 text-[#9bd1ea]">0{index + 1}</strong>
                  {item}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
