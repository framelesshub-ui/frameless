import React from 'react';
import Hero from '../components/home/Hero';
import EditorialMarquee from '../components/home/EditorialMarquee';
import EditorialStatement from '../components/home/EditorialStatement';
import SelectedWork from '../components/home/SelectedWork';
import CinematicMoment from '../components/home/CinematicMoment';
import ServicesEditorial from '../components/home/ServicesEditorial';
import WorkingWith from '../components/home/WorkingWith';
import FounderSection from '../components/home/FounderSection';
import FinalCTA from '../components/home/FinalCTA';

interface HomePageProps {
  onNavigate?: (route: string) => void;
}

export const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="relative w-full bg-[#080808] text-[#F4F4F5]">
      {/* 01 — Hero */}
      <Hero />

      {/* 02 — Editorial Marquee */}
      <EditorialMarquee />

      {/* 03 — Editorial Philosophy */}
      <EditorialStatement />

      {/* 04 — Selected Works */}
      <SelectedWork />

      {/* 05 — Cinematic Moment */}
      <CinematicMoment />

      {/* 06 — Services */}
      <ServicesEditorial />

      {/* 07 — Working With */}
      <WorkingWith />

      {/* 08 — Founder Section */}
      <FounderSection />

      {/* 09 — Final CTA */}
      <FinalCTA />
    </div>
  );
};

export default HomePage;
