import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://framelesshub.com'),
  title: "Frameless Hub — A Creative Media Agency",

  description:
    "Strategy, content, design and performance marketing for ambitious brands that want to stand out, grow and stay relevant. Based in Chennai, India.",


  keywords: [
    "video editing",
    "content creation",
    "creative agency",
    "motion graphics",
    "branding",
    "ad creatives",
  ],
  openGraph: {
    title: "Frameless Hub — Create Without Limits",
    description:
      "Premium creative agency for video editing, content creation, and digital branding.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
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

