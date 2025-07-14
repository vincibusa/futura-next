// Utilities per la gestione e blocco dei cookie - Futura Company
import { ConsentPreferences } from '../../types/gdpr';
import { isCategoryAllowed } from './consentStorage';

/**
 * Classe per la gestione dei cookie e servizi di terze parti
 */
export class CookieManager {
  private blockedScripts: Set<string> = new Set();
  private allowedDomains: Set<string> = new Set();

  constructor() {
    this.initializeBlockedServices();
  }

  /**
   * Inizializza i servizi bloccati di default
   */
  private initializeBlockedServices(): void {
    // Google Analytics
    this.blockedScripts.add('googletagmanager.com');
    this.blockedScripts.add('google-analytics.com');
    this.blockedScripts.add('analytics.google.com');
    
    // Facebook Pixel
    this.blockedScripts.add('facebook.net');
    this.blockedScripts.add('facebook.com/tr');
    this.blockedScripts.add('connect.facebook.net');
    
    // Altri servizi di marketing
    this.blockedScripts.add('doubleclick.net');
    this.blockedScripts.add('googlesyndication.com');
    this.blockedScripts.add('adsystem.google.com');
  }

  /**
   * Verifica se uno script può essere caricato
   */
  canLoadScript(src: string): boolean {
    // Sempre permetti script locali e necessari
    if (this.isLocalScript(src) || this.isNecessaryScript(src)) {
      return true;
    }

    // Controlla se il dominio è bloccato
    for (const blocked of this.blockedScripts) {
      if (src.includes(blocked)) {
        return this.isServiceAllowed(blocked);
      }
    }

    return true;
  }

  /**
   * Verifica se un servizio è autorizzato
   */
  private isServiceAllowed(domain: string): boolean {
    if (domain.includes('google') && domain.includes('analytics')) {
      return isCategoryAllowed('analytics');
    }
    
    if (domain.includes('facebook')) {
      return isCategoryAllowed('marketing');
    }
    
    if (domain.includes('doubleclick') || domain.includes('adsystem')) {
      return isCategoryAllowed('marketing');
    }

    return false;
  }

  /**
   * Verifica se è uno script locale
   */
  private isLocalScript(src: string): boolean {
    return src.startsWith('/') || 
           src.startsWith('./') || 
           src.includes(window.location.hostname) ||
           src.startsWith('data:') ||
           src.startsWith('blob:');
  }

  /**
   * Verifica se è uno script necessario
   */
  private isNecessaryScript(src: string): boolean {
    const necessaryDomains = [
      'vercel.app',
      'vercel.com',
      '_next/static',
      'futuracompany.it'
    ];

    return necessaryDomains.some(domain => src.includes(domain));
  }

  /**
   * Blocca i cookie di una categoria specifica
   */
  blockCookiesByCategory(category: keyof ConsentPreferences): void {
    if (typeof document === 'undefined') return;

    const cookiesToBlock = this.getCookiesByCategory(category);
    
    cookiesToBlock.forEach(cookieName => {
      this.deleteCookie(cookieName);
    });
  }

  /**
   * Ottiene i cookie per categoria
   */
  private getCookiesByCategory(category: keyof ConsentPreferences): string[] {
    switch (category) {
      case 'analytics':
        return ['_ga', '_gid', '_gat', '_ga_*', '__utma', '__utmb', '__utmc', '__utmz'];
      case 'marketing':
        return ['_fbp', '_fbc', 'fr', '_gcl_au', '_gcl_aw', 'IDE', 'test_cookie'];
      case 'functional':
        return ['reading_preferences', 'newsletter_prefs', 'theme_preference'];
      default:
        return [];
    }
  }

