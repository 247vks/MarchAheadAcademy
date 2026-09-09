import type { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, ClipboardCheck, Route, ArrowRight, Compass, CircleHelp } from 'lucide-react';
import {
  Breadcrumbs,
  SiteHeader,
  SiteFooter,
} from '@/components/authority-shell';

const title = 'Army NCC Special Entry: Eligibility, SSB & Preparation';
const description =
  'Understand Army NCC Special Entry, how eligibility differs from shortlisting, documents to organise and SSB preparation. Includes a dated 125th course reference.';
const notice =
  'https://www.joinindianarmy.nic.in/writereaddata/Portal/NotificationPDF/NOTIFICATION_FOR_NCC_SPL_ENTRY_125_MEN_COURSE_APR_2027.pdf';
export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/career-paths/ncc-special-entry/' },
  openGraph: {
    title,
    description,
    url: '/career-paths/ncc-special-entry/',
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
      <article className="mx-auto max-w-6xl px-5 py-10 lg:px-8">
        <Breadcrumbs current="Army NCC Special Entry" tone="light" />
        <p className="section-kicker">Graduate officer pathways</p>
        <h1 className="mt-4 max-w-4xl font-heading text-4xl leading-tight sm:text-5xl">
          Army NCC Special Entry: from eligibility to SSB preparation
        </h1>
        <p className="mt-6 text-lg leading-8 text-[#536371]">
          NCC experience can be a starting point for an Army officer
          application, but holding a certificate is not the same as receiving an
          SSB call or being selected. Understand the entry, check the notice for
          your category and prepare to explain your own experiences clearly.
        </p>
        <section className="mt-8 border-y border-[#d8e1dd] py-6">
          <h2 className="font-heading text-2xl">
            Which entry does this page cover?
          </h2>
          <p className="mt-3 leading-8 text-[#536371]">
            This guide concerns the Indian Army’s NCC Special Entry for Short
            Service Commission (Non-Technical). It is not a combined Army, Navy
            and Air Force eligibility guide. The{' '}
            <a
              className="text-link"
              href="https://www.careerairforce.gov.in/ncc-special-entry"
            >
              Air Force has its own NCC Special Entry
            </a>{' '}
            involving a valid NCC Air Wing C certificate; use that service’s
            requirements separately. Do not transfer an Army rule to another
            service or assume an NCC concession is an equivalent officer-entry
            route.
          </p>
        </section>
        <section className="mt-8">
          <h2 className="flex items-center gap-3 font-heading text-3xl">
            <GraduationCap
              className="shrink-0 text-[#397fa8]"
              aria-hidden="true"
            />{' '}
            A dated course reference, not an open-application alert
          </h2>
          <p className="mt-4 leading-8 text-[#536371]">
            The official 125th course notification for men, commencing April
            2027, was checked on 9 September 2026. It specifies an application
            window of 20 July to 20 August 2026, ending at 1500 hours. That
            published window has passed. Check{' '}
            <a className="text-link" href="https://www.joinindianarmy.nic.in/">
              Join Indian Army
            </a>{' '}
            for later notices, amendments and candidate updates; this page does
            not announce an extension or a new intake.
          </p>
          <p className="mt-4 leading-8 text-[#536371]">
            The details below are scoped to that men’s notification. Women
            should use their separately issued notification rather than assume
            identical dates, vacancies or shortlisting.{' '}
            <a className="text-link" href={notice}>
              Read the controlling 125th men’s course PDF
            </a>
            .
          </p>
          <div className="mt-5 grid gap-5 md:grid-cols-2">
            <div className="border border-[#d8e1dd] p-6">
              <h3 className="flex items-center gap-3 font-semibold">
                <ClipboardCheck className="h-5 w-5 shrink-0 text-[#397fa8]" aria-hidden="true" />
                Eligibility checks
              </h3>
              <p className="mt-3 leading-7 text-[#536371]">
                The notice covers unmarried male graduates and includes a
                final-year concession with conditions. Its age reference is
                19–25 on 1 January 2027, with an inclusive birth window of 2
                January 2002 to 1 January 2008. Read nationality, qualification
                and final-year provisions together, not just the headline age
                range.
              </p>
            </div>
            <div className="border border-[#d8e1dd] p-6">
              <h3 className="flex items-center gap-3 font-semibold">
                <GraduationCap className="h-5 w-5 shrink-0 text-[#397fa8]" aria-hidden="true" />
                NCC and category checks
              </h3>
              <p className="mt-3 leading-7 text-[#536371]">
                For NCC certificate applicants, the notice requires the
                applicable two/three years of Senior Division/Wing service and
                at least B grade in the C certificate examination. Wards of Army
                battle casualties have a separate provision, including a
                certificate exemption; do not apply that exemption to general
                NCC applicants.
              </p>
            </div>
          </div>
          <p className="mt-4 leading-8 text-[#536371]">
            Pay particular attention to certificate timing: the eligibility
            section discusses provisional NCC certificates at application, while
            the document section specifies certificate issue-date requirements.
            Resolve any uncertainty through the Army’s official query channel
            before relying on an interpretation. The original NCC C certificate
            is required at SSB.
          </p>
        </section>
        <section className="mt-9">
          <h2 className="flex items-center gap-3 font-heading text-3xl">
            <Route className="shrink-0 text-[#4b6228]" aria-hidden="true" />{' '}
            Eligibility, shortlisting and final merit are different
          </h2>
          <p className="mt-4 leading-8 text-[#536371]">
            The notified route runs from application and shortlisting to SSB,
            medical examination and merit-based joining. It does not list a
            separate written entrance examination. The 125th notice uses NCC
            performance and graduation marks for shortlisting; meeting the basic
            qualification does not promise a call-up. A recommendation at SSB is
            also not a joining letter.
          </p>
          <p className="mt-4 leading-8 text-[#536371]">
            For this course, the declaration also restricts appearing for both
            the specified SSC (NT) men’s CDS route and NCC route SSB. Read that
            undertaking before planning parallel applications. These are
            course-specific conditions, not a reason to assume every direct
            entry follows the same rules.
          </p>
        </section>
        <section className="mt-9">
          <h2 className="flex items-center gap-3 font-heading text-3xl">
            <ClipboardCheck
              className="shrink-0 text-[#397fa8]"
              aria-hidden="true"
            />{' '}
            Organise a document folder early
          </h2>
          <p className="mt-4 leading-8 text-[#536371]">
            Use the notification and your call-up instructions as the final
            checklist. For planning, organise these groups and check that names
            and dates agree across records:
          </p>
          <ul className="mt-4 list-disc space-y-3 pl-6 leading-7 text-[#536371]">
            <li>
              Application copy, photograph and the required identity/education
              records.
            </li>
            <li>
              Matriculation certificate, Class 12 records, graduation or
              provisional degree and all semester/year marksheets.
            </li>
            <li>
              NCC C certificate and supporting records relevant to your
              category.
            </li>
            <li>
              University conversion certificate if marks are derived from CGPA;
              use the university’s method, not an online approximation.
            </li>
            <li>
              Final-year declarations and institutional certificates where
              applicable; identify the proof-of-passing deadline before
              submitting.
            </li>
            <li>
              Battle-casualty and relationship documentation only when applying
              under that provision.
            </li>
          </ul>
          <p className="mt-4 leading-8 text-[#536371]">
            Do not assume a phone copy replaces an original. The notice has
            specific original-document and electronic-certificate instructions,
            including an institutional-authentication provision. Check the full
            wording against your circumstances.
          </p>
        </section>
        <section className="mt-9">
          <h2 className="flex items-center gap-3 font-heading text-3xl">
            <Compass className="shrink-0 text-[#397fa8]" aria-hidden="true" />
            Prepare beyond the certificate
          </h2>
          <p className="mt-4 leading-8 text-[#536371]">
            Our preparation advice is to turn NCC participation into honest
            reflection. Choose a responsibility, a team disagreement and a
            setback. What did you actually do? What changed because of your
            action? What would you do differently? Avoid turning a camp
            attendance record into a claim of leadership you cannot explain.
          </p>
          <p className="mt-4 leading-8 text-[#536371]">
            Build familiarity with the{' '}
            <Link className="text-link" href="/selection/ssb/">
              SSB process
            </Link>
            , practise listening during{' '}
            <Link className="text-link" href="/selection/ssb/group-discussion/">
              group discussion
            </Link>{' '}
            and organise examples for the{' '}
            <Link
              className="text-link"
              href="/selection/ssb/personal-interview/"
            >
              personal interview
            </Link>
            . The{' '}
            <Link
              className="text-link"
              href="/resources/personal-interview-worksheet/"
            >
              personal interview worksheet
            </Link>{' '}
            is a practical place to start. This is development work, not a
            substitute for eligibility or a selection guarantee.
          </p>
        </section>
        <section className="mt-9">
          <h2 className="flex items-center gap-3 font-heading text-3xl">
            <CircleHelp className="shrink-0 text-[#397fa8]" aria-hidden="true" />
            Questions candidates often ask
          </h2>
          <div className="mt-5 space-y-5">
            {[
              [
                'Does an NCC C certificate guarantee an SSB call?',
                'No. The notification separates eligibility to apply from competitive shortlisting. Check the applicable shortlisting method and your official candidate updates.',
              ],
              [
                'Can a final-year student apply?',
                'The referenced men’s course allows a conditional final-year application. Degree completion, result timing and submission of proof matter. Read all final-year notes in paragraph 2 rather than assuming “final year” alone is sufficient.',
              ],
              [
                'Is the Army NCC route the same as Air Force NCC entry?',
                'No. The services publish distinct routes and conditions. A certificate or concession relevant to one service should not be treated as a universal application entitlement.',
              ],
              [
                'Can coaching confirm that I will be selected?',
                'No. We can help you understand the process and improve preparation. Shortlisting, assessment, medical decisions and joining remain with the recruiting authorities.',
              ],
            ].map(([q, a]) => (
              <div key={q} className="border-b border-[#d8e1dd] pb-5">
                <h3 className="font-semibold">{q}</h3>
                <p className="mt-2 leading-8 text-[#536371]">{a}</p>
              </div>
            ))}
          </div>
        </section>
        <div className="mt-8 flex flex-wrap gap-5">
          <Link className="text-link" href="/career-paths/after-graduation/">
            Compare graduate pathways
          </Link>
          <Link
            className="text-link inline-flex items-center gap-2"
            href="/ssb-coaching/"
          >
            Explore individual SSB coaching <ArrowRight size={16} />
          </Link>
        </div>
      </article>
      <SiteFooter />
    </main>
  );
}
