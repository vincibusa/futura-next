import React from 'react';
import { Metadata } from 'next';
import { gdprConfig } from '../../gdpr.config';

export const metadata: Metadata = {
  title: 'Privacy Policy | Futura Company',
  description: 'Informativa sulla privacy di Futura Company - Gruppo Editoriale Siciliano. Scopri come trattiamo i tuoi dati personali.',
  robots: 'index, follow',
};

/**
 * Pagina Privacy Policy per Futura Company
 * Conforme al GDPR per il settore editoriale
 */
export default function PrivacyPolicyPage(): JSX.Element {
  const currentDate = new Date().toLocaleDateString('it-IT', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="privacy-policy">
      <div className="privacy-policy__container">
        
        {/* Header */}
        <header className="privacy-policy__header">
          <h1 className="privacy-policy__title">
            📄 Privacy Policy
          </h1>
          <p className="privacy-policy__subtitle">
            Informativa sul trattamento dei dati personali ai sensi del Regolamento UE 2016/679 (GDPR)
          </p>
          <div className="privacy-policy__meta">
            <span>Ultimo aggiornamento: {currentDate}</span>
            <span>Versione: 1.0</span>
          </div>
        </header>

        {/* Contenuto */}
        <main className="privacy-policy__content">
          
          {/* Sezione 1: Titolare del Trattamento */}
          <section className="privacy-section">
            <h2 className="privacy-section__title">1. Titolare del Trattamento</h2>
            <div className="privacy-section__content">
              <div className="company-info">
                <h3>{gdprConfig.companyName}</h3>
                <div className="company-details">
                  <p><strong>Sede legale:</strong> {gdprConfig.address}</p>
                  <p><strong>Telefono:</strong> {gdprConfig.phone}</p>
                  <p><strong>Email:</strong> <a href={`mailto:${gdprConfig.contactEmail}`}>{gdprConfig.contactEmail}</a></p>
                  <p><strong>Settore:</strong> Editoria digitale, marketing e organizzazione eventi</p>
                </div>
              </div>
              <p>
                Futura Company è il principale gruppo editoriale siciliano con 5 testate giornalistiche online 
                specializzate in enogastronomia, turismo e cultura. Il Titolare del trattamento è responsabile 
                della protezione dei tuoi dati personali secondo le normative vigenti.
              </p>
            </div>
          </section>

          {/* Sezione 2: Tipologie di Dati Raccolti */}
          <section className="privacy-section">
            <h2 className="privacy-section__title">2. Tipologie di Dati Raccolti</h2>
            <div className="privacy-section__content">
              <p>Raccogliamo le seguenti categorie di dati personali:</p>
              
              <div className="data-categories">
                <div className="data-category">
                  <h4>📝 Dati di Contatto</h4>
                  <ul>
                    <li>Nome e cognome</li>
                    <li>Indirizzo email</li>
                    <li>Numero di telefono (facoltativo)</li>
                    <li>Nome azienda (facoltativo)</li>
                    <li>Settore di interesse</li>
                  </ul>
                  <p><em>Raccolti tramite: Form di contatto, richieste di preventivo</em></p>
                </div>

                <div className="data-category">
                  <h4>📊 Dati di Navigazione</h4>
                  <ul>
                    <li>Indirizzo IP (anonimizzato)</li>
                    <li>Pagine visitate e articoli letti</li>
                    <li>Tempo di permanenza sul sito</li>
                    <li>Dispositivo e browser utilizzato</li>
                    <li>Referrer (sito di provenienza)</li>
                  </ul>
                  <p><em>Raccolti tramite: Cookie analitici (se autorizzati)</em></p>
                </div>

                <div className="data-category">
                  <h4>📧 Dati Newsletter ed Eventi</h4>
                  <ul>
                    <li>Indirizzo email per newsletter</li>
                    <li>Preferenze di contenuto (testate di interesse)</li>
                    <li>Statistiche di apertura email</li>
                    <li>Partecipazione a eventi (se applicabile)</li>
                  </ul>
                  <p><em>Raccolti tramite: Iscrizione newsletter, partecipazione eventi</em></p>
                </div>

                <div className="data-category">
                  <h4>🍪 Dati Cookie</h4>
                  <ul>
                    <li>Preferenze sui cookie</li>
                    <li>Identificatori di sessione</li>
                    <li>Preferenze di lettura</li>
                    <li>Dati di remarketing (se autorizzati)</li>
                  </ul>
                  <p><em>Raccolti tramite: Cookie tecnici e di marketing</em></p>
                </div>
              </div>
            </div>
          </section>

          {/* Sezione 3: Finalità del Trattamento */}
          <section className="privacy-section">
            <h2 className="privacy-section__title">3. Finalità del Trattamento e Base Giuridica</h2>
            <div className="privacy-section__content">
              
              <div className="purposes">
                <div className="purpose-item">
                  <h4>🎯 Risposta alle Richieste di Contatto</h4>
                  <p><strong>Base giuridica:</strong> Adempimento di misure precontrattuali (Art. 6.1.b GDPR)</p>
                  <p>
                    Utilizziamo i tuoi dati per rispondere alle tue richieste di informazioni, 
                    preventivi e consulenze sui nostri servizi editoriali e di marketing.
                  </p>
                </div>

                <div className="purpose-item">
                  <h4>📰 Newsletter Editoriali</h4>
                  <p><strong>Base giuridica:</strong> Consenso (Art. 6.1.a GDPR)</p>
                  <p>
                    Con il tuo consenso, ti inviamo newsletter con contenuti delle nostre 5 testate: 
                    articoli di enogastronomia, turismo, cultura siciliana e aggiornamenti editoriali.
                  </p>
                </div>

                <div className="purpose-item">
                  <h4>🎪 Promozione Eventi</h4>
                  <p><strong>Base giuridica:</strong> Consenso (Art. 6.1.a GDPR)</p>
                  <p>
                    Ti informiamo su eventi culturali, festival gastronomici, manifestazioni 
                    e iniziative promosse dal nostro gruppo editoriale.
                  </p>
                </div>

                <div className="purpose-item">
                  <h4>📈 Analisi e Statistiche</h4>
                  <p><strong>Base giuridica:</strong> Interesse legittimo (Art. 6.1.f GDPR)</p>
                  <p>
                    Analizziamo il comportamento di lettura per migliorare i contenuti editoriali, 
                    comprendere gli interessi dei lettori e ottimizzare l'esperienza del sito.
                  </p>
                </div>

                <div className="purpose-item">
                  <h4>💼 Comunicazioni Commerciali</h4>
                  <p><strong>Base giuridica:</strong> Consenso (Art. 6.1.a GDPR)</p>
                  <p>
                    Con il tuo consenso, ti informiamo sui nostri servizi di marketing, 
                    comunicazione, organizzazione eventi e opportunità di collaborazione.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sezione 4: Destinatari dei Dati */}
          <section className="privacy-section">
            <h2 className="privacy-section__title">4. Destinatari e Comunicazione dei Dati</h2>
            <div className="privacy-section__content">
              <p>I tuoi dati personali possono essere comunicati alle seguenti categorie di destinatari:</p>
              
              <div className="recipients">
                <div className="recipient-category">
                  <h4>👥 Staff Interno</h4>
                  <ul>
                    <li>Redazione editoriale delle 5 testate</li>
                    <li>Team marketing e comunicazione</li>
                    <li>Responsabili eventi e manifestazioni</li>
                    <li>Amministrazione e customer service</li>
                  </ul>
                </div>

                <div className="recipient-category">
                  <h4>🔧 Fornitori di Servizi Tecnici</h4>
                  <ul>
                    <li>Provider hosting e CDN (Vercel)</li>
                    <li>Servizi email marketing (se utilizzati)</li>
                    <li>Piattaforme di analytics (Google Analytics)</li>
                    <li>Servizi di backup e sicurezza</li>
                  </ul>
                </div>

                <div className="recipient-category">
                  <h4>🤝 Partner Eventi (solo con consenso)</h4>
                  <ul>
                    <li>Organizzatori di eventi co-promossi</li>
                    <li>Sponsor e partner commerciali</li>
                    <li>Enti culturali e istituzioni</li>
                  </ul>
                </div>

                <div className="recipient-category">
                  <h4>⚖️ Autorità Competenti (se richiesto)</h4>
                  <ul>
                    <li>Autorità giudiziarie</li>
                    <li>Forze dell'ordine</li>
                    <li>Garante per la protezione dei dati personali</li>
                  </ul>
                </div>
              </div>

              <div className="transfer-info">
                <h4>🌍 Trasferimenti Internazionali</h4>
                <p>
                  Alcuni fornitori di servizi (es. Google Analytics) potrebbero trasferire i dati 
                  al di fuori dell'UE. In questi casi, garantiamo che il trasferimento avvenga 
                  nel rispetto delle garanzie previste dal GDPR.
                </p>
              </div>
            </div>
          </section>

          {/* Sezione 5: Conservazione dei Dati */}
          <section className="privacy-section">
            <h2 className="privacy-section__title">5. Periodo di Conservazione</h2>
            <div className="privacy-section__content">
              
              <div className="retention-periods">
                <div className="retention-item">
                  <h4>📞 Richieste di Contatto</h4>
                  <p><strong>Durata:</strong> 24 mesi dalla richiesta</p>
                  <p>
                    Conserviamo i dati delle richieste di contatto per il tempo necessario 
                    a fornire assistenza e per eventuali follow-up commerciali.
                  </p>
                </div>

                <div className="retention-item">
                  <h4>📧 Newsletter e Marketing</h4>
                  <p><strong>Durata:</strong> Fino alla revoca del consenso</p>
                  <p>
                    I dati per newsletter ed eventi vengono conservati fino a quando 
                    non revochi il consenso o ti disiscrivi dai servizi.
                  </p>
                </div>

                <div className="retention-item">
                  <h4>📊 Dati Analitici</h4>
                  <p><strong>Durata:</strong> 26 mesi (poi anonimizzati)</p>
                  <p>
                    I dati di navigazione vengono conservati per analisi editoriali, 
                    poi anonimizzati per statistiche aggregate a lungo termine.
                  </p>
                </div>

                <div className="retention-item">
                  <h4>🍪 Cookie e Consensi</h4>
                  <p><strong>Durata:</strong> 12 mesi</p>
                  <p>
                    Le preferenze sui cookie e i consensi vengono conservati 
                    per 12 mesi, poi richiedono un nuovo consenso.
                  </p>
                </div>
              </div>

              <div className="retention-note">
                <p>
                  <strong>Nota:</strong> In caso di controversie legali o richieste delle autorità, 
                  i dati potrebbero essere conservati per il tempo necessario alla risoluzione 
                  della questione, nel rispetto delle normative vigenti.
                </p>
              </div>
            </div>
          </section>

          {/* Sezione 6: Diritti dell'Interessato */}
          <section className="privacy-section">
            <h2 className="privacy-section__title">6. I Tuoi Diritti</h2>
            <div className="privacy-section__content">
              <p>
                Secondo il GDPR, hai i seguenti diritti riguardo ai tuoi dati personali:
              </p>

              <div className="rights-grid">
                <div className="right-item">
                  <h4>🔍 Diritto di Accesso (Art. 15)</h4>
                  <p>
                    Puoi richiedere informazioni sui dati che trattiamo, 
                    le finalità del trattamento e i destinatari.
                  </p>
                </div>

                <div className="right-item">
                  <h4>✏️ Diritto di Rettifica (Art. 16)</h4>
                  <p>
                    Puoi richiedere la correzione di dati inesatti 
                    o l'integrazione di dati incompleti.
                  </p>
                </div>

                <div className="right-item">
                  <h4>🗑️ Diritto di Cancellazione (Art. 17)</h4>
                  <p>
                    Puoi richiedere la cancellazione dei tuoi dati 
                    quando non sono più necessari o revochi il consenso.
                  </p>
                </div>

                <div className="right-item">
                  <h4>⏸️ Diritto di Limitazione (Art. 18)</h4>
                  <p>
                    Puoi richiedere la limitazione del trattamento 
                    in caso di contestazione o per motivi legittimi.
                  </p>
                </div>

                <div className="right-item">
                  <h4>📦 Diritto di Portabilità (Art. 20)</h4>
                  <p>
                    Puoi richiedere i tuoi dati in formato strutturato 
                    per trasferirli ad altro titolare.
                  </p>
                </div>

                <div className="right-item">
                  <h4>🚫 Diritto di Opposizione (Art. 21)</h4>
                  <p>
                    Puoi opporti al trattamento basato su interesse legittimo 
                    o per finalità di marketing diretto.
                  </p>
                </div>

                <div className="right-item">
                  <h4>❌ Revoca del Consenso (Art. 7)</h4>
                  <p>
                    Puoi revocare il consenso in qualsiasi momento 
                    senza pregiudicare la liceità del trattamento precedente.
                  </p>
                </div>

                <div className="right-item">
                  <h4>⚖️ Diritto di Reclamo (Art. 77)</h4>
                  <p>
                    Puoi presentare reclamo al Garante per la protezione 
                    dei dati personali se ritieni violati i tuoi diritti.
                  </p>
                </div>
              </div>

              <div className="rights-exercise">
                <h4>Come Esercitare i Tuoi Diritti</h4>
                <p>
                  Per esercitare i tuoi diritti, contattaci via email all'indirizzo{' '}
                  <a href={`mailto:${gdprConfig.contactEmail}?subject=Richiesta Privacy - GDPR`}>
                    {gdprConfig.contactEmail}
                  </a>{' '}
                  specificando nell'oggetto "Richiesta Privacy - GDPR" e indicando 
                  chiaramente il diritto che intendi esercitare.
                </p>
                <p>
                  Ti risponderemo entro 30 giorni dalla ricezione della richiesta, 
                  previa verifica della tua identità.
                </p>
              </div>
            </div>
          </section>

          {/* Sezione 7: Sicurezza */}
          <section className="privacy-section">
            <h2 className="privacy-section__title">7. Misure di Sicurezza</h2>
            <div className="privacy-section__content">
              <p>
                Adottiamo misure tecniche e organizzative appropriate per proteggere 
                i tuoi dati personali da accessi non autorizzati, perdita, distruzione o divulgazione:
              </p>

              <div className="security-measures">
                <div className="security-category">
                  <h4>🔒 Misure Tecniche</h4>
                  <ul>
                    <li>Crittografia SSL/TLS per tutte le comunicazioni</li>
                    <li>Backup automatici e ridondanza dei dati</li>
                    <li>Firewall e sistemi di monitoraggio</li>
                    <li>Aggiornamenti regolari di sicurezza</li>
                    <li>Accesso ai dati tramite credenziali sicure</li>
                  </ul>
                </div>

                <div className="security-category">
                  <h4>👥 Misure Organizzative</h4>
                  <ul>
                    <li>Formazione del personale sulla privacy</li>
                    <li>Accesso ai dati su base "need-to-know"</li>
                    <li>Procedure per la gestione degli incidenti</li>
                    <li>Audit periodici dei sistemi</li>
                    <li>Contratti di riservatezza con fornitori</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Sezione 8: Cookie */}
          <section className="privacy-section">
            <h2 className="privacy-section__title">8. Cookie e Tecnologie Simili</h2>
            <div className="privacy-section__content">
              <p>
                Il nostro sito utilizza cookie per migliorare l'esperienza di navigazione 
                e fornire servizi personalizzati. Per informazioni dettagliate sui cookie 
                utilizzati, consulta la nostra{' '}
                <a href={gdprConfig.policyUrls.cookies}>Cookie Policy</a>.
              </p>
              
              <p>
                Puoi gestire le tue preferenze sui cookie visitando il{' '}
                <a href={gdprConfig.policyUrls.preferences}>Centro Preferenze</a>.
              </p>
            </div>
          </section>

          {/* Sezione 9: Modifiche */}
          <section className="privacy-section">
            <h2 className="privacy-section__title">9. Modifiche alla Privacy Policy</h2>
            <div className="privacy-section__content">
              <p>
                Ci riserviamo il diritto di modificare questa Privacy Policy in qualsiasi momento 
                per adeguarla a cambiamenti normativi o operativi. Le modifiche saranno pubblicate 
                su questa pagina con indicazione della data di ultimo aggiornamento.
              </p>
              
              <p>
                Ti consigliamo di consultare periodicamente questa pagina per rimanere 
                informato su come proteggiamo i tuoi dati personali.
              </p>
            </div>
          </section>

          {/* Sezione 10: Contatti */}
          <section className="privacy-section">
            <h2 className="privacy-section__title">10. Contatti</h2>
            <div className="privacy-section__content">
              <div className="contact-info">
                <h4>📧 Per Questioni sulla Privacy</h4>
                <p>
                  <strong>Email:</strong>{' '}
                  <a href={`mailto:${gdprConfig.contactEmail}?subject=Privacy - GDPR`}>
                    {gdprConfig.contactEmail}
                  </a>
                </p>
                <p><strong>Oggetto:</strong> "Privacy - GDPR"</p>
                
                <h4>📞 Contatti Generali</h4>
                <p><strong>Telefono:</strong> {gdprConfig.phone}</p>
                <p><strong>Indirizzo:</strong> {gdprConfig.address}</p>
                
                <h4>⚖️ Autorità di Controllo</h4>
                <p>
                  <strong>Garante per la protezione dei dati personali</strong><br/>
                  Piazza di Monte Citorio, 121 - 00186 Roma<br/>
                  Tel: +39 06 69677 1<br/>
                  Email: garante@gpdp.it<br/>
                  Web: <a href="https://www.garanteprivacy.it" target="_blank" rel="noopener noreferrer">
                    www.garanteprivacy.it
                  </a>
                </p>
              </div>
            </div>
          </section>

        </main>

        {/* Footer */}
        <footer className="privacy-policy__footer">
          <div className="footer-info">
            <p>
              <strong>{gdprConfig.companyName}</strong><br/>
              Questa Privacy Policy è conforme al Regolamento UE 2016/679 (GDPR) 
              e alla normativa italiana sulla protezione dei dati personali.
            </p>
            <p>
              <em>Ultimo aggiornamento: {currentDate} - Versione 1.0</em>
            </p>
          </div>
          
          <div className="footer-links">
            <a href="/">← Torna al sito</a>
            <a href={gdprConfig.policyUrls.cookies}>Cookie Policy</a>
            <a href={gdprConfig.policyUrls.preferences}>Gestione Consensi</a>
          </div>
        </footer>
      </div>

      {/* Stili CSS */}
      <style jsx>{`
        .privacy-policy {
          min-height: 100vh;
          background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
          font-family: 'Georgia', serif;
        }

        .privacy-policy__container {
          max-width: 900px;
          margin: 0 auto;
          padding: 40px 20px;
        }

        .privacy-policy__header {
          text-align: center;
          margin-bottom: 48px;
          padding: 32px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .privacy-policy__title {
          margin: 0 0 16px 0;
          font-size: 36px;
          font-weight: 700;
          color: #1f2937;
          line-height: 1.2;
        }

        .privacy-policy__subtitle {
          margin: 0 0 20px 0;
          font-size: 18px;
          color: #6b7280;
          line-height: 1.5;
        }

        .privacy-policy__meta {
          display: flex;
          justify-content: center;
          gap: 24px;
          font-size: 14px;
          color: #9ca3af;
        }

        .privacy-policy__content {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .privacy-section {
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          overflow: hidden;
        }

        .privacy-section__title {
          margin: 0;
          padding: 24px 32px;
          background: linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%);
          color: white;
          font-size: 24px;
          font-weight: 600;
        }

        .privacy-section__content {
          padding: 32px;
          line-height: 1.7;
          color: #374151;
        }

        .privacy-section__content p {
          margin: 0 0 16px 0;
        }

        .privacy-section__content ul {
          margin: 16px 0;
          padding-left: 24px;
        }

        .privacy-section__content li {
          margin-bottom: 8px;
        }

        .company-info {
          background: #f9fafb;
          padding: 24px;
          border-radius: 8px;
          margin-bottom: 24px;
          border: 1px solid #e5e7eb;
        }

        .company-info h3 {
          margin: 0 0 16px 0;
          color: #1f2937;
          font-size: 20px;
          font-weight: 600;
        }

        .company-details p {
          margin: 8px 0;
          color: #4b5563;
        }

        .data-categories,
        .purposes,
        .recipients,
        .retention-periods {
          display: grid;
          gap: 20px;
          margin: 24px 0;
        }

        .data-category,
        .purpose-item,
        .recipient-category,
        .retention-item {
          padding: 20px;
          background: #f9fafb;
          border-radius: 8px;
          border: 1px solid #e5e7eb;
        }

        .data-category h4,
        .purpose-item h4,
        .recipient-category h4,
        .retention-item h4 {
          margin: 0 0 12px 0;
          color: #1f2937;
          font-size: 16px;
          font-weight: 600;
        }

        .data-category ul,
        .recipient-category ul {
          margin: 12px 0;
          padding-left: 20px;
        }

        .data-category em,
        .retention-item p:last-child {
          color: #6b7280;
          font-size: 14px;
        }

        .transfer-info,
        .retention-note {
          margin-top: 24px;
          padding: 20px;
          background: #eff6ff;
          border-radius: 8px;
          border: 1px solid #bfdbfe;
        }

        .transfer-info h4 {
          margin: 0 0 12px 0;
          color: #1e40af;
          font-weight: 600;
        }

        .rights-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          margin: 24px 0;
        }

        .right-item {
          padding: 20px;
          background: #f0f9ff;
          border-radius: 8px;
          border: 1px solid #bae6fd;
        }

        .right-item h4 {
          margin: 0 0 12px 0;
          color: #0c4a6e;
          font-size: 16px;
          font-weight: 600;
        }

        .right-item p {
          margin: 0;
          color: #0f172a;
          font-size: 14px;
        }

        .rights-exercise {
          margin-top: 32px;
          padding: 24px;
          background: #fef3c7;
          border-radius: 8px;
          border: 1px solid #f59e0b;
        }

        .rights-exercise h4 {
          margin: 0 0 16px 0;
          color: #92400e;
          font-weight: 600;
        }

        .security-measures {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          margin: 24px 0;
        }

        .security-category {
          padding: 20px;
          background: #f0fdf4;
          border-radius: 8px;
          border: 1px solid #bbf7d0;
        }

        .security-category h4 {
          margin: 0 0 16px 0;
          color: #14532d;
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

        .privacy-policy__footer {
          margin-top: 48px;
          padding: 32px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
          text-align: center;
        }

        .footer-info {
          margin-bottom: 24px;
          color: #4b5563;
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
          .privacy-policy__container {
            padding: 20px 16px;
          }

          .privacy-policy__title {
            font-size: 28px;
          }

          .privacy-policy__subtitle {
            font-size: 16px;
          }

          .privacy-policy__meta {
            flex-direction: column;
            gap: 8px;
          }

          .privacy-section__title {
            padding: 20px 24px;
            font-size: 20px;
          }

          .privacy-section__content {
            padding: 24px 20px;
          }

          .rights-grid {
            grid-template-columns: 1fr;
          }

          .security-measures {
            grid-template-columns: 1fr;
          }

          .footer-links {
            flex-direction: column;
            align-items: center;
          }
        }

        /* Stampa */
        @media print {
          .privacy-policy {
            background: white;
          }

          .privacy-section {
            box-shadow: none;
            border: 1px solid #000;
          }

          .privacy-section__title {
            background: #f0f0f0;
            color: #000;
          }

          .footer-links {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}

