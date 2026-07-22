import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, PhoneCall, ShieldCheck } from 'lucide-react';

interface HeaderProps {
  onOpenConsultation: () => void;
  onSelectSection: (id: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenConsultation, onSelectSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'Services', id: 'services' },
    { label: 'Clients', id: 'global-clientele' },
    { label: 'About', id: 'about' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    onSelectSection(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-xs border-b border-border-subtle py-3.5'
          : 'py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('hero')}
            className="flex items-center gap-3 text-left group focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2 rounded-lg p-1"
            aria-label="RRUP Advisory Home"
          >
            <div className="w-18 rounded-xl flex items-center justify-center font-bold text-lg ">
              <img src="/src/assets/images/logo.png" alt=""  />
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-sm font-semibold text-text-main hover:text-sage transition-colors duration-150 relative py-1 focus:outline-none focus:text-sage"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/919820000000?text=Hello%20RRUP%20Advisory,%20I%20would%20like%20to%20inquire%20about%20advisory%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-forest bg-warm-bg hover:bg-sage-light px-3.5 py-2.5 rounded-xl border border-border-subtle hover:border-sage-border transition-colors focus:outline-none"
              aria-label="Direct WhatsApp Advisory Line"
            >
              <PhoneCall className="w-3.5 h-3.5 text-sage" />
              <span>Direct Desk</span>
            </a>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 bg-sage hover:bg-sage-hover text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all shadow-xs hover:shadow-md active:scale-98 focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2"
            >
              <span>Consult</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onOpenConsultation}
              className="bg-sage text-white text-xs font-semibold px-3.5 py-2 rounded-lg"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-forest hover:bg-warm-bg focus:outline-none focus:ring-2 focus:ring-sage"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bg-white border-b border-border-subtle shadow-xl p-6 transition-all animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 pb-3 border-b border-border-subtle">
              <ShieldCheck className="w-4 h-4 text-sage" />
              <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">RRUP Advisory & Associates</span>
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="text-left text-base font-semibold text-forest hover:text-sage py-2 min-h-[44px] flex items-center"
              >
                {item.label}
              </button>
            ))}
            <div className="pt-4 border-t border-border-subtle flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-sage hover:bg-sage-hover text-white text-base font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <span>Schedule Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="mailto:contact@rrupadvisory.com"
                className="w-full text-center text-xs font-semibold text-text-muted py-2"
              >
                contact@rrupadvisory.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
