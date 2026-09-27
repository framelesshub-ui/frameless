import React from 'react';
import Hero from '../components/home/Hero';
import EditorialMarquee from '../components/home/EditorialMarquee';
import SelectedWork from '../components/home/SelectedWork';
import EditorialStatement from '../components/home/EditorialStatement';
import Showreel from '../components/home/Showreel';
import WhatWeDo from '../components/home/WhatWeDo';
import WorkingWith from '../components/home/WorkingWith';
import AboutPreview from '../components/home/AboutPreview';
import FinalCTA from '../components/home/FinalCTA';

interface HomePageProps {
  onNavigate?: (route: string) => void;
}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="relative w-full bg-[#080808] text-[#F4F4F5]">
      {/* 01 — Signature Hero */}
      <Hero />

      {/* 02 — Editorial Marquee */}
      <EditorialMarquee />

      {/* 03 — Selected Work */}
      <SelectedWork />

      {/* 04 — Editorial Manifesto */}
      <EditorialStatement />

      {/* 05 — Showreel */}
      <Showreel />

      {/* 06 — Disciplines */}
      <WhatWeDo />

      {/* 07 — Partners */}
      <WorkingWith />

      {/* 08 — Studio Ethos */}
      <AboutPreview />

      {/* 09 — Final CTA */}
      <FinalCTA />
    </div>
  );
};

export default HomePage;
