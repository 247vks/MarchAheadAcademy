import Link from 'next/link';
import { ArrowRight, MessageSquareQuote } from 'lucide-react';
import { approvedExpertInsights } from '@/lib/approved-expert-insights';

export function ExpertContributions() {
  return (
    <section
      className="my-9 border-y border-[#d8e1dd] py-7"
      aria-labelledby="expert-contributions"
    >
      <h2
        id="expert-contributions"
        className="flex items-start gap-3 font-heading text-3xl"
      >
        <MessageSquareQuote
          className="mt-1 shrink-0 text-[#397fa8]"
          aria-hidden="true"
        />
        Insights from Commander Sharma
      </h2>
      <p className="mt-4 max-w-4xl leading-7 text-[#536371]">
        Explore articles featuring his contributions on assessment, preparation
        and TAT. Each includes an edited passage from his interview responses,
        alongside the Academy’s guidance.
      </p>
      <div className="mt-5 grid gap-5 md:grid-cols-3">
        {Object.entries(approvedExpertInsights).map(([path, insight]) => (
          <Link
            key={path}
            href={`${path}#commander-insight`}
            className="editorial-card flex flex-col p-5"
          >
            <h3 className="font-heading text-xl">{insight.heading}</h3>
            <span className="mt-auto inline-flex items-center gap-2 pt-5 font-semibold text-[#2f6f94]">
              Read his perspective <ArrowRight size={17} aria-hidden="true" />
            </span>
          </Link>
        ))}
      </div>
      <Link
        className="text-link mt-5 inline-block"
        href="/authors/cdr-sulakshan-kumar-sharma/"
      >
        About Commander Sulakshan Kumar Sharma (Retd.)
      </Link>
    </section>
  );
}
