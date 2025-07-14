// Utilities per la gestione del consenso GDPR - Futura Company (JavaScript)
import { gdprConfig } from '../../../config/gdpr.config';

/**
 * Classe per la gestione del consenso GDPR
 */
export class ConsentStorage {
  constructor() {
    this.cookieName = gdprConfig.cookieName;
    this.expiryDays = gdprConfig.consentExpiry;
  }

  /**
   * Salva il consenso dell'utente
   */
  saveConsent(preferences) {
    const consentData = {
      preferences,
      timestamp: new Date().toISOString(),
      version: "1.0",
      expires: this.getExpiryDate()
    };

    // Salva in localStorage
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(this.cookieName, JSON.stringify(consentData));
      } catch (error) {
        console.error('Errore nel salvataggio del consenso in localStorage:', error);
      }
    }

    // Salva anche come cookie per compatibilità server-side
    this.setCookie(this.cookieName, JSON.stringify(consentData), this.expiryDays);
    
    // Trigger evento personalizzato
    this.triggerConsentEvent('consent-saved', consentData);
  }

  /**
   * Recupera il consenso salvato
   */
  getConsent() {
    if (typeof window === 'undefined') return null;

    try {
      const stored = localStorage.getItem(this.cookieName);
      if (!stored) return null;

      const consentData = JSON.parse(stored);
      
      // Verifica se il consenso è scaduto
      if (this.isExpired(consentData.expires)) {
        this.clearConsent();
        return null;
      }

      return consentData;
    } catch (error) {
      console.error('Errore nel recupero del consenso:', error);
      return null;
    }
  }

  /**
   * Verifica se l'utente ha già dato il consenso
   */
  hasConsent() {
    return this.getConsent() !== null;
  }

  /**
   * Verifica se una categoria specifica è autorizzata
   */
  isCategoryAllowed(category) {
    const consent = this.getConsent();
    if (!consent) return false;

    // I cookie necessari sono sempre autorizzati
    if (category === 'necessary') return true;

    return consent.preferences[category] === true;
  }

  /**
   * Cancella il consenso salvato
   */
  clearConsent() {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(this.cookieName);
      } catch (error) {
        console.error('Errore nella cancellazione del consenso:', error);
      }
    }
    this.deleteCookie(this.cookieName);
    this.triggerConsentEvent('consent-cleared', null);
  }

  /**
   * Aggiorna una categoria specifica
   */
  updateCategory(category, allowed) {
    const consent = this.getConsent();
    if (!consent) return;

    const updatedPreferences = {
      ...consent.preferences,
      [category]: allowed
    };

    this.saveConsent(updatedPreferences);
  }

  /**
   * Ottiene le preferenze di default
   */
  getDefaultPreferences() {
    return {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    };
  }

  /**
   * Ottiene tutte le preferenze (salvate o default)
   */
  getPreferences() {
    const consent = this.getConsent();
    return consent ? consent.preferences : this.getDefaultPreferences();
  }

  /**
   * Ottiene la data di scadenza
   */
  getExpiryDate() {
    const date = new Date();
    date.setDate(date.getDate() + this.expiryDays);
    return date.toISOString();
  }

  /**
   * Verifica se il consenso è scaduto
   */
  isExpired(expiryDate) {
    return new Date() > new Date(expiryDate);
  }

  /**
   * Imposta un cookie
   */
  setCookie(name, value, days) {
    if (typeof document === 'undefined') return;

    try {
      const expires = new Date();
      expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
      
      document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax;Secure`;
    } catch (error) {
      console.error('Errore nell\'impostazione del cookie:', error);
    }
  }

  /**
   * Cancella un cookie
   */
  deleteCookie(name) {
    if (typeof document === 'undefined') return;
    
    try {
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;SameSite=Lax;Secure`;
    } catch (error) {
      console.error('Errore nella cancellazione del cookie:', error);
    }
  }

  /**
   * Trigger evento personalizzato
   */
  triggerConsentEvent(eventType, data) {
    if (typeof window === 'undefined') return;

    try {
      const event = new CustomEvent(eventType, {
        detail: { type: eventType, data }
      });
      window.dispatchEvent(event);
    } catch (error) {
      console.error('Errore nel trigger dell\'evento:', error);
    }
  }

  /**
   * Ottiene le statistiche del consenso (anonime)
   */
  getConsentStats() {
    const consent = this.getConsent();
    if (!consent) return { hasConsent: false };

    return {
      hasConsent: true,
      timestamp: consent.timestamp,
      categories: consent.preferences
    };
  }

  /**
   * Ascolta i cambiamenti di consenso
   */
  onConsentChange(callback) {
    if (typeof window === 'undefined') return () => {};

    const handler = (event) => {
      callback(event.detail);
    };

    window.addEventListener('consent-saved', handler);
    window.addEventListener('consent-cleared', handler);
    window.addEventListener('consent-updated', handler);

    // Ritorna funzione per rimuovere i listener
    return () => {
      window.removeEventListener('consent-saved', handler);
      window.removeEventListener('consent-cleared', handler);
      window.removeEventListener('consent-updated', handler);
    };
  }
}

// Istanza singleton
export const consentStorage = new ConsentStorage();

// Funzioni di utilità esportate
export const saveConsent = (preferences) => 
  consentStorage.saveConsent(preferences);

export const getConsent = () => 
  consentStorage.getConsent();

export const hasConsent = () => 
  consentStorage.hasConsent();

export const isCategoryAllowed = (category) => 
  consentStorage.isCategoryAllowed(category);

export const clearConsent = () => 
  consentStorage.clearConsent();

export const updateCategory = (category, allowed) => 
  consentStorage.updateCategory(category, allowed);

export const getPreferences = () => 
  consentStorage.getPreferences();

export const getDefaultPreferences = () => 
  consentStorage.getDefaultPreferences();

export const onConsentChange = (callback) => 
  consentStorage.onConsentChange(callback);