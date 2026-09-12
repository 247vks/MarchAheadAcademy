import { withPageMetadata } from '@/lib/page-metadata';
import type { Metadata } from 'next';
import { SsbGuidePage } from '@/components/ssb-guide-page';
import { getSsbGuide } from '@/lib/ssb-guides';
export const metadata: Metadata = withPageMetadata({ alternates: { canonical: '/selection/ssb/personal-interview' }, title: 'SSB Personal Interview: An Ethical Preparation Guide', description: 'Prepare for the SSB or AFSB personal interview through accurate self-knowledge, informed motivation and clear communication.' });
export default function Page() { return <SsbGuidePage guide={getSsbGuide('personal-interview')} />; }
