import Image from 'next/image';
import AnimatedOnScroll from '../animation/AnimatedOnScroll';
import AnimateOnScroll from '../animation/AnimateOnScroll';

// Importo le immagini dei partner
import potenzano from '../../assets/partner/potenzano-1024x683.jpg';
import sergioRusso from '../../assets/partner/sergio russo.jpg';
import tonyLoCoco from '../../assets/partner/tony-lo coco.jpeg';
import trapaniMartinez from '../../assets/partner/Trapani-Panificio-Martinez-2.jpg';
import arena from '../../assets/partner/arena.jpg';
import garganoPizza from '../../assets/partner/gargano pizza.jpg';
import chifari from '../../assets/partner/pierangelo_chifari_sigep2019_07_web.jpg';
import salvoTerruso from '../../assets/partner/Salvo terruso.webp';
import seby from '../../assets/partner/Seby-e1738258141375.png.webp';
import fiasconaro from '../../assets/partner/Nicola-Fiasconaro-kYgC-U33009306723223zE-656x492@Corriere-Web-Sezioni.jpg';
import ninoFerreri from '../../assets/partner/Nino Ferreri.jpg';
import lucianoMarco from '../../assets/partner/Luciano-Di-Marco.jpeg';
import danieleVaccarella from '../../assets/partner/Daniele-Vaccarella.jpg.webp';
import giusiBattaglia from '../../assets/partner/Giusi_Battaglia.jpeg';
import cappello from '../../assets/partner/Cappellop-800x800.jpeg';
import andyLuotto from '../../assets/partner/Andy Luotto.jpeg';

const PortfolioSection = () => {
  const partners = [
    {
      id: 1,
      name: 'Tony Lo Coco',
      image: tonyLoCoco,
      description: 'Chef stellato, ristorante "I Pupi"'
    },
    {
      id: 2,
      name: 'Pierangelo Chifari',
      image: chifari,
      description: 'Pizzaiolo, Pizzeria Archestrato di Gela'
    },
    {
      id: 3,
      name: 'Nicola Fiasconaro',
      image: fiasconaro,
      description: 'Maestro pasticcere, Fiasconaro'
    },
    {
      id: 4,
      name: 'Sergio Russo',
      image: sergioRusso,
      description: 'Pizzaiolo,Pizzeria Brace Elettrica'
    },
    {
      id: 5,
      name: 'Nino Ferreri',
      image: ninoFerreri,
      description: 'Chef stellato, ristorante "Limu"'
    },
    {
      id: 6,
      name: 'Peppe Martinez',
      image: trapaniMartinez,
      description: 'Maestro panettiere, Panificio Martinez'
    },
    {
      id: 7,
      name: 'Salvo Terruso',
      image: salvoTerruso,
      description: 'Chef e consulente gastronomico'
    },
    {
      id: 8,
      name: 'Fabio Potenzano',
      image: potenzano,
      description: 'Chef'
    },
    {
      id: 9,
      name: 'Francesco Arena',
      image: arena,
      description: 'Maestro panettiere, Panificio Arena'
    },
    {
      id: 10,
      name: 'Gioacchino Gargano',
      image: garganoPizza,
      description: 'Maestro pizzaiolo, Pizzeria Saccarum'
    },
    {
      id: 11,
      name: 'Seby Sorbello',
      image: seby,
      description: 'Chef e consulente gastronomico'
    },
    {
      id: 12,
      name: 'Luciano Di Marco',
      image: lucianoMarco,
      description: 'Chef e consulente gastronomico'
    },
    {
      id: 13,
      name: 'Daniele Vaccarella',
      image: danieleVaccarella,
      description: 'Maestro pizzaiolo, Pizzeria Ammodo'
    },
    {
      id: 14,
      name: 'Giusi Battaglia',
      image: giusiBattaglia,
      description: 'Esperta di cucina siciliana e conduttrice TV'
    },
    {
      id: 15,
      name: 'Giovanni Cappello',
      image: cappello,
      description: 'Pasticcere, pasticceria Cappello'
    },
    {
      id: 16,
      name: 'Andy Luotto',
      image: andyLuotto,
      description: 'Chef, attore e personaggio televisivo'
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-red-50 opacity-30"></div>
      <div className="absolute bottom-10 -left-32 w-64 h-64 rounded-full bg-red-50 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
  

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        </div>

        <AnimatedOnScroll animation="fade-in-down">
          <div className="text-center mb-20">
            <div className="mb-3">
              <span className="px-4 py-1 bg-red-100 text-red-700 rounded-full font-medium text-sm uppercase tracking-wider">
                Talent Partner
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              I Nostri <span className="text-red-600">Talent Partner</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Creiamo momenti di intrattenimento innovativi e coinvolgenti grazie alla collaborazione con i migliori talenti del panorama enogastronomico siciliano. La nostra esperienza ci permette di proporre format unici nel loro genere.
            </p>
          </div>
        </AnimatedOnScroll>

        {/* Partner Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <AnimatedOnScroll 
              key={partner.id} 
              animation="fade-in-up" 
              delay={index * 100}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="aspect-w-1 aspect-h-1 w-full h-64 overflow-hidden relative">
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-cover object-center transition-all duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  priority={partner.id <= 4}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <h3 className="text-white text-xl font-bold mb-1">{partner.name}</h3>
                  <p className="text-gray-300 text-sm">{partner.description}</p>
                </div>
              </div>
              
              <div className="p-4 group-hover:bg-red-50 transition-colors duration-300">
                <h3 className="text-gray-900 font-bold group-hover:text-red-600 transition-colors duration-300">
                  {partner.name}
                </h3>
                <p className="text-gray-600 text-sm">{partner.description}</p>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>

        <AnimatedOnScroll animation="fade-in-up" delay={600}>
          <div className="mt-20 text-center">
            <button
              className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4 px-10 rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
            >
              Collabora con noi
            </button>
            <p className="text-gray-500 text-sm mt-4">Diventa nostro Talent Partner</p>
          </div>
        </AnimatedOnScroll>
      </div>
    </section>
  );
};

export default PortfolioSection;