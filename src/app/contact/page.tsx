import type { Metadata } from 'next';
import ContactPageContent from '@/components/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact — Frameless Hub',
  description:
    'Get in touch with Frameless Hub — A Creative Media Agency based in Chennai, India. EST. 2026. Start your next creative project.',
  openGraph: {
    title: 'Contact — Frameless Hub',
    description:
      'Get in touch with Frameless Hub — A Creative Media Agency based in Chennai, India. EST. 2026. Start your next creative project.',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
