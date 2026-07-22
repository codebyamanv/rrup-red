import { FounderStats, ServiceItem, JurisdictionItem, FAQItem } from '../types';

export const FOUNDER_STATS: FounderStats = {
  yearsExperience: 20,
  majorGroupsServed: 5,
  workingCapitalManagedCr: 600,
  multilateralFacilityCr: 160,
};

export const FOUNDER_INFO = {
  name: 'CA Premesh Pinakin Dave',
  credentials: 'B.Com, CA',
  title: 'Founder & Managing Principal',
  qualification: 'Chartered Accountant (Qualified May 2002), Institute of Chartered Accountants of India (ICAI)',
  bio: 'Two decades of hands-on financial leadership running treasury and corporate finance functions inside major Indian and multinational-linked industrial groups, including RPG, Essar, Arshiya, VVF, and ETC Agro.',
  quote: 'The work environment must be one where people work without fear, within a culture that encourages pride in both personal and organisational accomplishment.',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'strategic-advisory',
    title: 'Strategic Advisory',
    shortDesc: 'Financial leadership perspective for boards and promoters, shaped by two decades running the finance and treasury function inside large Indian and multinational-linked enterprises.',
    fullDesc: 'Having led treasury and finance functions from the inside — reporting directly to CFOs across major industrial groups — Premesh Pinakin Dave brings an operator\'s perspective to strategic advisory: capital structure decisions and risk governance frameworks built around what actually gets implemented, not just recommended. For mandates requiring specialised restructuring, solvency, or family-office structuring expertise, RRUP extends this capability through a curated network of specialist partners.',
    iconName: 'Compass',
    keyDeliverables: [
      'Capital Structure & Liquidity Strategy, Grounded in Operating Experience',
      'Internal Control & Risk Governance Framework Design',
      'CFO-Level Advisory for Promoters & Growth-Stage Enterprises',
      'Business Restructuring & Solvency Advisory (via RRUP\'s Specialist Partner Network)',
      'Promoter & Family Office Financial Structuring (via RRUP\'s Specialist Partner Network)'
    ],
    regulatoryFocus: ['Companies Act 2013', 'SEBI (LODR) Regulations', 'Ind AS / Valuation Standards'],
    idealFor: 'Promoters and boards seeking treasury-literate strategic financial guidance, with specialist support available for restructuring and family-office mandates.'
  },
  {
    id: 'treasury-management',
    title: 'Treasury Management',
    shortDesc: 'Multi-bank cash and liquidity management, FX hedging, and structured trade finance, built on two decades running treasury desks for large Indian manufacturing and trading groups.',
    fullDesc: 'Two decades of hands-on treasury operations — not advisory from the outside — across multiple listed and institutionally-funded Indian corporates. RRUP designs FX hedging policy, negotiates banking consortium terms, and deploys surplus liquidity into short-term instruments, drawing on direct experience managing multi-bank facilities and daily FX exposure at the operating-company level.',
    iconName: 'TrendingUp',
    keyDeliverables: [
      'Daily Cash Flow Monitoring & Multi-Bank Liquidity Management',
      'FX Hedging Policy: Forward Contracts, Premium/Discount & Cross-Currency Analysis',
      'LC / BG / Buyers Credit & Structured Trade Finance (WHR Loans, Third-Party Funding)',
      'Banking Consortium Negotiation: Interest Rates, Processing Fees & Credit Lines',
      'Surplus Liquidity Deployment (Liquid Funds, FMPs, Short-Term Instruments)'
    ],
    regulatoryFocus: ['RBI Master Directions on Risk Management', 'FEDAI / UCPDC 600 Guidelines', 'FEMA Import-Export Regulations'],
    idealFor: 'Manufacturing, agro-processing, and trading companies with significant import/export exposure and multi-bank credit facilities.'
  },
  {
    id: 'corporate-finance',
    title: 'Corporate Finance',
    shortDesc: 'Debt-side corporate and project finance — term loans, working capital syndication, and financial modelling — extended to M&A and transaction advisory through RRUP\'s partner network.',
    fullDesc: 'Direct experience raising and servicing large-ticket institutional debt, including a multilateral IFC/World Bank Group facility, financial modelling, and lending-ratio analysis forms the core of RRUP\'s corporate finance practice. For equity transactions, valuation, and M&A due diligence, RRUP works alongside specialist transaction advisory partners to deliver full-scope support.',
    iconName: 'Briefcase',
    keyDeliverables: [
      'Term Loan & Working Capital Syndication, Including DFI/Multilateral Facilities',
      'Financial Modelling: Cash Flow Projections, IRR/NPV & Key Lending Ratios (DSCR, DER, FACR)',
      'Project Information Memorandum & TEV Study Coordination',
      'Credit Rating Agency Liaison & Annual Review',
      'M&A Due Diligence & Business Valuation (via RRUP\'s Specialist Partner Network)'
    ],
    regulatoryFocus: ['RBI Project Finance Norms', 'Companies Act / ROC Charge Filing', 'SEBI Substantial Acquisition Rules (Partner-Supported Mandates)'],
    idealFor: 'Companies raising term loans, project or DFI-linked debt, and — through RRUP\'s partner network — those pursuing M&A or institutional capital raising.'
  },
  {
    id: 'international-advisory',
    title: 'International Advisory',
    shortDesc: 'Operational FEMA and RBI compliance for cross-border trade and remittances, extended to transfer pricing and DTAA structuring through RRUP\'s specialist advisory partners.',
    fullDesc: 'Years of closing FEMA filings and RBI reporting from inside a corporate treasury desk — import/export declarations, foreign remittance compliance, EDPMS/IDPMS/e-BRC closure — form RRUP\'s core cross-border compliance practice. For transfer pricing documentation, DTAA optimisation, and overseas entity structuring, RRUP partners with specialist international tax advisors to deliver complete cross-border support.',
    iconName: 'Globe',
    keyDeliverables: [
      'Import/Export FEMA Declarations & RBI Reporting',
      'Foreign Remittance & Buyers/Suppliers Credit Compliance',
      'EDPMS / IDPMS / e-BRC Closure & Reconciliation',
      'Transfer Pricing Documentation & Benchmarking (via RRUP\'s Specialist Partner Network)',
      'DTAA Optimisation & Overseas Entity Structuring (via RRUP\'s Specialist Partner Network)'
    ],
    regulatoryFocus: ['FEMA 1999', 'RBI Master Directions (Import/Export of Goods & Services)', 'OECD BEPS Standards (Partner-Supported Mandates)'],
    idealFor: 'Import/export-intensive businesses needing operational FEMA/RBI compliance, with specialist support available for multi-jurisdiction tax structuring.'
  }
];

