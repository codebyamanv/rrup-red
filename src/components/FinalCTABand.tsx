import React from 'react';
import { ArrowUpRight, MessageSquare, Mail, ShieldCheck } from 'lucide-react';

interface FinalCTABandProps {
  onOpenConsultation: () => void;
}

export const FinalCTABand: React.FC<FinalCTABandProps> = ({ onOpenConsultation }) => {
  return (
    <section id="contact" className="py-20  relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[radial-gradient(#7A2E2E_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-forest border border-sage/30 rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-2xl">
          
          {/* Left Text */}
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-forest border border-sage/40 px-3.5 py-1 rounded-full text-xs font-bold text-sage-muted uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-sage" />
              <span>Initiate Executive Relationship</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Ready to Optimize Corporate Treasury & Navigating Cross-Border Growth?
            </h2>

            <p className="text-sm sm:text-base text-sage-light leading-relaxed">
              Schedule a confidential initial advisory session with CA Premesh Pinakin Dave to review your foreign exchange risk, capital structure, or cross-border regulatory requirements.
            </p>
          </div>

          {/* Right Action Options */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 shrink-0 w-full lg:w-auto">
            <button
              onClick={onOpenConsultation}
              className="w-full bg-sage hover:bg-sage-hover text-white text-base font-semibold px-8 py-4 rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg active:scale-98 focus:outline-none focus:ring-2 focus:ring-sage"
            >
              <span>Book Executive Consultation</span>
              <ArrowUpRight className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-2 gap-3">
              <a
                href="https://wa.me/919820000000?text=Hello%20RRUP%20Advisory,%20I%20would%20like%20to%20schedule%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-forest hover:bg-forest-light text-white text-xs font-semibold px-4 py-3 rounded-xl border border-sage/30 transition-colors focus:outline-none"
              >
                <MessageSquare className="w-4 h-4 text-sage-muted" />
                <span>WhatsApp Desk</span>
              </a>

              <a
                href="mailto:contact@rrupadvisory.com"
                className="flex items-center justify-center gap-2 bg-forest hover:bg-forest-light text-white text-xs font-semibold px-4 py-3 rounded-xl border border-sage/30 transition-colors focus:outline-none"
              >
                <Mail className="w-4 h-4 text-sage-muted" />
                <span>Email Advisory</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
