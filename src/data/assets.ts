export interface AssetRecord {
  id: string;
  name: string;
  type: 'image' | 'video' | 'audio' | 'model';
  path: string;
  section: string;
  purpose: string;
  source: 'genuine' | 'generated';
  dimensions?: string;
}

export const ASSETS: AssetRecord[] = [
  {
    id: 'frameless-official-logo',
    name: 'Frameless Hub Official Logo',
    type: 'image',
    path: '/logo.png',
    section: 'global-branding',
    purpose: 'Primary brand identity and studio hallmark',
    source: 'genuine',
    dimensions: '1024x1024',
  },
  {
    id: 'frameless-media-logo',
    name: 'Frameless Media Official Client Logo',
    type: 'image',
    path: '/media/clients/frameless-media.png',
    section: 'client-roster',
    purpose: 'Original golden clapperboard mark and typography on crimson velvet for cinema and entertainment platform',
    source: 'genuine',
    dimensions: '1024x1024',
  },
];
