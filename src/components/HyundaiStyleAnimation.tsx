'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HyundaiStyleLogoProps {
  id: string;
  className?: string;
}

const TiranaJSLogo: React.FC<HyundaiStyleLogoProps> = ({ className, id }) => {
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

const HyundaiStyleAnimation: React.FC = () => {
  const { scrollYProgress } = useScroll();
  
  // Main logo transformations - starts big, grows HUGE then disappears
  const mainScale = useTransform(scrollYProgress, [0, 0.3, 0.6], [2, 10, 15]);
  const mainOpacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [0.6, 0.3, 0]);
  const mainRotate = useTransform(scrollYProgress, [0, 0.6], [100, 520]);
  
  // Background small logos - rotating and moving
  const bgRotate1 = useTransform(scrollYProgress, [0, 1], [0, 720]);
  const bgRotate2 = useTransform(scrollYProgress, [0, 1], [0, -540]);
  const bgRotate3 = useTransform(scrollYProgress, [0, 1], [0, 450]);
  
  const bgY1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const bgY2 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const bgY3 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  
  const bgX1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const bgX2 = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const bgX3 = useTransform(scrollYProgress, [0, 1], [0, 80]);
  
  const bgOpacity1 = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.1, 0.4, 0.6, 0.2]);
  const bgOpacity2 = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.15, 0.5, 0.4, 0.1]);
  const bgOpacity3 = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.2, 0.6, 0.3, 0.15]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Main Hero Logo - Scales up dramatically */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        style={{
          scale: mainScale,
          opacity: mainOpacity,
          rotate: mainRotate,
        }}
      >
        <div className="w-96 h-[480px]">
          <TiranaJSLogo className="w-full h-full" id="hero-main" />
        </div>
      </motion.div>

      {/* Background Small Logos - Rotating and Moving */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-16 h-20"
        style={{
          rotate: bgRotate1,
          y: bgY1,
          x: bgX1,
          opacity: bgOpacity1,
        }}
      >
        <TiranaJSLogo className="w-full h-full" id="bg-1" />
      </motion.div>

      <motion.div
        className="absolute top-1/3 right-1/4 w-12 h-16"
        style={{
          rotate: bgRotate2,
          y: bgY2,
          x: bgX2,
          opacity: bgOpacity2,
        }}
      >
        <TiranaJSLogo className="w-full h-full" id="bg-2" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-20 h-24"
        style={{
          rotate: bgRotate3,
          y: bgY3,
          x: bgX3,
          opacity: bgOpacity3,
        }}
      >
        <TiranaJSLogo className="w-full h-full" id="bg-3" />
      </motion.div>

      {/* Additional floating elements */}
      <motion.div
        className="absolute top-1/2 right-1/3 w-10 h-12"
        style={{
          rotate: useTransform(scrollYProgress, [0, 1], [0, -360]),
          y: useTransform(scrollYProgress, [0, 1], [0, 120]),
          x: useTransform(scrollYProgress, [0, 1], [0, -80]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 0.7, 0.1]),
        }}
      >
        <TiranaJSLogo className="w-full h-full" id="bg-4" />
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/2 w-14 h-18"
        style={{
          rotate: useTransform(scrollYProgress, [0, 1], [0, 540]),
          y: useTransform(scrollYProgress, [0, 1], [0, -180]),
          x: useTransform(scrollYProgress, [0, 1], [0, 60]),
          opacity: useTransform(scrollYProgress, [0, 0.4, 0.8], [0.2, 0.6, 0.3]),
        }}
      >
        <TiranaJSLogo className="w-full h-full" id="bg-5" />
      </motion.div>
    </div>
  );
};

export default HyundaiStyleAnimation;
