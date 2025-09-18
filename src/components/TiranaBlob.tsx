import React from 'react';

interface TiranaBlobProps {
  className?: string;
}

// Inline version of tiranajs.svg without heavy filters to avoid rasterized blur at runtime.
const TiranaBlob: React.FC<TiranaBlobProps> = ({ className = '' }) => {
  return (
    <svg
      viewBox="0 0 3580 3311"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      role="img"
    >
      <defs>
        <linearGradient id="tiranaBlobGradient" x1="0" y1="0" x2="500" y2="500" gradientUnits="userSpaceOnUse">
          <stop stopColor="#94A4F5" />
          <stop offset="0.332622" stopColor="#EDB3F9" />
        </linearGradient>
      </defs>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.41868 523.466C-45.5798 194.998 443.415 -19.0218 746.346 1.33621C1105.71 25.4864 1299.43 137.919 1484.41 245.282C1673 354.734 1852.5 458.917 2189.18 458.917C2434.02 458.917 2639.77 373.534 2821.64 298.063C3077.61 191.839 3286.26 105.251 3490.01 303.999C3692.83 501.837 3517.44 701.765 3312.76 935.064C3035.14 1251.52 2703.65 1629.38 3189.15 2146.7C4211.43 3235.96 1228.48 3904.28 1900.9 2568.95C2197.77 1979.41 1741.7 1177.56 993.033 992.523C647.383 907.092 56.4849 879.202 3.41868 523.466Z"
        fill="url(#tiranaBlobGradient)"
      />
    </svg>
  );
};

export default TiranaBlob;


