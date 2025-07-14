// Tipi TypeScript per il sistema GDPR di Futura Company

export interface CookieCategory {
  id: string;
  name: string;
  description: string;
  required: boolean;
  enabled: boolean;
  cookies: CookieInfo[];
}

export interface CookieInfo {
  name: string;
  purpose: string;
  duration: string;
  provider?: string;
}

export interface ConsentPreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
  marketing: boolean;
}

export interface ConsentData {
  preferences: ConsentPreferences;
  timestamp: string;
  version: string;
  expires: string;
}

export interface ThirdPartyService {
  name: string;
  purpose: string;
  privacyPolicy: string;
  cookies: boolean;
  category: keyof ConsentPreferences;
}

export interface GDPRConfig {
  siteName: string;
  companyName: string;
  contactEmail: string;
  address: string;
  phone: string;
  cookieExpiry: number;
  consentExpiry: number;
  cookieName: string;
  categories: Record<keyof ConsentPreferences, CookieCategory>;
  thirdPartyServices: Record<string, ThirdPartyService>;
  bannerTexts: {
    title: string;
    description: string;
    acceptAll: string;
    rejectAll: string;
    customize: string;
    savePreferences: string;
    learnMore: string;
  };
  policyUrls: {
    privacy: string;
    cookies: string;
    preferences: string;
  };
}

export interface FormConsentOptions {
  contact: boolean;
  newsletter: boolean;
  events: boolean;
  marketing: boolean;
}

export interface ConsentEvent {
  type: 'consent-saved' | 'consent-cleared' | 'consent-updated';
  data: ConsentData | null;
}

export interface CookieBannerProps {
  onConsentSaved?: (preferences: ConsentPreferences) => void;
  className?: string;
}

export interface PreferenceCenterProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (preferences: ConsentPreferences) => void;
  initialPreferences?: ConsentPreferences;
}

export interface FormConsentProps {
  onConsentChange: (consent: FormConsentOptions) => void;
  required?: boolean;
  showNewsletter?: boolean;
  showEvents?: boolean;
  className?: string;
}

