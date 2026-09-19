import type { Metadata } from 'next';
import { withPageMetadata } from '@/lib/page-metadata';
import { AuthorityPage } from '@/components/authority-shell';
import { piArticles } from '@/lib/pi-articles';

const title = 'SSB Personal Interview Preparation | March Ahead Academy';
const description = 'Prepare for the SSB personal interview with PIQ reflection, question themes, education, family, current affairs, hobbies, motivation and repeater guidance.';
export const metadata: Metadata = withPageMetadata({ title, description, alternates: { canonical: '/ssb-personal-interview/' } });

export default function Page() {
  return <AuthorityPage
    currentHref="/ssb-personal-interview/"
    eyebrow="SSB knowledge centre · interview"
    title="SSB Personal Interview Preparation"
    lede="Prepare through self-knowledge, clear communication and reflection on your actual experiences. Explore practical guides for each part of your preparation."
    status="Academy guidance"
    publishedAt="2026-09-16"
    modifiedAt="2026-09-19"
    showEntryNotice={false}
    sections={[
      { title: 'Understand the interview in context', body: 'The Indian Air Force’s public selection overview places the interview alongside psychological and group tests. Prepare for a conversation within that wider process. Understanding your experiences, listening to questions and explaining choices clearly are useful preparation goals; no question bank can establish a preferred answer for every candidate.' },
      { title: 'Build your interview preparation around your experiences', body: 'Begin with accurate information about education, responsibilities, interests and your reasons for applying. Use the related guides below to review a theme, try a practical exercise and identify questions you need to investigate further. Each guide offers Academy preparation advice rather than a predicted interview script.' },
      { title: 'Use practice as a conversation', body: 'Ask a partner to vary the order of questions and use natural follow-ups. Review whether your explanation was relevant and understandable. If you record a practice session, agree this with everyone involved and keep it private. Work on one observable difficulty at a time, such as an unclear project explanation or a habit of missing part of a question.' },
      { title: 'Preparing online and in person', body: 'An online discussion can support reflection, practice explaining experiences and individual feedback. Check sound and connection so technical difficulties do not interrupt the exercise. Neither an online nor an in-person mock reproduces the board’s assessment or predicts its decision. March Ahead Academy offers one-on-one preparation online and in person by appointment, with the focus discussed during an individual consultation.' },
    ]}
    sources={[{ label: 'Indian Air Force: selection process', href: 'https://www.careerairforce.gov.in/selection-process' }]}
    related={[...piArticles.map(([slug, label]) => ({ label, href: `/ssb-personal-interview/${slug}/` })), { label: 'SSB overview', href: '/selection/ssb/' }, { label: 'SSB Psychology', href: '/ssb-psychology/' }, { label: 'SSB GTO preparation', href: '/ssb-gto/' }, { label: 'One-on-one SSB coaching', href: '/ssb-coaching/' }, { label: 'Book a consultation', href: '/consultation/' }, { label: 'Commander Sharma’s profile', href: '/authors/cdr-sulakshan-kumar-sharma/' }]}
  />;
}
