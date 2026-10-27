import Hero from '@/components/home/Hero';
import EditorialStatement from '@/components/home/EditorialStatement';
import FeaturedWorkShowcase from '@/components/home/FeaturedWorkShowcase';
import CreativeProcess from '@/components/home/CreativeProcess';
import DisciplinesCapabilities from '@/components/home/DisciplinesCapabilities';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <div className="relative bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen">
      {/* 01 — Hero: "Made to stand apart." Studio Reel & Monumental Entrance */}
      <Hero />

      {/* 02 — The Philosophy: Scroll-illuminated brand thesis with preserved DOM whitespace */}
      <EditorialStatement />

      {/* 03 — Featured Work Showcase: Interactive client accordion & case study spotlight */}
      <FeaturedWorkShowcase />

      {/* 04 — The Creative Process: 5-step interactive process switcher (Idea -> Storyboard -> Shoot -> Craft -> Launch) */}
      <CreativeProcess />

      {/* 05 — Disciplines & Capabilities: Core services, client partners, and studio ethos */}
      <DisciplinesCapabilities />

      {/* 06 — Get in Touch: Frictionless project inquiry and direct channels */}
      <FinalCTA />
    </div>
  );
}
