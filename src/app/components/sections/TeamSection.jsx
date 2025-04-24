import Image from 'next/image';
import TeamContactButton from '../buttons/TeamContactButton';
import AnimatedOnScroll from '../animation/AnimatedOnScroll';
import AnimateOnScroll from '../animation/AnimateOnScroll';

// Importo le immagini dei membri del team
import adalberto from '../../assets/images/adalberto.jpeg';
import jessica from '../../assets/images/jessica.jpeg';
import salvo from '../../assets/images/Salvo.jpeg';
import vincenzo from '../../assets/images/vincenzo.jpeg';
import aurora from '../../assets/images/aurora.jpg';
import desire from '../../assets/images/desire.jpeg';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Adalberto Catanzaro',
      role: 'CEO e Direttore Creativo',
      image: adalberto
    },
    {
      id: 2,
      name: 'Jessica Ricci',
      role: 'Senior Partner e Lawyer',
      image: jessica
    },
    {
      id: 3,
      name: 'Salvo Scaduto',
      role: 'Partnering Relationship e Ufficio Stampa',
      image: salvo
    },
    {
      id: 4,
      name: 'Vincenzo Busalacchi',
      role: 'Full Stack Developer',
      image: vincenzo
    },
    {
      id: 5,
      name: 'Aurora Corso',
      role: 'Account senior e Social Media manager',
      image: aurora
    },
    {
      id: 6,
      name: 'Desiree Chiarenza',
      role: 'Executive Assistant',
      image: desire
    }
  ];

  return (
    <section id="team" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Elementi decorativi */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-red-50 opacity-30"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-red-50 opacity-40"></div>
      <div className="absolute top-1/3 right-0 w-20 h-20 rounded-full bg-red-100 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll delay={200}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Il Nostro Team
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <AnimateOnScroll 
              key={member.id} 
              delay={index * 100}
              className="group relative h-full"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full">
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={member.id <= 3}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  
                  {/* Info overlay che appare al passaggio del mouse */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <h3 className="text-white text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-red-200 text-sm font-medium">{member.role}</p>
                  </div>
                </div>
                
                <div className="p-6 bg-white">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-red-600 transition-colors">{member.name}</h3>
                  <p className="text-red-500 text-sm font-medium">{member.role}</p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimatedOnScroll animation="fade-in-up" delay={400}>
          <div className="text-center mt-20 relative">
            {/* Elemento decorativo */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-red-100 rounded-full opacity-50"></div>
            
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 text-lg leading-relaxed">
              Sei interessato a unirti al nostro team di esperti appassionati? 
              Siamo sempre alla ricerca di talenti che condividono la nostra visione.
            </p>
            <TeamContactButton />
            <p className="text-gray-500 text-sm mt-4">Invia la tua candidatura</p>
          </div>
        </AnimatedOnScroll>
      </div>
    </section>
  );
};

export default TeamSection;