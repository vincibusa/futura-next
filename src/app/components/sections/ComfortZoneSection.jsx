'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import AnimateOnScroll from '../animation/AnimateOnScroll';
import Counter from '../counter';
import premio from '../../assets/images/premioAllFood.jpeg'

const ComfortZoneSection = () => {
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

  // Immagini per la galleria - mantenuta la stessa struttura
  const galleryImages = [
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/1.jpeg?alt=media&token=f341a015-0672-4224-aa0e-799efd5d9d07',
      alt: 'Vista panoramica di un villaggio costiero con montagna vulcanica',
      title: 'Gran Tour - Ventimiglia di Sicilia',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/3.jpeg?alt=media&token=efbc570c-d542-4553-9f98-b89869d90414',
      alt: 'Sfincione siciliano, specialità gastronomica',
      title: 'Migliori Street Food Sicilia',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/2.jpeg?alt=media&token=7b378b8a-b47f-4a5b-aab7-6523a82e99ed',
      alt: 'Vigneti siciliani con Etna sullo sfondo',
      title: 'Premio All Food Sicily',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/4.jpeg?alt=media&token=b99a58f4-ccb1-4de6-802d-50e8d7a7b949',
      alt: 'Porto con barche e case sulla costa',
      title: 'Gran Tour - Misilmeri',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/5.jpeg?alt=media&token=426ce523-4f2c-4753-8287-eda79693dfcc',
      alt: 'Classifica annuale dei più influenti',
      title: 'I Più Potenti della Sicilia',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/6.jpeg?alt=media&token=1da55fdc-c942-4ce4-bb31-bf5c307d1d54',
      alt: 'Premiazione delle migliori pizzerie',
      title: 'Migliori Pizzerie della Sicilia',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/7.jpeg?alt=media&token=8a09303a-49a1-404b-a865-9a46d22c6428',
      alt: 'Birrificio artigianale siciliano',
      title: 'Migliori Birrifici di Sicilia',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/8.jpeg?alt=media&token=8cca35ea-17bf-4bc9-a1fd-1804fe21d8ab',
      alt: 'Agriturismo tra le campagne siciliane',
      title: 'Miglior Agriturismo di Sicilia',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/9.jpeg?alt=media&token=a4e1d15c-83e0-4770-8e86-38a720c5e08b',
      alt: 'Borgo siciliano al tramonto',
      title: 'Miglior Borgo di Sicilia',
    },
  ];

  // Categorie di progetti
  const projectCategories = [
    {
      title: "Guide",
      projects: ["Miglior Birrifici di Sicilia", "Miglior Street Food Sicilia"],
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
        </svg>
      )
    },
    {
      title: "Premi",
      projects: ["Migliori Pizzerie della Sicilia", "Miglior Agriturismo di Sicilia", "Miglior Borgo di Sicilia", "Premio All Food Sicily"],
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
        </svg>
      )
    },
    {
      title: "Classifiche",
      projects: ["I Più Potenti della Sicilia"],
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
        </svg>
      )
    },
    {
      title: "Gran Tour",
      projects: ["Ventimiglia di Sicilia", "Misilmeri"],
      icon: (
        <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    }
  ];

  return (
    <>
      <section id="progetti" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-blue-100 opacity-30"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-blue-100 opacity-40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            {/* Colonna sinistra - Titolo */}
            <div>
              <AnimateOnScroll animation="fade-down" delay={300}>
                <h2 className="text-3xl md:text-3xl font-bold text-blue-700 mb-4">
                  Le Nostre Iniziative
                </h2>
              </AnimateOnScroll>

              <AnimateOnScroll animation="fade-up" delay={500}>
                <p className="text-xl text-gray-600 font-light leading-relaxed">
                  L'approccio del gruppo si fonda sui <strong className="font-bold text-blue-700">valori</strong> che definiscono l'identità della nostra terra: l'obiettivo è <strong className="font-bold text-blue-700">premiare le migliori eccellenze</strong> siciliane e non.
                </p>
              </AnimateOnScroll>
       
              <div ref={statsRef} className="grid grid-cols-3 gap-6 pt-4 mt-8 border-t border-gray-200">
                {[
                  { value: 4, label: 'Categorie di progetti' },
                  { value: 9, label: 'Iniziative attive' },
                  { value: 50, label: 'Eccellenze premiate' }
                ].map((stat, i) => (
                  <AnimateOnScroll key={stat.label} animation="fade-up" delay={i * 100 + 600}>
                    <div className="text-center flex flex-col items-center">
                      <div className="flex items-baseline justify-center mb-2 h-10">
                        <Counter
                          value={startCounting ? stat.value : 0}
                          fontSize={28}
                          textColor="#2563eb"
                          fontWeight="bold"
                          places={stat.value >= 10 ? [10, 1] : [1]}
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
                ))}
              </div>
            </div>
            
            {/* Colonna destra - Testo */}
            <div className="space-y-4">
              <AnimateOnScroll animation="fade-right" delay={300}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Questa sezione riporta le <strong className="font-bold text-blue-700">iniziative</strong> che il Gruppo ha realizzato e sta sviluppando in <strong className="font-bold text-blue-700">quattro categorie</strong> e consente di mappare i luoghi e le persone che fanno interesse nei settori del <strong className="font-bold text-blue-700">turismo, food e imprenditoria</strong>.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-right" delay={450}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Le nostre <strong className="font-bold text-blue-700">Guide</strong> raccontano le eccellenze del territorio, i <strong className="font-bold text-blue-700">Premi</strong> riconoscono le migliori realtà, le <strong className="font-bold text-blue-700">Classifiche</strong> mappano i protagonisti del settore e i <strong className="font-bold text-blue-700">Gran Tour</strong> valorizzano i territori.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-right" delay={600}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ogni progetto è studiato per <strong className="font-bold text-blue-700">valorizzare</strong> e <strong className="font-bold text-blue-700">promuovere</strong> le eccellenze siciliane, creando una rete di connessioni tra territorio, tradizioni e innovazione nel panorama enogastronomico e turistico.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-right" delay={750}>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Attraverso un <strong className="font-bold text-blue-700">approccio integrato</strong> tra comunicazione digitale ed eventi, costruiamo ponti tra produttori, operatori del settore e consumatori finali, contribuendo alla crescita dell'intero ecosistema territoriale.
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </span>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimateOnScroll animation="fade-up" delay={300}>
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12 max-w-4xl mx-auto">
              <strong className="font-bold text-blue-700">LE CATEGORIE DEI NOSTRI PROGETTI</strong> mappano le <strong className="font-bold text-blue-700">eccellenze siciliane</strong> in ogni settore del <strong className="font-bold text-blue-700">territorio</strong>.
            </h3>
          </AnimateOnScroll>

          <div className="grid md:grid-cols-2 gap-16 items-start mt-16">
            <div className='flex flex-col items-center justify-center gap-4 text-left h-full'>
              <AnimateOnScroll animation="fade-right" delay={400}>
                <h4 className="text-2xl font-bold text-gray-800">
                  <span className="text-blue-700">Mappare Eccellenze</span> per valorizzare il territorio siciliano
                </h4>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-right" delay={550}>
                <h2 className='text-xl font-bold text-gray-800'>
                  <strong className="text-black">Iniziative mirate</strong> per riconoscere e promuovere le <strong className="text-blue-700">migliori realtà</strong> del panorama <strong className="text-blue-700">enogastronomico e turistico</strong>.
                </h2>
              </AnimateOnScroll>
            </div>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <AnimateOnScroll animation="fade-left" delay={500}>
                <p>
                  I nostri <strong className="font-bold text-blue-700">progetti</strong> nascono dalla volontà di creare una <strong className="font-bold text-blue-700">mappa completa</strong> delle eccellenze siciliane, dal settore food&wine al turismo esperienziale, valorizzando tradizioni e innovazioni del territorio.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-left" delay={650}>
                <p>
                  Attraverso <strong className="font-bold text-blue-700">Guide specializzate</strong>, <strong className="font-bold text-blue-700">Premi di settore</strong>, <strong className="font-bold text-blue-700">Classifiche autorevoli</strong> e <strong className="font-bold text-blue-700">Gran Tour territoriali</strong>, costruiamo un network di connessioni tra produttori, operatori e consumatori.
                </p>
              </AnimateOnScroll>
              <AnimateOnScroll animation="fade-left" delay={800}>
                <p>
                  Ogni iniziativa è progettata per generare <strong className="font-bold text-blue-700">valore aggiunto</strong> al territorio, combinando la forza della comunicazione digitale con l'impatto degli eventi dal vivo per massimizzare visibilità e risultati.
                </p>
              </AnimateOnScroll>
            </div>
          </div>
        </div>

        {/* Sezione Categorie di Progetti */}
        <div className="container mx-auto px-4 relative z-10 mt-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {projectCategories.map((category, index) => (
              <AnimateOnScroll 
                key={category.title} 
                animation="fade-up" 
                delay={index * 150 + 400} 
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all p-6 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-50 rounded-lg mr-4">
                    {category.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900">{category.title}</h4>
                </div>
                <ul className="space-y-2 ml-2">
                  {category.projects.map((project, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <svg className="w-4 h-4 mr-2 text-blue-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
                      </svg>
                      {project}
                    </li>
                  ))}
                </ul>
              </AnimateOnScroll>
            ))}
          </div>

          {/* Galleria di immagini con layout migliorato */}
          <AnimateOnScroll animation="fade-up" delay={400} className="relative mb-16">
            <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-blue-200 rounded-lg z-0 opacity-50 hidden md:block"></div>
            <div className="absolute -bottom-10 -right-10 w-20 h-20 border-2 border-blue-200 rounded-lg z-0 opacity-50 hidden md:block"></div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 relative z-10">
              {galleryImages.map((image, index) => (
                <AnimateOnScroll
                  key={index}
                  animation="fade-up"
                  delay={index * 100 + 500}
                  className={`
                    ${index === 0 ? "col-span-2 row-span-2 relative h-64 md:h-96" : "relative h-40 md:h-52"}
                    overflow-hidden rounded-lg shadow-lg group hover:shadow-xl transition-all duration-300
                  `}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 50vw, 25vw"}
                    priority={index <= 2}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  {/* Info overlay che appare al passaggio del mouse */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-white text-base md:text-lg font-bold drop-shadow-md">{image.title}</h3>
                    <p className="text-blue-200 text-xs md:text-sm font-medium">{image.alt}</p>
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </AnimateOnScroll>

          {/* Sezione finale con immagine e CTA */}
          <div className="grid md:grid-cols-2 gap-16 items-center relative">
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-80 bg-blue-50/30 rounded-3xl blur-3xl"></div>
            
            <AnimateOnScroll animation="fade-left" delay={200} className="order-2 md:order-1 relative z-10">
              <div className="mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full uppercase tracking-wider font-semibold">Il nostro impegno</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Scopri tutti i progetti</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Esplora tutte le nostre iniziative e scopri come stiamo valorizzando le eccellenze del territorio siciliano attraverso progetti innovativi e coinvolgenti.
              </p>
              <Link href="/progetti">
                <button
                  className="mt-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-8 rounded-full font-medium shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center"
                >
                  Scopri tutti i progetti
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </Link>
            </AnimateOnScroll>
            
            <AnimateOnScroll animation="fade-right" delay={400} className="order-1 md:order-2 relative group">
              <div className="relative">
                <div className="w-full h-64 md:h-96 hover:scale-[1.03] transition-transform duration-300 relative overflow-hidden rounded-xl shadow-2xl">
                  <Image
                    src={premio}
                    alt="Mappa delle eccellenze siciliane"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-60 transition-all duration-300"></div>
                </div>
                <div className="absolute inset-0 rounded-xl border-2 border-blue-100 transform translate-x-4 translate-y-4 -z-10"></div>
              </div>
            </AnimateOnScroll>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComfortZoneSection;