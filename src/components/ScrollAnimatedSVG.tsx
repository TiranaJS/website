'use client';

import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface ScrollAnimatedSVGProps {
  children: React.ReactNode;
  className?: string;
  parallaxSpeed?: number;
  rotationSpeed?: number;
  scaleSpeed?: number;
  opacityRange?: [number, number];
  horizontalDrift?: number;
  verticalOffset?: number;
}

const ScrollAnimatedSVG: React.FC<ScrollAnimatedSVGProps> = ({
  children,
  className = '',
  parallaxSpeed = 0.3,
  rotationSpeed = 0.05,
  scaleSpeed = 0.0005,
  opacityRange = [0.2, 0.8],
  horizontalDrift = 0.1,
  verticalOffset = 0
}) => {
  const { scrollY, scrollProgress } = useScrollAnimation();

  // Calculate various scroll-based transformations
  const translateY = scrollY * parallaxSpeed + verticalOffset;
  const translateX = Math.sin(scrollProgress * Math.PI * 2) * horizontalDrift * 50;
  const rotation = scrollY * rotationSpeed;
  const scale = 1 + (scrollY * scaleSpeed);
  
  // Calculate opacity based on scroll progress
  const [minOpacity, maxOpacity] = opacityRange;
  const opacity = minOpacity + (maxOpacity - minOpacity) * 
    Math.abs(Math.sin(scrollProgress * Math.PI));

  const transformStyle = {
    transform: `translateY(${translateY}px) translateX(${translateX}px) rotate(${rotation}deg) scale(${scale})`,
    opacity,
    transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
  };

  return (
    <div className={`scroll-animated-svg ${className}`} style={transformStyle}>
      {children}
    </div>
  );
};

export default ScrollAnimatedSVG;
