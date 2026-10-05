import React from 'react';
import Hero from '../components/home/Hero';
import EditorialMarquee from '../components/home/EditorialMarquee';
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
      {/* 01 — Architectural Hero */}
      <Hero />

      {/* 02 — Editorial Marquee */}
      <EditorialMarquee />

      {/* 03 — Selected Work */}
      <SelectedWork />

      {/* 04 — Editorial Manifesto */}
      <EditorialStatement />

      {/* 05 — Disciplines */}
      <WhatWeDo />

      {/* 06 — Partners */}
      <WorkingWith />

      {/* 07 — Studio Ethos */}
      <AboutPreview />

      {/* 08 — Final CTA */}
      <FinalCTA />
    </div>
  );
};

export default HomePage;
