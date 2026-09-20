import { notFound } from 'next/navigation';
import { AuthorityPage } from '@/components/authority-shell';
import { withPageMetadata } from '@/lib/page-metadata';
import { nextClusterGuides } from '@/lib/next-cluster-guides';
export function clusterMetadata(path: string) {
  const guide = nextClusterGuides.find(item => item.path === path);
  if (!guide) return {};
  return withPageMetadata({ title: guide.title, description: guide.description, alternates: { canonical: path }, openGraph: { title: guide.title, description: guide.description, url: path, type: 'article', images: ['/og-tri-service.webp'] } });
}
export function ClusterGuidePage({ path }: { path: string }) {
  const guide = nextClusterGuides.find(item => item.path === path);
  if (!guide) notFound();
  return <AuthorityPage currentHref={path} eyebrow="Knowledge Centre · preparation" title={guide.title} lede={guide.description} status="Academy guidance" publishedAt="2026-09-20" modifiedAt="2026-09-20" showEntryNotice={false} sections={guide.sections} sources={guide.sources} related={[
    { label: guide.parentTitle, href: guide.parent },
    ...nextClusterGuides.filter(item => item.parent === guide.parent && item.path !== path).map(item => ({ label: item.title, href: item.path })),
    { label: 'Personal Interview communication', href: '/ssb-personal-interview/communication/' },
    { label: 'Officer Like Qualities', href: '/officer-like-qualities/' },
    { label: 'SSB psychology', href: '/ssb-psychology/' },
    { label: 'One-on-one coaching', href: '/one-on-one-coaching/' },
  ]} />;
}
