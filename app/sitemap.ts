import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
import { psychologyArticles } from '@/lib/psychology-articles';

export const dynamic = 'force-static';

const routes = [
  '',
  '/about',
  '/consultation',
  '/one-on-one-coaching',
  '/ssb-coaching',
  '/knowledge-centre',
  '/ssb-psychology',
  '/guidance/first-ssb-attempt',
  '/guidance/ssb-repeaters',
  '/guidance/parents-nda-aspirants',
  '/privacy-policy',
  '/cookie-policy',
  '/resources',
  '/resources/personal-interview-worksheet',
  '/resources/self-description-reflection',
  '/resources/group-discussion-practice',
  '/resources/nda-preparation-planner',
  '/authors/cdr-sulakshan-kumar-sharma',
  '/career-paths',
  '/career-paths/foundation',
  '/career-paths/after-12th',
  '/career-paths/after-graduation',
  '/career-paths/ncc-special-entry',
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
    ...psychologyArticles.map(({ slug }) => `/ssb-psychology/${slug}`),
  ].map((route) => ({
    url: route ? `${siteUrl}${route}/` : `${siteUrl}/`,
    changeFrequency:
      route === '/notifications'
        ? 'daily'
        : route === ''
          ? 'weekly'
          : 'monthly',
    priority: route === '' ? 1 : route === '/career-paths' ? 0.9 : 0.7,
  }));
}
