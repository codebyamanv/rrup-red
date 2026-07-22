import React, { useState, useEffect, useRef } from 'react';
import { ConsultationFormData } from '../types';
import { X, CheckCircle2, ShieldCheck, ArrowRight, AlertCircle } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose, defaultService }) => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    fullName: '',
    designation: '',
    companyName: '',
    email: '',
    phone: '',
    advisoryType: defaultService || 'Treasury Management',
    annualTurnover: '₹50 Cr - ₹250 Cr',
    operatingCurrencies: ['INR', 'USD'],
    message: '',
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Focus trap, escape listener, and body scroll lock
  useEffect(() => {
    if (isOpen) {
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

      // Focus first input or button inside modal
      setTimeout(() => {
        if (modalRef.current) {
          const firstInput = modalRef.current.querySelector<HTMLElement>('input, button');
          firstInput?.focus();
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const endpoint = import.meta.env.VITE_CONSULTATION_ENDPOINT || '/api/consultation';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => null);
        throw new Error(errData?.message || `Submission returned status ${response.status}`);
      }

      const data = await response.json().catch(() => ({}));
      const refId = data.refId || `RRUP-CONS-2026-${Math.floor(1000 + Math.random() * 9000)}`;
      setSubmittedRef(refId);
    } catch (err: any) {
      // If endpoint is unmapped or offline, show clear failure state as required
      setErrorMessage(
        err?.message || 'Unable to submit request right now. Please verify your details or contact us directly at contact@rrupadvisory.com.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCurrencyToggle = (curr: string) => {
    if (formData.operatingCurrencies.includes(curr)) {
      setFormData({
        ...formData,
        operatingCurrencies: formData.operatingCurrencies.filter((c) => c !== curr),
      });
    } else {
      setFormData({
        ...formData,
        operatingCurrencies: [...formData.operatingCurrencies, curr],
      });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="consultation-modal-title"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-sage-border shadow-2xl relative p-6 sm:p-8"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-text-muted hover:text-forest hover:bg-warm-bg transition-colors focus:outline-none focus:ring-2 focus:ring-sage"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedRef ? (
          /* Confirmation Screen */
          <div className="space-y-6 text-center py-6">
            <div className="w-16 h-16 rounded-2xl bg-sage-light border border-sage-border text-sage flex items-center justify-center mx-auto shadow-sm">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-sage bg-sage-light border border-sage-border px-3 py-1 rounded-full font-bold">
                Reference ID: {submittedRef}
              </span>
              <h2 id="consultation-modal-title" className="text-2xl font-bold text-forest">
                Consultation Requested
              </h2>
              <p className="text-sm text-text-muted max-w-md mx-auto">
                Thank you, <span className="font-semibold text-forest">{formData.fullName}</span>. Your consultation request for{' '}
                <span className="font-semibold text-forest">{formData.companyName}</span> has been received by CA Premesh Pinakin Dave's executive desk.
              </p>
            </div>

            <div className="bg-warm-bg p-5 rounded-xl border border-border-subtle text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex items-center justify-between">
                <span className="text-text-muted">Advisory Focus:</span>
                <span className="font-bold text-forest">{formData.advisoryType}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-muted">Contact Email:</span>
                <span className="font-bold text-forest">{formData.email}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-muted">Next Action:</span>
                <span className="font-bold text-sage">Conflict Check & Pre-session NDA</span>
              </div>
            </div>

            <p className="text-xs text-text-muted">
              A senior advisory associate will reach out within 4 business hours to finalize meeting coordinates.
            </p>

            <button
              onClick={onClose}
              className="bg-forest hover:bg-forest-light text-white text-sm font-semibold px-8 py-3 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-sage"
            >
              Return to Website
            </button>
          </div>
        ) : (
          /* Consultation Request Form */
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sage mb-1">
                <ShieldCheck className="w-4 h-4" />
                <span>Executive Engagement Portal</span>
              </div>
              <h2 id="consultation-modal-title" className="text-2xl font-bold text-forest">
                Schedule Advisory Consultation
              </h2>
              <p className="text-xs text-text-muted mt-1">
                Confidential financial stewardship with CA Premesh Pinakin Dave & senior Partners.
              </p>
            </div>

            {errorMessage && (
              <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-start gap-2.5">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">Submission Notice</p>
                  <p className="mt-0.5 leading-relaxed">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-fullname" className="block text-xs font-bold text-forest mb-1">
                    Full Name *
                  </label>
                  <input
                    id="modal-fullname"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-border-subtle focus:border-sage focus:ring-1 focus:ring-sage outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="modal-designation" className="block text-xs font-bold text-forest mb-1">
                    Designation / Title *
                  </label>
                  <input
                    id="modal-designation"
                    type="text"
                    required
                    value={formData.designation}
                    onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                    placeholder="e.g. Chief Financial Officer / Managing Director"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-border-subtle focus:border-sage focus:ring-1 focus:ring-sage outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-company" className="block text-xs font-bold text-forest mb-1">
                    Company / Enterprise Name *
                  </label>
                  <input
                    id="modal-company"
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Apex Global Industries Pvt Ltd"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-border-subtle focus:border-sage focus:ring-1 focus:ring-sage outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="modal-email" className="block text-xs font-bold text-forest mb-1">
                    Official Email Address *
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="r.sharma@apexglobal.com"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-border-subtle focus:border-sage focus:ring-1 focus:ring-sage outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-bold text-forest mb-1">
                    Mobile / Phone Number *
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98200 12345"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-border-subtle focus:border-sage focus:ring-1 focus:ring-sage outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="modal-advisory" className="block text-xs font-bold text-forest mb-1">
                    Primary Advisory Area *
                  </label>
                  <select
                    id="modal-advisory"
                    value={formData.advisoryType}
                    onChange={(e) => setFormData({ ...formData, advisoryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-border-subtle focus:border-sage focus:ring-1 focus:ring-sage outline-none bg-white"
                  >
                    <option value="Treasury Management">Treasury Management & FX Hedging</option>
                    <option value="Cross-Border & FEMA">International Advisory & FEMA</option>
                    <option value="Corporate Finance">Corporate Finance & M&A</option>
                    <option value="Strategic Advisory">Strategic Advisory & Virtual CFO</option>
                  </select>
                </div>
              </div>

              {/* Operating Currencies */}
              <div>
                <label className="block text-xs font-bold text-forest mb-1.5">
                  Operating Currencies (Select all applicable)
                </label>
                <div className="flex flex-wrap gap-2">
                  {['INR', 'USD', 'EUR', 'GBP', 'AED', 'SGD'].map((curr) => {
                    const isChecked = formData.operatingCurrencies.includes(curr);
                    return (
                      <button
                        type="button"
                        key={curr}
                        onClick={() => handleCurrencyToggle(curr)}
                        className={`px-3 py-1.5 text-xs font-bold rounded-lg border transition-colors ${
                          isChecked
                            ? 'bg-forest text-white border-forest'
                            : 'bg-warm-bg text-text-muted border-border-subtle hover:border-sage'
                        }`}
                      >
                        {curr}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <label htmlFor="modal-message" className="block text-xs font-bold text-forest mb-1">
                  Brief Overview of Requirements
                </label>
                <textarea
                  id="modal-message"
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="e.g. Seeking FX hedging strategy for $10M annual import exposure and FEMA compliance for UAE subsidiary."
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-border-subtle focus:border-sage focus:ring-1 focus:ring-sage outline-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-sage hover:bg-sage-hover text-white text-base font-semibold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 focus:outline-none focus:ring-2 focus:ring-sage"
                >
                  {isSubmitting ? (
                    <span>Processing Consultation Request...</span>
                  ) : (
                    <>
                      <span>Submit Consultation Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-text-muted text-center">
                🔒 All information is held strictly confidential under professional non-disclosure standards.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
