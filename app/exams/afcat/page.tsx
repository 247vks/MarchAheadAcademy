import type { Metadata } from 'next';
import { AuthorityPage } from '@/components/authority-shell';
export const metadata: Metadata = {
  title: 'AFCAT Guide | March Ahead Academy',
  description:
    'Understand AFCAT branches, eligibility and the AFSB selection pathway.',
};
export default function Page() {
  return (
    <AuthorityPage
      eyebrow="Exam guide"
      title="Air Force Common Admission Test"
      lede="AFCAT opens notified officer pathways across Flying and Ground Duty branches, but branch-specific education, age, commission and medical conditions must be checked separately."
      status="Official pattern checked against AFCAT 02/2026"
      sections={[
        {
          title: 'AFCAT is a family of branch pathways',
          body: 'A single application can involve different branch requirements. Flying, Ground Duty Technical and Ground Duty Non-Technical options should never be reduced to one generic eligibility statement.',
        },
        {
          title: 'Verify branch-level eligibility',
          body: 'Check exact date-of-birth windows, Class 12 subjects, graduation discipline and marks, final-year provisions, gender and commission availability, and vacancies in the current notification.',
        },
        {
          title: 'From written test to merit',
          body: 'The pathway generally includes the AFCAT examination, AFSB Stage I and Stage II, CPSS where applicable for Flying candidates, medical assessment and all-India merit against vacancies.',
          points: [
            'AFSB Stage I includes screening components described by the IAF.',
            'Recommendation is not final joining.',
            'Only an authorised medical board determines fitness.',
          ],
        },
      ]}
      experience={{
        label: 'AFCAT orientation',
        heading: 'Experience the range before you practise for speed.',
        intro:
          'The AFCAT 02/2026 notification specifies a two-hour paper of 100 questions for 300 marks across English, General Awareness, Numerical Ability, and Reasoning and Military Aptitude. Future cycles may change.',
        format: [
          {
            title: 'Written AFCAT',
            detail:
              'A mixed, objective online examination. These figures belong specifically to AFCAT 02/2026.',
          },
          {
            title: 'AFSB',
            detail:
              'Stage I screening precedes psychological tests, group tests, interview and conference.',
          },
          {
            title: 'Flying pathway',
            detail:
              'CPSS is relevant only to the notified Flying pathway and is not an online practice game.',
          },
        ],
        samples: [
          {
            area: 'Verbal ability',
            prompt:
              'Select the word that best completes a sentence when two options are grammatically possible.',
            lookFor: 'Use meaning, tone and collocation—not grammar alone.',
          },
          {
            area: 'Numerical ability',
            prompt:
              'A quantity changes twice by different percentages. Can the percentages simply be added?',
            lookFor:
              'Work from a clear base value and calculate each change in sequence.',
          },
          {
            area: 'Reasoning',
            prompt:
              'A sequence contains one rule and one tempting coincidence. Which next term survives both checks?',
            lookFor:
              'State the rule explicitly and test it against every transition.',
          },
        ],
        support: [
          'Clarify branch intent before choosing a preparation emphasis.',
          'Build balanced coverage across written-test areas.',
          'Practise timed decisions without careless guessing.',
          'Prepare ethically for AFSB through reflection and group readiness.',
        ],
      }}
      sources={[
        {
          label: 'AFCAT 02/2026 official notification',
          href: 'https://careerairforce.gov.in/sites/default/files/2026-05/AFCAT-Cycle-02-2026-Notification.pdf',
        },
        {
          label: 'IAF selection process',
          href: 'https://www.careerairforce.gov.in/selection-process',
        },
        {
          label: 'AFSB testing',
          href: 'https://careerairforce.gov.in/air-force-selection-board-afsb-testing',
        },
      ]}
      related={[
        { label: 'Air Force careers', href: '/services/air-force' },
        { label: 'After graduation', href: '/career-paths/after-graduation' },
        { label: 'SSB and AFSB guide', href: '/selection/ssb' },
      ]}
    />
  );
}
