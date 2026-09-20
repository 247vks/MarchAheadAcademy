import { withPageMetadata } from '@/lib/page-metadata';
import type { Metadata } from 'next';
import { examGuideAdditions } from '@/lib/exam-guide-additions';
import { AuthorityPage } from '@/components/authority-shell';
export const metadata: Metadata = withPageMetadata({
  alternates: { canonical: '/exams/afcat' },
  title: 'AFCAT Guide: Eligibility, Pattern & AFSB | March Ahead Academy',
  description:
    'Understand AFCAT branch eligibility, the current written-exam pattern and the journey through AFSB, medical assessment and merit.',
});
export default function Page() {
  return (
    <AuthorityPage
      currentHref="/exams/afcat"
      eyebrow="Exam guide"
      title="Air Force Common Admission Test"
      lede="AFCAT opens notified officer pathways across Flying and Ground Duty branches, but branch-specific education, age, commission and medical conditions must be checked separately."
      status="AFCAT preparation guide"
      modifiedAt="2026-09-19"
      expertContext="Commander Sharma’s experience in tri-service education and officer selection informs the academy’s focus on branch-aware decisions, disciplined preparation and authentic readiness for the AFSB journey."
      sections={[
        {
          title: 'Compare Flying, Technical and Non-Technical branches',
          body: 'The branch determines the work you are seeking to do and the education record you must check. Flying, Ground Duty Technical and Ground Duty Non-Technical are not interchangeable preferences. The official IAF entry page explains the branch families; use the current notification to match your exact qualification, marks, school subjects and personal eligibility conditions.',
          points: [
            'Flying: investigate the role and the applicable education, medical and selection requirements.',
            'Ground Duty Technical: match your engineering discipline to the notified list rather than relying on “engineering graduate” alone.',
            'Ground Duty Non-Technical: check the individual branch, because Administration, Logistics, Accounts and other notified options can require different qualifications.',
            'Record commission type and branch availability separately from examination preparation.',
          ],
        },
        {
          title: 'Turn the AFCAT syllabus into four practice streams',
          body: 'Organise English, General Awareness, Numerical Ability, and Reasoning and Military Aptitude separately before combining them in a mock. For each stream, identify whether your difficulty is knowledge, interpretation or execution under time pressure. A mixed score can hide a recurring weakness in one area.',
          points: [
            'English: explain why an answer fits the meaning and grammar of its context.',
            'General Awareness: revise connected topics and verify changing facts.',
            'Numerical Ability: practise methods, estimation and careful calculation.',
            'Reasoning: state the rule you used and test it against all the information.',
          ],
        },
        {
          title: 'Prepare a practical AFSB transition checklist',
          body: 'After written qualification, follow the official instructions for selection-board arrangements and documents. Learn the Stage I and Stage II sequence from the IAF material and review your education, work, interests and responsibilities. Online preparation can help with reflection, interview discussion and familiarity with formats. Physical group-task practice needs suitable facilities and supervision. CPSS, where applicable, is an official selection requirement; commercial exercises cannot certify that you will pass it.',
        },
        ...examGuideAdditions.afcat,
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
          'Practise English, General Awareness, Numerical Ability, and Reasoning and Military Aptitude together. Use your current notification for the exact duration, question count and marking scheme.',
        format: [
          {
            title: 'Written AFCAT',
            detail:
              'A mixed, objective online examination. Check the current cycle’s instructions before setting up a timed practice attempt.',
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
        { label: 'Indian Air Force: AFCAT entry and branch qualifications', href: 'https://www.careerairforce.gov.in/afcat-entry' },
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
        { label: 'AFCAT eligibility: branch, education and age checks', href: '/exams/afcat/eligibility/' },
        { label: 'AFCAT syllabus and subject preparation', href: '/exams/afcat/syllabus/' },
        { label: 'AFCAT study plan and AFSB transition', href: '/exams/afcat/preparation-plan/' },
        { label: 'Personal Interview preparation', href: '/ssb-personal-interview/' },
        { label: 'SSB Psychology', href: '/ssb-psychology/' },
        { label: 'One-on-one coaching', href: '/ssb-coaching/' },
        { label: 'Air Force careers', href: '/services/air-force' },
        { label: 'After graduation', href: '/career-paths/after-graduation' },
        { label: 'SSB and AFSB guide', href: '/selection/ssb' },
      ]}
    />
  );
}
