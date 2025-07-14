# Soluzione GDPR per Futura Company

Soluzione completa fai-da-te per la conformità GDPR e gestione cookie, sviluppata specificamente per Futura Company - Gruppo Editoriale Siciliano.

## 🚀 Caratteristiche

- ✅ **Completamente conforme al GDPR**
- ✅ **Tipizzato con TypeScript**
- ✅ **Responsive e accessibile**
- ✅ **Specifico per settore editoriale**
- ✅ **Gestione granulare newsletter per 5 testate**
- ✅ **Pronto per Google Analytics e Facebook Pixel**
- ✅ **Blocco preventivo cookie non autorizzati**

## 📁 Struttura del Progetto

```
futura-gdpr-tsx/
├── types/
│   └── gdpr.ts                    # Definizioni TypeScript
├── utils/gdpr/
│   ├── consentStorage.ts          # Gestione consenso
│   └── cookieUtils.ts             # Gestione cookie
├── components/gdpr/
│   ├── CookieBanner.tsx           # Banner cookie
│   ├── PreferenceCenter.tsx       # Centro preferenze
│   └── FormConsent.tsx            # Consenso form
├── app/
│   ├── privacy-policy/
│   │   └── page.tsx               # Privacy Policy
│   ├── cookie-policy/             # (da completare)
│   └── gestione-consensi/         # (da completare)
├── gdpr.config.ts                 # Configurazione principale
└── README.md                      # Questo file
```

## 🛠️ Installazione

### 1. Copia i file nel tuo progetto Next.js

```bash
# Copia tutti i file nella root del tuo progetto Next.js
cp -r futura-gdpr-tsx/* /path/to/your/nextjs-project/
```

### 2. Installa le dipendenze (se necessarie)

```bash
npm install
# oppure
yarn install
```

### 3. Integra nel layout principale

Modifica il tuo `app/layout.tsx`:

```tsx
import CookieBanner from './components/gdpr/CookieBanner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
```

### 4. Aggiorna il form di contatto esistente

Nel tuo form di contatto, sostituisci la checkbox privacy con:

```tsx
import FormConsent from './components/gdpr/FormConsent';

// Nel tuo componente form
const [consent, setConsent] = useState(null);

<FormConsent
  onConsentChange={setConsent}
  required={true}
  showNewsletter={true}
  showEvents={true}
/>
```

### 5. Aggiungi i link nel footer

```tsx
<footer>
  {/* Altri contenuti del footer */}
  <div className="privacy-links">
    <a href="/privacy-policy">Privacy Policy</a>
    <a href="/cookie-policy">Cookie Policy</a>
    <a href="/gestione-consensi">Gestione Consensi</a>
  </div>
</footer>
```

## ⚙️ Configurazione

### Personalizza la configurazione

Modifica `gdpr.config.ts` per adattarlo alle tue esigenze:

```typescript
export const gdprConfig: GDPRConfig = {
  siteName: "Il Tuo Sito",
  companyName: "La Tua Azienda",
  contactEmail: "privacy@tuodominio.it",
  address: "Il Tuo Indirizzo",
  phone: "Il Tuo Telefono",
  // ... altre configurazioni
};
```

### Abilita Google Analytics (quando necessario)

```typescript
import { initializeGoogleAnalytics } from './utils/gdpr/cookieUtils';

// Dopo che l'utente ha dato il consenso
if (isCategoryAllowed('analytics')) {
  initializeGoogleAnalytics('GA_MEASUREMENT_ID');
}
```

### Abilita Facebook Pixel (quando necessario)

```typescript
import { initializeFacebookPixel } from './utils/gdpr/cookieUtils';

// Dopo che l'utente ha dato il consenso
if (isCategoryAllowed('marketing')) {
  initializeFacebookPixel('FB_PIXEL_ID');
}
```

## 🎨 Personalizzazione Stili

