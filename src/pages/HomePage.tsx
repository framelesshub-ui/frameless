import React from 'react';
import Hero from '../components/home/Hero';
import EditorialMarquee from '../components/home/EditorialMarquee';
import DaVinciWorkspace from '../components/home/DaVinciWorkspace';
import CreativeFlowPipeline from '../components/home/CreativeFlowPipeline';
import SelectedWork from '../components/home/SelectedWork';
import EditorialStatement from '../components/home/EditorialStatement';
import WhatWeDo from '../components/home/WhatWeDo';
import WorkingWith from '../components/home/WorkingWith';
import AboutPreview from '../components/home/AboutPreview';
import FinalCTA from '../components/home/FinalCTA';

interface HomePageProps {
  onNavigate?: (route: string) => void;
}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="relative w-full bg-transparent text-[#F4F4F5]">
      {/* 01 — INTRO (0–15%): "Made to stand apart." */}
      <Hero />

      {/* 02 — Editorial Marquee */}
      <EditorialMarquee />

      {/* 03 — DAVINCI RESOLVE–INSPIRED EDIT SUITE (15–55%) */}
      <DaVinciWorkspace />

      {/* 04 — GOOGLE FLOW–INSPIRED CREATIVE PIPELINE (55–70%) */}
      <CreativeFlowPipeline />

      {/* 05 — PORTFOLIO SEQUENCE (70–90%) */}
      <SelectedWork />

      {/* 06 — Editorial Manifesto */}
      <EditorialStatement />

      {/* 07 — Disciplines & Capabilities */}
      <WhatWeDo />

      {/* 08 — Client Partners */}
      <WorkingWith />

      {/* 09 — Studio Ethos */}
      <AboutPreview />

      {/* 10 — FINAL SCENE (90–100%) */}
      <FinalCTA />
    </div>
  );
};

export default HomePage;
