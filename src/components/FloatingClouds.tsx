"use client";

import React from "react";
import {
  useParallax,
  useScrollRotation,
  useScrollOpacity,
} from "@/hooks/useScrollAnimation";

interface FloatingLogoProps {
  size: "tiny" | "small" | "medium" | "large" | "xl" | "xxl";
  position: string;
  animation: string;
  delay?: string;
  opacity?: number;
  id: string;
  parallaxSpeed?: number;
  rotationSpeed?: number;
  opacityVariation?: number;
}

const TiranaJSLogo: React.FC<{ className?: string; id: string }> = ({
  className,
  id,
}) => {
  const uniqueId = `tiranajs-${id}`;

  return (
    <svg 
      className={className}
      viewBox="0 0 2493 1665" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M2140.64 1478.8C2037.37 1478.8 1978.98 1424.93 1934.09 1351.65L1763.94 1450.51C1825.41 1571.96 1951.04 1664.63 2145.49 1664.63C2344.37 1664.63 2492.45 1561.35 2492.45 1372.84C2492.45 1197.97 2392.01 1120.2 2214.1 1043.91L2161.76 1021.49C2071.92 982.581 2033.02 957.151 2033.02 894.337C2033.02 843.512 2071.89 804.607 2133.22 804.607C2193.34 804.607 2232.07 829.966 2267.97 894.337L2431.02 789.646C2362.05 668.333 2266.34 622 2133.22 622C1946.23 622 1826.57 741.545 1826.57 898.581C1826.57 1069.06 1926.95 1149.7 2078.04 1214.07L2130.39 1236.53C2225.88 1278.3 2282.82 1303.73 2282.82 1375.52C2282.82 1435.44 2227.4 1478.8 2140.64 1478.8Z" fill={`url(#logoGradient_${uniqueId})`}/>
      <path d="M1329.19 1477.49C1257.25 1477.49 1227.33 1428.15 1194.44 1369.79L1024 1472.98C1073.37 1577.48 1170.46 1664.24 1338.1 1664.24C1523.65 1664.24 1650.76 1565.56 1650.76 1348.75V633.954H1441.38V1345.92C1441.38 1450.58 1397.98 1477.49 1329.19 1477.49Z" fill={`url(#logoGradient_${uniqueId})`}/>
      <g filter={`url(#filter0_i_${uniqueId})`}>
        <rect width="416.249" height="416.249" fill={`url(#paint0_linear_${uniqueId})`}/>
        <path fillRule="evenodd" clipRule="evenodd" d="M0 416.258H416.248H832.495V832.505L416.248 832.506L0 416.258ZM416.248 832.506C416.248 1248.75 832.496 1248.75 832.496 1248.75L832.495 1665C832.495 1665 624.372 1665 416.248 1560.94C293.995 1499.81 171.743 1402.78 91.673 1248.75C35.4693 1140.64 0.0488807 1004.44 0 832.862V832.505L416.248 832.506Z" fill={`url(#logoGradient_${uniqueId})`}/>
      </g>
      <defs>
        <filter id={`filter0_i_${uniqueId}`} x="0" y="0" width="832.496" height="1665" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset/>
          <feGaussianBlur stdDeviation="100"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.185559 0 0 0 0 0.156389 0 0 0 0 0.326923 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_62_2"/>
        </filter>
        <linearGradient id={`paint0_linear_${uniqueId}`} x1="129.2" y1="472.707" x2="148.72" y2="-133.916" gradientUnits="userSpaceOnUse">
          <stop stopColor={`url(#logoGradient_${uniqueId})`} stopOpacity="0.9"/>
          <stop offset="0.593915" stopColor={`url(#logoGradient_${uniqueId})`}/>
        </linearGradient>
        <linearGradient id={`logoGradient_${uniqueId}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2F2853" />
          <stop offset="50%" stopColor="#4F3A6B" />
          <stop offset="100%" stopColor="#a18cd1" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const FloatingLogo: React.FC<FloatingLogoProps> = ({
  size,
  position,
  animation,
  delay = "0s",
  opacity = 0.4,
  id,
  parallaxSpeed = 0.2,
  rotationSpeed = 0.05,
  opacityVariation = 0.001,
}) => {
  const sizeClasses = {
    tiny: "w-8 h-10",
    small: "w-16 h-20",
    medium: "w-24 h-30",
    large: "w-32 h-40",
    xl: "w-48 h-60",
    xxl: "w-64 h-80",
  };

  // Get scroll-based animations
  const parallaxStyle = useParallax(parallaxSpeed);
  const rotationStyle = useScrollRotation(rotationSpeed);
  const opacityStyle = useScrollOpacity(opacityVariation, opacity);

  // Combine transforms
  const combinedStyle = {
    animationDelay: delay,
    filter: "drop-shadow(0 4px 6px rgba(248, 235, 255, 0.3))",
    transform: `${parallaxStyle.transform} ${rotationStyle.transform}`,
    opacity: opacityStyle.opacity,
    transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
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
