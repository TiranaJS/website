import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, className = '' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
    xl: 'text-5xl',
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Logo Cloud with tJS */}
      <div className="relative">
        <div className={`${sizeClasses[size]} bg-gradient-cloud rounded-full flex items-center justify-center relative`}>
          {/* Angular 't' shape */}
          <div className="relative flex items-center">
            <div className="text-white font-bold" style={{ fontSize: size === 'xl' ? '1.5rem' : size === 'lg' ? '1rem' : size === 'md' ? '0.75rem' : '0.5rem' }}>
              <span className="relative inline-block">
                <span className="absolute inset-0 transform rotate-12 bg-white" style={{ width: '2px', height: '100%', left: '50%', transform: 'translateX(-50%) rotate(15deg)' }}></span>
                <span className="relative">t</span>
              </span>
              <span className="ml-0.5">JS</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <h1 className={`${textSizeClasses[size]} font-bold text-dark-primary leading-none`}>
            TiranaJS
          </h1>
          <p className={`text-dark-secondary font-normal ${size === 'xl' ? 'text-xl' : size === 'lg' ? 'text-lg' : 'text-sm'} leading-tight`}>
            Community
          </p>
        </div>
      )}
    </div>
  );
};

export default Logo;
