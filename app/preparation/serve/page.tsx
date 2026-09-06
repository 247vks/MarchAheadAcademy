import type { Metadata } from 'next';
import { PreparationGuide } from '@/components/preparation-guide';
import { getPreparationGuide } from '@/lib/preparation-guides';
export const metadata: Metadata = {
  alternates: { canonical: '/preparation/serve' },
  title: 'Understand What It Means to Serve | March Ahead Academy',
  description:
    'Examine motivation, responsibility, contribution and commitment before choosing a defence career.',
};
export default function Page() {
  return <PreparationGuide guide={getPreparationGuide('serve')} />;
}
