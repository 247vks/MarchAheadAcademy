import Link from 'next/link';
import { MessageSquareText } from 'lucide-react';
import { getApprovedExpertInsight } from '@/lib/approved-expert-insights';

export function ApprovedExpertInsight({ path }: { path: string }) {
  const insight = getApprovedExpertInsight(path);
  if (!insight) return null;
  return (
    <section aria-labelledby="commander-insight" className="border-y border-[#d8e1dd] bg-white py-6">
      <p className="flex items-center gap-2 text-sm font-bold text-[#30471f]">
        <MessageSquareText size={20} aria-hidden="true" /> Commander Sharma’s perspective
      </p>
      <h2 id="commander-insight" className="mt-3 font-heading text-2xl">{insight.heading}</h2>
      <p className="mt-3 text-sm leading-6 text-[#536371]">
        Insights from <Link className="text-link font-semibold" href="/authors/cdr-sulakshan-kumar-sharma/">Commander Sulakshan Kumar Sharma (Retd.)</Link>, former Senior Service Psychologist, Naval Selection Centre, Bangalore.
      </p>
      {insight.paragraphs.map(paragraph => <p key={paragraph} className="mt-4 leading-8">{paragraph}</p>)}
      <p className="mt-4 text-sm leading-6 text-[#536371]">Edited paraphrase of his interview responses, published 7 October 2026.</p>
    </section>
  );
}
