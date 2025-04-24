'use client';

import { useEffect, useState } from 'react';
import ScrollButton from '../buttons/ScrollButton';
import AnimateOnScroll from '../animation/AnimateOnScroll';

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
      
      {/* Content with animations */}
      <div className="container mx-auto px-4 z-20">
        <div className="max-w-3xl">
          <AnimateOnScroll delay={200}>
            <h1 
              className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Trasformiamo le idee in risultati tangibili
            </h1>
          </AnimateOnScroll>
          
          <AnimateOnScroll delay={400}>
            <p 
              className={`text-xl md:text-2xl mb-10 text-gray-200 transition-all duration-1000 ease-out ${
                isLoaded ? 'opacity-100 translate-y-0 delay-300' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: isLoaded ? '300ms' : '0ms' }}
            >
              Sviluppiamo i tuoi progetti con creatività e innovazione per far crescere il tuo business.
            </p>
          </AnimateOnScroll>
          
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out ${
              isLoaded ? 'opacity-100 translate-y-0 delay-500' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: isLoaded ? '500ms' : '0ms' }}
          >
            <AnimateOnScroll delay={700}>
              <ScrollButton 
                targetId="servizi" 
                className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Scopri i nostri servizi
              </ScrollButton>
            </AnimateOnScroll>
            
            <AnimateOnScroll delay={900}>
              <ScrollButton 
                targetId="contatti" 
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white py-3 px-8 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Contattaci
              </ScrollButton>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <AnimateOnScroll delay={1100}>
        <ScrollButton 
          targetId="chi-siamo" 
          className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer transition-opacity transition-all duration-1000 ease-out ${
            isLoaded ? 'opacity-100 delay-700' : 'opacity-0'
          }`}
          style={{ transitionDelay: isLoaded ? '700ms' : '0ms' }}
        >
          <svg className="w-6 h-6 text-white animate-float" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </ScrollButton>
      </AnimateOnScroll>
    </section>
  );
};

export default HeroSection;