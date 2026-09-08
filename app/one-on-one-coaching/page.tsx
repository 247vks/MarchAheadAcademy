import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  UserRound,
  Compass,
  MessagesSquare,
  CalendarCheck,
} from 'lucide-react';
import {
  SiteHeader,
  SiteFooter,
  Breadcrumbs,
} from '@/components/authority-shell';
import { ContactBand } from '@/components/contact-band';

const title = 'One-on-One SSB & Defence Exam Coaching | March Ahead Academy';
const description =
  'Online one-on-one SSB and defence exam coaching tailored to your needs and pace. In-person visits by appointment. Explore preparation and consultation options.';
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/one-on-one-coaching/' },
  openGraph: {
    title,
    description,
    url: '/one-on-one-coaching/',
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
        <Breadcrumbs current="One-on-one coaching" tone="light" />
        <p className="section-kicker mt-8">
          One-on-one SSB and defence exam coaching
        </p>
        <h1 className="mt-4 max-w-4xl font-heading text-4xl leading-tight sm:text-5xl">
          Your career deserves more than one-size-fits-all coaching.
        </h1>
        <p className="mt-6 max-w-4xl text-lg leading-8 text-[#536371]">
          Different personalities. Different starting points. Personalised
          preparation. Every aspirant brings different strengths, experiences
          and areas for improvement. At March Ahead Academy, coaching is
          one-on-one, allowing preparation to be customised to your needs and
          paced around your progress.
        </p>
        <Link
          href="/consultation/"
          className="mt-6 inline-flex items-center gap-2 bg-[#30471f] px-6 py-4 font-bold text-white transition hover:bg-[#3f5b2b]"
        >
          Book a consultation <ArrowRight size={18} aria-hidden="true" />
        </Link>
        <section className="mt-12">
          <h2 className="font-heading text-3xl">
            Individual attention. A plan that fits you.
          </h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            {[
              {
                icon: UserRound,
                title: 'Start with your starting point',
                text: 'Your education, experience, strengths and current difficulties shape the preparation—not a standard assumption about what every aspirant needs.',
              },
              {
                icon: Compass,
                title: 'Focus on your priorities',
                text: 'Personalised coaching makes room for the areas where you need support, whether that is written examination preparation, clear expression or understanding your career choices.',
              },
              {
                icon: CalendarCheck,
                title: 'Progress at your learning pace',
                text: 'Spend more time understanding difficult areas and move forward as your understanding develops. Preparation can be adjusted around your progress while keeping examination timelines in view.',
              },
              {
                icon: MessagesSquare,
                title: 'Make feedback personal',
                text: 'One-on-one attention creates space for your questions and feedback related to your own work, helping you identify what to practise next.',
              },
            ].map(({ icon: Icon, title: heading, text }) => (
              <article
                key={heading}
                className="border-t-2 border-[#397fa8] py-5"
              >
                <h3 className="flex items-start gap-3 font-heading text-xl">
                  <Icon
                    size={24}
                    aria-hidden="true"
                    className="shrink-0 text-[#397fa8]"
                  />
                  {heading}
                </h3>
                <p className="mt-3 leading-7 text-[#536371]">{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section
          className="mt-10 border-t border-[#d8e1dd] pt-8"
          aria-labelledby="coaching-questions"
        >
          <h2 id="coaching-questions" className="font-heading text-3xl">
            Your coaching questions, answered.
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {[
              [
                'Is coaching online or in person?',
                'Online one-on-one coaching is available. In-person visits are by prior appointment only; contact the academy to arrange a visit.',
              ],
              [
                'Who is the coaching suitable for?',
                'First-time and repeat candidates can receive individual guidance. Your education, entry route, previous preparation and areas for improvement shape the support you discuss with us.',
              ],
              [
                'What parts of SSB can I prepare for?',
                'Preparation covers psychological-test practice, self-awareness, personal interview communication and understanding group participation. Explore TAT, WAT, SRT and Self Description in our SSB guides, then discuss which areas you need to focus on.',
              ],
              [
                'Are written examinations covered?',
                'The academy offers NDA, CDS and AFCAT written-examination preparation alongside SSB guidance. Discuss your intended examination and subjects so the preparation can focus on your needs.',
              ],
              [
                'How many sessions will I need?',
                'There is no session count advertised here. Discuss your starting point, goals and available time with the academy before agreeing on the coaching arrangement.',
              ],
              [
                'How much does coaching cost?',
                'Ask about fees and availability during your consultation. Confirm the scope, session arrangements and cost with the academy before booking coaching.',
              ],
            ].map(([question, answer]) => (
              <article
                key={question}
                className="border-t border-[#d8e1dd] pt-5"
              >
                <h3 className="flex items-start gap-3 font-heading text-xl">
                  <MessagesSquare
                    size={22}
                    aria-hidden="true"
                    className="shrink-0 text-[#397fa8]"
                  />
                  {question}
                </h3>
                <p className="mt-3 leading-7 text-[#536371]">{answer}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="mt-10 border-t border-[#d8e1dd] pt-8">
          <h2 className="font-heading text-3xl">
            SSB preparation that helps you develop—not perform a personality.
          </h2>
          <p className="mt-4 leading-8 text-[#536371]">
            Personalised SSB preparation means working with your real
            experiences, communication and self-awareness. It does not mean
            memorising an ideal personality or rehearsing supposedly perfect
            answers. Explore our{' '}
            <Link className="text-link" href="/selection/ssb/">
              SSB preparation guide
            </Link>{' '}
            for an introduction to the different assessment settings.
          </p>
          <p className="mt-4 leading-8 text-[#536371]">
            Group activities can be valuable for practising cooperation and
            discussion. Our one-on-one approach complements that need with
            attention to the individual; it does not suggest that an interactive
            group assessment can be reproduced through individual coaching
            alone.
          </p>
        </section>
        <section className="mt-10 border-t border-[#d8e1dd] pt-8">
          <h2 className="font-heading text-3xl">
            Begin with a conversation about you.
          </h2>
          <p className="mt-4 leading-8 text-[#536371]">
            Tell us which entry you are considering, where you are in your
            preparation and what you find difficult. We can discuss the support
            you need and a suitable next step. Bring your intended entry,
            examination or SSB timeline, and any questions about your
            preparation. Discuss session arrangements, availability and fees
            before booking.
          </p>
          <p className="mt-4 leading-8 text-[#536371]">
            This approach is supported by{' '}
            <Link
              href="/authors/cdr-sulakshan-kumar-sharma/"
              className="text-link"
            >
              Cdr Sharma’s experience in teaching, military service and SSB
              psychology
            </Link>
            . Individual attention supports preparation; it does not guarantee
            recommendation or selection.
          </p>
        </section>
      </div>
      <ContactBand />
      <SiteFooter showCoachingCta={false} />
    </main>
  );
}
