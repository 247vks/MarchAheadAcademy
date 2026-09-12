import { withPageMetadata } from '@/lib/page-metadata';
import type { Metadata } from 'next';
import { AuthorityPage } from '@/components/authority-shell';

export const metadata: Metadata = withPageMetadata({
  alternates: { canonical: '/career-paths/foundation' },
  title: 'Defence Career Foundation After Class 10 | March Ahead Academy',
  description:
    'Build informed subject, fitness and communication foundations before Indian defence entry windows open.',
});

export default function FoundationPage() {
  return (
    <AuthorityPage
      currentHref="/career-paths/foundation"
      eyebrow="Career foundation"
      title="Start preparing without choosing an entry too early."
      lede="After Class 10, the useful decision is often how to keep future routes open—not whether one examination is already the answer."
      sections={[
        {
          title: 'Protect your academic options',
          body: 'Subject requirements differ by service, branch and entry. Before selecting a stream, investigate the routes you may want after Class 12 and read their current official requirements with a parent, teacher or counsellor.',
          points: [
            'Do not assume every officer entry requires the same subjects.',
            'Treat current notices as examples; your future cycle may change.',
            'Build consistent study habits across the subjects you choose.',
          ],
        },
        {
          title: 'Develop sustainable fitness',
          body: 'General strength, mobility, endurance, sleep and recovery support long-term preparation. Avoid copying entry-specific targets without checking current official standards and seeking suitable health guidance.',
        },
        {
          title: 'Build communication and responsibility',
          body: 'Reading, listening, clear expression, teamwork and taking responsibility in real settings are more valuable foundations than rehearsing an imagined officer personality.',
        },
        {
          title: 'Review the route at Class 12',
          body: 'Return to the career-path guide when your subjects, marks and age window are clearer. That is the point to compare NDA, technical and notified service-specific routes in detail.',
        },
      ]}
      sources={[
        {
          label: 'UPSC active examinations',
          href: 'https://upsc.gov.in/examinations/active-exams',
        },
        { label: 'Join Indian Army', href: 'https://joinindianarmy.nic.in/' },
        {
          label: 'Join Indian Navy',
          href: 'https://www.joinindiannavy.gov.in/',
        },
        {
          label: 'Career Indian Air Force',
          href: 'https://careerairforce.gov.in/',
        },
      ]}
      related={[
        { label: 'Routes after Class 12', href: '/career-paths/after-12th' },
        { label: 'Compare the services', href: '/services' },
        { label: 'Preparation habits', href: '/preparation/prepare' },
      ]}
    />
  );
}
