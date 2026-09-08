import type { Metadata } from 'next';
import Link from 'next/link';
import { SiteHeader, SiteFooter } from '@/components/authority-shell';
export const metadata: Metadata = {
  title: 'Cookie Policy | March Ahead Academy',
  description:
    'How March Ahead Academy uses essential preference storage and optional Google Analytics, and how to change your choice.',
  alternates: { canonical: '/cookie-policy/' },
};
export default function Page() {
  return (
    <main className="bg-white text-[#0a1e33]">
      <SiteHeader />
      <article className="mx-auto max-w-4xl px-5 py-12 leading-8">
        <h1 className="font-heading text-4xl">Cookie Policy</h1>
        <p className="mt-4">Updated 8 September 2026</p>
        <h2 className="mt-8 font-heading text-2xl">
          Essential preference storage
        </h2>
        <p>
          We store your cookie choice in your browser’s local storage under{' '}
          <code>maa-cookie-consent-v1</code>. This records whether you permit
          analytics and when you chose. We ask again after 180 days. Clearing
          browser storage or using another browser can also cause the banner to
          return. If your browser blocks storage, your choice may not persist.
        </p>
        <h2 className="mt-8 font-heading text-2xl">Optional analytics</h2>
        <p>
          Google Analytics 4 is loaded only after you allow analytics. It helps
          measure page visits and website interactions and may set cookies such
          as <code>_ga</code> and <code>_ga_*</code> to distinguish browsers and
          sessions. Google controls its analytics processing and cookie
          behaviour. See{' '}
          <a
            className="text-link"
            href="https://policies.google.com/technologies/cookies"
          >
            Google’s cookie information
          </a>
          .
        </p>
        <h2 className="mt-8 font-heading text-2xl">
          Change or withdraw your choice
        </h2>
        <p>
          After making a choice, select the small “Cookie preferences” button at
          the bottom-left of any page. Turn off analytics and save, or select
          “Reject Non-Essential”. We disable analytics, attempt to remove
          accessible Google Analytics cookies for this website and reload the
          page to stop the loaded analytics script. This does not remove data
          previously sent to Google.
        </p>
        <h2 className="mt-8 font-heading text-2xl">External services</h2>
        <p>
          WhatsApp and other external links open services with their own privacy
          and cookie practices. This website does not load a Meta advertising
          pixel through the consent component.
        </p>
        <p className="mt-8">
          Questions:{' '}
          <a className="text-link" href="mailto:hello@marchaheadacademy.com">
            hello@marchaheadacademy.com
          </a>
          . Read our{' '}
          <Link className="text-link" href="/privacy-policy/">
            Privacy Policy
          </Link>
          .
        </p>
      </article>
      <SiteFooter />
    </main>
  );
}
