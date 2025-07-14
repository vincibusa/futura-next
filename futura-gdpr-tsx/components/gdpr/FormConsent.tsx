'use client';

import React, { useState } from 'react';
import { FormConsentOptions, FormConsentProps } from '../../types/gdpr';
import { gdprConfig } from '../../gdpr.config';

/**
 * Componente per il consenso nei form di contatto
 * Specifico per Futura Company con opzioni per newsletter ed eventi
 */
const FormConsent: React.FC<FormConsentProps> = ({
  onConsentChange,
  required = true,
  showNewsletter = true,
  showEvents = true,
  className = ''
}) => {
  const [consent, setConsent] = useState<FormConsentOptions>({
    contact: false,
    newsletter: false,
    events: false,
    marketing: false
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  /**
   * Gestisce il cambio di consenso
   */
  const handleConsentChange = (type: keyof FormConsentOptions, checked: boolean): void => {
    const newConsent = {
      ...consent,
      [type]: checked
    };

    setConsent(newConsent);
    onConsentChange(newConsent);

    // Rimuove l'errore se il consenso obbligatorio viene dato
    if (type === 'contact' && checked && errors.contact) {
      setErrors(prev => ({ ...prev, contact: '' }));
    }
  };

  /**
   * Valida i consensi obbligatori
   */
  const validateConsent = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (required && !consent.contact) {
      newErrors.contact = 'Il consenso per il trattamento dei dati è obbligatorio per elaborare la richiesta.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Espone la funzione di validazione al componente padre
  React.useImperativeHandle(React.useRef(), () => ({
    validate: validateConsent,
    getConsent: () => consent
  }));

  return (
    <div className={`form-consent ${className}`}>
      
      {/* Consenso obbligatorio per il trattamento */}
      <div className="consent-item consent-item--required">
        <label className="consent-label">
          <input
            type="checkbox"
            checked={consent.contact}
            onChange={(e) => handleConsentChange('contact', e.target.checked)}
            className="consent-checkbox"
            required={required}
            aria-describedby="consent-contact-description"
          />
          <span className="consent-checkmark"></span>
          <div className="consent-text">
            <span className="consent-main-text">
              Acconsento al trattamento dei miei dati personali per rispondere alla mia richiesta 
              di contatto come descritto nella{' '}
              <a 
                href={gdprConfig.policyUrls.privacy} 
                target="_blank" 
                rel="noopener noreferrer"
                className="consent-link"
              >
                Privacy Policy
              </a>.
              {required && <span className="consent-required"> *</span>}
            </span>
            <small id="consent-contact-description" className="consent-description">
              Questo consenso è necessario per elaborare la tua richiesta e fornirti una risposta.
            </small>
          </div>
        </label>
        {errors.contact && (
          <div className="consent-error" role="alert">
            {errors.contact}
          </div>
        )}
      </div>

      {/* Consenso newsletter (opzionale) */}
      {showNewsletter && (
        <div className="consent-item consent-item--optional">
          <label className="consent-label">
            <input
              type="checkbox"
              checked={consent.newsletter}
              onChange={(e) => handleConsentChange('newsletter', e.target.checked)}
              className="consent-checkbox"
              aria-describedby="consent-newsletter-description"
            />
            <span className="consent-checkmark"></span>
            <div className="consent-text">
              <span className="consent-main-text">
                Desidero ricevere la newsletter con gli ultimi articoli delle 5 testate di Futura Company
                <span className="consent-optional"> (facoltativo)</span>
              </span>
              <small id="consent-newsletter-description" className="consent-description">
                Riceverai contenuti editoriali di qualità su enogastronomia, turismo e cultura siciliana. 
                Puoi disiscriverti in qualsiasi momento.
              </small>
            </div>
          </label>
        </div>
      )}

      {/* Consenso eventi (opzionale) */}
      {showEvents && (
        <div className="consent-item consent-item--optional">
          <label className="consent-label">
            <input
              type="checkbox"
              checked={consent.events}
              onChange={(e) => handleConsentChange('events', e.target.checked)}
              className="consent-checkbox"
              aria-describedby="consent-events-description"
            />
            <span className="consent-checkmark"></span>
            <div className="consent-text">
              <span className="consent-main-text">
                Desidero ricevere inviti agli eventi culturali e gastronomici promossi da Futura Company
                <span className="consent-optional"> (facoltativo)</span>
              </span>
              <small id="consent-events-description" className="consent-description">
                Ti informeremo su festival, manifestazioni e iniziative di qualità in Sicilia e oltre.
              </small>
            </div>
          </label>
        </div>
      )}

      {/* Consenso marketing generale (opzionale) */}
      <div className="consent-item consent-item--optional">
        <label className="consent-label">
          <input
            type="checkbox"
            checked={consent.marketing}
            onChange={(e) => handleConsentChange('marketing', e.target.checked)}
            className="consent-checkbox"
            aria-describedby="consent-marketing-description"
          />
          <span className="consent-checkmark"></span>
          <div className="consent-text">
            <span className="consent-main-text">
              Acconsento a ricevere comunicazioni commerciali sui servizi di Futura Company
              <span className="consent-optional"> (facoltativo)</span>
            </span>
            <small id="consent-marketing-description" className="consent-description">
              Informazioni su servizi di marketing, comunicazione ed eventi aziendali.
            </small>
          </div>
        </label>
      </div>

      {/* Informazioni aggiuntive */}
      <div className="consent-info">
        <p className="consent-info-text">
          <strong>I tuoi diritti:</strong> Puoi accedere, modificare o cancellare i tuoi dati, 
          limitarne il trattamento o richiederne la portabilità. 
          Per esercitare i tuoi diritti contatta{' '}
          <a href={`mailto:${gdprConfig.contactEmail}`} className="consent-link">
            {gdprConfig.contactEmail}
          </a>.
        </p>
        
        <div className="consent-links">
          <a 
            href={gdprConfig.policyUrls.privacy} 
            target="_blank" 
            rel="noopener noreferrer"
            className="consent-policy-link"
          >
            📄 Privacy Policy
          </a>
          <a 
            href={gdprConfig.policyUrls.cookies} 
            target="_blank" 
            rel="noopener noreferrer"
            className="consent-policy-link"
          >
            🍪 Cookie Policy
          </a>
          <a 
            href={gdprConfig.policyUrls.preferences} 
            target="_blank" 
            rel="noopener noreferrer"
            className="consent-policy-link"
          >
            ⚙️ Gestione Consensi
          </a>
        </div>
      </div>

      {/* Stili CSS */}
      <style jsx>{`
        .form-consent {
          margin: 20px 0;
          padding: 20px;
          background: #f9fafb;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }

        .consent-item {
          margin-bottom: 16px;
        }

        .consent-item--required {
          padding: 16px;
          background: #fef3c7;
          border-radius: 6px;
          border: 1px solid #f59e0b;
        }

        .consent-item--optional {
          padding: 12px;
          background: white;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
        }

        .consent-label {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          cursor: pointer;
          line-height: 1.5;
        }

        .consent-checkbox {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        .consent-checkmark {
          position: relative;
          height: 20px;
          width: 20px;
          background-color: white;
          border: 2px solid #d1d5db;
          border-radius: 4px;
          transition: all 0.2s ease;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .consent-label:hover .consent-checkmark {
          border-color: #2563eb;
        }

        .consent-checkbox:checked ~ .consent-checkmark {
          background-color: #2563eb;
          border-color: #2563eb;
        }

        .consent-checkmark:after {
          content: "";
          position: absolute;
          display: none;
          left: 6px;
          top: 2px;
          width: 6px;
          height: 10px;
          border: solid white;
          border-width: 0 2px 2px 0;
          transform: rotate(45deg);
        }

        .consent-checkbox:checked ~ .consent-checkmark:after {
          display: block;
        }

        .consent-text {
          flex: 1;
        }

        .consent-main-text {
          display: block;
          color: #1f2937;
          font-size: 14px;
          line-height: 1.5;
          margin-bottom: 4px;
        }

        .consent-required {
          color: #dc2626;
          font-weight: 600;
        }

        .consent-optional {
          color: #6b7280;
          font-style: italic;
        }

        .consent-description {
          display: block;
          color: #6b7280;
          font-size: 12px;
          line-height: 1.4;
          margin-top: 4px;
        }

        .consent-link {
          color: #2563eb;
          text-decoration: underline;
          font-weight: 500;
        }

        .consent-link:hover {
          color: #1d4ed8;
        }

        .consent-error {
          margin-top: 8px;
          padding: 8px 12px;
          background: #fef2f2;
          border: 1px solid #fca5a5;
          border-radius: 4px;
          color: #dc2626;
          font-size: 13px;
          font-weight: 500;
        }

        .consent-info {
          margin-top: 20px;
          padding-top: 16px;
          border-top: 1px solid #e5e7eb;
        }

        .consent-info-text {
          margin: 0 0 12px 0;
          color: #4b5563;
          font-size: 12px;
          line-height: 1.5;
        }

        .consent-links {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .consent-policy-link {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          color: #2563eb;
          text-decoration: none;
          font-size: 12px;
          font-weight: 500;
          padding: 4px 8px;
          border-radius: 4px;
          transition: all 0.2s;
        }

        .consent-policy-link:hover {
          background: #eff6ff;
          color: #1d4ed8;
        }

        /* Focus states per accessibilità */
        .consent-checkbox:focus ~ .consent-checkmark {
          outline: 2px solid #2563eb;
          outline-offset: 2px;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .form-consent {
            padding: 16px;
          }

          .consent-item--required {
            padding: 12px;
          }

          .consent-links {
            flex-direction: column;
            gap: 8px;
          }

          .consent-policy-link {
            align-self: flex-start;
          }
        }

        @media (max-width: 480px) {
          .consent-label {
            gap: 8px;
          }

          .consent-main-text {
            font-size: 13px;
          }

          .consent-description {
            font-size: 11px;
          }
        }

        /* Stati di validazione */
        .consent-item--required.has-error .consent-checkmark {
          border-color: #dc2626;
        }

        .consent-item--required.has-error {
          background: #fef2f2;
          border-color: #fca5a5;
        }

        /* Animazioni */
        .consent-checkmark {
          animation: none;
        }

        .consent-checkbox:checked ~ .consent-checkmark {
          animation: checkboxPulse 0.3s ease;
        }

        @keyframes checkboxPulse {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
          100% {
            transform: scale(1);
          }
        }

        /* Stampa */
        @media print {
          .form-consent {
            background: white;
            border: 1px solid #000;
          }

          .consent-item--required {
            background: #f0f0f0;
          }

          .consent-link {
            color: #000;
            text-decoration: underline;
          }
        }
      `}</style>
    </div>
  );
};

export default FormConsent;

