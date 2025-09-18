import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
  variant?: 'dark' | 'light';
  textSize?: 'sm' | 'md' | 'lg' | 'xl';
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '', variant = 'dark', textSize }) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-12',
    lg: 'h-16',
    xl: 'h-24',
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-5xl',
  };

  const effectiveTextSize = textSize ?? size;

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* TiranaJS Logo SVG */}
      <div className="relative">
        {variant === 'light' ? (
          // Light version for dark backgrounds
          <svg 
            className={sizeClasses[size]} 
            viewBox="0 0 2493 1665" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M2140.4 1478.7C2037.13 1478.7 1978.73 1424.83 1933.85 1351.55L1763.69 1450.4C1825.16 1571.86 1950.79 1664.52 2145.25 1664.52C2344.12 1664.52 2492.21 1561.25 2492.21 1372.73C2492.21 1197.87 2391.76 1120.1 2213.86 1043.81L2161.52 1021.38C2071.68 982.479 2032.77 957.05 2032.77 894.235C2032.77 843.411 2071.64 804.505 2132.97 804.505C2193.1 804.505 2231.83 829.865 2267.73 894.235L2430.77 789.545C2361.81 668.231 2266.1 621.898 2132.97 621.898C1945.98 621.898 1826.33 741.444 1826.33 898.479C1826.33 1068.96 1926.71 1149.6 2077.8 1213.97L2130.14 1236.42C2225.64 1278.19 2282.58 1303.62 2282.58 1375.42C2282.58 1435.34 2227.16 1478.7 2140.4 1478.7Z" fill="#F8EBFF"/>
            <path d="M1328.95 1477.39C1257.01 1477.39 1227.09 1428.05 1194.2 1369.69L1023.76 1472.88C1073.13 1577.38 1170.22 1664.14 1337.86 1664.14C1523.4 1664.14 1650.52 1565.46 1650.52 1348.65V633.853H1441.14V1345.82C1441.14 1450.47 1397.74 1477.39 1328.95 1477.39Z" fill="#F8EBFF"/>
            <g filter="url(#filter0_i_39_2)">
              <rect width="416.249" height="416.249" fill="url(#paint0_linear_39_2)"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M0 416.258H416.248H832.495V832.505L416.248 832.506L0 416.258ZM416.248 832.506C416.248 1248.75 832.496 1248.75 832.496 1248.75L832.495 1665C832.495 1665 624.372 1665 416.248 1560.94C293.995 1499.81 171.743 1402.78 91.673 1248.75C35.4693 1140.64 0.0488807 1004.44 0 832.862V832.505L416.248 832.506Z" fill="#F8EBFF"/>
            </g>
            <defs>
              <filter id="filter0_i_39_2" x="0" y="0" width="832.496" height="1665" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="100"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.185559 0 0 0 0 0.156389 0 0 0 0 0.326923 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_39_2"/>
              </filter>
              <linearGradient id="paint0_linear_39_2" x1="129.2" y1="472.707" x2="148.72" y2="-133.916" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D6BCE5"/>
                <stop offset="0.593915" stopColor="#F8EBFF"/>
              </linearGradient>
            </defs>
          </svg>
        ) : (
          // Dark version for light backgrounds (default)
          <svg 
            className={sizeClasses[size]} 
            viewBox="0 0 2493 1665" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fillRule="evenodd" clipRule="evenodd" d="M2140.64 1478.8C2037.37 1478.8 1978.98 1424.93 1934.09 1351.65L1763.94 1450.51C1825.41 1571.96 1951.04 1664.63 2145.49 1664.63C2344.37 1664.63 2492.45 1561.35 2492.45 1372.84C2492.45 1197.97 2392.01 1120.2 2214.1 1043.91L2161.76 1021.49C2071.92 982.581 2033.02 957.151 2033.02 894.337C2033.02 843.512 2071.89 804.607 2133.22 804.607C2193.34 804.607 2232.07 829.966 2267.97 894.337L2431.02 789.646C2362.05 668.333 2266.34 622 2133.22 622C1946.23 622 1826.57 741.545 1826.57 898.581C1826.57 1069.06 1926.95 1149.7 2078.04 1214.07L2130.39 1236.53C2225.88 1278.3 2282.82 1303.73 2282.82 1375.52C2282.82 1435.44 2227.4 1478.8 2140.64 1478.8Z" fill="currentColor"/>
            <path d="M1329.19 1477.49C1257.25 1477.49 1227.33 1428.15 1194.44 1369.79L1024 1472.98C1073.37 1577.48 1170.46 1664.24 1338.1 1664.24C1523.65 1664.24 1650.76 1565.56 1650.76 1348.75V633.954H1441.38V1345.92C1441.38 1450.58 1397.98 1477.49 1329.19 1477.49Z" fill="currentColor"/>
            <g filter="url(#filter0_i_62_2)">
              <rect width="416.249" height="416.249" fill="url(#paint0_linear_62_2)"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M0 416.258H416.248H832.495V832.505L416.248 832.506L0 416.258ZM416.248 832.506C416.248 1248.75 832.496 1248.75 832.496 1248.75L832.495 1665C832.495 1665 624.372 1665 416.248 1560.94C293.995 1499.81 171.743 1402.78 91.673 1248.75C35.4693 1140.64 0.0488807 1004.44 0 832.862V832.505L416.248 832.506Z" fill="currentColor"/>
            </g>
            <defs>
              <filter id="filter0_i_62_2" x="0" y="0" width="832.496" height="1665" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset/>
                <feGaussianBlur stdDeviation="100"/>
                <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0.185559 0 0 0 0 0.156389 0 0 0 0 0.326923 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="shape" result="effect1_innerShadow_62_2"/>
              </filter>
              <linearGradient id="paint0_linear_62_2" x1="129.2" y1="472.707" x2="148.72" y2="-133.916" gradientUnits="userSpaceOnUse">
                <stop stopColor="currentColor" stopOpacity="0.9"/>
                <stop offset="0.593915" stopColor="currentColor"/>
              </linearGradient>
            </defs>
          </svg>
        )}
      </div>
      
      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <h1 className={`${textSizeClasses[effectiveTextSize]} font-bold ${variant === 'light' ? 'text-white' : 'text-dark-primary'} leading-none`}>
            TiranaJS
          </h1>
          <p className={`${variant === 'light' ? 'text-primary-200' : 'text-dark-secondary'} font-normal ${effectiveTextSize === 'xl' ? 'text-xl' : effectiveTextSize === 'lg' ? 'text-lg' : effectiveTextSize === 'md' ? 'text-sm' : 'text-xs'} leading-tight`}>
            Community
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;