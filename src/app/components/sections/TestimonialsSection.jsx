import AnimateOnScroll from '../animation/AnimateOnScroll';
import Image from 'next/image';

const TestimonialsSection = () => {
  const sponsors = [
    { id: 1, name: "La Piana d'Oro", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/1%20la%20piana%20d'oro.png?alt=media&token=f8d7dcd1-bad3-438e-bab7-4906a39d9dde" },
    { id: 2, name: "Regione Sicilia", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/3%20regione-sicilia-800x579.png?alt=media&token=ca21e193-e601-4b92-ba02-41bdd948d407" },
    { id: 3, name: "Sicilia Enogastronomica", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/4%20siciliaenogastronomica-02.png?alt=media&token=af64b755-7758-40f8-af04-47545be19fb6" },
    { id: 4, name: "Camera di Commercio", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/6%20camera%20di%20commercio-02.png?alt=media&token=7cdee289-07c8-40a4-9221-67453f070c5a" },
    { id: 5, name: "Decò", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/DECO-02.png?alt=media&token=61a10b13-d473-4031-8c09-63a91516e74b"},
    { id: 6, name: "Moretti Forni", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/MORETTI%20FORNI.png?alt=media&token=241c5092-c056-40cb-874d-9592790d27f4" },
    { id: 7, name: "Riggi", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/RIGGI.png?alt=media&token=2dbc8999-c2c9-4e8d-bc2b-4ed00ee3811b" },
    { id: 8, name: "Sagrim Electrolux", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/SAGRIM%20ELECTROLUX-02.png?alt=media&token=3190592c-e20f-4aa5-b7ef-c26d8c6b9442" },
    { id: 9, name: "Unione Europea", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/UNIONE%20EUROPEA-02.png?alt=media&token=70d5b417-c3ad-4533-9888-2eaa013d6d10"},
    { id: 10, name: "Acqua Panna", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/acqua%20panna-02.png?alt=media&token=11599bf0-7c4c-43eb-9939-b0028abe2d69" },
    { id: 11, name: "All Food Sicily", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/all%20food-02.png?alt=media&token=7c85fa51-20c7-45d3-95c9-11f9263bba07" },
    { id: 12, name: "Caffè Barbera", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/barbera%20logo.png?alt=media&token=b21be495-55fa-42ec-95e9-389e704f4097" },
    { id: 13, name: "Bonsignore", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/bonsignore-02.png?alt=media&token=a1648675-e5f0-47b2-ab47-0a43cb303894" },
    { id: 14, name: "Fermento Pizza", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/fermento-02.png?alt=media&token=be2e1fe3-9c23-43ed-b7af-530ac2d673cd" },
    { id: 15, name: "Giornale di Sicilia", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/giornale%20di%20sicilia-02.png?alt=media&token=3ca91d2b-b664-4b85-92df-3fd4534e3b87" },
    { id: 16, name: "Granamaro", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/granamaro-02.png?alt=media&token=b41759fe-5f33-4599-abf5-a1fe4243ee26" },
    { id: 17, name: "La Siciliana", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/la%20siciliana-02.png?alt=media&token=fd167486-2ee5-4b48-b117-a022a2845666" },
    { id: 18, name: "Mariano Durante", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/mariano%20durante-02.png?alt=media&token=76d4ed7f-d99d-4551-a570-f60506b3a35c" },
    { id: 19, name: "Mediacom", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/mediacom-02.png?alt=media&token=c18a7458-974f-4320-93c9-fcba272a3f48" },
    { id: 20, name: "Sprint", image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/sprint-02.png?alt=media&token=d3afb69a-c165-4840-8e54-40c5dd20e945" },
  ];

  const sponsorSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Futura Company",
    "url": "https://futuracompany.it",
    "sponsor": sponsors.map(sponsor => ({
      "@type": "Organization",
      "name": sponsor.name,
      "logo": sponsor.image
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sponsorSchema) }}
      />
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-200" />
        </div>
        <div className="relative flex justify-center">
          <span className="bg-white px-3 text-blue-600">
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 11.072l-3.2-6.4a1 1 0 00-1.78-.22l-1.4 4.2-4.2-1.4a1 1 0 00-1.22.54l-3.2 6.4a1 1 0 001.22 1.22l4.2-1.4 1.4 4.2a1 1 0 001.78.22l3.2-6.4a1 1 0 00-.22-1.22z" />
            </svg>
          </span>
        </div>
      </div>
      <section id="testimonials" className="py-20 bg-white relative overflow-hidden">
        {/* Elementi decorativi */}
        <div className="absolute -top-24 right-0 w-64 h-64 rounded-full bg-red-50 opacity-30"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-red-50 opacity-40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-14">
            <AnimateOnScroll animation="fade-up" delay={500}>
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12 max-w-4xl mx-auto">
                Collaboriamo con i <strong className="font-bold text-blue-600">migliori brand e istituzioni pubblico private</strong>.
              </h2>
            </AnimateOnScroll>
          </div>

          {/* Griglia degli sponsor */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
            {sponsors.map((sponsor, index) => (
              <AnimateOnScroll
                key={sponsor.id}
                animation="fade-up"
                delay={index * 50 + 200}
                className="group"
              >
                <div className="overflow-hidden transform transition-all duration-300 hover:-translate-y-2 p-6 h-32 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={sponsor.image}
                      alt={`Logo di ${sponsor.name}, nostro partner.`}
                      fill
                      className="object-contain transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw" />
                  </div>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default TestimonialsSection;