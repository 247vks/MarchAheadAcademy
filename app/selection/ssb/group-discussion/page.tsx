import type { Metadata } from 'next';
import { SsbGuidePage, type SsbGuideData } from '@/components/ssb-guide-page';
export const metadata: Metadata = {
  title:
    'SSB Group Discussion (GD): Topics & Preparation | March Ahead Academy',
  description:
    'Practise SSB group discussion with original topics, listening exercises, common mistakes and guidance from March Ahead Academy.',
  alternates: { canonical: '/selection/ssb/group-discussion/' },
};
const guide: SsbGuideData = {
  currentHref: '/selection/ssb/group-discussion',
  eyebrow: 'SSB guide · Group Discussion',
  title: 'Group Discussion (GD): contribute, listen and build an argument',
  lede: 'Understand discussion preparation for SSB, practise with original topics and learn to contribute clearly without dominating the group.',
  summary:
    'Group discussion practice develops the ability to explain a view, listen to competing arguments and respond constructively. The official IAF overview describes group testing as interactive indoor and outdoor work; follow your board’s specific instructions for each activity.',
  reviewedAt: '7 September 2026',
  modifiedAt: '2026-09-07',
  sections: [
    {
      title: 'Understand the discussion setting',
      body: 'GD means Group Discussion. Prepare for an exchange of ideas with other candidates, rather than a prepared speech delivered in isolation. Listen carefully to the topic and any directions given. The suggestions here are preparation exercises; they do not prescribe an official duration, speaking order or marking scheme.',
    },
    {
      title: 'Make a point that others can use',
      body: 'A useful practice contribution states a view, explains a reason and gives a relevant example. Keep it brief enough for others to respond. You can build on a peer’s idea, introduce a neglected consideration or ask for clarification. Speaking first is not a substitute for saying something useful.',
      points: [
        'Separate evidence from opinion; do not invent statistics.',
        'Listen for what has already been covered before repeating a point.',
        'Disagree with the reasoning courteously and explain your alternative.',
        'Let others finish and look for a natural opening.',
      ],
    },
    {
      title: 'Five original GD practice topics',
      body: 'These topics were created by March Ahead Academy for practice. They are not recalled or predicted SSB topics.',
      points: [
        'Should schools give greater priority to team sports or individual fitness?',
        'What would most improve road discipline: education, enforcement or infrastructure?',
        'Does technology help students learn independently, or make them more dependent?',
        'How can colleges encourage meaningful community service?',
        'When resources are limited, should a community prioritise preventive maintenance or new facilities?',
      ],
    },
    {
      title: 'Try a discussion with peers',
      body: 'Choose a topic and agree a short practice duration together. Give everyone a chance to contribute. Afterwards, discuss which arguments were clear, where participants listened well and which claims needed evidence. Rotate the person facilitating feedback. Your chosen timing is a practice arrangement, not the official test format.',
    },
    {
      title: 'GD and PP&DT discussion are different contexts',
      body: 'Do not assume that every SSB discussion uses the same prompt or purpose. Stage I PP&DT involves picture perception and discussion. This guide focuses on topic-based discussion practice. Use the Stage I guide for that screening context and follow the instructions for the activity in front of you.',
    },
    {
      title: 'How March Ahead Academy can help',
      body: 'Book a consultation to discuss your preparation. Guidance can focus on organising arguments, listening, clarity and responding to disagreement. Feedback should describe observed behaviour and practical improvements rather than promise selection or assign an outcome from one discussion.',
    },
  ],
  exercise: {
    title: 'Review one contribution',
    prompt:
      'Choose one topic above. Prepare a brief opening point, a counterargument and a question for the group. Then practise an unscripted discussion with peers.',
    practise: [
      'State one clear point with a reason.',
      'Respond to something another person actually said.',
      'Note one argument that changed or refined your view.',
      'Afterwards, identify one listening habit and one speaking habit to improve.',
    ],
  },
  mistakes: [
    'Interrupting repeatedly to secure airtime.',
    'Turning disagreement into a personal contest.',
    'Quoting made-up figures.',
    'Delivering a memorised speech unrelated to the topic.',
    'Treating loudness or speaking first as a guarantee of success.',
  ],
  faqs: [
    {
      question: 'What does GD stand for?',
      answer:
        'GD stands for Group Discussion. This guide offers preparation for discussing a topic with other candidates.',
    },
    {
      question: 'Are these official SSB GD topics?',
      answer: 'No. These are original March Ahead Academy practice topics.',
    },
    {
      question: 'Should I always start the discussion?',
      answer:
        'Do not make starting first your only goal. Practise relevant contributions, attentive listening and constructive responses.',
    },
    {
      question: 'Is GD the same as the discussion in PP&DT?',
      answer:
        'The contexts differ. PP&DT is a Stage I picture-based exercise; topic-based discussion practice should not be treated as its exact equivalent.',
    },
  ],
  sources: [
    {
      label: 'Indian Air Force: AFSB testing',
      href: 'https://careerairforce.gov.in/air-force-selection-board-afsb-testing',
      note: 'Official overview of interactive group tests and the personal interview. Accessed 7 September 2026. Practice topics and advice are original editorial material.',
    },
  ],
  related: [
    {
      label: 'SSB overview',
      href: '/selection/ssb',
    },
    {
      label: 'Group testing overview',
      href: '/selection/ssb/group-testing',
    },
    {
      label: 'Personal interview',
      href: '/selection/ssb/personal-interview',
    },
    {
      label: 'Stage I and PP&DT',
      href: '/selection/ssb/stage-1',
    },
    {
      label: 'Communication preparation',
      href: '/preparation/communicate',
    },
  ],
};
export default function Page() {
  return <SsbGuidePage guide={guide} />;
}
