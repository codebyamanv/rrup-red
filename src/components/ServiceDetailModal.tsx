import React, { useEffect, useRef } from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, ArrowRight, Layers } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenConsultation: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({ service, onClose, onOpenConsultation }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (service) {
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
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-sage-border shadow-2xl relative p-6 sm:p-8 space-y-6"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-text-muted hover:text-forest hover:bg-warm-bg transition-colors focus:outline-none focus:ring-2 focus:ring-sage"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 border-b border-border-subtle pb-5">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sage bg-sage-light border border-sage-border px-2.5 py-1 rounded">
            <span>Practice Area Deep-Dive</span>
          </div>
          <h2 id="service-modal-title" className="text-2xl sm:text-3xl font-extrabold text-forest">
            {service.title}
          </h2>
          <p className="text-sm text-text-muted">
            {service.shortDesc}
          </p>
        </div>

        {/* Detailed Description */}
        <div className="space-y-4">
          <h3 className="text-sm font-bold uppercase tracking-wider text-forest flex items-center gap-2">
            <Layers className="w-4 h-4 text-sage" />
            <span>Strategic Scope & Practice Methodology</span>
          </h3>
          <p className="text-sm text-text-main leading-relaxed bg-warm-bg p-5 rounded-xl border border-border-subtle">
            {service.fullDesc}
          </p>
        </div>

        {/* Deliverables Checklist */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-forest">
            Core Engagement Deliverables:
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {service.keyDeliverables.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 bg-sage-light/80 p-3 rounded-xl border border-sage-border text-xs text-forest">
                <CheckCircle2 className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                <span className="font-semibold">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Statutory & Ideal Profile */}
        <div className="grid sm:grid-cols-2 gap-4 pt-2">
          <div className="bg-warm-bg p-4 rounded-xl border border-border-subtle space-y-1">
            <span className="text-[11px] font-bold text-text-muted uppercase">Regulatory Governance:</span>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {service.regulatoryFocus.map((reg, idx) => (
                <span key={idx} className="text-[11px] font-semibold text-forest bg-white px-2 py-1 rounded border border-border-subtle">
                  {reg}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-warm-bg p-4 rounded-xl border border-border-subtle space-y-1">
            <span className="text-[11px] font-bold text-text-muted uppercase">Target Profile:</span>
            <p className="text-xs font-semibold text-forest pt-1">
              {service.idealFor}
            </p>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="pt-4 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-text-muted">
            Led by <span className="font-bold text-forest">CA Premesh Pinakin Dave (FCA)</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenConsultation(service.title);
            }}
            className="w-full sm:w-auto bg-sage hover:bg-sage-hover text-white text-sm font-semibold px-6 py-3 rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-sage"
          >
            <span>Initiate {service.title} Engagement</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
