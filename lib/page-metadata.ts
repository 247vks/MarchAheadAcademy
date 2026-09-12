import type { Metadata } from 'next';
import { siteName } from '@/lib/site';

/** Keep social identity aligned with the page, not inherited homepage defaults. */
export function withPageMetadata(metadata: Metadata): Metadata {
  const canonical = metadata.alternates?.canonical;
  const path = typeof canonical === 'string' ? canonical : undefined;
  const url = path ? (path === '/' ? '/' : `${path.replace(/\/$/, '')}/`) : undefined;
  const title = typeof metadata.title === 'string' ? metadata.title : undefined;
  const description = metadata.description ?? undefined;
  return {
    ...metadata,
    alternates: { ...metadata.alternates, ...(url ? { canonical: url } : {}) },
    openGraph: {
      type: 'website',
      siteName,
      locale: 'en_IN',
      images: ['/og-tri-service.webp'],
      ...metadata.openGraph,
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
      ...(url ? { url } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      images: ['/og-tri-service.webp'],
      ...metadata.twitter,
      ...(title ? { title } : {}),
      ...(description ? { description } : {}),
    },
  };
}
