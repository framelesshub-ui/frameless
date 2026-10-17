import Hero from '@/components/home/Hero';
import EditorialStatement from '@/components/home/EditorialStatement';
import DaVinciWorkspace from '@/components/home/DaVinciWorkspace';
import CreativeFlowPipeline from '@/components/home/CreativeFlowPipeline';
import WhatWeDo from '@/components/home/WhatWeDo';
import SelectedWork from '@/components/home/SelectedWork';
import WorkingWith from '@/components/home/WorkingWith';
import AboutPreview from '@/components/home/AboutPreview';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <div className="relative bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen">
      {/* 01 — Hero: "Made to stand apart." with studio reel & live telemetry */}
      <Hero />

      {/* 02 — The Philosophy: Scroll-illuminated brand thesis */}
      <EditorialStatement />

      {/* 03 — The Edit Suite: DaVinci Resolve-inspired interactive NLE workspace */}
      <DaVinciWorkspace />

      {/* 04 — The Creative Flow Pipeline: Idea → Storyboard → Shoot → Edit → Deliver */}
      <CreativeFlowPipeline />

      {/* 05 — Disciplines: "What we do." 4 hairline capability columns */}
      <WhatWeDo />

      {/* 06 — Selected Portfolio: Verified client productions */}
      <SelectedWork />

      {/* 07 — Client Partners: "Working with." YouTube & Branding directory */}
      <WorkingWith />

      {/* 08 — Studio Ethos: "Small team. Big ideas." leadership statement */}
      <AboutPreview />

      {/* 09 — Get in Touch: Direct contact and scoping */}
      <FinalCTA />
    </div>
  );
}
