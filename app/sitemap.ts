import type { MetadataRoute } from 'next';
import { contentUpdates } from '@/lib/content-updates';
import { siteUrl } from '@/lib/site';
import { psychologyArticles } from '@/lib/psychology-articles';
import { piArticles } from '@/lib/pi-articles';
import { olqArticles } from '@/lib/olq-articles';
import { ndaArticles } from '@/lib/nda-articles';
import { nextClusterGuides } from '@/lib/next-cluster-guides';

export const dynamic = 'force-static';

const routes = [
  '',
  '/about',
  '/consultation',
  '/one-on-one-coaching',
  '/ssb-coaching',
  '/knowledge-centre',
  '/ssb-psychology',
  '/ssb-personal-interview',
  '/ssb-gto',
  '/officer-like-qualities',
  '/how-to-choose-ssb-coaching',
  '/academy-evidence',
  '/media-kit',
  '/guidance/first-ssb-attempt',
  '/guidance/ssb-repeaters',
  '/guidance/parents-nda-aspirants',
  '/privacy-policy',
  '/cookie-policy',
  '/resources',
  '/resources/ssb-preparation-planner',
  '/resources/personal-interview-worksheet',
  '/resources/self-description-reflection',
  '/resources/group-discussion-practice',
  '/resources/nda-preparation-planner',
  '/authors/cdr-sulakshan-kumar-sharma',
  '/career-paths',
  '/career-paths/foundation',
  '/career-paths/after-12th',
  '/career-paths/after-graduation',
  '/career-paths/graduate-officer-entries',
  '/career-paths/ncc-special-entry',
  '/career-paths/tes',
  '/editorial-standards',
  '/eligibility',
  '/exams',
  '/exams/afcat',
  '/exams/cds',
  '/exams/nda',
  '/notifications',
  '/preparation/communicate',
  '/preparation/lead',
  '/preparation/learn',
  '/preparation/prepare',
  '/preparation/serve',
  '/preparation/train',
  '/selection/ssb',
  '/selection/ssb/stage-1',
  '/selection/ssb/psychology-tests',
  '/selection/ssb/srt',
  '/selection/ssb/tat',
  '/selection/ssb/wat',
  '/selection/ssb/self-description',
  '/selection/ssb/group-testing',
  '/selection/ssb/group-discussion',
  '/selection/ssb/personal-interview',
  '/services',
  '/services/air-force',
  '/services/army',
  '/services/navy',
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...routes,
    ...nextClusterGuides.map(({ path }) => path.replace(/\/$/, '')),
    ...psychologyArticles.map(({ slug }) => `/ssb-psychology/${slug}`),
    ...piArticles.map(([slug]) => `/ssb-personal-interview/${slug}`),
    ...olqArticles.map(([slug]) => `/officer-like-qualities/${slug}`),
    ...ndaArticles.map(([slug]) => `/exams/nda/${slug}`),
  ].map((route) => ({
    url: route ? `${siteUrl}${route}/` : `${siteUrl}/`,
    ...(contentUpdates[route] ? { lastModified: contentUpdates[route] } : {}),
    changeFrequency:
      route === '/notifications'
        ? 'daily'
        : route === ''
          ? 'weekly'
          : 'monthly',
    priority: route === '' ? 1 : route === '/career-paths' ? 0.9 : 0.7,
  }));
}
