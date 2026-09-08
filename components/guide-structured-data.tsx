import { siteUrl } from '@/lib/site';

type FAQ = { question: string; answer: string };

export function GuideStructuredData({
  path,
  title,
  description,
  section,
  faqs = [],
  modifiedAt = '2026-09-06',
  breadcrumbs,
}: {
  path: string;
  title: string;
  description: string;
  section: string;
  faqs?: FAQ[];
  modifiedAt?: string;
  breadcrumbs?: { name: string; href: string }[];
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
      dateModified: modifiedAt,
      articleSection: section,
      inLanguage: 'en-IN',
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: (
        breadcrumbs ?? [
          {
            name: 'Home',
            href: '/',
          },
          {
            name: title,
            href: path,
          },
        ]
      ).map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: new URL(crumb.href, siteUrl).href,
      })),
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
    <script
      id={`guide-structured-data-${path.replaceAll('/', '-') || 'home'}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': graph,
        }).replace(/</g, '\\u003c'),
      }}
    />
  );
}
