'use client';

import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Copy, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { useScopingModal } from '@/context/ScopingModalContext';
import AnimatedButton from '@/components/AnimatedButton';

const SERVICES = [
  {
    id: 'branding',
    title: 'Branding & Identity System',
    desc: 'Visual systems, typography, tactile packaging, and brand positioning.',
    tag: 'BRANDING',
  },
  {
    id: 'video-production',
    title: 'Commercial Film & Production',
    desc: 'Cinematic brand films, high-speed camera direction, and commercial post-production.',
    tag: 'CINEMA',
  },
  {
    id: 'youtube-growth',
    title: 'YouTube Growth & Retainer',
    desc: 'Episodic series editing, viral shorts, narrative hooks, and channel direction.',
    tag: 'YOUTUBE',
  },
  {
    id: 'social-media',
    title: 'Social Media Acceleration',
    desc: 'Content creation, vertical reel production, community growth, and digital acceleration.',
    tag: 'GROWTH',
  },
];

const DELIVERABLE_OPTIONS = [
  'Brand Identity System & Guidelines',
  'Commercial Hero Brand Film (4K DCI)',
  'Episodic YouTube Series Production',
  'High-Retention Shorts & Reels (30+ assets)',
  'Bespoke Filmic Color Grading & Titles',
  'Spatial Sound Design & Acoustic Mix',
  'Packaging & Tactile Print Collateral',
  'Monthly Creative Growth Retainer',
];

const TIMELINE_OPTIONS = [
  { id: 'rapid', label: 'Rapid Sprint', time: '< 2 Weeks' },
  { id: 'standard', label: 'Standard Production', time: '1 Month' },
  { id: 'retainer', label: 'Quarterly Retainer', time: '3+ Months' },
];

const BUDGET_OPTIONS = [
  'Under ₹2L (Seed / Indie)',
  '₹2L — ₹5L (Growth Brand)',
  '₹5L — ₹15L+ (Commercial Production)',
  'Flexible / Open to Proposal',
];

