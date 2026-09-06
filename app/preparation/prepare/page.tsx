import type { Metadata } from 'next';
import { PreparationGuide } from '@/components/preparation-guide';
import { getPreparationGuide } from '@/lib/preparation-guides';
export const metadata: Metadata = {
  title: 'Prepare as a Complete Candidate | March Ahead Academy',
  description:
    'Build a sustainable preparation system across academics, awareness, communication, fitness and recovery.',
};
export default function Page() {
  return <PreparationGuide guide={getPreparationGuide('prepare')} />;
}
