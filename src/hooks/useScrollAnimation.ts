'use client';

import { useState, useEffect } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let lastScrollY = 0;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      
      // Update scroll position
      setScrollY(currentScrollY);
      
      // Update scroll direction
      if (currentScrollY > lastScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection('up');
      }
      
      // Update scroll progress (0 to 1)
      const progress = Math.min(currentScrollY / documentHeight, 1);
      setScrollProgress(progress);
      
      lastScrollY = currentScrollY;
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    // Get initial scroll position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, []);

  return {
    scrollY,
    scrollDirection,
    scrollProgress,
  };
};

export const useParallax = (speed: number = 0.5) => {
  const { scrollY } = useScrollAnimation();
  
  return {
    transform: `translateY(${scrollY * speed}px)`,
  };
};

export const useScrollRotation = (speed: number = 0.1, initialRotation: number = 0) => {
  const { scrollY } = useScrollAnimation();
  
  return {
    transform: `rotate(${initialRotation + scrollY * speed}deg)`,
  };
};

export const useScrollScale = (speed: number = 0.001, baseScale: number = 1) => {
  const { scrollY } = useScrollAnimation();
  
  const scale = Math.max(0.1, baseScale + scrollY * speed);
  
  return {
    transform: `scale(${scale})`,
  };
};

export const useScrollOpacity = (speed: number = 0.001, baseOpacity: number = 0.5) => {
  const { scrollY } = useScrollAnimation();
  
  const opacity = Math.max(0.1, Math.min(1, baseOpacity + scrollY * speed));
  
  return {
    opacity,
  };
};

export const useScrollWave = (frequency: number = 1, amplitude: number = 20) => {
  const { scrollProgress } = useScrollAnimation();
  
  const waveOffset = Math.sin(scrollProgress * Math.PI * 2 * frequency) * amplitude;
  
  return {
    transform: `translateX(${waveOffset}px)`,
  };
};

export const useScrollPulse = (speed: number = 0.002, baseScale: number = 1, pulseAmount: number = 0.1) => {
  const { scrollY } = useScrollAnimation();
  
  const pulse = Math.sin(scrollY * speed) * pulseAmount;
  const scale = baseScale + pulse;
  
  return {
    transform: `scale(${scale})`,
  };
};

export const useScrollFloat = (
  parallaxSpeed: number = 0.3,
  waveFrequency: number = 1,
  waveAmplitude: number = 10,
  rotationSpeed: number = 0.02
) => {
  const { scrollY, scrollProgress } = useScrollAnimation();
  
  const translateY = scrollY * parallaxSpeed;
  const translateX = Math.sin(scrollProgress * Math.PI * 2 * waveFrequency) * waveAmplitude;
  const rotation = scrollY * rotationSpeed;
  
  return {
    transform: `translateY(${translateY}px) translateX(${translateX}px) rotate(${rotation}deg)`,
  };
};
