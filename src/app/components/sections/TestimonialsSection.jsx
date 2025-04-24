'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Sponsor image imports
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

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSponsorGroup = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsorGroups.length);
  };

  const prevSponsorGroup = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sponsorGroups.length) % sponsorGroups.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSponsorGroup();
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Elementi decorativi */}
      <div className="absolute -top-24 right-0 w-64 h-64 rounded-full bg-red-50 opacity-30"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-red-50 opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
          >
            I Nostri <span className="text-red-600">Sponsor</span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-6 rounded-full"
          />
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Modified navigation arrows with better positioning and styling */}
          <div className="flex justify-between absolute w-full top-1/2 -translate-y-1/2 px-2 md:px-0 z-20 pointer-events-none">
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#FFFFFF" }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSponsorGroup}
              className="pointer-events-auto bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg text-gray-700 hover:text-red-600 focus:outline-none transition-all duration-300 border border-gray-100 transform -translate-x-1 md:-translate-x-6"
              aria-label="Sponsor precedenti"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#FFFFFF" }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSponsorGroup}
              className="pointer-events-auto bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg text-gray-700 hover:text-red-600 focus:outline-none transition-all duration-300 border border-gray-100 transform translate-x-1 md:translate-x-6"
              aria-label="Sponsor successivi"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden relative"
          >
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ 
                  type: 'spring', 
                  stiffness: 300,
                  damping: 30,
                }}
                className="p-8"
              >
                <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10">
                  {sponsorGroups[currentIndex].map((sponsor) => (
                    <div 
                      key={sponsor.id}
                      className="flex justify-center items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300"
                    >
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-full h-24 flex justify-center items-center relative"
                      >
                        <Image
                          src={sponsor.image}
                          alt={`Sponsor ${sponsor.id}`}
                          className="object-contain"
                          fill
                          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 20vw"
                          priority={sponsor.id <= 10}
                        />
                      </motion.div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <div className="flex justify-center mt-8">
            {sponsorGroups.map((_, index) => (
              <motion.button
                key={index}
                initial={{ scale: 1 }}
                animate={{ 
                  scale: index === currentIndex ? 1.3 : 1,
                  backgroundColor: index === currentIndex ? '#DC2626' : '#D1D5DB'
                }}
                transition={{ duration: 0.3 }}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className="w-2.5 h-2.5 mx-1.5 rounded-full"
                aria-label={`Gruppo sponsor ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;