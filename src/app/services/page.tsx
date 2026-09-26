import type { Metadata } from 'next';
import ServicesPageContent from '@/components/ServicesPageContent';

export const metadata: Metadata = {
  title: 'Services — Frameless Hub',
  description:
    'Strategy, branding, production and digital growth — built around what your brand actually needs. Frameless Hub, Chennai, India.',
  openGraph: {
    title: 'Services — Frameless Hub',
    description:
      'Strategy, branding, production and digital growth — built around what your brand actually needs. Frameless Hub, Chennai, India.',
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
