import type { Metadata } from 'next';
import WorkPageContent from '@/components/WorkPageContent';

export const metadata: Metadata = {
  title: 'Work — Frameless Hub',
  description:
    'A curated portfolio of cinematic brand films, content campaigns, motion graphics, and ad creatives by Frameless Hub.',
  openGraph: {
    title: 'Work — Frameless Hub',
    description:
      'A curated portfolio of cinematic brand films, content campaigns, motion graphics, and ad creatives by Frameless Hub.',
  },
};

export default function WorkPage() {
  return <WorkPageContent />;
}
