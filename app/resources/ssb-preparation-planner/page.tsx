import Link from 'next/link';
import { withPageMetadata } from '@/lib/page-metadata';
import {
  SiteHeader,
  SiteFooter,
  Breadcrumbs,
} from '@/components/authority-shell';
import { PreparationPlanner } from '@/components/preparation-planner';
export const metadata = withPageMetadata({
  title:
    'Free SSB Preparation Planner | Personal Practice Plan | March Ahead Academy',
  description:
    'Create a practical SSB preparation plan for your time, focus and attempt stage. Use it privately online and print or save your plan as PDF.',
  alternates: { canonical: '/resources/ssb-preparation-planner/' },
});
export default function Page() {
  return (
    <main className="bg-white text-[#0a1e33]">
      <div className="planner-screen">
        <SiteHeader />
      </div>
      <article className="planner-content mx-auto max-w-5xl px-5 py-10 lg:px-8">
        <div className="planner-screen">
          <Breadcrumbs current="SSB preparation planner" tone="light" />
        </div>
        <p className="section-kicker">
          March Ahead Academy · practical preparation
        </p>
        <h1 className="mt-4 font-heading text-4xl sm:text-5xl">
          Your SSB preparation planner
        </h1>
        <p className="mt-5 text-lg leading-8 text-[#536371]">
          Turn your available time into a balanced practice routine. Choose your
          focus and attempt stage, then adapt the plan around education, work
          and everyday responsibilities.
        </p>
        <PreparationPlanner />
        <section className="planner-screen mt-10 border-t border-[#d8e1dd] pt-7">
          <h2 className="font-heading text-2xl">
            A useful routine, with or without the tool
          </h2>
          <p className="mt-4 leading-8">
            Start with the selection overview. Make time for your own psychology
            responses, real personal-interview examples, discussion and
            practical organisation. After each session, record one thing to
            improve. Repeat candidates can begin with observed habits from their
            preparation, without guessing why a board reached a decision.
          </p>
          <p className="mt-4 leading-8">
            The planner does not schedule coaching appointments, assess
            eligibility or replace supervised physical and group practice.
          </p>
          <div className="mt-5 flex flex-wrap gap-5">
            <Link className="text-link" href="/resources/">
              Free printable worksheets
            </Link>
            <Link className="text-link" href="/guidance/first-ssb-attempt/">
              First-attempt guidance
            </Link>
            <Link className="text-link" href="/guidance/ssb-repeaters/">
              Repeat-candidate guidance
            </Link>
          </div>
        </section>
      </article>
      <div className="planner-screen">
        <SiteFooter />
      </div>
      <style>{`@media print { .planner-screen { display:none!important; } .planner-content { max-width:none;padding:0; } .planner-task { break-inside:avoid; } @page { size:A4;margin:16mm; } }`}</style>
    </main>
  );
}
