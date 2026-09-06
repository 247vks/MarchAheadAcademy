import type { Metadata } from 'next';
import { AuthorityPage } from '@/components/authority-shell';
export const metadata: Metadata = {
  title: 'NDA & NA Exam Guide | March Ahead Academy',
  description:
    'An official-source-led guide to the NDA and Naval Academy examination and selection pathway.',
};
export default function Page() {
  return (
    <AuthorityPage
      eyebrow="Exam guide"
      title="NDA & Naval Academy examination"
      lede="Understand what the examination leads to, how the selection journey works and which details must always be checked in the current UPSC notification."
      status="Official pattern checked against NDA & NA II 2026"
      sections={[
        {
          title: 'What this examination leads to',
          body: 'The UPSC NDA and NA examination is an entry point to notified Army, Navy and Air Force wings and Naval Academy courses. Course availability, vacancies and eligibility must be read from the active cycle.',
        },
        {
          title: 'Eligibility is intake-specific',
          body: 'Use the exact date-of-birth window—not an approximate age summary. Educational qualification differs by wing, and conditions concerning nationality, marital status, appearing candidates and physical standards belong to the controlling notification.',
        },
        {
          title: 'The selection journey',
          body: 'The pathway generally progresses from the UPSC written examination to service selection-board assessment, medical examination and final merit subject to vacancies. Passing one stage does not guarantee admission to the next or final joining.',
          points: [
            'Prepare separately for Mathematics and the General Ability Test as specified by UPSC.',
            'Build authentic SSB readiness rather than memorised responses.',
            'Use official previous papers; treat predicted cut-offs only as unofficial opinion.',
          ],
        },
      ]}
      experience={{
        label: 'NDA orientation',
        heading: 'See what the written examination asks of you.',
        intro:
          'The current UPSC scheme uses objective papers in Mathematics and General Ability Test. These examples show the thinking to practise; use UPSC papers for real wording and the current notice for the controlling scheme.',
        format: [
          {
            title: 'Mathematics',
            detail:
              'A 2½-hour objective paper carrying 300 marks in the current UPSC scheme.',
          },
          {
            title: 'General Ability Test',
            detail:
              'A 2½-hour objective paper carrying 600 marks, including English and general knowledge areas.',
          },
          {
            title: 'Then selection',
            detail:
              'Written qualification leads to SSB—not directly to academy admission. Medical fitness and merit still follow.',
          },
        ],
        samples: [
          {
            area: 'Mathematics',
            prompt:
              'If x + 1/x = 3, how would you find x² + 1/x² without solving for x?',
            lookFor:
              'Recognise the identity, square both sides, and account for the middle term.',
          },
          {
            area: 'GAT · English',
            prompt:
              'Read a short argument and identify the conclusion that is supported—not merely plausible.',
            lookFor:
              'Separate what the passage states from assumptions brought in from outside.',
          },
          {
            area: 'Pacing',
            prompt:
              'Two questions are consuming too much time. What is your rule for moving on and returning?',
            lookFor:
              'Use a pre-decided time boundary; protect accuracy and avoid emotional attachment to one question.',
          },
        ],
        support: [
          'Diagnose subject foundations and build a realistic weekly plan.',
          'Teach accuracy, pacing and review using official past papers.',
          'Connect written preparation to SSB without confusing the two.',
          'Review progress around the candidate’s education schedule.',
        ],
      }}
      sources={[
        {
          label: 'UPSC NDA & NA II 2026 examination page',
          href: 'https://www.upsc.gov.in/examinations/National%20Defence%20Academy%20and%20Naval%20Academy%20Examination%20%28II%29%2C%202026',
        },
        {
          label: 'UPSC previous question papers',
          href: 'https://www.upsc.gov.in/examinations/previous-question-papers',
        },
      ]}
      related={[
        { label: 'After Class 12', href: '/career-paths/after-12th' },
        { label: 'SSB guide', href: '/selection/ssb' },
        { label: 'Career Path Finder', href: '/career-paths' },
      ]}
    />
  );
}
