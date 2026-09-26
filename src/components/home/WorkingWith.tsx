import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CLIENT_GROUPS } from '@/data/clients';

export default function WorkingWith() {
  return (
    <section className="py-20 sm:py-28 bg-[#080808] text-[#F4F4F5] border-t border-white/[0.08]">
      <div className="editorial-container">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="text-[11px] font-mono tracking-[0.2em] uppercase text-[#A1A1AA] mb-3">
            04 — Selected Clients
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Working with.
          </h2>
        </div>

        {/* 2-Column Minimal Layout: YouTube & Branding */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {CLIENT_GROUPS.map((group) => (
            <div key={group.category} className="space-y-6">
              <div className="text-xs font-mono tracking-[0.2em] uppercase text-[#A1A1AA] pb-3 border-b border-white/[0.08]">
                {group.category}
              </div>

              <div className="divide-y divide-white/[0.06]">
                {group.clients.map((client) => {
                  const content = (
                    <div className="py-4 flex items-center justify-between group">
                      <div>
                        <div className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#00F0FF] transition-colors">
                          {client.name}
                        </div>
                        <div className="text-xs text-[#A1A1AA] font-mono mt-0.5">
                          {client.focus}
                        </div>
                      </div>
                      {client.url && (
                        <ArrowUpRight className="w-4 h-4 text-[#A1A1AA] group-hover:text-[#00F0FF] transition-colors shrink-0" />
                      )}
                    </div>
                  );

                  return client.url ? (
                    <a
                      key={client.name}
                      href={client.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={client.name}>{content}</div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
