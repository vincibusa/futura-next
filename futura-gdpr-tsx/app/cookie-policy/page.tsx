import React from 'react';
import { Metadata } from 'next';
import { gdprConfig } from '../../gdpr.config';

export const metadata: Metadata = {
  title: 'Cookie Policy | Futura Company',
  description: 'Informativa sui cookie di Futura Company - Gruppo Editoriale Siciliano. Scopri come utilizziamo i cookie per migliorare la tua esperienza di lettura.',
  robots: 'index, follow',
};

/**
 * Pagina Cookie Policy per Futura Company
 * Informativa dettagliata sui cookie utilizzati
 */
export default function CookiePolicyPage(): JSX.Element {
  const currentDate = new Date().toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="cookie-policy">
      <div className="cookie-policy__container">
        
        {/* Header */}
        <header className="cookie-policy__header">
          <h1 className="cookie-policy__title">
            🍪 Cookie Policy
          </h1>
          <p className="cookie-policy__subtitle">
            Informativa sull'utilizzo dei cookie per {gdprConfig.siteName}
          </p>
          <div className="cookie-policy__meta">
            <span>Ultimo aggiornamento: {currentDate}</span>
            <span>Versione: 1.0</span>
          </div>
        </header>

        {/* Contenuto */}
        <main className="cookie-policy__content">
          
          {/* Sezione 1: Cosa sono i Cookie */}
          <section className="cookie-section">
            <h2 className="cookie-section__title">1. Cosa sono i Cookie</h2>
            <div className="cookie-section__content">
              <p>
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo 
                (computer, tablet, smartphone) quando visiti il nostro sito web. Questi file 
                contengono informazioni che vengono utilizzate per migliorare la tua esperienza 
                di navigazione e lettura delle nostre 5 testate giornalistiche.
              </p>
              
              <div className="cookie-info-box">
                <h3>🔍 Come funzionano i cookie</h3>
                <p>
                  Quando visiti il nostro sito, i cookie vengono scaricati automaticamente 
                  e memorizzati nel tuo browser. Alla visita successiva, il browser invia 
                  questi cookie al nostro server, permettendoci di riconoscerti e personalizzare 
                  la tua esperienza di lettura.
                </p>
              </div>

              <p>
                I cookie sono essenziali per il funzionamento di molti siti web moderni e 
                ci permettono di offrirti contenuti editoriali di qualità, statistiche di 
                lettura e servizi personalizzati per le nostre testate specializzate.
              </p>
            </div>
          </section>

          {/* Sezione 2: Tipologie di Cookie */}
          <section className="cookie-section">
            <h2 className="cookie-section__title">2. Tipologie di Cookie Utilizzati</h2>
            <div className="cookie-section__content">
              <p>
                Sul nostro sito utilizziamo diverse tipologie di cookie, ciascuna con 
                finalità specifiche per migliorare la tua esperienza editoriale:
              </p>

              <div className="cookie-categories">
                {Object.entries(gdprConfig.categories).map(([key, category]) => (
                  <div key={key} className="cookie-category-card">
                    <div className="cookie-category-header">
                      <h3 className="cookie-category-name">{category.name}</h3>
                      <span className={`cookie-category-status ${category.required ? 'required' : 'optional'}`}>
                        {category.required ? 'Necessari' : 'Opzionali'}
                      </span>
                    </div>
                    
                    <p className="cookie-category-description">
                      {category.description}
                    </p>

                    <div className="cookie-list">
                      <h4>Cookie utilizzati:</h4>
                      {category.cookies.map((cookie, index) => (
                        <div key={index} className="cookie-item">
                          <div className="cookie-item-header">
                            <span className="cookie-name">{cookie.name}</span>
                            <span className="cookie-duration">{cookie.duration}</span>
                          </div>
                          <p className="cookie-purpose">{cookie.purpose}</p>
                          {cookie.provider && (
                            <p className="cookie-provider">Fornitore: {cookie.provider}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Sezione 3: Cookie di Terze Parti */}
          <section className="cookie-section">
            <h2 className="cookie-section__title">3. Servizi di Terze Parti</h2>
            <div className="cookie-section__content">
              <p>
                Il nostro sito può utilizzare servizi forniti da terze parti che installano 
                i propri cookie. Questi servizi ci aiutano a migliorare l'esperienza editoriale 
                e a promuovere i nostri eventi culturali:
              </p>

              <div className="third-party-services">
                {Object.entries(gdprConfig.thirdPartyServices).map(([key, service]) => (
                  <div key={key} className="service-card">
                    <div className="service-header">
                      <h4 className="service-name">{service.name}</h4>
                      <span className={`service-category category-${service.category}`}>
                        {gdprConfig.categories[service.category].name}
                      </span>
                    </div>
                    
                    <p className="service-purpose">{service.purpose}</p>
                    
                    <div className="service-details">
                      <p>
                        <strong>Utilizza cookie:</strong> {service.cookies ? 'Sì' : 'No'}
                      </p>
                      <p>
                        <strong>Privacy Policy:</strong>{' '}
                        <a 
                          href={service.privacyPolicy} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="service-link"
                        >
                          Consulta la policy
                        </a>
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="third-party-note">
                <h4>⚠️ Importante</h4>
                <p>
                  I servizi di terze parti sono soggetti alle rispettive privacy policy. 
                  Ti consigliamo di consultare le informative dei singoli fornitori per 
                  comprendere come trattano i tuoi dati personali.
                </p>
              </div>
            </div>
          </section>

          {/* Sezione 4: Finalità Specifiche per Settore Editoriale */}
          <section className="cookie-section">
            <h2 className="cookie-section__title">4. Finalità Specifiche per il Settore Editoriale</h2>
            <div className="cookie-section__content">
              <p>
                Come gruppo editoriale specializzato, utilizziamo i cookie per finalità 
                specifiche del nostro settore:
              </p>

              <div className="editorial-purposes">
                <div className="purpose-card">
                  <h4>📰 Miglioramento Contenuti Editoriali</h4>
                  <p>
                    Analizziamo quali articoli sono più letti, quanto tempo i lettori 
                    trascorrono su ciascuna testata e quali argomenti interessano di più. 
                    Questo ci aiuta a creare contenuti sempre più rilevanti.
                  </p>
                </div>

                <div className="purpose-card">
                  <h4>🎯 Personalizzazione Newsletter</h4>
                  <p>
                    Memorizziamo le tue preferenze per le newsletter delle nostre 5 testate, 
                    permettendoti di ricevere solo i contenuti che ti interessano davvero.
                  </p>
                </div>

                <div className="purpose-card">
                  <h4>🎪 Promozione Eventi Culturali</h4>
                  <p>
                    Utilizziamo cookie di marketing per promuovere eventi gastronomici, 
                    festival culturali e manifestazioni che organizziamo o co-promuoviamo.
                  </p>
                </div>

                <div className="purpose-card">
                  <h4>📊 Statistiche di Lettura</h4>
                  <p>
                    Raccogliamo dati anonimi su come i lettori interagiscono con i nostri 
                    articoli per migliorare la struttura del sito e l'esperienza di lettura.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sezione 5: Gestione Cookie */}
          <section className="cookie-section">
            <h2 className="cookie-section__title">5. Come Gestire i Cookie</h2>
            <div className="cookie-section__content">
              <p>
                Hai il pieno controllo sui cookie utilizzati dal nostro sito. 
                Puoi gestire le tue preferenze in diversi modi:
              </p>

              <div className="management-options">
                <div className="management-card">
                  <h4>⚙️ Centro Preferenze</h4>
                  <p>
                    Utilizza il nostro Centro Preferenze per abilitare o disabilitare 
                    specifiche categorie di cookie secondo le tue esigenze.
                  </p>
                  <a 
                    href={gdprConfig.policyUrls.preferences} 
                    className="management-link"
                  >
                    Gestisci Preferenze
                  </a>
                </div>

                <div className="management-card">
                  <h4>🌐 Impostazioni Browser</h4>
                  <p>
                    Puoi configurare il tuo browser per bloccare o eliminare i cookie. 
                    Nota che questo potrebbe limitare alcune funzionalità del sito.
                  </p>
                  <div className="browser-links">
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Chrome</a>
                    <a href="https://support.mozilla.org/it/kb/Attivare%20e%20disattivare%20i%20cookie" target="_blank" rel="noopener noreferrer">Firefox</a>
                    <a href="https://support.apple.com/it-it/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a>
                    <a href="https://support.microsoft.com/it-it/help/17442/windows-internet-explorer-delete-manage-cookies" target="_blank" rel="noopener noreferrer">Edge</a>
                  </div>
                </div>

                <div className="management-card">
                  <h4>🚫 Opt-out Servizi Specifici</h4>
                  <p>
                    Puoi disattivare specifici servizi di tracciamento utilizzando 
                    i link di opt-out forniti dai singoli fornitori.
                  </p>
                  <div className="optout-links">
                    <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a>
                    <a href="https://www.facebook.com/settings?tab=ads" target="_blank" rel="noopener noreferrer">Facebook Ads Settings</a>
                  </div>
                </div>
              </div>

              <div className="management-warning">
                <h4>⚠️ Attenzione</h4>
                <p>
                  Disabilitare i cookie potrebbe limitare alcune funzionalità del nostro sito, 
                  come la personalizzazione dei contenuti, il salvataggio delle preferenze 
                  di lettura e l'accesso a contenuti specifici delle nostre testate.
                </p>
              </div>
            </div>
          </section>

          {/* Sezione 6: Cookie e Privacy */}
          <section className="cookie-section">
            <h2 className="cookie-section__title">6. Cookie e Protezione della Privacy</h2>
            <div className="cookie-section__content">
              <p>
                La protezione della tua privacy è fondamentale per noi. Ecco come 
                garantiamo un uso responsabile dei cookie:
              </p>

              <div className="privacy-measures">
                <div className="measure-item">
                  <h4>🔒 Sicurezza dei Dati</h4>
                  <p>
                    Tutti i cookie sono trasmessi attraverso connessioni sicure (HTTPS) 
                    e sono protetti da accessi non autorizzati.
                  </p>
                </div>

                <div className="measure-item">
                  <h4>⏰ Durata Limitata</h4>
                  <p>
                    I cookie hanno una durata limitata nel tempo e vengono automaticamente 
                    eliminati alla scadenza.
                  </p>
                </div>

                <div className="measure-item">
                  <h4>🎯 Finalità Specifiche</h4>
                  <p>
                    Ogni cookie viene utilizzato solo per le finalità dichiarate e 
                    non per scopi diversi da quelli indicati.
                  </p>
                </div>

                <div className="measure-item">
                  <h4>📊 Dati Anonimi</h4>
                  <p>
                    I cookie analitici raccolgono dati in forma anonima o pseudonima, 
                    senza identificare direttamente gli utenti.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sezione 7: Aggiornamenti */}
          <section className="cookie-section">
            <h2 className="cookie-section__title">7. Aggiornamenti della Cookie Policy</h2>
            <div className="cookie-section__content">
              <p>
                Questa Cookie Policy può essere aggiornata periodicamente per riflettere 
                cambiamenti nelle nostre pratiche, nei servizi offerti o nelle normative vigenti.
              </p>

              <div className="updates-info">
                <h4>📅 Quando aggiorniamo la policy</h4>
                <ul>
                  <li>Introduzione di nuovi servizi o funzionalità</li>
                  <li>Modifiche alle normative sui cookie</li>
                  <li>Cambiamenti nei fornitori di servizi</li>
                  <li>Miglioramenti nella protezione della privacy</li>
                </ul>

                <h4>🔔 Come ti informiamo</h4>
                <ul>
                  <li>Aggiornamento della data in questa pagina</li>
                  <li>Notifica tramite banner sul sito (per modifiche sostanziali)</li>
                  <li>Comunicazione via email (se iscritto alla newsletter)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Sezione 8: Contatti */}
          <section className="cookie-section">
            <h2 className="cookie-section__title">8. Contatti per Cookie e Privacy</h2>
            <div className="cookie-section__content">
              <div className="contact-info">
                <h4>📧 Per domande sui cookie</h4>
                <p>
                  Se hai domande su questa Cookie Policy o sull'utilizzo dei cookie 
                  sul nostro sito, contattaci:
                </p>
                
                <div className="contact-details">
                  <p><strong>Email:</strong> <a href={`mailto:${gdprConfig.contactEmail}?subject=Cookie Policy - Domande`}>{gdprConfig.contactEmail}</a></p>
                  <p><strong>Telefono:</strong> {gdprConfig.phone}</p>
                  <p><strong>Indirizzo:</strong> {gdprConfig.address}</p>
                </div>

                <h4>🔗 Link utili</h4>
                <div className="useful-links">
                  <a href={gdprConfig.policyUrls.privacy}>Privacy Policy</a>
                  <a href={gdprConfig.policyUrls.preferences}>Gestione Consensi</a>
                  <a href="/">Torna al sito</a>
                </div>
              </div>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="cookie-policy__footer">
          <div className="footer-info">
            <p>
              <strong>{gdprConfig.companyName}</strong><br/>
              Questa Cookie Policy è conforme al Regolamento UE 2016/679 (GDPR) 
              e alle linee guida del Garante per la protezione dei dati personali.
            </p>
            <p>
              <em>Ultimo aggiornamento: {currentDate} - Versione 1.0</em>
            </p>
          </div>
        </footer>
      </div>

      {/* Stili CSS */}
      <style jsx>{`
        .cookie-policy {
          min-height: 100vh;
          background: linear-gradient(135deg, #fef7ed 0%, #fed7aa 100%);
          font-family: 'Georgia', serif;
        }

        .cookie-policy__container {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .cookie-policy__header {
          text-align: center;
          margin-bottom: 48px;
          padding: 32px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .cookie-policy__title {
          margin: 0 0 16px 0;
          font-size: 36px;
          font-weight: 700;
          color: #1f2937;
          line-height: 1.2;
        }

        .cookie-policy__subtitle {
          margin: 0 0 20px 0;
          font-size: 18px;
          color: #6b7280;
          line-height: 1.5;
        }

        .cookie-policy__meta {
          display: flex;
          justify-content: center;
          gap: 24px;
          font-size: 14px;
          color: #9ca3af;
        }

        .cookie-policy__content {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .cookie-section {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .cookie-section__title {
          margin: 0;
          padding: 24px 32px;
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
          font-size: 24px;
          font-weight: 600;
        }

        .cookie-section__content {
          padding: 32px;
          line-height: 1.7;
          color: #374151;
        }

        .cookie-section__content p {
          margin: 0 0 16px 0;
        }

        .cookie-section__content ul {
          margin: 16px 0;
          padding-left: 24px;
        }

        .cookie-section__content li {
          margin-bottom: 8px;
        }

        .cookie-info-box {
          background: #fef3c7;
          padding: 20px;
          border-radius: 8px;
          border: 1px solid #f59e0b;
          margin: 20px 0;
        }

        .cookie-info-box h3 {
          margin: 0 0 12px 0;
          color: #92400e;
          font-size: 18px;
          font-weight: 600;
        }

        .cookie-categories {
          display: grid;
          gap: 24px;
          margin: 24px 0;
        }

        .cookie-category-card {
          padding: 24px;
          background: #f9fafb;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }

        .cookie-category-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .cookie-category-name {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          color: #1f2937;
        }

        .cookie-category-status {
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .cookie-category-status.required {
          background: #fef3c7;
          color: #92400e;
        }

        .cookie-category-status.optional {
          background: #e0e7ff;
          color: #3730a3;
        }

        .cookie-category-description {
          margin: 0 0 20px 0;
          color: #4b5563;
          line-height: 1.6;
        }

        .cookie-list h4 {
          margin: 0 0 16px 0;
          color: #374151;
          font-size: 16px;
          font-weight: 600;
        }

        .cookie-item {
          padding: 16px;
          background: white;
          border-radius: 6px;
          border: 1px solid #e5e7eb;
          margin-bottom: 12px;
        }

        .cookie-item-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }

        .cookie-name {
          font-weight: 600;
          color: #1f2937;
          font-family: 'Monaco', 'Menlo', monospace;
          font-size: 14px;
        }

        .cookie-duration {
          color: #6b7280;
          font-size: 12px;
          background: #f3f4f6;
          padding: 2px 8px;
          border-radius: 4px;
        }

        .cookie-purpose {
          margin: 0 0 8px 0;
          color: #4b5563;
          font-size: 14px;
          line-height: 1.5;
        }

        .cookie-provider {
          margin: 0;
          color: #6b7280;
          font-size: 12px;
          font-style: italic;
        }

        .third-party-services {
          display: grid;
          gap: 20px;
          margin: 24px 0;
        }

        .service-card {
          padding: 20px;
          background: #f0f9ff;
          border-radius: 8px;
          border: 1px solid #bae6fd;
        }

        .service-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }

        .service-name {
          margin: 0;
          color: #0c4a6e;
          font-size: 18px;
          font-weight: 600;
        }

        .service-category {
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 11px;
          font-weight: 600;
          text-transform: uppercase;
        }

        .service-category.category-necessary {
          background: #fef3c7;
          color: #92400e;
        }

        .service-category.category-analytics {
          background: #e0e7ff;
          color: #3730a3;
        }

        .service-category.category-marketing {
          background: #fce7f3;
          color: #be185d;
        }

        .service-purpose {
          margin: 0 0 16px 0;
          color: #0f172a;
          line-height: 1.5;
        }

        .service-details p {
          margin: 4px 0;
          font-size: 14px;
          color: #374151;
        }

        .service-link {
          color: #2563eb;
          text-decoration: none;
          font-weight: 500;
        }

        .service-link:hover {
          text-decoration: underline;
        }

        .third-party-note {
          margin-top: 24px;
          padding: 20px;
          background: #fef2f2;
          border-radius: 8px;
          border: 1px solid #fca5a5;
        }

        .third-party-note h4 {
          margin: 0 0 12px 0;
          color: #dc2626;
          font-weight: 600;
        }

        .editorial-purposes {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin: 24px 0;
        }

        .purpose-card {
          padding: 20px;
          background: #f0fdf4;
          border-radius: 8px;
          border: 1px solid #bbf7d0;
        }

        .purpose-card h4 {
          margin: 0 0 12px 0;
          color: #14532d;
          font-size: 16px;
          font-weight: 600;
        }

        .purpose-card p {
          margin: 0;
          color: #166534;
          font-size: 14px;
          line-height: 1.5;
        }

        .management-options {
          display: grid;
          gap: 24px;
          margin: 24px 0;
        }

        .management-card {
          padding: 24px;
          background: #f8fafc;
          border-radius: 8px;
          border: 1px solid #e2e8f0;
        }

        .management-card h4 {
          margin: 0 0 12px 0;
          color: #1e293b;
          font-size: 18px;
          font-weight: 600;
        }

        .management-card p {
          margin: 0 0 16px 0;
          color: #475569;
          line-height: 1.6;
        }

        .management-link {
          display: inline-block;
          padding: 10px 20px;
          background: #2563eb;
          color: white;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 500;
          transition: background 0.2s;
        }

        .management-link:hover {
          background: #1d4ed8;
        }

        .browser-links,
        .optout-links {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .browser-links a,
        .optout-links a {
          padding: 6px 12px;
          background: #e2e8f0;
          color: #475569;
          text-decoration: none;
          border-radius: 4px;
          font-size: 14px;
          transition: background 0.2s;
        }

        .browser-links a:hover,
        .optout-links a:hover {
          background: #cbd5e1;
        }

        .management-warning {
          margin-top: 24px;
          padding: 20px;
          background: #fef3c7;
          border-radius: 8px;
          border: 1px solid #f59e0b;
        }

        .management-warning h4 {
          margin: 0 0 12px 0;
          color: #92400e;
          font-weight: 600;
        }

        .privacy-measures {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin: 24px 0;
        }

        .measure-item {
          padding: 20px;
          background: #f0f9ff;
          border-radius: 8px;
          border: 1px solid #bae6fd;
        }

        .measure-item h4 {
          margin: 0 0 12px 0;
          color: #0c4a6e;
          font-size: 16px;
          font-weight: 600;
        }

        .measure-item p {
          margin: 0;
          color: #0f172a;
          font-size: 14px;
          line-height: 1.5;
        }

        .updates-info {
          background: #f9fafb;
          padding: 24px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
          margin: 20px 0;
        }

        .updates-info h4 {
          margin: 0 0 12px 0;
          color: #374151;
          font-weight: 600;
        }

        .contact-info {
          background: #f9fafb;
          padding: 24px;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }

        .contact-info h4 {
          margin: 24px 0 12px 0;
          color: #1f2937;
          font-weight: 600;
        }

        .contact-info h4:first-child {
          margin-top: 0;
        }

        .contact-details {
          margin: 16px 0;
        }

        .contact-details p {
          margin: 8px 0;
          color: #4b5563;
        }

        .useful-links {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .useful-links a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 500;
          padding: 8px 12px;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .useful-links a:hover {
          background: #eff6ff;
        }

        .cookie-policy__footer {
          margin-top: 48px;
          padding: 32px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .footer-info {
          color: #4b5563;
        }

        .footer-info p {
          margin: 0 0 16px 0;
        }

        a {
          color: #2563eb;
          text-decoration: none;
          font-weight: 500;
        }

        a:hover {
          color: #1d4ed8;
          text-decoration: underline;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .cookie-policy__container {
            padding: 20px 16px;
          }

          .cookie-policy__title {
            font-size: 28px;
          }

          .cookie-policy__subtitle {
            font-size: 16px;
          }

          .cookie-policy__meta {
            flex-direction: column;
            gap: 8px;
          }

          .cookie-section__title {
            padding: 20px 24px;
            font-size: 20px;
          }

          .cookie-section__content {
            padding: 24px 20px;
          }

          .cookie-category-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .cookie-item-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .editorial-purposes {
            grid-template-columns: 1fr;
          }

          .privacy-measures {
            grid-template-columns: 1fr;
          }

          .browser-links,
          .optout-links {
            flex-direction: column;
          }

          .useful-links {
            flex-direction: column;
            align-items: center;
          }
        }

        /* Stampa */
        @media print {
          .cookie-policy {
            background: white;
          }

          .cookie-section {
            box-shadow: none;
            border: 1px solid #000;
          }

          .cookie-section__title {
            background: #f0f0f0;
            color: #000;
          }

          .management-link,
          .useful-links {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

