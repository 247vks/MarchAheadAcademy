import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { AuthorityPage } from '@/components/authority-shell';
import { psychologyArticles } from '@/lib/psychology-articles';

export const dynamicParams = false;
export function generateStaticParams() {
  return psychologyArticles.map(({ slug }) => ({ slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = psychologyArticles.find((item) => item.slug === slug);
  if (!article) return {};
  const url = `/ssb-psychology/${slug}/`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.description,
      url,
      type: 'article',
      images: ['/og-tri-service.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: article.title,
      description: article.description,
      images: ['/og-tri-service.png'],
    },
  };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = psychologyArticles.find((item) => item.slug === slug);
  if (!article) notFound();
  return (
    <AuthorityPage
      currentHref={`/ssb-psychology/${slug}/`}
      eyebrow="SSB Psychology"
      title={article.title}
      lede={article.description}
      status="Academy guidance"
      publishedAt="2026-09-12"
      modifiedAt="2026-09-12"
      sections={article.sections}
      showEntryNotice={false}
      expertContext="March Ahead Academy is led by Commander Sulakshan Kumar Sharma (Retd.), former Senior Service Psychologist at the Naval Selection Centre, Bangalore. His background includes 32 years of military service and 3 years of SSB psychologist experience."
      sources={[
        {
          label: 'Indian Air Force: selection process',
          href: 'https://www.careerairforce.gov.in/selection-process',
        },
        {
          label: 'Indian Air Force: officer-selection assessment overview',
          href: 'https://careerairforce.gov.in/cdse',
        },
      ]}
      related={[
        { label: 'SSB Psychology hub', href: '/ssb-psychology/' },
        {
          label: 'How to prepare for psychology tests',
          href: '/selection/ssb/psychology-tests/',
        },
        { label: 'TAT guide', href: '/selection/ssb/tat/' },
        { label: 'Stage I and PPDT', href: '/selection/ssb/stage-1/' },
        ...psychologyArticles
          .filter((item) => item.slug !== slug)
          .map((item) => ({
            label: item.title,
            href: `/ssb-psychology/${item.slug}/`,
          })),
        { label: 'One-on-one SSB coaching', href: '/ssb-coaching/' },
      ]}
    />
  );
}
