import type { Metadata } from 'next';
import { SsbGuidePage, type SsbGuideData } from '@/components/ssb-guide-page';

export const metadata: Metadata = {
  alternates: { canonical: '/selection/ssb' },
  title: 'SSB Interview: Stages, Tests & Ethical Preparation',
  description:
    'Understand SSB and AFSB Stage I, psychology tests, group testing, personal interview, conference, medical examination and ethical preparation.',
};

const guide: SsbGuideData = {
  currentHref: '/selection/ssb',
  eyebrow: 'Flagship selection guide',
  title: 'SSB and AFSB: understand the journey, then prepare the person',
  lede: 'A candidate-first guide to screening, psychology, group testing, interview and conference—without scripts, secrets or selection guarantees.',
  summary:
    'Official Indian Air Force guidance describes AFSB as Stage I screening followed, for candidates who qualify and pass document checks, by Stage II psychological tests, group tests and interview. Assessors confer before a recommendation decision. Other service boards and individual entries can issue their own instructions, so the call-up letter and current official notice always control.',
  sections: [
    {
      title: 'Before you arrive: the entry still matters',
      body: 'NDA, CDS, AFCAT and direct service entries do not share one identical application or call-up process. Verify the entry, eligibility documents, reporting instruction and service-specific notice before relying on any general SSB guide.',
      points: [
        'Carry only the documents and items required by the current call-up instructions.',
        'Treat dates, centres and duration as entry-specific.',
        'Resolve an eligibility doubt through the official authority before travel.',
      ],
    },
    {
      title: 'Stage I is a screening stage',
      body: 'The Indian Air Force identifies Officer Intelligence Rating tests and Picture Perception and Discussion Test as AFSB Stage I. Candidates who qualify move to document checks and subsequent testing. Familiarity should build reasoning, observation and clear participation—not dependence on recalled questions.',
    },
    {
      title: 'Stage II brings different settings together',
      body: 'Official IAF material identifies written psychological tests, interactive indoor and outdoor group tests, and a personal conversation with an Interviewing Officer. These are different settings, not a single quiz with a public answer key.',
      points: [
        'Psychology: practise truthful reflection and clear written expression.',
        'Group testing: contribute to a shared task without trying to perform leadership.',
        'Interview: know your actual history, choices and motivation.',
      ],
    },
    {
      title: 'Conference is followed by further decisions',
      body: 'The IAF states that the Psychologist, Ground Testing Officer and Interviewing Officer discuss the candidate at conference. Recommendation is not joining: medical examination, merit, vacancies and administrative requirements remain.',
    },
    {
      title: 'Ethical preparation develops transferable habits',
      body: 'March Ahead Academy focuses on self-awareness, listening, structured thought, physical readiness, informed motivation and honest communication. Cdr Sharma’s experience informs this approach to preparation.',
    },
  ],
  exercise: {
    title: 'One event, three perspectives',
    prompt:
      'Choose a real group responsibility from school, college, sport, work or community life. Describe what happened from your perspective, what another participant might say, and what evidence supports each account.',
    practise: [
      'Separate facts from interpretation.',
      'Identify your contribution without inflating it.',
      'Name one decision you would improve.',
    ],
  },
  mistakes: [
    'Treating SSB as a set of tricks to memorise.',
    'Using unofficial recollections as guaranteed live material.',
    'Inventing achievements or an ideal personality.',
    'Preparing each setting as an unrelated performance.',
    'Assuming recommendation means final joining.',
    'Ignoring the entry-specific call-up letter.',
  ],
  faqs: [
    {
      question: 'How long does SSB or AFSB take?',
      answer:
        'Official IAF guidance describes Stage I on the first day and subsequent testing over several days, but candidates should use their entry-specific call-up letter for the controlling schedule.',
    },
    {
      question: 'What happens if I do not clear Stage I?',
      answer:
        'The IAF states that candidates who do not qualify Stage I are sent back after the result; only Stage I-qualified candidates undergo subsequent testing and document checks.',
    },
    {
      question:
        'Are there official model answers for the psychology tests or interview?',
      answer:
        'The official process sources used here do not publish an ideal personality, model-answer bank or guaranteed response formula.',
    },
    {
      question: 'Is AFSB identical to every SSB?',
      answer:
        'No assumption of complete identity should be made. The IAF sources precisely describe AFSB; other services and entries may provide their own instructions.',
    },
    {
      question: 'Does recommendation guarantee academy admission?',
      answer:
        'No. Medical fitness, merit relative to vacancies, eligibility and administrative requirements still apply.',
    },
    {
      question: 'How can March Ahead Academy help responsibly?',
      answer:
        'The academy can explain the process, strengthen reflection and communication, support group and fitness habits, and give feedback without writing a false persona or promising a result.',
    },
  ],
  sources: [
    {
      label: 'Indian Air Force: AFSB testing',
      href: 'https://careerairforce.gov.in/air-force-selection-board-afsb-testing',
      note: 'Official description of Stage I, Stage II, CPSS and conference.',
    },
    {
      label: 'Indian Air Force: selection process',
      href: 'https://www.careerairforce.gov.in/selection-process',
      note: 'Official overview from written examination through AFSB, medical examination and merit.',
    },
    {
      label: 'UPSC: NDA & NA II 2026 notice',
      href: 'https://www.upsc.gov.in/sites/default/files/Notif-NDA-II-2026-Engl-200526.pdf',
      note: 'Current-cycle official notice; use the relevant future notice for later cycles.',
    },
    {
      label: 'UPSC: CDS II 2026 notice',
      href: 'https://www.upsc.gov.in/sites/default/files/Notif-CDS-II-2026-Engl-200526.pdf',
      note: 'Current-cycle official notice covering the written exam and Services Selection Centre interview.',
    },
  ],
  related: [
    { label: 'Stage I and PP&DT', href: '/selection/ssb/stage-1' },
    { label: 'Psychology tests', href: '/selection/ssb/psychology-tests' },
    { label: 'Group testing', href: '/selection/ssb/group-testing' },
    { label: 'Personal interview', href: '/selection/ssb/personal-interview' },
    { label: 'NDA guide', href: '/exams/nda' },
    { label: 'CDS guide', href: '/exams/cds' },
    { label: 'AFCAT guide', href: '/exams/afcat' },
  ],
};

export default function Page() {
  return <SsbGuidePage guide={guide} />;
}
