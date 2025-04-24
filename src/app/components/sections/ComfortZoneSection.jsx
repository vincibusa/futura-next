import Link from 'next/link';
import Image from 'next/image';
import AnimateOnScroll from '../animation/AnimateOnScroll';
import AnimatedOnScroll from '../animation/AnimatedOnScroll';

const ComfortZoneSection = () => {
  // Immagini per la galleria
  const galleryImages = [
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/1.jpeg?alt=media&token=f341a015-0672-4224-aa0e-799efd5d9d07',
      alt: 'Vista panoramica di un villaggio costiero con montagna vulcanica',
      title: 'Panorama Siciliano',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/3.jpeg?alt=media&token=efbc570c-d542-4553-9f98-b89869d90414',
      alt: 'Sfincione siciliano, specialità gastronomica',
      title: 'Gastronomia Locale',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/2.jpeg?alt=media&token=7b378b8a-b47f-4a5b-aab7-6523a82e99ed',
      alt: 'Vigneti siciliani con Etna sullo sfondo',
      title: 'Vigneti Etnei',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/4.jpeg?alt=media&token=b99a58f4-ccb1-4de6-802d-50e8d7a7b949',
      alt: 'Porto con barche e case sulla costa',
      title: 'Costa Siciliana',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/5.jpeg?alt=media&token=426ce523-4f2c-4753-8287-eda79693dfcc',
      alt: 'Donne in costume tradizionale siciliano',
      title: 'Tradizioni Folkloristiche',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/6.jpeg?alt=media&token=1da55fdc-c942-4ce4-bb31-bf5c307d1d54',
      alt: 'Villa Palagonia, architettura storica',
      title: 'Villa Palagonia',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/7.jpeg?alt=media&token=8a09303a-49a1-404b-a865-9a46d22c6428',
      alt: 'Villa Palagonia, architettura storica',
      title: 'Architettura Barocca',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/8.jpeg?alt=media&token=8cca35ea-17bf-4bc9-a1fd-1804fe21d8ab',
      alt: 'Cannolo siciliano, dolce tipico',
      title: 'Pasticceria Tipica',
    },
    {
      src: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/9.jpeg?alt=media&token=a4e1d15c-83e0-4770-8e86-38a720c5e08b',
      alt: 'Piana',
      title: 'Piana degli Albanesi',
    },
  ];

  return (
    <section id="comfort-zone" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute -top-40 right-0 w-80 h-80 rounded-full bg-red-50 opacity-30"></div>
      <div className="absolute top-1/3 -left-20 w-40 h-40 rounded-full bg-red-50 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <AnimatedOnScroll animation="fade-in" delay={200}>
            <div className="mb-3">
              <span className="px-4 py-1 bg-red-100 text-red-700 rounded-full font-medium text-sm uppercase tracking-wider">
                La nostra terra
              </span>
            </div>
          </AnimatedOnScroll>
          
          <AnimatedOnScroll animation="fade-in-down" delay={300}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              La nostra <span className="text-red-600">Comfort Zone</span>
            </h2>
          </AnimatedOnScroll>
          
          <AnimatedOnScroll animation="fade-in" delay={400}>
            <div className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-8 rounded-full"></div>
          </AnimatedOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={500}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Siamo amanti della nostra terra e delle sue tradizioni. Tutto ciò che facciamo è per lasciare un credito di fiducia alle nuove generazioni.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Galleria di immagini migliorata */}
        <AnimatedOnScroll animation="fade-in" delay={400} className="mb-24 relative">
          {/* Elementi decorativi */}
          <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-red-200 rounded-lg z-0 opacity-50"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 border-2 border-red-200 rounded-lg z-0 opacity-50"></div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 relative z-10">
            {galleryImages.map((image, index) => (
              <AnimatedOnScroll
                key={index}
                animation="fade-in-up"
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
                  <p className="text-red-200 text-xs md:text-sm font-medium">{image.alt}</p>
                </div>
              </AnimatedOnScroll>
            ))}
          </div>
        </AnimatedOnScroll>

        {/* Food Concept Section migliorata */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20 relative">
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-80 bg-red-50/30 rounded-3xl blur-3xl"></div>
          
          <AnimateOnScroll animation="fade-left" delay={200} className="order-2 md:order-1 relative z-10">
            <div className="mb-4">
              <span className="px-3 py-1 bg-red-100 text-red-700 text-xs rounded-full uppercase tracking-wider font-semibold">Dal 2013</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Food Concept</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Ci occupiamo di progetti di animazione territoriale scoprendo e valorizzando i prodotti tipici che caratterizzano le comunità come Bagheria e Piana degli Albanesi. Per le istituzioni creiamo e produciamo format di live marketing, comunicazione e tutto ciò che serve per realizzare eventi di successo.
            </p>
            <Link href="/servizi/event">
              <button
                className="mt-4 bg-gradient-to-r from-red-600 to-red-700 text-white py-3 px-8 rounded-full font-medium shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 flex items-center"
              >
                Scopri i nostri eventi
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </Link>
          </AnimateOnScroll>
          
          <AnimateOnScroll animation="fade-right" delay={400} className="order-1 md:order-2 relative group">
            <div className="relative">
              <div className="w-full h-64 md:h-96 hover:scale-[1.03] transition-transform duration-300 relative overflow-hidden rounded-xl shadow-2xl">
                <Image
                  src='https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/food.png?alt=media&token=0221877e-b771-4b65-84e8-ec39fa42af9b'
                  alt="Food Concept - Sfincione siciliano"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-60 transition-all duration-300"></div>
              </div>
              <div className="absolute inset-0 rounded-xl border-2 border-red-100 transform translate-x-4 translate-y-4 -z-10"></div>
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-red-50 rounded-full"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-red-50 rounded-full hidden md:block"></div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ComfortZoneSection;