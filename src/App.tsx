import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { PhoneMockup } from './components/PhoneMockup';
import { VoiceDemoInteractive } from './components/VoiceDemoInteractive';
import { LedgerInteractive } from './components/LedgerInteractive';
import { WhatsAppModal } from './components/WhatsAppModal';
import { ContactForm } from './components/ContactForm';
import { StakeholderSection } from './sections/StakeholderSection';
import { CustomerLedger, CUSTOMER_LEDGERS, FAQ_ITEMS } from './data/mockData';
import {
  ArrowDownToLine,
  ChevronDown,
  ShieldCheck,
  Lock,
  Clock,
  UserCheck,
  CheckCircle2,
  FileText,
  MessageCircle,
  Sparkles,
  Smartphone,
  ExternalLink,
  BookOpen
} from 'lucide-react';

export const App: React.FC = () => {
  const [activeModalCustomer, setActiveModalCustomer] = useState<CustomerLedger | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleOpenContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectCustomer = (customer: CustomerLedger) => {
    setActiveModalCustomer(customer);
  };

  return (
    <div className="min-h-screen bg-cream text-ink font-sans flex flex-col relative selection:bg-emerald selection:text-white">
      {/* Navigation */}
      <Navbar onOpenContact={handleOpenContact} />

      <main className="flex-1">
        {/* ==================== HERO SECTION ==================== */}
        <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden relative">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
              {/* Left Column: Authentic Editorial Brand Copy */}
              <div className="lg:col-span-7 max-w-2xl">
                {/* Brand Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-dark border border-paper-border mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald"></span>
                  <span className="text-xs font-semibold uppercase tracking-widest text-ink-secondary">
                    VACA Presents Galla · Digital Khata
                  </span>
                </div>

                {/* Primary Tagline */}
                <h1 className="font-hindi text-4xl sm:text-5xl lg:text-6xl font-bold text-ink leading-[1.15] tracking-tight">
                  बोलो,<br />
                  <span className="text-emerald">हिसाब हो जायेगा।</span>
                </h1>

                {/* English Subheadline */}
                <p className="font-serif italic text-xl sm:text-2xl text-ink-secondary mt-4 leading-snug">
                  Hisab rakhna ab aur aasaan — The voice-first digital khata for India’s retail shopkeepers.
                </p>

                {/* Body Explanation */}
                <p className="text-base sm:text-lg text-ink-secondary mt-5 leading-relaxed">
                  Track every rupee of customer credit (उधार) and payment (जमा). Record transactions by voice in Hindi, English, or Hinglish. Share clean statements directly on WhatsApp. No tedious typing, no torn paper diaries, no disputes over forgotten balances.
                </p>

                {/* Action Buttons */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <a
                    href="#download"
                    className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-emerald hover:bg-emerald-hover text-white text-sm font-semibold rounded shadow-md transition-all transform hover:-translate-y-0.5"
                  >
                    <ArrowDownToLine className="w-4 h-4" />
                    Download for Android
                  </a>

                  <a
                    href="#voice"
                    className="inline-flex items-center gap-2 px-5 py-3.5 bg-white border border-paper-border hover:bg-cream-dark text-ink text-sm font-medium rounded transition-colors shadow-subtle"
                  >
                    <span>Try Voice Simulator ↓</span>
                  </a>
                </div>

                {/* Trust Highlights */}
                <div className="mt-10 pt-6 border-t border-paper-border flex flex-wrap items-center gap-6 text-xs text-ink-muted">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald" />
                    100% Free for Retailers
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Lock className="w-4 h-4 text-emerald" />
                    Encrypted Cloud Backup
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4 text-emerald" />
                    Direct WhatsApp Sharing
                  </span>
                </div>
              </div>

              {/* Right Column: Interactive Phone Mockup */}
              <div className="lg:col-span-5 flex justify-center">
                <PhoneMockup
                  onOpenStatement={(customerName) => {
                    const match = CUSTOMER_LEDGERS.find((c) => c.name === customerName);
                    if (match) setActiveModalCustomer(match);
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ==================== THE PROBLEM (REALITY OF PHYSICAL KHATA) ==================== */}
        <section id="problem" className="py-20 bg-ink text-cream relative khata-dark-ruled-bg khata-margin-line">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Stat */}
              <div className="lg:col-span-6 space-y-6">
                <span className="text-xs uppercase font-bold tracking-widest text-cream/40 block">
                  The Daily Retail Reality
                </span>

                <div className="font-serif italic text-4xl sm:text-6xl text-cream font-normal leading-none">
                  ₹20,000 <span className="text-xl sm:text-2xl not-italic text-cream/50">crore</span>
                </div>

                <p className="text-lg text-cream/80 leading-relaxed font-sans">
                  That is the estimated credit Indian retailers extend to daily customers across the country. Most of it is maintained in <strong>torn notebooks, loose scraps of paper, or solely in memory</strong>.
                </p>

                <p className="text-base text-cream/65 leading-relaxed">
                  When a customer says <em>"Maine toh pichle hafte hi de diye the,"</em> without clear records, shopkeepers face an uncomfortable choice: absorb the financial loss, or argue and risk losing a long-time customer relationship.
                </p>
              </div>

              {/* Right Column: Grounded Shopkeeper Account */}
              <div className="lg:col-span-6 space-y-6 lg:pl-8">
                <blockquote className="font-serif italic text-xl sm:text-2xl text-cream/90 leading-snug border-l-2 border-cream/20 pl-6 py-1">
                  "Mera 15 saal ka bahi-khata ek baar barsaat mein chhat tapakne se geela ho gaya. Lagbhag do lakh rupaye ka hisab ek hi raat mein dho gaya."
                  <cite className="block font-sans text-xs not-italic text-cream/40 mt-3">
                    — Kirana shopkeeper from Varanasi, reflecting on why he adopted a digital ledger
                  </cite>
                </blockquote>

                <p className="text-base text-cream/70 leading-relaxed">
                  VACA replaces fragile paper notebooks with an <strong>immutable digital ledger that both shopkeeper and customer can verify</strong>. Every entry is stamped with date and time, verified server-side, and instantly shareable.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== VOICE KHATA ("BOLO AUR LIKHO") ==================== */}
        <section id="voice" className="py-20 bg-cream relative">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Column: Voice Interactive Simulator */}
              <div className="lg:col-span-7">
                <VoiceDemoInteractive />
              </div>

              {/* Right Column: Copy & Design Rationale */}
              <div className="lg:col-span-5 space-y-5">
                <span className="text-xs uppercase font-bold tracking-widest text-ink-muted block">
                  Voice-First Architecture
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl text-ink font-semibold leading-tight">
                  Bolo aur likho.<br />
                  No typing. No menus.
                </h2>

                <p className="text-base text-ink-secondary leading-relaxed">
                  Say <em>"Ramesh ne 500 rupaye diye"</em> or <em>"Sunita Sharma 1200 udhar likho"</em>. VACA processes natural Indian conversational speech in Hindi, English, and Hinglish — understanding how shopkeepers actually speak on the shop floor.
                </p>

                <p className="text-sm text-ink-secondary leading-relaxed">
                  Engineered specifically for busy retail hands — measuring pulses, weighing flour, cutting packaging, and handing over change. Speaking takes 2 seconds; finding a keyboard and typing numbers takes minutes.
                </p>

                <div className="pt-4 space-y-2.5 text-xs text-ink-secondary">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
                    <span>Handles colloquial phrases ("jama kar lo", "baki likho", "katao")</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
                    <span>Works alongside manual numerical keypad if preferred</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald shrink-0" />
                    <span>Audio is processed locally and securely without persistent recordings</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== DIGITAL KHATA LEDGER ==================== */}
        <section id="ledger" className="py-20 bg-cream-dark relative border-t border-paper-border">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header */}
            <div className="max-w-2xl mb-12">
              <span className="text-xs uppercase font-bold tracking-widest text-ink-muted block mb-2">
                Digital Ledger Book (डिजिटल बही खाता)
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink font-semibold">
                Every customer. Every rupee. Every transaction.
              </h2>
              <p className="text-base text-ink-secondary mt-3">
                Each customer has their own dedicated ledger account. Running balances calculate automatically with zero mental math and zero scratched-out mistakes.
              </p>
            </div>

            {/* Interactive Ledger Table Component */}
            <LedgerInteractive onSelectCustomer={handleSelectCustomer} />
          </div>
        </section>

        {/* ==================== HOW IT WORKS (3 SIMPLE STEPS) ==================== */}
        <section id="how-it-works" className="py-20 bg-cream relative">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase font-bold tracking-widest text-ink-muted block mb-2">
                Simple 3-Step Routine
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink font-semibold">
                How VACA fits into a busy shopkeeper’s day
              </h2>
              <p className="text-sm text-ink-secondary mt-2">
                No accounting background needed. Designed so anyone in the shop can use it within 60 seconds.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="bg-cream-paper border border-paper-border rounded-xl p-6 shadow-subtle relative flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-serif font-bold text-terracotta block mb-3">
                    01
                  </span>
                  <h3 className="font-serif text-xl font-bold text-ink mb-2">
                    Bolo ya Likho
                  </h3>
                  <p className="text-xs text-ink-secondary leading-relaxed">
                    Whenever credit is extended or cash/UPI is received, simply press the mic button and speak naturally, or enter the amount on the quick numpad.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-paper-border text-[11px] text-ink-muted">
                  Takes less than 3 seconds per customer transaction.
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-cream-paper border border-paper-border rounded-xl p-6 shadow-subtle relative flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-serif font-bold text-emerald block mb-3">
                    02
                  </span>
                  <h3 className="font-serif text-xl font-bold text-ink mb-2">
                    Instant Auto-Balance
                  </h3>
                  <p className="text-xs text-ink-secondary leading-relaxed">
                    The customer's running balance updates instantaneously with server timestamps. The total outstanding receivable for the entire shop recalculates in real time.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-paper-border text-[11px] text-ink-muted">
                  No calculator needed; math is 100% verified server-side.
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-cream-paper border border-paper-border rounded-xl p-6 shadow-subtle relative flex flex-col justify-between">
                <div>
                  <span className="text-2xl font-serif font-bold text-ink block mb-3">
                    03
                  </span>
                  <h3 className="font-serif text-xl font-bold text-ink mb-2">
                    WhatsApp Statement in 1 Tap
                  </h3>
                  <p className="text-xs text-ink-secondary leading-relaxed">
                    Whenever customer requests their bill or month-end hisab arrives, tap "Share". A clean breakdown with every item and payment is sent straight to their WhatsApp.
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-paper-border text-[11px] text-ink-muted">
                  Both parties have the identical verified record on their phones.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== SECURITY & TRUST ==================== */}
        <section id="security" className="py-20 bg-cream-dark border-t border-paper-border relative">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs uppercase font-bold tracking-widest text-ink-muted block mb-2">
                Security &amp; Data Ownership
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-ink font-semibold">
                Your data. Your khata. Bank-grade integrity.
              </h2>
              <p className="text-sm text-ink-secondary mt-2">
                VACA implements strict Firebase security rules and encryption. Your shop data is strictly private — we never sell, share, or monetize business information.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-cream-paper border border-paper-border rounded-xl p-5 shadow-subtle text-center">
                <div className="w-10 h-10 rounded-full bg-emerald-light border border-emerald/20 flex items-center justify-center mx-auto mb-3 text-emerald">
                  <Lock className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-ink mb-1">Encrypted In-Transit &amp; Rest</h4>
                <p className="text-xs text-ink-secondary leading-relaxed">
                  All ledger records are encrypted using modern standard cryptographic protocols.
                </p>
              </div>

              <div className="bg-cream-paper border border-paper-border rounded-xl p-5 shadow-subtle text-center">
                <div className="w-10 h-10 rounded-full bg-emerald-light border border-emerald/20 flex items-center justify-center mx-auto mb-3 text-emerald">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-ink mb-1">Strict Firestore Rules</h4>
                <p className="text-xs text-ink-secondary leading-relaxed">
                  Server-side authorization ensures only authenticated shop owners can read or append entries.
                </p>
              </div>

              <div className="bg-cream-paper border border-paper-border rounded-xl p-5 shadow-subtle text-center">
                <div className="w-10 h-10 rounded-full bg-emerald-light border border-emerald/20 flex items-center justify-center mx-auto mb-3 text-emerald">
                  <Clock className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-ink mb-1">Server Timestamps</h4>
                <p className="text-xs text-ink-secondary leading-relaxed">
                  Every entry receives an unalterable server timestamp to preserve audit integrity.
                </p>
              </div>

              <div className="bg-cream-paper border border-paper-border rounded-xl p-5 shadow-subtle text-center">
                <div className="w-10 h-10 rounded-full bg-emerald-light border border-emerald/20 flex items-center justify-center mx-auto mb-3 text-emerald">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-ink mb-1">Owner-Only Control</h4>
                <p className="text-xs text-ink-secondary leading-relaxed">
                  Export, download, or delete your entire business ledger anytime in Excel or PDF format.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== FREQUENTLY ASKED QUESTIONS ==================== */}
        <section id="faq" className="py-20 bg-cream relative">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <span className="text-xs uppercase font-bold tracking-widest text-ink-muted block mb-2">
                  Common Questions
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-ink font-semibold">
                  Frequently Asked Questions (अक्सर पूछे जाने वाले सवाल)
                </h2>
              </div>

              <div className="space-y-3">
                {FAQ_ITEMS.map((item, idx) => {
                  const isOpen = openFaqIndex === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-cream-paper border border-paper-border rounded-xl overflow-hidden transition-colors"
                    >
                      <button
                        onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                        className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-sans font-semibold text-sm sm:text-base text-ink hover:text-emerald transition-colors"
                      >
                        <span>{item.q}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-ink-muted shrink-0 transition-transform duration-200 ${
                            isOpen ? 'rotate-180 text-emerald' : ''
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-4 text-xs sm:text-sm text-ink-secondary leading-relaxed border-t border-paper-border/40 pt-3">
                          {item.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ==================== STARTUP & INTERNSHIP SHOWCASE ==================== */}
        <StakeholderSection />

        {/* ==================== CONTACT & DEMO REQUEST ==================== */}
        <section id="contact" className="py-20 bg-cream relative">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
            <ContactForm />
          </div>
        </section>

        {/* ==================== DOWNLOAD BANNER ==================== */}
        <section id="download" className="py-20 bg-emerald text-white text-center relative khata-dark-ruled-bg">
          <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold mb-3">
              Your khata, now digital and effortless.
            </h2>
            <p className="text-base text-white/80 max-w-xl mx-auto mb-8 font-sans">
              Available for Android devices. Free to use for Indian kiranas, general stores, and retail merchants.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  alert('VACA Android APK is currently in internal pilot testing. Leave your details in the contact form above to join the early retail cohort!');
                }}
                className="px-7 py-3.5 bg-white text-emerald font-semibold text-sm rounded shadow-lg hover:bg-cream-paper transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                <ArrowDownToLine className="w-4 h-4" />
                Download for Android (APK)
              </a>

              <button
                onClick={handleOpenContact}
                className="px-6 py-3.5 bg-emerald-dark hover:bg-emerald-dark/90 text-white font-semibold text-sm rounded border border-white/20 transition-all"
              >
                Request In-Person Shop Demo
              </button>
            </div>

            <p className="text-xs text-white/60 mt-6">
              Requires Android 8.0 or above · Minimum storage footprint (&lt; 25 MB)
            </p>
          </div>
        </section>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="bg-ink text-cream/70 py-12 border-t border-stone-800">
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-stone-800">
            {/* Brand */}
            <div className="md:col-span-2 space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 rounded bg-emerald flex items-center justify-center text-white font-serif font-bold text-lg">
                  V
                </span>
                <span className="font-serif text-2xl text-cream font-semibold tracking-wider">
                  VACA
                </span>
              </div>
              <p className="text-xs text-cream/60 max-w-sm leading-relaxed">
                VACA Pvt. Ltd. — Building Galla, the voice-first digital khata for India’s retail shopkeepers and kirana merchants.
              </p>
              <div className="text-[11px] text-cream/40">
                Project developed by <strong>Astut Shukla</strong>, B.Tech CSE, United College of Engineering and Research, Prayagraj.
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-cream/40 mb-3">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs text-cream/70">
                <li><a href="#problem" className="hover:text-cream">The Retail Problem</a></li>
                <li><a href="#voice" className="hover:text-cream">Voice Khata Simulator</a></li>
                <li><a href="#ledger" className="hover:text-cream">Interactive Ledger</a></li>
                <li><a href="#security" className="hover:text-cream">Security &amp; Encryption</a></li>
                <li><a href="#stakeholders" className="hover:text-cream">Internship Report</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-cream/40 mb-3">
                Official Connect
              </h4>
              <ul className="space-y-2 text-xs text-cream/70">
                <li>Email: <a href="mailto:contact@vacaapp.in" className="text-emerald-400 hover:underline">contact@vacaapp.in</a></li>
                <li>Location: Prayagraj / Varanasi, Uttar Pradesh</li>
                <li><a href="#contact" className="text-cream hover:underline">Book Shop Demo</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-cream/40 gap-3">
            <div>
              © 2026 VACA Pvt. Ltd. All rights reserved. Made in India for Indian retailers.
            </div>
            <div>
              Academic showcase &amp; startup prototype · Non-commercial distribution
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Modal */}
      <WhatsAppModal
        customer={activeModalCustomer}
        onClose={() => setActiveModalCustomer(null)}
      />
    </div>
  );
};
export default App;
