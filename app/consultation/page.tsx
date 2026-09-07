import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader, SiteFooter } from '@/components/authority-shell';
export const metadata: Metadata = {
  title: 'Book a Defence Career Consultation | March Ahead Academy',
  description:
    'Discuss defence career routes, SSB preparation and your next steps with March Ahead Academy. Enquire by phone, email or WhatsApp.',
  alternates: { canonical: '/consultation/' },
};
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
          Bring your questions about career routes, written examination
          preparation or SSB. Start with an enquiry so we can discuss the
          guidance you need and arrange a suitable next step.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <a
            href={whatsapp}
            target="_blank"
            rel="noreferrer"
            className="bg-[#30471f] p-5 font-bold text-white transition hover:bg-[#3f5b2b]"
          >
            Enquire on WhatsApp
          </a>
          <a
            href="tel:+919820096800"
            className="linked-panel border border-[#d8e1dd] p-5 font-bold"
          >
            Call +91 98200 96800
          </a>
          <a
            href="mailto:hello@marchaheadacademy.com?subject=Consultation%20enquiry"
            className="linked-panel break-words border border-[#d8e1dd] p-5 font-bold"
          >
            Email the Academy
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
              'Choosing what to explore after school or graduation.',
              'Understanding the requirements in an official entry notification.',
              'Planning academic preparation and a realistic routine.',
              'Preparing for SSB discussions, psychological exercises or a personal interview.',
            ].map((text) => (
              <li key={text} className="border border-[#d8e1dd] p-5 leading-7">
                {text}
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
          <Link className="text-link mt-5 inline-block" href="/resources">
            Use the free preparation worksheets
          </Link>
        </section>
        <section className="mt-12 border-t border-[#d8e1dd] pt-8">
          <h2 className="font-heading text-3xl">
            Experience behind the Academy
          </h2>
          <p className="mt-5 leading-8 text-[#536371]">
            Cdr Sulakshan Kumar Sharma (Retd) brings 32 years of military
            service, 57 years of teaching experience, 4.5 years of independent
            recruitment experience for the Indian Navy and Army, and three years
            of SSB psychologist experience.
          </p>
          <Link
            className="text-link mt-4 inline-block"
            href="/authors/cdr-sulakshan-kumar-sharma"
          >
            Read Cdr Sharma’s profile
          </Link>
        </section>
      </div>
      <SiteFooter />
    </main>
  );
}
