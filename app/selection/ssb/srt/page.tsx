import type { Metadata } from 'next';
import { SsbGuidePage } from '@/components/ssb-guide-page';
import { psychologyGuides } from '@/lib/psychology-guides';
export const metadata: Metadata = {
  title:
    'Situation Reaction Test in SSB: Practice & Preparation | March Ahead Academy',
  description:
    'SRT asks you to write how you would respond to short everyday situations. Preparation involves reading the situation carefully and expressing a practical course of action clearly.',
  alternates: { canonical: '/selection/ssb/srt/' },
  openGraph: {
    title: 'Situation Reaction Test | March Ahead Academy',
    description:
      'SRT asks you to write how you would respond to short everyday situations. Preparation involves reading the situation carefully and expressing a practical course of action clearly.',
    url: '/selection/ssb/srt/',
    type: 'article',
  },
};
export default function Page() {
  return <SsbGuidePage guide={psychologyGuides['srt']} />;
}
