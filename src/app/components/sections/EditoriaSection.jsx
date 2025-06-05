'use client';
import Image from 'next/image';
import AnimatedOnScroll from '../animation/AnimatedOnScroll';
import AnimateOnScroll from '../animation/AnimateOnScroll';

// Import delle immagini locali
import AllFoodSicilyLogo from '../../assets/images/AllFoodSicily.png';
import SiciliaMagLogo from '../../assets/images/SiciliaMag.png';
import FermentoPizzaLogo from '../../assets/images/FermentoPizza.png';
import VinUpLogo from '../../assets/images/VinUp.png';
import TravelNotizieLogo from '../../assets/images/TravelNotizie.png';

const AboutSection = () => {
  const newspapers = [
    {
      title: 'All Food Sicily',
      description: 'Primo giornale siciliano online ad avere una diffusione capillare, nato nel 2020 sotto la direzione di Salvo Scaduto.',
      icon: (
        <Image
          src={AllFoodSicilyLogo}
          alt="All Food Sicily Logo"
          width={96}
          height={96}
          className="w-24 h-24 object-contain"
        />
      ),
    },
    {
      title: 'Sicilia Mag',
      description: 'Testata giornalistica dedicata al territorio siciliano, alla sua cultura e alle sue eccellenze.',
      icon: (
        <Image
          src={SiciliaMagLogo}
          alt="Sicilia Mag Logo"
          width={96}
          height={96}
          className="w-24 h-24 object-contain"
        />
      ),
    },
    {
      title: 'Fermento Pizza',
      description: 'Pubblicazione dedicata al mondo della pizza, alle sue innovazioni e ai suoi protagonisti.',
      icon: (
        <Image
          src={FermentoPizzaLogo}
          alt="Fermento Pizza Logo"
          width={96}
          height={96}
          className="w-24 h-24 object-contain"
        />
      ),
    },
    {
      title: 'Travel Notizie',
      description: 'Giornale online che racconta le tendenze del turismo, i luoghi da scoprire e le esperienze di viaggio.',
      icon: (
        <Image
          src={TravelNotizieLogo}
          alt="Travel Notizie Logo"
          width={96}
          height={96}
          className="w-24 h-24 object-contain"
        />
      ),
    },
    {
      title: 'Vinup',
      description: 'Testata specializzata nel mondo del vino, con focus sulle eccellenze enologiche siciliane e italiane.',
      icon: (
        <Image
          src={VinUpLogo}
          alt="Vinup Logo"
          width={96}
          height={96}
          className="w-24 h-24 object-contain"
        />
      ),
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
              EDITORIA
            </span>
          </AnimatedOnScroll>
          
          <AnimatedOnScroll animation="fade-in-down" delay={300}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Il Nostro <span className="text-blue-600">Gruppo Editoriale</span>
            </h2>
          </AnimatedOnScroll>
          
          <AnimatedOnScroll animation="fade-in" delay={400}>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-8 rounded-full"></div>
          </AnimatedOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={500}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              La sintesi di esperienze editoriali, testate e professioni che hanno fatto la storia del giornalismo siciliano nel campo dell'enogastronomia.
            </p>
          </AnimateOnScroll>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
          <AnimateOnScroll animation="fade-left" delay={300} className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Nato nel 2020 dall'incontro di Giovanni Paternò, Adalberto Catanzaro e Salvatore Scaduto che ha permesso di far nascere un gruppo con 5 quotidiani all'attivo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              L'evoluzione tecnologica e l'applicazione di soluzioni innovative caratterizzano da sempre la nostra storia: nel 2020 si parte con All Food Sicily, quotidiano nato sotto la direzione di Salvo Scaduto, è stato il primo giornale siciliano online ad avere una diffusione capillare.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              L'attenzione alla qualità dei contenuti è il cuore di progetti editoriali che hanno portato alla nascita di varie testate, e ultimi in ordine di tempo Vinup, Fermento Pizza, Sicilia Mag, Travel Notizie. La tensione costante verso il futuro e l'attitudine per l'innovazione continuano oggi a guidare lo sviluppo di nuove iniziative digitali, rendendo ancora più ricca la proposta che si offre ai lettori.
            </p>
            
            <div className="grid grid-cols-3 gap-6 pt-4 mt-8 border-t border-gray-200">
              {[
                { value: '2020', label: 'Anno di fondazione' },
                { value: '5', label: 'Testate giornalistiche' },
                { value: '3', label: 'Fondatori' }
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
              src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
              alt="Gruppo Editoriale Siciliano"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </AnimateOnScroll>
        </div>

        <AnimatedOnScroll animation="fade-in-up" delay={300}>
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-16">
            Le Nostre Testate
          </h3>
        </AnimatedOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-12">
          {newspapers.map((newspaper, index) => (
            <AnimatedOnScroll
              key={newspaper.title}
              animation="fade-in-up"
              delay={index * 150 + 400}
              className="group"
            >
              <div className=" transform transition-all duration-300  h-full flex flex-col">
                <div className="p-8 flex items-center justify-center border-b border-gray-100 min-h-[120px]">
                  {newspaper.icon}
                </div>
                <div className="p-8 flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{newspaper.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm">{newspaper.description}</p>
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