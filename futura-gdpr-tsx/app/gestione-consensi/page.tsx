'use client';

import React, { useState, useEffect } from 'react';
import { Metadata } from 'next';
import { ConsentPreferences } from '../../types/gdpr';
import { getConsent, saveConsent, clearConsent, getPreferences } from '../../utils/gdpr/consentStorage';
import { cleanupUnauthorizedCookies, getAllCookies, categorizeCookies } from '../../utils/gdpr/cookieUtils';
import { gdprConfig } from '../../gdpr.config';
import PreferenceCenter from '../../components/gdpr/PreferenceCenter';

/**
 * Pagina Gestione Consensi per Futura Company
 * Dashboard per la gestione delle preferenze privacy dell'utente
 */
export default function GestioneConsentiPage(): JSX.Element {
  const [preferences, setPreferences] = useState<ConsentPreferences>({
    necessary: true,
    functional: false,
    analytics: false,
    marketing: false
  });
  
  const [consentData, setConsentData] = useState<any>(null);
  const [showPreferenceCenter, setShowPreferenceCenter] = useState<boolean>(false);
  const [cookies, setCookies] = useState<Record<string, string[]>>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    loadConsentData();
    loadCookieData();
  }, []);

  /**
   * Carica i dati del consenso
   */
  const loadConsentData = (): void => {
    try {
      const consent = getConsent();
      const prefs = getPreferences();
      
      setConsentData(consent);
      setPreferences(prefs);
    } catch (error) {
      console.error('Errore nel caricamento dei dati di consenso:', error);
    } finally {
      setIsLoading(false);
    }
  };

  /**
   * Carica i dati dei cookie
   */
  const loadCookieData = (): void => {
    try {
      const categorizedCookies = categorizeCookies();
      setCookies(categorizedCookies);
    } catch (error) {
      console.error('Errore nel caricamento dei cookie:', error);
    }
  };

  /**
   * Gestisce il salvataggio delle preferenze
   */
  const handleSavePreferences = (newPreferences: ConsentPreferences): void => {
    setPreferences(newPreferences);
    loadConsentData();
    loadCookieData();
    setMessage('Preferenze salvate con successo!');
    setTimeout(() => setMessage(''), 3000);
  };

  /**
   * Cancella tutti i consensi
   */
  const handleClearAllConsent = (): void => {
    if (window.confirm('Sei sicuro di voler cancellare tutti i consensi? Questa azione non può essere annullata.')) {
      clearConsent();
      cleanupUnauthorizedCookies();
      loadConsentData();
      loadCookieData();
      setMessage('Tutti i consensi sono stati cancellati.');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  /**
   * Accetta tutti i consensi
   */
  const handleAcceptAll = (): void => {
    const allAccepted: ConsentPreferences = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true
    };
    
    saveConsent(allAccepted);
    handleSavePreferences(allAccepted);
  };

  /**
   * Rifiuta tutti i consensi opzionali
   */
  const handleRejectAll = (): void => {
    const onlyNecessary: ConsentPreferences = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false
    };
    
    saveConsent(onlyNecessary);
    cleanupUnauthorizedCookies();
    handleSavePreferences(onlyNecessary);
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Caricamento preferenze...</p>
        
        <style jsx>{`
          .loading-container {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            background: #f9fafb;
          }
          
          .loading-spinner {
            width: 40px;
            height: 40px;
            border: 4px solid #e5e7eb;
            border-top: 4px solid #2563eb;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 16px;
          }
          
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="consent-management">
      <div className="consent-management__container">
        
        {/* Header */}
        <header className="consent-management__header">
          <h1 className="consent-management__title">
            ⚙️ Gestione Consensi
          </h1>
          <p className="consent-management__subtitle">
            Gestisci le tue preferenze sulla privacy per {gdprConfig.siteName}
          </p>
          
          {message && (
            <div className="success-message">
              ✅ {message}
            </div>
          )}
        </header>

        {/* Stato Consenso */}
        <section className="consent-status">
          <h2 className="section-title">📊 Stato Attuale dei Consensi</h2>
          
          {consentData ? (
            <div className="consent-info">
              <div className="consent-summary">
                <div className="summary-item">
                  <span className="summary-label">Data consenso:</span>
                  <span className="summary-value">
                    {new Date(consentData.timestamp).toLocaleDateString('it-IT', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Scadenza:</span>
                  <span className="summary-value">
                    {new Date(consentData.expires).toLocaleDateString('it-IT', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <div className="summary-item">
                  <span className="summary-label">Versione:</span>
                  <span className="summary-value">{consentData.version}</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="no-consent">
              <p>⚠️ Non hai ancora fornito il consenso per l'utilizzo dei cookie.</p>
              <button 
                onClick={() => setShowPreferenceCenter(true)}
                className="btn btn--primary"
              >
                Configura Consensi
              </button>
            </div>
          )}
        </section>

        {/* Categorie Consenso */}
        <section className="consent-categories">
          <h2 className="section-title">🎛️ Categorie di Consenso</h2>
          
          <div className="categories-grid">
            {Object.entries(gdprConfig.categories).map(([key, category]) => {
              const categoryKey = key as keyof ConsentPreferences;
              const isEnabled = preferences[categoryKey];
              const cookieCount = cookies[categoryKey]?.length || 0;

              return (
                <div key={key} className={`category-card ${isEnabled ? 'enabled' : 'disabled'}`}>
                  <div className="category-header">
                    <h3 className="category-name">{category.name}</h3>
                    <div className="category-status">
                      <span className={`status-indicator ${isEnabled ? 'active' : 'inactive'}`}>
                        {isEnabled ? '✅' : '❌'}
                      </span>
                      <span className="status-text">
                        {isEnabled ? 'Abilitato' : 'Disabilitato'}
                      </span>
                    </div>
                  </div>
                  
                  <p className="category-description">{category.description}</p>
                  
                  <div className="category-details">
                    <div className="detail-item">
                      <span className="detail-label">Cookie attivi:</span>
                      <span className="detail-value">{cookieCount}</span>
                    </div>
                    <div className="detail-item">
                      <span className="detail-label">Tipo:</span>
                      <span className={`detail-badge ${category.required ? 'required' : 'optional'}`}>
                        {category.required ? 'Necessari' : 'Opzionali'}
                      </span>
                    </div>
                  </div>

                  {category.required && (
                    <div className="required-notice">
                      ℹ️ Questi cookie sono necessari per il funzionamento del sito e non possono essere disabilitati.
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Cookie Attivi */}
        <section className="active-cookies">
          <h2 className="section-title">🍪 Cookie Attualmente Attivi</h2>
          
          <div className="cookies-overview">
            {Object.entries(cookies).map(([category, cookieList]) => (
              <div key={category} className="cookie-category">
                <h3 className="cookie-category-title">
                  {gdprConfig.categories[category as keyof ConsentPreferences]?.name || category}
                  <span className="cookie-count">({cookieList.length})</span>
                </h3>
                
                {cookieList.length > 0 ? (
                  <div className="cookie-list">
                    {cookieList.map((cookieName, index) => (
                      <div key={index} className="cookie-item">
                        <span className="cookie-name">{cookieName}</span>
                        <span className={`cookie-status ${preferences[category as keyof ConsentPreferences] ? 'allowed' : 'blocked'}`}>
                          {preferences[category as keyof ConsentPreferences] ? 'Consentito' : 'Bloccato'}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="no-cookies">Nessun cookie attivo in questa categoria</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Azioni Rapide */}
        <section className="quick-actions">
          <h2 className="section-title">⚡ Azioni Rapide</h2>
          
          <div className="actions-grid">
            <div className="action-card">
              <h3>🎛️ Personalizza Preferenze</h3>
              <p>Configura nel dettaglio le tue preferenze per ogni categoria di cookie.</p>
              <button 
                onClick={() => setShowPreferenceCenter(true)}
                className="btn btn--primary"
              >
                Apri Centro Preferenze
              </button>
            </div>

            <div className="action-card">
              <h3>✅ Accetta Tutto</h3>
              <p>Abilita tutte le categorie di cookie per un'esperienza completa del sito.</p>
              <button 
                onClick={handleAcceptAll}
                className="btn btn--success"
              >
                Accetta Tutti i Cookie
              </button>
            </div>

            <div className="action-card">
              <h3>🚫 Solo Necessari</h3>
              <p>Disabilita tutti i cookie opzionali, mantenendo solo quelli necessari.</p>
              <button 
                onClick={handleRejectAll}
                className="btn btn--secondary"
              >
                Solo Cookie Necessari
              </button>
            </div>

            <div className="action-card">
              <h3>🗑️ Cancella Tutto</h3>
              <p>Rimuovi tutti i consensi e i cookie salvati. Richiederà una nuova configurazione.</p>
              <button 
                onClick={handleClearAllConsent}
                className="btn btn--danger"
              >
                Cancella Tutti i Consensi
              </button>
            </div>
          </div>
        </section>

        {/* Informazioni Aggiuntive */}
        <section className="additional-info">
          <h2 className="section-title">📚 Informazioni Aggiuntive</h2>
          
          <div className="info-grid">
            <div className="info-card">
              <h3>🔒 I Tuoi Diritti</h3>
              <p>
                Secondo il GDPR, hai il diritto di accedere, modificare, cancellare i tuoi dati 
                e revocare il consenso in qualsiasi momento.
              </p>
              <a href={gdprConfig.policyUrls.privacy} className="info-link">
                Leggi la Privacy Policy
              </a>
            </div>

            <div className="info-card">
              <h3>🍪 Come Funzionano i Cookie</h3>
              <p>
                I cookie sono piccoli file che migliorano la tua esperienza di navigazione 
                e ci aiutano a fornire contenuti personalizzati.
              </p>
              <a href={gdprConfig.policyUrls.cookies} className="info-link">
                Leggi la Cookie Policy
              </a>
            </div>

            <div className="info-card">
              <h3>📧 Contattaci</h3>
              <p>
                Hai domande sulla privacy o sui cookie? Il nostro team è disponibile 
                per aiutarti e rispondere ai tuoi dubbi.
              </p>
              <a href={`mailto:${gdprConfig.contactEmail}?subject=Domande Privacy`} className="info-link">
                Invia Email
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="consent-management__footer">
          <div className="footer-content">
            <p>
              <strong>{gdprConfig.companyName}</strong><br/>
              Gestisci le tue preferenze sulla privacy in modo semplice e trasparente.
            </p>
            <div className="footer-links">
              <a href="/">← Torna al sito</a>
              <a href={gdprConfig.policyUrls.privacy}>Privacy Policy</a>
              <a href={gdprConfig.policyUrls.cookies}>Cookie Policy</a>
            </div>
          </div>
        </footer>
      </div>

      {/* Centro Preferenze Modal */}
      <PreferenceCenter
        isOpen={showPreferenceCenter}
        onClose={() => setShowPreferenceCenter(false)}
        onSave={handleSavePreferences}
        initialPreferences={preferences}
      />

      {/* Stili CSS */}
      <style jsx>{`
        .consent-management {
          min-height: 100vh;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
          font-family: 'Georgia', serif;
        }

        .consent-management__container {
          max-width: 1000px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .consent-management__header {
          text-align: center;
          margin-bottom: 48px;
          padding: 32px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .consent-management__title {
          margin: 0 0 16px 0;
          font-size: 36px;
          font-weight: 700;
          color: #1f2937;
          line-height: 1.2;
        }

        .consent-management__subtitle {
          margin: 0 0 20px 0;
          font-size: 18px;
          color: #6b7280;
          line-height: 1.5;
        }

        .success-message {
          display: inline-block;
          padding: 12px 24px;
          background: #d1fae5;
          color: #065f46;
          border-radius: 8px;
          border: 1px solid #a7f3d0;
          font-weight: 500;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .section-title {
          margin: 0 0 24px 0;
          font-size: 24px;
          font-weight: 600;
          color: #1f2937;
          padding-bottom: 8px;
          border-bottom: 2px solid #e5e7eb;
        }

        .consent-status,
        .consent-categories,
        .active-cookies,
        .quick-actions,
        .additional-info {
          margin-bottom: 48px;
          padding: 32px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
        }

        .consent-info {
          background: #f0f9ff;
          padding: 24px;
          border-radius: 8px;
          border: 1px solid #bae6fd;
        }

        .consent-summary {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .summary-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .summary-label {
          font-size: 14px;
          color: #6b7280;
          font-weight: 500;
        }

        .summary-value {
          font-size: 16px;
          color: #1f2937;
          font-weight: 600;
        }

        .no-consent {
          text-align: center;
          padding: 40px;
          background: #fef3c7;
          border-radius: 8px;
          border: 1px solid #f59e0b;
        }

        .no-consent p {
          margin: 0 0 20px 0;
          color: #92400e;
          font-size: 16px;
        }

        .categories-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .category-card {
          padding: 24px;
          border-radius: 8px;
          border: 2px solid;
          transition: all 0.3s ease;
        }

        .category-card.enabled {
          background: #f0fdf4;
          border-color: #22c55e;
        }

        .category-card.disabled {
          background: #fef2f2;
          border-color: #ef4444;
        }

        .category-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .category-name {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
        }

        .category-status {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .status-indicator {
          font-size: 18px;
        }

        .status-text {
          font-size: 14px;
          font-weight: 500;
        }

        .category-card.enabled .status-text {
          color: #16a34a;
        }

        .category-card.disabled .status-text {
          color: #dc2626;
        }

        .category-description {
          margin: 0 0 16px 0;
          color: #4b5563;
          line-height: 1.6;
        }

        .category-details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .detail-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .detail-label {
          font-size: 14px;
          color: #6b7280;
        }

        .detail-value {
          font-weight: 600;
          color: #1f2937;
        }

        .detail-badge {
          padding: 2px 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .detail-badge.required {
          background: #fef3c7;
          color: #92400e;
        }

        .detail-badge.optional {
          background: #e0e7ff;
          color: #3730a3;
        }

        .required-notice {
          padding: 12px;
          background: #fffbeb;
          border-radius: 6px;
          border: 1px solid #fbbf24;
          color: #92400e;
          font-size: 14px;
          line-height: 1.5;
        }

        .cookies-overview {
          display: grid;
          gap: 24px;
        }

        .cookie-category {
          padding: 20px;
          background: #f9fafb;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }

        .cookie-category-title {
          margin: 0 0 16px 0;
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .cookie-count {
          font-size: 14px;
          color: #6b7280;
          font-weight: 400;
        }

        .cookie-list {
          display: grid;
          gap: 8px;
        }

        .cookie-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 8px 12px;
          background: white;
          border-radius: 4px;
          border: 1px solid #e5e7eb;
        }

        .cookie-name {
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 13px;
          color: #374151;
        }

        .cookie-status {
          font-size: 12px;
          font-weight: 500;
          padding: 2px 8px;
          border-radius: 4px;
        }

        .cookie-status.allowed {
          background: #d1fae5;
          color: #065f46;
        }

        .cookie-status.blocked {
          background: #fee2e2;
          color: #991b1b;
        }

        .no-cookies {
          margin: 0;
          color: #6b7280;
          font-style: italic;
        }

        .actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
        }

        .action-card {
          padding: 24px;
          background: #f8fafc;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
          text-align: center;
        }

        .action-card h3 {
          margin: 0 0 12px 0;
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
        }

        .action-card p {
          margin: 0 0 20px 0;
          color: #4b5563;
          line-height: 1.5;
        }

        .btn {
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
          font-family: inherit;
          text-decoration: none;
          display: inline-block;
        }

        .btn--primary {
          background: #2563eb;
          color: white;
        }

        .btn--primary:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        .btn--success {
          background: #16a34a;
          color: white;
        }

        .btn--success:hover {
          background: #15803d;
          transform: translateY(-1px);
        }

        .btn--secondary {
          background: #6b7280;
          color: white;
        }

        .btn--secondary:hover {
          background: #4b5563;
          transform: translateY(-1px);
        }

        .btn--danger {
          background: #dc2626;
          color: white;
        }

        .btn--danger:hover {
          background: #b91c1c;
          transform: translateY(-1px);
        }

        .info-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
        }

        .info-card {
          padding: 24px;
          background: #f0f9ff;
          border-radius: 8px;
          border: 1px solid #bae6fd;
        }

        .info-card h3 {
          margin: 0 0 12px 0;
          font-size: 18px;
          font-weight: 600;
          color: #0c4a6e;
        }

        .info-card p {
          margin: 0 0 16px 0;
          color: #0f172a;
          line-height: 1.6;
        }

        .info-link {
          color: #2563eb;
          text-decoration: none;
          font-weight: 500;
          padding: 8px 16px;
          background: white;
          border-radius: 4px;
          display: inline-block;
          transition: all 0.2s;
        }

        .info-link:hover {
          background: #eff6ff;
          transform: translateY(-1px);
        }

        .consent-management__footer {
          margin-top: 48px;
          padding: 32px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .footer-content {
          color: #4b5563;
        }

        .footer-content p {
          margin: 0 0 24px 0;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 24px;
          flex-wrap: wrap;
        }

        .footer-links a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 6px;
          transition: all 0.2s;
        }

        .footer-links a:hover {
          background: #eff6ff;
          color: #1d4ed8;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .consent-management__container {
            padding: 20px 16px;
          }

          .consent-management__title {
            font-size: 28px;
          }

          .consent-management__subtitle {
            font-size: 16px;
          }

          .consent-status,
          .consent-categories,
          .active-cookies,
          .quick-actions,
          .additional-info {
            padding: 24px 20px;
          }

          .categories-grid {
            grid-template-columns: 1fr;
          }

          .category-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .category-details {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .actions-grid {
            grid-template-columns: 1fr;
          }

          .info-grid {
            grid-template-columns: 1fr;
          }

          .footer-links {
            flex-direction: column;
            align-items: center;
          }

          .summary-item {
            text-align: center;
          }
        }

        /* Stampa */
        @media print {
          .consent-management {
            background: white;
          }

          .btn,
          .footer-links {
            display: none;
          }

          .consent-status,
          .consent-categories,
          .active-cookies,
          .quick-actions,
          .additional-info {
            box-shadow: none;
            border: 1px solid #000;
          }
        }
      `}</style>
    </div>
  );
}

