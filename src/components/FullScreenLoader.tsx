'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Logo from '@/components/Logo';
import TiranaBlob from '@/components/TiranaBlob';

const FullScreenLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white">
      <div className="relative w-full max-w-3xl h-40 flex items-center justify-center px-6" aria-label="Loading TiranaJS" role="status">
        <div className="flex items-center justify-center gap-3 md:gap-6 lg:gap-8">
          {/* Stage 2 target position (left): Full logo with text */}
          <motion.div
            className="text-logo-primary"
            initial={{ opacity: 0, x: 40, y: 0 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ delay: 0.55, duration: 1.0, ease: 'easeOut' }}
          >
            <div className="scale-95 md:scale-100">
              <Logo size="lg" textSize="lg" showText={true} />
            </div>
          </motion.div>

          {/* Stage 1: TiranaJS emblem (right) rendered inline for crispness */}
          <motion.div
            className="h-20 sm:h-24 md:h-28 w-auto"
            initial={{ opacity: 0, x: 0 }}
            animate={{ opacity: [0, 1, 1], x: [0, 0, 0] }}
            transition={{ duration: 1.5, ease: 'easeInOut', times: [0, 0.5, 1] }}
          >
            <TiranaBlob className="h-full w-auto" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenLoader;


