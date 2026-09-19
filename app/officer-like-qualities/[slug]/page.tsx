import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AuthorityPage } from '@/components/authority-shell';
import { withPageMetadata } from '@/lib/page-metadata';
import { olqArticles, olqSections } from '@/lib/olq-articles';
export const dynamicParams = false;
export function generateStaticParams() { return olqArticles.map(([slug]) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const a = olqArticles.find(([s]) => s === slug); if (!a) return {}; return withPageMetadata({ title: `${a[1]} | March Ahead Academy`, description: a[2], alternates: { canonical: `/officer-like-qualities/${slug}/` }, openGraph: { title: a[1], description: a[2], url: `/officer-like-qualities/${slug}/`, type: 'article', images: ['/og-tri-service.webp'] } }); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = olqArticles.find(([s]) => s === slug);
  if (!a) notFound();
  return <AuthorityPage currentHref={`/officer-like-qualities/${slug}/`} eyebrow="Officer Like Qualities" title={a[1]} lede={a[2]} status="Academy guidance" publishedAt="2026-09-17" modifiedAt="2026-09-19" showEntryNotice={false}
    sections={[...olqSections[slug], { title: 'How this relates to officer selection', body: 'The Indian Air Force describes SSB assessment as looking at Officer Like Qualities and trainability through interview, group-testing and psychological techniques. This article develops an everyday preparation theme; these six Academy guides are not an official list of qualities or a method for calculating an SSB result. The exercises are Academy suggestions.' }]}
    sources={[{ label: 'Indian Air Force: CDSE and officer-selection assessment', href: 'https://careerairforce.gov.in/cdse' }, { label: 'Indian Air Force: AFSB testing', href: 'https://careerairforce.gov.in/air-force-selection-board-afsb-testing' }]}
    related={[{ label: 'Officer Like Qualities overview', href: '/officer-like-qualities/' }, ...olqArticles.filter(([s]) => s !== slug).map(([s, title]) => ({ label: title, href: `/officer-like-qualities/${s}/` })), { label: 'SSB group testing and GTO', href: '/ssb-gto/' }, { label: 'SSB selection overview', href: '/selection/ssb/' }, { label: 'One-on-one SSB coaching', href: '/ssb-coaching/' }]} />;
}
