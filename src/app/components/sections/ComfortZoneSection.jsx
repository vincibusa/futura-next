import Link from 'next/link';
import Image from 'next/image';
import AnimateOnScroll from '../animation/AnimateOnScroll';
import AnimatedOnScroll from '../animation/AnimatedOnScroll';

const ComfortZoneSection = () => {
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
    <section id="progetti" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute -top-40 right-0 w-80 h-80 rounded-full bg-blue-50 opacity-30"></div>
      <div className="absolute top-1/3 -left-20 w-40 h-40 rounded-full bg-blue-50 opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <AnimatedOnScroll animation="fade-in" delay={200}>
            <div className="mb-3">
              <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full font-medium text-sm uppercase tracking-wider">
                PROGETTI
              </span>
            </div>
          </AnimatedOnScroll>
          
          <AnimatedOnScroll animation="fade-in-down" delay={300}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Le Nostre <span className="text-blue-600">Iniziative</span>
            </h2>
          </AnimatedOnScroll>
          
          <AnimatedOnScroll animation="fade-in" delay={400}>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-8 rounded-full"></div>
          </AnimatedOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={500}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              L'approccio del gruppo si fonda sui valori che definiscono l'identità della nostra terra:
              l'obiettivo è premiare le migliori eccellenze siciliane e non.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Galleria di immagini migliorata */}
        <AnimatedOnScroll animation="fade-in" delay={400} className="mb-24 relative">
          {/* Elementi decorativi */}
          <div className="absolute -top-10 -left-10 w-20 h-20 border-2 border-blue-200 rounded-lg z-0 opacity-50"></div>
          <div className="absolute -bottom-10 -right-10 w-20 h-20 border-2 border-blue-200 rounded-lg z-0 opacity-50"></div>
          
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
                  <p className="text-blue-200 text-xs md:text-sm font-medium">{image.alt}</p>
                </div>
              </AnimatedOnScroll>
            ))}
          </div>
        </AnimatedOnScroll>

        {/* Sezione Categorie di Progetti */}
        <div className="mb-16">
          <AnimatedOnScroll animation="fade-in-up" delay={300}>
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-16">
              Le Categorie dei Nostri Progetti
            </h3>
          </AnimatedOnScroll>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
        </div>

        {/* Descrizione Progetti */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20 relative">
          <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-80 bg-blue-50/30 rounded-3xl blur-3xl"></div>
          
          <AnimateOnScroll animation="fade-left" delay={200} className="order-2 md:order-1 relative z-10">
            <div className="mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs rounded-full uppercase tracking-wider font-semibold">Il nostro impegno</span>
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Mappare Eccellenze</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Questa sezione riporta le iniziative che il Gruppo ha realizzato e sta sviluppando in
              quattro categorie e consente di mappare i luoghi e le persone che fanno interesse nei settori del
              turismo, food e imprenditoria.
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
                  src='https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/food.png?alt=media&token=0221877e-b771-4b65-84e8-ec39fa42af9b'
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
              <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-blue-50 rounded-full"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-50 rounded-full hidden md:block"></div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};

export default ComfortZoneSection;