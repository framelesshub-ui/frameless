import React from 'react';
import Hero from '../components/home/Hero';
import WhatWeDo from '../components/home/WhatWeDo';
import SelectedWork from '../components/home/SelectedWork';
import AboutPreview from '../components/home/AboutPreview';
import FinalCTA from '../components/home/FinalCTA';

// Kept in repository for future reference per requirements:
// import EditorialMarquee from '../components/home/EditorialMarquee';
// import DaVinciWorkspace from '../components/home/DaVinciWorkspace';
// import CreativeFlowPipeline from '../components/home/CreativeFlowPipeline';
// import EditorialStatement from '../components/home/EditorialStatement';
// import WorkingWith from '../components/home/WorkingWith';

interface HomePageProps {
  onNavigate?: (route: string) => void;
}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="relative w-full bg-white text-black">
      {/* 01 — Hero: "Made to stand apart." */}
      <Hero />

      {/* 02 — Services: "What we do." */}
      <WhatWeDo />

      {/* 03 — Projects: "Selected projects." */}
      <SelectedWork />

      {/* 04 — About: "Small team. Big ideas." */}
      <AboutPreview />

      {/* 05 — Contact: "Have something worth creating?" */}
      <FinalCTA />
    </div>
  );
};

export default HomePage;
