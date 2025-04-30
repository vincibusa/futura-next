import Link from 'next/link';
import AnimateOnScroll from '../animation/AnimateOnScroll';
import AnimatedOnScroll from '../animation/AnimatedOnScroll';

const HeroSection = () => {
  const videoUrl="https://firebasestorage.googleapis.com/v0/b/catanzaroepartners-13968.firebasestorage.app/o/videoBackopt.mp4?alt=media&token=99c1193d-ea1b-4974-85ce-fbdcc76ffaa3"

  return (
    <section id="hero" className="relative bg-gray-900 text-white h-screen flex items-center">
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 z-10"></div>
      
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          style={{ filter: 'brightness(0.6)' }}
        >
          <source src={videoUrl} type="video/mp4" />
          Il tuo browser non supporta il tag video.
        </video>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-3xl">
          <AnimatedOnScroll animation="fade-in-up" delay={200}>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Trasformiamo le idee in risultati tangibili
            </h1>
          </AnimatedOnScroll>
          
          <AnimatedOnScroll animation="fade-in-up" delay={400}>
            <p className="text-xl md:text-2xl mb-10 text-gray-200">
              Sviluppiamo i tuoi progetti con creatività e innovazione per far crescere il tuo business.
            </p>
          </AnimatedOnScroll>
          
          <AnimatedOnScroll animation="fade-in-up" delay={600} className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="#servizi" 
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 active:scale-95 text-center"
            >
              Scopri i nostri servizi
            </Link>
            
            <Link 
              href="#contatti" 
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white py-3 px-8 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 active:scale-95 text-center"
            >
              Contattaci
            </Link>
          </AnimatedOnScroll>
        </div>
      </div>
      

    </section>
  );
};

export default HeroSection;