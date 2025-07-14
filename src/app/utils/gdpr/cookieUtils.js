// Utilità per la gestione dei cookie - Futura Company (JavaScript)
import { gdprConfig } from '../../../config/gdpr.config';
import { isCategoryAllowed } from './consentStorage';

/**
 * Ottiene tutti i cookie attualmente impostati
 */
export const getAllCookies = () => {
  if (typeof document === 'undefined') return [];
  
  try {
    return document.cookie.split(';').map(cookie => {
      const [name, value] = cookie.trim().split('=');
      return {
        name: decodeURIComponent(name),
        value: decodeURIComponent(value)
      };
    });
  } catch (error) {
    console.error('Errore nel recupero dei cookie:', error);
    return [];
  }
};

/**
 * Imposta un cookie con nome, valore e durata specificati
 */
export const setCookie = (name, value, days) => {
  if (typeof document === 'undefined') return;
  
  try {
    const expires = new Date();
    expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax;Secure`;
  } catch (error) {
    console.error('Errore nell\'impostazione del cookie:', error);
  }
};

/**
 * Cancella un cookie specifico
 */
export const deleteCookie = (name) => {
  if (typeof document === 'undefined') return;
  
  try {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;SameSite=Lax;Secure`;
  } catch (error) {
    console.error('Errore nella cancellazione del cookie:', error);
  }
};

/**
 * Cancella tutti i cookie non autorizzati in base alle preferenze
 */
export const cleanupUnauthorizedCookies = () => {
  if (typeof document === 'undefined') return;

  const allCookies = getAllCookies();
  const allowedCookies = new Set();

  // Cookie sempre consentiti
  allowedCookies.add(gdprConfig.cookieName);
  allowedCookies.add('session_id');
  allowedCookies.add('next-auth.session-token');
  allowedCookies.add('__Secure-next-auth.session-token');

  // Aggiungi cookie delle categorie consentite
  Object.entries(gdprConfig.categories).forEach(([categoryKey, category]) => {
    if (isCategoryAllowed(categoryKey)) {
      category.cookies.forEach(cookie => {
        allowedCookies.add(cookie.name.split(',')[0].trim());
      });
    }
  });

  // Cancella cookie non autorizzati
  allCookies.forEach(cookie => {
    const cookieName = cookie.name.split(';')[0].split('=')[0].trim();
    if (!allowedCookies.has(cookieName)) {
      deleteCookie(cookieName);
    }
  });
};

/**
 * Inizializza Google Analytics se la categoria analytics è consentita
 */
export const initializeGoogleAnalytics = (gaId) => {
  if (!isCategoryAllowed('analytics')) {
    console.log('Google Analytics bloccato - consenso non fornito');
    return false;
  }

  if (typeof window === 'undefined') return false;

  try {
    // Carica lo script di Google Analytics
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    document.head.appendChild(script);

    // Inizializza gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', gaId, {
      anonymize_ip: true,
      cookie_flags: 'SameSite=None;Secure',
      cookie_expires: 63072000 // 2 anni
    });

    console.log('Google Analytics inizializzato');
    return true;
  } catch (error) {
    console.error('Errore nell\'inizializzazione di Google Analytics:', error);
    return false;
  }
};

/**
 * Inizializza Facebook Pixel se la categoria marketing è consentita
 */
export const initializeFacebookPixel = (pixelId) => {
  if (!isCategoryAllowed('marketing')) {
    console.log('Facebook Pixel bloccato - consenso non fornito');
    return false;
  }

  if (typeof window === 'undefined') return false;

  try {
    // Inizializza Facebook Pixel
    window.fbq = window.fbq || function() {
      (window.fbq.q = window.fbq.q || []).push(arguments);
    };
    window._fbq = window._fbq || window.fbq;
    window.fbq('init', pixelId);
    window.fbq('track', 'PageView');

    // Carica lo script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);

    console.log('Facebook Pixel inizializzato');
    return true;
  } catch (error) {
    console.error('Errore nell\'inizializzazione di Facebook Pixel:', error);
    return false;
  }
};

/**
 * Blocca preventivamente tutti i cookie di terze parti
 */
export const blockThirdPartyCookies = () => {
  if (typeof window === 'undefined') return;

  // Sovrascrive document.cookie per bloccare cookie non autorizzati
  const originalCookieSetter = Object.getOwnPropertyDescriptor(Document.prototype, 'cookie').set;
  
  Object.defineProperty(document, 'cookie', {
    set: function(cookieString) {
      const cookieName = cookieString.split('=')[0].trim();
      
      // Controlla se il cookie è autorizzato
      const isAllowed = checkCookieAuthorization(cookieName);
      
      if (isAllowed) {
        originalCookieSetter.call(document, cookieString);
      } else {
        console.log(`Cookie bloccato: ${cookieName}`);
      }
    },
    get: function() {
      return document.cookie;
    }
  });
};

/**
 * Controlla se un cookie specifico è autorizzato
 */
const checkCookieAuthorization = (cookieName) => {
  // Cookie sempre consentiti
  const alwaysAllowed = [
    gdprConfig.cookieName,
    'session_id',
    'next-auth.session-token',
    '__Secure-next-auth.session-token'
  ];

  if (alwaysAllowed.includes(cookieName)) return true;

  // Controlla le categorie consentite
  for (const [categoryKey, category] of Object.entries(gdprConfig.categories)) {
    if (isCategoryAllowed(categoryKey)) {
      const categoryCookies = category.cookies.map(c => c.name.split(',')[0].trim());
      if (categoryCookies.includes(cookieName)) return true;
    }
  }

  return false;
};

/**
 * Ottiene informazioni su un cookie specifico
 */
export const getCookieInfo = (cookieName) => {
  const allCookies = [];
  
  Object.values(gdprConfig.categories).forEach(category => {
    category.cookies.forEach(cookie => {
      if (cookie.name.includes(cookieName)) {
        allCookies.push({
          ...cookie,
          category: category.name,
          required: category.required
        });
      }
    });
  });

  return allCookies.length > 0 ? allCookies[0] : null;
};

/**
 * Genera report sui cookie attualmente in uso
 */
export const generateCookieReport = () => {
  const allCookies = getAllCookies();
  const report = {
    totalCookies: allCookies.length,
    authorizedCookies: 0,
    unauthorizedCookies: 0,
    categories: {},
    details: []
  };

  allCookies.forEach(cookie => {
    const info = getCookieInfo(cookie.name);
    const isAuthorized = checkCookieAuthorization(cookie.name);
    
    if (isAuthorized) {
      report.authorizedCookies++;
    } else {
      report.unauthorizedCookies++;
    }

    report.details.push({
      name: cookie.name,
      authorized: isAuthorized,
      info: info
    });
  });

  return report;
};