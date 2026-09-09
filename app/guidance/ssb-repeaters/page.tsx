import type { Metadata } from 'next';
import { AuthorityPage } from '@/components/authority-shell';
const title = 'SSB Preparation for Repeaters: Reflect and Prepare Again';
const description =
  'Turn a previous SSB attempt into a practical preparation review without guessing the board’s reasoning. Guidance for repeat candidates from March Ahead Academy.';
export const metadata: Metadata = {
  title: `${title} | March Ahead Academy`,
  description,
  alternates: { canonical: '/guidance/ssb-repeaters/' },
  openGraph: {
    title,
    description,
    url: '/guidance/ssb-repeaters/',
    type: 'article',
  },
  twitter: { card: 'summary_large_image', title, description },
};
export default function Page() {
  return (
    <AuthorityPage
      currentHref="/guidance/ssb-repeaters"
      eyebrow="From the Academy"
      title={title}
      lede={description}
      status="Academy editorial guidance"
      publishedAt="2026-09-09"
      sections={[
        {
          title: 'Separate what happened from why you think it happened',
          body: 'After an attempt, it is tempting to explain the result through one answer, one interaction or another candidate’s advice. Start with observations instead. “I interrupted twice” describes behaviour; “the board rejected me because of that” adds a conclusion you cannot establish from the observation. This distinction makes your next preparation plan more useful and less punitive.',
        },
        {
          title: 'Use a three-column review',
          body: 'Write an observation, its effect on your own practice, and a change you can test. For example: “I lost track of my point; my explanation became difficult to follow; I will practise a short answer with one clear example.” Keep the change small enough to repeat. This is an original reflection exercise, not a reconstruction of the board’s assessment.',
          points: [
            'Record what you remember doing rather than labelling yourself.',
            'Separate difficulty with instructions from difficulty expressing an idea.',
            'Keep useful habits as well as areas to improve.',
          ],
        },
        {
          title: 'Choose two priorities, not a new personality',
          body: 'A review may produce many concerns. Choose two that you can work on consistently: perhaps clearer written expression and listening during discussion. Give each a practical exercise, then review after several sessions. Changing your vocabulary, hobbies and life story to match an imagined preferred candidate is not a sound substitute for development.',
        },
        {
          title: 'Practise unfamiliar material',
          body: 'Repeatedly polishing the same story can make it difficult to tell whether your expression is improving or the wording is simply familiar. Use new everyday prompts and real experiences. Keep your first draft, identify one unclear point and try another prompt later. In interview practice, ask a partner to follow up on the answer you actually gave rather than recite a fixed question list.',
        },
        {
          title: 'Understand the wider assessment',
          body: 'The IAF’s public selection description includes psychological tests, group tests and interview in Stage II. That wider process is a reason to avoid treating a single practice response as a prediction of a future result. Review how you prepare across settings, while retaining the distinction between personal reflection and an official assessment.',
        },
        {
          title: 'Check the next entry independently',
          body: 'A previous call-up does not replace the instructions for a new application. Read the current entry notification and call-up details, and check your own eligibility before making plans. Do not rely on a generic claim about how many attempts everyone is allowed; relevant entry conditions may differ.',
        },
        {
          title: 'Bring evidence to a coaching conversation',
          body: 'Bring your preparation notes, the areas you find difficult and examples of your own practice. You do not need to provide recalled testing material. March Ahead Academy offers online one-on-one guidance; in-person visits are by appointment only. Ask how feedback can address your chosen priorities and confirm session arrangements before booking.',
        },
      ]}
      sources={[
        {
          label: 'Indian Air Force: selection process',
          href: 'https://www.careerairforce.gov.in/selection-process',
        },
      ]}
      related={[
        {
          label: 'Psychology preparation',
          href: '/selection/ssb/psychology-tests/',
        },
        {
          label: 'Personal interview',
          href: '/selection/ssb/personal-interview/',
        },
        { label: 'One-on-one coaching', href: '/one-on-one-coaching/' },
        { label: 'Knowledge Centre', href: '/knowledge-centre/' },
      ]}
    />
  );
}
