import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { OUR_CLIENTS } from '@/data/clients';

export default function WorkingWith() {
  return (
    <section className="py-24 sm:py-32 bg-[#080808] text-[#F4F4F5] border-t border-white/[0.08]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 sm:mb-20">
          <div>
            <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A1A1AA] mb-3">
              04 — Partners
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
              Our Clients
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-md font-normal leading-relaxed">
            Leading brands, high-growth media platforms, and specialized ventures built with purpose.
          </p>
        </div>

        {/* Clients Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {OUR_CLIENTS.map((client) => (
            <div
              key={client.id}
              className="p-8 sm:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-[#00F0FF]/30 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-4 pb-5 border-b border-white/[0.08] mb-5">
                  <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider font-semibold">
                    {client.category}
                  </span>
                  <Link
                    href={`/work/${client.id}`}
                    className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#A1A1AA] hover:text-white hover:border-[#00F0FF] transition-all"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Client Name */}
                <Link
                  href={`/work/${client.id}`}
                  className="group inline-block"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#00F0FF] transition-colors mb-3">
                    {client.name}
                  </h3>
                </Link>

                {/* Description */}
                <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-6 font-normal">
                  {client.description}
                </p>
              </div>

              {/* Services List */}
              <div className="pt-6 border-t border-white/[0.08]">
                <div className="text-[11px] font-mono text-[#71717A] uppercase tracking-wider mb-2">
                  Services
                </div>
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#E4E4E7] font-mono">
                  {client.services.map((service, index) => (
                    <React.Fragment key={service}>
                      <span className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
                        {service}
                      </span>
                      {index < client.services.length - 1 && (
                        <span className="text-[#71717A] px-0.5">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
