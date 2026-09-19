import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AuthorityPage } from '@/components/authority-shell';
import { withPageMetadata } from '@/lib/page-metadata';
import { piArticles, piSections } from '@/lib/pi-articles';

export const dynamicParams = false;
export function generateStaticParams() { return piArticles.map(([slug]) => ({ slug })); }
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = piArticles.find(([item]) => item === slug);
  if (!article) return {};
  return withPageMetadata({ title: `${article[1]} | March Ahead Academy`, description: article[2], alternates: { canonical: `/ssb-personal-interview/${slug}/` }, openGraph: { title: article[1], description: article[2], url: `/ssb-personal-interview/${slug}/`, type: 'article', images: ['/og-tri-service.webp'] } });
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = piArticles.find(([item]) => item === slug);
  if (!article) notFound();
  const original = piArticles.slice(0, 5).some(([item]) => item === slug);
  return <AuthorityPage
    currentHref={`/ssb-personal-interview/${slug}/`}
    eyebrow="SSB personal interview"
    title={article[1]}
    lede={article[2]}
    status="Academy guidance"
    publishedAt={original ? '2026-09-17' : '2026-09-19'}
    modifiedAt="2026-09-19"
    showEntryNotice={false}
    sections={[{ title: 'Your starting point', body: article[3] }, ...piSections[slug]]}
    sources={[{ label: 'Indian Air Force: the interview within the selection process', href: 'https://www.careerairforce.gov.in/selection-process' }]}
    related={[
      { label: 'Personal Interview preparation hub', href: '/ssb-personal-interview/' },
      { label: 'The interview in the wider SSB process', href: '/selection/ssb/personal-interview/' },
      ...piArticles.filter(([item]) => item !== slug).map(([item, title]) => ({ label: title, href: `/ssb-personal-interview/${item}/` })),
      { label: 'One-on-one SSB coaching', href: '/ssb-coaching/' },
      { label: 'Commander Sharma’s profile', href: '/authors/cdr-sulakshan-kumar-sharma/' },
    ]}
  />;
}
