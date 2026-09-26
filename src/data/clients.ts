export interface ClientLogo {
  id: string;
  name: string;
  category: string;
  symbol: string;
  svgMark?: string;
}

/**
 * Verified Client Marks
 * Strictly verified partners from actual studio campaigns.
 * Displayed in monochrome grayscale with reduced opacity,
 * illuminating on hover.
 */
export const CLIENTS: ClientLogo[] = [
  {
    id: "mahindra",
    name: "MAHINDRA",
    category: "Automotive & Commercial",
    symbol: "M",
  },
  {
    id: "birlas-parvai",
    name: "BIRLAS PARVAI",
    category: "Media & Journalism",
    symbol: "BP",
  },
  {
    id: "supratha-wellness",
    name: "SUPRATHA WELLNESS",
    category: "Healthcare & Clinical",
    symbol: "SW",
  },
  {
    id: "ora-kitchen",
    name: "ORA KITCHEN",
    category: "Culinary & Dining",
    symbol: "OK",
  },
  {
    id: "aura-home",
    name: "AURA HOME",
    category: "Architectural Interiors",
    symbol: "AH",
  },
  {
    id: "krithi-makeover",
    name: "KRITHI MAKEOVER ARTISTRY",
    category: "Luxury Bridal & Beauty",
    symbol: "KM",
  },
  {
    id: "frameless-media",
    name: "FRAMELESS MEDIA",
    category: "Original Studio IP",
    symbol: "FM",
  }
];
