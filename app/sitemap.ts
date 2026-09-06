import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';

export const dynamic = 'force-static';

const routes = [
  '', '/about', '/career-paths', '/career-paths/after-12th',
  '/career-paths/after-graduation', '/editorial-standards', '/eligibility',
  '/exams', '/exams/afcat', '/exams/cds', '/exams/nda', '/notifications',
  '/preparation/communicate', '/preparation/lead', '/preparation/learn',
  '/preparation/prepare', '/preparation/serve', '/preparation/train',
  '/selection/ssb', '/services', '/services/air-force', '/services/army',
  '/services/navy',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: route ? `${siteUrl}${route}/` : `${siteUrl}/`,
    changeFrequency:
      route === '/notifications' ? 'daily' : route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/career-paths' ? 0.9 : 0.7,
  }));
}
