import SponsorCarousel from '../carousels/SponsorCarousel';
import AnimatedOnScroll from '../animation/AnimatedOnScroll';
import AnimateOnScroll from '../animation/AnimateOnScroll';

const TestimonialsSection = () => {
  const sponsors = [
    { id: 1, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/1%20la%20piana%20d'oro.png?alt=media&token=f8d7dcd1-bad3-438e-bab7-4906a39d9dde" },
    { id: 2, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/3%20regione-sicilia-800x579.png?alt=media&token=ca21e193-e601-4b92-ba02-41bdd948d407" },
    { id: 3, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/4%20siciliaenogastronomica-02.png?alt=media&token=af64b755-7758-40f8-af04-47545be19fb6" },
    { id: 4, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/6%20camera%20di%20commercio-02.png?alt=media&token=7cdee289-07c8-40a4-9221-67453f070c5a" },
    { id: 5, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/DECO-02.png?alt=media&token=61a10b13-d473-4031-8c09-63a91516e74b"},
    { id: 6, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/MORETTI%20FORNI.png?alt=media&token=241c5092-c056-40cb-874d-9592790d27f4" },
    { id: 7, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/RIGGI.png?alt=media&token=2dbc8999-c2c9-4e8d-bc2b-4ed00ee3811b" },
    { id: 8, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/SAGRIM%20ELECTROLUX-02.png?alt=media&token=3190592c-e20f-4aa5-b7ef-c26d8c6b9442" },
    { id: 9, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/UNIONE%20EUROPEA-02.png?alt=media&token=70d5b417-c3ad-4533-9888-2eaa013d6d10"},
    { id: 10, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/acqua%20panna-02.png?alt=media&token=11599bf0-7c4c-43eb-9939-b0028abe2d69" },
    { id: 11, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/all%20food-02.png?alt=media&token=7c85fa51-20c7-45d3-95c9-11f9263bba07" },
    { id: 12, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/barbera%20logo.png?alt=media&token=b21be495-55fa-42ec-95e9-389e704f4097" },
    { id: 13, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/bonsignore-02.png?alt=media&token=a1648675-e5f0-47b2-ab47-0a43cb303894" },
    { id: 14, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/fermento-02.png?alt=media&token=be2e1fe3-9c23-43ed-b7af-530ac2d673cd" },
    { id: 15, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/giornale%20di%20sicilia-02.png?alt=media&token=3ca91d2b-b664-4b85-92df-3fd4534e3b87" },
    { id: 16, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/granamaro-02.png?alt=media&token=b41759fe-5f33-4599-abf5-a1fe4243ee26" },
    { id: 17, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/la%20siciliana-02.png?alt=media&token=fd167486-2ee5-4b48-b117-a022a2845666" },
    { id: 18, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/mariano%20durante-02.png?alt=media&token=76d4ed7f-d99d-4551-a570-f60506b3a35c" },
    { id: 19, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/mediacom-02.png?alt=media&token=c18a7458-974f-4320-93c9-fcba272a3f48" },
    { id: 20, image: "https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/sprint-02.png?alt=media&token=d3afb69a-c165-4840-8e54-40c5dd20e945" },
  ];

  // Suddividi gli sponsor in gruppi di 5 per mostrarne diversi contemporaneamente
  const sponsorGroups = [];
  for (let i = 0; i < sponsors.length; i += 5) {
    sponsorGroups.push(sponsors.slice(i, i + 5));
  }

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Elementi decorativi */}
      <div className="absolute -top-24 right-0 w-64 h-64 rounded-full bg-red-50 opacity-30"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-red-50 opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <AnimatedOnScroll animation="fade-in" delay={200} className="mb-3">
            <span className="px-4 py-1 bg-red-100 text-red-700 rounded-full font-medium text-sm uppercase tracking-wider">
              I Nostri Partner
            </span>
          </AnimatedOnScroll>
          
          <AnimatedOnScroll animation="fade-in-down" delay={300}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              I Nostri <span className="text-red-600">Sponsor</span>
            </h2>
          </AnimatedOnScroll>
          
          <AnimatedOnScroll animation="fade-in" delay={400}>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-6 rounded-full" />
          </AnimatedOnScroll>
          
          <AnimateOnScroll animation="fade-up" delay={500}>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-10">
              Collaboriamo con i migliori brand e istituzioni per creare esperienze di valore e promuovere l'eccellenza enogastronomica siciliana.
            </p>
          </AnimateOnScroll>
        </div>

        <AnimateOnScroll animation="fade-up" delay={600}>
          <SponsorCarousel sponsorGroups={sponsorGroups} />
        </AnimateOnScroll>
      </div>
    </section>
  );
};

export default TestimonialsSection;