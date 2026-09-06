import type { SsbGuideData } from '@/components/ssb-guide-page';

const afsb = {
  label: 'Indian Air Force: AFSB testing',
  href: 'https://careerairforce.gov.in/air-force-selection-board-afsb-testing',
  note: 'Official description of Stage I, Stage II, CPSS and conference.',
};
const selection = {
  label: 'Indian Air Force: selection process',
  href: 'https://www.careerairforce.gov.in/selection-process',
  note: 'Official overview from written examination through AFSB, medical examination and merit.',
};
const nda = {
  label: 'UPSC: NDA & NA II 2026 notice',
  href: 'https://www.upsc.gov.in/sites/default/files/Notif-NDA-II-2026-Engl-200526.pdf',
  note: 'Current-cycle source for the examination, SSB marks and service-selection provisions; future notices may change.',
};
const cds = {
  label: 'UPSC: CDS II 2026 notice',
  href: 'https://www.upsc.gov.in/sites/default/files/Notif-CDS-II-2026-Engl-200526.pdf',
  note: 'Current-cycle source for written examination and Services Selection Centre interview provisions.',
};

const path = [
  { label: 'SSB overview', href: '/selection/ssb' },
  { label: 'Stage I and PP&DT', href: '/selection/ssb/stage-1' },
  { label: 'Psychology tests', href: '/selection/ssb/psychology-tests' },
  { label: 'Group testing', href: '/selection/ssb/group-testing' },
  { label: 'Personal interview', href: '/selection/ssb/personal-interview' },
  { label: 'Complete candidate preparation', href: '/preparation/prepare' },
];

