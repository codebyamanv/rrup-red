import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FounderStrip } from './components/FounderStrip';
import { PracticeSnapshot } from './components/PracticeSnapshot';
import { ServicesOverview } from './components/ServicesOverview';
import { TreasuryDeepDive } from './components/TreasuryDeepDive';
import { GlobalClientele } from './components/GlobalClientele';
import { FAQSection } from './components/FAQSection';
import { FinalCTABand } from './components/FinalCTABand';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { LegalModal } from './components/LegalModal';
import { AboutPage } from './components/AboutPage';
import { ServiceItem, LegalDocType } from './types';
import { FloatingContactWidget } from './components/FloatingContactWidget';

function HomePage({
  onOpenConsultation,
  onOpenLegalModal,
  selectedService,
  setSelectedService,
}: {
  onOpenConsultation: (serviceTitle?: string) => void;
  onOpenLegalModal: (doc: LegalDocType) => void;
  selectedService: ServiceItem | null;
  setSelectedService: (s: ServiceItem | null) => void;
}) {
  const navigate = useNavigate();

  const handleSelectSection = (id: string) => {
    if (id === 'about') {
      navigate('/about');
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-text-main flex flex-col font-sans selection:bg-sage selection:text-white">
      {/* 1. Navigation Header */}
      <Header
        onOpenConsultation={() => onOpenConsultation()}
        onSelectSection={handleSelectSection}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 2. Hero Section */}
        <Hero
          onOpenConsultation={() => onOpenConsultation()}
          onExploreServices={() => handleSelectSection('services')}
        />

        {/* 3. Founder Credibility Strip (Right after Hero) */}
        <FounderStrip />

        {/* 4. Practice Snapshot ("Dashboard Visual") */}
        <PracticeSnapshot
          onOpenConsultation={() => onOpenConsultation('Treasury Management')}
        />

        {/* 5. Services Overview (4 Equalized Cards) */}
        <ServicesOverview
          onSelectService={(service) => setSelectedService(service)}
          onOpenConsultation={() => onOpenConsultation()}
        />

        {/* 6. Treasury Management Deep-Dive (Two-Panel + Calculator) */}
        <TreasuryDeepDive
          onOpenConsultation={() => onOpenConsultation('Treasury Management')}
        />

        {/* 7. Global Clientele (Consolidated 8 Jurisdictions) */}
        <GlobalClientele
          onOpenConsultation={() => onOpenConsultation('Cross-Border Advisory')}
        />

        {/* 8. FAQ Section (Accordion) */}
        <FAQSection
          onOpenConsultation={() => onOpenConsultation()}
        />

        {/* 9. Final Call-To-Action Band */}
        <FinalCTABand
          onOpenConsultation={() => onOpenConsultation()}
        />
      </main>

      {/* 10. Footer */}
      <Footer
        onOpenLegalModal={(doc) => onOpenLegalModal(doc)}
        onOpenConsultation={() => onOpenConsultation()}
        onSelectSection={handleSelectSection}
      />

      {/* Interactive Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onOpenConsultation={(serviceTitle) => onOpenConsultation(serviceTitle)}
      />

      <FloatingContactWidget/>
    </div>
  );
}

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [defaultConsultationService, setDefaultConsultationService] = useState<string | undefined>(undefined);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [legalDocType, setLegalDocType] = useState<LegalDocType | null>(null);

  const handleOpenConsultation = (serviceTitle?: string) => {
    setDefaultConsultationService(serviceTitle);
    setConsultationOpen(true);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              onOpenConsultation={handleOpenConsultation}
              onOpenLegalModal={setLegalDocType}
              selectedService={selectedService}
              setSelectedService={setSelectedService}
            />
          }
        />
        <Route
          path="/about"
          element={
            <AboutPage
              onOpenConsultation={handleOpenConsultation}
              onOpenLegalModal={setLegalDocType}
            />
          }
        />
      </Routes>

      {/* Global Interactive Modals */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultService={defaultConsultationService}
      />

      <LegalModal
        docType={legalDocType}
        onClose={() => setLegalDocType(null)}
      />
    </BrowserRouter>
  );
}
