import type { Metadata } from 'next';
import { PreparationGuide } from '@/components/preparation-guide';
import { getPreparationGuide } from '@/lib/preparation-guides';
export const metadata: Metadata = {
  alternates: { canonical: '/preparation/learn' },
  title: 'Learn With Purpose | March Ahead Academy',
  description:
    'Learn how to understand defence career routes, official sources and selection pathways before preparing.',
};
export default function Page() {
  return <PreparationGuide guide={getPreparationGuide('learn')} />;
}