export const JURISDICTIONS_DATA: JurisdictionItem[] = [
  {
    code: 'IN',
    country: 'India',
    flag: '🇮🇳',
    region: 'Headquarters & Domestic Hub',
    keyServices: ['FEMA Compliance', 'Corporate Restructuring', 'Treasury Operations', 'Direct & Indirect Tax'],
    description: 'Central operational hub in Mumbai servicing enterprise leaders across Delhi NCR, Bengaluru, Hyderabad, and Gujarat.',
    regulatoryBody: 'ICAI / RBI / SEBI / CBDT'
  },
  {
    code: 'US',
    country: 'United States',
    flag: '🇺🇸',
    region: 'North America',
    keyServices: ['US-India Cross-Border Tax', 'Delaware Entity Setup', 'Transfer Pricing', 'FDAP Withholding'],
    description: 'Advising Indian IT tech services and pharma companies expanding into US markets and handling US holding structures.',
    regulatoryBody: 'IRS / US Treasury / FinCEN'
  },
  {
    code: 'UK',
    country: 'United Kingdom',
    flag: '🇬🇧',
    region: 'Europe & UK',
    keyServices: ['UK Subsidiary Structuring', 'HMRC DTAA Relief', 'Branch Compliance', 'Treasury Risk'],
    description: 'Strategic advisory for UK-India trade corridors, UK establishment, and cross-border remittance planning.',
    regulatoryBody: 'HMRC / FCA'
  },
  {
    code: 'AE',
    country: 'United Arab Emirates',
    flag: '🇦🇪',
    region: 'Middle East (GCC)',
    keyServices: ['DIFC / ADGM Holding Setup', 'UAE Corporate Tax Compliance', 'Economic Substance', 'FEMA ODI'],
    description: 'Structuring GCC regional headquarters, freezone/DIFC holdings, and family business wealth transition.',
    regulatoryBody: 'FTA / DIFC Authority / ADGM'
  },
  {
    code: 'SG',
    country: 'Singapore',
    flag: '🇸🇬',
    region: 'Asia-Pacific',
    keyServices: ['APAC Treasury Hub', 'IRAS Tax Compliance', 'Cross-Border Invoicing', 'VCC Fund Advisory'],
    description: 'Optimizing regional holding hubs and treasury management for Indian corporates tapping SEA markets.',
    regulatoryBody: 'MAS / IRAS'
  },
  {
    code: 'DE',
    country: 'Germany',
    flag: '🇩🇪',
    region: 'European Union',
    keyServices: ['EU Entry Structuring', 'Transfer Pricing Benchmarking', 'VAT & Permanent Establishment'],
    description: 'Advising Indian engineering and manufacturing firms on German subsidiary governance and EU trade tax.',
    regulatoryBody: 'BZSt / BaFin'
  },
  {
    code: 'FR',
    country: 'France',
    flag: '🇫🇷',
    region: 'European Union',
    keyServices: ['French Subsidiary Tax', 'EU Cross-Border Advisory', 'M&A Due Diligence'],
    description: 'Transaction advisory and financial structuring for Indo-French joint ventures and trade entities.',
    regulatoryBody: 'DGFiP'
  },
  {
    code: 'AU',
    country: 'Australia',
    flag: '🇦🇺',
    region: 'Oceania',
    keyServices: ['ATO Transfer Pricing', 'IndAus ECTA Trade Advisory', 'Resources & Tech Cross-Border Tax'],
    description: 'Capital structuring and regulatory filings for Indian enterprises operating across Sydney and Melbourne.',
    regulatoryBody: 'ATO / ASIC'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'What distinguishes RRUP Advisory from traditional audit or tax accounting firms?',
    answer: 'Unlike traditional accounting practices centered on statutory compliance and tax filing, RRUP Advisory functions as an independent, high-conviction financial stewardship firm. Founded by CA Premesh Pinakin Dave, we specialize in corporate treasury optimization, multi-bank liquidity, working capital syndication, and operational FEMA compliance, drawing on two decades of internal corporate finance experience.',
    category: 'General'
  },
  {
    id: 'faq-2',
    question: 'How does RRUP Advisory assist Indian businesses with FEMA compliance and RBI reporting?',
    answer: 'Foreign Exchange Management Act (FEMA) regulations in India are intricate and subject to constant RBI Master Direction updates. We provide practical operational guidance for import/export declarations, EDPMS/IDPMS/e-BRC closure, foreign remittance compliance, and trade finance reporting. For complex multi-jurisdiction tax structuring or transfer pricing, we collaborate with specialist international tax partners.',
    category: 'Cross-Border'
  },
  {
    id: 'faq-3',
    question: 'What is the typical engagement structure for corporate Treasury Management advisory?',
    answer: 'We begin with a thorough Treasury Audit assessing current FX exposures, bank borrowing costs, yield on liquid surpluses, and hedging policies. Following the audit, we assist in implementing customized Treasury Policy Manuals, establishing systematic FX risk-mapping routines, negotiating favorable banking margins, and conducting periodic advisory reviews with your CFO or treasury committee.',
    category: 'Treasury'
  },
  {
    id: 'faq-4',
    question: 'Can RRUP Advisory handle complex international transfer pricing and DTAA documentation?',
    answer: 'Yes, through our practice and our network of specialist international tax partners. We assist in aligning arm’s length documentation, compiling master files and local files in accordance with OECD BEPS standards and Indian Income Tax regulations, and optimizing Double Taxation Avoidance Agreement (DTAA) relief.',
    category: 'Cross-Border'
  },
  {
    id: 'faq-5',
    question: 'Does CA Premesh Pinakin Dave personally oversee client advisory engagements?',
    answer: 'Yes. CA Premesh Pinakin Dave directly leads every strategic advisory assignment. Our firm deliberately maintains a selective client ratio to guarantee senior leadership oversight, direct executive accessibility, and uncompromised quality on every transaction, treasury review, and cross-border consultation.',
    category: 'General'
  },
  {
    id: 'faq-6',
    question: 'How do we initiate a confidential advisory consultation with RRUP Advisory?',
    answer: 'You can request an executive consultation using our secure online schedule portal or reach out directly via our official WhatsApp advisory desk / email. Following initial conflict checks and NDA execution, our senior team conducts a preliminary review of your requirements.',
    category: 'General'
  }
];