I componenti utilizzano CSS-in-JS con styled-jsx. Per personalizzare:

1. **Colori**: Modifica le variabili CSS nei componenti
2. **Font**: Cambia `font-family` nelle regole CSS
3. **Layout**: Adatta padding, margin e dimensioni

### Esempio personalizzazione colori:

```css
/* Nel componente CookieBanner.tsx */
.gdpr-banner {
  background: linear-gradient(135deg, #your-color 0%, #your-color-2 100%);
  border-top: 4px solid #your-accent-color;
}
```

## 📱 Responsive Design

Tutti i componenti sono completamente responsive:

- **Desktop**: Layout orizzontale ottimizzato
- **Tablet**: Adattamento automatico
- **Mobile**: Layout verticale e touch-friendly

## ♿ Accessibilità

- **ARIA labels** per screen reader
- **Focus management** per navigazione da tastiera
- **Contrasti** conformi alle linee guida WCAG
- **Semantic HTML** per struttura corretta

## 🔧 API Principali

### ConsentStorage

```typescript
import { saveConsent, getConsent, hasConsent, isCategoryAllowed } from './utils/gdpr/consentStorage';

// Salva consenso
saveConsent({
  necessary: true,
  functional: true,
  analytics: false,
  marketing: false
});

// Verifica consenso
if (hasConsent()) {
  console.log('Utente ha già dato il consenso');
}

// Verifica categoria specifica
if (isCategoryAllowed('analytics')) {
  // Inizializza Google Analytics
}
```

### CookieManager

```typescript
import { cleanupUnauthorizedCookies, getAllCookies } from './utils/gdpr/cookieUtils';

// Pulisce cookie non autorizzati
cleanupUnauthorizedCookies();

// Ottiene tutti i cookie
const cookies = getAllCookies();
```

## 🧪 Testing

### Test del Banner

1. Cancella localStorage: `localStorage.clear()`
2. Ricarica la pagina
3. Verifica che il banner appaia
4. Testa tutti i pulsanti

### Test delle Preferenze

1. Apri il centro preferenze
2. Modifica le categorie
3. Salva e verifica localStorage
4. Controlla che i cookie vengano bloccati/abilitati

### Test del Form

1. Compila il form senza consenso obbligatorio
2. Verifica messaggio di errore
3. Testa tutti i consensi opzionali

## 🚀 Deploy

### Vercel (raccomandato)

```bash
npm run build
vercel --prod
```

### Altri provider

Assicurati che:
- Le pagine statiche siano generate correttamente
- I cookie funzionino con HTTPS
- Le policy siano accessibili

## 📋 Checklist Pre-Deploy

- [ ] Banner appare alla prima visita
- [ ] Preferenze vengono salvate correttamente
- [ ] Form di contatto ha consenso obbligatorio
- [ ] Privacy Policy è completa e accessibile
- [ ] Cookie Policy è presente
- [ ] Link nel footer funzionano
- [ ] Responsive su tutti i dispositivi
- [ ] Accessibilità testata
- [ ] Google Analytics bloccato senza consenso
- [ ] Facebook Pixel bloccato senza consenso

## 🆘 Supporto

Per domande o problemi:

1. Controlla la configurazione in `gdpr.config.ts`
2. Verifica la console del browser per errori
3. Testa in modalità incognito
4. Controlla che localStorage funzioni

## 📄 Licenza

Questo codice è fornito come soluzione personalizzata per Futura Company. 
Puoi modificarlo e adattarlo alle tue esigenze mantenendo la conformità GDPR.

## 🔄 Aggiornamenti

Per rimanere conforme:

- Monitora le modifiche normative GDPR
- Aggiorna le policy quando necessario
- Testa regolarmente il funzionamento
- Mantieni aggiornate le dipendenze

---

**Futura Company - Gruppo Editoriale Siciliano**  
*Soluzione GDPR sviluppata per il settore editoriale*

