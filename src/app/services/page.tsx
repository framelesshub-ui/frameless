import type { Metadata } from 'next';
import ServicesPageContent from '@/components/ServicesPageContent';

export const metadata: Metadata = {
  title: 'Services — Frameless Hub',
  description:
    'Services built for the digital age. We combine strategy, creativity and technology to help brands grow, connect, and make a lasting impact.',
  openGraph: {
    title: 'Services — Frameless Hub',
    description:
      'Services built for the digital age. We combine strategy, creativity and technology to help brands grow, connect, and make a lasting impact.',
  },
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}
