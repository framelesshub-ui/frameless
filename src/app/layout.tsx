import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://framelesshub.com'),
  title: "Frameless Hub — A Creative Media Agency",

  description:
    "Strategy, content, design and performance marketing for ambitious brands that want to stand out, grow and stay relevant. Based in Chennai, India.",


  icons: {
    icon: [
      { url: '/logo.png', type: 'image/png' },
      { url: '/icon.png', type: 'image/png' },
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
  keywords: [
    "video editing",
    "content creation",
    "creative media agency",
    "youtube management",
    "branding",
    "motion graphics",
    "ad creatives",
    "frameless hub",
  ],
  openGraph: {
    title: "Frameless Hub — A Creative Media Agency",
    description:
      "Strategy, content, design and performance marketing for ambitious brands. Based in Chennai, India. EST. 2026.",
    type: "website",
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
    card: "summary_large_image",
    title: "Frameless Hub — A Creative Media Agency",
    description:
      "Strategy, content, design and performance marketing for ambitious brands. Chennai, India • EST. 2026.",
    images: ["/logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://framelesshub.com/#organization",
      "name": "Frameless Hub",
      "url": "https://framelesshub.com",
      "logo": "https://framelesshub.com/logo.png",
      "foundingDate": "2026",
      "foundingLocation": {
        "@type": "Place",
        "name": "Chennai, Tamil Nadu, India"
      },
      "description": "A Creative Media Agency specializing in brand strategy, cinematic video production, YouTube management, and performance marketing. 399+ projects delivered, 10M+ views generated. Established 2026 in Chennai, India.",
      "sameAs": [
        "https://www.youtube.com/@Framelessmediatamil",
        "https://instagram.com/framelesshub",
        "https://linkedin.com/company/framelesshub"
      ]
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://framelesshub.com/#localbusiness",
      "name": "Frameless Hub",
      "image": "https://framelesshub.com/logo.png",
      "url": "https://framelesshub.com",
      "telephone": "+919840000000",
      "priceRange": "$$$",
      "foundingDate": "2026",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Chennai",
        "addressRegion": "Tamil Nadu",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "13.0827",
        "longitude": "80.2707"
      }
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-[#04060A] text-[#F5F7FA] font-sans selection:bg-[#00F0FF]/25 selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#00F0FF] focus:text-black focus:rounded-lg focus:text-sm focus:font-semibold"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1 relative z-10">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

