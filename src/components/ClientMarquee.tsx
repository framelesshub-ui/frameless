'use client';

import { motion } from 'framer-motion';

const BRANDS = [
  "Birla's Parvai",
  "Supratha Wellness",
  "Arcot Nawabs Briyani",
  "Seyon Labs",
  "Dindigul Srinivasan Ex MLA",
  "Poetry & Grammar",
  "Sweepers Studio",
];

export default function ClientMarquee() {
  // We duplicate the array 3 times to achieve an infinite seamless continuous marquee
  const marqueeList = [...BRANDS, ...BRANDS, ...BRANDS];

  return (
    <div className="relative w-full overflow-hidden py-4 select-none">
      {/* Gradient masks on left & right for seamless fading */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div className="animate-marquee flex items-center gap-12 sm:gap-20">
        {marqueeList.map((brand, i) => (
          <div
            key={`${brand}-${i}`}
            className="flex items-center gap-12 sm:gap-20 flex-shrink-0"
          >
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white/20 hover:text-white/70 transition-colors duration-300 cursor-default whitespace-nowrap">
              {brand}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent/30 flex-shrink-0" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  );
}
