import Image from 'next/image';
import AnimatedOnScroll from '../animation/AnimatedOnScroll';
import AnimateOnScroll from '../animation/AnimateOnScroll';

const PortfolioSection = () => {
  const partners = [
    {
      id: 1,
      name: 'Tony Lo Coco',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/tony-lo%20coco.jpeg?alt=media&token=4d6f2e36-ebad-461c-bab3-508d6da75272',
      description: 'Chef stellato, ristorante "I Pupi"'
    },
    {
      id: 2,
      name: 'Pierangelo Chifari',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/pierangelo_chifari_sigep2019_07_web.jpg?alt=media&token=8d50d135-4676-4226-a6d9-400bce198714',
      description: 'Pizzaiolo, Pizzeria Archestrato di Gela'
    },
    {
      id: 3,
      name: 'Nicola Fiasconaro',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/Nicola-Fiasconaro-kYgC-U33009306723223zE-656x492%40Corriere-Web-Sezioni.jpg?alt=media&token=cd3eb4d7-ae9c-45b7-9c8e-3804b1e7a4bb',
      description: 'Maestro pasticcere, Fiasconaro'
    },
    {
      id: 4,
      name: 'Sergio Russo',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/sergio%20russo.jpg?alt=media&token=c2e3666e-e32a-4a44-a58e-feaa5e34aa88',
      description: 'Pizzaiolo,Pizzeria Brace Elettrica'
    },
    {
      id: 5,
      name: 'Nino Ferreri',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/Nino%20Ferreri.jpg?alt=media&token=160db796-e688-4b73-9644-9e3ef8f7d082',
      description: 'Chef stellato, ristorante "Limu"'
    },
    {
      id: 6,
      name: 'Peppe Martinez',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/Trapani-Panificio-Martinez-2.jpg?alt=media&token=b7a0e972-06bb-4b06-aaea-e98b3e628573',
      description: 'Maestro panettiere, Panificio Martinez'
    },
    {
      id: 7,
      name: 'Salvo Terruso',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/Salvo%20terruso.webp?alt=media&token=8d9c01c4-c491-4598-8bd1-7f4630bd7dd7',
      description: 'Chef e consulente gastronomico'
    },
    {
      id: 8,
      name: 'Fabio Potenzano',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/potenzano-1024x683.jpg?alt=media&token=3dc9e279-3754-4bdb-a1f6-e8afc4e6925c',
      description: 'Chef'
    },
    {
      id: 9,
      name: 'Francesco Arena',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/arena.jpg?alt=media&token=b9cef1ca-c055-4bc9-a00a-fc775b696a03',
      description: 'Maestro panettiere, Panificio Arena'
    },
    {
      id: 10,
      name: 'Gioacchino Gargano',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/gargano%20pizza.jpg?alt=media&token=5351c44e-7106-4490-8d46-a85a95e6af73',
      description: 'Maestro pizzaiolo, Pizzeria Saccarum'
    },
    {
      id: 11,
      name: 'Seby Sorbello',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/Seby-e1738258141375.png.webp?alt=media&token=15c6ce9a-e0d3-4ae0-8f21-342d89d1ee2c',
      description: 'Chef e consulente gastronomico'
    },
    {
      id: 12,
      name: 'Luciano Di Marco',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/Luciano-Di-Marco.jpeg?alt=media&token=f9daa731-7c56-49ed-a769-935a560e1f37',
      description: 'Chef e consulente gastronomico'
    },
    {
      id: 13,
      name: 'Daniele Vaccarella',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/Daniele-Vaccarella.jpg.webp?alt=media&token=56295e60-dcbb-458c-b992-26b65aa81e0f',
      description: 'Maestro pizzaiolo, Pizzeria Ammodo'
    },
    {
      id: 14,
      name: 'Giusi Battaglia',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/Giusi_Battaglia.jpeg?alt=media&token=fcf13cca-f03a-4b6a-8eff-454267f72594',
      description: 'Esperta di cucina siciliana e conduttrice TV'
    },
    {
      id: 15,
      name: 'Giovanni Cappello',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/Cappellop-800x800.jpeg?alt=media&token=9805d435-c3e4-45e0-ba60-adba22997804',
      description: 'Pasticcere, pasticceria Cappello'
    },
    {
      id: 16,
      name: 'Andy Luotto',
      image: 'https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/Andy%20Luotto.jpeg?alt=media&token=71fef0b8-0735-49de-beab-94e7925c34be',
      description: 'Chef, attore e personaggio televisivo'
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-blue-50 opacity-30"></div>
      <div className="absolute bottom-10 -left-32 w-64 h-64 rounded-full bg-blue-50 opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <AnimatedOnScroll animation="fade-in" delay={200} className="mb-3">
            <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full font-medium text-sm uppercase tracking-wider">
              Talent Partner
            </span>
          </AnimatedOnScroll>
          
          <AnimatedOnScroll animation="fade-in-down" delay={300}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              I Nostri <span className="text-blue-600">Talent Partner</span>
            </h2>
          </AnimatedOnScroll>
          
          <AnimatedOnScroll animation="fade-in" delay={400}>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-8 rounded-full"></div>
          </AnimatedOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={500}>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
              Creiamo momenti di intrattenimento innovativi e coinvolgenti grazie alla collaborazione con i migliori talenti del panorama enogastronomico siciliano. La nostra esperienza ci permette di proporre format unici nel loro genere.
            </p>
          </AnimateOnScroll>
        </div>

        {/* Partner Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <AnimatedOnScroll 
              key={partner.id} 
              animation="fade-in-up" 
              delay={index * 100 + 200}
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
              
              <div className="p-4 group-hover:bg-blue-50 transition-colors duration-300">
                <h3 className="text-gray-900 font-bold group-hover:text-blue-600 transition-colors duration-300">
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
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-10 rounded-full font-medium shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
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