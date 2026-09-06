import type { Metadata } from 'next';
import { AuthorityPage } from '@/components/authority-shell';
export const metadata: Metadata = {
  alternates: { canonical: '/career-paths/after-12th' },
  title: 'Defence Careers After Class 12 | March Ahead Academy',
  description:
    'Understand officer and other-rank pathways after Class 12 across the Indian Armed Forces.',
};
export default function Page() {
  return (
    <AuthorityPage
      currentHref="/career-paths/after-12th"
      eyebrow="Career paths"
      title="Defence careers after Class 12"
      lede="Class 12 opens several routes, but your subjects, exact date of birth, the current notification and preferred type of service determine which deserve your attention."
      sections={[
        {
          title: 'Begin with the officer or other-rank decision',
          body: 'Officer entries lead toward commissioned leadership responsibilities. Agniveer and other notified routes have different terms, selection systems and career structures. Neither should be treated as a fallback without understanding the work and commitment.',
          points: [
            'NDA and Naval Academy routes are administered through UPSC.',
            'Technical and service-specific routes depend on subjects, marks and current notices.',
            'Agniveer selection and standards are different for each service.',
          ],
        },
        {
          title: 'Your Class 12 subjects matter',
          body: 'The Army Wing through NDA has different educational conditions from Naval, Air Force and technical pathways. Never rely on a generic “any stream” or “PCM required” statement without identifying the exact wing and intake.',
        },
        {
          title: 'Build readiness beyond the written exam',
          body: 'Academic preparation is only one part of the journey. Communication, responsibility, physical readiness, teamwork, self-awareness and honest motivation become increasingly important through selection and training.',
        },
      ]}
      sources={[
        {
          label: 'UPSC active examinations',
          href: 'https://www.upsc.gov.in/examinations/active-exams',
        },
        {
          label: 'Join Indian Navy',
          href: 'https://www.joinindiannavy.gov.in/',
        },
        {
          label: 'Indian Air Force careers',
          href: 'https://www.careerairforce.gov.in/',
        },
      ]}
      related={[
        { label: 'Career Path Finder', href: '/career-paths' },
        { label: 'NDA guide', href: '/exams/nda' },
        { label: 'SSB guide', href: '/selection/ssb' },
      ]}
    />
  );
}
