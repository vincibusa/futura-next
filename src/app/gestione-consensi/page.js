'use client';

import React, { useState, useEffect } from 'react';
import { gdprConfig } from '../../config/gdpr.config';
import { getConsent, saveConsent } from '../utils/gdpr/consentStorage';
import { setCookie, deleteCookie } from '../utils/gdpr/cookieUtils';

export default function ConsentManagementPage() {
  const [consent, setConsent] = useState({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadConsent = async () => {
      try {
        const savedConsent = await getConsent();
        setConsent(savedConsent);
      } catch (error) {
        console.error('Errore nel caricamento del consenso:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadConsent();
  }, []);

  const handleConsentChange = (category, value) => {
    setConsent(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const handleSave = async () => {
    try {
      await saveConsent(consent);
      
      // Aggiorna i cookie
      Object.entries(consent).forEach(([category, enabled]) => {
        if (enabled) {
          setCookie(`consent_${category}`, 'true', 365);
        } else if (category !== 'necessary') {
          deleteCookie(`consent_${category}`);
        }
      });

      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('Errore nel salvataggio del consenso:', error);
      alert('Si è verificato un errore durante il salvataggio delle preferenze.');
    }
  };

  const handleAcceptAll = async () => {
    const allConsent = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    
    setConsent(allConsent);
    await saveConsent(allConsent);
    
    // Imposta tutti i cookie
    Object.entries(allConsent).forEach(([category, enabled]) => {
      if (enabled) {
        setCookie(`consent_${category}`, 'true', 365);
      }
    });

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleRejectAll = async () => {
    const minimalConsent = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    };
    
    setConsent(minimalConsent);
    await saveConsent(minimalConsent);
    
    // Rimuovi cookie non necessari
    ['functional', 'analytics', 'marketing'].forEach(category => {
      deleteCookie(`consent_${category}`);
    });

    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow-lg rounded-lg p-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-blue-600 px-6 py-8">
            <h1 className="text-3xl font-bold text-white">Gestione Consensi Cookie</h1>
            <p className="mt-2 text-blue-100">
              Personalizza le tue preferenze sui cookie per il Gruppo Futura Company
            </p>
          </div>

          <div className="px-6 py-8">
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <p className="font-semibold">Preferenze salvate con successo!</p>
                <p className="text-sm">Le tue impostazioni sono state aggiornate.</p>
              </div>
            )}

            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                Il Gruppo Editoriale Futura Company rispetta la tua privacy. Puoi scegliere quali categorie di cookie 
                desideri autorizzare. I cookie necessari non possono essere disabilitati in quanto essenziali per il 
                funzionamento del sito.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <button
                  onClick={handleAcceptAll}
                  className="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                >
                  Accetta tutti i cookie
                </button>
                <button
                  onClick={handleRejectAll}
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  Rifiuta tutti (solo necessari)
                </button>
              </div>
            </div>

            <div className="space-y-6">
              {/* Cookie Necessari */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">Cookie Tecnici e Necessari</h3>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={consent.necessary}
                      disabled
                      className="w-5 h-5 text-blue-600 border-gray-300 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-500">Sempre attivo</span>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">
                  Questi cookie sono essenziali per il funzionamento del sito e non possono essere disabilitati. 
                  Permettono funzionalità di base come la navigazione delle pagine e l'accesso alle aree protette.
                </p>
              </div>

              {/* Cookie di Funzionalità */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">Cookie di Funzionalità</h3>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent.functional}
                      onChange={(e) => handleConsentChange('functional', e.target.checked)}
                      className="w-5 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      {consent.functional ? 'Attivo' : 'Disattivato'}
                    </span>
                  </label>
                </div>
                <p className="text-gray-700 text-sm">
                  Permettono al sito di ricordare le tue scelte (come la lingua preferita o la regione) 
                  e forniscono funzionalità avanzate e personalizzate.
                </p>
              </div>

              {/* Cookie Analitici */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">Cookie Analitici</h3>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent.analytics}
                      onChange={(e) => handleConsentChange('analytics', e.target.checked)}
                      className="w-5 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      {consent.analytics ? 'Attivo' : 'Disattivato'}
                    </span>
                  </label>
                </div>
                <p className="text-gray-700 text-sm">
                  Ci aiutano a capire come i visitatori interagiscono con il nostro sito raccogliendo e 
                  riportando informazioni in forma anonima sulle visite e l'utilizzo.
                </p>
              </div>

              {/* Cookie di Marketing */}
              <div className="border border-gray-200 rounded-lg p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">Cookie di Marketing</h3>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={consent.marketing}
                      onChange={(e) => handleConsentChange('marketing', e.target.checked)}
                      className="w-5 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      {consent.marketing ? 'Attivo' : 'Disattivato'}
                    </span>
                  </label>
                </div>
                <p className="text-gray-700 text-sm">
                  Utilizzati per tracciare i visitatori attraverso i siti web. L'intento è quello di mostrare 
                  annunci pubblicitari pertinenti e coinvolgenti per il singolo utente.
                </p>
              </div>
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={handleSave}
                className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors font-semibold"
              >
                Salva preferenze
              </button>
            </div>

            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">Informazioni aggiuntive</h4>
              <p className="text-sm text-gray-700 mb-2">
                Le tue preferenze si applicano a tutte le testate del Gruppo Futura Company:
              </p>
              <ul className="text-sm text-gray-600 list-disc list-inside">
                <li>Gambero Rosso Channel</li>
                <li>La Sicilia</li>
                <li>Giornale di Sicilia</li>
                <li>Corriere del Mezzogiorno</li>
                <li>Sicilia in Rosa</li>
              </ul>
              <p className="text-sm text-gray-700 mt-2">
                Puoi modificare le tue preferenze in qualsiasi momento visitando questa pagina.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}