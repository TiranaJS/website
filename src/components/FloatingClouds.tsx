'use client';

import React from 'react';
import { useParallax, useScrollRotation, useScrollOpacity } from '@/hooks/useScrollAnimation';

interface FloatingLogoProps {
  size: 'tiny' | 'small' | 'medium' | 'large' | 'xl' | 'xxl';
  position: string;
  animation: string;
  delay?: string;
  opacity?: number;
  id: string;
  parallaxSpeed?: number;
  rotationSpeed?: number;
  opacityVariation?: number;
}

const TiranaJSLogo: React.FC<{ className?: string; id: string }> = ({ className, id }) => {
  const uniqueId = `tiranajs-${id}`;
  
  return (
    <svg 
      width="100%" 
      height="100%" 
      viewBox="0 0 5129 6316" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g filter={`url(#filter0_i_${uniqueId})`}>
        <g clipPath={`url(#paint0_diamond_${uniqueId}_clip_path)`} data-figma-skip-parse="true">
          <g transform="matrix(-4.57455 21.7114 -13.0269 -2.74473 3393.03 3545.91)">
            <rect x="0" y="0" width="192.447" height="311.378" fill={`url(#paint0_diamond_${uniqueId})`} opacity="1" shapeRendering="crispEdges"/>
            <rect x="0" y="0" width="192.447" height="311.378" transform="scale(1 -1)" fill={`url(#paint0_diamond_${uniqueId})`} opacity="1" shapeRendering="crispEdges"/>
            <rect x="0" y="0" width="192.447" height="311.378" transform="scale(-1 1)" fill={`url(#paint0_diamond_${uniqueId})`} opacity="1" shapeRendering="crispEdges"/>
            <rect x="0" y="0" width="192.447" height="311.378" transform="scale(-1)" fill={`url(#paint0_diamond_${uniqueId})`} opacity="1" shapeRendering="crispEdges"/>
          </g>
        </g>
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M2802.83 6227.11C2385.62 6526.91 1745.19 6005.52 1558.85 5574.32C1337.8 5062.79 1355.41 4716.7 1372.22 4386.23C1389.35 4049.32 1405.66 3728.63 1167.45 3265.4C994.197 2928.52 731.153 2705.84 498.645 2509C171.395 2231.97 -95.3627 2006.14 33.8876 1585.19C162.545 1166.16 561.694 1266.05 1027.46 1382.6C1659.26 1540.7 2413.63 1729.48 2781.78 695.475C3556.95 -1481.69 6587.01 2149.72 4274.21 2169.25C3253.11 2177.87 2472.72 3372.67 2747.89 4533.66C2772.63 4638.04 2806.95 4753.67 2842.84 4874.6C2991.29 5374.73 3166.68 5965.65 2802.83 6227.11Z" 
          fill={`url(#paint0_diamond_${uniqueId})`}
        />
      </g>
      <defs>
        <filter id={`filter0_i_${uniqueId}`} x="-39.3848" y="0.430664" width="5168.11" height="6315.38" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="-40"/>
          <feGaussianBlur stdDeviation="125"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.185559 0 0 0 0 0.156389 0 0 0 0 0.326923 0 0 0 0.75 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_1_131"/>
        </filter>
        <clipPath id={`paint0_diamond_${uniqueId}_clip_path`}>
          <path 
            fillRule="evenodd" 
            clipRule="evenodd" 
            d="M2802.83 6227.11C2385.62 6526.91 1745.19 6005.52 1558.85 5574.32C1337.8 5062.79 1355.41 4716.7 1372.22 4386.23C1389.35 4049.32 1405.66 3728.63 1167.45 3265.4C994.197 2928.52 731.153 2705.84 498.645 2509C171.395 2231.97 -95.3627 2006.14 33.8876 1585.19C162.545 1166.16 561.694 1266.05 1027.46 1382.6C1659.26 1540.7 2413.63 1729.48 2781.78 695.475C3556.95 -1481.69 6587.01 2149.72 4274.21 2169.25C3253.11 2177.87 2472.72 3372.67 2747.89 4533.66C2772.63 4638.04 2806.95 4753.67 2842.84 4874.6C2991.29 5374.73 3166.68 5965.65 2802.83 6227.11Z"
          />
        </clipPath>
        <linearGradient id={`paint0_diamond_${uniqueId}`} x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
          <stop stopColor="#94A4F5"/>
          <stop offset="0.332622" stopColor="#EDB3F9"/>
        </linearGradient>
      </defs>
    </svg>
  );
};

