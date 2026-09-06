import type { Metadata } from 'next';
import { Libre_Baskerville, Manrope } from 'next/font/google';
import './globals.css';

const bodyFont = Manrope({ variable: '--font-body', subsets: ['latin'] });
const headingFont = Libre_Baskerville({ variable: '--font-display', subsets: ['latin'], weight: ['400', '700'] });
const siteUrl = process.env.SITE_URL ?? 'http://localhost:3001';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'March Ahead Academy | Indian Defence Career Guidance',
  description: 'Independent, official-source-led guidance for careers in the Indian Army, Navy and Air Force.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'March Ahead Academy',
    description: 'Your clearest path to a career in the Defence Forces.',
    images: [{ url: '/og-tri-service.png', width: 1733, height: 907, alt: 'March Ahead Academy defence career guidance' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'March Ahead Academy',
    description: 'Your clearest path to a career in the Defence Forces.',
    images: ['/og-tri-service.png'],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${bodyFont.variable} ${headingFont.variable}`}>{children}</body></html>;
}
