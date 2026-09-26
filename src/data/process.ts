export interface ProcessStep {
  step: string;
  name: string;
  headline: string;
  description: string;
  deliverables: string[];
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: "01",
    name: "Discover",
    headline: "Unearthing the Core Truth",
    description: "We deconstruct your market, competitors, target psychology, and core brand narrative to identify what truly differentiates your proposition.",
    deliverables: ["Market Immersion", "Audience Psycho-Demographics", "Opportunity Mapping", "Core Truth Definition"]
  },
  {
    step: "02",
    name: "Strategize",
    headline: "Architecting the Growth Blueprint",
    description: "We draft the strategic roadmap across narrative, aesthetics, channels, video pacing, and distribution architecture to guarantee high retention and conversion.",
    deliverables: ["Brand DNA & Positioning", "Channel & Content Roadmap", "Creative Hypotheses", "Visual Moodboards"]
  },
  {
    step: "03",
    name: "Create",
    headline: "Crafting Uncompromising Assets",
    description: "From cinema-grade film production and typography to 3D motion graphics and tactile packaging, we craft every pixel with obsessive precision.",
    deliverables: ["Commercial Shoots", "Bespoke Visual Identity", "Sound & Color Mastery", "Direct-Response Formats"]
  },
  {
    step: "04",
    name: "Launch",
    headline: "Deploying with Maximum Velocity",
    description: "We orchestrate coordinated rollouts across YouTube, Meta, web platforms, and digital PR to capture undivided audience attention.",
    deliverables: ["Omnichannel Deployment", "Algorithmic Upload Sequencing", "High-CTR Packaging", "Launch PR Support"]
  },
  {
    step: "05",
    name: "Optimize",
    headline: "Iterating for Compounding ROAS",
    description: "We rigorously analyze drop-off rates, watch-through metrics, and conversion signals to double down on winning hooks and scale results.",
    deliverables: ["Retention Audits", "Creative Variation Testing", "ROAS Attribution Scaling", "Continuous Iteration"]
  }
];
