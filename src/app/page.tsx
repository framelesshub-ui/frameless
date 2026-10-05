import Hero from '@/components/home/Hero';
import EditorialMarquee from '@/components/home/EditorialMarquee';
import DaVinciWorkspace from '@/components/home/DaVinciWorkspace';
import CreativeFlowPipeline from '@/components/home/CreativeFlowPipeline';
import SelectedWork from '@/components/home/SelectedWork';
import EditorialStatement from '@/components/home/EditorialStatement';
import WhatWeDo from '@/components/home/WhatWeDo';
import WorkingWith from '@/components/home/WorkingWith';
import AboutPreview from '@/components/home/AboutPreview';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <div className="relative bg-transparent text-[#F4F4F5] min-h-screen">
      {/* 01 — INTRO (0–15%): "Made to stand apart." with official logo & proof */}
      <Hero />

      {/* 02 — Editorial Marquee Pacing */}
      <EditorialMarquee />

      {/* 03 — DAVINCI RESOLVE–INSPIRED EDIT SUITE (15–55%): Multi-Track Timeline & Monitor */}
      <DaVinciWorkspace />

      {/* 04 — GOOGLE FLOW–INSPIRED CREATIVE PIPELINE (55–70%): Idea → Storyboard → Shoot → Edit → Final */}
      <CreativeFlowPipeline />

      {/* 05 — PORTFOLIO SEQUENCE (70–90%): Timeline expanded into client portfolio showcase */}
      <SelectedWork />

      {/* 06 — Editorial Manifesto: Scroll word illumination */}
      <EditorialStatement />

      {/* 07 — Disciplines & Capabilities Index */}
      <WhatWeDo />

      {/* 08 — Selected Client Partners Directory */}
      <WorkingWith />

      {/* 09 — Studio Ethos & Leadership Direction */}
      <AboutPreview />

      {/* 10 — FINAL SCENE (90–100%): Minimal dark environment, logo watermark & direct scoping */}
      <FinalCTA />
    </div>
  );
}
