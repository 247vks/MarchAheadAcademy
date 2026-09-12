import { withPageMetadata } from '@/lib/page-metadata';
import type { Metadata } from 'next';
import { SsbGuidePage } from '@/components/ssb-guide-page';
import { getSsbGuide } from '@/lib/ssb-guides';
export const metadata: Metadata = withPageMetadata({ alternates: { canonical: '/selection/ssb/group-testing' }, title: 'SSB Group Testing: What to Expect & Practise', description: 'Prepare ethically for interactive SSB and AFSB group testing through cooperation, initiative, planning and responsible physical readiness.' });
export default function Page() { return <SsbGuidePage guide={getSsbGuide('group-testing')} />; }
