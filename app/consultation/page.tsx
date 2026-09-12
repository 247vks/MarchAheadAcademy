import { withPageMetadata } from '@/lib/page-metadata';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  MessageCircle,
  Phone,
  Mail,
  Compass,
  FileCheck2,
  CalendarCheck,
  Users,
  BookOpen,
  GraduationCap,
} from 'lucide-react';
import { SiteHeader, SiteFooter } from '@/components/authority-shell';
export const metadata: Metadata = withPageMetadata({
  title: 'Book a Defence Career Consultation | March Ahead Academy',
  description:
    'Explore one-on-one defence career and SSB coaching at March Ahead Academy, personalised to your needs and learning pace. Book a consultation.',
  alternates: { canonical: '/consultation/' },
});
const whatsapp =
  'https://wa.me/919820096800?text=' +
  encodeURIComponent(
    'Hello March Ahead Academy, I would like to book a consultation. My education stage is: __. I would like guidance about: __. My preferred availability is: __. Please confirm the consultation format, duration and any fee.',
  );
export default function Page() {
  return (
    <main className="min-h-screen bg-white text-[#0a1e33]">
      <SiteHeader />
      <div className="mx-auto max-w-5xl px-5 py-12 lg:px-8 lg:py-16">
        <p className="section-kicker">Personal guidance</p>
        <h1 className="mt-5 font-heading text-4xl sm:text-5xl">
          Book a consultation with March Ahead Academy.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#536371]">
          Our coaching is one-on-one, so preparation can be customised to your
          individual needs and paced to suit your learning. Bring your questions
          about career routes, written examinations or SSB, and we’ll discuss
          your goals, current preparation and areas where you need support.
        </p>
        <p className="mt-5 text-base font-semibold leading-7 text-[#30471f]">
          Online coaching available. In-person visits are by prior appointment
          only.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-3">
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 bg-[#30471f] p-5 font-bold text-white transition hover:bg-[#3f5b2b]"
          >
            <MessageCircle size={24} className="shrink-0" aria-hidden="true" />
            <span>Enquire on WhatsApp</span>
          </a>
          <a
            href="tel:+919820096800"
            className="linked-panel flex items-center gap-3 border border-[#d8e1dd] p-5 font-bold"
          >
            <Phone
              size={24}
              className="shrink-0 text-[#397fa8]"
              aria-hidden="true"
            />
            <span>Call +91 98200 96800</span>
          </a>
          <a
            href="mailto:hello@marchaheadacademy.com?subject=Consultation%20enquiry"
            className="linked-panel flex items-center gap-3 break-words border border-[#d8e1dd] p-5 font-bold"
          >
            <Mail
              size={24}
              className="shrink-0 text-[#397fa8]"
              aria-hidden="true"
            />
            <span>Email the Academy</span>
          </a>
        </div>
        <p className="mt-4 text-sm leading-6 text-[#536371]">
          An enquiry does not reserve an appointment. Confirm availability,
          format, duration and any applicable fee with the Academy before
          booking.
        </p>
        <section className="mt-12">
          <h2 className="font-heading text-3xl">
            What would you like to discuss?
          </h2>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Compass,
                text: 'Choosing what to explore after school or graduation.',
              },
              {
                icon: FileCheck2,
                text: 'Understanding the requirements in an official entry notification.',
              },
              {
                icon: CalendarCheck,
                text: 'Planning academic preparation and a realistic routine.',
              },
              {
                icon: Users,
                text: 'Preparing for SSB discussions, psychological exercises or a personal interview.',
              },
            ].map(({ icon: Icon, text }) => (
              <li
                key={text}
                className="flex items-start gap-4 border border-[#d8e1dd] p-5 leading-7"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#f0f5eb] text-[#4b6228]">
                  <Icon size={23} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <span>{text}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 leading-7 text-[#536371]">
            Aspirants and parents can enquire. Official recruitment authorities
            determine eligibility and selection; consultation helps you
            understand and prepare for the process.
          </p>
        </section>
        <section className="mt-12 border-t border-[#d8e1dd] pt-8">
          <h2 className="font-heading text-3xl">
            Prepare for a useful conversation
          </h2>
          <ol className="mt-5 list-decimal space-y-4 pl-6 leading-7">
            <li>
              Note your education stage, interests and the entry you are
              considering.
            </li>
            <li>
              Write your three main questions and what you have already tried.
            </li>
            <li>
              Have the relevant official notice or your own practice notes
              available.
            </li>
            <li>
              Ask which preparation priorities to address next and how to review
              progress.
            </li>
          </ol>
          <p className="mt-5 leading-7 text-[#536371]">
            For the first enquiry, a brief description is enough. Keep identity
            documents and sensitive personal records out of your initial
            message.
          </p>
          <Link
            className="text-link mt-5 inline-flex items-center gap-2"
            href="/resources"
          >
            <BookOpen size={20} aria-hidden="true" />
            Use the free preparation worksheets
          </Link>
        </section>
        <section className="mt-12 border-t border-[#d8e1dd] pt-8">
          <h2 className="font-heading text-3xl">
            Experience behind the Academy
          </h2>
          <p className="mt-5 leading-8 text-[#536371]">
            Commander Sulakshan Kumar Sharma (Retd) brings 32 years of military
            service, 57 years of teaching experience, 4.5 years of independent
            recruitment experience for the Indian Navy and Army, and three years
            of SSB psychologist experience.
          </p>
          <Link
            className="text-link mt-4 inline-flex items-center gap-2"
            href="/authors/cdr-sulakshan-kumar-sharma"
          >
            <GraduationCap size={20} aria-hidden="true" />
            Read Commander Sharma’s profile
          </Link>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
