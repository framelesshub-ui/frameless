import React from 'react';
import Hero from '../components/home/Hero';
import EditorialStatement from '../components/home/EditorialStatement';
import DaVinciWorkspace from '../components/home/DaVinciWorkspace';
import CreativeFlowPipeline from '../components/home/CreativeFlowPipeline';
import WhatWeDo from '../components/home/WhatWeDo';
import SelectedWork from '../components/home/SelectedWork';
import WorkingWith from '../components/home/WorkingWith';
import AboutPreview from '../components/home/AboutPreview';
import FinalCTA from '../components/home/FinalCTA';

interface HomePageProps {
  onNavigate?: (route: string) => void;
}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="relative w-full bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* 01 — Hero: "Made to stand apart." */}
      <Hero />

      {/* 02 — The Philosophy */}
      <EditorialStatement />

      {/* 03 — The Edit Suite */}
      <DaVinciWorkspace />

      {/* 04 — The Creative Flow Pipeline */}
      <CreativeFlowPipeline />

      {/* 05 — Disciplines: "What we do." */}
      <WhatWeDo />

      {/* 06 — Projects: "Selected projects." */}
      <SelectedWork />

      {/* 07 — Client Partners: "Working with." */}
      <WorkingWith />

      {/* 08 — About: "Small team. Big ideas." */}
      <AboutPreview />

      {/* 09 — Contact: "Have something worth creating?" */}
      <FinalCTA />
    </div>
  );
};

export default HomePage;
