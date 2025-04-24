'use client';

import { useEffect, useRef, useState } from 'react';

const AnimateOnScroll = ({ 
  children, 
  className = '',
  animation = 'fade-up', // fade-up, fade-down, fade-left, fade-right
  duration = 1000,
  delay = 0,
  threshold = 0.2,
  once = true
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          }, delay);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [once, threshold, delay]);

  // Define animation classes based on the animation type
  let animationClass = '';
  
  if (animation === 'fade-up') {
    animationClass = isVisible 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-10';
  } else if (animation === 'fade-down') {
    animationClass = isVisible 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 -translate-y-10';
  } else if (animation === 'fade-left') {
    animationClass = isVisible 
      ? 'opacity-100 translate-x-0' 
      : 'opacity-0 -translate-x-20';
  } else if (animation === 'fade-right') {
    animationClass = isVisible 
      ? 'opacity-100 translate-x-0' 
      : 'opacity-0 translate-x-20';
  } else if (animation === 'scale') {
    animationClass = isVisible 
      ? 'opacity-100 scale-100' 
      : 'opacity-0 scale-0';
  }

  return (
    <div 
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${className} ${animationClass}`}
    >
      {children}
    </div>
  );
};

export default AnimateOnScroll;
