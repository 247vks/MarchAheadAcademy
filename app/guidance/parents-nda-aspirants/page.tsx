import type { Metadata } from 'next';
import { AuthorityPage } from '@/components/authority-shell';
const title = 'A Parent’s Guide to Supporting an NDA Aspirant';
const description =
  'Support an NDA aspirant with realistic planning, useful questions and space for independent preparation. Practical guidance for parents from March Ahead Academy.';
export const metadata: Metadata = {
  title: `${title} | March Ahead Academy`,
  description,
  alternates: { canonical: '/guidance/parents-nda-aspirants/' },
  openGraph: {
    title,
    description,
    url: '/guidance/parents-nda-aspirants/',
    type: 'article',
  },
  twitter: { card: 'summary_large_image', title, description },
};
export default function Page() {
  return (
    <AuthorityPage
      currentHref="/guidance/parents-nda-aspirants"
      eyebrow="From the Academy"
      title={title}
      lede={description}
      status="Preparation guide"
      publishedAt="2026-09-09"
      sections={[
        {
          title: 'Begin with the candidate’s reasons',
          body: 'Ask what attracts your child to the career and what they have learned about it. Let them explain in their own words. A useful discussion can include uncertainty: which service interests them, what responsibilities they understand and which questions remain. The purpose is informed choice, not a polished answer that pleases the family.',
        },
        {
          title: 'Understand that selection has several stages',
          body: 'The Indian Air Force’s NDA page describes a two-stage SSB process, with interview, group tasks, psychology tests and conference in Stage II. Written preparation is therefore only part of the journey. Use the NDA guide and current notification to understand the route; avoid building family expectations around a single examination result.',
        },
        {
          title: 'Support a manageable plan',
          body: 'Help the aspirant make time for study, regular preparation and ordinary responsibilities. Agree on a short weekly check-in instead of repeatedly asking whether they will be selected. Ask what they completed, what was difficult and what support would help next. A plan should make responsibilities visible without turning every free hour into supervised preparation.',
        },
        {
          title: 'Keep ownership with the aspirant',
          body: 'You can help organise documents and travel, but encourage the candidate to read instructions and maintain their own checklist. During communication practice, listen first rather than rewrite every answer. Their examples should describe their own experiences and decisions. Building independence includes allowing them to ask questions and correct misunderstandings.',
        },
        {
          title: 'Questions to ask before choosing coaching',
          body: 'Look for a clear explanation of what support is offered and what the arrangement involves. A relevant professional background matters, but it should be accompanied by specific answers about the service you are considering.',
          points: [
            'Who will conduct the sessions, and what preparation areas are covered?',
            'Is the format online or in person, and how is individual feedback provided?',
            'What are the session arrangements, fees and cancellation terms?',
            'How will the candidate’s own work shape the preparation?',
          ],
        },
        {
          title: 'Leave room for alternatives and setbacks',
          body: 'Discuss education and other career options alongside the preferred route. An alternative plan need not signal lack of commitment. It can reduce pressure around one outcome and support thoughtful decisions if circumstances change. After a setback, begin with what the candidate needs and what they can learn, rather than comparing them with another aspirant.',
        },
        {
          title: 'How to begin with March Ahead Academy',
          body: 'A parent and candidate can bring their questions about preparation to a consultation. Online one-on-one coaching is available, and in-person visits are by prior appointment only. Discuss the intended entry, present preparation and support needed; confirm the provider, session arrangements and fees before booking. Keep the aspirant involved in that conversation.',
        },
      ]}
      sources={[
        {
          label: 'Indian Air Force: NDA entry and selection',
          href: 'https://careerairforce.gov.in/nda',
        },
      ]}
      related={[
        { label: 'NDA & NA guide', href: '/exams/nda/' },
        { label: 'Eligibility guidance', href: '/eligibility/' },
        { label: 'Book a consultation', href: '/consultation/' },
        { label: 'Knowledge Centre', href: '/knowledge-centre/' },
      ]}
    />
  );
}
