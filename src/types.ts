export interface FounderStats {
  yearsExperience: number;
  majorGroupsServed: number;
  workingCapitalManagedCr: number;
  multilateralFacilityCr: number;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  keyDeliverables: string[];
  regulatoryFocus: string[];
  idealFor: string;
}

export interface JurisdictionItem {
  code: string;
  country: string;
  flag: string;
  region: string;
  keyServices: string[];
  description: string;
  regulatoryBody: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Treasury' | 'Cross-Border' | 'Corporate Finance';
}

export interface ConsultationFormData {
  fullName: string;
  designation: string;
  companyName: string;
  email: string;
  phone: string;
  advisoryType: string;
  annualTurnover: string;
  operatingCurrencies: string[];
  message: string;
}

export type LegalDocType = 'privacy' | 'terms' | 'cookies' | 'icai';
