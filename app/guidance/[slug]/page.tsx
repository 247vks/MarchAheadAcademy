import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AuthorityPage } from '@/components/authority-shell';
import { withPageMetadata } from '@/lib/page-metadata';
import { coachingDecisionGuides } from '@/lib/coaching-decision-guides';
import Link from 'next/link';

export const dynamicParams = false;
export function generateStaticParams() {
  return coachingDecisionGuides.map(({ slug }) => ({ slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = coachingDecisionGuides.find((item) => item.slug === slug);
  if (!guide) notFound();
  const path = `/guidance/${slug}/`;
  return withPageMetadata({ title: `${guide.title} | March Ahead Academy`, description: guide.description,
    alternates: { canonical: path }, openGraph: { title: guide.title, description: guide.description, url: path, type: 'article', images: ['/og-tri-service.webp'] } });
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const guide = coachingDecisionGuides.find((item) => item.slug === slug);
  if (!guide) notFound();
  return <AuthorityPage currentHref={`/guidance/${slug}`} eyebrow="From the Academy" title={guide.title}
    lede={guide.description} status="Preparation decision guide" publishedAt="2026-10-16" modifiedAt="2026-10-16"
    showEntryNotice={false} guidanceAfterSection={6} sections={guide.sections}
    visual={slug === 'review-ssb-practice-feedback' ? <aside className="border-t-2 border-[#397fa8] py-6"><h2 className="font-heading text-2xl">See a completed illustrative review</h2><p className="mt-3 leading-7">Explore an original communication-practice example and download the printable follow-up plan and blank review log.</p><Link className="text-link mt-4 inline-block" href="/resources/sample-feedback-pack/">Open the sample feedback pack</Link></aside> : undefined}
    sources={guide.sources ?? [{ label: 'Indian Air Force: AFSB testing and group activities', href: 'https://careerairforce.gov.in/air-force-selection-board-afsb-testing' }]}
    related={[
      ...(guide.related ?? []),
      ...coachingDecisionGuides.filter((item) => item.slug !== slug).map((item) => ({ label: item.title, href: `/guidance/${item.slug}/` })),
      { label: 'First SSB attempt', href: '/guidance/first-ssb-attempt/' },
      { label: 'Preparing again after SSB', href: '/guidance/ssb-repeaters/' },
      { label: 'SSB preparation planner', href: '/resources/ssb-preparation-planner/' },
      { label: 'Free preparation worksheets', href: '/resources/' },
      { label: 'SSB psychology', href: '/ssb-psychology/' },
      { label: 'How to choose SSB coaching', href: '/how-to-choose-ssb-coaching/' },
      { label: 'One-to-one SSB coaching', href: '/ssb-coaching/' },
      { label: 'Commander Sharma’s background', href: '/authors/cdr-sulakshan-kumar-sharma/' },
    ]} />;
}
