import type { Metadata } from 'next';
import ServicesPageContent from '@/components/ServicesPageContent';

export const metadata: Metadata = {
  title: 'Services — Frameless Hub',
  description:
    'End-to-end creative services: video editing, content creation, social media branding, ad creatives, and motion graphics.',
  openGraph: {
    title: 'Services — Frameless Hub',
    description:
      'End-to-end creative services: video editing, content creation, social media branding, ad creatives, and motion graphics.',
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
