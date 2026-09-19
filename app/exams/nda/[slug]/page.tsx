import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { withPageMetadata } from '@/lib/page-metadata';
import { AuthorityPage } from '@/components/authority-shell';
import { ndaArticles, ndaSections } from '@/lib/nda-articles';

export const dynamicParams = false;
export function generateStaticParams() {
  return ndaArticles.map(([slug]) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = ndaArticles.find(([path]) => path === slug);
  if (!article) return {};
  return withPageMetadata({
    title: `${article[1]} | March Ahead Academy`,
    description: article[2],
    alternates: { canonical: `/exams/nda/${slug}/` },
    openGraph: { title: article[1], description: article[2], url: `/exams/nda/${slug}/`, type: 'article', images: ['/og-tri-service.webp'] },
  });
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = ndaArticles.find(([path]) => path === slug);
  if (!article) notFound();
  const existing = ['eligibility', 'syllabus-exam-pattern', 'mathematics-preparation', 'gat-preparation', 'written-exam-to-ssb'].includes(slug);
  return <AuthorityPage
    currentHref={`/exams/nda/${slug}/`}
    eyebrow="NDA & Naval Academy"
    title={article[1]}
    lede={article[2]}
    status="Academy preparation guidance"
    publishedAt={existing ? '2026-09-18' : '2026-09-19'}
    modifiedAt="2026-09-19"
    showEntryNotice={false}
    sections={ndaSections[slug]}
    sources={[
      { label: 'UPSC NDA & NA II 2026: notice and official question papers', href: 'https://www.upsc.gov.in/examinations/National%20Defence%20Academy%20and%20Naval%20Academy%20Examination%20%28II%29%2C%202026' },
      { label: 'UPSC active examinations: find the notice for your intake', href: 'https://www.upsc.gov.in/examinations/active-exams' },
      { label: 'Indian Air Force: NDA entry and education requirements', href: 'https://www.careerairforce.gov.in/nda-entry' },
      { label: 'UPSC official previous question papers', href: 'https://www.upsc.gov.in/examinations/previous-question-papers' },
      ...(slug === 'medical-readiness' ? [{ label: 'Indian Air Force recruitment: official medical-standards resources', href: 'https://www.careerairforce.gov.in/' }] : []),
    ]}
    related={[
      { label: 'NDA & Naval Academy hub', href: '/exams/nda/' },
      ...ndaArticles.filter(([path]) => path !== slug).map(([path, title]) => ({ label: title, href: `/exams/nda/${path}/` })),
      { label: 'Understand the SSB selection process', href: '/selection/ssb/' },
      { label: 'One-on-one coaching', href: '/ssb-coaching/' },
      { label: 'Commander Sharma’s experience', href: '/authors/cdr-sulakshan-kumar-sharma/' },
    ]}
  />;
}
