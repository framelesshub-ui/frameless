import Hero from '@/components/home/Hero';
import WhatWeDo from '@/components/home/WhatWeDo';
import SelectedWork from '@/components/home/SelectedWork';
import AboutPreview from '@/components/home/AboutPreview';
import FinalCTA from '@/components/home/FinalCTA';

// Kept in repository for future reference per requirements:
// import EditorialMarquee from '@/components/home/EditorialMarquee';
// import DaVinciWorkspace from '@/components/home/DaVinciWorkspace';
// import CreativeFlowPipeline from '@/components/home/CreativeFlowPipeline';
// import EditorialStatement from '@/components/home/EditorialStatement';
// import WorkingWith from '@/components/home/WorkingWith';

export default function Home() {
  return (
    <div className="relative bg-white text-black min-h-screen">
      {/* 01 — Hero: "Made to stand apart." with stats */}
      <Hero />

      {/* 02 — Services: "What we do." 4 hairline columns */}
      <WhatWeDo />

      {/* 03 — Projects: "Selected projects." 7 full-width rows */}
      <SelectedWork />

      {/* 04 — About: "Small team. Big ideas." black rounded block */}
      <AboutPreview />

      {/* 05 — Contact: "Have something worth creating?" */}
      <FinalCTA />
    </div>
  );
}
