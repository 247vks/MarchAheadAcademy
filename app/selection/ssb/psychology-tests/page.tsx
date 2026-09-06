import type { Metadata } from 'next';
import { SsbGuidePage } from '@/components/ssb-guide-page';
import { getSsbGuide } from '@/lib/ssb-guides';
export const metadata: Metadata = { alternates: { canonical: '/selection/ssb/psychology-tests' }, title: 'SSB Psychology Tests: Ethical Preparation Guide', description: 'Understand the place of written psychological testing at SSB and AFSB without model personalities, leaked material or answer formulas.' };
export default function Page() { return <SsbGuidePage guide={getSsbGuide('psychology-tests')} />; }
