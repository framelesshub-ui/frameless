'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { OUR_CLIENTS } from '@/data/clients';

export default function WorkingWith() {
  return (
    <section className="py-24 sm:py-36 bg-[#080808] text-[#F4F4F5] border-t border-white/[0.08]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-24">
          <div>
            <div className="flex items-center gap-2.5 text-[11px] font-mono tracking-[0.25em] uppercase text-[#00F0FF] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF]" />
              <span>05 / Client Partners</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Selected Partners
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#A1A1AA] max-w-md font-normal leading-relaxed">
            Leading media networks, high-growth food ventures, and specialized brands built with intent.
          </p>
        </div>

        {/* Clients Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {OUR_CLIENTS.map((client) => (
            <div
              key={client.id}
              className="p-8 sm:p-10 rounded-2xl bg-[#0F0F10] border border-white/[0.08] hover:border-[#00F0FF]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Category & Badge */}
                <div className="flex items-center justify-between gap-4 pb-5 border-b border-white/[0.08] mb-6">
                  <span className="text-xs font-mono text-[#00F0FF] uppercase tracking-wider font-semibold">
                    {client.category}
                  </span>
                  <Link
                    href={`/work/${client.id}`}
                    data-cursor="VIEW"
                    className="w-8 h-8 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-[#A1A1AA] group-hover:text-[#00F0FF] group-hover:border-[#00F0FF]/50 transition-all"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                {/* Client Name */}
                <Link
                  href={`/work/${client.id}`}
                  data-cursor="VIEW"
                  className="inline-block"
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
                <div className="text-[10px] font-mono text-[#71717A] uppercase tracking-wider mb-2.5">
                  Scope of Engagement
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
