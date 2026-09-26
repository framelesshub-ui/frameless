import Hero from '@/components/home/Hero';
import SelectedWork from '@/components/home/SelectedWork';
import WhatWeDo from '@/components/home/WhatWeDo';
import WorkingWith from '@/components/home/WorkingWith';
import AboutPreview from '@/components/home/AboutPreview';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <div className="bg-[#080808] text-[#F4F4F5] min-h-screen">
      {/* 01 — Hero */}
      <Hero />

      {/* 02 — Selected Work */}
      <SelectedWork />

      {/* 03 — What We Do */}
      <WhatWeDo />

      {/* 04 — Working With */}
      <WorkingWith />

      {/* 05 — About Preview */}
      <AboutPreview />

      {/* 06 — Final CTA */}
      <FinalCTA />
    </div>
  );
}
