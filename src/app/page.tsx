import Hero from '@/components/Hero';
import FeaturedVideo from '@/components/FeaturedVideo';
import BrandingSection from '@/components/BrandingSection';
import TrustSection from '@/components/TrustSection';
import ServicesSection from '@/components/ServicesSection';
import WorkGrid from '@/components/WorkGrid';
import YouTubePerformance from '@/components/YouTubePerformance';
import AboutSection from '@/components/AboutSection';
import ProcessSection from '@/components/ProcessSection';
import CTASection from '@/components/CTASection';
import ContactForm from '@/components/ContactForm';

export default function Home() {
  return (
    <div className="bg-[#04060A] text-[#F5F7FA] min-h-screen selection:bg-[#00F0FF]/25 selection:text-white">
      {/* 1. Split-Screen Hero & Layered Floating Portfolio */}
      <Hero />

      {/* 2. Trusted By Ambitious Brands */}
      <TrustSection />

      {/* 3. Central Featured Video (Mahindra Parvai Campaign) */}
      <FeaturedVideo />

      {/* 4. Branding & Design Section (Ora Kitchen, Aura Home, Krithi Makeover Artistry) */}
      <BrandingSection />

      {/* 5. Services Section (9 glass service cards) */}
      <ServicesSection />

      {/* 6. Selected Work (Editorial Grid) */}
      <WorkGrid limit={6} />

      {/* 7. YouTube / Performance Section (10M+ Views, Birlas Parvai, Supratha, Frameless Media) */}
      <YouTubePerformance />

      {/* 8. About Section (Independent by design. Built for ambitious brands.) */}
      <AboutSection />

      {/* 9. 5-Step Process Section (Discover -> Strategize -> Create -> Launch -> Optimize) */}
      <ProcessSection />

      {/* 10. Start a Project Cinematic CTA */}
      <CTASection />

      {/* 11. Contact & Scoping Enquiry Form */}
      <section id="contact-form" className="relative py-20 sm:py-28 overflow-hidden bg-[#04060A] border-t border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-[#00F0FF] uppercase tracking-widest mb-3">
              <span>PROJECT INTAKE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3">
              Start a Conversation
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8]">
              Tell us about your brand vision, campaign goals, or YouTube channel ambitions.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}
