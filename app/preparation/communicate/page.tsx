import type { Metadata } from 'next';
import { PreparationGuide } from '@/components/preparation-guide';
import { getPreparationGuide } from '@/lib/preparation-guides';
export const metadata: Metadata = {
  alternates: { canonical: '/preparation/communicate' },
  title: 'Communicate With Clarity | March Ahead Academy',
  description:
    'Develop listening, structured thinking and genuine expression for defence-career preparation.',
};
export default function Page() {
  return <PreparationGuide guide={getPreparationGuide('communicate')} />;
}
