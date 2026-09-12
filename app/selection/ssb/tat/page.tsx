import { withPageMetadata } from '@/lib/page-metadata';
import type { Metadata } from 'next';
import { SsbGuidePage } from '@/components/ssb-guide-page';
import { psychologyGuides } from '@/lib/psychology-guides';
export const metadata: Metadata = withPageMetadata({
  title:
    'Thematic Apperception Test in SSB: Practice & Preparation | March Ahead Academy',
  description:
    'TAT involves writing stories in response to pictures. Practise observing the scene and building a coherent account of the people, their situation and their actions.',
  alternates: { canonical: '/selection/ssb/tat/' },
  openGraph: {
    title: 'Thematic Apperception Test | March Ahead Academy',
    description:
      'TAT involves writing stories in response to pictures. Practise observing the scene and building a coherent account of the people, their situation and their actions.',
    url: '/selection/ssb/tat/',
    type: 'article',
  },
});
export default function Page() {
  return <SsbGuidePage guide={psychologyGuides['tat']} />;
}
