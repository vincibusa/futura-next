'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const ServicesSection = () => {
  const services = [
    {
      id: 'branding',
      title: 'Branding',
      description: 'Realizziamo l\'identità visiva della tua azienda creando un marchio distintivo e riconoscibile.',
      icon: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      bgColor: 'from-red-600 to-red-800',
      longDescription: 'Il nostro servizio di Branding comprende Naming, Packaging, Registrazione marchi e Grafica Pubblicitaria. Creiamo identità di marca distintive che comunicano i valori della tua azienda in modo efficace e memorabile.',
      subservices: [
        'Naming',
        'Packaging', 
        'Registrazione marchi', 
        'Grafica Pubblicitaria'
      ]
    },
    {
      id: 'event',
      title: 'Event',
      description: 'Progettiamo e realizziamo eventi enogastronomici e culturali che generano valore aggiunto per i territori.',
      icon: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      bgColor: 'from-red-500 to-red-700',
      longDescription: 'Progettiamo e organizziamo eventi enogastronomici e culturali che creano valore per i territori. Il nostro servizio comprende ideazione, organizzazione, gestione della segreteria e promozione dell\'evento attraverso canali tradizionali e digitali.',
      subservices: [
        'Ideazione e organizzazione',
        'Segreteria',
        'Promozione'
      ]
    },
    {
      id: 'marketing',
      title: 'Marketing',
      description: 'Sviluppiamo strategie di comunicazione istituzionale e d\'impresa con approccio integrato tra web marketing e event project.',
      icon: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      bgColor: 'from-red-600 to-red-800',
      longDescription: 'I nostri servizi di Marketing comprendono gestione dei Social Media, attività di Ufficio Stampa e produzione di contenuti Video e Foto professionali. Sviluppiamo strategie di comunicazione integrate per massimizzare l\'impatto del tuo brand.',
      subservices: [
        'Social Media',
        'Ufficio Stampa',
        'Video',
        'Foto'
      ]
    },
    {
      id: 'web-multimedia',
      title: 'Web e Multimedia',
      description: 'Progettiamo e sviluppiamo soluzioni digitali su misura, dai siti web alle applicazioni mobile ed e-commerce.',
      icon: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      bgColor: 'from-red-500 to-red-700',
      longDescription: 'I nostri servizi Web e Multimedia includono Web design, Hosting, Creazione di App ed E-Commerce. Realizziamo progetti digitali con un\'attenzione particolare al design, all\'esperienza utente e alle performance.',
      subservices: [
        'Web design',
        'Hosting',
        'Creazione App',
        'E-Commerce'
      ]
    }
  ];

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Sottraiamo l'altezza dell'header
        behavior: 'smooth'
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      },
    },
  };

  return (
    <section id="servizi" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-red-50 opacity-40"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-red-50 opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-3"
          >
            <span className="px-4 py-1 bg-red-100 text-red-700 rounded-full font-medium text-sm uppercase tracking-wider">
              Cosa Facciamo
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            I Nostri <span className="text-red-600">Servizi</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-8 rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed"
          >
            Dagli eventi ad una campagna marketing unica nel suo genere. I nostri punti di forza sono la comunicazione istituzionale e d'impresa attraverso lo sviluppo di un planning integrato.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              custom={index}
              variants={itemVariants}
              className="group h-full"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-2 flex flex-col">
                <div className={`bg-gradient-to-r ${service.bgColor} p-8 flex items-center justify-center`}>
                  <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm">
                    {service.icon}
                  </div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="mt-auto">
                    <h4 className="font-medium text-gray-800 mb-3">Include:</h4>
                    <ul className="grid grid-cols-2 gap-y-2 gap-x-4 mb-6">
                      {service.subservices.map((subservice, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <svg className="w-5 h-5 mr-2 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">{subservice}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={`/servizi/${service.id}`} className="inline-block">
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center text-red-600 font-medium cursor-pointer group-hover:font-semibold"
                      >
                        Scopri di più
                        <svg
                          className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </motion.div>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-20 text-center"
        >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(220, 38, 38, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-10 rounded-full font-medium shadow-lg transition-all duration-300"
              onClick={() => scrollToSection('contatti')}
            >
              Parliamo del tuo progetto
            </motion.button>

          <p className="text-gray-500 text-sm mt-4">Richiedi una consulenza personalizzata gratuitamente</p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;