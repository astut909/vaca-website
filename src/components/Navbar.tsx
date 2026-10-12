import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowDownToLine, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContact }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'The Problem', href: '#problem' },
    { label: 'Voice Khata', href: '#voice' },
    { label: 'Digital Ledger', href: '#ledger' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Security', href: '#security' },
    { label: 'Internship & Startup', href: '#stakeholders' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-cream/95 backdrop-blur-md border-b border-paper-border shadow-sm py-3'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Mark */}
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-9 h-9 rounded bg-emerald flex items-center justify-center text-white font-serif font-bold text-xl shadow-sm group-hover:bg-emerald-hover transition-colors">
              V
            </span>
            <div className="flex flex-col">
              <span className="font-serif text-2xl tracking-wider text-ink font-semibold leading-none">
                VACA
              </span>
              <span className="text-[10px] uppercase tracking-widest text-ink-muted font-medium mt-0.5">
                Galla Khata
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ink-secondary hover:text-ink transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-emerald hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenContact}
              className="px-3.5 py-2 text-xs font-semibold text-ink border border-ink/30 rounded hover:bg-cream-dark transition-colors flex items-center gap-1.5"
            >
              <PhoneCall className="w-3.5 h-3.5 text-emerald" />
              Demo / Contact
            </button>
            <a
              href="#download"
              className="px-4 py-2 text-xs font-semibold text-white bg-ink rounded hover:bg-ink-secondary transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <ArrowDownToLine className="w-3.5 h-3.5" />
              Get Android App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-ink hover:text-ink-secondary focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-cream-paper border-b border-paper-border px-6 py-5 shadow-lg animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-ink-secondary hover:text-ink py-2 border-b border-paper-border/50"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2.5 pt-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-2.5 text-sm font-semibold text-ink border border-ink/40 rounded text-center flex items-center justify-center gap-2"
              >
                <PhoneCall className="w-4 h-4 text-emerald" />
                Book Demo / Contact
              </button>
              <a
                href="#download"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 text-sm font-semibold text-white bg-emerald rounded text-center flex items-center justify-center gap-2 shadow"
              >
                <ArrowDownToLine className="w-4 h-4" />
                Download Android App
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
