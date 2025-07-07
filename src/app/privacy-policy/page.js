import Link from 'next/link';

const PrivacyPolicyPage = () => {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">Ultimo aggiornamento: 7 Luglio 2025</p>
        
        <p className="mb-4">
          Futura Company (&quot;noi&quot;, &quot;ci&quot;, o &quot;nostro&quot;) gestisce il sito web https://futuracompany.it (il &quot;Servizio&quot;).
        </p>

        <p className="mb-4">
          Questa pagina informa delle nostre policy riguardanti la raccolta, l&apos;uso e la divulgazione dei dati personali quando si utilizza il nostro Servizio e le scelte che si hanno a disposizione in merito a tali dati.
        </p>

        <p className="mb-4">
          Utilizziamo i vostri dati per fornire e migliorare il Servizio. Utilizzando il Servizio, acconsentite alla raccolta e all&apos;uso delle informazioni in conformità con questa policy.
        </p>

        <h2 className="text-2xl font-bold mt-6 mb-4">Raccolta e Uso delle Informazioni</h2>
        <p className="mb-4">
          Raccogliamo diversi tipi di informazioni per vari scopi al fine di fornire e migliorare il nostro Servizio.
        </p>

        <h3 className="text-xl font-bold mt-6 mb-4">Dati Personali</h3>
        <p className="mb-4">
          Mentre utilizzate il nostro Servizio, potremmo chiedervi di fornirci alcune informazioni di identificazione personale che possono essere utilizzate per contattarvi o identificarvi (&quot;Dati Personali&quot;). Le informazioni di identificazione personale possono includere, ma non sono limitate a:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Indirizzo email</li>
          <li>Nome e cognome</li>
          <li>Numero di telefono</li>
          <li>Cookie e Dati di Utilizzo</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-4">Uso dei Dati</h2>
        <p className="mb-4">
          Futura Company utilizza i dati raccolti per vari scopi:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Per fornire e mantenere il nostro Servizio</li>
          <li>Per notificarvi le modifiche al nostro Servizio</li>
          <li>Per permettervi di partecipare a funzionalità interattive del nostro Servizio quando scegliete di farlo</li>
          <li>Per fornire assistenza ai clienti</li>
          <li>Per raccogliere analisi o informazioni preziose in modo da poter migliorare il nostro Servizio</li>
          <li>Per monitorare l&apos;utilizzo del nostro Servizio</li>
          <li>Per rilevare, prevenire e affrontare problemi tecnici</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 mb-4">Contattaci</h2>
        <p className="mb-4">
          Se avete domande su questa Privacy Policy, vi preghiamo di contattarci:
        </p>
        <ul className="list-disc list-inside">
          <li>Tramite email: info@futuracompany.it</li>
          <li>Visitando questa pagina sul nostro sito web: <Link href="/contatti" className="text-blue-600 hover:underline">https://futuracompany.it/#contatti</Link></li>
        </ul>

        <div className="mt-12 text-center">
            <Link href="/" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-medium text-lg transition-all duration-300">
                Torna alla Home
            </Link>
        </div>
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
