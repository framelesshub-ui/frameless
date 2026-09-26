export interface BrandingProject {
  id: string;
  slug: string;
  brandName: string;
  tagline: string;
  category: string;
  visualDirection: string;
  projectImage: string;
  videoPreview?: string;
  colorPalette: string[];
  deliverables: string[];
  year: string;
  narrative: string;
}

/**
 * Featured Branding & Design Projects
 * Media paths are centralized here for easy updates.
 */
export const BRANDING_PROJECTS: BrandingProject[] = [
  {
    id: "ora-kitchen",
    slug: "ora-kitchen-branding",
    brandName: "Ora Kitchen",
    tagline: "Artisanal Culinary Craft & Gastronomy",
    category: "Culinary & Restaurant Identity",
    visualDirection: "Premium food / restaurant / kitchen branding",
    projectImage: "/services/branding-design.png",
    videoPreview: "/videos/video-2.mov",
    colorPalette: ["#1A1612", "#C4A482", "#E8D8C8", "#2E3A23"],
    deliverables: [
      "Custom Wordmark & Monogram",
      "Tactile Menu Design & Foil Embossing",
      "Sustainable Packaging Suite",
      "Spatial Signage & Uniform Guidelines"
    ],
    year: "2026",
    narrative: "Created an earthy, tactile brand language that bridges modern fine dining with ancestral culinary honesty, using textured Japanese paper stocks, warm timber accents, and minimal typography."
  },
  {
    id: "aura-home",
    slug: "aura-home-lifestyle",
    brandName: "Aura Home",
    tagline: "Architectural Living & Spatial Serenity",
    category: "Interior & Lifestyle Architecture",
    visualDirection: "Premium interior / home / lifestyle branding",
    projectImage: "/media/generated/studio-interior-editorial.jpg",
    videoPreview: "/videos/video-3.mov",
    colorPalette: ["#0C0E12", "#8C92A4", "#E2E8F0", "#00F0FF"],
    deliverables: [
      "Architectural Brand Identity",
      "Lookbook & Editorial Editorial Catalog",
      "Digital Showroom Interface",
      "Exhibition & Spatial Wayfinding"
    ],
    year: "2026",
    narrative: "Engineered a calm, architectural identity system characterized by generous negative space, refined serif titles, structured grid systems, and cool charcoal tones."
  },
  {
    id: "krithi-makeover-artistry",
    slug: "krithi-makeover-artistry",
    brandName: "Krithi Makeover Artistry",
    tagline: "Opulent Bridal Couture & Editorial Makeup",
    category: "Luxury Bridal & Beauty Identity",
    visualDirection: "Premium bridal / makeup / beauty branding",
    projectImage: "/media/generated/content-production-studio.jpg",
    videoPreview: "/videos/video-4.mov",
    colorPalette: ["#140E10", "#D4AF37", "#F7ECE1", "#9B2C2C"],
    deliverables: [
      "Luxury Monogram & Stamp Seal",
      "High-Fashion Bridal Lookbook",
      "Private Client Consultation Portal",
      "Bespoke Gold-Foil Packaging"
    ],
    year: "2026",
    narrative: "Infused regal heritage with contemporary high-fashion elegance, creating a coveted identity for South India's premier destination bridal artistry studio."
  }
];
