import type { Metadata } from 'next';
import { Libre_Baskerville, Manrope } from 'next/font/google';
import Script from 'next/script';
import { siteDescription, siteName, siteUrl } from '@/lib/site';
import './globals.css';

const bodyFont = Manrope({ variable: '--font-body', subsets: ['latin'] });
const headingFont = Libre_Baskerville({
  variable: '--font-display',
  subsets: ['latin'],
  weight: ['400', '700'],
});
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'SSB Coaching & Defence Career Guidance | March Ahead Academy',
  description: siteDescription,
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'March Ahead Academy',
    description: 'Your clearest path to a career in the Defence Forces.',
    url: '/',
    siteName,
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-tri-service.png',
        width: 1733,
        height: 907,
        alt: 'March Ahead Academy defence career guidance',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'March Ahead Academy',
    description: 'Your clearest path to a career in the Defence Forces.',
    images: ['/og-tri-service.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['Organization', 'EducationalOrganization'],
        '@id': `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        description: siteDescription,
        email: 'hello@marchaheadacademy.com',
        telephone: '+91 98200 96800',
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'student guidance',
          telephone: '+91 98200 96800',
          email: 'hello@marchaheadacademy.com',
          areaServed: 'IN',
        },
      },
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: siteName,
        description: siteDescription,
        publisher: { '@id': `${siteUrl}/#organization` },
        inLanguage: 'en-IN',
      },
    ],
  };

  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${headingFont.variable}`}>
        {children}
        <Script
          id="website-structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PP07C1HDNY"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-PP07C1HDNY');`}
        </Script>
      </body>
    </html>
  );
}
