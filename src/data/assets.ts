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
];
