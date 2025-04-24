import Link from 'next/link';
import ContactButton from '../buttons/ContactButton';
import AnimatedOnScroll from '../animation/AnimatedOnScroll';
import AnimateOnScroll from '../animation/AnimateOnScroll';

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

  return (
    <section id="servizi" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-red-50 opacity-40"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 rounded-full bg-red-50 opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimateOnScroll delay={200}>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            I Nostri Servizi
          </h2>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <AnimatedOnScroll 
              key={service.id} 
              animation="fade-in-up" 
              delay={index * 150}
              className="group relative h-full"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex flex-col">
                <div className={`bg-gradient-to-r ${service.bgColor} p-8 flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                  <div className="bg-white/10 p-4 rounded-full backdrop-blur-sm transform transition-transform duration-300 group-hover:scale-110 relative z-10">
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
                        <li key={index} className="flex items-center text-gray-600 group-hover:text-gray-700 transition-colors">
                          <svg className="w-5 h-5 mr-2 text-red-500 transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-sm">{subservice}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link href={`/servizi/${service.id}`} className="inline-block">
                      <div
                        className="flex items-center text-red-600 font-medium cursor-pointer group-hover:font-semibold hover:translate-x-1 transition-transform duration-300"
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
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>

        <AnimatedOnScroll animation="fade-in-up" delay={300}>
          <div className="mt-20 text-center">
            <ContactButton />
            <p className="text-gray-500 text-sm mt-4">Richiedi una consulenza personalizzata gratuitamente</p>
          </div>
        </AnimatedOnScroll>
      </div>
    </section>
  );
};

export default ServicesSection;