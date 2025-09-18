'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import FullScreenLoader from '@/components/FullScreenLoader';

const MIN_VISIBLE_MS = 1700; // +500ms to accommodate extended intro animation

const RouteLoaderOverlay: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(true); // show only on initial mount
  const showStartedAtRef = useRef<number | null>(Date.now());
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hideWithMinDuration = useCallback(() => {
    const started = showStartedAtRef.current ?? Date.now();
    const elapsed = Date.now() - started;
    const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      setVisible(false);
      showStartedAtRef.current = null;
    }, remaining);
  }, []);

  // Initial mount: hide after minimum duration
  useEffect(() => {
    hideWithMinDuration();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="route-loader"
          className="fixed inset-0 z-[100]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          <FullScreenLoader />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RouteLoaderOverlay;


