import type { Metadata } from 'next';
import WorkPageContent from '@/components/WorkPageContent';

export const metadata: Metadata = {
  title: 'Work — Frameless Hub',
  description:
    'A collection of brands, films and digital work created by Frameless Hub. Premium Creative Agency in Chennai, India.',
  openGraph: {
    title: 'Work — Frameless Hub',
    description:
      'A collection of brands, films and digital work created by Frameless Hub. Premium Creative Agency in Chennai, India.',
  },
};

export default function WorkPage() {
  return <WorkPageContent />;
}
