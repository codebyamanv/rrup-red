import React, { useState } from 'react';
import { FAQ_DATA } from '../data/advisoryData';
import { HelpCircle, Plus } from 'lucide-react';

interface FAQSectionProps {
  onOpenConsultation: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenConsultation }) => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-warm-bg border-b border-border-subtle">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-2 bg-sage-light border border-sage-border px-3 py-1 rounded-full text-xs font-bold text-forest uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5 text-sage" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-forest tracking-tight">
            Engagement & Advisory Clarifications
          </h2>
          <p className="text-base text-text-muted">
            Direct insights into practice governance, FEMA compliance, treasury management, and executive engagement protocols.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-sage-border shadow-2xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 focus:outline-none focus:bg-sage-light/50"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-forest">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? 'bg-forest text-white rotate-45' : 'bg-sage-light text-forest border border-sage-border'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-text-main leading-relaxed border-t border-border-subtle/60 animate-in fade-in duration-150">
                    <p>{faq.answer}</p>
                    <div className="mt-3 inline-block text-[11px] font-semibold text-sage bg-sage-light border border-sage-border px-2.5 py-0.5 rounded">
                      Category: {faq.category}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="bg-white p-6 rounded-2xl border border-sage-border flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-xs">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-forest">Have a specific cross-border or treasury query?</h3>
            <p className="text-xs text-text-muted">Speak directly with CA Premesh Pinakin Dave or our principal advisory team.</p>
          </div>
          <button
            onClick={onOpenConsultation}
            className="bg-sage hover:bg-sage-hover text-white text-xs font-semibold px-5 py-3 rounded-xl transition-colors shrink-0 focus:outline-none focus:ring-2 focus:ring-sage"
          >
            Ask a Practice Advisor
          </button>
        </div>

      </div>
    </section>
  );
};
