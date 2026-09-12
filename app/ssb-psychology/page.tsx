import { withPageMetadata } from '@/lib/page-metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import { psychologyArticles } from '@/lib/psychology-articles';
import {
  Brain,
  Image,
  MessageSquare,
  Compass,
  UserRound,
  ArrowRight,
  ShieldCheck,
  BookOpen,
  CircleHelp,
} from 'lucide-react';
import {
  Breadcrumbs,
  SiteHeader,
  SiteFooter,
} from '@/components/authority-shell';

const title = 'SSB Psychology Tests: TAT, WAT, SRT & Self Description';
const description =
  'Understand SSB psychology, how it fits into officer selection, and where to start with TAT, WAT, SRT and Self Description. Explore focused preparation guides.';
export const metadata: Metadata = withPageMetadata({
  title,
  description,
  alternates: { canonical: '/ssb-psychology/' },
  openGraph: {
    title,
    description,
    url: '/ssb-psychology/',
    type: 'website',
    images: ['/og-tri-service.webp'],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-tri-service.webp'],
  },
});
const tests = [
  {
    title: 'TAT: Thematic Apperception Test',
    icon: Image,
    href: '/selection/ssb/tat/',
    text: 'Explore picture-based story writing, with guidance on building a coherent account rather than fitting every picture into a memorised story.',
  },
  {
    title: 'WAT: Word Association Test',
    icon: MessageSquare,
    href: '/selection/ssb/wat/',
    text: 'Understand word-prompt responses and practise clear expression. The guide explains why a collection of impressive slogans is not a useful preparation goal.',
  },
  {
    title: 'SRT: Situation Reaction Test',
    icon: Compass,
    href: '/selection/ssb/srt/',
    text: 'Explore responses to described situations. Practise identifying the problem and expressing a realistic course of action in the context given.',
  },
  {
    title: 'Self Description',
    icon: UserRound,
    href: '/selection/ssb/self-description/',
    text: 'Reflect on your experiences, feedback and development needs. Start with evidence from your own life rather than copying a model personality.',
  },
];
const faqs = [
  {
    q: 'What is SSB psychology?',
    a: 'It is the psychological-testing part of the Services Selection Board process. It sits alongside group testing and the interview within Stage II. This hub explains the subject and points to individual guides; the separate preparation guide helps you organise practice.',
  },
  {
    q: 'What does an SSB psychologist assess?',
    href: '/ssb-psychology/what-does-an-ssb-psychologist-assess/',
    linkLabel: 'Understand psychological assessment',
    a: 'The Indian Air Force describes selection as an assessment of officer-like qualities and trainability through the psychologist, interviewing officer and group testing officer. That public description is a useful starting point; it is not a response-by-response scoring key.',
  },
  {
    q: 'Are TAT and PPDT the same?',
    href: '/ssb-psychology/ppdt-vs-tat/',
    linkLabel: 'Compare PPDT and TAT preparation',
    a: 'No. Keep the Stage I picture-perception and discussion exercise separate from the TAT psychology guide. Similar-looking picture prompts should not lead you to treat the instructions or purpose of two different activities as interchangeable.',
  },
  {
    q: 'Can one response tell me whether I will be recommended?',
    a: 'A practice response is not a reliable selection prediction. The published process describes assessment across techniques. Use feedback to improve clarity and reflection, not to assign yourself a result from one sentence or story.',
  },
  {
    q: 'Should I memorise answers for psychology tests?',
    href: '/ssb-psychology/memorised-ssb-psychology-answers/',
    linkLabel: 'Move beyond memorised responses',
    a: 'Our preparation approach is to understand the exercise and practise expressing your own thinking. Memorised answers can distract you from the actual prompt. We do not offer a set of guaranteed responses or a formula for recommendation.',
  },
  {
    q: 'Where should a first-time candidate or repeater begin?',
    href: '/ssb-psychology/psychology-preparation-for-repeaters/',
    linkLabel: 'Plan a preparation reset after an attempt',
    a: 'Start with the overview here, then choose the preparation guide for a routine. First-time candidates can build familiarity one exercise at a time. Repeaters can identify a specific preparation habit to change without assuming they know the board’s reason for an earlier outcome.',
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#0a1e33]">
      <SiteHeader />
      <article className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <Breadcrumbs current="SSB psychology" tone="light" />
        <p className="section-kicker">
          Understand the assessment. Choose your next step.
        </p>
        <h1 className="mt-4 max-w-4xl font-heading text-4xl leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-[#536371]">
          SSB psychology is one part of a wider officer-selection process, not a
          stand-alone examination to solve through a list of ideal answers. Use
          this subject hub to understand the context and find the TAT, WAT, SRT
          and Self Description guides.
        </p>
        <p className="mt-4 max-w-4xl leading-8 text-[#536371]">
          Already familiar with the activities? Go directly to the{' '}
          <Link href="/selection/ssb/psychology-tests/" className="text-link">
            SSB psychology preparation guide
          </Link>{' '}
          for practice routines, reflection and repeater guidance.
        </p>
        <section
          className="mt-9 border-t border-[#d8e1dd] pt-7"
          aria-labelledby="context-heading"
        >
          <h2
            id="context-heading"
            className="flex items-center gap-3 font-heading text-3xl"
          >
            <Brain className="shrink-0 text-[#397fa8]" aria-hidden="true" />{' '}
            Where psychology fits in SSB
          </h2>
          <p className="mt-4 leading-8 text-[#536371]">
            The Indian Air Force’s public NDA guidance places psychology tests
            in Stage II, alongside the interview, group testing tasks and
            conference. It describes three assessors: the psychologist,
            interviewing officer and group testing officer. Their assessment
            considers the candidate across the process, with officer-like
            qualities and trainability as the stated focus.{' '}
            <a href="https://careerairforce.gov.in/nda" className="text-link">
              Read the Indian Air Force’s selection overview
            </a>
            .
          </p>
          <p className="mt-4 leading-8 text-[#536371]">
            For preparation, our practical takeaway is to develop understanding
            and self-awareness rather than chase a score for each isolated
            response. That is academy guidance, not a claim about confidential
            assessment methods. For the complete sequence, see the{' '}
            <Link href="/selection/ssb/" className="text-link">
              SSB stages and selection guide
            </Link>
            .
          </p>
        </section>
        <section className="mt-9" aria-labelledby="tests-heading">
          <h2 id="tests-heading" className="flex items-center gap-3 font-heading text-3xl">
            <BookOpen className="shrink-0 text-[#397fa8]" aria-hidden="true" />
            Explore the four psychology guides
          </h2>
          <p className="mt-3 leading-7 text-[#536371]">
            Each guide explains the activity and provides a focused starting
            point. Follow the instructions issued to you at selection; these
            pages are educational orientation.
          </p>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {tests.map(({ title: name, icon: Icon, href, text }) => (
              <Link
                key={href}
                href={href}
                className="editorial-card group flex flex-col p-6"
              >
                <Icon className="text-[#397fa8]" aria-hidden="true" size={25} />
                <h3 className="mt-4 font-heading text-2xl">{name}</h3>
                <p className="mt-3 mb-5 leading-7 text-[#536371]">{text}</p>
                <span className="mt-auto inline-flex items-center gap-2 font-semibold text-[#2f6f94]">
                  Read the guide <ArrowRight size={16} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>
        <section className="mt-9" aria-labelledby="preparation-heading">
          <h2
            id="preparation-heading"
            className="flex items-center gap-3 font-heading text-3xl"
          >
            <Compass className="shrink-0 text-[#397fa8]" aria-hidden="true" />
            How to Prepare for SSB Psychology Tests
          </h2>
          <p className="mt-4 leading-8 text-[#536371]">
            Prepare the candidate. Don’t manufacture the response. Start by
            understanding the activity, then practise expressing your own
            thinking with clarity. Choose unfamiliar prompts, work independently
            and review one practical habit at a time: following instructions,
            keeping a story coherent or explaining a realistic action. Reflect
            on responsibilities and feedback from your own life rather than
            borrowing a model personality. Consistency means being truthful, not
            forcing the same theme into every response. If you are returning
            after an attempt, separate what you observed from what you assume
            caused the outcome. Use feedback to decide what to practise next,
            not to predict recommendation. Our preparation guide brings these
            steps into a manageable routine.
          </p>
          <Link
            className="text-link mt-4 inline-block"
            href="/selection/ssb/psychology-tests/"
          >
            Build your SSB psychology preparation routine
          </Link>
        </section>
        <section className="mt-9" aria-labelledby="deeper-guides">
          <h2
            id="deeper-guides"
            className="flex items-center gap-3 font-heading text-3xl"
          >
            <Brain className="shrink-0 text-[#397fa8]" aria-hidden="true" />
            Understand the assessment. Strengthen your preparation.
          </h2>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            {psychologyArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/ssb-psychology/${article.slug}/`}
                className="editorial-card group flex flex-col p-6"
              >
                <Brain
                  className="text-[#397fa8]"
                  aria-hidden="true"
                  size={25}
                />
                <h3 className="mt-4 font-heading text-2xl">{article.title}</h3>
                <p className="mt-3 mb-5 leading-7 text-[#536371]">
                  {article.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 font-semibold text-[#2f6f94]">
                  Read the article <ArrowRight size={16} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </section>
        <aside
          className="mt-9 border-y border-[#d8e1dd] py-7"
          aria-labelledby="experience-heading"
        >
          <h2
            id="experience-heading"
            className="flex items-center gap-3 font-heading text-2xl"
          >
            <ShieldCheck
              className="shrink-0 text-[#4b6228]"
              aria-hidden="true"
            />{' '}
            Relevant experience behind the academy
          </h2>
          <p className="mt-4 leading-8 text-[#536371]">
            March Ahead Academy is led by Commander Sulakshan Kumar Sharma
            (Retd), an Indian Navy veteran and former Senior Service
            Psychologist at the Naval Selection Centre, Bangalore. His
            background includes 32 years of military service and 3 years of SSB
            psychologist experience.
          </p>
          <Link
            href="/authors/cdr-sulakshan-kumar-sharma/"
            className="text-link mt-4 inline-block"
          >
            Explore Commander Sharma’s professional background
          </Link>
        </aside>
        <section className="mt-9" aria-labelledby="questions-heading">
          <h2 id="questions-heading" className="flex items-center gap-3 font-heading text-3xl">
            <CircleHelp className="shrink-0 text-[#397fa8]" aria-hidden="true" />
            Common questions about SSB psychology
          </h2>
          <div className="mt-5 space-y-5">
            {faqs.map(({ q, a, href, linkLabel }) => (
              <div key={q} className="border-b border-[#d8e1dd] pb-5">
                <h3 className="text-lg font-semibold">{q}</h3>
                <p className="mt-2 leading-8 text-[#536371]">{a}</p>
                {href && (
                  <Link href={href} className="text-link mt-3 inline-flex items-center gap-2">
                    {linkLabel} <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </section>
        <section className="mt-9">
          <h2 className="flex items-center gap-3 font-heading text-3xl">
            <Compass className="shrink-0 text-[#397fa8]" aria-hidden="true" />
            Turn understanding into individual preparation
          </h2>
          <p className="mt-4 leading-8 text-[#536371]">
            Knowing the names of the tests is only a beginning. Choose a guide,
            practise thoughtfully and identify what you need help understanding.
            March Ahead Academy offers one-on-one SSB coaching tailored to your
            preparation needs and pace.
          </p>
          <div className="mt-5 flex flex-wrap gap-5">
            <Link className="text-link" href="/selection/ssb/psychology-tests/">
              Build a psychology practice routine
            </Link>
            <Link className="text-link" href="/ssb-coaching/">
              Explore one-on-one SSB coaching
            </Link>
          </div>
        </section>
      </article>
      <SiteFooter />
    </main>
  );
}
