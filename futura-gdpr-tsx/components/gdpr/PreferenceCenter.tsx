'use client';

import React, { useState, useEffect } from 'react';
import { ConsentPreferences, PreferenceCenterProps } from '../../types/gdpr';
import { saveConsent, getPreferences } from '../../utils/gdpr/consentStorage';
import { cleanupUnauthorizedCookies } from '../../utils/gdpr/cookieUtils';
import { gdprConfig } from '../../gdpr.config';

/**
 * Centro Preferenze per Futura Company
 * Componente per la gestione granulare delle preferenze cookie
 */
const PreferenceCenter: React.FC<PreferenceCenterProps> = ({
  isOpen,
  onClose,
  onSave,
  initialPreferences
}) => {
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasChanges, setHasChanges] = useState<boolean>(false);

  useEffect(() => {
    if (isOpen) {
      // Carica le preferenze attuali o quelle iniziali
      const currentPrefs = initialPreferences || getPreferences();
      setPreferences(currentPrefs);
      setHasChanges(false);
    }
  }, [isOpen, initialPreferences]);

  /**
   * Gestisce il cambio di una categoria
   */
  const handleCategoryChange = (category: keyof ConsentPreferences, enabled: boolean): void => {
    // I cookie necessari non possono essere disabilitati
    if (category === 'necessary') return;

    const newPreferences = {
      ...preferences,
      [category]: enabled
    };

    setPreferences(newPreferences);
    setHasChanges(true);
  };

  /**
   * Salva le preferenze
   */
  const handleSave = async (): Promise<void> => {
    setIsLoading(true);

    try {
      saveConsent(preferences);
      onSave(preferences);
      
      // Pulisce i cookie non autorizzati
      cleanupUnauthorizedCookies();
      
      setHasChanges(false);
      
      // Chiude il modal dopo un breve delay
      setTimeout(() => {
        onClose();
      }, 500);

    } catch (error) {
      console.error('Errore nel salvataggio delle preferenze:', error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Accetta tutte le categorie
   */
  const handleAcceptAll = (): void => {
    const allAccepted: ConsentPreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    
    setPreferences(allAccepted);
    setHasChanges(true);
  };

  /**
   * Rifiuta tutte le categorie opzionali
   */
  const handleRejectAll = (): void => {
    const onlyNecessary: ConsentPreferences = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    };
    
    setPreferences(onlyNecessary);
    setHasChanges(true);
  };

  /**
   * Chiude il modal
   */
  const handleClose = (): void => {
    if (hasChanges) {
      const confirmClose = window.confirm(
        'Hai modifiche non salvate. Sei sicuro di voler chiudere senza salvare?'
      );
      if (!confirmClose) return;
    }
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div className="preference-overlay" onClick={handleClose} />
      
      {/* Modal */}
      <div className="preference-modal" role="dialog" aria-labelledby="preference-title" aria-modal="true">
        <div className="preference-modal__container">
          
          {/* Header */}
          <div className="preference-modal__header">
            <h2 id="preference-title" className="preference-modal__title">
              🛠️ Centro Preferenze Cookie
            </h2>
            <button
              onClick={handleClose}
              className="preference-modal__close"
              aria-label="Chiudi centro preferenze"
            >
              ✕
            </button>
          </div>

          {/* Descrizione */}
          <div className="preference-modal__description">
            <p>
              Gestisci le tue preferenze sui cookie per {gdprConfig.siteName}. 
              Puoi abilitare o disabilitare diverse categorie di cookie secondo le tue preferenze.
            </p>
          </div>

          {/* Categorie */}
          <div className="preference-categories">
            {Object.entries(gdprConfig.categories).map(([key, category]) => {
              const categoryKey = key as keyof ConsentPreferences;
              const isEnabled = preferences[categoryKey];
              const isRequired = category.required;

              return (
                <div key={key} className="preference-category">
                  <div className="preference-category__header">
                    <div className="preference-category__info">
                      <h3 className="preference-category__name">
                        {category.name}
                      </h3>
                      <p className="preference-category__description">
                        {category.description}
                      </p>
                    </div>
                    
                    <div className="preference-category__toggle">
                      <label className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={isEnabled}
                          disabled={isRequired}
                          onChange={(e) => handleCategoryChange(categoryKey, e.target.checked)}
                          aria-label={`${isEnabled ? 'Disabilita' : 'Abilita'} ${category.name}`}
                        />
                        <span className="toggle-slider"></span>
                      </label>
                      {isRequired && (
                        <span className="preference-category__required">
                          Necessari
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Lista cookie */}
                  <div className="preference-category__cookies">
                    <h4>Cookie utilizzati:</h4>
                    <div className="cookie-list">
                      {category.cookies.map((cookie, index) => (
                        <div key={index} className="cookie-item">
                          <div className="cookie-item__info">
                            <span className="cookie-item__name">{cookie.name}</span>
                            <span className="cookie-item__purpose">{cookie.purpose}</span>
                          </div>
                          <div className="cookie-item__meta">
                            <span className="cookie-item__duration">{cookie.duration}</span>
                            {cookie.provider && (
                              <span className="cookie-item__provider">
                                by {cookie.provider}
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Azioni rapide */}
          <div className="preference-modal__quick-actions">
            <button
              onClick={handleAcceptAll}
              className="preference-btn preference-btn--outline"
              disabled={isLoading}
            >
              Accetta tutto
            </button>
            <button
              onClick={handleRejectAll}
              className="preference-btn preference-btn--outline"
              disabled={isLoading}
            >
              Solo necessari
            </button>
          </div>

          {/* Footer con azioni */}
          <div className="preference-modal__footer">
            <div className="preference-modal__info">
              {hasChanges && (
                <span className="preference-modal__changes">
                  ⚠️ Hai modifiche non salvate
                </span>
              )}
            </div>
            
            <div className="preference-modal__actions">
              <button
                onClick={handleClose}
                className="preference-btn preference-btn--secondary"
                disabled={isLoading}
              >
                Annulla
              </button>
              <button
                onClick={handleSave}
                className="preference-btn preference-btn--primary"
                disabled={isLoading || !hasChanges}
              >
                {isLoading ? 'Salvataggio...' : 'Salva Preferenze'}
              </button>
            </div>
          </div>

          {/* Link alle policy */}
          <div className="preference-modal__links">
            <a href={gdprConfig.policyUrls.privacy} target="_blank" rel="noopener noreferrer">
              Privacy Policy
            </a>
            <a href={gdprConfig.policyUrls.cookies} target="_blank" rel="noopener noreferrer">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>

      {/* Stili CSS */}
      <style jsx>{`
        .preference-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 10000;
          backdrop-filter: blur(4px);
        }

        .preference-modal {
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: white;
          border-radius: 12px;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
          z-index: 10001;
          max-width: 800px;
          width: 90vw;
          max-height: 90vh;
          overflow: hidden;
          animation: modalAppear 0.3s ease-out;
        }

        @keyframes modalAppear {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }

        .preference-modal__container {
          display: flex;
          flex-direction: column;
          height: 100%;
          max-height: 90vh;
        }

        .preference-modal__header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 24px 0 24px;
          border-bottom: 1px solid #e5e7eb;
          padding-bottom: 16px;
          margin-bottom: 0;
        }

        .preference-modal__title {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
          color: #1f2937;
          font-family: 'Georgia', serif;
        }

        .preference-modal__close {
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #6b7280;
          padding: 8px;
          border-radius: 6px;
          transition: all 0.2s;
        }

        .preference-modal__close:hover {
          background: #f3f4f6;
          color: #374151;
        }

        .preference-modal__description {
          padding: 16px 24px;
          background: #f9fafb;
          border-bottom: 1px solid #e5e7eb;
        }

        .preference-modal__description p {
          margin: 0;
          color: #4b5563;
          line-height: 1.6;
        }

        .preference-categories {
          flex: 1;
          overflow-y: auto;
          padding: 24px;
        }

        .preference-category {
          margin-bottom: 24px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          overflow: hidden;
        }

        .preference-category__header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 20px;
          background: #f9fafb;
          gap: 16px;
        }

        .preference-category__info {
          flex: 1;
        }

        .preference-category__name {
          margin: 0 0 8px 0;
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
        }

        .preference-category__description {
          margin: 0;
          color: #6b7280;
          line-height: 1.5;
          font-size: 14px;
        }

        .preference-category__toggle {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .toggle-switch {
          position: relative;
          display: inline-block;
          width: 50px;
          height: 24px;
        }

        .toggle-switch input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-slider {
          position: absolute;
          cursor: pointer;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: #cbd5e1;
          transition: 0.3s;
          border-radius: 24px;
        }

        .toggle-slider:before {
          position: absolute;
          content: "";
          height: 18px;
          width: 18px;
          left: 3px;
          bottom: 3px;
          background-color: white;
          transition: 0.3s;
          border-radius: 50%;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        }

        input:checked + .toggle-slider {
          background-color: #2563eb;
        }

        input:checked + .toggle-slider:before {
          transform: translateX(26px);
        }

        input:disabled + .toggle-slider {
          background-color: #10b981;
          cursor: not-allowed;
        }

        .preference-category__required {
          font-size: 11px;
          color: #059669;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .preference-category__cookies {
          padding: 20px;
          background: white;
        }

        .preference-category__cookies h4 {
          margin: 0 0 12px 0;
          font-size: 14px;
          font-weight: 600;
          color: #374151;
        }

        .cookie-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .cookie-item {
          padding: 12px;
          background: #f9fafb;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
        }

        .cookie-item__info {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 8px;
        }

        .cookie-item__name {
          font-weight: 600;
          color: #1f2937;
          font-size: 13px;
          font-family: 'Monaco', 'Menlo', monospace;
        }

        .cookie-item__purpose {
          color: #4b5563;
          font-size: 12px;
          line-height: 1.4;
        }

        .cookie-item__meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 11px;
          color: #6b7280;
        }

        .cookie-item__duration {
          font-weight: 500;
        }

        .cookie-item__provider {
          font-style: italic;
        }

        .preference-modal__quick-actions {
          display: flex;
          gap: 12px;
          padding: 0 24px;
          margin-bottom: 16px;
        }

        .preference-modal__footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 24px;
          border-top: 1px solid #e5e7eb;
          background: #f9fafb;
        }

        .preference-modal__changes {
          color: #d97706;
          font-size: 14px;
          font-weight: 500;
        }

        .preference-modal__actions {
          display: flex;
          gap: 12px;
        }

        .preference-btn {
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          font-family: inherit;
        }

        .preference-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        .preference-btn--primary {
          background: #2563eb;
          color: white;
        }

        .preference-btn--primary:hover:not(:disabled) {
          background: #1d4ed8;
        }

        .preference-btn--secondary {
          background: #6b7280;
          color: white;
        }

        .preference-btn--secondary:hover:not(:disabled) {
          background: #4b5563;
        }

        .preference-btn--outline {
          background: transparent;
          color: #2563eb;
          border: 1px solid #2563eb;
        }

        .preference-btn--outline:hover:not(:disabled) {
          background: #2563eb;
          color: white;
        }

        .preference-modal__links {
          display: flex;
          justify-content: center;
          gap: 24px;
          padding: 16px 24px;
          border-top: 1px solid #e5e7eb;
        }

        .preference-modal__links a {
          color: #2563eb;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
        }

        .preference-modal__links a:hover {
          text-decoration: underline;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .preference-modal {
            width: 95vw;
            max-height: 95vh;
          }

          .preference-category__header {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }

          .preference-category__toggle {
            align-self: flex-end;
          }

          .preference-modal__footer {
            flex-direction: column;
            gap: 12px;
            align-items: stretch;
          }

          .preference-modal__actions {
            justify-content: stretch;
          }

          .preference-btn {
            flex: 1;
          }

          .preference-modal__quick-actions {
            flex-direction: column;
          }
        }

        @media (max-width: 480px) {
          .preference-modal__title {
            font-size: 20px;
          }

          .cookie-item__meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
        }
      `}</style>
    </>
  );
};

export default PreferenceCenter;

