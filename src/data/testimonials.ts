export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  client: string;
  initials: string;
  deliverable: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'birlas-parvai',
    quote:
      'The video editing and visual presentation exceeded our expectations. They brought our brand film to life with cinematic excellence and remarkable sensitivity to our audience.',
    author: 'Marketing Director',
    role: 'Verified Client Partner',
    client: "Birla's Parvai",
    initials: 'BP',
    deliverable: 'Commercial Narrative Film & Color Grade',
  },
  {
    id: 'supratha-wellness',
    quote:
      'Their creative execution and video production are outstanding. The content completely transformed our brand messaging, patient trust, and digital user engagement across channels.',
    author: 'Head of Brand Communications',
    role: 'Verified Client Partner',
    client: 'Supratha Wellness',
    initials: 'SW',
    deliverable: 'Holistic Visual Identity & Kinetic Explainer',
  },
  {
    id: 'arcot-nawabs',
    quote:
      'Deliciously crafted visual content! They beautifully captured the essence, aromas, and heritage of our restaurant in high-converting video ads that drove immediate footfall.',
    author: 'Managing Partner',
    role: 'Verified Client Partner',
    client: 'Arcot Nawabs Briyani',
    initials: 'AN',
    deliverable: 'Culinary Cinematography & Ad Variations',
  },
];
