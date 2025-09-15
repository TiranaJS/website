'use client';

import React from 'react';
import { useScrollFloat, useScrollWave, useScrollPulse } from '@/hooks/useScrollAnimation';
import ScrollAnimatedSVG from './ScrollAnimatedSVG';

interface EnhancedFloatingLogoProps {
  size: 'tiny' | 'small' | 'medium' | 'large' | 'xl' | 'xxl';
  position: string;
  animation: string;
  delay?: string;
  opacity?: number;
  id: string;
  animationType?: 'float' | 'wave' | 'pulse' | 'drift';
  intensity?: number;
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

const EnhancedFloatingLogo: React.FC<EnhancedFloatingLogoProps> = ({ 
  size, 
  position, 
  animation, 
  delay = '0s', 
  opacity = 0.4,
  id,
  animationType = 'float',
  intensity = 1
}) => {
  const sizeClasses = {
    tiny: 'w-8 h-10',
    small: 'w-16 h-20',
    medium: 'w-24 h-30',
    large: 'w-32 h-40',
    xl: 'w-48 h-60',
    xxl: 'w-64 h-80',
  };

  // Get different scroll-based animations based on type
  let animationStyle = {};
  
  switch (animationType) {
    case 'float':
      animationStyle = useScrollFloat(0.3 * intensity, 1, 15 * intensity, 0.02 * intensity);
      break;
    case 'wave':
      animationStyle = useScrollWave(1 * intensity, 25 * intensity);
      break;
    case 'pulse':
      animationStyle = useScrollPulse(0.003 * intensity, 1, 0.1 * intensity);
      break;
    case 'drift':
      animationStyle = useScrollFloat(0.5 * intensity, 0.5, 30 * intensity, 0.05 * intensity);
      break;
  }

  const combinedStyle = {
    animationDelay: delay,
    filter: 'drop-shadow(0 4px 6px rgba(139, 92, 246, 0.1))',
    opacity: opacity,
    transition: 'transform 0.1s ease-out, opacity 0.1s ease-out',
    ...animationStyle,
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

const EnhancedFloatingClouds: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large background logos with different animation types */}
      <EnhancedFloatingLogo
        size="xxl"
        position="top-10 -left-20"
        animation="animate-float-1"
        delay="0s"
        opacity={0.12}
        id="enhanced-bg-1"
        animationType="float"
        intensity={0.8}
      />
      
      <EnhancedFloatingLogo
        size="xl"
        position="bottom-20 -right-16"
        animation="animate-float-2"
        delay="2s"
        opacity={0.08}
        id="enhanced-bg-2"
        animationType="drift"
        intensity={0.6}
      />
      
      {/* Medium floating logos with wave animations */}
      <EnhancedFloatingLogo
        size="large"
        position="top-1/4 right-1/4"
        animation="animate-float-3"
        delay="1s"
        opacity={0.2}
        id="enhanced-med-1"
        animationType="wave"
        intensity={1.2}
      />
      
      <EnhancedFloatingLogo
        size="medium"
        position="top-1/2 left-1/3"
        animation="animate-float-1"
        delay="3s"
        opacity={0.25}
        id="enhanced-med-2"
        animationType="pulse"
        intensity={1.5}
      />
      
      {/* Small accent logos with various animations */}
      <EnhancedFloatingLogo
        size="small"
        position="top-3/4 left-1/4"
        animation="animate-float-3"
        delay="5s"
        opacity={0.3}
        id="enhanced-small-1"
        animationType="drift"
        intensity={2.0}
      />
      
      <EnhancedFloatingLogo
        size="tiny"
        position="top-20 left-1/2"
        animation="animate-float-1"
        delay="6s"
        opacity={0.35}
        id="enhanced-tiny-1"
        animationType="wave"
        intensity={1.8}
      />
      
      {/* Additional elements with ScrollAnimatedSVG wrapper */}
      <ScrollAnimatedSVG
        className="absolute top-1/3 right-10 w-20 h-24"
        parallaxSpeed={0.4}
        rotationSpeed={0.08}
        scaleSpeed={0.0008}
        opacityRange={[0.1, 0.4]}
        horizontalDrift={0.3}
      >
        <TiranaJSLogo className="w-full h-full" id="scroll-svg-1" />
      </ScrollAnimatedSVG>
      
      <ScrollAnimatedSVG
        className="absolute bottom-1/4 left-1/2 w-12 h-16"
        parallaxSpeed={0.6}
        rotationSpeed={-0.1}
        scaleSpeed={-0.0005}
        opacityRange={[0.2, 0.6]}
        horizontalDrift={0.5}
      >
        <TiranaJSLogo className="w-full h-full" id="scroll-svg-2" />
      </ScrollAnimatedSVG>
    </div>
  );
};

export default EnhancedFloatingClouds;
