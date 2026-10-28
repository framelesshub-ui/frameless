export interface ClientItem {
  id: string;
  name: string;
  category: string;
  description: string;
  services: string[];
  logo?: string;
  youtubeUrl?: string;
  instagramUrl?: string;
}

export interface ClientGroup {
  category: string;
  clients: {
    name: string;
    focus: string;
    description?: string;
    services?: string[];
    youtubeUrl?: string;
    instagramUrl?: string;
  }[];
}

export const OUR_CLIENTS: ClientItem[] = [
  {
    id: 'birlas-parvai',
    name: 'Birlas Parvai',
    category: 'Automotive Media & YouTube',
    description: 'Tamil Nadu’s leading automotive content platform covering cars, bikes, reviews and automotive stories.',
    services: ['YouTube Editing', 'Shorts & Reels', 'Social Media Management'],
    logo: '/media/clients/birlas-parvai.png',
    youtubeUrl: 'https://www.youtube.com/@birlasparvai',
  },
  {
    id: 'supratha-wellness',
    name: 'Supratha Wellness',
    category: 'Medical & Wellness Media',
    description: 'A health-focused content platform covering Ayurveda, Allopathy, Homeopathy, Acupuncture and wellness.',
    services: ['YouTube Video Editing'],
    logo: '/media/clients/supratha-wellness.png',
    youtubeUrl: 'https://www.youtube.com/@SuprathaWellness',
  },
  {
    id: 'frameless-media',
    name: 'Frameless Media',
    category: 'Cinema & Entertainment Media',
    description: 'A cinema-focused content platform featuring interviews, public interactions and entertainment content.',
    services: ['Content Production', 'Video Editing', 'Social Media Management'],
    logo: '/logo.png',
    instagramUrl: 'https://www.instagram.com/frameless._/',
    youtubeUrl: 'https://www.youtube.com/@Framelessmediatamil',
  },
  {
    id: 'krithi-makeup-artist',
    name: 'Krithi Makeover Artistry',
    category: 'Luxury Makeup & Personal Brand',
    description: 'A premium makeup artist brand focused on luxury beauty, professional portfolios and personal branding.',
    services: ['Personal Branding', 'Content Creation', 'Social Media Management'],
    logo: '/media/clients/krithi-artistry.svg',
  },
  {
    id: 'ora-kitchen',
    name: 'ORA Kitchen',
    category: 'Catering & Food Brand',
    description: 'A professional catering brand serving corporate events, weddings, parties and special occasions.',
    services: ['Branding', 'Social Media Marketing', 'Content Creation', 'Social Media Management'],
    logo: '/media/clients/ora-kitchen.png',
    instagramUrl: 'https://www.instagram.com/orakitchen.official/',
  },
  {
    id: 'aura-homes',
    name: 'Aura Home',
    category: 'Home & Lifestyle Brand',
    description: 'A home-focused brand offering essentials and products designed to elevate modern living spaces.',
    services: ['Social Media Marketing', 'Content Creation', 'Social Media Management'],
    logo: '/media/clients/aura-home.svg',
  },
  {
    id: 'seyon-lab',
    name: 'Seyon Lab',
    category: 'CRM & Technology',
    description: 'A CRM-focused technology company building solutions for modern business operations and customer management.',
    services: ['Social Media Support', 'Creative Consultation'],
  },
];

export const CLIENT_GROUPS: ClientGroup[] = [
  {
    category: 'MEDIA & ENTERTAINMENT',
    clients: OUR_CLIENTS.slice(0, 3).map((c) => ({
      name: c.name,
      focus: c.category,
      description: c.description,
      services: c.services,
    })),
  },
  {
    category: 'BRANDS & ENTERPRISE',
    clients: OUR_CLIENTS.slice(3).map((c) => ({
      name: c.name,
      focus: c.category,
      description: c.description,
      services: c.services,
    })),
  },
];

export const CLIENTS = OUR_CLIENTS.map((c) => ({
  id: c.id,
  name: c.name,
  category: c.category,
  tagline: c.description,
  logo: c.logo || '/logo.png',
  symbol: c.name.slice(0, 2).toUpperCase(),
}));
