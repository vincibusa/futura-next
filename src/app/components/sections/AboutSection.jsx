'use client';
import Image from 'next/image';
import AnimatedOnScroll from '../animation/AnimatedOnScroll';
import AnimateOnScroll from '../animation/AnimateOnScroll';

const AboutSection = () => {
  const values = [
    {
      title: 'Innovazione',
      description: 'Ricerchiamo costantemente nuove soluzioni e approcci creativi per affrontare le sfide di marketing.',
      icon: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      bgColor: 'from-blue-600 to-blue-800',
    },
    {
      title: 'Eccellenza',
      description: 'Ci impegniamo a fornire servizi di alta qualità che superino le aspettative dei nostri clienti.',
      icon: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      bgColor: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Collaborazione',
      description: 'Crediamo nel potere della collaborazione e lavoriamo a stretto contatto con i nostri clienti.',
      icon: (
        <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      bgColor: 'from-blue-600 to-blue-800',
    },
  ];

  return (
    <section id="chi-siamo" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-100 to-transparent"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-blue-100 opacity-30"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-blue-100 opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <AnimatedOnScroll animation="fade-in" delay={200} className="mb-3">
            <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full font-medium text-sm uppercase tracking-wider">
              Chi Siamo
            </span>
          </AnimatedOnScroll>
          
          <AnimatedOnScroll animation="fade-in-down" delay={300}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Amiamo <span className="text-blue-600">Progetti Ambiziosi</span>
            </h2>
          </AnimatedOnScroll>
          
          <AnimatedOnScroll animation="fade-in" delay={400}>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-8 rounded-full"></div>
          </AnimatedOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={500}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              La Pubblicità può durare solo un attimo, ma con strategia e tattica può durare molto di più.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <AnimateOnScroll animation="fade-left" delay={300} className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Da anni ci occupiamo di produzione e progettazione di eventi enogastronomici e culturali, generando valore aggiunto per i territorio.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ideiamo campagne di comunicazione per istituzioni e imprese, forniamo consulenze per PMI e sosteniamo le imprese in progetti d'internazionalizzazione.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I nostri punti di forza sono la comunicazione istituzionale e d'impresa attraverso lo sviluppo di un planing integrato tra web marketing e event project.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-4 mt-8 border-t border-gray-200">
              {[
                { value: '12', label: 'Anni di esperienza' },
                { value: '300+', label: 'Clienti soddisfatti' },
                { value: '10+', label: 'Team di esperti' }
              ].map((stat, i) => (
                <AnimatedOnScroll key={stat.label} animation="fade-in-up" delay={i * 100 + 600}>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.label}</p>
                  </div>
                </AnimatedOnScroll>
              ))}
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-right" delay={400} className="relative h-[450px] shadow-2xl rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Team di Catanzaro & Partners"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </AnimateOnScroll>
        </div>

        <AnimatedOnScroll animation="fade-in-up" delay={300}>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-16">
            I Nostri Valori
          </h3>
        </AnimatedOnScroll>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <AnimatedOnScroll
              key={value.title}
              animation="fade-in-up"
              delay={index * 150 + 400}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
                <div className={`bg-gradient-to-r ${value.bgColor} p-8 flex items-center justify-center`}>
                  <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm">
                    {value.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;