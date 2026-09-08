'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Cookie, X } from 'lucide-react';

const key = 'maa-cookie-consent-v1';
const gaId = 'G-PP07C1HDNY';
type Choice = { analytics: boolean; savedAt: number };
type AnalyticsWindow = Window & {
  dataLayer?: unknown[];
  gtag?: (...args: unknown[]) => void;
  [key: string]: unknown;
};

function readChoice(): Choice | null {
  try {
    const value = JSON.parse(localStorage.getItem(key) || 'null');
    return value &&
      typeof value.analytics === 'boolean' &&
      typeof value.savedAt === 'number' &&
      Date.now() - value.savedAt < 180 * 86400000
      ? value
      : null;
  } catch {
    return null;
  }
}

function disableAnalytics() {
  const w = window as unknown as AnalyticsWindow;
  w[`ga-disable-${gaId}`] = true;
  document.getElementById('maa-ga-loader')?.remove();
  for (const cookie of document.cookie.split(';')) {
    const name = cookie.split('=')[0].trim();
    if (!/^_ga(?:_|$)|^_gid$|^_gat/.test(name)) continue;
    const parts = location.hostname.split('.');
    const domains = ['', ...parts.map((_, i) => parts.slice(i).join('.'))];
    for (const domain of domains) {
      document.cookie = `${name}=; Max-Age=0; Path=/;${domain ? ` Domain=${domain};` : ''} SameSite=Lax`;
    }
  }
}

function enableAnalytics() {
  const w = window as unknown as AnalyticsWindow;
  w[`ga-disable-${gaId}`] = false;
  if (document.getElementById('maa-ga-loader')) return;
  w.dataLayer = w.dataLayer || [];
  w.gtag = function () {
    w.dataLayer!.push(arguments);
  };
  w.gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  w.gtag('js', new Date());
  w.gtag('config', gaId, {
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  const script = document.createElement('script');
  script.id = 'maa-ga-loader';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(script);
}

export function CookieConsent() {
  const [ready, setReady] = useState(false);
  const [choice, setChoice] = useState<Choice | null>(null);
  const [analytics, setAnalytics] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const sync = () => {
      const stored = readChoice();
      setChoice(stored);
      setAnalytics(stored?.analytics ?? false);
      if (stored?.analytics) enableAnalytics();
      else disableAnalytics();
      setReady(true);
    };
    sync();
    const onStorage = (event: StorageEvent) => {
      if (event.key === key || event.key === null) {
        if (!readChoice()?.analytics) {
          disableAnalytics();
          location.reload();
        } else sync();
      }
    };
    window.addEventListener('storage', onStorage);
    return () => window.removeEventListener('storage', onStorage);
  }, []);
  function save(allowed: boolean) {
    const next = { analytics: allowed, savedAt: Date.now() };
    try {
      localStorage.setItem(key, JSON.stringify(next));
    } catch {
      /* Choice remains effective for this page if storage is unavailable. */
    }
    const withdrawing = choice?.analytics && !allowed;
    setChoice(next);
    setAnalytics(allowed);
    dialog.current?.close();
    if (allowed) enableAnalytics();
    else disableAnalytics();
    if (withdrawing) location.reload();
  }
  if (!ready) return null;
  const button =
    'min-h-11 rounded border border-[#30471f] px-4 py-2 text-sm font-bold text-[#0a1e33] transition hover:bg-[#edf3e8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#397fa8]';
  return (
    <>
      {!choice ? (
        <section
          aria-label="Cookie consent"
          className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-4xl border border-[#c5d0c9] bg-white p-5 text-[#0a1e33] shadow-xl sm:p-6"
        >
          <h2 className="font-heading text-xl">Your privacy, your choice</h2>
          <p className="mt-2 text-sm leading-6">
            We use essential storage to remember your preferences. With your
            permission, Google Analytics helps us understand website use.
            Analytics stays off unless you accept it.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <button className={button} onClick={() => save(true)}>
              Accept All
            </button>
            <button className={button} onClick={() => save(false)}>
              Reject Non-Essential
            </button>
            <button
              className={button}
              onClick={() => {
                setAnalytics(false);
                dialog.current?.showModal();
              }}
            >
              Manage Preferences
            </button>
          </div>
          <p className="mt-3 text-xs">
            <Link className="text-link" href="/cookie-policy/">
              Cookie Policy
            </Link>{' '}
            ·{' '}
            <Link className="text-link" href="/privacy-policy/">
              Privacy Policy
            </Link>
          </p>
        </section>
      ) : (
        <button
          aria-label="Cookie preferences"
          title="Cookie preferences"
          onClick={() => {
            setAnalytics(choice.analytics);
            dialog.current?.showModal();
          }}
          className="fixed bottom-4 left-4 z-40 grid h-11 w-11 place-items-center rounded-full border border-[#30471f] bg-white text-[#30471f] shadow-md transition hover:bg-[#edf3e8] focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <Cookie size={21} aria-hidden="true" />
        </button>
      )}
      <dialog
        ref={dialog}
        aria-labelledby="cookie-title"
        className="fixed inset-0 m-auto max-h-[85dvh] w-[calc(100%_-_2rem)] max-w-lg overflow-y-auto border border-[#c5d0c9] bg-white p-6 text-[#0a1e33] shadow-xl backdrop:bg-black/40"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="cookie-title" className="font-heading text-2xl">
            Cookie preferences
          </h2>
          <button
            aria-label="Close cookie preferences"
            onClick={() => dialog.current?.close()}
            className="grid h-11 w-11 shrink-0 place-items-center"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>
        <p className="mt-4 text-sm leading-6">
          You can change your choice at any time. Withdrawing analytics consent
          stops future collection; it does not erase information already sent.
        </p>
        <div className="mt-5 border-t border-[#d8e1dd] pt-4">
          <h3 className="font-bold">Essential — always enabled</h3>
          <p className="mt-2 text-sm leading-6">
            Local storage remembers this choice so we can honour it across
            pages. It is not used for advertising.
          </p>
        </div>
        <label className="mt-5 flex items-start gap-3 border-t border-[#d8e1dd] pt-4">
          <input
            type="checkbox"
            className="mt-1 h-5 w-5 accent-[#30471f]"
            checked={analytics}
            onChange={(e) => setAnalytics(e.target.checked)}
          />
          <span>
            <strong>Analytics (optional)</strong>
            <span className="mt-2 block text-sm leading-6">
              Allow Google Analytics to measure page visits and website
              interactions. Off by default.
            </span>
          </span>
        </label>
        <p className="mt-4 text-sm">
          No marketing cookies or advertising pixels are enabled by this consent
          component.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button className={button} onClick={() => save(analytics)}>
            Save Preferences
          </button>
          <button className={button} onClick={() => save(false)}>
            Reject Non-Essential
          </button>
          <button className={button} onClick={() => save(true)}>
            Accept All
          </button>
        </div>
        <p className="mt-4 text-sm">
          <Link className="text-link" href="/cookie-policy/">
            Cookie Policy
          </Link>{' '}
          ·{' '}
          <Link className="text-link" href="/privacy-policy/">
            Privacy Policy
          </Link>
        </p>
      </dialog>
    </>
  );
}
