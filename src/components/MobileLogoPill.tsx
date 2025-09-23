"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type MobileLogoPillProps = {
  className?: string;
};

const MobileLogoPill: React.FC<MobileLogoPillProps> = ({ className = '' }) => {
  return (
    <Link
      href="/"
      className={`fixed bottom-4 right-4 z-50 md:hidden active:scale-95 transition-transform ${className}`}
      aria-label="TiranaJS Home"
    >
      <div className="mobile-logo-pill glass-strong border border-white/30 shadow-lg flex items-center gap-2 px-3 py-2 rounded-full">
        <div className="relative w-7 h-7">
        <Image 
              src="/assets/svgs/tiranajs.png" 
              alt="TiranaJS Logo"
              width={3580}
              height={3311}
              className="w-full h-full object-contain"
              priority
            />
        </div>
        <span className="text-[13px] font-semibold text-dark-primary/90">TiranaJS</span>
      </div>
    </Link>
  );
};

export default MobileLogoPill;


