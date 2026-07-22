import React from 'react';
import { Link } from 'react-router-dom';
import { FOUNDER_INFO, FOUNDER_STATS } from '../data/advisoryData';
import { Header } from './Header';
import { Footer } from './Footer';
import {
  Award,
  ShieldCheck,
  Building2,
  TrendingUp,
  Briefcase,
  CheckCircle2,
  ArrowRight,
  Globe,
  Users,
  FileCheck
} from 'lucide-react';
import founderImg from '../assets/images/founder_portrait_1784710356419.jpg';

interface AboutPageProps {
  onOpenConsultation: (serviceTitle?: string) => void;
  onOpenLegalModal: (docType: any) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenConsultation, onOpenLegalModal }) => {
  return (
    <div className="min-h-screen bg-white text-text-main flex flex-col font-sans">
      <Header
        onOpenConsultation={() => onOpenConsultation()}
        onSelectSection={(id) => {
          if (id === 'hero' || id === 'services' || id === 'global-clientele' || id === 'contact') {
            window.location.href = `/#${id}`;
          }
        }}
      />

      <main className="flex-grow pt-24">
        {/* Page Header / Hero Banner */}
        <section className="bg-forest text-white py-16 sm:py-20 border-b border-forest-border relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none opacity-5">
            <div className="absolute bottom-0 left-0 w-full h-full bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] opacity-50 bg-[size:4rem_4rem]"></div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <div className="inline-flex items-center gap-2 bg-forest-light border border-sage/30 px-3.5 py-1 rounded-full text-xs font-bold text-sage-light uppercase tracking-wider">
              <Building2 className="w-4 h-4 text-sage" />
              <span>About RRUP Advisory</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl">
              Operator Led Corporate <br /> Financial Leadership  & <br /> Treasury Advisory
            </h1>
            <p className="text-base sm:text-lg text-sage-light max-w-2xl leading-relaxed">
              Founded on two decades of hands-on financial stewardship inside major Indian industrial and trading groups, RRUP Advisory delivers high-conviction CFO-level guidance and treasury optimization.
            </p>
          </div>
        </section>

        {/* Founder Leadership Detail */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12 items-start">

              {/* Profile Image & Quick Card */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative rounded-2xl overflow-hidden border-2 border-sage shadow-lg bg-warm-bg">
                  <img
                    src={founderImg}
                    alt={FOUNDER_INFO.name}
                    className="w-full h-[420px] object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-forest/90 via-forest/60 to-transparent p-6 text-white">
                    <span className="text-xs font-bold uppercase tracking-wider text-sage bg-forest/80 px-2.5 py-1 rounded border border-sage/30">
                      Founder & Managing Principal
                    </span>
                    <h2 className="text-2xl font-extrabold text-white mt-2">
                      {FOUNDER_INFO.name}
                    </h2>
                    <p className="text-xs font-semibold text-sage-light mt-0.5">
                      {FOUNDER_INFO.credentials} — {FOUNDER_INFO.qualification}
                    </p>
                  </div>
                </div>

                {/* Stat Box */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-warm-bg p-5 rounded-2xl border border-sage-border text-center">
                    <span className="text-3xl font-extrabold text-forest">{FOUNDER_STATS.yearsExperience}+ Yrs</span>
                    <p className="text-xs font-semibold text-text-muted mt-1">Corporate Finance & Treasury</p>
                  </div>
                  <div className="bg-warm-bg p-5 rounded-2xl border border-sage-border text-center">
                    <span className="text-3xl font-extrabold text-forest">{FOUNDER_STATS.majorGroupsServed} Major</span>
                    <p className="text-xs font-semibold text-text-muted mt-1">Industrial & Trading Groups</p>
                  </div>
                  <div className="bg-warm-bg p-5 rounded-2xl border border-sage-border text-center">
                    <span className="text-3xl font-extrabold text-forest">₹{FOUNDER_STATS.workingCapitalManagedCr} Cr</span>
                    <p className="text-xs font-semibold text-text-muted mt-1">Working Capital Consortium</p>
                  </div>
                  <div className="bg-warm-bg p-5 rounded-2xl border border-sage-border text-center">
                    <span className="text-3xl font-extrabold text-forest">₹{FOUNDER_STATS.multilateralFacilityCr} Cr</span>
                    <p className="text-xs font-semibold text-text-muted mt-1">IFC Multilateral Debt Facility</p>
                  </div>
                </div>
              </div>

              {/* Founder Narrative */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sage mb-2">
                    <Award className="w-4 h-4" />
                    <span>Executive Background & Expertise</span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-forest tracking-tight">
                    An Operator's Perspective on Corporate Financial Strategy
                  </h2>
                </div>

                <div className="prose text-text-main text-sm sm:text-base space-y-4 leading-relaxed">
                  <p>
                    <strong>Premesh Pinakin Dave</strong> qualified as a Chartered Accountant in May 2002 (ICAI) and holds a Bachelor of Commerce degree. Over two decades, Premesh has directed corporate finance, multi-currency treasury operations, FX risk management, and banking syndication from inside large Indian enterprises and multinational-linked industrial groups.
                  </p>
                  <p>
                    Having served in senior finance and treasury leadership roles across <strong>RPG Group (CEAT)</strong>, <strong>Essar Group (AGC Networks)</strong>, <strong>Arshiya Group</strong>, <strong>VVF India Ltd</strong>, and <strong>ETC Agro Processing</strong>, Premesh brings practical, battle-tested execution experience to every advisory engagement.
                  </p>
                  <p>
                    Rather than providing theoretical advisory from the outside, RRUP Advisory translates deep internal operating experience into structured capital strategies, multi-bank consortium management, FX hedging frameworks, and operational FEMA/RBI compliance.
                  </p>
                </div>

                {/* Key Career Highlights */}
                <div className="space-y-4 pt-4 border-t border-border-subtle">
                  <h3 className="text-lg font-bold text-forest">Key Career Track Record</h3>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-warm-bg p-4 rounded-xl border border-border-subtle space-y-1">
                      <div className="flex items-center gap-2 text-sm font-bold text-forest">
                        <CheckCircle2 className="w-4 h-4 text-sage" />
                        <span>Working Capital Consortium</span>
                      </div>
                      <p className="text-xs text-text-muted pl-6">
                        Managed a ₹600 Cr working capital facility across a 6-bank consortium, optimizing interest costs and credit line utilization.
                      </p>
                    </div>

                    <div className="bg-warm-bg p-4 rounded-xl border border-border-subtle space-y-1">
                      <div className="flex items-center gap-2 text-sm font-bold text-forest">
                        <CheckCircle2 className="w-4 h-4 text-sage" />
                        <span>Multilateral DFI Funding</span>
                      </div>
                      <p className="text-xs text-text-muted pl-6">
                        Secured and serviced a ₹160 Cr long-term debt facility from the International Finance Corporation (IFC / World Bank Group).
                      </p>
                    </div>

                    <div className="bg-warm-bg p-4 rounded-xl border border-border-subtle space-y-1">
                      <div className="flex items-center gap-2 text-sm font-bold text-forest">
                        <CheckCircle2 className="w-4 h-4 text-sage" />
                        <span>Trade Finance & FX Hedging</span>
                      </div>
                      <p className="text-xs text-text-muted pl-6">
                        Engineered multi-currency FX risk policies, buyers credit lines, LC/BG facilities, and warehouse receipt financing.
                      </p>
                    </div>

                    <div className="bg-warm-bg p-4 rounded-xl border border-border-subtle space-y-1">
                      <div className="flex items-center gap-2 text-sm font-bold text-forest">
                        <CheckCircle2 className="w-4 h-4 text-sage" />
                        <span>Cross-Border FEMA & RBI</span>
                      </div>
                      <p className="text-xs text-text-muted pl-6">
                        Led operational FEMA filings, EDPMS/IDPMS/e-BRC closure routines, and foreign remittance regulatory compliance.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Firm Model & Partner Network Statement */}
                <div className="bg-sage-light p-6 rounded-2xl border border-sage-border space-y-3">
                  <div className="flex items-center gap-2 text-sm font-bold text-forest">
                    <Users className="w-5 h-5 text-sage" />
                    <span>RRUP Advisory Structure & Specialist Partner Network</span>
                  </div>
                  <p className="text-xs text-text-muted leading-relaxed">
                    RRUP Advisory is a registered corporate advisory and financial consultancy company. While firm leadership includes Chartered Accountants who uphold strict professional ethics, RRUP operates as an independent consultancy and not as an ICAI-regulated practicing unit. For transaction advisory requiring specialized M&A due diligence, equity valuation, transfer pricing documentation, or international tax structuring, RRUP collaborates with a curated network of domain specialist partners.
                  </p>
                </div>

                {/* Consultation Call to Action */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                  <button
                    onClick={() => onOpenConsultation()}
                    className="w-full sm:w-auto bg-sage hover:bg-sage-hover text-white text-sm font-semibold px-8 py-3.5 rounded-xl transition-all shadow-xs flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-sage"
                  >
                    <span>Schedule Advisory Consultation</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <Link
                    to="/"
                    className="w-full sm:w-auto text-center text-sm font-semibold text-forest hover:text-sage px-6 py-3.5 rounded-xl border border-border-subtle hover:border-sage-border transition-colors"
                  >
                    Return to Main Portal
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer
        onOpenLegalModal={onOpenLegalModal}
        onOpenConsultation={() => onOpenConsultation()}
        onSelectSection={(id) => {
          window.location.href = `/#${id}`;
        }}
      />
    </div>
  );
};
