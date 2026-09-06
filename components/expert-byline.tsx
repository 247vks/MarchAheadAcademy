import Link from 'next/link';
import { GraduationCap } from 'lucide-react';

export function ExpertByline({
  context = 'This guide draws on Cdr Sharma’s experience in military education, candidate development and SSB psychology. Official notices remain the source for entry rules and current requirements.',
}: {
  context?: string;
}) {
  return (
    <aside className="border border-[#d9e3df] border-l-4 border-l-[#397fa8] bg-[#f8faf9] p-5" aria-label="Expert perspective">
      <div className="flex gap-4">
        <GraduationCap className="mt-1 shrink-0 text-[#397fa8]" aria-hidden="true" />
        <div>
          <p className="text-xs font-bold tracking-[.15em] text-[#397fa8] uppercase">Expert perspective</p>
          <p className="mt-2 font-heading text-xl">Cdr Sulakshan Kumar Sharma (Retd)</p>
          <p className="mt-2 text-sm leading-6 text-[#5c6974]">{context}</p>
          <Link href="/authors/cdr-sulakshan-kumar-sharma" className="mt-3 inline-block text-sm font-bold underline decoration-[#9bc9df] underline-offset-4">View qualifications and experience</Link>
        </div>
      </div>
    </aside>
  );
}
