export interface SiteStat {
  id: string;
  value: any;
  numericValue?: number;
  suffix: string;
  displayValue: string;
  label: string;
  description?: string;
  isNumeric: boolean;
}

/**
 * Approved, verified company statistics for Frameless Hub.
 * Crawlers, screen readers, and no-JS visitors always see these exact figures.
 */
export const siteStats: SiteStat[] = [
  {
    id: 'projects',
    value: 399,
    numericValue: 399,
    suffix: '+',
    displayValue: '399+',
    label: 'Projects Delivered',
    description: 'Across commercial films, brand identities, and digital channels',
    isNumeric: true,
  },
  {
    id: 'views',
    value: 10,
    numericValue: 10,
    suffix: 'M+',
    displayValue: '10M+',
    label: 'Views Generated',
    description: 'Verified organic attention captured across channels',
    isNumeric: true,
  },
  {
    id: 'inception',
    value: 'EST. 2026',
    numericValue: 2026,
    suffix: '',
    displayValue: 'EST. 2026',
    label: 'Chennai, India',
    description: 'Independent creative studio built to endure',
    isNumeric: false,
  },
];

export const HERO_STATS = siteStats;
export const ABOUT_HIGHLIGHTS = siteStats;
