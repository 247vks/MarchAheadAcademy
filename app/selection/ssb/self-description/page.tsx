import { withPageMetadata } from '@/lib/page-metadata';
import type { Metadata } from 'next';
import { SsbGuidePage } from '@/components/ssb-guide-page';
import { psychologyGuides } from '@/lib/psychology-guides';
export const metadata: Metadata = withPageMetadata({
  title:
    'Self Description Test in SSB: Practice & Preparation | March Ahead Academy',
  description:
    'Self Description is a written reflection exercise. Prepare by understanding your experiences, feedback and areas for improvement, and expressing them honestly in your own words.',
  alternates: { canonical: '/selection/ssb/self-description/' },
  openGraph: {
    title: 'Self Description Test | March Ahead Academy',
    description:
      'Self Description is a written reflection exercise. Prepare by understanding your experiences, feedback and areas for improvement, and expressing them honestly in your own words.',
    url: '/selection/ssb/self-description/',
    type: 'article',
  },
});
export default function Page() {
  return <SsbGuidePage guide={psychologyGuides['self-description']} />;
}
