import type { Metadata } from 'next';
import AboutPageContent from '@/components/AboutPageContent';

export const metadata: Metadata = {
  title: 'About — Frameless Hub',
  description:
    'We believe better creative starts with better thinking. Frameless Hub brings together ideas, craft, and execution to create work that is clear, purposeful, and memorable. Chennai, India • EST. 2026.',
  openGraph: {
    title: 'About — Frameless Hub',
    description:
      'We believe better creative starts with better thinking. Frameless Hub brings together ideas, craft, and execution to create work that is clear, purposeful, and memorable. Chennai, India • EST. 2026.',
  },
};

export default function AboutPage() {
  return <AboutPageContent />;
}
