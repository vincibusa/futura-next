'use client';
import { useCallback } from 'react';

const ScrollButton = ({ targetId, children, className }) => {
  const handleClick = useCallback(() => {
    const section = document.getElementById(targetId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  }, [targetId]);

  return (
    <button 
      onClick={handleClick}
      className={className}
    >
      {children}
    </button>
  );
};

export default ScrollButton;
