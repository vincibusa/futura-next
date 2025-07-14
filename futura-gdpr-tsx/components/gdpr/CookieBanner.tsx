'use client';

import React, { useState, useEffect } from 'react';
import { ConsentPreferences, CookieBannerProps } from '../../types/gdpr';
import { hasConsent, saveConsent, getDefaultPreferences } from '../../utils/gdpr/consentStorage';
import { cleanupUnauthorizedCookies } from '../../utils/gdpr/cookieUtils';
import { gdprConfig } from '../../gdpr.config';

/**
 * Banner Cookie per Futura Company
 * Componente principale per la gestione del consenso GDPR
 */
const CookieBanner: React.FC<CookieBannerProps> = ({ 
  onConsentSaved, 
  className = '' 
}) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
  const handleAcceptAll = async (): Promise<void> => {
    setIsLoading(true);
    
    try {
      const allAcceptedPreferences: ConsentPreferences = {
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
  const handleRejectOptional = async (): Promise<void> => {
    setIsLoading(true);
    
    try {
      const minimalPreferences: ConsentPreferences = getDefaultPreferences();
      
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
  const toggleDetails = (): void => {
    setShowDetails(!showDetails);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <>
      {/* Overlay per mobile */}
      <div className="gdpr-overlay" />
      
      {/* Banner principale */}
      <div className={`gdpr-banner ${className}`} role="dialog" aria-labelledby="gdpr-title" aria-describedby="gdpr-description">
        <div className="gdpr-banner__container">
          
          {/* Header del banner */}
          <div className="gdpr-banner__header">
            <div className="gdpr-banner__icon">
              🍪
            </div>
            <h2 id="gdpr-title" className="gdpr-banner__title">
              {gdprConfig.bannerTexts.title}
            </h2>
          </div>

          {/* Descrizione */}
          <p id="gdpr-description" className="gdpr-banner__description">
            {gdprConfig.bannerTexts.description}
          </p>

          {/* Dettagli categorie (se richiesti) */}
          {showDetails && (
            <div className="gdpr-banner__details">
              <div className="gdpr-categories">
                {Object.entries(gdprConfig.categories).map(([key, category]) => (
                  <div key={key} className="gdpr-category">
                    <div className="gdpr-category__header">
                      <h4 className="gdpr-category__name">{category.name}</h4>
                      <span className={`gdpr-category__status ${category.required ? 'required' : 'optional'}`}>
                        {category.required ? 'Necessari' : 'Opzionali'}
                      </span>
                    </div>
                    <p className="gdpr-category__description">{category.description}</p>
                    
                    {/* Lista cookie */}
                    <div className="gdpr-category__cookies">
                      {category.cookies.map((cookie, index) => (
                        <div key={index} className="gdpr-cookie">
                          <span className="gdpr-cookie__name">{cookie.name}</span>
                          <span className="gdpr-cookie__duration">{cookie.duration}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Azioni */}
          <div className="gdpr-banner__actions">
            <div className="gdpr-banner__primary-actions">
              <button
                onClick={handleAcceptAll}
                disabled={isLoading}
                className="gdpr-btn gdpr-btn--primary"
                aria-label="Accetta tutti i cookie"
              >
                {isLoading ? 'Salvataggio...' : gdprConfig.bannerTexts.acceptAll}
              </button>
              
              <button
                onClick={handleRejectOptional}
                disabled={isLoading}
                className="gdpr-btn gdpr-btn--secondary"
                aria-label="Accetta solo cookie necessari"
              >
                {gdprConfig.bannerTexts.rejectAll}
              </button>
            </div>

            <div className="gdpr-banner__secondary-actions">
              <button
                onClick={toggleDetails}
                className="gdpr-btn gdpr-btn--link"
                aria-label={showDetails ? 'Nascondi dettagli' : 'Mostra dettagli'}
              >
                {showDetails ? 'Nascondi dettagli' : gdprConfig.bannerTexts.customize}
              </button>
              
              <a
                href={gdprConfig.policyUrls.privacy}
                className="gdpr-btn gdpr-btn--link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Leggi la Privacy Policy"
              >
                {gdprConfig.bannerTexts.learnMore}
              </a>
            </div>
          </div>

          {/* Footer con info azienda */}
          <div className="gdpr-banner__footer">
            <small>
              {gdprConfig.companyName} - {gdprConfig.contactEmail}
            </small>
          </div>
        </div>
      </div>

      {/* Stili CSS */}
      <style jsx>{`
        .gdpr-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          z-index: 9998;
          backdrop-filter: blur(2px);
        }

        .gdpr-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: linear-gradient(135deg, #ffffff 0%, #f8fafc 100%);
          border-top: 4px solid #2563eb;
          box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.15);
          z-index: 9999;
          max-height: 90vh;
          overflow-y: auto;
          animation: slideUp 0.4s ease-out;
        }

        @keyframes slideUp {
          from {
            transform: translateY(100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .gdpr-banner__container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 24px;
        }

        .gdpr-banner__header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .gdpr-banner__icon {
          font-size: 24px;
          line-height: 1;
        }

        .gdpr-banner__title {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          color: #1f2937;
          font-family: 'Georgia', serif;
        }

        .gdpr-banner__description {
          margin: 0 0 20px 0;
          color: #4b5563;
          line-height: 1.6;
          font-size: 15px;
        }

        .gdpr-banner__details {
          margin: 20px 0;
          padding: 20px;
          background: #f9fafb;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }

        .gdpr-categories {
          display: grid;
          gap: 16px;
        }

        .gdpr-category {
          background: white;
          padding: 16px;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
        }

        .gdpr-category__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .gdpr-category__name {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
        }

        .gdpr-category__status {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 500;
          text-transform: uppercase;
        }

        .gdpr-category__status.required {
          background: #fef3c7;
          color: #92400e;
        }

        .gdpr-category__status.optional {
          background: #e0e7ff;
          color: #3730a3;
        }

        .gdpr-category__description {
          margin: 0 0 12px 0;
          color: #6b7280;
          font-size: 14px;
          line-height: 1.5;
        }

        .gdpr-category__cookies {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .gdpr-cookie {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 4px 8px;
          background: #f3f4f6;
          border-radius: 4px;
          font-size: 12px;
        }

        .gdpr-cookie__name {
          font-weight: 500;
          color: #374151;
        }

        .gdpr-cookie__duration {
          color: #6b7280;
        }

        .gdpr-banner__actions {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .gdpr-banner__primary-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .gdpr-banner__secondary-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .gdpr-btn {
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 44px;
          border: none;
          font-family: inherit;
        }

        .gdpr-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .gdpr-btn--primary {
          background: #2563eb;
          color: white;
          box-shadow: 0 2px 4px rgba(37, 99, 235, 0.2);
        }

        .gdpr-btn--primary:hover:not(:disabled) {
          background: #1d4ed8;
          transform: translateY(-1px);
          box-shadow: 0 4px 8px rgba(37, 99, 235, 0.3);
        }

        .gdpr-btn--secondary {
          background: #6b7280;
          color: white;
        }

        .gdpr-btn--secondary:hover:not(:disabled) {
          background: #4b5563;
          transform: translateY(-1px);
        }

        .gdpr-btn--link {
          background: transparent;
          color: #2563eb;
          padding: 8px 12px;
          text-decoration: underline;
          min-height: auto;
        }

        .gdpr-btn--link:hover {
          color: #1d4ed8;
          background: rgba(37, 99, 235, 0.05);
        }

        .gdpr-banner__footer {
          margin-top: 16px;
          padding-top: 16px;
          border-top: 1px solid #e5e7eb;
          text-align: center;
        }

        .gdpr-banner__footer small {
          color: #6b7280;
          font-size: 12px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .gdpr-banner__container {
            padding: 20px 16px;
          }

          .gdpr-banner__title {
            font-size: 18px;
          }

          .gdpr-banner__primary-actions {
            flex-direction: column;
          }

          .gdpr-banner__secondary-actions {
            flex-direction: column;
            align-items: center;
          }

          .gdpr-btn {
            width: 100%;
            justify-content: center;
          }

          .gdpr-btn--link {
            width: auto;
          }
        }

        @media (max-width: 480px) {
          .gdpr-banner {
            max-height: 95vh;
          }

          .gdpr-banner__header {
            flex-direction: column;
            text-align: center;
            gap: 8px;
          }

          .gdpr-category__header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      `}</style>
    </>
  );
};

export default CookieBanner;

