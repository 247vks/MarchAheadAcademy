'use client';

import { Printer } from 'lucide-react';

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="inline-flex min-h-11 items-center gap-2 border border-[#2f6f94] px-5 py-3 font-bold text-[#2f6f94] transition hover:bg-[#edf5f9]"
    >
      <Printer size={18} aria-hidden="true" /> Print worksheet
    </button>
  );
}
