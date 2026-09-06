import type { Metadata } from 'next';
import { PreparationGuide } from '@/components/preparation-guide';
import { getPreparationGuide } from '@/lib/preparation-guides';
export const metadata: Metadata = {
  alternates: { canonical: '/preparation/lead' },
  title: 'Lead Before the Title | March Ahead Academy',
  description:
    'Practical guidance for developing responsibility, initiative, listening and group leadership.',
};
export default function Page() {
  return <PreparationGuide guide={getPreparationGuide('lead')} />;
}