export const ssbGuides: Record<string, SsbGuideData> = {
  'stage-1': {
    currentHref: '/selection/ssb/stage-1',
    eyebrow: 'SSB guide · Stage I',
    title: 'Stage I: OIR, picture perception and discussion',
    lede: 'Understand the first-day screening setting and prepare to observe, think and participate without searching for a rehearsed performance.',
    summary:
      'The Indian Air Force describes AFSB Stage I as Officer Intelligence Rating tests together with a Picture Perception and Discussion Test. It is a screening stage. Candidates who qualify proceed to document checks and subsequent testing; entry instructions and the relevant call-up letter control the day.',
    sections: [
      {
        title: 'OIR is one part of the screening stage',
        body: 'Official IAF material names Officer Intelligence Rating tests but does not publish a universal live question bank on its process page. Preparation should strengthen timed reasoning and careful instruction-following, not depend on recalled material.',
        points: [
          'Practise accuracy before chasing speed.',
          'Read the instruction set for every exercise.',
          'Use varied reasoning material so familiarity is not tied to one pattern.',
        ],
      },
      {
        title: 'Observation and inference are different',
        body: 'In picture perception work, a candidate must make sense of limited visual information. A useful preparation habit is to identify what is visible, what has been inferred and whether the resulting account remains coherent.',
      },
      {
        title: 'Discussion is not a volume contest',
        body: 'A group must exchange views in limited time. Clear contribution, listening and helping the discussion progress are more useful preparation goals than interruption, domination or memorised opening lines.',
        points: [
          'State a relevant point briefly.',
          'Acknowledge useful information from others.',
          'Disagree with the idea without attacking the speaker.',
        ],
      },
      {
        title: 'Prepare for the practical first day',
        body: 'Document requirements, reporting instructions and permitted items are entry-specific. Follow the current call-up letter and official portal rather than a generic online checklist.',
      },
    ],
    exercise: {
      title: 'Observation-to-discussion drill',
      prompt:
        'Study an unfamiliar everyday photograph for a short fixed interval. Record only what you can observe, then write a brief account of what may be happening. Discuss alternative interpretations with two peers.',
      practise: [
        'Mark each statement as observation or inference.',
        'Give a concise account without decorative detail.',
        'Invite and integrate one useful alternative view.',
      ],
    },
    mistakes: [
      'Treating louder or faster speech as leadership.',
      'Forcing a memorised story onto every image.',
      'Ignoring instructions while trying to maximise attempts.',
      'Presenting assumptions as facts.',
      'Using recalled or represented-as-live material.',
    ],
    faqs: [
      {
        question: 'Does clearing Stage I mean I am recommended?',
        answer:
          'No. It permits progression to subsequent testing and document checks. Recommendation, medical fitness, merit and vacancies remain separate stages.',
      },
      {
        question: 'Will the same OIR or PP&DT material appear?',
        answer:
          'Do not assume so. Official sources describe the process, not a guaranteed question bank. Use practice to build reasoning, observation and communication.',
      },
      {
        question: 'Should I memorise a PP&DT introduction?',
        answer:
          'A fixed script can prevent you from responding to the actual information and discussion. Practise organising an honest, concise account instead.',
      },
    ],
    sources: [afsb, selection],
    related: path,
  },
  'psychology-tests': {
    currentHref: '/selection/ssb/psychology-tests',
    eyebrow: 'SSB guide · Psychology',
    title: 'Psychology tests: prepare through honest reflection',
    lede: 'Understand the official place of written psychological testing while avoiding model personalities, answer keys and confidential-material claims.',
    summary:
      'The Indian Air Force describes the psychological tests within AFSB Stage II as written tests conducted by a psychologist. Its public process material does not provide an official answer key, ideal personality template or guaranteed response method.',
    sections: [
      {
        title: 'Know the boundary of official information',
        body: 'Official sources identify psychological testing as one component of Stage II alongside group tests and interview. Any detailed practice offered by an academy must therefore be labelled as illustrative and must not be presented as official or predictive.',
      },
      {
        title: 'Self-knowledge is more durable than scripting',
        body: 'Candidates can responsibly reflect on their real responsibilities, relationships, decisions, setbacks and habits. This creates truthful material for self-expression without attempting to manufacture an imagined ideal.',
        points: [
          'Build a timeline of meaningful responsibilities.',
          'Describe decisions and consequences, not slogans.',
          'Notice recurring strengths and development needs.',
        ],
      },
      {
        title: 'Work clearly under time and uncertainty',
        body: 'Useful preparation can include writing concisely, responding to varied situations and keeping attention steady. The goal is not to reverse-engineer a hidden score but to express genuine thought with clarity.',
      },
      {
        title: 'Keep guidance ethical',
        body: 'March Ahead Academy will not reproduce confidential material, promise a psychologist-approved answer or claim that one response determines recommendation. Cdr Sharma’s experience informs the academy’s emphasis on authentic reflection; any future signed commentary should remain clearly separate from official rules.',
      },
    ],
    exercise: {
      title: 'Responsibility reflection',
      prompt:
        'Choose one real situation in which other people depended on you. Write what was required, what you decided, what happened and what you would improve. Remove any claim you cannot support with a real event.',
      practise: [
        'Use specific actions rather than personality labels.',
        'Include an imperfection or uncertainty honestly.',
        'Keep the account proportionate and readable.',
      ],
    },
    mistakes: [
      'Searching for a universally “positive” response.',
      'Inventing achievements to appear officer-like.',
      'Using one polished story for unrelated prompts.',
      'Treating an illustrative exercise as an official test item.',
      'Believing one test can be prepared through an answer key.',
    ],
    faqs: [
      {
        question: 'Are there official ideal answers?',
        answer:
          'The official process sources reviewed here do not publish ideal-answer keys for AFSB psychological tests.',
      },
      {
        question: 'Can practice still help?',
        answer:
          'Practice can improve self-reflection, concise writing, attention and comfort with uncertainty. It cannot guarantee how an assessment will be interpreted.',
      },
      {
        question: 'Does one response decide the result?',
        answer:
          'Official IAF material describes several Stage II components and a conference involving assessors; it does not support treating one response as a selection formula.',
      },
    ],
    sources: [afsb, selection],
    related: path,
  },
  'group-testing': {
    currentHref: '/selection/ssb/group-testing',
    eyebrow: 'SSB guide · Group testing',
    title: 'Group testing: contribute to the task and the team',
    lede: 'Prepare for interactive indoor and outdoor activity by developing clear thought, cooperation, initiative and sustainable physical readiness.',
    summary:
      'The Indian Air Force describes AFSB group tests as interactive indoor and outdoor activities combining mental and physical work. The public description does not prescribe a single “correct” personality or winning tactic.',
    sections: [
      {
        title: 'Focus on the shared objective',
        body: 'Group activity is not a stage for continuous self-display. Practise understanding the task, sharing relevant ideas, using the group’s information and helping turn discussion into action.',
      },
      {
        title: 'Initiative includes listening',
        body: 'Taking initiative can mean proposing a useful next step, clarifying a constraint or enabling another member’s contribution. It does not require controlling every decision.',
        points: [
          'Explain the reason for a proposal.',
          'Adapt when new information improves the plan.',
          'Stay engaged when your idea is not selected.',
        ],
      },
      {
        title: 'Develop physical capacity responsibly',
        body: 'Because official IAF material describes both indoor and outdoor work, general fitness and movement confidence can support participation. Medical eligibility and entry-specific physical requirements must still come from current official standards and qualified professionals.',
      },
      {
        title: 'Review behaviour, not theatre',
        body: 'After practice, evaluate whether the group understood the problem, used time and reached a workable outcome. Avoid imitation of gestures, vocabulary or supposedly preferred behaviour.',
      },
    ],
    exercise: {
      title: 'Shared planning drill',
      prompt:
        'Give a group a community problem with limited time and resources—for example, organising safe transport after a local event. Ask them to agree on priorities, roles and a simple plan.',
      practise: [
        'Clarify the objective and constraints.',
        'Contribute without blocking other voices.',
        'Close with an agreed summary and next action.',
      ],
    },
    mistakes: [
      'Speaking constantly without adding value.',
      'Withdrawing when another proposal is chosen.',
      'Confusing aggression with initiative.',
      'Ignoring safety or stated constraints.',
      'Rehearsing visible “leadership gestures.”',
    ],
    faqs: [
      {
        question: 'Are all group tests outdoor tasks?',
        answer:
          'No. The official IAF description refers to interactive indoor and outdoor activities combining mental and physical work.',
      },
      {
        question: 'Must I lead every task?',
        answer:
          'Official sources do not prescribe that tactic. Useful preparation is to contribute appropriately, listen, reason and support the group objective.',
      },
      {
        question: 'Can fitness alone determine success?',
        answer:
          'No such claim is supported by the official process description. Group tests sit alongside psychological tests, interview and conference.',
      },
    ],
    sources: [afsb, selection],
    related: path,
  },
  'personal-interview': {
    currentHref: '/selection/ssb/personal-interview',
    eyebrow: 'SSB guide · Interview',
    title: 'Personal interview: know your life, choices and motivation',
    lede: 'Prepare to have a genuine conversation about your experience and decisions rather than deliver borrowed answers.',
    summary:
      'The Indian Air Force describes the Stage II interview as a personal conversation with an Interviewing Officer. Public official guidance does not provide a script, exhaustive question list or guaranteed answer formula.',
    sections: [
      {
        title: 'Build an accurate personal record',
        body: 'Review your education, activities, responsibilities, relationships, decisions and setbacks. Dates and claims should be accurate; reflection should explain what you actually did and learned.',
        points: [
          'Know the facts submitted in your application.',
          'Use real examples of responsibility and teamwork.',
          'Be able to discuss both strengths and limitations.',
        ],
      },
      {
        title: 'Understand your career choice',
        body: 'Know why you are considering a particular service and entry, what training and responsibility may require, and which alternatives you considered. Motivation is stronger when it is informed rather than assembled from slogans.',
      },
      {
        title: 'Answer the question that was asked',
        body: 'Listen fully, structure the central point and stop when the answer is complete. It is better to acknowledge uncertainty than disguise it with invented detail.',
      },
      {
        title: 'Use feedback without becoming artificial',
        body: 'A mentor can identify unclear communication, unsupported claims or areas needing reflection. Ethical guidance does not write a candidate’s personality, promise preferred answers or impersonate an official assessor.',
      },
    ],
    exercise: {
      title: 'Evidence-based personal review',
      prompt:
        'Record a two-minute answer about a responsibility you accepted. Listen back and mark every statement as fact, interpretation or learning. Rewrite only to improve clarity—not to make the event sound more impressive.',
      practise: [
        'Give context briefly.',
        'Describe your own decision and action.',
        'State the outcome and a credible learning.',
      ],
    },
    mistakes: [
      'Memorising a generic “Why defence?” speech.',
      'Exaggerating roles or achievements.',
      'Avoiding every weakness or setback.',
      'Answering a different rehearsed question.',
      'Using jargon instead of specific experience.',
    ],
    faqs: [
      {
        question: 'Is the interview a rapid-fire test?',
        answer:
          'The official IAF source describes it broadly as a personal conversation. Formats and questions should not be assumed from unofficial accounts.',
      },
      {
        question: 'Should every answer sound positive?',
        answer:
          'There is no official ideal-answer rule. Accurate self-knowledge and honest, proportionate expression are safer preparation principles than forced positivity.',
      },
      {
        question: 'Can March Ahead Academy predict my interview questions?',
        answer:
          'No. March Ahead Academy can help you review your own history, motivation and communication, but will not present illustrative prompts as official or predictive.',
      },
    ],
    sources: [afsb, selection, nda, cds],
    related: path,
  },
};

export function getSsbGuide(slug: string) {
  return ssbGuides[slug];
}
