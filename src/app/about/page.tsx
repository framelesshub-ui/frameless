import type { Metadata } from 'next';
import AboutPageContent from '@/components/AboutPageContent';

export const metadata: Metadata = {
  title: 'About — Frameless Hub',
  description:
    'The story behind Frameless Hub — a premium creative agency built for cinematic visuals, viral content, and brand stories.',
  openGraph: {
    title: 'About — Frameless Hub',
    description:
      'The story behind Frameless Hub — a premium creative agency built for cinematic visuals, viral content, and brand stories.',
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
