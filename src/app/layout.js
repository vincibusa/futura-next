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
  title: "Catanzaro & Partners | Agenzia di Sviluppo Web e Digital Marketing",
  description: "Agenzia specializzata in sviluppo web, digital marketing e soluzioni tecnologiche innovative per aziende e professionisti.",
  keywords: "sviluppo web, digital marketing, SEO, Next.js, design responsivo, web development",
  authors: [{ name: "Catanzaro & Partners" }],
  creator: "Catanzaro & Partners",
  publisher: "Catanzaro & Partners",
  applicationName: "Catanzaro & Partners",
  manifest: "/manifest.json",
  themeColor: "#000000",
  openGraph: {
    title: "Catanzaro & Partners | Agenzia di Sviluppo Web e Digital Marketing",
    description: "Agenzia specializzata in sviluppo web, digital marketing e soluzioni tecnologiche innovative per aziende e professionisti.",
    url: "https://catanzaroepartners.it",
    siteName: "Catanzaro & Partners",
    locale: "it_IT",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link rel="manifest" href="/manifest.json" />
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
