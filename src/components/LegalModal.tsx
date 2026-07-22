import React, { useEffect, useRef } from 'react';
import { LegalDocType } from '../types';
import { LEGAL_TEXTS } from '../data/advisoryData';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  docType: LegalDocType | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ docType, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (docType) {
      previousActiveElement.current = document.activeElement as HTMLElement;
      document.body.style.overflow = 'hidden';

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          onClose();
        }

        if (e.key === 'Tab' && modalRef.current) {
          const focusables = modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusables.length === 0) return;

          const firstElement = focusables[0];
          const lastElement = focusables[focusables.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              lastElement.focus();
              e.preventDefault();
            }
          } else {
            if (document.activeElement === lastElement) {
              firstElement.focus();
              e.preventDefault();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      setTimeout(() => {
        if (modalRef.current) {
          const firstButton = modalRef.current.querySelector<HTMLElement>('button');
          firstButton?.focus();
        }
      }, 50);

      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
        if (previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
      };
    }
  }, [docType, onClose]);

  if (!docType) return null;

  const doc = LEGAL_TEXTS[docType] || LEGAL_TEXTS.privacy;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto border border-sage-border shadow-2xl relative p-6 sm:p-8 space-y-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-text-muted hover:text-forest hover:bg-warm-bg transition-colors focus:outline-none focus:ring-2 focus:ring-sage"
          aria-label="Close legal modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="space-y-1 border-b border-border-subtle pb-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sage">
            <ShieldCheck className="w-4 h-4" />
            <span>Governance & Legal Compliance</span>
          </div>
          <h2 id="legal-modal-title" className="text-2xl font-bold text-forest">
            {doc.title}
          </h2>
          <p className="text-xs text-text-muted">Last Updated: {doc.lastUpdated} • RRUP Advisory & Associates</p>
        </div>

        {/* Body Text */}
        <div className="prose prose-sm max-w-none text-xs text-text-main leading-relaxed whitespace-pre-line bg-warm-bg p-6 rounded-xl border border-border-subtle">
          {doc.content}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-border-subtle flex justify-between items-center text-xs text-text-muted">
          <span>ICAI Registered Chartered Accountancy Practice</span>
          <button
            onClick={onClose}
            className="bg-forest hover:bg-forest-light text-white font-semibold px-5 py-2 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-sage"
          >
            Close Document
          </button>
        </div>
      </div>
    </div>
  );
};
