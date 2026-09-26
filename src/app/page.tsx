import Hero from '@/components/home/Hero';
import EditorialStatement from '@/components/home/EditorialStatement';
import EditorialMarquee from '@/components/home/EditorialMarquee';
import SelectedWork from '@/components/home/SelectedWork';
import CinematicMoment from '@/components/home/CinematicMoment';
import ServicesEditorial from '@/components/home/ServicesEditorial';
import WorkingWith from '@/components/home/WorkingWith';
import FounderSection from '@/components/home/FounderSection';
import FinalCTA from '@/components/home/FinalCTA';

export default function Home() {
  return (
    <div className="bg-[#080808] text-[#F4F4F5] min-h-screen">
      {/* 01 — Hero (Line mask reveal + scroll-expanding video showcase + live counters) */}
      <Hero />

      {/* 02 — Continuous Slow Editorial Marquee */}
      <EditorialMarquee />

      {/* 03 — Editorial Philosophy (Scroll-driven word lighting reveal) */}
      <EditorialStatement />

      {/* 04 — Selected Works (Asymmetric editorial cadence + clipPath reveals) */}
      <SelectedWork />

      {/* 05 — Fullscreen Cinematic Moment (84vw to 100vw Scroll Scrub) */}
      <CinematicMoment />

      {/* 06 — What We Build (Hover text shift + interactive arrows) */}
      <ServicesEditorial />

      {/* 07 — Client Partners (Verified 7 clients) */}
      <WorkingWith />

      {/* 08 — Founder Vision (Rithik B directive) */}
      <FounderSection />

      {/* 09 — Final CTA (Magnetic button interaction + studio contact) */}
      <FinalCTA />
    </div>
  );
}