export const LEGAL_TEXTS = {
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'July 2026',
    content: `
      RRUP Advisory ("we", "our", or "the Firm") is committed to protecting the confidentiality and privacy of client information, personal data, and corporate financial metrics.

      1. Scope & Application
      This Privacy Policy applies to information collected through our official digital portal, consultation forms, and professional engagement interactions. Client confidentiality is held strictly sacrosanct across all client engagements.

      2. Information Collection
      We collect personal and financial information provided voluntarily during consultation inquiries, including full name, executive title, corporate entity details, email address, phone number, annual financial turnover ranges, and specific advisory requirements.

      3. Use of Information
      Data collected is utilized exclusively for:
      - Processing and responding to advisory consultation inquiries.
      - Conducting conflict of interest checks prior to formal engagement.
      - Executing statutory, treasury, and cross-border advisory obligations.
      - Fulfilling regulatory compliance obligations under applicable Indian and international laws.

      4. Non-Disclosure & Confidentiality
      We do NOT sell, rent, trade, or disclose client data to any third-party marketing entities. Information is disclosed only to authorized firm principals and legal/tax personnel directly involved in your engagement, or when explicitly mandated by law or court order.

      5. Data Security
      We enforce enterprise-grade data security protocols, including AES-256 encryption for stored data, secure SSL/TLS transmission channels, restricted access permissions, and periodic cybersecurity reviews.
    `
  },
  terms: {
    title: 'Terms of Service',
    lastUpdated: 'July 2026',
    content: `
      Welcome to the official website of RRUP Advisory. By accessing or using this website, you agree to comply with and be bound by the following Terms of Service.

      1. Professional Disclaimer
      The materials, articles, calculators, and informational resources contained on this portal are provided for general informational purposes only and do not constitute formal professional accounting, legal, tax, or financial advice. Accessing this website or communicating with RRUP Advisory via online forms does not in itself establish a formal client-advisory relationship.

      2. Formal Engagement
      A professional client-advisory relationship with RRUP Advisory is established exclusively upon the mutual execution of an official Engagement Letter detailing the scope of work, fee arrangements, and terms of representation signed by CA Premesh Pinakin Dave or an authorized Partner of the Firm.

      3. Intellectual Property Rights
      All text, design architecture, graphics, proprietary calculators, logos, and content on this portal are the sole intellectual property of RRUP Advisory. Reproduction or unauthorized redistribution without prior written consent is strictly prohibited.

      4. Limitation of Liability
      RRUP Advisory shall not be held liable for any direct, indirect, incidental, or consequential damages resulting from reliance on general website content or temporary unavailability of digital services.
    `
  },
  cookies: {
    title: 'Cookie Policy',
    lastUpdated: 'July 2026',
    content: `
      RRUP Advisory uses essential and analytical cookies to ensure optimal performance, secure session navigation, and user experience on our digital portal.

      1. Essential Cookies
      Necessary for core website security, form submission integrity, and smooth navigation across section anchors. These cookies do not store personally identifiable information.

      2. Analytical & Performance Cookies
      Used anonymously to measure visitor interaction, session duration, and page traffic patterns to continuously refine our advisory interface.

      3. Managing Cookie Preferences
      You can configure your internet browser to reject non-essential cookies or notify you when a cookie is placed. Note that disabling essential cookies may impact certain interactive tools (such as the Treasury Calculator or Consultation Booking portal).
    `
  },
  icai: {
    title: 'Regulatory & Ethical Standards',
    lastUpdated: 'July 2026',
    content: `
      RRUP Advisory is operated as a registered private limited financial consultancy and advisory firm.

      1. Professional Standards
      Firm leadership includes Chartered Accountants who adhere to high standards of professional competence, integrity, objectivity, and confidentiality.

      2. Entity Disclosure
      RRUP Advisory is an independent financial advisory firm and is not an ICAI-regulated Chartered Accountancy audit firm or practicing unit under the Chartered Accountants Act, 1949.

      3. Transparency & Information
      In compliance with professional standards, this portal is maintained solely for providing factual information regarding the Firm's expertise, leadership, and advisory capabilities, and is not intended as an unsolicited solicitation or advertisement.
    `
  }
};
