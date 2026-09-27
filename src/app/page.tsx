import Hero from '@/components/home/Hero';
import EditorialMarquee from '@/components/home/EditorialMarquee';
import SelectedWork from '@/components/home/SelectedWork';
import EditorialStatement from '@/components/home/EditorialStatement';
import WhatWeDo from '@/components/home/WhatWeDo';
import WorkingWith from '@/components/home/WorkingWith';
import AboutPreview from '@/components/home/AboutPreview';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <div className="bg-[#080808] text-[#F4F4F5] min-h-screen">
      {/* 01 — Architectural Hero with Official Logo & Verified Stats */}
      <Hero />

      {/* 02 — Silky Smooth Continuous Editorial Marquee */}
      <EditorialMarquee />

      {/* 03 — Selected Work Exhibition (Typographic Luxury Cards) */}
      <SelectedWork />

      {/* 04 — Editorial Manifesto (Scroll-Driven Word Illumination) */}
      <EditorialStatement />

      {/* 05 — Disciplines & Capabilities Index (What We Do) */}
      <WhatWeDo />

      {/* 06 — Selected Client Partners Directory */}
      <WorkingWith />

      {/* 07 — Studio Ethos & Founder's Directive */}
      <AboutPreview />

      {/* 08 — Final Call to Action */}
      <FinalCTA />
    </div>
  );
}
