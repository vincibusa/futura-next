'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import AnimateOnScroll from '../animation/AnimateOnScroll';
import Counter from '../counter';
import TitleCard from '../cards/TitleCard';

// Import delle immagini
import Hero2 from '../../assets/images/Hero2.jpeg';
import diospyros from '../../assets/images/diospyros.jpg';

import VinUp from '../../assets/images/VinUp.png';
import TravelNotizie from '../../assets/images/TravelNotizie.png';

import FermentoPizza from '../../assets/images/FermentoPizza.png';

import sanpellegrino from '../../assets/images/sanpellegrino.jpg';
import sfincionefest from '../../assets/images/sfincionefest.jpg';
import cynara from '../../assets/images/cynara.jpg';
import Hero1 from '../../assets/images/Hero1.jpeg';

import cannolo from '../../assets/images/cannolo.jpg';
import beercatania from '../../assets/images/beercatania.jpeg';
import couscous from '../../assets/images/couscous.jpg';
import spumantietna from '../../assets/images/spumantietna.jpeg'; 
import cinema from '../../assets/images/cinema.jpeg'; 
import taobuk from '../../assets/images/taobuk.jpeg';
import sfincionefestival from '../../assets/images/sfincionefest.jpg';  

const AdvSection = () => {
  const [startCounting, setStartCounting] = useState(false);
  const statsRef = useRef(null);

  // Usa IntersectionObserver per rilevare quando le statistiche sono visibili
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startCounting) {
          // Aggiungi un piccolo delay per un effetto più naturale
          setTimeout(() => {
            setStartCounting(true);
          }, 300);
        }
      },
      { threshold: 0.3 } // Il contatore parte quando il 30% della sezione è visibile
    );

    const currentRef = statsRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [startCounting]);

  const events = [
    {
      id: 1,
      title: 'Diospyros Festival',
      description: 'La celebrazione del frutto del kaki, con eventi gastronomici e culturali dedicati.',
      image: diospyros.src,
      alt: 'Logo del Diospyros Festival, evento dedicato al kaki.',
      url: 'https://futuracompany.it/#adv'
    },
    {
      id: 2,
      title: 'San Pellegrino Chef Table',
      description: 'Un esclusivo evento gastronomico con i migliori chef del panorama siciliano e nazionale.',
      image: sanpellegrino.src,
      alt: 'Tavolo elegantemente apparecchiato per il San Pellegrino Chef Table.',
      url: 'https://futuracompany.it/#adv'
    },
    {
      id: 3,
      title: 'Sagra del Cannolo',
      description: 'La manifestazione dedicata al dolce simbolo della Sicilia, con degustazioni e concorsi.',
      image: cannolo.src,
      alt: 'Primo piano di un cannolo siciliano croccante con ricotta fresca.',
      url: 'https://futuracompany.it/#adv'
    },
    {
      id: 4,
      title: 'Sfincione Fest',
      description: 'Festival dedicato allo sfincione, tipica specialità palermitana, con stand e workshop.',
      image: sfincionefest.src,
      alt: 'Trancio di sfincione palermitano, soffice e saporito.',
      url: 'https://futuracompany.it/#adv'
    },
    {
      id: 5,
      title: 'Cynara Festival',
      description: 'Evento dedicato al carciofo e alle eccellenze agricole siciliane.',
      image: cynara.src,
      alt: 'Carciofi freschi in mostra al Cynara Festival.',
      url: 'https://futuracompany.it/#adv'
    },
    {
      id: 6,
      title: 'Cous Cous Fest',
      description: 'La celebrazione internazionale del cous cous, con chef da tutto il Mediterraneo.',
      image: couscous.src,
      alt: 'Piatto di cous cous ricco di verdure e spezie al Cous Cous Fest.',
      url: 'https://futuracompany.it/#adv'
    },
    {
      id: 7,
      title: 'Beer Catania',
      description: 'Festival delle birre artigianali etnee e siciliane, con degustazioni e incontri.',
      image: beercatania.src,
      alt: 'Boccali di birra artigianale al festival Beer Catania.',
      url: 'https://futuracompany.it/#adv'
    },
    {
      id: 8,
      title: 'Spumanti dell\'Etna',
      description: 'Evento dedicato alle bollicine prodotte sul vulcano attivo più alto d\'Europa.',
      image: spumantietna.src,
      alt: 'Calici di spumante dell\'Etna con vista sul vulcano.',
      url: 'https://futuracompany.it/#adv'
    },
    {
      id: 9,
      title: 'Festival del Cinema 2023',
      description: 'Rassegna cinematografica con proiezioni, incontri e ospiti internazionali.',
      image: cinema.src,
      alt: 'Schermo cinematografico durante una proiezione al Festival del Cinema.',
      url: 'https://futuracompany.it/#adv'
    },
    {
      id: 10,
      title: 'Taobuk',
      description: 'Festival letterario internazionale che unisce letteratura, arte e cultura.',
      image: taobuk.src,
      alt: 'Logo del festival letterario internazionale Taobuk a Taormina.',
      url: 'https://futuracompany.it/#adv'
    },
    {
      id: 11,
      title: 'Sfincione Festival - L\'Originale',
      description: 'La celebrazione della specialità palermitana, con concorsi tra i migliori panificatori.',
      image: sfincionefestival.src,
      alt: 'Panificatori in gara allo Sfincione Festival, l\'originale.',
      url: 'https://futuracompany.it/#adv'
    },
    {
      id: 12,
      title: 'Cannolo Festival - Edizione Speciale',
      description: 'Manifestazione dedicata al cannolo siciliano, con pasticceri da tutta l\'isola.',
      image: cannolo.src,
      alt: 'Pasticceri che preparano cannoli durante l\'edizione speciale del Cannolo Festival.',
      url: 'https://futuracompany.it/#adv'
    },
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Promozione Eventi",
    "name": "Promozione e Comunicazione di Eventi in Sicilia",
    "description": "Offriamo servizi di promozione e comunicazione per eventi culturali, gastronomici e artistici in Sicilia, garantendo massima visibilità attraverso la nostra rete editoriale e canali multimediali.",
    "provider": {
      "@type": "Organization",
      "name": "Futura Company",
      "url": "https://futuracompany.it"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Sicilia"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Tipologie di Eventi Promossi",
      "itemListElement": events.map(event => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": event.title
        }
      }))
    }
  };

  const eventsSchema = events.map(event => ({
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.title,
    "description": event.description,
    "image": `https://futuracompany.it${event.image}`,
    "url": event.url,
    "organizer": {
      "@type": "Organization",
      "name": "Futura Company",
      "url": "https://futuracompany.it"
    },
    "location": {
      "@type": "Place",
      "name": "Sicilia",
      "address": {
        "@type": "PostalAddress",
        "addressRegion": "IT",
        "addressCountry": "IT"
      }
    }
  }));

  const galleryImages = [
    { src: Hero1.src, alt: 'Evento promozionale Futura Company con partecipanti e organizzatori.' },
    { src: Hero2.src, alt: 'Momenti salienti degli eventi promossi dal nostro gruppo editoriale.' },
    { src: sanpellegrino.src, alt: 'San Pellegrino Chef Table, evento gastronomico di alta qualità.' },
    { src: taobuk.src, alt: 'Festival Taobuk, rassegna letteraria internazionale.' },
    { src: beercatania.src, alt: 'Beer Catania, festival delle birre artigianali siciliane.' },
    { src: couscous.src, alt: 'Cous Cous Fest, celebrazione mediterranea del cous cous.' },
    { src: spumantietna.src, alt: 'Spumanti dell\'Etna, evento dedicato alle bollicine vulcaniche.' },
    { src: cynara.src, alt: 'Cynara Festival, manifestazione dedicata alle eccellenze agricole.' },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventsSchema) }}
      />
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-blue-600">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 11.072l-3.2-6.4a1 1 0 00-1.78-.22l-1.4 4.2-4.2-1.4a1 1 0 00-1.22.54l-3.2 6.4a1 1 0 001.22 1.22l4.2-1.4 1.4 4.2a1 1 0 001.78.22l3.2-6.4a1 1 0 00-.22-1.22z" />
            </svg>
          </span>
        </div>
      </div>
      <section id="adv" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-blue-100 opacity-30"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-blue-100 opacity-40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            {/* Colonna sinistra - Titolo */}
            <div>
              <AnimateOnScroll animation="fade-down" delay={300}>
                <h2 className="text-3xl md:text-3xl font-bold text-blue-700 mb-4">
                 Un'ottima occasione per promuovere aziende di successo
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={500}>
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                  Con <strong className="font-bold text-blue-700">1 milione di utenti</strong> che ci leggono ogni giorno, siamo uno dei più importanti <strong className="font-bold text-blue-700">Gruppi editoriali</strong> in Sicilia.
                </p>
              </AnimateOnScroll>
       
              <div ref={statsRef} className="grid grid-cols-3 gap-6 pt-4 mt-8 border-t border-gray-200">
                {[
                  { value: 45000, label: 'Lettori giornalieri' },
                  { value: 16, label: 'Articoli giornalieri' },
                  { value: 110, label: 'Aziende seguite' },
              
                ].map((stat, i) => (
                  <AnimateOnScroll key={stat.label} animation="fade-up" delay={i * 100 + 600}>
                    <div className="text-center flex flex-col items-center">
                      <div className="flex items-baseline justify-center mb-2 h-10">
                        <Counter
                          value={startCounting ? stat.value : 0}
                          fontSize={stat.value >= 10000 ? 20 : 28}
                          textColor="#2563eb"
                          fontWeight="bold"
                          places={stat.value >= 10000 ? [10000, 1000, 100, 10, 1] : stat.value >= 10 ? [10, 1] : [1]}
                          gap={2}
                          padding={0}
                          gradientHeight={0}
                          gradientFrom="transparent"
                          gradientTo="transparent"
                          containerStyle={{ display: 'flex', alignItems: 'baseline' }} />
                        {stat.value >= 10000 && <span className="text-blue-600 font-bold text-xl ml-1">+</span>}
                      </div>
                      <p className="text-sm text-gray-500 leading-tight">{stat.label}</p>
                    </div>
                  </AnimateOnScroll>
                ))}
              </div>
            </div>
            
            {/* Colonna destra - Testo */}
            <div className="space-y-4">
              <AnimateOnScroll animation="fade-right" delay={300}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong className="font-bold text-blue-700">Futura Company</strong> è un punto di riferimento nella <strong className="font-bold text-blue-700">promozione e comunicazione</strong> di eventi culturali, gastronomici e artistici in tutta la <strong className="font-bold text-blue-700">Sicilia</strong>.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-right" delay={450}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Attraverso le nostre <strong className="font-bold text-blue-700">testate giornalistiche</strong>, raggiungiamo ogni giorno centinaia di migliaia di lettori, offrendo <strong className="font-bold text-blue-700">visibilità e supporto</strong> a iniziative di rilievo che valorizzano il territorio e le eccellenze siciliane.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-right" delay={600}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  I nostri <strong className="font-bold text-blue-700">canali multimediali</strong> rappresentano una piattaforma ideale per la promozione di <strong className="font-bold text-blue-700">aziende pubbliche e private</strong>, garantendo un'ampia copertura e un pubblico altamente profilato.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-right" delay={750}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Produciamo <strong className="font-bold text-blue-700">informazione e contenuti multimediali</strong> che promuovono eventi e iniziative di rilievo, creando connessioni dirette tra organizzatori e pubblico interessato attraverso strategie integrate di comunicazione.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>

        <div className="relative my-16">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-blue-700">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </span>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll animation="fade-up" delay={300}>
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12 max-w-4xl mx-auto">
              <strong className="font-bold text-blue-700">EVENTI E MANIFESTAZIONI</strong> che promuoviamo attraverso i nostri <strong className="font-bold text-blue-700">canali editoriali</strong> specializzati.
            </h3>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-16 items-start mt-16">
            <div className='flex flex-col items-center justify-center gap-4 text-left h-full'>
              <AnimateOnScroll animation="fade-right" delay={400}>
                <h4 className="text-2xl font-bold text-gray-800">
                  <span className="text-blue-700">Piattaforma promozionale</span> per valorizzare eventi di qualità
                </h4>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-right" delay={550}>
                <h3 className='text-xl font-bold text-gray-800'>
                  <strong className="text-black">Copertura completa</strong> per <strong className="text-blue-700">festival</strong>, <strong className="text-blue-700">manifestazioni culturali</strong> e <strong className="text-blue-700">eventi gastronomici</strong> di rilievo.
                </h3>
              </AnimateOnScroll>
            </div>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <AnimateOnScroll animation="fade-left" delay={500}>
                <p>
                  La nostra <strong className="font-bold text-blue-700">rete editoriale</strong> offre una piattaforma unica per la promozione di eventi di qualità, garantendo <strong className="font-bold text-blue-700">visibilità massima</strong> attraverso contenuti multimediali e una copertura capillare del territorio siciliano.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-left" delay={650}>
                <p>
                  Dai <strong className="font-bold text-blue-700">festival enogastronomici</strong> alle <strong className="font-bold text-blue-700">rassegne culturali</strong>, dalle <strong className="font-bold text-blue-700">manifestazioni artistiche</strong> agli <strong className="font-bold text-blue-700">eventi corporate</strong>, offriamo soluzioni personalizzate per ogni tipologia di iniziativa.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-left" delay={800}>
                <p>
                  Con un <strong className="font-bold text-blue-700">pubblico altamente profilato</strong> e <strong className="font-bold text-blue-700">interessato alle eccellenze</strong> del territorio, garantiamo risultati concreti in termini di partecipazione e coinvolgimento per ogni evento promosso.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>

        {/* Eventi con TitleCard */}
        <div className="container mx-auto px-4 relative z-10 mt-24">




          {/* CTA finale */}
          <div className="text-center">
            <AnimateOnScroll animation="fade-up" delay={800}>
              <a 
                href="#contact" 
                className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                Promuovi il tuo evento
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </a>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdvSection; 