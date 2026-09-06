import type { Metadata } from 'next';
import { AuthorityPage } from '@/components/authority-shell';
export const metadata: Metadata = {
  alternates: { canonical: '/selection/ssb' },
  title: 'SSB Interview Process & Ethical Preparation | March Ahead Academy',
  description:
    'Understand SSB and AFSB Stage I, psychology tests, group tasks, personal interview and conference through ethical, expert-led guidance.',
};
export default function Page() {
  return (
    <AuthorityPage
      eyebrow="Selection guide"
      title="SSB: prepare the person, not a performance"
      lede="A clear, ethical introduction to the assessment journey—built around self-awareness, consistency and genuine development rather than scripts, secrets or ideal answers."
      status="Expert-led orientation · Official process sources checked"
      sections={[
        {
          title: 'What the process is trying to understand',
          body: 'Selection-board assessment considers how a candidate thinks, communicates, works with others, responds to situations and understands their own motivation. No isolated test or polished answer should be treated as a shortcut.',
        },
        {
          title: 'Stage I and Stage II',
          body: 'The process typically begins with screening through OIR and PP&DT, followed for screened-in candidates by psychological tests, group-testing tasks, personal interview and conference. Entry-specific instructions and AFSB differences must be read from current official material.',
          points: [
            'Prepare to express your own observations clearly.',
            'Reflect honestly on education, family, responsibility, setbacks and choices.',
            'Build fitness, awareness and group participation as habits—not last-minute tactics.',
          ],
        },
        {
          title: 'What ethical preparation looks like',
          body: 'Good guidance improves understanding, reflection, communication and familiarity with the process. It does not provide leaked material, claim confidential scoring knowledge or teach candidates to manufacture an officer-like personality.',
        },
        {
          title: 'What happens after recommendation',
          body: 'Recommendation is not final joining. Medical fitness, appeal or review provisions where applicable, merit, vacancies and administrative requirements remain part of the process.',
        },
      ]}
      experience={{
        label: 'SSB and AFSB orientation',
        heading: 'Understand the setting without rehearsing a personality.',
        intro:
          'These examples show the observation, participation and self-reflection candidates encounter. They do not reproduce confidential material, provide model personality answers or predict recommendation.',
        format: [
          {
            title: 'Stage I',
            detail:
              'OIR tests and picture perception and discussion form the screening stage described by the Indian Air Force.',
          },
          {
            title: 'Stage II',
            detail:
              'Psychological tests, group-testing activities and a personal interview contribute different observations.',
          },
          {
            title: 'Conference and beyond',
            detail:
              'Assessors confer; recommendation is followed by medical and merit processes, not automatic joining.',
          },
        ],
        samples: [
          {
            area: 'Observe and describe',
            prompt:
              'You see a brief, ambiguous scene. What did you actually observe, and what did you infer?',
            lookFor:
              'Separate evidence from assumption; organise a clear account in your own words.',
          },
          {
            area: 'Group participation',
            prompt:
              'Two workable plans are being discussed and time is limited. How do you help the group progress?',
            lookFor:
              'Listen, add relevant facts, build on useful ideas and disagree without trying to dominate.',
          },
          {
            area: 'Personal interview',
            prompt:
              'Describe a responsibility you accepted, a difficulty you faced and what changed afterward.',
            lookFor:
              'Use a lived example. Be honest about your role, decisions, outcome and learning.',
          },
        ],
        support: [
          'Explain the process so unfamiliarity does not consume attention.',
          'Use Cdr Sharma’s psychologist experience to guide authentic reflection.',
          'Give feedback on clarity and consistency—not manufactured answers.',
          'Develop communication, awareness, fitness and responsibility as habits.',
        ],
      }}
      sources={[
        {
          label: 'Indian Air Force selection process',
          href: 'https://www.careerairforce.gov.in/selection-process',
        },
        {
          label: 'Air Force Selection Board testing',
          href: 'https://careerairforce.gov.in/air-force-selection-board-afsb-testing',
        },
        {
          label: 'UPSC active examinations',
          href: 'https://www.upsc.gov.in/examinations/active-exams',
        },
      ]}
      related={[
        { label: 'NDA guide', href: '/exams/nda' },
        { label: 'CDS guide', href: '/exams/cds' },
        { label: 'Career Path Finder', href: '/career-paths' },
      ]}
    />
  );
}
