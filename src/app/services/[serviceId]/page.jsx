"use client";

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaBox, FaTrademark, FaAd, FaCalendarAlt, FaClipboardList, 
         FaBullhorn, FaFacebookSquare, FaNewspaper, FaVideo, FaCamera, 
         FaLaptopCode, FaServer, FaMobileAlt, FaShoppingCart } from 'react-icons/fa';

// Componente per lo scroll automatico all'inizio della pagina quando si cambia rotta
const ScrollToTop = () => {
  const params = useParams();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.serviceId]);
  
  return null;
};

export default function ServiceDetail() {
  const params = useParams();
  const serviceId = params.serviceId;

  // Mapping of service IDs to icon components
  const serviceIcons = {
    'branding': {
      'Naming': <FaTrademark className="text-red-600 text-2xl" />,
      'Packaging': <FaBox className="text-red-600 text-2xl" />,
      'Registrazione marchi': <FaTrademark className="text-red-600 text-2xl" />,
      'Grafica Pubblicitaria': <FaAd className="text-red-600 text-2xl" />
    },
    'event': {
      'Ideazione e organizzazione': <FaCalendarAlt className="text-red-600 text-2xl" />,
      'Segreteria': <FaClipboardList className="text-red-600 text-2xl" />,
      'Promozione': <FaBullhorn className="text-red-600 text-2xl" />
    },
    'marketing': {
      'Social Media': <FaFacebookSquare className="text-red-600 text-2xl" />,
      'Ufficio Stampa': <FaNewspaper className="text-red-600 text-2xl" />,
      'Video': <FaVideo className="text-red-600 text-2xl" />,
      'Foto': <FaCamera className="text-red-600 text-2xl" />
    },
    'web-multimedia': {
      'Web design': <FaLaptopCode className="text-red-600 text-2xl" />,
      'Hosting': <FaServer className="text-red-600 text-2xl" />,
      'Creazione App': <FaMobileAlt className="text-red-600 text-2xl" />,
      'E-Commerce': <FaShoppingCart className="text-red-600 text-2xl" />
    }
  };

  // Definizione dei servizi con le relative informazioni dettagliate
  const servicesData = {
    'branding': {
      title: 'Branding',
      subtitle: 'Diamo forma e identità al tuo marchio',
      description: 'Il nostro servizio di Branding comprende Naming, Packaging, Registrazione marchi e Grafica Pubblicitaria. Creiamo identità di marca distintive che comunicano i valori della tua azienda in modo efficace e memorabile.',
      image: 'https://images.unsplash.com/photo-1523726491678-bf852e717f6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80',
      benefits: [
        'Identità di marca riconoscibile e distintiva',
        'Coerenza visiva su tutti i touchpoint',
        'Differenziazione dalla concorrenza',
        'Creazione di valore percepito',
        'Costruzione di fiducia e fedeltà'
      ],
      subservices: [
        // ...existing code...
      ]
    },
    'event': {
      // ...existing code...
    },
    'marketing': {
      // ...existing code...
    },
    'web-multimedia': {
      // ...existing code...
    }
  };

  // Recupera i dati del servizio selezionato
  const serviceData = servicesData[serviceId];

  if (!serviceData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Servizio non trovato</h2>
          <p className="text-gray-600 mb-6">Il servizio che stai cercando non esiste o è stato rimosso.</p>
          <Link href="/servizi">
            <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-6 rounded-full">
              Torna ai servizi
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <ScrollToTop />
      <div className="pt-24 pb-20">
        {/* Header con sfondo gradiente */}
        <div className="bg-gradient-to-r from-red-900 to-red-600 py-16 mb-12 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute right-0 bottom-0 transform translate-x-1/4 translate-y-1/4">
              <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
                <defs>
                  <pattern id="pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" fill="white" />
                  </pattern>
                </defs>
                <rect width="404" height="404" fill="url(#pattern)" />
              </svg>
            </div>
            <div className="absolute left-0 top-0 transform -translate-x-1/4 -translate-y-1/4 rotate-45">
              <svg width="404" height="404" fill="none" viewBox="0 0 404 404">
                <defs>
                  <pattern id="pattern2" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="4" height="4" fill="white" />
                  </pattern>
                </defs>
                <rect width="404" height="404" fill="url(#pattern2)" />
              </svg>
            </div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{serviceData.title}</h1>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">{serviceData.subtitle}</p>
            </motion.div>
          </div>
        </div>

        {/* Rest of the component remains the same, except for Link components */}
        <div className="container mx-auto px-4">
          {/* ...existing code... */}
          
          {/* Replace any Link components with Next.js Link */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center bg-gray-50 py-12 px-6 rounded-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Vuoi saperne di più su questo servizio?
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Siamo pronti ad aiutarti a raggiungere i tuoi obiettivi con soluzioni personalizzate.
              Contattaci per una consulenza gratuita.
            </p>
            <Link href="/contatti">
              <button className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full transition-colors duration-300 font-medium">
                Contattaci
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
}
