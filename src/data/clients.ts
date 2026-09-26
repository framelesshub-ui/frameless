export interface ClientGroup {
  category: string;
  clients: {
    name: string;
    focus: string;
    url?: string;
  }[];
}

export const CLIENT_GROUPS: ClientGroup[] = [
  {
    category: 'YOUTUBE',
    clients: [
      { name: 'Birlas Parvai', focus: 'Automotive & Investigative Journalism', url: 'https://www.youtube.com/@birlasparvai' },
      { name: 'Supratha Wellness', focus: 'Clinical Healthcare & Medicine', url: 'https://www.youtube.com/@SuprathaWellness' },
      { name: 'Frameless Media', focus: 'Cinema Interviews & Public Talk', url: 'https://www.youtube.com/@Framelessmediatamil' },
    ],
  },
  {
    category: 'BRANDING',
    clients: [
      { name: 'Ora Kitchen', focus: 'Artisanal Culinary Identity' },
      { name: 'Aura Home', focus: 'Architectural Living & Spaces' },
      { name: 'Krithi Makeover Artistry', focus: 'Luxury Bridal & Editorial Beauty' },
      { name: 'Seyon Lab', focus: 'Scientific & Analytical Systems' },
    ],
  },
];

export const CLIENTS = [
  ...CLIENT_GROUPS[0].clients.map((c) => ({
    id: c.name.toLowerCase().replace(/\s+/g, '-'),
    name: c.name,
    category: 'YouTube Channel',
    tagline: c.focus,
    logo: '/logo.png',
    symbol: c.name.slice(0, 2).toUpperCase(),
  })),
  ...CLIENT_GROUPS[1].clients.map((c) => ({
    id: c.name.toLowerCase().replace(/\s+/g, '-'),
    name: c.name,
    category: 'Brand Identity',
    tagline: c.focus,
    logo: '/logo.png',
    symbol: c.name.slice(0, 2).toUpperCase(),
  })),
];