const FloatingLogo: React.FC<FloatingLogoProps> = ({ 
  size, 
  position, 
  animation, 
  delay = '0s', 
  opacity = 0.4,
  id,
  parallaxSpeed = 0.2,
  rotationSpeed = 0.05,
  opacityVariation = 0.001
}) => {
  const sizeClasses = {
    tiny: 'w-8 h-10',
    small: 'w-16 h-20',
    medium: 'w-24 h-30',
    large: 'w-32 h-40',
    xl: 'w-48 h-60',
    xxl: 'w-64 h-80',
  };

  // Get scroll-based animations
  const parallaxStyle = useParallax(parallaxSpeed);
  const rotationStyle = useScrollRotation(rotationSpeed);
  const opacityStyle = useScrollOpacity(opacityVariation, opacity);

  // Combine transforms
  const combinedStyle = {
    animationDelay: delay,
    filter: 'drop-shadow(0 4px 6px rgba(139, 92, 246, 0.1))',
    transform: `${parallaxStyle.transform} ${rotationStyle.transform}`,
    opacity: opacityStyle.opacity,
    transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
  };

  return (
    <div
      className={`absolute pointer-events-none ${sizeClasses[size]} ${position} ${animation}`}
      style={combinedStyle}
    >
      <TiranaJSLogo className="w-full h-full" id={id} />
    </div>
  );
};

const FloatingClouds: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large background logos for depth - slowest parallax */}
      <FloatingLogo
        size="xxl"
        position="top-10 -left-20"
        animation="animate-float-1"
        delay="0s"
        opacity={0.15}
        id="bg-1"
        parallaxSpeed={0.1}
        rotationSpeed={0.02}
        opacityVariation={0.0005}
      />
      
      <FloatingLogo
        size="xl"
        position="bottom-20 -right-16"
        animation="animate-float-2"
        delay="2s"
        opacity={0.1}
        id="bg-2"
        parallaxSpeed={0.15}
        rotationSpeed={-0.03}
        opacityVariation={0.0008}
      />
      
      {/* Medium floating logos - medium parallax */}
      <FloatingLogo
        size="large"
        position="top-1/4 right-1/4"
        animation="animate-float-3"
        delay="1s"
        opacity={0.25}
        id="med-1"
        parallaxSpeed={0.25}
        rotationSpeed={0.04}
        opacityVariation={0.001}
      />
      
      <FloatingLogo
        size="medium"
        position="top-1/2 left-1/3"
        animation="animate-float-1"
        delay="3s"
        opacity={0.3}
        id="med-2"
        parallaxSpeed={0.3}
        rotationSpeed={-0.05}
        opacityVariation={0.0012}
      />
      
      <FloatingLogo
        size="medium"
        position="bottom-1/3 right-1/3"
        animation="animate-float-2"
        delay="4s"
        opacity={0.2}
        id="med-3"
        parallaxSpeed={0.35}
        rotationSpeed={0.06}
        opacityVariation={0.0015}
      />
      
      {/* Small accent logos - fastest parallax */}
      <FloatingLogo
        size="small"
        position="top-3/4 left-1/4"
        animation="animate-float-3"
        delay="5s"
        opacity={0.35}
        id="small-1"
        parallaxSpeed={0.4}
        rotationSpeed={-0.07}
        opacityVariation={0.002}
      />
      
      <FloatingLogo
        size="tiny"
        position="top-20 left-1/2"
        animation="animate-float-1"
        delay="6s"
        opacity={0.4}
        id="tiny-1"
        parallaxSpeed={0.5}
        rotationSpeed={0.08}
        opacityVariation={0.0025}
      />
      
      <FloatingLogo
        size="small"
        position="top-1/3 left-10"
        animation="animate-float-2"
        delay="7s"
        opacity={0.25}
        id="small-2"
        parallaxSpeed={0.45}
        rotationSpeed={-0.06}
        opacityVariation={0.0018}
      />
      
      {/* Additional scattered logos */}
      <FloatingLogo
        size="medium"
        position="bottom-1/3 left-2/3"
        animation="animate-float-3"
        delay="8s"
        opacity={0.2}
        id="med-4"
        parallaxSpeed={0.28}
        rotationSpeed={0.05}
        opacityVariation={0.0013}
      />
      
      <FloatingLogo
        size="tiny"
        position="top-2/3 right-1/3"
        animation="animate-float-1"
        delay="9s"
        opacity={0.3}
        id="tiny-2"
        parallaxSpeed={0.55}
        rotationSpeed={-0.09}
        opacityVariation={0.003}
      />
    </div>
  );
};

export default FloatingClouds;