import type { Metadata } from 'next';
import { AuthorityPage } from '@/components/authority-shell';
export const metadata: Metadata = {
  alternates: { canonical: '/exams/afcat' },
  title: 'AFCAT Guide: Eligibility, Pattern & AFSB | March Ahead Academy',
  description:
    'Understand AFCAT branch eligibility, the current written-exam pattern and the journey through AFSB, medical assessment and merit.',
};
export default function Page() {
  return (
    <AuthorityPage
      currentHref="/exams/afcat"
      eyebrow="Exam guide"
      title="Air Force Common Admission Test"
      lede="AFCAT opens notified officer pathways across Flying and Ground Duty branches, but branch-specific education, age, commission and medical conditions must be checked separately."
      status="Official pattern checked against AFCAT 02/2026"
      expertContext="Cdr Sharma’s experience in tri-service education and officer selection informs the academy’s focus on branch-aware decisions, disciplined preparation and authentic readiness for the AFSB journey."
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
        {
          title: 'Which AFCAT route should you investigate?',
          body: 'Choose a branch family before deciding that AFCAT fits. Flying, Ground Duty Technical and Ground Duty Non-Technical branches apply different combinations of age, school subjects, graduation discipline, marks and commission conditions in the controlling notice.',
          points: [
            'Trace your Class 12 Physics and Mathematics record where the branch requires it.',
            'Match your exact degree title and marks to the notified branch conditions.',
            'Check final-year, backlog and documentary provisions before applying.',
          ],
        },
        {
          title: 'What to expect on examination day',
          body: 'AFCAT 02/2026 is notified as an online objective examination spanning English, General Awareness, Numerical Ability, and Reasoning and Military Aptitude. Use the current admit-card and examination instructions for reporting, identity documents and venue rules.',
          points: [
            'Practise switching between subject areas without losing accuracy.',
            'Use the cycle’s marking scheme when reviewing a timed attempt.',
            'Do not treat an unofficial memory-based paper as the controlling pattern.',
          ],
        },
        {
          title: 'Common mistakes and quick answers',
          body: 'A generic “graduate eligible” statement is not enough for AFCAT. Branch conditions differ, and written qualification leads to AFSB rather than directly to training.',
          points: [
            'Who goes to AFSB? Candidates called under the applicable entry process after meeting its written or direct-entry conditions.',
            'Does every candidate take CPSS? No. The official IAF process limits CPSS to the applicable Flying pathway.',
            'Can a practice score predict selection? No. It is only a preparation diagnostic.',
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
