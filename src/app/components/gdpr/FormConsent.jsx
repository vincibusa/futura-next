'use client';

import React, { useState, useEffect } from 'react';
import { gdprConfig } from '../../../config/gdpr.config';

/**
 * Componente per la gestione del consenso nei form di contatto
 */
const FormConsent = ({ 
  onConsentChange, 
  required = true, 
  showNewsletter = true, 
  showEvents = true, 
  className = '' 
}) => {
  const [consent, setConsent] = useState({
    contact: false,
    newsletter: false,
    events: false,
    marketing: false
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    onConsentChange(consent);
  }, [consent, onConsentChange]);

  const handleConsentChange = (type, value) => {
    const newConsent = {
      ...consent,
      [type]: value
    };
    
    setConsent(newConsent);
    
    // Valida il consenso
    if (required && type === 'contact') {
      setErrors({
        ...errors,
        contact: !value ? 'Il consenso al trattamento dei dati è obbligatorio' : null
      });
    }
  };

  const validate = () => {
    const newErrors = {};
    
    if (required && !consent.contact) {
      newErrors.contact = 'Il consenso al trattamento dei dati è obbligatorio';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Espone la funzione di validazione al componente padre
  useEffect(() => {
    if (onConsentChange.validate) {
      onConsentChange.validate = validate;
    }
  }, [consent, validate, onConsentChange]);

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="border border-gray-200 rounded-lg p-4 bg-gray-50">
        <h4 className="font-semibold text-gray-900 mb-3">Consenso Privacy</h4>
        
        {/* Consenso obbligatorio */}
        <div className="space-y-3">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={consent.contact}
              onChange={(e) => handleConsentChange('contact', e.target.checked)}
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              required={required}
            />
            <div>
              <span className={`text-sm ${required ? 'font-semibold text-red-700' : 'text-gray-700'}`}>
                Acconsento al trattamento dei miei dati personali per la gestione della richiesta di contatto
                {required && ' *'}
              </span>
              {errors.contact && (
                <p className="text-sm text-red-600 mt-1">{errors.contact}</p>
              )}
            </div>
          </label>

          {/* Consenso newsletter */}
          {showNewsletter && (
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consent.newsletter}
                onChange={(e) => handleConsentChange('newsletter', e.target.checked)}
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <div>
                <span className="text-sm text-gray-700">
                  Desidero ricevere la newsletter con le ultime notizie dalle nostre 5 testate giornalistiche
                </span>
                <p className="text-xs text-gray-500 mt-1">
                  Potrai disiscriverti in qualsiasi momento cliccando sul link presente in ogni email.
                </p>
              </div>
            </label>
          )}

          {/* Consenso eventi */}
          {showEvents && (
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={consent.events}
                onChange={(e) => handleConsentChange('events', e.target.checked)}
                className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <div>
                <span className="text-sm text-gray-700">
                  Desidero ricevere informazioni su eventi gastronomici, culturali e turistici organizzati dal gruppo
                </span>
                <p className="text-xs text-gray-500 mt-1">
                  Includi inviti a eventi esclusivi, anteprime e promozioni speciali.
                </p>
              </div>
            </label>
          )}

          {/* Consenso marketing */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={consent.marketing}
              onChange={(e) => handleConsentChange('marketing', e.target.checked)}
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <div>
              <span className="text-sm text-gray-700">
                Acconsento al trattamento dei miei dati per finalità di marketing e promozione personalizzata
              </span>
              <p className="text-xs text-gray-500 mt-1">
                Riceverai contenuti personalizzati in base ai tuoi interessi nel settore enogastronomico e turistico.
              </p>
            </div>
          </label>
        </div>

        <div className="mt-4 text-xs text-gray-500">
          <p>
            I tuoi dati saranno trattati nel rispetto del GDPR. 
            <a href="/privacy-policy" className="text-blue-600 hover:underline ml-1">
              Privacy Policy
            </a>
            {' | '}
            <a href="/cookie-policy" className="text-blue-600 hover:underline">
              Cookie Policy
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FormConsent;