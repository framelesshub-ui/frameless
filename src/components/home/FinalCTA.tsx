'use client';

import { ArrowUpRight, Mail, Phone } from 'lucide-react';
import { InstagramIcon } from '@/components/icons/SocialIcons';

export default function FinalCTA() {
  return (
    <section id="contact" className="py-24 sm:py-36 bg-[var(--color-bg)] text-[var(--color-text)] border-t border-[var(--color-border)] scroll-reveal">
      <div className="editorial-container">
        <div className="max-w-4xl">
          {/* Section Heading */}
          <h2 className="section-h2 text-[var(--color-text)] font-heading mb-8">
            Have something worth creating?
          </h2>

          <p className="body-lead text-base sm:text-lg text-[var(--color-muted)] max-w-2xl leading-relaxed mb-12">
            Let’s talk about your next brand milestone, video campaign, or complete digital transformation.
          </p>

          {/* Action Buttons: Blue Glass "Email us" & Glass "WhatsApp" */}
          <div className="flex flex-wrap items-center gap-4 mb-20">
            <a
              href="mailto:framelesshub@gmail.com"
              className="glass-btn-blue text-sm font-semibold py-3.5 px-8"
            >
              <Mail className="w-4 h-4 mr-2 inline-block" />
              <span>Email us</span>
            </a>

            <a
              href="https://wa.me/918248628371"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-btn-light text-sm font-semibold py-3.5 px-8"
            >
              <Phone className="w-4 h-4 mr-2 inline-block text-[#0047ff]" />
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 inline-block opacity-60" />
            </a>
          </div>

          {/* 3-Column Row separated by a hairline above */}
          <div className="pt-12 border-t border-[var(--color-border)] grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Col 1: Email */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-muted)] mb-2">
                Email
              </div>
              <a
                href="mailto:framelesshub@gmail.com"
                className="text-base sm:text-lg font-medium text-[var(--color-text)] hover:text-[#0047ff] transition-colors"
              >
                framelesshub@gmail.com
              </a>
            </div>

            {/* Col 2: Phone and WhatsApp */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-muted)] mb-2">
                Phone &amp; WhatsApp
              </div>
              <a
                href="https://wa.me/918248628371"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-medium text-[var(--color-text)] hover:text-[#0047ff] transition-colors inline-flex items-center gap-1.5"
              >
                <span>+91 82486 28371</span>
                <ArrowUpRight className="w-4 h-4 text-[#0047ff]" />
              </a>
            </div>

            {/* Col 3: Instagram & Location */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--color-muted)] mb-2">
                Instagram
              </div>
              <a
                href="https://instagram.com/framelesshub"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base sm:text-lg font-medium text-[var(--color-text)] hover:text-[#0047ff] transition-colors inline-flex items-center gap-1.5 mb-1"
              >
                <span>@framelesshub</span>
                <ArrowUpRight className="w-4 h-4 text-[#0047ff]" />
              </a>
              <div className="text-xs text-[var(--color-muted)] font-mono">
                Chennai, Tamil Nadu, India
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
