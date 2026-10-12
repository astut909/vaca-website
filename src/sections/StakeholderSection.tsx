import React from 'react';
import { Building2, GraduationCap, Server, ShieldCheck, CheckCircle2, Milestone, Layers, FileCode } from 'lucide-react';
import { INTERNSHIP_METADATA } from '../data/mockData';

export const StakeholderSection: React.FC = () => {
  return (
    <section id="stakeholders" className="py-20 bg-cream-dark border-t border-b border-paper-border">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald"></span>
            <span className="text-xs uppercase tracking-widest text-ink-muted font-bold">
              Startup Brief &amp; Academic Showcase
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-ink font-semibold">
            Built with purpose. Engineered for real Indian retail.
          </h2>
          <p className="text-base text-ink-secondary mt-3">
            A transparent overview for incubators, business mentors, potential investors, and academic evaluation committees.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Startup Vision & Market Need */}
          <div className="bg-cream-paper border border-paper-border rounded-xl p-6 sm:p-8 shadow-ledger flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-paper-border">
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-5 h-5 text-emerald" />
                  <h3 className="font-serif text-xl font-bold text-ink">
                    VACA Pvt. Ltd. — Product Thesis
                  </h3>
                </div>
                <span className="text-xs bg-emerald-light text-emerald font-semibold px-2.5 py-1 rounded border border-emerald/20">
                  Concept: Galla Khata
                </span>
              </div>

              <div className="mt-5 space-y-3.5 text-sm text-ink-secondary leading-relaxed">
                <p>
                  <strong>The Market Reality:</strong> Over 12 million small retail kiranas in India operate on credit-driven relationships. Physical paper registers (बही खाता) remain susceptible to physical destruction, lost pages, and disputes stemming from unverified customer recall.
                </p>
                <p>
                  <strong>Why generic accounting apps fail:</strong> Most existing ERP or accounting solutions are overly complex, requiring rigid category structures, continuous fast typing, and English fluency that busy shopkeepers working with their hands cannot accommodate.
                </p>
                <p>
                  <strong>The VACA Solution:</strong> Galla is built around an audio-first philosophy — enabling instant transaction recording via natural Hindi and Hinglish voice inputs, paired with zero-barrier WhatsApp receipt distribution.
                </p>
              </div>
            </div>

            {/* Verified Product Pillars */}
            <div className="mt-6 pt-5 border-t border-paper-border">
              <span className="text-[11px] font-bold uppercase tracking-wider text-ink-muted block mb-2.5">
                Verified Architectural Pillars
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-1.5 text-ink">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald shrink-0" />
                  <span>Offline-first resilience</span>
                </div>
                <div className="flex items-center gap-1.5 text-ink">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald shrink-0" />
                  <span>Tamper-proof server rules</span>
                </div>
                <div className="flex items-center gap-1.5 text-ink">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald shrink-0" />
                  <span>Sub-second voice parsing</span>
                </div>
                <div className="flex items-center gap-1.5 text-ink">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald shrink-0" />
                  <span>One-tap WhatsApp statements</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Internship & Technical Implementation Details */}
          <div className="bg-cream-paper border border-paper-border rounded-xl p-6 sm:p-8 shadow-ledger flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-paper-border">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-5 h-5 text-terracotta" />
                  <h3 className="font-serif text-xl font-bold text-ink">
                    Web Development Internship Project
                  </h3>
                </div>
                <span className="text-xs bg-stone-100 text-stone-700 font-semibold px-2.5 py-1 rounded border border-stone-200">
                  {INTERNSHIP_METADATA.session}
                </span>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-xs bg-cream p-4 rounded-lg border border-paper-border font-sans">
                <div>
                  <span className="text-[10px] text-ink-muted uppercase font-bold block">Intern / Developer</span>
                  <span className="font-semibold text-ink text-sm">{INTERNSHIP_METADATA.student}</span>
                </div>
                <div>
                  <span className="text-[10px] text-ink-muted uppercase font-bold block">Programme</span>
                  <span className="font-semibold text-ink">{INTERNSHIP_METADATA.degree}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[10px] text-ink-muted uppercase font-bold block">College &amp; University</span>
                  <span className="font-semibold text-ink">{INTERNSHIP_METADATA.institution}</span>
                </div>
                <div>
                  <span className="text-[10px] text-ink-muted uppercase font-bold block">Company / Host</span>
                  <span className="font-semibold text-ink">{INTERNSHIP_METADATA.organization}</span>
                </div>
                <div>
                  <span className="text-[10px] text-ink-muted uppercase font-bold block">Signatory / Mentor</span>
                  <span className="font-semibold text-ink">{INTERNSHIP_METADATA.mentor}</span>
                </div>
              </div>

              <div className="mt-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-ink-muted block mb-2">
                  Internship Technical Deliverables:
                </span>
                <ul className="space-y-1.5 text-xs text-ink-secondary">
                  <li className="flex items-start gap-2">
                    <FileCode className="w-3.5 h-3.5 text-emerald mt-0.5 shrink-0" />
                    <span>Modular React 18 + TypeScript + Tailwind showcase with zero generic AI styling.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Layers className="w-3.5 h-3.5 text-emerald mt-0.5 shrink-0" />
                    <span>Real-time interactive voice simulator and ledger preview with Indian numerical formatting.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald mt-0.5 shrink-0" />
                    <span>Verified Firestore rule mapping &amp; client-side validation without hardcoded credentials.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-paper-border flex items-center justify-between text-xs text-ink-muted">
              <span>Prepared for college presentation and evaluation</span>
              <span className="font-mono text-ink">B.Tech CSE</span>
            </div>
          </div>
        </div>

        {/* Feature Status: Verified vs Roadmap (Critical requirement from report) */}
        <div className="mt-8 bg-white border border-paper-border rounded-xl p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4">
            <Milestone className="w-4 h-4 text-emerald" />
            <h4 className="font-serif text-lg font-bold text-ink">
              Feature Status Matrix — Truthful Capability Disclosure
            </h4>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs leading-relaxed">
            <div className="p-4 bg-emerald-light/40 border border-emerald/20 rounded-lg">
              <span className="font-bold text-emerald uppercase tracking-wider block mb-2">
                ✓ Verified &amp; Implemented Capabilities
              </span>
              <ul className="space-y-1.5 text-ink-secondary">
                <li>• <strong>Voice-First Khata Entry:</strong> Processing natural spoken Hindi/English/Hinglish commands.</li>
                <li>• <strong>Customer Ledger Pages:</strong> Running credit balances, date/time timestamps, search &amp; filter.</li>
                <li>• <strong>WhatsApp Statement Generator:</strong> Formatted credit summary shareable in 1 tap.</li>
                <li>• <strong>PDF &amp; Excel Reports:</strong> Consolidated statements for tax, auditing, and backup.</li>
                <li>• <strong>Tamper-Proof Audit Trail:</strong> Server-side validation preventing silent edits.</li>
              </ul>
            </div>

            <div className="p-4 bg-cream border border-paper-border rounded-lg">
              <span className="font-bold text-ink-secondary uppercase tracking-wider block mb-2">
                ⏳ Planned Future Enhancements (Roadmap)
              </span>
              <ul className="space-y-1.5 text-ink-secondary">
                <li>• <strong>Multi-Store RBAC:</strong> Role-based access for shop owners vs cashier assistants.</li>
                <li>• <strong>Automated WhatsApp Reminder Bot:</strong> Automated scheduled polite reminders (opt-in).</li>
                <li>• <strong>Supplier Mandi Purchase Matching:</strong> Automatic invoice scanning via mobile camera.</li>
                <li>• <strong>Vernacular Audio Feedback:</strong> Spoken confirmation in regional dialects (Bhojpuri, Awadhi).</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
