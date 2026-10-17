'use client';

import React, { useState, useEffect } from 'react';
import { X, Check, ArrowRight, ArrowLeft, Copy, Send, Sparkles, Film, Compass, Layers, CheckCircle2 } from 'lucide-react';
import { useScopingModal } from '@/context/ScopingModalContext';

const DISCIPLINES = [
  {
    id: 'brand-strategy',
    title: 'Brand Strategy & Identity',
    desc: 'Visual systems, typography, tactile packaging, and brand positioning.',
    tag: 'BRANDING',
  },
  {
    id: 'commercial-film',
    title: 'Commercial Film & Production',
    desc: 'Cinematic brand films, high-speed camera direction, and DaVinci color grading.',
    tag: 'CINEMA',
  },
  {
    id: 'youtube-growth',
    title: 'YouTube & Retainer Growth',
    desc: 'Episodic series editing, viral shorts, narrative hooks, and channel direction.',
    tag: 'YOUTUBE',
  },
  {
    id: 'full-transformation',
    title: 'Full Studio Transformation',
    desc: 'Integrated strategy, cinematic video production, brand identity, and growth.',
    tag: 'STUDIO 360',
  },
];

const DELIVERABLE_OPTIONS = [
  'Brand Identity System & Guidelines',
  'Commercial Hero Film (4K DCI)',
  'Episodic YouTube Series (10+ episodes)',
  'High-Retention Shorts & Reels (30+ assets)',
  'Custom DaVinci Resolve Color Grading',
  'Spatial Sound Design & Fairlight Mastering',
  'Packaging & Print Collateral',
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
  const [selectedDiscipline, setSelectedDiscipline] = useState<string>('brand-strategy');
  const [selectedDeliverables, setSelectedDeliverables] = useState<string[]>([]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>('standard');
  const [selectedBudget, setSelectedBudget] = useState<string>('₹2L — ₹5L (Growth Brand)');
  const [brandName, setBrandName] = useState<string>('');
  const [additionalNotes, setAdditionalNotes] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  // Sync preselected discipline
  useEffect(() => {
    if (preselectedDiscipline) {
      const match = DISCIPLINES.find(
        (d) => d.title.toLowerCase().includes(preselectedDiscipline.toLowerCase()) || d.id === preselectedDiscipline
      );
      if (match) setSelectedDiscipline(match.id);
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

  const currentDisciplineObj = DISCIPLINES.find((d) => d.id === selectedDiscipline) || DISCIPLINES[0];
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
✦ DISCIPLINE: ${currentDisciplineObj.title}
✦ PRODUCTION TIMELINE: ${currentTimelineObj.label} (${currentTimelineObj.time})
✦ TARGET SCALE: ${selectedBudget}

✦ SELECTED DELIVERABLES:
${selectedDeliverables.length > 0 ? selectedDeliverables.map((d) => `  • ${d}`).join('\n') : '  • Full Studio Scoping Required'}

${additionalNotes.trim() ? `✦ STRATEGIC CONTEXT & NOTES:\n  "${additionalNotes.trim()}"\n` : ''}━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Generated via framelesshub.com Studio HUD`;

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedBrief);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappUrl = `https://wa.me/918248628371?text=${encodeURIComponent(generatedBrief)}`;
  const emailUrl = `mailto:hello@framelesshub.com?subject=${encodeURIComponent(
    `Project Brief: ${brandName || currentDisciplineObj.title} — Frameless Hub`
  )}&body=${encodeURIComponent(generatedBrief)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 select-none animate-in fade-in duration-200">
      {/* Dark Studio Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={closeScopingModal}
        aria-hidden="true"
      />

      {/* Main Wizard Modal Frame */}
      <div
        className="relative z-10 w-full max-w-2xl bg-[#0C0D12] border border-white/10 rounded-2xl text-[#F4F4F5] shadow-[0_20px_80px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
        aria-label="Interactive Project Scoping HUD"
      >
        {/* Top Header Bar */}
        <div className="px-6 py-4 bg-[#111218] border-b border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-pulse" />
            <div className="text-xs font-mono font-bold tracking-wider text-white">
              PROJECT SCOPING // STEP 0{step} OF 03
            </div>
          </div>

          {/* Stepper Dots */}
          <div className="flex items-center gap-2">
            {[1, 2, 3].map((s) => (
              <span
                key={s}
                className={`w-6 h-1 rounded-full transition-all ${
                  s === step ? 'bg-[#00F0FF] w-8' : s < step ? 'bg-white/40' : 'bg-white/10'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={closeScopingModal}
            className="p-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.1] text-[#A1A1AA] hover:text-white transition-colors"
            aria-label="Close scoping wizard"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Wizard Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6 select-text">
          
          {/* STEP 1: SELECT DISCIPLINE */}
          {step === 1 && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#00F0FF] block mb-1">
                  01 // PRIMARY FOCUS
                </span>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  What are we creating together?
                </h3>
                <p className="text-xs text-[#A1A1AA] mt-1">
                  Select the primary discipline driving your project.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DISCIPLINES.map((discipline) => {
                  const isSelected = selectedDiscipline === discipline.id;
                  return (
                    <button
                      key={discipline.id}
                      type="button"
                      onClick={() => setSelectedDiscipline(discipline.id)}
                      className={`text-left p-4 rounded-xl border transition-all flex flex-col justify-between gap-3 ${
                        isSelected
                          ? 'bg-[#00F0FF]/10 border-[#00F0FF] ring-1 ring-[#00F0FF]/30 shadow-[0_0_20px_rgba(0,240,255,0.12)]'
                          : 'bg-white/[0.02] border-white/[0.08] hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between w-full">
                        <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-white/[0.05] border border-white/10 text-[#00F0FF]">
                          {discipline.tag}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-[#00F0FF]" />}
                      </div>

                      <div>
                        <div className="text-sm font-bold text-white mb-1">
                          {discipline.title}
                        </div>
                        <div className="text-xs text-[#A1A1AA] leading-relaxed">
                          {discipline.desc}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Client / Brand Name input */}
              <div className="pt-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-2">
                  Brand or Company Name (Optional)
                </label>
                <input
                  type="text"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  placeholder="e.g. Acme Studio, Nexa Auto, Personal Brand"
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-[#00F0FF] transition-colors"
                />
              </div>
            </div>
          )}

          {/* STEP 2: DELIVERABLES, TIMELINE & SCALE */}
          {step === 2 && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#00F0FF] block mb-1">
                  02 // SCOPE &amp; TIMELINE
                </span>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  Deliverables &amp; Timeline Architecture
                </h3>
                <p className="text-xs text-[#A1A1AA] mt-1">
                  Check all deliverables relevant to your scope.
                </p>
              </div>

              {/* Deliverable Checkboxes */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-3">
                  Scope Checklist (Select all that apply)
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {DELIVERABLE_OPTIONS.map((item) => {
                    const isChecked = selectedDeliverables.includes(item);
                    return (
                      <button
                        key={item}
                        type="button"
                        onClick={() => toggleDeliverable(item)}
                        className={`text-left px-3.5 py-2.5 rounded-xl border text-xs font-mono transition-all flex items-center justify-between gap-2 ${
                          isChecked
                            ? 'bg-white/[0.08] text-white border-[#00F0FF]/50 font-semibold'
                            : 'bg-white/[0.02] text-[#A1A1AA] border-white/[0.06] hover:text-white hover:border-white/15'
                        }`}
                      >
                        <span className="truncate">{item}</span>
                        <div
                          className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 ${
                            isChecked ? 'bg-[#00F0FF] border-[#00F0FF]' : 'border-white/20'
                          }`}
                        >
                          {isChecked && <Check className="w-3 h-3 text-black stroke-[3]" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Timeline Selection */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-3">
                  Target Launch Schedule
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {TIMELINE_OPTIONS.map((timeline) => {
                    const isSelected = selectedTimeline === timeline.id;
                    return (
                      <button
                        key={timeline.id}
                        type="button"
                        onClick={() => setSelectedTimeline(timeline.id)}
                        className={`p-3 rounded-xl border text-center transition-all ${
                          isSelected
                            ? 'bg-[#00F0FF]/10 text-white border-[#00F0FF] font-bold'
                            : 'bg-white/[0.02] text-[#A1A1AA] border-white/[0.06] hover:text-white'
                        }`}
                      >
                        <div className="text-xs font-mono">{timeline.label}</div>
                        <div className="text-[10px] text-[#00F0FF] mt-1 font-mono">{timeline.time}</div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Scale / Budget Tier */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-2">
                  Estimated Investment Scale
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {BUDGET_OPTIONS.map((budget) => {
                    const isSelected = selectedBudget === budget;
                    return (
                      <button
                        key={budget}
                        type="button"
                        onClick={() => setSelectedBudget(budget)}
                        className={`p-2.5 rounded-xl border text-center text-[11px] font-mono transition-all ${
                          isSelected
                            ? 'bg-white/[0.1] text-white border-[#00F0FF] font-bold'
                            : 'bg-white/[0.02] text-[#A1A1AA] border-white/[0.06] hover:text-white'
                        }`}
                      >
                        {budget}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Strategic context notes */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#A1A1AA] mb-2">
                  Core Objective or Inspiration (Optional)
                </label>
                <textarea
                  rows={2}
                  value={additionalNotes}
                  onChange={(e) => setAdditionalNotes(e.target.value)}
                  placeholder="Share any key references, competitors to beat, or high-level milestones..."
                  className="w-full px-4 py-2.5 rounded-xl bg-black/50 border border-white/10 text-white text-xs placeholder:text-white/30 focus:outline-none focus:border-[#00F0FF] transition-colors resize-none"
                />
              </div>
            </div>
          )}

          {/* STEP 3: FORMATTED BRIEF & 1-CLICK DISPATCH */}
          {step === 3 && (
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#00F0FF] block mb-1">
                  03 // VERIFY &amp; DISPATCH
                </span>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  Ready to Transmit Your Brief
                </h3>
                <p className="text-xs text-[#A1A1AA] mt-1">
                  We review incoming briefs within 24 hours. Send directly via WhatsApp or Email.
                </p>
              </div>

              {/* Formatted Code Terminal Box */}
              <div className="relative rounded-xl bg-black/80 border border-white/10 p-4 font-mono text-xs text-[#D4D4D8] space-y-1">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-2 select-none">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-[10px] text-[#A1A1AA] uppercase">AUTO-GENERATED SCOPE BRIEF</span>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/[0.08] hover:bg-white/[0.15] text-[10px] text-white transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Brief</span>
                      </>
                    )}
                  </button>
                </div>

                <pre className="whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-[#00F0FF]/90 max-h-48 overflow-y-auto">
                  {generatedBrief}
                </pre>
              </div>

              {/* Primary Dual Dispatch Actions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5A] text-black font-bold font-mono text-xs uppercase flex items-center justify-center gap-2.5 transition-all shadow-[0_0_25px_rgba(37,211,102,0.3)]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>

                <a
                  href={emailUrl}
                  className="p-4 rounded-xl bg-white text-black hover:bg-[#00F0FF] font-bold font-mono text-xs uppercase flex items-center justify-center gap-2.5 transition-all shadow-[0_0_20px_rgba(255,255,255,0.15)]"
                >
                  <Send className="w-4 h-4" />
                  <span>Email to Studio</span>
                </a>
              </div>

              <div className="text-center text-[11px] font-mono text-[#71717A]">
                Direct Line: +91 82486 28371 • hello@framelesshub.com • Chennai, India
              </div>
            </div>
          )}

        </div>

        {/* Footer Navigation Bar */}
        <div className="px-6 py-4 bg-[#111218] border-t border-white/[0.08] flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep((s) => (s - 1) as 1 | 2 | 3)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider text-[#A1A1AA] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back</span>
            </button>
          ) : (
            <div />
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={() => setStep((s) => (s + 1) as 1 | 2 | 3)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider text-black bg-[#00F0FF] hover:bg-white transition-all shadow-[0_0_20px_rgba(0,240,255,0.3)]"
            >
              <span>Continue</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={closeScopingModal}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider text-[#71717A] hover:text-white transition-colors"
            >
              <span>Done</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
