import type { Metadata } from 'next';
import { AuthorityPage } from '@/components/authority-shell';
const title = 'First SSB Attempt: A Practical Preparation Plan';
const description =
  'Prepare for your first SSB with a manageable plan for instructions, reflection, communication and practice.';
export const metadata: Metadata = {
  title: `${title} | March Ahead Academy`,
  description,
  alternates: { canonical: '/guidance/first-ssb-attempt/' },
  openGraph: {
    title,
    description,
    url: '/guidance/first-ssb-attempt/',
    type: 'article',
  },
  twitter: { card: 'summary_large_image', title, description },
};
export default function Page() {
  return (
    <AuthorityPage
      currentHref="/guidance/first-ssb-attempt"
      eyebrow="From the Academy"
      title={title}
      lede={description}
      status="Preparation guide"
      publishedAt="2026-09-09"
      sections={[
        {
          title: 'Start with the process, not an answer collection',
          body: 'For a first attempt, unfamiliarity can make everything appear equally urgent. Begin by understanding the selection setting. The Indian Air Force describes Stage I screening and subsequent Stage II testing, including psychological tests, group activities and interview. Read the overview for your entry, then use your call-up instructions to plan reporting and documents. The preparation routine below is our editorial suggestion, not a board timetable.',
        },
        {
          title: 'Make a one-page preparation map',
          body: 'Divide a sheet into four areas: instructions and logistics, reasoning and observation, personal reflection, and communication. Beside each, write what you understand already and one task you can complete next. This prevents a long list of videos from becoming your preparation plan.',
          points: [
            'Check the reporting details against your call-up letter.',
            'Identify one unfamiliar stage and read a guide before choosing practice material.',
            'Keep questions you cannot resolve in a separate list for clarification.',
          ],
        },
        {
          title: 'Use a repeatable practice session',
          body: 'Try an original prompt independently, review your work and choose one improvement. For example, describe a responsibility you have held, then check whether the account explains your action rather than merely calling you responsible. On another day, discuss a current issue with a peer and summarise their argument fairly before giving your own. Alternate writing, reasoning and conversation so preparation does not narrow to your favourite activity.',
        },
        {
          title: 'Keep a factual personal record',
          body: 'List your education, interests, responsibilities and meaningful decisions. Do not turn the list into a speech to memorise. Instead, ask yourself what happened, what you did, what changed and what remains difficult. If your example involves a team, distinguish your own contribution from the group’s achievement. Ordinary experiences can be useful material for reflection without being embellished.',
        },
        {
          title: 'Review progress without scoring your personality',
          body: 'Measure practical habits: did you follow the instruction, finish your thought clearly, listen without interrupting or explain a decision with an example? A practice response does not reveal a selection outcome. Keep the original draft and a short note so your next session has a purpose. Avoid replacing every answer just because an online example sounds more impressive.',
        },
        {
          title: 'Before reporting',
          body: 'Recheck the current instructions, travel arrangements and documents. The IAF publishes an AFSB document checklist; use the checklist and call-up material that apply to your own entry rather than assuming another candidate’s list is complete. Leave preparation time for ordinary routines and logistics instead of adding a new technique at the last moment.',
        },
        {
          title: 'When individual guidance can help',
          body: 'If you are unsure where to begin, bring your preparation map and questions to a consultation. March Ahead Academy offers online one-on-one coaching, with in-person visits by prior appointment only. Discuss the areas you need help with and the coaching arrangement before booking. The aim is to make your practice more purposeful, not supply a personality to perform.',
        },
      ]}
      sources={[
        {
          label: 'Indian Air Force: selection process',
          href: 'https://www.careerairforce.gov.in/selection-process',
        },
        {
          label: 'Indian Air Force: AFSB document checklist',
          href: 'https://www.careerairforce.gov.in/documents-checklist-afsb',
        },
      ]}
      related={[
        { label: 'SSB overview', href: '/selection/ssb/' },
        {
          label: 'Psychology preparation',
          href: '/selection/ssb/psychology-tests/',
        },
        { label: 'Free worksheets', href: '/resources/' },
        { label: 'Knowledge Centre', href: '/knowledge-centre/' },
      ]}
    />
  );
}
