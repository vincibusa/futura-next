'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const SponsorCarousel = ({ sponsorGroups }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isChanging, setIsChanging] = useState(false);

  const nextSponsorGroup = () => {
    setIsChanging(true);
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsorGroups.length);
    setTimeout(() => setIsChanging(false), 700); // Match animation duration
  };

  const prevSponsorGroup = () => {
    setIsChanging(true);
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + sponsorGroups.length) % sponsorGroups.length);
    setTimeout(() => setIsChanging(false), 700); // Match animation duration
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSponsorGroup();
    }, 4000);

    return () => clearInterval(interval);
  }, [sponsorGroups.length]);

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Navigation arrows */}
      <div className="flex justify-between absolute w-full top-1/2 -translate-y-1/2 px-2 md:px-0 z-20 pointer-events-none">
        <button
          onClick={prevSponsorGroup}
          className="pointer-events-auto bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg text-gray-700 hover:text-blue-600 focus:outline-none transition-all duration-300 border border-gray-100 transform -translate-x-1 md:-translate-x-6 hover:scale-110 active:scale-90"
          aria-label="Sponsor precedenti"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSponsorGroup}
          className="pointer-events-auto bg-white/90 backdrop-blur-sm rounded-full w-10 h-10 md:w-12 md:h-12 flex items-center justify-center shadow-lg text-gray-700 hover:text-blue-600 focus:outline-none transition-all duration-300 border border-gray-100 transform translate-x-1 md:translate-x-6 hover:scale-110 active:scale-90"
          aria-label="Sponsor successivi"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <div
        className="bg-white rounded-2xl shadow-xl overflow-hidden relative opacity-100 transform"
      >
        <div
          className={`p-8 transition-transform duration-700 ${isChanging ? (direction > 0 ? '-translate-x-full' : 'translate-x-full') : 'translate-x-0'}`}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-10">
            {sponsorGroups[currentIndex].map((sponsor) => (
              <div 
                key={sponsor.id}
                className="flex justify-center items-center p-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className="w-full h-24 flex justify-center items-center relative hover:scale-105 transition-transform duration-300"
                >
                  <Image
                    src={sponsor.image}
                    alt={`Sponsor ${sponsor.id}`}
                    className="object-contain"
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 20vw"
                    priority={sponsor.id <= 10}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        {sponsorGroups.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 mx-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300'
            }`}
            onClick={() => {
              setDirection(index > currentIndex ? 1 : -1);
              setCurrentIndex(index);
            }}
            aria-label={`Gruppo sponsor ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SponsorCarousel;