export default function ProjectScopingModal() {
  const { isOpen, closeScopingModal, preselectedDiscipline } = useScopingModal();

  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedService, setSelectedService] = useState<string>('branding');
  const [selectedDeliverables, setSelectedDeliverables] = useState<string[]>([]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>('standard');
  const [selectedBudget, setSelectedBudget] = useState<string>('₹2L — ₹5L (Growth Brand)');
  const [brandName, setBrandName] = useState<string>('');
  const [additionalNotes, setAdditionalNotes] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Sync preselected discipline
  useEffect(() => {
    if (preselectedDiscipline) {
      const match = SERVICES.find(
        (s) =>
          s.title.toLowerCase().includes(preselectedDiscipline.toLowerCase()) ||
          s.id === preselectedDiscipline.toLowerCase() ||
          s.tag.toLowerCase() === preselectedDiscipline.toLowerCase()
      );
      if (match) setSelectedService(match.id);
    }
  }, [preselectedDiscipline]);

  // Reset step on reopen
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setCopied(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const currentServiceObj = SERVICES.find((s) => s.id === selectedService) || SERVICES[0];
  const currentTimelineObj = TIMELINE_OPTIONS.find((t) => t.id === selectedTimeline) || TIMELINE_OPTIONS[1];

  const toggleDeliverable = (item: string) => {
    setSelectedDeliverables((prev) =>
      prev.includes(item) ? prev.filter((d) => d !== item) : [...prev, item]
    );
  };

  // Generate formatted plain text brief
  const generatedBrief = `*FRAMELESS HUB // PROJECT SCOPE BRIEF*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✦ CLIENT / BRAND: ${brandName.trim() || 'Undisclosed Brand'}
✦ REQUIRED SERVICE: ${currentServiceObj.title}
✦ PRODUCTION TIMELINE: ${currentTimelineObj.label} (${currentTimelineObj.time})
✦ TARGET SCALE: ${selectedBudget}

✦ SELECTED DELIVERABLES:
${selectedDeliverables.length > 0 ? selectedDeliverables.map((d) => `  • ${d}`).join('\n') : '  • Full Studio Scoping Required'}

${additionalNotes.trim() ? `✦ STRATEGIC CONTEXT & NOTES:\n  "${additionalNotes.trim()}"\n` : ''}━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generated via framelesshub.com Studio`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedBrief);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = `https://wa.me/918248628371?text=${encodeURIComponent(generatedBrief)}`;
  const emailUrl = `mailto:hello@framelesshub.com?subject=${encodeURIComponent(
    `Project Inquiry: ${brandName.trim() || 'New Brand'} — Frameless Hub`
  )}&body=${encodeURIComponent(generatedBrief)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto select-none">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={closeScopingModal}
        aria-hidden="true"
      />

      {/* Modal Surface */}
      <div
        className="relative z-10 w-full max-w-2xl bg-[#090a0f] border border-white/10 text-[#F4F4F5] rounded-3xl shadow-[0_0_80px_rgba(0,0,0,0.9)] overflow-hidden select-text animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-label="Project Scoping Wizard"
      >
        {/* Top Header Bar */}
        <div className="px-6 sm:px-8 py-5 bg-black/40 border-b border-white/[0.08] flex items-center justify-between select-none">
          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-[#0047ff]" />
            <div className="text-xs font-mono font-bold tracking-wider text-white uppercase">
              Start a Project — Step 0{step} of 03
            </div>
          </div>

          <button
            type="button"
            onClick={closeScopingModal}
            className="p-2 rounded-full bg-white/[0.05] hover:bg-white/[0.12] text-white/70 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Wizard"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="w-full h-1 bg-white/[0.06] overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#0047ff] to-[#38bdf8] transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto space-y-6">
          {/* STEP 1: Select Service */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-heading font-black text-white tracking-tight">
                  What discipline best describes your project?
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-1.5 leading-relaxed">
                  Choose the core service you need. You can refine deliverables and timeline in the next step.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {SERVICES.map((s) => {
                  const isSelected = selectedService === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setSelectedService(s.id)}
                      className={`text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-start justify-between gap-4 ${
                        isSelected
                          ? 'bg-[#0047ff]/15 border-[#0047ff] shadow-[0_0_30px_rgba(0,71,255,0.25)]'
                          : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/[0.08]'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2.5">
                          <span className="font-heading text-base font-bold text-white tracking-tight">
                            {s.title}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-white/80">
                            {s.tag}
                          </span>
                        </div>
                        <p className="text-xs text-[var(--color-muted)] leading-relaxed">
                          {s.desc}
                        </p>
                      </div>

                      <div
                        className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isSelected
                            ? 'bg-[#0047ff] border-[#0047ff] text-white'
                            : 'border-white/20'
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Deliverables, Timeline & Budget */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-heading font-black text-white tracking-tight">
                  Scope, timeline &amp; brand details
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-1.5 leading-relaxed">
                  Configure specific assets, target turnaround time, and anticipated scale.
                </p>
              </div>

              {/* Brand Name Input */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-white/70 block">
                  Brand or Company Name
                </label>
                <input
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="e.g. Acme Studio / Personal Brand"
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-[#0047ff] transition-colors"
                />
              </div>

              {/* Deliverables Checklist */}
              <div className="space-y-2.5">
                <label className="text-xs font-mono uppercase tracking-wider text-white/70 block">
                  Select Required Deliverables
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {DELIVERABLE_OPTIONS.map((item) => {
                    const isChecked = selectedDeliverables.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleDeliverable(item)}
                        className={`text-left px-3.5 py-2.5 rounded-xl border text-xs font-mono transition-colors flex items-center justify-between cursor-pointer ${
                          isChecked
                            ? 'bg-[#0047ff]/20 border-[#0047ff] text-white'
                            : 'bg-white/[0.02] border-white/[0.08] text-white/70 hover:bg-white/[0.05]'
                        }`}
                      >
                        <span className="truncate pr-2">{item}</span>
                        {isChecked ? (
                          <Check className="w-3.5 h-3.5 text-[#0047ff] flex-shrink-0" />
                        ) : (
                          <span className="w-3.5 h-3.5 rounded border border-white/20 flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Timeline Options */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-white/70 block">
                  Turnaround Timeline
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {TIMELINE_OPTIONS.map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setSelectedTimeline(t.id)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        selectedTimeline === t.id
                          ? 'bg-[#0047ff]/20 border-[#0047ff] text-white'
                          : 'bg-white/[0.02] border-white/[0.08] text-white/70 hover:bg-white/[0.05]'
                      }`}
                    >
                      <div className="text-xs font-bold font-mono text-white">{t.label}</div>
                      <div className="text-[10px] text-[var(--color-muted)] mt-0.5">{t.time}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Additional Context */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-white/70 block">
                  Strategic Context / Project Link (Optional)
                </label>
                <textarea
                  rows={2}
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  placeholder="Tell us about your audience, current hurdles, or reference inspirations..."
                  className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-white/30 text-xs focus:outline-none focus:border-[#0047ff] transition-colors resize-none"
                />
              </div>
            </div>
          )}

          {/* STEP 3: Review Brief & Instant Dispatch */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Brief Generated Successfully</span>
                </div>
                <h3 className="text-2xl font-heading font-black text-white tracking-tight">
                  Ready for direct studio review
                </h3>
                <p className="text-xs sm:text-sm text-[var(--color-muted)] mt-1.5 leading-relaxed">
                  Send your pre-formatted brief with 1-click via WhatsApp or Email. We reply directly within 24 hours.
                </p>
              </div>

              {/* Formatted Plaintext Brief Preview */}
              <div className="p-4 sm:p-5 rounded-2xl bg-black/60 border border-white/10 font-mono text-xs text-white/90 space-y-2 overflow-x-auto whitespace-pre-wrap leading-relaxed shadow-inner">
                {generatedBrief}
              </div>

              {/* Dispatch Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold flex items-center justify-center gap-2 text-sm transition-all shadow-[0_8px_24px_-4px_rgba(16,185,129,0.4)]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>

                <a
                  href={emailUrl}
                  className="p-4 rounded-2xl bg-[#0047ff] hover:bg-[#0038cc] text-white font-semibold flex items-center justify-center gap-2 text-sm transition-all shadow-[0_8px_24px_-4px_rgba(0,71,255,0.4)]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via Official Email</span>
                </a>
              </div>

              <div className="flex items-center justify-center pt-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="text-xs font-mono text-white/60 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Brief copied to clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy brief to clipboard</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="px-6 sm:px-8 py-5 bg-black/40 border-t border-white/[0.08] flex items-center justify-between select-none">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep((prev) => (prev > 1 ? ((prev - 1) as 1 | 2 | 3) : 1))}
              className="inline-flex items-center gap-1.5 text-xs font-mono uppercase text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <AnimatedButton
              text="Continue"
              showArrow
              variant="primary"
              size="sm"
              onClick={() => setStep((prev) => (prev < 3 ? ((prev + 1) as 1 | 2 | 3) : 3))}
            />
          ) : (
            <button
              type="button"
              onClick={closeScopingModal}
              className="text-xs font-mono uppercase text-white/60 hover:text-white transition-colors cursor-pointer"
            >
              Close
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
