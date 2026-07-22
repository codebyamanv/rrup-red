import React from 'react';
import { ArrowUpRight, Globe2, ShieldCheck, Award, ChevronDown, Sparkles } from 'lucide-react';
import heroImg from '../assets/images/hero_advisory_1784710369940.jpg';
import { FOUNDER_STATS, JURISDICTIONS_DATA } from '../data/advisoryData';

interface HeroProps {
  onOpenConsultation: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation, onExploreServices }) => {
  return (
    <section id="hero" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-warm-bg to-sage-light/40">
      {/* Background Architectural Accent */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute bottom-0 left-0 w-full h-full bg-[linear-gradient(to_right,#1E1B1E_1px,transparent_1px),linear-gradient(to_bottom,#1E1B1E_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Main Hero Content */}
          <div className="lg:col-span-8 space-y-8 text-left">

            {/* Top Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 bg-sage-light border border-sage-border px-3.5 py-1.5 rounded-full text-xs font-bold text-forest uppercase tracking-widest shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-sage animate-pulse"></span>
              <span>Corporate Finance & Strategic Treasury Stewardship</span>
            </div>

            {/* Signature H1 Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-extrabold leading-[1.08] text-forest tracking-tight">
              Institutional Clarity for <span className="text-sage">Corporate Finance</span> & Cross Border Advisory.
            </h1>

            {/* Concise Value Proposition */}
            <p className="text-lg sm:text-xl text-text-main max-w-2xl font-normal leading-relaxed">
              RRUP Advisory provides high-conviction strategic financial direction, multi-currency treasury risk management, and FEMA compliance for Indian enterprises and international businesses.
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center justify-center gap-2 bg-sage hover:bg-sage-hover text-white text-base font-semibold px-7 py-4 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-98 focus:outline-none focus:ring-2 focus:ring-sage focus:ring-offset-2"
              >
                <span>Schedule Executive Consultation</span>
                <ArrowUpRight className="w-5 h-5" />
              </button>

              <button
                onClick={onExploreServices}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-warm-bg text-forest text-base font-semibold px-6 py-4 rounded-xl border border-border-subtle hover:border-sage transition-all focus:outline-none focus:ring-2 focus:ring-sage"
              >
                <span>Explore Practice Services</span>
                <ChevronDown className="w-4 h-4 text-sage" />
              </button>
            </div>

            {/* 3 Mandated Trust Pills */}
            <div className=" border-border-subtle grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2.5 bg-white/90 border border-border-subtle p-3 rounded-xl shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-sage-light border border-sage-border/50 text-forest flex items-center justify-center shrink-0">
                  <Globe2 className="w-4 h-4 text-sage" />
                </div>
                <div>
                  <p className="text-xs font-bold text-forest">India & International</p>
                  <p className="text-[11px] text-text-muted">Mumbai HQ & Global Network</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/90 border border-border-subtle p-3 rounded-xl shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-sage-light border border-sage-border/50 text-forest flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-sage" />
                </div>
                <div>
                  <p className="text-xs font-bold text-forest">Cross-Border Advisory</p>
                  <p className="text-[11px] text-text-muted">FEMA, Tax & Transfer Pricing</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 bg-white/90 border border-border-subtle p-3 rounded-xl shadow-2xs">
                <div className="w-8 h-8 rounded-lg bg-sage-light border border-sage-border/50 text-forest flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-sage" />
                </div>
                <div>
                  <p className="text-xs font-bold text-forest">20+ Years Experience</p>
                  <p className="text-[11px] text-text-muted">Led by CA Premesh P. Dave</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Visual Architectural Badge & Quick Treasury Metric Card */}
          <div className="lg:col-span-4 relative">
            <div className="relative mx-auto max-w-sm rounded-2xl overflow-hidden shadow-xl border border-sage-border bg-white p-6 space-y-5">
              <div className="relative h-44 rounded-xl overflow-hidden bg-forest">
                <img
                  src={heroImg}
                  alt="RRUP Advisory Financial & Treasury Operations"
                  width={400}
                  height={176}
                  className="w-full h-full object-cover  opacity-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest via-transparent to-transparent p-4 flex flex-col justify-end">
                  <span className="text-[11px] font-bold text-sage-muted uppercase tracking-wider">Practice Focus</span>
                  <p className="text-base font-bold text-white">Institutional Treasury & Risk Governance</p>
                </div>
              </div>

              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
                  <span className="text-xs font-medium text-text-muted">Working Capital Facility</span>
                  <span className="text-sm font-extrabold text-forest">₹{FOUNDER_STATS.workingCapitalManagedCr.toLocaleString()} Cr</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-border-subtle">
                  <span className="text-xs font-medium text-text-muted">Global Corridors</span>
                  <span className="text-sm font-extrabold text-sage">{JURISDICTIONS_DATA.length} Countries</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-text-muted">Primary Practice Leader</span>
                  <span className="text-xs font-bold text-forest">CA Premesh Dave</span>
                </div>
              </div>

              <div className="bg-sage-light p-3 rounded-xl border border-sage-border text-center">
                <p className="text-xs text-text-main font-medium">
                  <Sparkles className="w-3.5 h-3.5 text-sage inline mr-1" />
                  Registered Corporate Advisory • Strategic CFO Advisory
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
