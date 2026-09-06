import type { Metadata } from 'next';
import { SsbGuidePage } from '@/components/ssb-guide-page';
import { getSsbGuide } from '@/lib/ssb-guides';
export const metadata: Metadata = { alternates: { canonical: '/selection/ssb/stage-1' }, title: 'SSB Stage 1: OIR & PP&DT Guide | March Ahead Academy', description: 'Understand SSB and AFSB Stage I screening, OIR, picture perception and discussion through official-source-led, ethical guidance.' };
export default function Page() { return <SsbGuidePage guide={getSsbGuide('stage-1')} />; }
