'use client';
import { motion } from 'framer-motion';

const HeroSection = () => {
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
          <source src='/videos/videoBackopt.mp4' type="video/mp4" />
          Il tuo browser non supporta il tag video.
        </video>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Trasformiamo le idee in risultati tangibili
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-10 text-gray-200"
          >
           Sviluppiamo i tuoi progetti con creatività e innovazione per far crescere il tuo business.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full font-medium text-lg transition-colors duration-300"
              onClick={() => {
                const servicesSection = document.getElementById('servizi');
                if (servicesSection) {
                  window.scrollTo({
                    top: servicesSection.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Scopri i nostri servizi
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white hover:bg-white/10 text-white py-3 px-8 rounded-full font-medium text-lg transition-colors duration-300"
              onClick={() => {
                const contactSection = document.getElementById('contatti');
                if (contactSection) {
                  window.scrollTo({
                    top: contactSection.offsetTop - 80,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              Contattaci
            </motion.button>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, delay: 1, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        onClick={() => {
          const aboutSection = document.getElementById('chi-siamo');
          if (aboutSection) {
            window.scrollTo({
              top: aboutSection.offsetTop - 80,
              behavior: 'smooth'
            });
          }
        }}
      >
      </motion.div>
    </section>
  );
};

export default HeroSection;