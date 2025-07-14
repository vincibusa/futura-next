// Utilities per la gestione del consenso GDPR - Futura Company
import { ConsentPreferences, ConsentData, ConsentEvent } from '../../types/gdpr';
import { gdprConfig } from '../../gdpr.config';

/**
 * Classe per la gestione del consenso GDPR
 */
export class ConsentStorage {
  private cookieName: string;
  private expiryDays: number;

  constructor() {
    this.cookieName = gdprConfig.cookieName;
    this.expiryDays = gdprConfig.consentExpiry;
  }

  /**
   * Salva il consenso dell'utente
   */
  saveConsent(preferences: ConsentPreferences): void {
    const consentData: ConsentData = {
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
  getConsent(): ConsentData | null {
    if (typeof window === 'undefined') return null;

    try {
      const stored = localStorage.getItem(this.cookieName);
      if (!stored) return null;

      const consentData: ConsentData = JSON.parse(stored);
      
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
  hasConsent(): boolean {
    return this.getConsent() !== null;
  }

  /**
   * Verifica se una categoria specifica è autorizzata
   */
  isCategoryAllowed(category: keyof ConsentPreferences): boolean {
    const consent = this.getConsent();
    if (!consent) return false;

    // I cookie necessari sono sempre autorizzati
    if (category === 'necessary') return true;

    return consent.preferences[category] === true;
  }

  /**
   * Cancella il consenso salvato
   */
  clearConsent(): void {
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
  updateCategory(category: keyof ConsentPreferences, allowed: boolean): void {
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
  getDefaultPreferences(): ConsentPreferences {
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
  getPreferences(): ConsentPreferences {
    const consent = this.getConsent();
    return consent ? consent.preferences : this.getDefaultPreferences();
  }

  /**
   * Ottiene la data di scadenza
   */
  private getExpiryDate(): string {
    const date = new Date();
    date.setDate(date.getDate() + this.expiryDays);
    return date.toISOString();
  }

  /**
   * Verifica se il consenso è scaduto
   */
  private isExpired(expiryDate: string): boolean {
    return new Date() > new Date(expiryDate);
  }

  /**
   * Imposta un cookie
   */
  private setCookie(name: string, value: string, days: number): void {
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
  private deleteCookie(name: string): void {
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
  private triggerConsentEvent(eventType: ConsentEvent['type'], data: ConsentData | null): void {
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
  getConsentStats(): { hasConsent: boolean; timestamp?: string; categories?: ConsentPreferences } | null {
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
  onConsentChange(callback: (event: ConsentEvent) => void): () => void {
    if (typeof window === 'undefined') return () => {};

    const handler = (event: CustomEvent) => {
      callback(event.detail);
    };

    window.addEventListener('consent-saved', handler as EventListener);
    window.addEventListener('consent-cleared', handler as EventListener);
    window.addEventListener('consent-updated', handler as EventListener);

    // Ritorna funzione per rimuovere i listener
    return () => {
      window.removeEventListener('consent-saved', handler as EventListener);
      window.removeEventListener('consent-cleared', handler as EventListener);
      window.removeEventListener('consent-updated', handler as EventListener);
    };
  }
}

// Istanza singleton
export const consentStorage = new ConsentStorage();

// Funzioni di utilità esportate
export const saveConsent = (preferences: ConsentPreferences): void => 
  consentStorage.saveConsent(preferences);

export const getConsent = (): ConsentData | null => 
  consentStorage.getConsent();

export const hasConsent = (): boolean => 
  consentStorage.hasConsent();

export const isCategoryAllowed = (category: keyof ConsentPreferences): boolean => 
  consentStorage.isCategoryAllowed(category);

export const clearConsent = (): void => 
  consentStorage.clearConsent();

export const updateCategory = (category: keyof ConsentPreferences, allowed: boolean): void => 
  consentStorage.updateCategory(category, allowed);

export const getPreferences = (): ConsentPreferences => 
  consentStorage.getPreferences();

export const getDefaultPreferences = (): ConsentPreferences => 
  consentStorage.getDefaultPreferences();

export const onConsentChange = (callback: (event: ConsentEvent) => void): (() => void) => 
  consentStorage.onConsentChange(callback);

