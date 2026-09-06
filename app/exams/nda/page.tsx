import type { Metadata } from 'next';
import { AuthorityPage } from '@/components/authority-shell';
export const metadata: Metadata = {
  alternates: { canonical: '/exams/nda' },
  title: 'NDA Exam Guide: Eligibility, Pattern & SSB | March Ahead Academy',
  description:
    'Understand NDA and Naval Academy eligibility, the UPSC exam pattern, official previous papers and the journey from written examination to SSB.',
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
        {
          title: 'Which route should you investigate?',
          body: 'Start with the wing or course you hope to enter, then test that intention against the current notice. A Class 12 candidate considering the Army wing should investigate its notified education conditions; a candidate considering the Naval or Air Force wings, or the Naval Academy course, must separately check the specified school subjects and every other condition.',
          points: [
            'Identify the exact wing or course before reading an eligibility summary.',
            'Match your date of birth to the notice’s inclusive date window.',
            'Use the current notice to check appearing-candidate and certificate deadlines.',
          ],
        },
        {
          title: 'What to expect on examination day',
          body: 'Expect two separately timed objective papers and follow the admission certificate and UPSC instructions that apply to your venue and cycle. Plan travel, permitted materials and reporting time from those documents rather than a coaching checklist.',
          points: [
            'Practise filling answers carefully under timed conditions.',
            'Protect accuracy because the notified scheme includes penalties for wrong answers.',
            'Keep Mathematics and GAT review separate so one score does not hide the other.',
          ],
        },
        {
          title: 'Common mistakes and quick answers',
          body: 'The most costly errors happen before preparation: treating “NDA eligible” as one universal category, using approximate age, overlooking wing-specific education and assuming written qualification means selection.',
          points: [
            'Is Mathematics a separate NDA paper? Yes, under the current UPSC scheme.',
            'Are official previous papers available? UPSC publishes previous question papers; use the link below.',
            'Does clearing the written examination guarantee joining? No. SSB, medical fitness, merit and notified vacancies remain.',
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
