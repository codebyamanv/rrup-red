import React from 'react';
import { LegalDocType } from '../types';
import { ShieldCheck, MapPin, Mail, Phone, Lock, Award, Globe } from 'lucide-react';
import { JURISDICTIONS_DATA } from '../data/advisoryData';

interface FooterProps {
  onOpenLegalModal: (doc: LegalDocType) => void;
  onOpenConsultation: () => void;
  onSelectSection: (id: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalModal, onOpenConsultation, onSelectSection }) => {
  return (
    <footer className="bg-forest-dark text-sage-light border-t border-forest-border pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Top Trust Badges Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pb-10 border-b border-forest-border">
          <div className="flex items-center gap-3 bg-forest p-3.5 rounded-xl border border-forest-border">
            <ShieldCheck className="w-5 h-5 text-sage-muted shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">ICAI Registered</p>
              <p className="text-[10px] text-sage-muted">Fellow Chartered Accountant</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-forest p-3.5 rounded-xl border border-forest-border">
            <Lock className="w-5 h-5 text-sage-muted shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Data Confidentiality</p>
              <p className="text-[10px] text-sage-muted">AES-256 Client Shield</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-forest p-3.5 rounded-xl border border-forest-border">
            <Award className="w-5 h-5 text-sage-muted shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">20+ Years Excellence</p>
              <p className="text-[10px] text-sage-muted">CA Premesh Dave Leadership</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-forest p-3.5 rounded-xl border border-forest-border">
            <Globe className="w-5 h-5 text-sage-muted shrink-0" />
            <div>
              <p className="text-xs font-bold text-white">Global Practice</p>
              <p className="text-[10px] text-sage-muted">{JURISDICTIONS_DATA.length} Served Jurisdictions</p>
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Col 1: Firm Blurb */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-4">

            <div className="w-18 aspect-square p-2 rounded-full flex items-center justify-center font-bold text-lg bg-white ">
              <img src="/logo.png" alt=""  />
              </div>
              <div className='font-bold text-2xl'>RRUP Advisory Pvt. Ltd.</div>
            </div>

            <p className="text-xs text-footer-muted leading-relaxed max-w-sm">
              Premier Chartered Accountancy and financial stewardship firm led by CA Premesh Pinakin Dave (FCA). Specializing in corporate finance, multi-currency treasury risk, FEMA regulatory compliance, and cross-border M&A advisory.
            </p>

            <div className="pt-2 space-y-2 text-xs text-footer-muted">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-sage-muted shrink-0 mt-0.5" />
                <span>Executive Office: BKC Financial Centre, Bandra East, Mumbai, Maharashtra 400051, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-sage-muted shrink-0" />
                <a href="mailto:contact@rrupadvisory.com" className="hover:text-white transition-colors">
                  contact@rrupadvisory.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-sage-muted shrink-0" />
                <span>+91 22 2650 0000 / +91 98200 00000</span>
              </div>
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Practice Areas</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onSelectSection('services')} className="text-footer-muted hover:text-white transition-colors">
                  Strategic Advisory
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('treasury-deepdive')} className="text-footer-muted hover:text-white transition-colors">
                  Treasury Management
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('services')} className="text-footer-muted hover:text-white transition-colors">
                  Corporate Finance & M&A
                </button>
              </li>
              <li>
                <button onClick={() => onSelectSection('global-clientele')} className="text-footer-muted hover:text-white transition-colors">
                  Cross-Border & FEMA
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Global Corridors */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Global Jurisdictions</h3>
            <ul className="space-y-2 text-xs text-footer-muted">
              <li>India (Mumbai HQ)</li>
              <li>United States (Delaware / NY)</li>
              <li>United Kingdom (London)</li>
              <li>UAE (DIFC / ADGM)</li>
              <li>Singapore & EU (DE / FR)</li>
            </ul>
          </div>

          {/* Col 4: Real Legal Docs */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white">Governance & Legal</h3>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onOpenLegalModal('privacy')}
                  className="text-footer-muted hover:text-sage-muted transition-colors text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('terms')}
                  className="text-footer-muted hover:text-sage-muted transition-colors text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('cookies')}
                  className="text-footer-muted hover:text-sage-muted transition-colors text-left"
                >
                  Cookie Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenLegalModal('icai')}
                  className="text-footer-muted hover:text-sage-muted transition-colors text-left"
                >
                  ICAI Regulatory Disclosure
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights Bar */}
        <div className="pt-8 border-t border-forest-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-sage-muted">
          <p>© {new Date().getFullYear()} RRUP Advisory & Associates. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <button
              onClick={() => onOpenLegalModal('icai')}
              className="hover:text-white transition-colors"
            >
              ICAI Member Standards
            </button>
            <span>•</span>
            <button
              onClick={onOpenConsultation}
              className="hover:text-white transition-colors"
            >
              Executive Desk
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
