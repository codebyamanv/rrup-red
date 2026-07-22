import React, { useState } from 'react';
import { TrendingUp, ShieldCheck, Calculator, ArrowRight, CheckCircle2 } from 'lucide-react';

interface TreasuryDeepDiveProps {
  onOpenConsultation: () => void;
}

export const TreasuryDeepDive: React.FC<TreasuryDeepDiveProps> = ({ onOpenConsultation }) => {
  // Interactive Treasury Yield Estimator State
  const [annualFxMUSD, setAnnualFxMUSD] = useState<number>(5); // $5M USD
  const [surplusCrINR, setSurplusCrINR] = useState<number>(25); // ₹25 Cr

  // Calculation formulas
  // FX Slippage reduction approx ~0.85% on annual FX turnover
  const fxSavingsUSD = Math.round((annualFxMUSD * 1000000 * 0.0085));
  // Yield boost on surplus liquidity approx ~1.85% APY
  const yieldBoostINR = (surplusCrINR * 10000000 * 0.0185) / 100000; // in Lakhs INR

  return (
    <section id="treasury-deepdive" className="py-24 bg-sage-light/30 border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 bg-white border border-sage-border px-3.5 py-1 rounded-full text-xs font-bold text-forest uppercase tracking-wider shadow-2xs">
            <TrendingUp className="w-3.5 h-3.5 text-sage" />
            <span>Specialized Practice Feature</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest tracking-tight">
            Treasury Management & FX Risk Deep-Dive
          </h2>
          <p className="text-base text-text-muted">
            Protecting operating margins against foreign exchange volatility and maximizing yield on surplus liquid funds through institutional risk engineering.
          </p>
        </div>

        {/* Balanced Two-Panel Layout */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Treasury Architecture Snapshot */}
          <div className="lg:col-span-6 bg-white rounded-2xl p-8 border border-sage-border shadow-sm flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
                <div>
                  <h3 className="text-xl font-bold text-forest">Treasury Architecture</h3>
                  <p className="text-xs text-text-muted mt-0.5">Policy, Execution & Oversight Framework</p>
                </div>
                <div className="p-3 bg-sage-light rounded-xl border border-sage-border/60">
                  <ShieldCheck className="w-6 h-6 text-sage" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-warm-bg rounded-xl border border-border-subtle space-y-1">
                  <h4 className="text-sm font-bold text-forest flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage" />
                    Dynamic FX Hedging Policy
                  </h4>
                  <p className="text-xs text-text-muted pl-6">
                    Eliminating unhedged currency exposure through structured forward contracts, option collars, and natural net balance sheet offsetting.
                  </p>
                </div>

                <div className="p-4 bg-warm-bg rounded-xl border border-border-subtle space-y-1">
                  <h4 className="text-sm font-bold text-forest flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage" />
                    Surplus Liquidity Yield Optimization
                  </h4>
                  <p className="text-xs text-text-muted pl-6">
                    Deploying idle cash into high-safety, tax-efficient liquid debt, arbitrage, and overnight treasuries for superior risk-adjusted return.
                  </p>
                </div>

                <div className="p-4 bg-warm-bg rounded-xl border border-border-subtle space-y-1">
                  <h4 className="text-sm font-bold text-forest flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sage" />
                    Commercial Bank Card-Rate Benchmarking
                  </h4>
                  <p className="text-xs text-text-muted pl-6">
                    Auditing bank spreads on TT selling/buying rates, trade credit facility fees, and wire charges to enforce fair institutional pricing.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-text-muted">Audit & Review Frequency</span>
                <p className="text-sm font-bold text-forest">Monthly CFO Treasury Board Reviews</p>
              </div>
              <button
                onClick={onOpenConsultation}
                className="bg-forest hover:bg-forest-light text-white text-xs font-semibold px-5 py-2.5 rounded-xl transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-sage"
              >
                Schedule Treasury Audit
              </button>
            </div>
          </div>

          {/* Right Panel: Interactive Treasury Yield & FX Impact Estimator */}
          <div className="lg:col-span-6 bg-forest text-white rounded-2xl p-8 shadow-md flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-forest-border">
                <div className="flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-sage" />
                  <h3 className="text-lg font-bold text-white">Treasury Yield Impact Estimator</h3>
                </div>
                <span className="text-[11px] font-mono text-sage-muted bg-forest-light px-2.5 py-1 rounded">
                  Interactive CFO Tool
                </span>
              </div>

              {/* Sliders */}
              <div className="space-y-6 mt-6">
                
                {/* FX Exposure Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <label htmlFor="annual-fx-turnover" className="text-sage-muted font-medium cursor-pointer">
                      Annual Foreign Currency Trade Turnover
                    </label>
                    <span className="font-bold text-white font-mono">${annualFxMUSD} Million USD</span>
                  </div>
                  <input
                    id="annual-fx-turnover"
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={annualFxMUSD}
                    onChange={(e) => setAnnualFxMUSD(Number(e.target.value))}
                    className="w-full accent-sage bg-forest-light h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-text-muted">
                    <span>$1M</span>
                    <span>$25M</span>
                    <span>$50M+</span>
                  </div>
                </div>

                {/* Operating Surplus Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <label htmlFor="surplus-liquidity" className="text-sage-muted font-medium cursor-pointer">
                      Average Operating Surplus Liquidity
                    </label>
                    <span className="font-bold text-white font-mono">₹{surplusCrINR} Crore INR</span>
                  </div>
                  <input
                    id="surplus-liquidity"
                    type="range"
                    min="5"
                    max="100"
                    step="5"
                    value={surplusCrINR}
                    onChange={(e) => setSurplusCrINR(Number(e.target.value))}
                    className="w-full accent-sage bg-forest-light h-2 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-text-muted">
                    <span>₹5 Cr</span>
                    <span>₹50 Cr</span>
                    <span>₹100 Cr+</span>
                  </div>
                </div>

                {/* Estimated Output Metrics */}
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-forest-border">
                  <div className="bg-forest-light/80 p-4 rounded-xl border border-sage/30">
                    <span className="text-[11px] text-sage-muted block font-medium">Est. FX Margin Recovery</span>
                    <span className="text-xl font-extrabold text-white mt-1 block">
                      ${(fxSavingsUSD / 1000).toFixed(1)}k <span className="text-xs text-sage-muted font-normal">/yr</span>
                    </span>
                    <span className="text-[10px] text-sage-muted/80 mt-1 block">via bank rate benchmarking</span>
                  </div>

                  <div className="bg-forest-light/80 p-4 rounded-xl border border-sage/30">
                    <span className="text-[11px] text-sage-muted block font-medium">Est. Liquidity Yield Gain</span>
                    <span className="text-xl font-extrabold text-sage-muted mt-1 block">
                      ₹{yieldBoostINR.toFixed(1)} Lakhs <span className="text-xs font-normal">/yr</span>
                    </span>
                    <span className="text-[10px] text-sage-muted/80 mt-1 block">+1.85% APY over idle deposits</span>
                  </div>
                </div>

                {/* Compliance Disclaimer */}
                <p className="text-[10px] text-sage-muted/90 pt-1 leading-relaxed">
                  * Note: The calculators provided on this site are for indicative financial modeling purposes only and do not constitute formal financial, tax, or investment advice.
                </p>

              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full bg-sage hover:bg-sage-hover text-white text-sm font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sage"
            >
              <span>Request Detailed Treasury Optimization Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
