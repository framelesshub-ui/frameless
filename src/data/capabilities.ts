export interface Capability {
  number: string;
  id: string;
  title: string;
  description: string;
  services: string[];
}

export const CAPABILITIES: Capability[] = [
  {
    number: '01',
    id: 'strategy',
    title: 'STRATEGY',
    description: 'We clarify your message and plan campaigns that connect with the right audience.',
    services: ['Brand Planning', 'Campaign Planning', 'Content Planning'],
  },
  {
    number: '02',
    id: 'branding',
    title: 'BRANDING',
    description: 'Distinctive visual identities, logos, and guidelines crafted to endure.',
    services: ['Logo & Brand Identity', 'Visual Design', 'Creative Direction'],
  },
  {
    number: '03',
    id: 'content',
    title: 'CONTENT',
    description: 'Cinematic films, photography, and high-retention video engineered for digital platforms.',
    services: ['Photography', 'Video Production', 'Video Editing', 'Original Content'],
  },
  {
    number: '04',
    id: 'growth',
    title: 'GROWTH',
    description: 'Data-driven paid ads, social distribution, and ongoing campaign optimization.',
    services: ['Social Media Marketing', 'Paid Ads', 'Campaign Improvement'],
  },
];
