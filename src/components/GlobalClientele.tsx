import React, { useState } from 'react';
import { JURISDICTIONS_DATA } from '../data/advisoryData';
import { Globe2, ShieldCheck, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface GlobalClienteleProps {
  onOpenConsultation: () => void;
}

export const GlobalClientele: React.FC<GlobalClienteleProps> = ({ onOpenConsultation }) => {
  const [selectedCode, setSelectedCode] = useState<string>('IN');

  const selectedJurisdiction = JURISDICTIONS_DATA.find((j) => j.code === selectedCode) || JURISDICTIONS_DATA[0];

  return (
    <section id="global-clientele" className="py-24 bg-white border-b border-border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border-subtle pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-sage-light border border-sage-border px-3 py-1 rounded-full text-xs font-bold text-forest uppercase tracking-wider">
              <Globe2 className="w-3.5 h-3.5 text-sage" />
              <span>Consolidated Global Reach</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-forest tracking-tight">
              {JURISDICTIONS_DATA.length} Primary Jurisdictions & Cross-Border Corridors
            </h2>
            <p className="text-base text-text-muted">
              Authoritative financial advisory supporting Indian corporates expanding abroad and foreign multinationals operating in India.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-forest bg-sage-light px-4 py-2.5 rounded-xl border border-sage-border">
            <ShieldCheck className="w-4 h-4 text-sage" />
            <span>FEMA & DTAA Compliant Practice</span>
          </div>
        </div>

        {/* Interactive Jurisdictions Selector */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Country Pill Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {JURISDICTIONS_DATA.map((item) => {
              const isSelected = item.code === selectedCode;
              return (
                <button
                  key={item.code}
                  onClick={() => setSelectedCode(item.code)}
                  className={`p-4 rounded-xl border text-left transition-all flex flex-col justify-between h-28 focus:outline-none focus:ring-2 focus:ring-sage ${
                    isSelected
                      ? 'bg-forest text-white border-forest shadow-md scale-[1.02]'
                      : 'bg-warm-bg hover:bg-sage-light text-text-main border-border-subtle'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl" role="img" aria-label={`${item.country} Flag`}>{item.flag}</span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                      isSelected ? 'bg-forest-light text-sage-muted' : 'bg-border-subtle text-text-muted'
                    }`}>
                      {item.code}
                    </span>
                  </div>

                  <div>
                    <h3 className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-forest'}`}>
                      {item.country}
                    </h3>
                    <p className={`text-[11px] truncate ${isSelected ? 'text-sage-muted' : 'text-text-muted'}`}>
                      {item.region}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Selected Jurisdiction Detail Panel */}
          <div className="lg:col-span-5 bg-warm-bg rounded-2xl p-7 border border-sage-border shadow-2xs space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-border-subtle">
              <div className="flex items-center gap-3">
                <span className="text-3xl" role="img" aria-label={selectedJurisdiction.country}>{selectedJurisdiction.flag}</span>
                <div>
                  <h3 className="text-xl font-bold text-forest">{selectedJurisdiction.country}</h3>
                  <p className="text-xs text-text-muted font-medium">{selectedJurisdiction.region}</p>
                </div>
              </div>
              <span className="text-xs font-mono text-sage bg-white border border-sage-border px-2.5 py-1 rounded-md font-semibold">
                {selectedJurisdiction.regulatoryBody}
              </span>
            </div>

            <p className="text-sm text-text-main leading-relaxed">
              {selectedJurisdiction.description}
            </p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-forest">Specialized Jurisdiction Capabilities:</h4>
              <div className="space-y-2">
                {selectedJurisdiction.keyServices.map((service, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-text-main bg-white p-2.5 rounded-lg border border-border-subtle">
                    <CheckCircle2 className="w-4 h-4 text-sage shrink-0" />
                    <span className="font-semibold">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-border-subtle">
              <button
                onClick={onOpenConsultation}
                className="w-full bg-sage hover:bg-sage-hover text-white text-xs font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-sage"
              >
                <span>Consult on {selectedJurisdiction.country} Operations</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
