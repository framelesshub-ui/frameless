import type { Metadata } from 'next';
import ContactPageContent from '@/components/ContactPageContent';

export const metadata: Metadata = {
  title: 'Contact — Frameless Hub',
  description:
    'Get in touch with Frameless Hub. Start your next creative project — video editing, content creation, branding, and more.',
  openGraph: {
    title: 'Contact — Frameless Hub',
    description:
      'Get in touch with Frameless Hub. Start your next creative project — video editing, content creation, branding, and more.',
  },
};

export default function ContactPage() {
  return <ContactPageContent />;
}
