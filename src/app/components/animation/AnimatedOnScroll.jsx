'use client';

import { useRef, useEffect, useState } from 'react';

const AnimatedOnScroll = ({ 
  children, 
  animation = 'fade-in-up',
  threshold = 0.1, 
  delay = 0,
  duration,
  className = '',
  once = true
}) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(entry.target);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  const animationStyle = {
    animationDelay: delay ? `${delay}ms` : undefined,
    animationDuration: duration ? `${duration}ms` : undefined,
  };

  return (
    <div 
      ref={ref} 
      className={`${className} ${isVisible ? `animate-${animation}` : 'opacity-0'}`}
      style={animationStyle}
    >
      {children}
    </div>
  );
};

export default AnimatedOnScroll;
