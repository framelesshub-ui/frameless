import type { Metadata } from 'next';
import ContactPageContent from '@/components/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact — Frameless Hub',
  description:
    'Let’s make something great. Tell us what you’re working on and what you need. Frameless Hub, Chennai, India.',
  openGraph: {
    title: 'Contact — Frameless Hub',
    description:
      'Let’s make something great. Tell us what you’re working on and what you need. Frameless Hub, Chennai, India.',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
