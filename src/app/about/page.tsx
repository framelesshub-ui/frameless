import type { Metadata } from 'next';
import AboutPageContent from '@/components/AboutPageContent';

export const metadata: Metadata = {
  title: 'About — Frameless Hub',
  description:
    'The story behind Frameless Hub — a creative media agency built for cinematic visuals, viral content, and brand stories. Founded in Chennai, India. EST. 2026.',
  openGraph: {
    title: 'About — Frameless Hub',
    description:
      'The story behind Frameless Hub — a creative media agency built for cinematic visuals, viral content, and brand stories. Founded in Chennai, India. EST. 2026.',
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
