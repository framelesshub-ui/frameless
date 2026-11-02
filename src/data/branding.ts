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
  instagramUrl?: string;
}

export const BRANDING_PROJECTS: BrandingProject[] = [
  {
    id: "ora-kitchen",
    slug: "ora-kitchen-branding",
    brandName: "ORA Kitchen",
    tagline: "Artisanal Culinary Craft & Gastronomy",
    category: "Culinary & Restaurant Identity",
    visualDirection: "Premium food / restaurant / kitchen branding",
    projectImage: "/media/clients/ora-kitchen.png",
    instagramUrl: "https://www.instagram.com/orakitchen.official/",
    colorPalette: ["#1A1612", "#C4A482", "#E8D8C8", "#2E3A23"],
    deliverables: [
      "Custom Wordmark & Monogram",
      "Tactile Menu Design & Foil Embossing",
      "Sustainable Packaging Suite",
      "Spatial Signage & Uniform Guidelines"
    ],
    year: "2026",
    narrative: "Created an earthy, tactile brand language that bridges modern fine dining with ancestral culinary honesty, using textured paper stocks, warm timber accents, and minimal typography."
  }
];
