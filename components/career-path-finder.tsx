'use client';

import Link from 'next/link';
import { ArrowRight, Compass, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

const results = {
  class10: {
    title: 'Build the foundation first',
    copy: 'Keep future routes open through subject choices, fitness, communication and awareness of service life.',
    links: [
      ['Build your foundation', '/career-paths/foundation'],
      ['Compare the services', '/services'],
    ],
  },
  class12: {
    title: 'Investigate Class 12 entry routes',
    copy: 'NDA, technical and notified service-specific entries may be relevant. Stream, subjects, date of birth and the current notice decide which ones deserve a closer look.',
    links: [
      ['Explore routes after Class 12', '/career-paths/after-12th'],
      ['Understand NDA', '/exams/nda'],
    ],
  },
  college: {
    title: 'Plan backwards from graduate entries',
    copy: 'Your degree, subjects, NCC participation and graduation timeline can affect the routes worth investigating.',
    links: [
      ['Explore graduate pathways', '/career-paths/after-graduation'],
      ['Review eligibility factors', '/eligibility'],
    ],
  },
  graduate: {
    title: 'Compare graduate officer-entry routes',
    copy: 'CDS, AFCAT, NCC and degree-specific direct entries may be relevant. Commission, branch and qualification rules vary by notification.',
    links: [
      ['Compare graduate pathways', '/career-paths/after-graduation'],
      ['Compare CDS and AFCAT', '/exams'],
    ],
  },
} as const;

type Stage = keyof typeof results;

export function CareerPathFinder() {
  const [stage, setStage] = useState<Stage | null>(null);
  return (
    <section
      className="border border-[#ccd8d3] bg-[#f8faf9] p-6 sm:p-8"
      aria-labelledby="guided-finder-heading"
    >
      <div className="flex items-center gap-2 text-xs font-bold tracking-[.15em] text-[#397fa8] uppercase">
        <Compass size={18} aria-hidden="true" /> Guided starting point
      </div>
      <h2 id="guided-finder-heading" className="mt-3 font-heading text-3xl">
        Where are you in your education?
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-[#5c6b77]">
        Choose one stage for routes worth investigating. This does not determine
        eligibility.
      </p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {(
          [
            ['class10', 'Class 10'],
            ['class12', 'Class 12'],
            ['college', 'In college'],
            ['graduate', 'Graduate'],
          ] as const
        ).map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => setStage(value)}
            aria-pressed={stage === value}
            className={`min-h-12 border px-4 py-3 text-left text-sm font-bold transition ${stage === value ? 'border-[#071f3d] bg-[#071f3d] text-white' : 'border-[#cbd3ce] bg-white hover:border-[#397fa8]'}`}
          >
            {label}
          </button>
        ))}
      </div>
      {stage && (
        <div
          className="mt-6 border-l-4 border-[#4b6228] bg-white p-6"
          aria-live="polite"
        >
          <div className="flex gap-3">
            <ShieldCheck
              className="mt-1 shrink-0 text-[#4b6228]"
              size={20}
              aria-hidden="true"
            />
            <div>
              <h3 className="font-heading text-2xl">{results[stage].title}</h3>
              <p className="mt-2 leading-7 text-[#536371]">
                {results[stage].copy}
              </p>
            </div>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            {results[stage].links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center gap-2 border border-[#397fa8] px-4 py-3 text-sm font-bold text-[#245b7a]"
              >
                {label}
                <ArrowRight size={15} />
              </Link>
            ))}
          </div>
          <p className="mt-5 text-xs leading-5 text-[#687781]">
            Confirm your exact date of birth, education, subjects and the
            current controlling notification before acting.
          </p>
        </div>
      )}
    </section>
  );
}
