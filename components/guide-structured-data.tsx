import Script from 'next/script';
import { siteUrl } from '@/lib/site';

type FAQ = { question: string; answer: string };

export function GuideStructuredData({
  path,
  title,
  description,
  section,
  faqs = [],
}: {
  path: string;
  title: string;
  description: string;
  section: string;
  faqs?: FAQ[];
}) {
  const url = `${siteUrl}${path}`;
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: title,
      description,
      url,
      mainEntityOfPage: { '@type': 'WebPage', '@id': url },
      author: { '@id': `${siteUrl}/#organization` },
      publisher: { '@id': `${siteUrl}/#organization` },
      dateModified: '2026-09-06',
      articleSection: section,
      inLanguage: 'en-IN',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: siteUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: title,
          item: url,
        },
      ],
    },
  ];

  if (faqs.length) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: { '@type': 'Answer', text: faq.answer },
      })),
    });
  }

  return (
    <Script
      id={`guide-structured-data-${path.replaceAll('/', '-') || 'home'}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': graph,
        }),
      }}
    />
  );
}
