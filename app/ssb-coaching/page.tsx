import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Brain,
  MessagesSquare,
  Users,
  Compass,
  ArrowRight,
} from 'lucide-react';
import {
  Breadcrumbs,
  SiteHeader,
  SiteFooter,
} from '@/components/authority-shell';
import { ContactBand } from '@/components/contact-band';

const title = 'One-on-One SSB Coaching by a Former SSB Psychologist';
const description =
  'Personalised SSB coaching at March Ahead Academy, guided by Cdr Sharma, a former SSB psychologist. Develop self-awareness, communication and a focused preparation plan.';
export const metadata: Metadata = {
  title: `${title} | March Ahead Academy`,
  description,
  alternates: { canonical: '/ssb-coaching/' },
  openGraph: {
    title,
    description,
    url: '/ssb-coaching/',
    type: 'website',
    images: ['/og-tri-service.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-tri-service.png'],
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#0a1e33]">
      <SiteHeader />
      <div className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <Breadcrumbs current="SSB coaching" tone="light" />
        <p className="section-kicker">
          Individual attention. Relevant experience.
        </p>
        <h1 className="mt-4 max-w-4xl font-heading text-4xl leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-[#536371]">
          Your experiences, strengths and preparation needs are individual.
          March Ahead Academy’s SSB coaching is one-on-one, with guidance from
          Cdr Sulakshan Kumar Sharma (Retd), an Indian Navy veteran and former
          Senior Service Psychologist at the Naval Selection Centre, Bangalore.
        </p>
        <p className="mt-4 max-w-4xl leading-8 text-[#536371]">
          Build your own abilities, not a model personality. Preparation is
          tailored to where you are now, the areas you need to develop and the
          pace at which you learn.
        </p>
        <Link
          href="/consultation/"
          className="mt-6 inline-flex items-center gap-2 bg-[#30471f] px-6 py-4 font-bold text-white transition hover:bg-[#3f5b2b]"
        >
          Discuss your SSB preparation{' '}
          <ArrowRight size={18} aria-hidden="true" />
        </Link>

        <section className="mt-12 border-t border-[#d8e1dd] pt-8">
          <h2 className="font-heading text-3xl">
            Experience that informs the guidance
          </h2>
          <p className="mt-4 leading-8 text-[#536371]">
            Cdr Sharma brings 32 years of military service, 57 years of teaching
            experience, three years as an SSB psychologist and 4.5 years of
            independent Indian Navy and Army recruitment experience. His
            background connects education, candidate development and officer
            selection.
          </p>
          <Link
            className="text-link mt-4 inline-block"
            href="/authors/cdr-sulakshan-kumar-sharma/"
          >
            Explore Cdr Sharma’s qualifications and professional history
          </Link>
        </section>

        <section className="mt-10">
          <h2 className="font-heading text-3xl">
            What your preparation can focus on
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              {
                icon: Brain,
                title: 'SSB psychology preparation',
                copy: 'Develop self-reflection and clear written expression through familiarisation with TAT, WAT, SRT and Self Description. Work with your real thoughts and experiences rather than memorised responses.',
                href: '/selection/ssb/psychology-tests/',
              },
              {
                icon: MessagesSquare,
                title: 'Personal interview preparation',
                copy: 'Reflect on your education, responsibilities, choices and motivation. Practise explaining your own experiences clearly, with attention to the areas where you need support.',
                href: '/selection/ssb/personal-interview/',
              },
              {
                icon: Users,
                title: 'Group participation',
                copy: 'Explore listening, discussion and responsible contribution. Individual guidance can help you reflect on your approach; it does not replace practising cooperation with other people.',
                href: '/selection/ssb/group-testing/',
              },
              {
                icon: Compass,
                title: 'Understanding the SSB journey',
                copy: 'Become familiar with the different assessment settings and identify preparation priorities. Use your entry-specific instructions for reporting and document requirements.',
                href: '/selection/ssb/',
              },
            ].map(({ icon: Icon, title: heading, copy, href }) => (
              <article
                key={href}
                className="flex flex-col border-t-2 border-[#397fa8] py-5"
              >
                <h3 className="flex items-start gap-3 font-heading text-xl">
                  <Icon
                    size={24}
                    className="shrink-0 text-[#397fa8]"
                    aria-hidden="true"
                  />
                  {heading}
                </h3>
                <p className="mt-3 leading-7 text-[#536371]">{copy}</p>
                <Link className="text-link mt-auto self-start pt-4" href={href}>
                  Read the guide <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-10 border-t border-[#d8e1dd] pt-8">
          <h2 className="font-heading text-3xl">
            First attempt or returning candidate: start with your needs
          </h2>
          <p className="mt-4 leading-8 text-[#536371]">
            For a first attempt, the starting point may be understanding what to
            expect and building a sustainable routine. For repeaters, it may be
            reflecting on preparation habits and identifying what to work on
            differently. We do not infer an assessor’s reasons for a past result
            or promise that a particular change will secure selection.
          </p>
          <p className="mt-4 leading-8 text-[#536371]">
            Whether your route is{' '}
            <Link className="text-link" href="/exams/nda/">
              NDA
            </Link>
            ,{' '}
            <Link className="text-link" href="/exams/cds/">
              CDS
            </Link>{' '}
            or{' '}
            <Link className="text-link" href="/exams/afcat/">
              AFCAT and AFSB
            </Link>
            , discuss your current stage and goals with us. Written examination
            preparation and SSB preparation are different needs; the
            conversation helps clarify your priorities.
          </p>
        </section>

        <section className="mt-10 border-t border-[#d8e1dd] pt-8">
          <h2 className="font-heading text-3xl">How to begin</h2>
          <ol className="mt-5 list-decimal space-y-3 pl-6 leading-8 text-[#536371]">
            <li>Share your intended entry, preparation stage and questions.</li>
            <li>
              Discuss the areas where you need individual support and your
              available preparation time.
            </li>
            <li>
              Confirm the coaching format, availability and fees before
              arranging sessions.
            </li>
          </ol>
          <p className="mt-4 leading-8 text-[#536371]">
            Read{' '}
            <Link className="text-link" href="/one-on-one-coaching/">
              how our one-on-one coaching approach works
            </Link>{' '}
            to understand why individual pace and feedback are central to the
            academy.
          </p>
        </section>

        <section className="mt-10 border-t border-[#d8e1dd] pt-8">
          <h2 className="font-heading text-3xl">
            Questions about SSB coaching
          </h2>
          {[
            [
              'Is SSB coaching about learning ideal answers?',
              'No. Our approach focuses on self-awareness, expression and preparation habits. We do not provide scripts intended to manufacture a personality.',
            ],
            [
              'Can I focus on psychology preparation?',
              'Tell us which areas you want to work on. One-on-one coaching allows the preparation priorities to be discussed around your needs rather than assumed from a fixed group plan.',
            ],
            [
              'Does coaching guarantee recommendation?',
              'No. Coaching supports preparation; recommendation and final selection remain decisions of the relevant selection authorities.',
            ],
          ].map(([question, answer]) => (
            <div className="mt-6" key={question}>
              <h3 className="font-heading text-xl">{question}</h3>
              <p className="mt-2 leading-7 text-[#536371]">{answer}</p>
            </div>
          ))}
        </section>
      </div>
      <ContactBand />
      <SiteFooter />
    </main>
  );
}
