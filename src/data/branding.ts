export interface BrandingProject {
  id: string;
  slug: string;
  brandName: string;
  tagline: string;
  category: string;
  visualDirection: string;
  projectImage?: string;
  videoPreview?: string;
  colorPalette: string[];
  deliverables: string[];
  year: string;
  narrative: string;
}

export const BRANDING_PROJECTS: BrandingProject[] = [
  {
    id: "ora-kitchen",
    slug: "ora-kitchen-branding",
    brandName: "Ora Kitchen",
    tagline: "Artisanal Culinary Craft & Gastronomy",
    category: "Culinary & Restaurant Identity",
    visualDirection: "Premium food / restaurant / kitchen branding",
    colorPalette: ["#1A1612", "#C4A482", "#E8D8C8", "#2E3A23"],
    deliverables: [
      "Custom Wordmark & Monogram",
      "Tactile Menu Design & Foil Embossing",
      "Sustainable Packaging Suite",
      "Spatial Signage & Uniform Guidelines"
    ],
    year: "2026",
    narrative: "Created an earthy, tactile brand language that bridges modern fine dining with ancestral culinary honesty, using textured paper stocks, warm timber accents, and minimal typography."
  },
  {
    id: "aura-home",
    slug: "aura-home-lifestyle",
    brandName: "Aura Home",
    tagline: "Architectural Living & Spatial Serenity",
    category: "Interior & Lifestyle Architecture",
    visualDirection: "Premium interior / home / lifestyle branding",
    colorPalette: ["#0C0E12", "#8C92A4", "#E2E8F0", "#00F0FF"],
    deliverables: [
      "Architectural Brand Identity",
      "Lookbook & Editorial Catalog",
      "Digital Showroom Interface",
      "Exhibition & Spatial Wayfinding"
    ],
    year: "2026",
    narrative: "Engineered a calm, architectural identity system characterized by generous negative space, refined serif titles, structured grid systems, and cool charcoal tones."
  },
  {
    id: "krithi-makeover-artistry",
    slug: "krithi-makeover-artistry-identity",
    brandName: "Krithi Makeover Artistry",
    tagline: "Haute Aesthetics & Editorial Distinction",
    category: "Luxury Beauty & Personal Branding",
    visualDirection: "Premium beauty / fashion / personal branding",
    colorPalette: ["#100E12", "#E5D0C5", "#A38B7D", "#00F0FF"],
    deliverables: [
      "Signature Monogram & Foil Typography",
      "Luxury Editorial Portfolio Design",
      "VIP Client Consultation Suite",
      "Certificate of Master Artistry"
    ],
    year: "2026",
    narrative: "Positioned the artist as a premier high-fashion bridal and editorial authority through champagne-foil accents, modern luxury typography, and refined monochrome palettes."
  }
];
