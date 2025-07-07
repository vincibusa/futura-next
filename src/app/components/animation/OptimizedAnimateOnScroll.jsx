'use client';

import { useEffect, useRef, useState, memo } from 'react';

const OptimizedAnimateOnScroll = memo(({ 
  children, 
  animation = 'fade-in-up',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px 0px -50px 0px',
  className = '' 
}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element || hasAnimated) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            setIsVisible(true);
            setHasAnimated(true);
          }, delay);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [delay, threshold, rootMargin, hasAnimated]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (animation) {
        case 'fade-in-up':
          return `${baseClasses} opacity-0 translate-y-8`;
        case 'fade-in-down':
          return `${baseClasses} opacity-0 -translate-y-8`;
        case 'fade-in-left':
          return `${baseClasses} opacity-0 translate-x-8`;
        case 'fade-in-right':
          return `${baseClasses} opacity-0 -translate-x-8`;
        case 'fade-in':
          return `${baseClasses} opacity-0`;
        case 'scale-in':
          return `${baseClasses} opacity-0 scale-95`;
        default:
          return `${baseClasses} opacity-0`;
      }
    }

    return `${baseClasses} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div 
      ref={elementRef}
      className={`${getAnimationClasses()} ${className}`}
    >
      {children}
    </div>
  );
});

OptimizedAnimateOnScroll.displayName = 'OptimizedAnimateOnScroll';

export default OptimizedAnimateOnScroll; 