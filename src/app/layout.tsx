import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import Effects from '@/components/Effects';
import { ScopingModalProvider } from '@/context/ScopingModalContext';
import ProjectScopingModal from '@/components/ProjectScopingModal';

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
        'Frameless Hub is an independent creative studio in Chennai specialising in branding, commercial film production, YouTube retention growth, and digital acceleration. 399+ projects delivered, 10M+ views generated. EST. 2026.',
      sameAs: [
        'https://www.instagram.com/framelesshub',
      ],
      knowsAbout: [
        'Commercial Film Production',
        'Cinematic Color Science',
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
        'Frameless Hub is an independent creative studio in Chennai specialising in branding, content production, and digital marketing. 399+ projects delivered, 10M+ views generated. EST. 2026.',
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
            name: 'ORA Kitchens — Cinematic Commercial Film',
            headline: 'ORA Kitchens — High-Speed Commercial Brand Film',
            creator: { '@id': 'https://framelesshub.com/#professionalservice' },
            genre: 'Commercial Production & Cinema Post',
            url: 'https://framelesshub.com/work/ora-kitchens',
          },
        },
        {
          '@type': 'ListItem',
          position: 3,
          item: {
            '@type': 'CreativeWork',
            name: 'Aura Home — Tactile Brand System',
            headline: 'Aura Home — Luxury Brand Identity & Packaging',
            creator: { '@id': 'https://framelesshub.com/#professionalservice' },
            genre: 'Brand Identity & Design System',
            url: 'https://framelesshub.com/work/aura-home',
          },
        },
        {
          '@type': 'ListItem',
          position: 4,
          item: {
            '@type': 'CreativeWork',
            name: 'Krithi — Editorial Lookbook & Campaign',
            headline: 'Krithi — High-Fashion Campaign & Film',
            creator: { '@id': 'https://framelesshub.com/#professionalservice' },
            genre: 'Campaign Film & Lookbook',
            url: 'https://framelesshub.com/work/krithi',
          },
        },
        {
          '@type': 'ListItem',
          position: 5,
          item: {
            '@type': 'CreativeWork',
            name: 'Frameless Media — Studio Identity & Digital Hub',
            headline: 'Frameless Media — Flagship Creative Platform',
            creator: { '@id': 'https://framelesshub.com/#professionalservice' },
            genre: 'Digital Platform & Identity',
            url: 'https://framelesshub.com/work/frameless-media',
          },
        },
        {
          '@type': 'ListItem',
          position: 6,
          item: {
            '@type': 'CreativeWork',
            name: 'Nesta Coffee — Packaging & Brand Film',
            headline: 'Nesta Coffee — Artisanal Coffee Identity & Film',
            creator: { '@id': 'https://framelesshub.com/#professionalservice' },
            genre: 'Packaging & Brand Film',
            url: 'https://framelesshub.com/work/nesta-coffee',
          },
        },
        {
          '@type': 'ListItem',
          position: 7,
          item: {
            '@type': 'CreativeWork',
            name: 'Verve Fitness — Rebrand & App Visuals',
            headline: 'Verve Fitness — High-Energy Rebrand & Motion',
            creator: { '@id': 'https://framelesshub.com/#professionalservice' },
            genre: 'Rebrand & Motion Design',
            url: 'https://framelesshub.com/work/verve-fitness',
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
        <ScopingModalProvider>
          <Effects />
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
