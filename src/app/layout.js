import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://futuracompany.it'),
  title: "Futura Company | Gruppo Editoriale Siciliano - 5 Testate Giornalistiche Online",
  description: "Futura Company è il principale gruppo editoriale siciliano con 5 testate specializzate: All Food Sicily, Sicilia Mag, Fermento Pizza, Travel Notizie e Vinup. Editoria digitale, eventi gastronomici e turismo in Sicilia dal 2020.",
  keywords: [
    "gruppo editoriale siciliano",
    "giornali online sicilia", 
    "all food sicily",
    "sicilia mag",
    "fermento pizza", 
    "travel notizie",
    "vinup",
    "editoria digitale sicilia",
    "eventi gastronomici sicilia",
    "turismo sicilia",
    "enogastronomia siciliana",
    "giornalismo siciliano",
    "testate online sicilia",
    "marketing digitale sicilia",
    "comunicazione eventi sicilia"
  ].join(", "),
  authors: [
    { name: "Giovanni Paternò" },
    { name: "Adalberto Catanzaro" }, 
    { name: "Salvatore Scaduto" }
  ],
  creator: "Futura Company",
  publisher: "Futura Company",
  applicationName: "Futura Company",
  category: "News & Media",
  classification: "Editorial Group",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://futuracompany.it",
    languages: {
      'it-IT': 'https://futuracompany.it',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon.ico', sizes: '16x16', type: 'image/png' },
      { url: '/favicon.ico', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://futuracompany.it",
    siteName: "Futura Company",
    title: "Futura Company | Gruppo Editoriale Siciliano - 5 Testate Giornalistiche Online",
    description: "Il principale gruppo editoriale siciliano con 5 testate specializzate in enogastronomia, turismo e cultura. Dal 2020 raccontiamo l'eccellenza siciliana attraverso All Food Sicily, Sicilia Mag, Fermento Pizza, Travel Notizie e Vinup.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Futura Company - Gruppo Editoriale Siciliano",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@futuracompany",
    creator: "@futuracompany",
    title: "Futura Company | Gruppo Editoriale Siciliano",
    description: "Il principale gruppo editoriale siciliano con 5 testate specializzate in enogastronomia, turismo e cultura siciliana.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    'geo.region': 'IT-82',
    'geo.placename': 'Sicilia',
    'geo.position': '37.5079;14.0934',
    'ICBM': '37.5079, 14.0934',
  },
};

// Export separato per viewport (Next.js 15+)
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#2563eb',
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://futuracompany.it" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Futura Company" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Futura Company",
              "alternateName": "Gruppo Editoriale Futura Company",
              "url": "https://futuracompany.it",
              "logo": "https://futuracompany.it/logo.png",
              "description": "Gruppo editoriale siciliano specializzato in editoria digitale, eventi gastronomici e turismo con 5 testate online",
              "foundingDate": "2020",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Giovanni Paternò"
                },
                {
                  "@type": "Person", 
                  "name": "Adalberto Catanzaro"
                },
                {
                  "@type": "Person",
                  "name": "Salvatore Scaduto"
                }
              ],
              "areaServed": {
                "@type": "Place",
                "name": "Sicilia, Italia"
              },
              "knowsAbout": [
                "Editoria digitale",
                "Enogastronomia siciliana",
                "Turismo siciliano", 
                "Eventi gastronomici",
                "Comunicazione digitale"
              ],
              "owns": [
                {
                  "@type": "WebSite",
                  "name": "All Food Sicily",
                  "description": "Primo giornale siciliano online con diffusione capillare"
                },
                {
                  "@type": "WebSite", 
                  "name": "Sicilia Mag",
                  "description": "Testata dedicata al territorio siciliano e alle sue eccellenze"
                },
                {
                  "@type": "WebSite",
                  "name": "Fermento Pizza", 
                  "description": "Pubblicazione specializzata nel mondo della pizza"
                },
                {
                  "@type": "WebSite",
                  "name": "Travel Notizie",
                  "description": "Giornale online dedicato al turismo e ai viaggi"
                },
                {
                  "@type": "WebSite",
                  "name": "Vinup",
                  "description": "Testata specializzata nel mondo del vino siciliano e italiano"
                }
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "info@futuracompany.it"
              },
              "sameAs": [
                "https://www.facebook.com/futuracompany",
                "https://www.instagram.com/futuracompany", 
                "https://www.linkedin.com/company/futuracompany"
              ]
            }),
          }}
        />
        <meta name="google-site-verification" content="_X9EqX9j1610eHaWPi23JtqHIwwZ2rNqvhdYzAk82oU" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
