import SponsorCarousel from '../carousels/SponsorCarousel';
import AnimatedOnScroll from '../animation/AnimatedOnScroll';
import AnimateOnScroll from '../animation/AnimateOnScroll';
import sponsor1 from '../../assets/sponsor/1 la piana d\'oro.png';
import sponsor3 from '../../assets/sponsor/3 regione-sicilia-800x579.png';
import sponsor4 from '../../assets/sponsor/4 siciliaenogastronomica-02.png';
import sponsor6 from '../../assets/sponsor/6 camera di commercio-02.png';
import sponsor9 from '../../assets/sponsor/DECO-02.png';
import sponsor10 from '../../assets/sponsor/FEAMPA.png';
import sponsor12 from '../../assets/sponsor/MORETTI FORNI.png';
import sponsor13 from '../../assets/sponsor/RIGGI.png';
import sponsor14 from '../../assets/sponsor/SAGRIM ELECTROLUX-02.png';
import sponsor15 from '../../assets/sponsor/UNIONE EUROPEA-02.png';
import sponsor16 from '../../assets/sponsor/acqua panna-02.png';
import sponsor18 from '../../assets/sponsor/all food-02.png';
import sponsor20 from '../../assets/sponsor/barbera logo.png';
import sponsor21 from '../../assets/sponsor/bonsignore-02.png';
import sponsor25 from '../../assets/sponsor/fermento-02.png';
import sponsor28 from '../../assets/sponsor/giornale di sicilia-02.png';
import sponsor29 from '../../assets/sponsor/granamaro-02.png';
import sponsor30 from '../../assets/sponsor/la siciliana-02.png';
import sponsor31 from '../../assets/sponsor/mariano durante-02.png';
import sponsor32 from '../../assets/sponsor/mediacom-02.png';
import sponsor34 from '../../assets/sponsor/sprint-02.png';

const TestimonialsSection = () => {
  const sponsors = [
    { id: 1, image: sponsor1 },
    { id: 2, image: sponsor3 },
    { id: 3, image: sponsor4 },
    { id: 4, image: sponsor6 },
    { id: 5, image: sponsor9 },
    { id: 6, image: sponsor10 },
    { id: 7, image: sponsor12 },
    { id: 8, image: sponsor13 },
    { id: 9, image: sponsor14 },
    { id: 10, image: sponsor15 },
    { id: 11, image: sponsor16 },
    { id: 12, image: sponsor18 },
    { id: 13, image: sponsor20 },
    { id: 14, image: sponsor21 },
    { id: 15, image: sponsor25 },
    { id: 16, image: sponsor28 },
    { id: 17, image: sponsor29 },
    { id: 18, image: sponsor30 },
    { id: 19, image: sponsor31 },
    { id: 20, image: sponsor32 },
    { id: 21, image: sponsor34 },
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
     


        <AnimatedOnScroll animation="fade-in-down">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              I Nostri <span className="text-red-600">Sponsor</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-6 rounded-full" />
          </div>
        </AnimatedOnScroll>

        <AnimatedOnScroll animation="fade-in-up" delay={300}>
          <SponsorCarousel sponsorGroups={sponsorGroups} />
        </AnimatedOnScroll>
      </div>
    </section>
  );
};

export default TestimonialsSection;