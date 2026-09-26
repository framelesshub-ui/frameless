import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  metadataBase: new URL('https://framelesshub.com'),
  title: 'Frameless Hub | Creative Studio in Chennai',
  description:
    'Frameless Hub is an independent creative studio in Chennai specialising in branding, content production, and digital marketing.',
  alternates: {
    canonical: 'https://framelesshub.com',
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  keywords: [
    'creative studio chennai',
    'branding agency chennai',
    'video production chennai',
    'digital marketing',
    'frameless hub',
  ],
  openGraph: {
    title: 'Frameless Hub | Creative Studio in Chennai',
    description:
      'Frameless Hub is an independent creative studio in Chennai specialising in branding, content production, and digital marketing.',
    url: 'https://framelesshub.com',
    siteName: 'Frameless Hub',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1024,
        height: 1024,
        alt: 'Frameless Hub Official Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frameless Hub | Creative Studio in Chennai',
    description:
      'Frameless Hub is an independent creative studio in Chennai specialising in branding, content production, and digital marketing.',
    images: ['/logo.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://framelesshub.com/#organization',
      name: 'Frameless Hub',
      url: 'https://framelesshub.com',
      logo: 'https://framelesshub.com/logo.png',
      foundingDate: '2026',
      foundingLocation: {
        '@type': 'Place',
        name: 'Chennai, Tamil Nadu, India',
      },
      description:
        'Frameless Hub is an independent creative studio in Chennai specialising in branding, content production, and digital marketing. 399+ projects delivered, 10M+ views generated. EST. 2026.',
      sameAs: [
        'https://instagram.com/framelesshub',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://framelesshub.com/#localbusiness',
      name: 'Frameless Hub',
      image: 'https://framelesshub.com/logo.png',
      url: 'https://framelesshub.com',
      telephone: '+918248628371',
      priceRange: '₹₹₹',
      foundingDate: '2026',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '13.0827',
        longitude: '80.2707',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-[#080808] text-[#F4F4F5] font-sans antialiased selection:bg-[#00F0FF]/25 selection:text-white">
        <CustomCursor />
        <SmoothScroll>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-white focus:text-black focus:rounded-lg focus:text-sm focus:font-semibold"
          >
            Skip to content
          </a>
          <Header />
          <main id="main-content" className="flex-1 relative z-10">
            {children}
          </main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
