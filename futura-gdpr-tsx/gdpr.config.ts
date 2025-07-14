// Configurazione GDPR per Futura Company
import { GDPRConfig } from './types/gdpr';

export const gdprConfig: GDPRConfig = {
  // Informazioni azienda
  siteName: "Futura Company",
  companyName: "Futura Company - Gruppo Editoriale Siciliano",
  contactEmail: "info@futuracompany.it",
  address: "Via Papa Giovanni XXIII, 26, 90011 Bagheria (PA), Italia",
  phone: "+39 091 201852",
  
  // Configurazione cookie
  cookieExpiry: 365, // giorni
  consentExpiry: 365, // giorni
  cookieName: "futura_gdpr_consent",
  
  // Categorie di cookie
  categories: {
    necessary: {
      id: "necessary",
      name: "Cookie Necessari",
      description: "Cookie tecnici indispensabili per il funzionamento del sito editoriale e la navigazione tra le nostre testate giornalistiche",
      enabled: true,
      required: true,
      cookies: [
        {
          name: "futura_gdpr_consent",
          purpose: "Memorizza le preferenze di consenso dell'utente per i cookie",
          duration: "12 mesi"
        },
        {
          name: "session_id",
          purpose: "Identificativo di sessione per il corretto funzionamento del sito",
          duration: "Sessione"
        }
      ]
    },
    functional: {
      id: "functional",
      name: "Cookie Funzionali",
      description: "Cookie che migliorano l'esperienza di lettura e permettono di personalizzare i contenuti delle nostre 5 testate",
      enabled: false,
      required: false,
      cookies: [
        {
          name: "reading_preferences",
          purpose: "Memorizza le preferenze di lettura e visualizzazione articoli",
          duration: "12 mesi"
        },
        {
          name: "newsletter_prefs",
          purpose: "Preferenze per le newsletter delle diverse testate",
          duration: "12 mesi"
        }
      ]
    },
    analytics: {
      id: "analytics",
      name: "Cookie Analitici",
      description: "Cookie per raccogliere statistiche anonime sulla lettura degli articoli e il comportamento dei visitatori",
      enabled: false,
      required: false,
      cookies: [
        {
          name: "_ga, _ga_*",
          purpose: "Google Analytics - statistiche di utilizzo e lettura articoli",
          duration: "24 mesi",
          provider: "Google"
        },
        {
          name: "_gid",
          purpose: "Google Analytics - identificativo giornaliero per statistiche",
          duration: "24 ore",
          provider: "Google"
        }
      ]
    },
    marketing: {
      id: "marketing",
      name: "Cookie di Marketing",
      description: "Cookie per pubblicità personalizzata, promozione eventi e remarketing per le nostre iniziative editoriali",
      enabled: false,
      required: false,
      cookies: [
        {
          name: "_fbp, _fbc",
          purpose: "Facebook Pixel - remarketing per eventi e promozione contenuti",
          duration: "3 mesi",
          provider: "Meta"
        },
        {
          name: "event_tracking",
          purpose: "Tracciamento partecipazione eventi promossi dal gruppo",
          duration: "6 mesi"
        }
      ]
    }
  },
  
  // Servizi di terze parti
  thirdPartyServices: {
    googleAnalytics: {
      name: "Google Analytics",
      purpose: "Analisi del traffico e statistiche di lettura degli articoli",
      privacyPolicy: "https://policies.google.com/privacy",
      cookies: true,
      category: "analytics"
    },
    facebookPixel: {
      name: "Facebook Pixel",
      purpose: "Remarketing e promozione eventi culturali e gastronomici",
      privacyPolicy: "https://www.facebook.com/privacy/policy",
      cookies: true,
      category: "marketing"
    },
    mailchimp: {
      name: "Mailchimp",
      purpose: "Gestione newsletter delle 5 testate giornalistiche",
      privacyPolicy: "https://mailchimp.com/legal/privacy/",
      cookies: false,
      category: "marketing"
    },
    vercel: {
      name: "Vercel",
      purpose: "Hosting e CDN del sito web",
      privacyPolicy: "https://vercel.com/legal/privacy-policy",
      cookies: true,
      category: "necessary"
    }
  },
  
  // Testi del banner
  bannerTexts: {
    title: "Questo sito utilizza cookie",
    description: "Utilizziamo cookie per migliorare la tua esperienza di lettura sui nostri 5 giornali online, analizzare il traffico e personalizzare i contenuti. Puoi scegliere quali categorie accettare.",
    acceptAll: "Accetta tutti",
    rejectAll: "Solo necessari",
    customize: "Personalizza",
    savePreferences: "Salva preferenze",
    learnMore: "Maggiori informazioni"
  },
  
  // URL delle policy
  policyUrls: {
    privacy: "/privacy-policy",
    cookies: "/cookie-policy",
    preferences: "/gestione-consensi"
  }
};

export default gdprConfig;

