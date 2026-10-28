import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import Effects from '@/components/Effects';
import CinematicIntro from '@/components/CinematicIntro';
import InteractiveScrollRail from '@/components/InteractiveScrollRail';
import { ScopingModalProvider } from '@/context/ScopingModalContext';
import ProjectScopingModal from '@/components/ProjectScopingModal';

export const metadata: Metadata = {
  metadataBase: new URL('https://framelesshub.com'),
  title: 'Frameless Hub — A Premium Creative Media Agency in Chennai',
  description:
    'Frameless Hub is a premium creative media agency in Chennai specialising in branding, commercial film production, and digital marketing.',
  alternates: {
    canonical: 'https://framelesshub.com',
  },
  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  keywords: [
    'premium creative media agency',
    'creative media agency chennai',
    'branding agency chennai',
    'commercial film production chennai',
    'digital marketing',
    'frameless hub',
  ],
  openGraph: {
    title: 'Frameless Hub — A Premium Creative Media Agency in Chennai',
    description:
      'Frameless Hub is a premium creative media agency in Chennai specialising in branding, commercial film production, and digital marketing.',
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
    title: 'Frameless Hub — A Premium Creative Media Agency in Chennai',
    description:
      'Frameless Hub is a premium creative media agency in Chennai specialising in branding, commercial film production, and digital marketing.',
    images: ['/logo.png'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': 'https://framelesshub.com/#professionalservice',
      name: 'Frameless Hub',
      founder: {
        '@type': 'Person',
        name: 'Rithik B',
      },
      url: 'https://framelesshub.com',
      logo: 'https://framelesshub.com/logo.png',
      image: 'https://framelesshub.com/logo.png',
      email: 'hello@framelesshub.com',
      telephone: '+91-82486-28371',
      priceRange: '₹₹₹',
      foundingDate: '2026',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        addressCountry: 'India',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '13.0827',
        longitude: '80.2707',
      },
      description:
        'Frameless Hub is a premium creative media agency in Chennai specialising in branding, commercial film production, YouTube retention growth, and digital acceleration. 399+ projects delivered, 10M+ views generated. EST. 2026.',
      sameAs: [
        'https://www.instagram.com/framelesshub',
      ],
      knowsAbout: [
        'Commercial Film Production',
        'Cinematic Visual Direction',
        'Brand Identity & Strategy',
        'YouTube Growth & Retainer Direction',
        'Spatial Sound Design & Acoustic Mix',
      ],
    },
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
        'Frameless Hub is a premium creative media agency in Chennai specialising in branding, content production, and digital marketing. 399+ projects delivered, 10M+ views generated. EST. 2026.',
      sameAs: [
        'https://www.instagram.com/framelesshub',
      ],
    },
    {
      '@type': 'LocalBusiness',
      '@id': 'https://framelesshub.com/#localbusiness',
      name: 'Frameless Hub',
      image: 'https://framelesshub.com/logo.png',
      url: 'https://framelesshub.com',
      telephone: '+91-82486-28371',
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
    {
      '@type': 'ItemList',
      '@id': 'https://framelesshub.com/#portfolio',
      name: 'Frameless Hub Featured Portfolio',
      description: 'Selected commercial film, YouTube growth, and brand identity projects by Frameless Hub.',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          item: {
            '@type': 'CreativeWork',
            name: 'Birlas Parvai — Visual Identity & Digital Growth',
            headline: 'Birlas Parvai — 5.2M+ Views YouTube Transformation',
            creator: { '@id': 'https://framelesshub.com/#professionalservice' },
            genre: 'YouTube Production & Retainer Growth',
            url: 'https://framelesshub.com/work/birlas-parvai',
          },
        },
        {
          '@type': 'ListItem',
          position: 2,
          item: {
            '@type': 'CreativeWork',
            name: 'Supratha Wellness — Medical & Holistic Health Media',
            headline: 'Supratha Wellness — 3.2M+ Views Clinical Media Transformation',
            creator: { '@id': 'https://framelesshub.com/#professionalservice' },
            genre: 'YouTube Video Editing & Healthcare Content',
            url: 'https://framelesshub.com/work/supratha-wellness',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'CreativeWork',
            name: 'Frameless Media — Studio Identity & Digital Hub',
            headline: 'Frameless Media — Flagship Cinema Platform & Entertainment Media',
            creator: { '@id': 'https://framelesshub.com/#professionalservice' },
            genre: 'Digital Platform & Content Production',
            url: 'https://framelesshub.com/work/frameless-media',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'CreativeWork',
            name: 'Krithi Makeover Artistry — Luxury Beauty & Personal Brand',
            headline: 'Krithi Makeover Artistry — Editorial Beauty & Personal Branding',
            creator: { '@id': 'https://framelesshub.com/#professionalservice' },
            genre: 'Personal Branding & Visual Content',
            url: 'https://framelesshub.com/work/krithi-makeover-artistry',
          },
        },
        {
          '@type': 'ListItem',
          position: 5,
          item: {
            '@type': 'CreativeWork',
            name: 'ORA Kitchen — Brand Identity & Social Growth',
            headline: 'ORA Kitchen — Catering & Food Brand Identity Suite',
            creator: { '@id': 'https://framelesshub.com/#professionalservice' },
            genre: 'Branding & Social Media Marketing',
            url: 'https://framelesshub.com/work/ora-kitchen',
          },
        },
        {
          '@type': 'ListItem',
          position: 6,
          item: {
            '@type': 'CreativeWork',
            name: 'Aura Home — Tactile Brand System',
            headline: 'Aura Home — Modern Living Brand Identity & Social Content',
            creator: { '@id': 'https://framelesshub.com/#professionalservice' },
            genre: 'Brand Identity & Design System',
            url: 'https://framelesshub.com/work/aura-home',
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var t=s;if(!t||(t!=='light'&&t!=='dark')){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&family=Unbounded:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-[var(--color-bg)] text-[var(--color-text)] font-sans antialiased selection:bg-[var(--color-selection-bg)] selection:text-[var(--color-selection-text)]">
        <CinematicIntro />
        <ScopingModalProvider>
          <Effects />
          <InteractiveScrollRail />
          <SmoothScroll>
            <a
              href="#main-content"
              className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#0047ff] focus:text-white focus:rounded-full focus:text-sm focus:font-semibold"
            >
              Skip to content
            </a>
            <Header />
            <main id="main-content" className="flex-1 relative z-10">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
          <ProjectScopingModal />
        </ScopingModalProvider>
      </body>
    </html>
  );
}
