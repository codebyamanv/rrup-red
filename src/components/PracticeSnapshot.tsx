import React, { useState } from 'react';
import { BarChart3, TrendingUp, Globe, Layers, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { FOUNDER_STATS, JURISDICTIONS_DATA } from '../data/advisoryData';

interface PracticeSnapshotProps {
  onOpenConsultation: () => void;
}

export const PracticeSnapshot: React.FC<PracticeSnapshotProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<'treasury' | 'crossborder' | 'corporate'>('treasury');

  return (
    <section id="snapshot" className="py-20 bg-warm-bg border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-sage-light border border-sage-border px-3 py-1 rounded-full text-xs font-bold text-forest uppercase tracking-wider">
            <BarChart3 className="w-3.5 h-3.5 text-sage" />
            <span>Illustrative Practice Snapshot</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest tracking-tight">
            Institutional Treasury & Advisory Monitor
          </h2>
          <p className="text-base text-text-muted">
            A graphic overview of how RRUP Advisory manages multi-currency exposure, yield optimization, and cross-border capital compliance for client portfolios.
          </p>
        </div>

        {/* Interactive Snapshot Console Box */}
        <div className="bg-white rounded-2xl border border-sage-border shadow-sm overflow-hidden">
          
          {/* Mock Window Bar */}
          <div className="bg-forest px-6 py-3 flex flex-wrap items-center justify-between border-b border-forest-border">
            <div className="flex items-center gap-3">
              <div className="flex gap-1.5">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <span className="text-xs font-mono text-sage-muted pl-2 border-l border-forest-border">
                rrup-advisory-monitor.internal // Live Strategy Overview
              </span>
            </div>
            
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold text-white/80 bg-forest-light px-2.5 py-0.5 rounded-full">
                Managed Working Capital Consortium: ₹{FOUNDER_STATS.workingCapitalManagedCr.toLocaleString()} Cr
              </span>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="bg-sage-light/60 px-6 pt-3 border-b border-border-subtle flex gap-2 overflow-x-auto">
            <button
              onClick={() => setActiveTab('treasury')}
              className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-all border-t border-x ${
                activeTab === 'treasury'
                  ? 'bg-white text-forest border-sage-border shadow-2xs'
                  : 'text-text-muted border-transparent hover:text-forest'
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5 inline mr-1.5 text-sage" />
              Multi-Currency FX & Treasury
            </button>

            <button
              onClick={() => setActiveTab('crossborder')}
              className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-all border-t border-x ${
                activeTab === 'crossborder'
                  ? 'bg-white text-forest border-sage-border shadow-2xs'
                  : 'text-text-muted border-transparent hover:text-forest'
              }`}
            >
              <Globe className="w-3.5 h-3.5 inline mr-1.5 text-sage" />
              FEMA & Cross-Border Outflows
            </button>

            <button
              onClick={() => setActiveTab('corporate')}
              className={`px-4 py-2.5 text-xs font-bold rounded-t-xl transition-all border-t border-x ${
                activeTab === 'corporate'
                  ? 'bg-white text-forest border-sage-border shadow-2xs'
                  : 'text-text-muted border-transparent hover:text-forest'
              }`}
            >
              <Layers className="w-3.5 h-3.5 inline mr-1.5 text-sage" />
              M&A Valuation & Restructuring
            </button>
          </div>

          {/* Console Content */}
          <div className="p-6 sm:p-8">
            {activeTab === 'treasury' && (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-warm-bg p-4 rounded-xl border border-border-subtle">
                    <span className="text-xs font-medium text-text-muted">Working Capital Facility</span>
                    <p className="text-2xl font-extrabold text-forest mt-1">₹{FOUNDER_STATS.workingCapitalManagedCr.toLocaleString()} Cr</p>
                    <p className="text-[11px] text-sage font-semibold mt-1">across USD, EUR, GBP, AED, SGD</p>
                  </div>

                  <div className="bg-warm-bg p-4 rounded-xl border border-border-subtle">
                    <span className="text-xs font-medium text-text-muted">Average Yield Optimization</span>
                    <p className="text-2xl font-extrabold text-sage mt-1">+1.85% APY</p>
                    <p className="text-[11px] text-text-muted font-medium mt-1">over standard commercial bank deposits</p>
                  </div>

                  <div className="bg-warm-bg p-4 rounded-xl border border-border-subtle">
                    <span className="text-xs font-medium text-text-muted">FX Slippage Prevention</span>
                    <p className="text-2xl font-extrabold text-forest mt-1">Systematic Policy</p>
                    <p className="text-[11px] text-text-muted font-medium mt-1">Forward covers & collar structures</p>
                  </div>
                </div>

                <div className="bg-sage-light p-5 rounded-xl border border-sage-border flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-forest">Treasury Audit & Rate Negotiation</h3>
                    <p className="text-xs text-text-muted">
                      We analyze commercial bank margins, card rates, and interest rate swaps to recover lost margin.
                    </p>
                  </div>
                  <button
                    onClick={onOpenConsultation}
                    className="shrink-0 bg-forest hover:bg-forest-light text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-sage"
                  >
                    <span>Request Treasury Audit</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'crossborder' && (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-warm-bg p-4 rounded-xl border border-border-subtle">
                    <span className="text-xs font-medium text-text-muted">Global Jurisdictions Served</span>
                    <p className="text-2xl font-extrabold text-forest mt-1">{JURISDICTIONS_DATA.length} Countries</p>
                    <p className="text-[11px] text-sage font-semibold mt-1">India, US, UK, UAE, SG, DE, FR, AU</p>
                  </div>

                  <div className="bg-warm-bg p-4 rounded-xl border border-border-subtle">
                    <span className="text-xs font-medium text-text-muted">FEMA / RBI Filings</span>
                    <p className="text-2xl font-extrabold text-forest mt-1">100% Compliant</p>
                    <p className="text-[11px] text-text-muted font-medium mt-1">ODI, FDI, FLA, APR, LRS returns</p>
                  </div>

                  <div className="bg-warm-bg p-4 rounded-xl border border-border-subtle">
                    <span className="text-xs font-medium text-text-muted">Transfer Pricing Accuracy</span>
                    <p className="text-2xl font-extrabold text-forest mt-1">OECD BEPS</p>
                    <p className="text-[11px] text-text-muted font-medium mt-1">Master file & Local file audit-ready</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-xs font-semibold text-forest bg-warm-bg p-3 rounded-lg border border-border-subtle">
                    <CheckCircle2 className="w-4 h-4 text-sage" />
                    <span>Inbound FDI & Wholly Owned India Subsidiary Establishment</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-forest bg-warm-bg p-3 rounded-lg border border-border-subtle">
                    <CheckCircle2 className="w-4 h-4 text-sage" />
                    <span>Outward Overseas Direct Investment (ODI) Structuring</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'corporate' && (
              <div className="space-y-6">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-warm-bg p-4 rounded-xl border border-border-subtle">
                    <span className="text-xs font-medium text-text-muted">Valuation Methodologies</span>
                    <p className="text-2xl font-extrabold text-forest mt-1">DCF & Relative</p>
                    <p className="text-[11px] text-sage font-semibold mt-1">SEBI & Income Tax Sec 56 compliant</p>
                  </div>

                  <div className="bg-warm-bg p-4 rounded-xl border border-border-subtle">
                    <span className="text-xs font-medium text-text-muted">M&A Due Diligence</span>
                    <p className="text-2xl font-extrabold text-forest mt-1">360° Forensic</p>
                    <p className="text-[11px] text-text-muted font-medium mt-1">Tax, legal, & accounting risk review</p>
                  </div>

                  <div className="bg-warm-bg p-4 rounded-xl border border-border-subtle">
                    <span className="text-xs font-medium text-text-muted">Capital Structuring</span>
                    <p className="text-2xl font-extrabold text-forest mt-1">Debt & Equity</p>
                    <p className="text-[11px] text-text-muted font-medium mt-1">Consortium syndication & PE advisory</p>
                  </div>
                </div>

                <div className="bg-sage-light p-4 rounded-xl border border-sage-border flex items-center justify-between">
                  <span className="text-xs font-bold text-forest">Need a formal business valuation or transaction due diligence brief?</span>
                  <button
                    onClick={onOpenConsultation}
                    className="bg-sage hover:bg-sage-hover text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-sage"
                  >
                    Request Valuation
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Footer note in console */}
          <div className="bg-warm-bg px-6 py-2.5 border-t border-border-subtle text-[11px] text-text-muted flex items-center justify-between">
            <span>* All stats are fixed firm operational benchmarks.</span>
            <span className="font-mono text-sage">CA Premesh Pinakin Dave • Managing Principal</span>
          </div>

        </div>

      </div>
    </section>
  );
};
