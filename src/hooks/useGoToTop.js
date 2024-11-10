// useGoToTop.js
import { useEffect, useState } from 'react';

export function useGoToTop() {
  const [showGoTop, setShowGoTop] = useState(false);

  // Function to scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const pxShow = 300; // Show button after scrolling 300px
      setShowGoTop(window.scrollY >= pxShow);
    };
  
    window.addEventListener('scroll', handleScroll);
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return { showGoTop, scrollToTop };
}
