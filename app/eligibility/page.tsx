import type { Metadata } from 'next';
import { AuthorityPage } from '@/components/authority-shell';
import { EligibilityChain } from '@/components/decision-visuals';
export const metadata: Metadata = {
  alternates: { canonical: '/eligibility' },
  title:
    'Indian Defence Eligibility: Age, Education & Medical Standards | March Ahead Academy',
  description:
    'Learn how to check age, Class 12 subjects, degree, medical and physical conditions for Indian Army, Navy and Air Force entries using official notices.',
};
export default function Page() {
  return (
    <AuthorityPage
      currentHref="/eligibility"
      visual={<EligibilityChain />}
      eyebrow="Eligibility guide"
      title="Defence eligibility is a chain, not a checkbox"
      lede="A candidate must satisfy every applicable condition for the exact service, entry and intake. Check your date of birth, qualifications and the requirements for your chosen entry and intake."
      status="Official-source-led eligibility orientation"
      expertContext="Cdr Sharma’s recruitment and candidate-guidance experience informs the questions this page asks. Current official notices—not academy judgement—control a candidate’s eligibility and medical assessment."
      sections={[
        {
          title: 'Begin with the exact entry and intake',
          body: 'There is no single eligibility rule for the Indian Armed Forces. First name the service, entry, branch or academy, and current intake. Then use the controlling notification and every corrigendum rather than a generic age or qualification table.',
          points: [
            'Record the official entry name and intake or examination cycle.',
            'Open the current notification from UPSC or the relevant service portal.',
            'Check for corrigenda before relying on a saved copy or summary.',
          ],
        },
        {
          title: 'Identity and status conditions',
          body: 'Nationality, sex, marital status and exact date-of-birth windows must be checked against the controlling notification. Approximate age calculators can mislead at boundaries.',
        },
        {
          title: 'Educational conditions',
          body: 'Qualification name alone is not enough. Verify subjects studied, marks, recognised institution or degree, final-year rules and documentary deadlines.',
          points: [
            'Check Class 12 subject requirements separately from degree requirements.',
            'Do not assume equivalent qualifications are accepted unless the notice says so.',
            'Do not transfer one branch requirement to another.',
          ],
        },
        {
          title: 'Medical and physical standards',
          body: 'Officer medical standards, Army recruiting physical tests, Navy Agniveer tests and Agniveervayu requirements are not interchangeable. Branch and aircrew standards may differ, and only authorised service medical boards decide fitness.',
        },
        {
          title: 'Choose a route to investigate',
          body: 'A Class 12 student can begin with the NDA and service-specific hubs. A graduate can compare CDS, AFCAT and notified direct entries. Technical graduates and NCC certificate holders should investigate only entries whose current official notices match their qualification and status.',
          points: [
            'After Class 12: compare NDA/NA and current service-notified entries.',
            'After graduation: compare academy, branch, degree and commission conditions.',
            'For Agniveer routes: use the current service-specific intake notice, not officer-entry rules.',
          ],
        },
        {
          title: 'Common mistakes and quick answers',
          body: 'Most errors come from compressing several conditions into one claim. A candidate can meet the education condition and still fall outside the notified date window, or match an exam but not a preferred academy or branch.',
          points: [
            'Can one percentage or age answer prove eligibility? No; every applicable condition must be satisfied.',
            'Are standards the same across all three services? No; use the exact official entry material.',
            'Can an academy declare medical fitness? No; only the authorised service process can.',
          ],
        },
      ]}
      sources={[
        {
          label: 'UPSC active examinations and current notices',
          href: 'https://www.upsc.gov.in/examinations/active-exams',
        },
        {
          label: 'Join Indian Army official recruitment portal',
          href: 'https://www.joinindianarmy.nic.in/',
        },
        {
          label: 'Join Indian Navy official recruitment portal',
          href: 'https://www.joinindiannavy.gov.in/',
        },
        {
          label: 'Indian Air Force official careers portal',
          href: 'https://www.careerairforce.gov.in/',
        },
        {
          label: 'Agniveervayu official portal',
          href: 'https://agnipathvayu.cdac.in/',
        },
      ]}
      related={[
        { label: 'Career Path Finder', href: '/career-paths' },
        { label: 'After Class 12', href: '/career-paths/after-12th' },
        { label: 'After graduation', href: '/career-paths/after-graduation' },
        { label: 'NDA guide', href: '/exams/nda' },
        { label: 'CDS guide', href: '/exams/cds' },
        { label: 'AFCAT guide', href: '/exams/afcat' },
        { label: 'Notifications tracker', href: '/notifications' },
      ]}
    />
  );
}
