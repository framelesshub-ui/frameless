import type { Metadata } from 'next';
import ServicesPageContent from '@/components/ServicesPageContent';

export const metadata: Metadata = {
  title: 'Services — Frameless Hub',
  description:
    'Creative media services built for the digital age by Frameless Hub — A Creative Media Agency. Strategy, branding, video production, YouTube scaling and performance marketing. Chennai, India • EST. 2026.',
  openGraph: {
    title: 'Services — Frameless Hub',
    description:
      'Creative media services built for the digital age by Frameless Hub — A Creative Media Agency. Strategy, branding, video production, YouTube scaling and performance marketing. Chennai, India • EST. 2026.',
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
