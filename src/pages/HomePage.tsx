import React from 'react';
import Hero from '../components/home/Hero';
import EditorialStatement from '../components/home/EditorialStatement';
import FeaturedWorkShowcase from '../components/home/FeaturedWorkShowcase';
import CreativeProcess from '../components/home/CreativeProcess';
import DisciplinesCapabilities from '../components/home/DisciplinesCapabilities';
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

      {/* 03 — Featured Work Showcase */}
      <FeaturedWorkShowcase />

      {/* 04 — The Creative Process */}
      <CreativeProcess />

      {/* 05 — Disciplines & Capabilities */}
      <DisciplinesCapabilities />

      {/* 06 — Get in Touch */}
      <FinalCTA />
    </div>
  );
};

export default HomePage;
