import companyData from "./companyConstants.json";

export interface CompanyInfo {
  name: string;
  legalName: string;
  shortName: string;
  tagline: string;
  headline: string;
  subheadline: string;
  establishedYear: number;
  experienceYears: string;
  completedProjects: string;
  fleetUnits: string;
  tpiCertifiedRate: string;
  supportAvailability: string;
  heroTagline: string;
}

export interface ContactInfo {
  showPhone: boolean;
  primaryPhone: string;
  primaryPhoneRaw: string;
  secondaryPhone: string;
  secondaryPhoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  whatsappUrl: string;
  email: string;
  hours: string;
  dispatchManager: string;
}

export interface AddressInfo {
  office: string;
  yardLocations: string[];
  city: string;
  state: string;
  pincode: string;
  country: string;
  gstin: string;
  pan: string;
}

export interface ClientItem {
  id: string;
  name: string;
  variations: string;
  category: string;
  logo: string;
  alt: string;
  resourceLink: string;
  scope: string;
}

export interface FeaturesConfig {
  hidePhoneNumber: boolean;
}

export interface CompanyConstants {
  features: FeaturesConfig;
  company: CompanyInfo;
  contact: ContactInfo;
  address: AddressInfo;
  branding: {
    logo: string;
    logoDark: string;
    favicon: string;
  };
  certifications: Array<{ title: string; desc: string }>;
  clients: ClientItem[];
  navigation: Array<{ label: string; id: string }>;
}

/**
 * Server-side / Build-time feature flag to hide mobile numbers site-wide.
 * Evaluates:
 * 1. Vite build-time env variable: VITE_HIDE_PHONE_NUMBER=true (or 1)
 * 2. Vite build-time env variable: VITE_SHOW_PHONE=false
 * 3. companyConstants.json -> "features": { "hidePhoneNumber": true }
 */
export const isPhoneHidden: boolean =
  import.meta.env.VITE_HIDE_PHONE_NUMBER === "true" ||
  import.meta.env.VITE_HIDE_PHONE_NUMBER === "1" ||
  import.meta.env.VITE_SHOW_PHONE === "false" ||
  Boolean(companyData.features?.hidePhoneNumber);

const sanitizedContact: ContactInfo = {
  ...companyData.contact,
  showPhone: !isPhoneHidden,
  primaryPhone: isPhoneHidden ? "" : companyData.contact.primaryPhone,
  primaryPhoneRaw: isPhoneHidden ? "" : companyData.contact.primaryPhoneRaw,
  secondaryPhone: isPhoneHidden ? "" : companyData.contact.secondaryPhone,
  secondaryPhoneRaw: isPhoneHidden ? "" : companyData.contact.secondaryPhoneRaw,
  whatsapp: isPhoneHidden ? "" : companyData.contact.whatsapp,
  whatsappRaw: isPhoneHidden ? "" : companyData.contact.whatsappRaw,
  whatsappUrl: isPhoneHidden ? "" : companyData.contact.whatsappUrl,
};

export const companyConstants: CompanyConstants = {
  features: {
    hidePhoneNumber: isPhoneHidden,
  },
  company: companyData.company as CompanyInfo,
  contact: sanitizedContact,
  address: companyData.address as AddressInfo,
  branding: companyData.branding,
  certifications: companyData.certifications,
  clients: companyData.clients as ClientItem[],
  navigation: companyData.navigation,
};

export const { features, company, contact, address, branding, certifications, clients, navigation } = companyConstants;

export default companyConstants;