  /**
   * Cancella un cookie specifico
   */
  private deleteCookie(name: string): void {
    if (typeof document === 'undefined') return;

    try {
      // Cancella per il dominio corrente
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
      
      // Cancella per il dominio principale
      const domain = window.location.hostname;
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=${domain};`;
      
      // Cancella per sottodomini
      if (domain.includes('.')) {
        const mainDomain = '.' + domain.split('.').slice(-2).join('.');
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;domain=${mainDomain};`;
      }
    } catch (error) {
      console.error(`Errore nella cancellazione del cookie ${name}:`, error);
    }
  }

  /**
   * Inizializza Google Analytics se autorizzato
   */
  initializeGoogleAnalytics(measurementId: string): void {
    if (!isCategoryAllowed('analytics')) return;

    try {
      // Carica gtag
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);

      // Inizializza gtag
      script.onload = () => {
        (window as any).dataLayer = (window as any).dataLayer || [];
        function gtag(...args: any[]) {
          (window as any).dataLayer.push(args);
        }
        (window as any).gtag = gtag;

        gtag('js', new Date());
        gtag('config', measurementId, {
          anonymize_ip: true,
          cookie_flags: 'SameSite=Lax;Secure'
        });
      };
    } catch (error) {
      console.error('Errore nell\'inizializzazione di Google Analytics:', error);
    }
  }

  /**
   * Inizializza Facebook Pixel se autorizzato
   */
  initializeFacebookPixel(pixelId: string): void {
    if (!isCategoryAllowed('marketing')) return;

    try {
      // Carica Facebook Pixel
      const script = document.createElement('script');
      script.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${pixelId}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(script);
    } catch (error) {
      console.error('Errore nell\'inizializzazione di Facebook Pixel:', error);
    }
  }

  /**
   * Pulisce tutti i cookie non autorizzati
   */
  cleanupUnauthorizedCookies(): void {
    const preferences = {
      analytics: isCategoryAllowed('analytics'),
      marketing: isCategoryAllowed('marketing'),
      functional: isCategoryAllowed('functional'),
      necessary: true
    };

    Object.entries(preferences).forEach(([category, allowed]) => {
      if (!allowed && category !== 'necessary') {
        this.blockCookiesByCategory(category as keyof ConsentPreferences);
      }
    });
  }

  /**
   * Ottiene tutti i cookie presenti
   */
  getAllCookies(): Record<string, string> {
    if (typeof document === 'undefined') return {};

    const cookies: Record<string, string> = {};
    
    try {
      document.cookie.split(';').forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        if (name && value) {
          cookies[name] = decodeURIComponent(value);
        }
      });
    } catch (error) {
      console.error('Errore nel recupero dei cookie:', error);
    }

    return cookies;
  }

  /**
   * Categorizza i cookie esistenti
   */
  categorizeCookies(): Record<keyof ConsentPreferences, string[]> {
    const allCookies = Object.keys(this.getAllCookies());
    
    return {
      necessary: allCookies.filter(name => 
        name.includes('futura_gdpr') || 
        name.includes('session') ||
        name.includes('csrf')
      ),
      functional: allCookies.filter(name => 
        name.includes('reading_') || 
        name.includes('newsletter_') ||
        name.includes('theme_')
      ),
      analytics: allCookies.filter(name => 
        name.startsWith('_ga') || 
        name.startsWith('_gid') ||
        name.startsWith('__utm')
      ),
      marketing: allCookies.filter(name => 
        name.startsWith('_fb') || 
        name.includes('_gcl_') ||
        name === 'fr' || name === 'IDE'
      )
    };
  }
}

// Istanza singleton
export const cookieManager = new CookieManager();

// Hook per intercettare il caricamento degli script
export const interceptScriptLoading = (): void => {
  if (typeof window === 'undefined') return;

  // Intercetta createElement per script
  const originalCreateElement = document.createElement;
  document.createElement = function(tagName: string, ...args: any[]) {
    const element = originalCreateElement.apply(this, [tagName, ...args]);
    
    if (tagName.toLowerCase() === 'script') {
      const script = element as HTMLScriptElement;
      
      // Intercetta l'impostazione del src
      let originalSrc = '';
      Object.defineProperty(script, 'src', {
        get() { return originalSrc; },
        set(value: string) {
          if (cookieManager.canLoadScript(value)) {
            originalSrc = value;
            script.setAttribute('src', value);
          } else {
            console.log(`Script bloccato: ${value}`);
          }
        }
      });
    }
    
    return element;
  };
};

// Funzioni di utilità esportate
export const canLoadScript = (src: string): boolean => 
  cookieManager.canLoadScript(src);

export const initializeGoogleAnalytics = (measurementId: string): void => 
  cookieManager.initializeGoogleAnalytics(measurementId);

export const initializeFacebookPixel = (pixelId: string): void => 
  cookieManager.initializeFacebookPixel(pixelId);

export const cleanupUnauthorizedCookies = (): void => 
  cookieManager.cleanupUnauthorizedCookies();

export const getAllCookies = (): Record<string, string> => 
  cookieManager.getAllCookies();

export const categorizeCookies = (): Record<keyof ConsentPreferences, string[]> => 
  cookieManager.categorizeCookies();

