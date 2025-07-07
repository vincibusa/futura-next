'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

import AnimatedOnScroll from '../animation/AnimatedOnScroll';

// Import delle immagini hero
import Hero1 from '../../assets/images/Hero1.jpeg';
import Hero2 from '../../assets/images/Hero2.jpeg';
import Hero3 from '../../assets/images/Hero3.jpeg';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const heroImages = [
    { src: Hero1, alt: "Hero Image 1" },
    { src: Hero2, alt: "Hero Image 2" },
    { src: Hero3, alt: "Hero Image 3" }
  ];

  // Auto-scroll del carosello ogni 5 secondi
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  // ✅ Precarica la prossima immagine per transizioni fluide
  useEffect(() => {
    const nextIndex = (currentSlide + 1) % heroImages.length;
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = heroImages[nextIndex].src.src || heroImages[nextIndex].src;
    document.head.appendChild(link);
    
    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
    };
  }, [currentSlide, heroImages]);

  return (
    <section id="hero" className="relative bg-gray-900 text-white h-screen flex items-center overflow-hidden">
      {/* Overlay con gradiente */}
      <div className="absolute inset-0 z-10 bg-black/40"></div>
      
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0} // ✅ Solo la prima immagine è priority
              quality={85} // ✅ Qualità ottimizzata (da 90 a 85)
              sizes="100vw" // ✅ Sizes ottimizzato per hero full-width
              placeholder="blur" // ✅ Placeholder blur per UX migliore
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
          </div>
        ))}
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