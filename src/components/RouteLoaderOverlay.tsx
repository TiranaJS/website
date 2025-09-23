'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import FullScreenLoader from '@/components/FullScreenLoader';

const MIN_VISIBLE_MS = 2000; // Duration for the entrance animation (2 seconds)

const RouteLoaderOverlay: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false); // Start hidden to prevent hydration mismatch
  const [mounted, setMounted] = useState<boolean>(false); // Start unmounted
  const [hasShown, setHasShown] = useState<boolean>(false); // Track if loader has been shown
  const showStartedAtRef = useRef<number | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const hideWithMinDuration = useCallback(() => {
    const started = showStartedAtRef.current ?? Date.now();
    const elapsed = Date.now() - started;
    const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
    if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    hideTimerRef.current = setTimeout(() => {
      // Add fade out animation before hiding
      const loaderElement = document.querySelector('[data-loader="true"]');
      const mainContent = document.getElementById('main-content');
      
      if (loaderElement) {
        gsap.to(loaderElement, {
          opacity: 0,
          duration: 0.3,
          ease: 'easeInOut',
          onComplete: () => {
            setVisible(false);
            showStartedAtRef.current = null;
            // Show main content after loader is hidden
            if (mainContent) {
              gsap.to(mainContent, {
                opacity: 1,
                duration: 0.3,
                ease: 'easeInOut'
              });
            }
          }
        });
      } else {
        setVisible(false);
        showStartedAtRef.current = null;
        // Show main content after loader is hidden
        if (mainContent) {
          gsap.to(mainContent, {
            opacity: 1,
            duration: 0.3,
            ease: 'easeInOut'
          });
        }
      }
    }, remaining);
  }, []);

  // Show loader on every page load/refresh
  useEffect(() => {
    // Ensure we're on the client side
    if (typeof window === 'undefined') return;
    
    // Prevent showing loader twice
    if (hasShown) return;
    
    // Check if this is a navigation click (not a page refresh)
    const isNavigationClick = (window as any).__NAVIGATION_CLICKED__;
    
    if (isNavigationClick) {
      // If it's navigation, hide loader immediately and show content
      setVisible(false);
      setMounted(true);
      const mainContent = document.getElementById('main-content');
      if (mainContent) {
        gsap.to(mainContent, {
          opacity: 1,
          duration: 0.3,
          ease: 'easeInOut'
        });
      }
    } else {
      // If it's page load/refresh, show loader
      setMounted(true);
      setVisible(true);
      setHasShown(true);
      showStartedAtRef.current = Date.now();
      hideWithMinDuration();
    }
    
    // Reset the flag for next time
    (window as any).__NAVIGATION_CLICKED__ = false;
  }, [hideWithMinDuration, hasShown]);

  useEffect(() => {
    return () => {
      if (hideTimerRef.current) clearTimeout(hideTimerRef.current);
    };
  }, []);

  // Don't render anything on server side or if not mounted
  if (!mounted) {
    return null;
  }

  return (
    <>
      {mounted && visible && (
        <div
          data-loader="true"
          className="fixed inset-0 z-[100] opacity-0 animate-fade-in"
          style={{
            animation: 'fadeIn 0.25s ease-out forwards'
          }}
        >
          <FullScreenLoader />
        </div>
      )}
    </>
  );
};

export default RouteLoaderOverlay;


