'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

export function ActiveNavLink({ href, className, children }: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  const pathname = usePathname()?.replace(/\/$/, '') || '/';
  const target = href.replace(/\/$/, '') || '/';
  const exact = pathname === target;
  const active = exact || (target !== '/' && pathname.startsWith(`${target}/`));
  return (
    <Link
      href={href}
      aria-current={exact ? 'page' : active ? 'location' : undefined}
      className={`${className}${active ? ' bg-[#edf5f9] text-[#245b7a] underline decoration-[#397fa8] underline-offset-4' : ''}`}
    >
      {children}
    </Link>
  );
}
