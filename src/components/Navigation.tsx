'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isGlossy = isScrolled || isMenuOpen;

  useEffect(() => {
    let ticking = false;
    const update = () => {
      const scrolled = window.scrollY > 8;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="px-4 md:px-6">
        <div className={`mx-auto max-w-6xl mt-4 rounded-2xl transition-colors duration-300 ${(isScrolled || isMenuOpen) ? 'glass border border-white/20 shadow' : ''}`}>
          <div className="flex items-center justify-between px-4 md:px-5 py-2 md:py-3">
            {/* Left: Logo */}
            <div className="flex items-center isolate">
              <Link href="/" className="inline-flex items-center gap-2">
                <div className="text-logo-primary">
                  <Logo size="sm" textSize="sm" showText={true} />
                </div>
              </Link>
            </div>

            {/* Center: Links */}
            <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
                const isActive = pathname === item.href;
                const base = 'text-base font-medium transition-colors duration-200 px-2.5 py-1.5 rounded-xl border';
                const idle = 'text-dark-primary/80 hover:text-dark-primary border-transparent';
                const active = isGlossy
                  ? 'text-dark-primary font-semibold glass-strong border-white/40 ring-1 ring-primary-500/50 shadow-md'
                  : 'text-dark-primary font-semibold border-transparent';
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    prefetch
                    className={`${base} ${isActive ? active : idle}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => {
                      // Set global flag to prevent loader on navigation
                      (window as any).__NAVIGATION_CLICKED__ = true;
                    }}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            {/* Right: CTA (desktop) / Menu button (mobile) */}
            <div className="hidden md:flex items-center">
              <Link
                href="/events"
                prefetch
                className="text-base px-4 py-2 rounded-xl font-semibold text-white bg-primary-600/80 hover:bg-primary-600/90 backdrop-blur-md border border-primary-500/40 shadow-sm transition-all"
              >
                Join Us
              </Link>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-xl text-dark-primary hover:text-primary-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Hamburger icon */}
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                {/* Close icon */}
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden px-4`}>
        <div className={`mx-auto max-w-4xl mt-2 rounded-2xl transition-colors duration-300 ${isMenuOpen ? 'glass border border-white/20' : ''}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  prefetch
                  className={`block text-base font-medium rounded-xl transition-colors duration-200 ${isActive ? (isGlossy ? 'px-3 py-2 text-dark-primary font-semibold glass-strong border border-white/40 ring-1 ring-primary-500/50 shadow-md' : 'px-3 py-2 text-dark-primary font-semibold') : 'px-0 py-2 text-dark-primary/80 hover:text-dark-primary'}`}
                  onClick={() => {
                    setIsMenuOpen(false);
                    // Set global flag to prevent loader on navigation
                    (window as any).__NAVIGATION_CLICKED__ = true;
                  }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="pt-4 pb-2 px-3">
              <Link
                href="/events"
                className="text-base w-full text-center block px-5 py-2 rounded-xl font-semibold text-white bg-primary-600/80 hover:bg-primary-600/90 backdrop-blur-md border border-primary-500/40 shadow-sm transition-all"
                onClick={() => setIsMenuOpen(false)}
              >
                Join Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
