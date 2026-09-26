import type { Metadata } from 'next';
import WorkPageContent from '@/components/WorkPageContent';

export const metadata: Metadata = {
  title: 'Work — Frameless Hub',
  description:
    'A curated portfolio of cinematic brand films, content campaigns, motion graphics, and ad creatives by Frameless Hub — A Creative Media Agency. Chennai, India • EST. 2026.',
  openGraph: {
    title: 'Work — Frameless Hub',
    description:
      'A curated portfolio of cinematic brand films, content campaigns, motion graphics, and ad creatives by Frameless Hub — A Creative Media Agency. Chennai, India • EST. 2026.',
  },
};

export default function WorkPage() {
  return <WorkPageContent />;
}
