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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !startCounting) {
          setTimeout(() => {
            setStartCounting(true);
          }, 300);
        }
      },
      { threshold: 0.3 }
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

  const initiatives = [
    { name: 'Gran Tour - Ventimiglia di Sicilia', description: 'Un tour alla scoperta delle bellezze di Ventimiglia di Sicilia.' },
    { name: 'Migliori Street Food Sicilia', description: 'Una guida ai migliori cibi di strada della Sicilia.' },
    { name: 'Premio All Food Sicily', description: 'Un premio che celebra le eccellenze enogastronomiche siciliane.' },
    { name: 'Gran Tour - Misilmeri', description: 'Un tour esplorativo del territorio di Misilmeri.' },
    { name: 'I Più Potenti della Sicilia', description: 'Una classifica annuale delle personalità più influenti in Sicilia.' },
    { name: 'Migliori Pizzerie della Sicilia', description: 'Una guida alle pizzerie da non perdere in Sicilia.' },
    { name: 'Migliori Birrifici di Sicilia', description: 'Una selezione dei migliori birrifici artigianali siciliani.' },
    { name: 'Miglior Agriturismo di Sicilia', description: 'Un riconoscimento per l\'eccellenza nell\'ospitalità rurale.' },
    { name: 'Miglior Borgo di Sicilia', description: 'Un premio per il borgo più affascinante e accogliente della Sicilia.' },
  ];

  const initiativesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Iniziative e Progetti di Futura Company",
    "description": "Guide, premi, classifiche e tour organizzati per valorizzare le eccellenze siciliane.",
    "itemListElement": initiatives.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": item.name,
        "description": item.description,
        "publisher": {
          "@type": "Organization",
          "name": "Futura Company"
        }
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(initiativesSchema) }}
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
                  { value: 4, label: 'Progetto' },
                  { value: 60, label: 'Iniziative attivate' },
                  { value: 420, label: 'Eccellenze premiate' }
                ].map((stat, i) => (
                  <AnimateOnScroll key={stat.label} animation="fade-up" delay={i * 100 + 600}>
                    <div className="text-center flex flex-col items-center">
                      <div className="flex items-baseline justify-center mb-2 h-10">
                        <Counter
                          value={startCounting ? stat.value : 0}
                          fontSize={28}
                          textColor="#2563eb"
                          fontWeight="bold"
                          places={stat.value >= 100 ? [100, 10, 1] : stat.value >= 10 ? [10, 1] : [1]}
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

              <AnimateOnScroll animation="fade-right" delay={450}>
                <p className="text-lg text-gray-700 leading-relaxed">
                Le <strong className="font-bold text-blue-700">iniziative</strong> del gruppo si sviluppano  nelle nostre <strong className="font-bold text-blue-700">Guide</strong> che raccontano le eccellenze del territorio, i <strong className="font-bold text-blue-700">Premi</strong> che gratificano il lavoro di tante eccellenze, le <strong className="font-bold text-blue-700">Classifiche</strong> che mappano i protagonisti del settore e i <strong className="font-bold text-blue-700">Gran Tour</strong> , mini eventi che promuovono e valorizzano i territori.
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

        {/* Sezione Categorie di Progetti */}
        <div className="container mx-auto px-4 relative z-10 mt-24">
          {/* Sezione finale con immagine e CTA */}
          <div className="grid md:grid-cols-2 gap-16 items-center relative">
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-80 bg-blue-50/30 rounded-3xl blur-3xl"></div>
            
            <AnimateOnScroll animation="fade-left" delay={200} className="order-2 md:order-1 relative z-10">
              <div className="mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full uppercase tracking-wider font-semibold">Il nostro impegno</span>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Scopri tutti i progetti</h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Esplora tutte le nostre iniziative
              </p>
              <Link href="#progetti">
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
