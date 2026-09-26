export interface SiteStat {
  id: string;
  value: number;
  suffix: string;
  displayValue: string;
  label: string;
  description: string;
  isNumeric: boolean;
}

/**
 * Centralized, verified company-wide statistics for Frameless Hub.
 * Crawlers, search engines, and screen readers always read these exact verified figures.
 */
export const siteStats: SiteStat[] = [
  {
    id: "projects",
    value: 399,
    suffix: "+",
    displayValue: "399+",
    label: "Projects Delivered",
    description: "Across commercial cinema, brand identities, and digital channels",
    isNumeric: true,
  },
  {
    id: "views",
    value: 10,
    suffix: "M+",
    displayValue: "10M+",
    label: "Views Generated",
    description: "Verified organic attention captured across studio channels",
    isNumeric: true,
  },
  {
    id: "headquarters",
    value: 0,
    suffix: "",
    displayValue: "Chennai, India",
    label: "Studio Headquarters",
    description: "Independent creative studio serving global brand partners",
    isNumeric: false,
  },
  {
    id: "reach",
    value: 0,
    suffix: "",
    displayValue: "Global Clientele",
    label: "Audience Reach",
    description: "Serving ambitious market leaders and growing founders",
    isNumeric: false,
  },
  {
    id: "inception",
    value: 0,
    suffix: "",
    displayValue: "EST. 2026",
    label: "Studio Inception",
    description: "Built for modern high-retention storytelling and scale",
    isNumeric: false,
  },
];

// Compatibility exports
export const HERO_STATS = siteStats;

export const ABOUT_HIGHLIGHTS = siteStats.map((item) => ({
  id: item.id,
  label: item.label,
  value: item.displayValue,
  numericValue: item.value,
  suffix: item.suffix,
  isNumeric: item.isNumeric,
}));
