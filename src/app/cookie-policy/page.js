'use client';

import React from 'react';
import Link from 'next/link';
import { gdprConfig } from '../../config/gdpr.config';

export default function CookiePolicyPage() {
  const cookieCategories = [
    {
      name: 'Cookie Tecnici e Necessari',
      description: 'Questi cookie sono essenziali per il funzionamento del sito e non possono essere disabilitati.',
      examples: ['cookie di sessione', 'cookie di autenticazione', 'cookie di sicurezza'],
      duration: 'Sessione o massimo 1 anno',
      thirdParty: 'No'
    },
    {
      name: 'Cookie di Funzionalità',
      description: "Migliorano l'esperienza utente memorizzando le preferenze e le impostazioni.",
      examples: ['lingua preferita', 'dimensioni del testo', 'preferenze di visualizzazione'],
      duration: 'Massimo 1 anno',
      thirdParty: 'Google (Fonts), YouTube (embedded)'
    },
    {
      name: 'Cookie Analitici',
      description: 'Ci aiutano a capire come i visitatori interagiscono con il sito raccogliendo informazioni anonime.',
      examples: ['Google Analytics', 'numero di visitatori', 'pagine visitate', 'tempo di permanenza'],
      duration: 'Da 1 giorno a 2 anni',
      thirdParty: 'Google Analytics'
    },
    {
      name: 'Cookie di Marketing',
      description: 'Utilizzati per mostrare annunci pubblicitari pertinenti e misurare l\'efficacia delle campagne.',
      examples: ['Facebook Pixel', 'Google Ads', 'remarketing', 'social media'],
      duration: 'Da 1 giorno a 2 anni',
      thirdParty: 'Facebook, Google, Instagram, LinkedIn'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-blue-600 px-6 py-8">
            <h1 className="text-3xl font-bold text-white">Cookie Policy</h1>
            <p className="mt-2 text-blue-100">
              Gruppo Editoriale Futura Company - Informativa sull'uso dei cookie
            </p>
          </div>

          <div className="px-6 py-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                <strong>Ultimo aggiornamento:</strong> 14 luglio 2025
              </p>

              <p className="text-gray-700 mb-6">
                Il Gruppo Editoriale Futura Company ("noi", "nostro", "nostri") utilizza i cookie e tecnologie simili 
                per migliorare la tua esperienza di navigazione sul nostro network di 5 testate giornalistiche online. 
                Questa Cookie Policy spiega cosa sono i cookie, come li utilizziamo e come puoi controllarli.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Che cosa sono i cookie?</h2>
              <p className="text-gray-700 mb-4">
                I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito web. 
                Contengono informazioni di base sul tuo utilizzo del sito e ci aiutano a fornirti un'esperienza personalizzata.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Tipologie di cookie utilizzati</h2>
              
              <div className="space-y-6">
                {cookieCategories.map((category, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                    <p className="text-gray-700 mb-3">{category.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong className="text-gray-900">Esempi:</strong>
                        <ul className="mt-1 text-gray-600">
                          {category.examples.map((example, idx) => (
                            <li key={idx}>• {example}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <p><strong className="text-gray-900">Durata:</strong> {category.duration}</p>
                        <p><strong className="text-gray-900">Terze parti:</strong> {category.thirdParty}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Cookie di terze parti</h2>
              <p className="text-gray-700 mb-4">
                Collaboriamo con fornitori di servizi fidati che possono impostare cookie sul tuo dispositivo. 
                Questi includono:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li><strong>Google Analytics:</strong> per analizzare l'utilizzo del sito</li>
                <li><strong>Google Ads:</strong> per campagne pubblicitarie mirate</li>
                <li><strong>Facebook Pixel:</strong> per pubblicità sui social media</li>
                <li><strong>YouTube:</strong> per video embedded nei nostri articoli</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Come gestire i cookie</h2>
              <p className="text-gray-700 mb-4">
                Puoi controllare e/o eliminare i cookie come desideri. Per maggiori informazioni visita 
                <a href="https://www.aboutcookies.org" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
                  aboutcookies.org
                </a>
              </p>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 my-6">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Gestione preferenze</h3>
                <p className="text-blue-800 mb-3">
                  Puoi modificare le tue preferenze sui cookie in qualsiasi momento:
                </p>
                <Link 
                  href="/gestione-consensi" 
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                >
                  Gestisci i consensi
                </Link>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Conservazione dei dati</h2>
              <p className="text-gray-700 mb-4">
                I cookie vengono conservati per il periodo necessario a conseguire le finalità per cui sono stati raccolti, 
                salvo revoca del consenso o necessità di conservazione per obblighi di legge.
              </p>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">I tuoi diritti</h2>
              <p className="text-gray-700 mb-4">
                Ai sensi del Regolamento UE 2016/679 (GDPR), hai il diritto di:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Accedere ai tuoi dati personali</li>
                <li>Richiedere la rettifica o la cancellazione</li>
                <li>Opporsi al trattamento per finalità di marketing</li>
                <li>Richiedere la limitazione del trattamento</li>
                <li>Esportare i tuoi dati (portabilità)</li>
              </ul>

              <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Contatti</h2>
              <p className="text-gray-700 mb-4">
                Per qualsiasi domanda riguardante questa Cookie Policy, puoi contattarci:
              </p>
              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700">
                  <strong>Email:</strong> <a href={`mailto:${gdprConfig.contactEmail}`} className="text-blue-600 hover:underline">{gdprConfig.contactEmail}</a><br />
                  <strong>Telefono:</strong> {gdprConfig.phone}<br />
                  <strong>Indirizzo:</strong> {gdprConfig.address}
                </p>
              </div>

              <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>Nota:</strong> Questa Cookie Policy si applica a tutte le testate del Gruppo Futura Company: 
                  Gambero Rosso Channel, La Sicilia, Giornale di Sicilia, Corriere del Mezzogiorno, e Sicilia in Rosa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}