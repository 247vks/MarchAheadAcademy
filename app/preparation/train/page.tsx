import { withPageMetadata } from '@/lib/page-metadata';
import type { Metadata } from 'next';
import { PreparationGuide } from '@/components/preparation-guide';
import { getPreparationGuide } from '@/lib/preparation-guides';
export const metadata: Metadata = withPageMetadata({
  alternates: { canonical: '/preparation/train' },
  title: 'Train With Discipline | March Ahead Academy',
  description:
    'Build a safe, progressive fitness foundation while respecting official medical standards.',
});
export default function Page() {
  return <PreparationGuide guide={getPreparationGuide('train')} />;
}
