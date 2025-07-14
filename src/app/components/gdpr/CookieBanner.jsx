'use client';

import React, { useState, useEffect } from 'react';
import { gdprConfig } from '../../../config/gdpr.config';
import { hasConsent, saveConsent, getDefaultPreferences } from '../../utils/gdpr/consentStorage';
import { cleanupUnauthorizedCookies } from '../../utils/gdpr/cookieUtils';

/**
 * Banner Cookie per Futura Company
 * Componente principale per la gestione del consenso GDPR
 */
const CookieBanner = ({ onConsentSaved, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Mostra il banner solo se l'utente non ha ancora dato il consenso
    const checkConsent = () => {
      if (!hasConsent()) {
        setIsVisible(true);
      }
    };

    // Ritarda leggermente per evitare flash durante il caricamento
    const timer = setTimeout(checkConsent, 500);
    return () => clearTimeout(timer);
  }, []);

  /**
   * Gestisce l'accettazione di tutti i cookie
   */
  const handleAcceptAll = async () => {
    setIsLoading(true);
    
    try {
      const allAcceptedPreferences = {
        necessary: true,
        functional: true,
        analytics: true,
        marketing: true
      };

      saveConsent(allAcceptedPreferences);
      onConsentSaved?.(allAcceptedPreferences);
      
      setIsVisible(false);
      
      // Ricarica la pagina per applicare i nuovi servizi
      setTimeout(() => {
        window.location.reload();
      }, 300);
      
    } catch (error) {
      console.error('Errore nel salvataggio del consenso:', error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Gestisce il rifiuto dei cookie opzionali
   */
  const handleRejectOptional = async () => {
    setIsLoading(true);
    
    try {
      const minimalPreferences = getDefaultPreferences();
      
      saveConsent(minimalPreferences);
      onConsentSaved?.(minimalPreferences);
      
      // Pulisce i cookie non autorizzati
      cleanupUnauthorizedCookies();
      
      setIsVisible(false);
      
    } catch (error) {
      console.error('Errore nel salvataggio del consenso:', error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Mostra/nasconde i dettagli delle categorie
   */
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Overlay per mobile */}
      <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[9998]" />
      
      {/* Banner principale */}
      <div className={`fixed bottom-0 left-0 right-0 bg-gradient-to-br from-white to-slate-50 border-t-4 border-blue-600 shadow-2xl z-[9999] max-h-[90vh] overflow-y-auto animate-slide-up ${className}`} role="dialog" aria-labelledby="gdpr-title" aria-describedby="gdpr-description">
        <div className="max-w-7xl mx-auto px-6 py-6">
          
          {/* Header del banner */}
          <div className="flex items-center gap-3 mb-4">
            <div className="text-2xl">🍪</div>
            <h2 id="gdpr-title" className="text-xl font-bold text-gray-900 font-serif">
              {gdprConfig.bannerTexts.title}
            </h2>
          </div>

          {/* Descrizione */}
          <p id="gdpr-description" className="text-gray-700 mb-4 leading-relaxed">
            {gdprConfig.bannerTexts.description}
          </p>

          {/* Dettagli categorie (se richiesti) */}
          {showDetails && (
            <div className="my-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="grid gap-4">
                {Object.entries(gdprConfig.categories).map(([key, category]) => (
                  <div key={key} className="bg-white p-4 rounded-md border border-gray-200">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-900">{category.name}</h4>
                      <span className={`px-2 py-1 rounded text-xs font-medium uppercase ${category.required ? 'bg-yellow-100 text-yellow-800' : 'bg-blue-100 text-blue-800'}`}>
                        {category.required ? 'Necessari' : 'Opzionali'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                    
                    {/* Lista cookie */}
                    <div className="flex flex-wrap gap-2">
                      {category.cookies.map((cookie, index) => (
                        <div key={index} className="flex items-center gap-2 px-2 py-1 bg-gray-100 rounded text-xs">
                          <span className="font-medium text-gray-700">{cookie.name}</span>
                          <span className="text-gray-500">{cookie.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Azioni */}
          <div className="flex flex-col gap-4">
            <div className="flex gap-3 flex-wrap">
              <button
                onClick={handleAcceptAll}
                disabled={isLoading}
                className="px-6 py-3 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all hover:shadow-lg"
                aria-label="Accetta tutti i cookie"
              >
                {isLoading ? 'Salvataggio...' : gdprConfig.bannerTexts.acceptAll}
              </button>
              
              <button
                onClick={handleRejectOptional}
                disabled={isLoading}
                className="px-6 py-3 bg-gray-600 text-white rounded-md font-medium hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                aria-label="Accetta solo cookie necessari"
              >
                {gdprConfig.bannerTexts.rejectAll}
              </button>
            </div>

            <div className="flex gap-4 flex-wrap justify-center">
              <button
                onClick={toggleDetails}
                className="px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                aria-label={showDetails ? 'Nascondi dettagli' : 'Mostra dettagli'}
              >
                {showDetails ? 'Nascondi dettagli' : gdprConfig.bannerTexts.customize}
              </button>
              
              <a
                href={gdprConfig.policyUrls.privacy}
                className="px-4 py-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-md transition-colors"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Leggi la Privacy Policy"
              >
                {gdprConfig.bannerTexts.learnMore}
              </a>
            </div>
          </div>

          {/* Footer con info azienda */}
          <div className="mt-4 pt-4 border-t border-gray-200 text-center">
            <small className="text-gray-500 text-sm">
              {gdprConfig.companyName} - {gdprConfig.contactEmail}
            </small>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </>
  );
};

export default CookieBanner;