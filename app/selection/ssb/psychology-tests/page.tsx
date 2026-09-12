import { withPageMetadata } from '@/lib/page-metadata';
import type { Metadata } from 'next';
import { SsbGuidePage } from '@/components/ssb-guide-page';
import { getSsbGuide } from '@/lib/ssb-guides';
const title = 'SSB Psychology Preparation: Practice & Repeater Guidance';
const description =
  'Prepare for SSB psychology tests with a practical routine, reflection exercises and guidance for repeaters. Explore TAT, WAT, SRT and Self Description.';
export const metadata: Metadata = withPageMetadata({
  alternates: { canonical: '/selection/ssb/psychology-tests/' },
  title,
  description,
  openGraph: {
    title,
    description,
    url: '/selection/ssb/psychology-tests/',
    images: ['/og-tri-service.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-tri-service.png'],
  },
});
export default function Page() {
  return <SsbGuidePage guide={getSsbGuide('psychology-tests')} />;
}
