import React from 'react';
import Hero from '../components/home/Hero';
import SelectedWork from '../components/home/SelectedWork';
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
      <Hero />
      <SelectedWork />
      <WhatWeDo />
      <WorkingWith />
      <AboutPreview />
      <FinalCTA />
    </div>
  );
};

export default HomePage;
