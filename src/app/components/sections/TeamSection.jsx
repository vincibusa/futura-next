'use client';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import TeamContactButton from '../buttons/TeamContactButton';
import AnimateOnScroll from '../animation/AnimateOnScroll';
import Counter from '../counter';
import TitleCard from '../cards/TitleCard';



const TeamSection = () => {
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

  const teamMembers = [
    {
      id: 1,
      name: 'Adalberto Catanzaro',
      role: 'Presidente e Direttore Marketing',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/adalberto.jpeg?alt=media&token=d5ba9097-4070-40d6-b10a-9c8e5df4f60e'
    },
    {
      id: 2,
      name: 'Gianni Paternò',
      role: 'Vice Presidente e Direttore Operativo',
      image: 'https://pbs.twimg.com/profile_images/1640678727/calice_in_mano_400x400.JPG'
    },
    {
      id: 3,
      name: 'Salvo Scaduto',
      role: 'Consiglio CDA e Direttore Responsabile',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/Salvo.jpeg?alt=media&token=103aae00-0217-4edc-85b9-d8b480b81a3f'
    },
    {
      id: 4,
      name: 'Emma Governali',
      role: 'Coordinatrice di Relazione',
      image: '/emma.jpeg'
    },
    {
      id: 5,
      name: 'Serena Pantaleo',
      role: 'Social Media Manager',
      image: '/serena.jpg'
    },
    {
      id: 6,
      name: 'Michele Currado',
      role: 'Collaboratore di Redazione',
      image: '/michele.jpg',
    }
  ];

  return (
    <section id="team" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-blue-100 opacity-30"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-blue-100 opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          {/* Colonna sinistra - Titolo */}
          <div>
            <AnimateOnScroll animation="fade-down" delay={300}>
              <h2 className="text-3xl md:text-3xl font-bold text-blue-700 mb-4">
                Il Nostro Team
              </h2>
            </AnimateOnScroll>

            <AnimateOnScroll animation="fade-up" delay={500}>
              <p className="text-xl text-gray-600 font-light leading-relaxed">
                Un team di <strong className="font-bold text-blue-700">professionisti esperti</strong> e appassionati che lavora con dedizione per valorizzare le <strong className="font-bold text-blue-700">eccellenze siciliane</strong>.
              </p>
            </AnimateOnScroll>

            <div ref={statsRef} className="grid grid-cols-3 gap-6 pt-4 mt-8 border-t border-gray-200">
              {[
                { value: 6, label: 'Membri del team' },
                { value: 15, label: 'Anni di esperienza' },
                { value: 100, label: 'Progetti realizzati' }
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
            <AnimateOnScroll animation="fade-right" delay={300}>
              <p className="text-lg text-gray-700 leading-relaxed">
                Il nostro team è composto da <strong className="font-bold text-blue-700">professionisti qualificati</strong> con competenze complementari nel campo del <strong className="font-bold text-blue-700">marketing, comunicazione e relazioni pubbliche</strong>.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-right" delay={450}>
              <p className="text-lg text-gray-700 leading-relaxed">
                Ogni membro porta la propria <strong className="font-bold text-blue-700">esperienza unica</strong> e la passione per la valorizzazione del territorio siciliano, lavorando insieme per raggiungere obiettivi comuni di <strong className="font-bold text-blue-700">eccellenza e innovazione</strong>.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-right" delay={600}>
              <p className="text-lg text-gray-700 leading-relaxed">
                La nostra forza risiede nella <strong className="font-bold text-blue-700">collaborazione</strong> e nell'approccio multidisciplinare, che ci permette di affrontare ogni progetto con <strong className="font-bold text-blue-700">competenza e creatività</strong>.
              </p>
            </AnimateOnScroll>
            <AnimateOnScroll animation="fade-right" delay={750}>
              <p className="text-lg text-gray-700 leading-relaxed">
                Insieme, costruiamo <strong className="font-bold text-blue-700">strategie efficaci</strong> e realizziamo iniziative che fanno la differenza nel panorama dell'enogastronomia e del turismo siciliano.
              </p>
            </AnimateOnScroll>
          </div>
        </div>

        {/* Griglia membri del team */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 mb-20">
          {teamMembers.map((member, index) => (
            <AnimateOnScroll 
              key={member.id} 
              delay={index * 100}
              className="h-full"
            >
              <TitleCard
                imageSrc={member.image}
                altText={member.name}
                captionText={member.name}
                description={member.role}
                containerHeight="400px"
                imageHeight="400px"
                imageWidth="100%"
                scaleOnHover={1.05}
                rotateAmplitude={12}
                showMobileWarning={false}
                showTooltip={false}
              />
            </AnimateOnScroll>
          ))}
        </div>

        {/* Sezione contatto */}
        <AnimateOnScroll animation="fade-in-up" delay={400}>
          <div className="text-center relative">
            {/* Elemento decorativo */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-blue-100 rounded-full opacity-50"></div>
            
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
              Sei interessato a unirti al nostro team di esperti appassionati? 
              Siamo sempre alla ricerca di talenti che condividono la nostra visione.
            </p>
            <TeamContactButton />
            <p className="text-gray-500 text-sm mt-4">Invia la tua candidatura</p>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default TeamSection;