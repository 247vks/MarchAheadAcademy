import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function SsbJourneyMap() {
  const steps = [
    ['Stage I', 'Entry-specific screening'],
    ['Stage II', 'Psychology, group tasks and interview'],
    ['Conference', 'Assessors consider the evidence'],
    ['Medical', 'Authorised boards decide fitness'],
    ['Merit & joining', 'Vacancies and final requirements apply'],
  ];
  return (
    <section className="border border-[#d8e1dd] bg-[#f8faf9] p-6">
      <p className="text-xs font-bold tracking-[.15em] text-[#397fa8] uppercase">
        Journey map
      </p>
      <h2 className="mt-2 font-heading text-3xl">
        From reporting to the decisions that follow
      </h2>
      <ol className="mt-6 grid gap-4 md:grid-cols-[repeat(5,minmax(0,1fr))]">
        {steps.map(([title, copy], index) => (
          <li
            key={title}
            className="relative min-w-0 border-t-4 border-[#397fa8] bg-white px-3 py-4"
          >
            <span className="text-xs font-bold text-[#4b6228]">
              0{index + 1}
            </span>
            <h3 className="mt-2 break-words font-heading text-base leading-tight lg:text-lg">
              {title}
            </h3>
            <p className="mt-2 text-xs leading-5 text-[#60707b]">{copy}</p>
            {index < steps.length - 1 && (
              <ArrowRight
                className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 text-[#397fa8] md:block"
                size={16}
              />
            )}
          </li>
        ))}
      </ol>
      <p className="mt-4 text-xs leading-5 text-[#687781]">
        Service and entry instructions vary. The call-up letter and current
        official notice always control.
      </p>
    </section>
  );
}

export function EligibilityChain() {
  const checks = [
    [
      'Identity and intake',
      'Exact entry, cycle, date of birth and status conditions.',
    ],
    ['Education', 'Subjects, qualification, marks and documentary deadlines.'],
    [
      'Entry requirements',
      'Branch, commission and appearing-candidate conditions.',
    ],
    [
      'Medical and physical',
      'Only the authorised service process decides fitness.',
    ],
    [
      'Current notice',
      'Recheck the original notification and every corrigendum.',
    ],
  ];
  return (
    <section className="border border-[#d8e1dd] bg-[#f8faf9] p-6">
      <p className="text-xs font-bold tracking-[.15em] text-[#4b6228] uppercase">
        Eligibility checklist
      </p>
      <h2 className="mt-2 font-heading text-3xl">
        Check each requirement before you apply
      </h2>
      <ol className="mt-6 grid gap-3">
        {checks.map(([title, copy], index) => (
          <li
            key={title}
            className="flex gap-4 border border-[#dce4e0] bg-white p-4"
          >
            <CheckCircle2 className="mt-1 shrink-0 text-[#4b6228]" size={19} />
            <div>
              <strong>
                {index + 1}. {title}
              </strong>
              <p className="mt-1 text-sm leading-6 text-[#60707b]">{copy}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function ExamComparison() {
  const exams = [
    [
      'NDA & NA',
      'Class 12 stage',
      'UPSC written exam',
      'SSB, medical and merit',
      '/exams/nda',
    ],
    [
      'CDS',
      'Graduate stage',
      'UPSC written exam',
      'SSB, medical and merit',
      '/exams/cds',
    ],
    [
      'AFCAT',
      'Graduate stage',
      'IAF online exam',
      'AFSB, medical and merit',
      '/exams/afcat',
    ],
  ];
  return (
    <section className="mx-auto max-w-6xl px-5 pt-12 lg:px-8 lg:pt-16">
      <p className="text-xs font-bold tracking-[.15em] text-[#397fa8] uppercase">
        Quick comparison
      </p>
      <h2 className="mt-3 font-heading text-3xl sm:text-4xl">
        Compare the route—not only the paper
      </h2>
      <div className="mt-7 overflow-x-auto">
        <table className="w-full min-w-[720px] border-collapse text-left text-sm">
          <thead className="bg-[#071f3d] text-white">
            <tr>
              <th className="p-4">Entry</th>
              <th className="p-4">Education stage</th>
              <th className="p-4">Written stage</th>
              <th className="p-4">What follows</th>
              <th className="p-4">
                <span className="sr-only">Guide</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {exams.map(([name, stage, written, next, href]) => (
              <tr key={name} className="border-b border-[#d8e1dd]">
                <th className="p-4 font-heading text-xl">{name}</th>
                <td className="p-4">{stage}</td>
                <td className="p-4">{written}</td>
                <td className="p-4">{next}</td>
                <td className="p-4">
                  <Link
                    href={href}
                    className="font-bold text-[#2f6f94] underline underline-offset-4"
                  >
                    Guide
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 text-xs leading-5 text-[#687781]">
        Exact eligibility, academy choice, branch availability and stages must
        be checked in the current controlling notice.
      </p>
    </section>
  );
}
