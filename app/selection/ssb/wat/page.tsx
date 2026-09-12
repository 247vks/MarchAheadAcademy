import { withPageMetadata } from '@/lib/page-metadata';
import type { Metadata } from 'next';
import { SsbGuidePage } from '@/components/ssb-guide-page';
import { psychologyGuides } from '@/lib/psychology-guides';
export const metadata: Metadata = withPageMetadata({
  title:
    'Word Association Test in SSB: Practice & Preparation | March Ahead Academy',
  description:
    'WAT presents words and asks for the thought or idea they bring to mind. Practise clear written expression with unfamiliar words rather than collecting memorised slogans.',
  alternates: { canonical: '/selection/ssb/wat/' },
  openGraph: {
    title: 'Word Association Test | March Ahead Academy',
    description:
      'WAT presents words and asks for the thought or idea they bring to mind. Practise clear written expression with unfamiliar words rather than collecting memorised slogans.',
    url: '/selection/ssb/wat/',
    type: 'article',
  },
});
export default function Page() {
  return <SsbGuidePage guide={psychologyGuides['wat']} />;
}
