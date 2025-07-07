'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import AnimateOnScroll from '../animation/AnimateOnScroll';
import Counter from '../counter';

// Import delle immagini locali
import AllFoodSicilyLogo from '../../assets/images/AllFoodSicily.png';
import SiciliaMagLogo from '../../assets/images/SiciliaMag.png';
import FermentoPizzaLogo from '../../assets/images/FermentoPizza.png';
import VinUpLogo from '../../assets/images/VinUp.png';
import TravelNotizieLogo from '../../assets/images/TravelNotizie.png';

const AboutSection = () => {
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

  const newspapers = [
    {
      title: 'All Food Sicily',
      description: 'Primo giornale siciliano online ad avere una diffusione capillare, nato nel 2020 sotto la direzione di Salvo Scaduto.',
      logo: AllFoodSicilyLogo,
      alt: 'Logo della testata giornalistica All Food Sicily',
      url: 'https://www.allfoodsicily.it' // URL Reale della testata
    },
    {
      title: 'Sicilia Mag',
      description: 'Testata giornalistica dedicata al territorio siciliano, alla sua cultura e alle sue eccellenze.',
      logo: SiciliaMagLogo,
      alt: 'Logo della testata giornalistica Sicilia Mag',
      url: 'https://www.siciliamag.it' // URL Reale della testata
    },
    {
      title: 'Fermento Pizza',
      description: 'Pubblicazione dedicata al mondo della pizza, alle sue innovazioni e ai suoi protagonisti.',
      logo: FermentoPizzaLogo,
      alt: 'Logo della testata giornalistica Fermento Pizza',
      url: 'https://www.fermentopizza.com' // URL Reale della testata
    },
    {
      title: 'Travel Notizie',
      description: 'Giornale online che racconta le tendenze del turismo, i luoghi da scoprire e le esperienze di viaggio.',
      logo: TravelNotizieLogo,
      alt: 'Logo della testata giornalistica Travel Notizie',
      url: 'https://www.travelnotizie.com' // URL Reale della testata
    },
    {
      title: 'Vinup',
      description: 'Testata specializzata nel mondo del vino, con focus sulle eccellenze enologiche siciliane e italiane.',
      logo: VinUpLogo,
      alt: 'Logo della testata giornalistica Vinup',
      url: 'https://www.vinup.it' // URL Reale della testata
    },
  ];

  const newsMediaSchema = newspapers.map(newspaper => ({
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    "name": newspaper.title,
    "url": newspaper.url,
    "logo": `https://futuracompany.it${newspaper.logo.src}`,
    "description": newspaper.description,
    "parentOrganization": {
      "@type": "Organization",
      "name": "Futura Company",
      "url": "https://futuracompany.it"
    }
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsMediaSchema) }}
      />
      <section id="editoria" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-blue-100 opacity-30"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-blue-100 opacity-40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            {/* Colonna sinistra - Titolo */}
            <div>
              <AnimateOnScroll animation="fade-down" delay={300}>
                <h2 className="text-3xl md:text-3xl font-bold text-blue-700 mb-4">
                  Il Nostro Gruppo Editoriale
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={500}>
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                  La sintesi di esperienze editoriali, <strong className="font-bold text-blue-700">testate</strong> e <strong className="font-bold text-blue-700">professioni</strong> che hanno fatto la storia del <strong className="font-bold text-blue-700">giornalismo siciliano</strong>.
                </p>
              </AnimateOnScroll>
       
              <div ref={statsRef} className="grid grid-cols-4 gap-6 pt-4 mt-8 border-t border-gray-200">
                {[
                  { value: 15000000, label: 'Di visualizzazioni', displayValue: '15M' },
                  { value: 12360, label: 'Articoli pubblicati' },
                  { value: 5, label: 'Testate giornalistiche' },
                  { value: 3, label: 'Fondatori' }
                ].map((stat, i) => {
                  // Se abbiamo un displayValue, usiamo quello, altrimenti usiamo il Counter normale
                  if (stat.displayValue) {
                    return (
                      <AnimateOnScroll key={stat.label} animation="fade-up" delay={i * 100 + 600}>
                        <div className="text-center flex flex-col items-center">
                          <div className="flex items-baseline justify-center mb-2 h-10">
                            <span className="text-3xl font-bold text-blue-600">
                              {startCounting ? stat.displayValue : '0'}
                            </span>
                          </div>
                          <p className="text-sm text-gray-500 leading-tight">{stat.label}</p>
                        </div>
                      </AnimateOnScroll>
                    );
                  }
                  
                  const numPlaces = String(stat.value).length;
                  const places = Array.from({ length: numPlaces }, (_, i) => Math.pow(10, i)).reverse();
                  
                  return (
                  <AnimateOnScroll key={stat.label} animation="fade-up" delay={i * 100 + 600}>
                    <div className="text-center flex flex-col items-center">
                      <div className="flex items-baseline justify-center mb-2 h-10">
                        <Counter
                          value={startCounting ? stat.value : 0}
                          fontSize={28}
                          textColor="#2563eb"
                          fontWeight="bold"
                          places={places}
                          gap={2}
                          padding={0}
                          gradientHeight={0}
                          gradientFrom="transparent"
                          gradientTo="transparent"
                          containerStyle={{ display: 'flex', alignItems: 'baseline' }} />
                      </div>
                      <p className="text-sm text-gray-500 leading-tight">{stat.label}</p>
                    </div>
                  </AnimateOnScroll>
                )})}
              </div>
            </div>
            
            {/* Colonna destra - Testo */}
            <div className="space-y-4">
              <AnimateOnScroll animation="fade-right" delay={300}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nato nel 2020 dall'incontro di <strong className="font-bold text-blue-700">Giovanni Paternò, Adalberto Catanzaro e Salvatore Scaduto</strong> che ha permesso di far nascere un gruppo con <strong className="font-bold text-blue-700">5 quotidiani</strong> all'attivo.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-right" delay={450}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  L'evoluzione tecnologica e l'applicazione di <strong className="font-bold text-blue-700">soluzioni innovative</strong> caratterizzano da sempre la nostra storia: nel 2020 si parte con <strong className="font-bold text-blue-700">All Food Sicily</strong>, quotidiano nato sotto la direzione di Salvo Scaduto, è stato il primo giornale siciliano online ad avere una <strong className="font-bold text-blue-700">diffusione capillare</strong>.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-right" delay={600}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  L'attenzione alla <strong className="font-bold text-blue-700">qualità dei contenuti</strong> è il cuore di progetti editoriali che hanno portato alla nascita di varie testate, e ultimi in ordine di tempo <strong className="font-bold text-blue-700">Vinup, Fermento Pizza, Sicilia Mag, Travel Notizie</strong>.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-right" delay={750}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  La tensione costante verso il futuro e l'attitudine per l'<strong className="font-bold text-blue-700">innovazione</strong> continuano oggi a guidare lo sviluppo di nuove iniziative digitali, rendendo ancora più ricca la proposta che si offre ai lettori.
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </span>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll animation="fade-up" delay={300}>
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12 max-w-4xl mx-auto">
              <strong className="font-bold text-blue-700">UN GRUPPO EDITORIALE</strong> che racconta <strong className="font-bold text-blue-700">la Sicilia e l'Italia</strong> attraverso <strong className="font-bold text-blue-700">notizie e approfondimenti</strong> con passione e dedizione.
            </h3>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-16 items-start mt-16">
            <div className='flex flex-col items-center justify-center gap-4 text-left h-full'>
              <AnimateOnScroll animation="fade-right" delay={400}>
                <h4 className="text-2xl font-bold text-gray-800">
                  Un <span className="text-blue-700">network editoriale</span> specializzto sul mondo enogastronomico,turistico e sostenibile
                </h4>
              </AnimateOnScroll>

            </div>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <AnimateOnScroll animation="fade-left" delay={500}>
                <p>
                  Le nostre <strong className="font-bold text-blue-700">cinque testate giornalistiche</strong> rappresentano un punto di riferimento nel panorama dell'<strong className="font-bold text-blue-700">informazione specializzata</strong>, coprendo settori dall'enogastronomia al turismo, dalla pizza al vino.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-left" delay={650}>
                <p>
                  Ogni pubblicazione è curata da <strong className="font-bold text-blue-700">giornalisti specializzati</strong> e <strong className="font-bold text-blue-700">esperti del settore</strong>, garantendo contenuti di alta qualità e approfondimenti esclusivi sulle eccellenze del territorio siciliano e italiano.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-left" delay={800}>
                <p>
                  Attraverso un <strong className="font-bold text-blue-700">approccio digitale innovativo</strong>, raggiungiamo migliaia di lettori appassionati, contribuendo alla valorizzazione e promozione delle tradizioni culinarie e culturali.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>

        {/* Sezione Testate Giornalistiche */}
        <div className="container mx-auto px-4 relative z-10 mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-12 mb-16">
            {newspapers.map((newspaper, index) => (
              <AnimateOnScroll
                key={newspaper.title}
                animation="fade-up"
                delay={index * 150 + 400}
                className="group"
              >
                <a href={newspaper.url} target="_blank" rel="noopener noreferrer" className="transform transition-all duration-300 h-full flex flex-col">
                  <div className="p-8 flex items-center justify-center border-b border-gray-100 min-h-[180px]">
                    <Image
                      src={newspaper.logo}
                      alt={newspaper.alt}
                      width={140}
                      height={140}
                      className="w-35 h-35 object-contain"
                    />
                  </div>
                  <div className="p-8 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{newspaper.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{newspaper.description}</p>
                  </div>
                </a>
              </AnimateOnScroll>
            ))}
          </div>

       
        </div>
      </section>
    </>
  );
};

export default AboutSection;