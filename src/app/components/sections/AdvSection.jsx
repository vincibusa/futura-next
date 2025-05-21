'use client';
import Image from 'next/image';
import AnimatedOnScroll from '../animation/AnimatedOnScroll';
import AnimateOnScroll from '../animation/AnimateOnScroll';

const AdvSection = () => {
  const events = [
    {
      title: 'Diospyros Festival',
      description: 'La celebrazione del frutto del kaki, con eventi gastronomici e culturali dedicati.',
      icon: '/images/icons/event-icon.svg',
      bgColor: 'from-orange-500 to-orange-700',
    },
    {
      title: 'San Pellegrino Chef Table',
      description: 'Un esclusivo evento gastronomico con i migliori chef del panorama siciliano e nazionale.',
      icon: '/images/icons/chef-icon.svg',
      bgColor: 'from-blue-500 to-blue-700',
    },
    {
      title: 'Sagra del Cannolo',
      description: 'La manifestazione dedicata al dolce simbolo della Sicilia, con degustazioni e concorsi.',
      icon: '/images/icons/cannolo-icon.svg',
      bgColor: 'from-green-500 to-green-700',
    },
    {
      title: 'Sfincione Fest',
      description: 'Festival dedicato allo sfincione, tipica specialità palermitana, con stand e workshop.',
      icon: '/images/icons/food-icon.svg',
      bgColor: 'from-red-500 to-red-700',
    },
    {
      title: 'Cynara Festival',
      description: 'Evento dedicato al carciofo e alle eccellenze agricole siciliane.',
      icon: '/images/icons/vegetable-icon.svg',
      bgColor: 'from-purple-500 to-purple-700',
    },
    {
      title: 'Cous Cous Fest',
      description: 'La celebrazione internazionale del cous cous, con chef da tutto il Mediterraneo.',
      icon: '/images/icons/international-icon.svg',
      bgColor: 'from-yellow-500 to-yellow-700',
    },
    {
      title: 'Beer Catania',
      description: 'Festival delle birre artigianali etnee e siciliane, con degustazioni e incontri.',
      icon: '/images/icons/beer-icon.svg',
      bgColor: 'from-amber-500 to-amber-700',
    },
    {
      title: 'Spumanti dell\'Etna',
      description: 'Evento dedicato alle bollicine prodotte sul vulcano attivo più alto d\'Europa.',
      icon: '/images/icons/wine-icon.svg',
      bgColor: 'from-blue-600 to-blue-800',
    },
    {
      title: 'Festival del Cinema 2023',
      description: 'Rassegna cinematografica con proiezioni, incontri e ospiti internazionali.',
      icon: '/images/icons/cinema-icon.svg',
      bgColor: 'from-indigo-500 to-indigo-700',
    },
    {
      title: 'Taobuk',
      description: 'Festival letterario internazionale che unisce letteratura, arte e cultura.',
      icon: '/images/icons/book-icon.svg',
      bgColor: 'from-teal-500 to-teal-700',
    },
    {
      title: 'Sfincione Festival',
      description: 'La celebrazione della specialità palermitana, con concorsi tra i migliori panificatori.',
      icon: '/images/icons/food-icon.svg',
      bgColor: 'from-red-500 to-red-700',
    },
    {
      title: 'Cannolo Festival',
      description: 'Manifestazione dedicata al cannolo siciliano, con pasticceri da tutta l\'isola.',
      icon: '/images/icons/cannolo-icon.svg',
      bgColor: 'from-green-500 to-green-700',
    },
  ];

  return (
    <section id="adv" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute -top-32 -right-32 w-64 h-64 rounded-full bg-blue-100 opacity-30"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-blue-100 opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <AnimatedOnScroll animation="fade-in" delay={200} className="mb-3">
            <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full font-medium text-sm uppercase tracking-wider">
              INSERZIONI
            </span>
          </AnimatedOnScroll>
          
          <AnimatedOnScroll animation="fade-in-down" delay={300}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              I Nostri <span className="text-blue-600">Eventi Promossi</span>
            </h2>
          </AnimatedOnScroll>
          
          <AnimatedOnScroll animation="fade-in" delay={400}>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-8 rounded-full"></div>
          </AnimatedOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={500}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Con 1 milione di utenti che ci leggono ogni giorno, siamo uno dei più importanti Gruppi editoriali in Sicilia. 
              Produciamo informazione e contenuti multimediali che promuovono eventi e iniziative di rilievo.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <AnimateOnScroll animation="fade-right" delay={400} className="relative h-[450px] shadow-2xl rounded-xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Futura Company Eventi"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </AnimateOnScroll>

          <AnimateOnScroll animation="fade-left" delay={300} className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Futura Company è un punto di riferimento nella promozione e comunicazione di eventi culturali, gastronomici e artistici in tutta la Sicilia.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Attraverso le nostre testate giornalistiche, raggiungiamo ogni giorno centinaia di migliaia di lettori, offrendo visibilità e supporto a iniziative di rilievo che valorizzano il territorio e le eccellenze siciliane.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I nostri canali multimediali rappresentano una piattaforma ideale per la promozione di eventi, festival e manifestazioni, garantendo un'ampia copertura e un pubblico altamente profilato.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-4 mt-8 border-t border-gray-200">
              {[
                { value: '1M+', label: 'Lettori giornalieri' },
                { value: '12+', label: 'Eventi promossi' },
                { value: '5', label: 'Canali editoriali' }
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
        </div>

        <AnimatedOnScroll animation="fade-in-up" delay={300}>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-16">
            Eventi e Manifestazioni
          </h3>
        </AnimatedOnScroll>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {events.slice(0, 6).map((event, index) => (
            <AnimatedOnScroll
              key={event.title}
              animation="fade-in-up"
              delay={index * 100 + 400}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                <div className={`bg-gradient-to-r ${event.bgColor} p-6 flex items-center justify-center h-24`}>
                  <h3 className="text-xl font-bold text-white group-hover:scale-105 transition-transform">{event.title}</h3>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </div>
                <div className="p-4 border-t border-gray-100">
                  <button className="w-full py-2 text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors">
                    Scopri di più →
                  </button>
                </div>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mt-8">
          {events.slice(6, 12).map((event, index) => (
            <AnimatedOnScroll
              key={event.title}
              animation="fade-in-up"
              delay={(index + 6) * 100 + 400}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl h-full flex flex-col">
                <div className={`bg-gradient-to-r ${event.bgColor} p-6 flex items-center justify-center h-24`}>
                  <h3 className="text-xl font-bold text-white group-hover:scale-105 transition-transform">{event.title}</h3>
                </div>
                <div className="p-6 flex-grow">
                  <p className="text-gray-600 leading-relaxed">{event.description}</p>
                </div>
                <div className="p-4 border-t border-gray-100">
                  <button className="w-full py-2 text-blue-600 font-medium text-sm hover:text-blue-800 transition-colors">
                    Scopri di più →
                  </button>
                </div>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>

        <div className="mt-16 text-center">
          <AnimatedOnScroll animation="fade-in-up" delay={800}>
            <a 
              href="#contact" 
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              Promuovi il tuo evento
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </AnimatedOnScroll>
        </div>
      </div>
    </section>
  );
};

export default AdvSection; 