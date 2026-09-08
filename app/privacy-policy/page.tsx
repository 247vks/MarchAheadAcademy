import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader, SiteFooter } from '@/components/authority-shell';
export const metadata: Metadata = {
  title: 'Privacy Policy | March Ahead Academy',
  description:
    'Information about enquiries, optional analytics and privacy choices on the March Ahead Academy website.',
  alternates: { canonical: '/privacy-policy/' },
};
export default function Page() {
  return (
    <main className="bg-white text-[#0a1e33]">
      <SiteHeader />
      <article className="mx-auto max-w-4xl px-5 py-12 leading-8">
        <h1 className="font-heading text-4xl">Privacy Policy</h1>
        <p className="mt-4">Updated 8 September 2026</p>
        <h2 className="mt-8 font-heading text-2xl">Contact and enquiries</h2>
        <p>
          March Ahead Academy uses information you choose to share by email,
          phone or WhatsApp to respond to your enquiry and discuss coaching
          arrangements. Share only what is needed for an initial conversation;
          avoid sending identity documents or sensitive personal records unless
          specifically necessary and agreed.
        </p>
        <h2 className="mt-8 font-heading text-2xl">
          Website use and analytics
        </h2>
        <p>
          The website is hosted using AWS Amplify. Delivering a website involves
          processing technical request information such as an IP address and
          browser information. Optional Google Analytics is disabled until you
          consent. If enabled, it measures website use, such as page visits and
          interactions. Advertising personalisation and Google signals are
          disabled in our analytics configuration.
        </p>
        <h2 className="mt-8 font-heading text-2xl">Your choices</h2>
        <p>
          You can refuse analytics without losing access to the website or
          coaching enquiry links. Use the bottom-left cookie preferences button
          to change or withdraw consent. Read the{' '}
          <Link className="text-link" href="/cookie-policy/">
            Cookie Policy
          </Link>{' '}
          for storage details. Withdrawal stops future analytics collection but
          does not erase information already collected.
        </p>
        <h2 className="mt-8 font-heading text-2xl">Third-party services</h2>
        <p>
          Email, WhatsApp, Google Analytics and hosting services process
          information under their own applicable terms and privacy practices.
          Following an external link takes you outside this website. See{' '}
          <a className="text-link" href="https://policies.google.com/privacy">
            Google’s Privacy Policy
          </a>{' '}
          for its handling of analytics information.
        </p>
        <h2 className="mt-8 font-heading text-2xl">Privacy requests</h2>
        <p>
          For questions about information you have shared, or requests to
          access, correct or delete it, contact{' '}
          <a className="text-link" href="mailto:hello@marchaheadacademy.com">
            hello@marchaheadacademy.com
          </a>
          . Please identify the information or correspondence concerned without
          including unnecessary sensitive details. Retention and deletion can
          depend on the enquiry, service arrangements and applicable
          obligations.
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}
