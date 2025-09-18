'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { usePathname } from 'next/navigation';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Events', href: '/events' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-transparent">
      <div className="px-4">
        <div className="mx-auto max-w-2xl mt-4 rounded-2xl glass-strong border border-white/20 shadow-md">
          <div className="flex items-center justify-between h-12 px-4">
            {/* Left: Logo */}
            <div className="flex items-center">
              <Link href="/" className="inline-flex items-center gap-2">
                <div className="text-logo-primary">
                  <Logo size="sm" textSize="sm" showText={true} />
                </div>
              </Link>
            </div>

            {/* Center: Links */}
            <div className="hidden md:flex items-center gap-5">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                const base = 'text-base font-medium transition-all duration-200';
                const idle = 'px-0 py-0 text-dark-primary/80 hover:text-dark-primary';
                const active = 'px-3 py-2 rounded-xl text-dark-primary glass border border-white/30 hover:shadow-md';
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${base} ${isActive ? active : idle}`}
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
                className="text-base px-5 py-2 rounded-xl font-semibold text-white bg-primary-600/80 hover:bg-primary-600/90 backdrop-blur-md border border-primary-500/40 shadow-sm transition-all"
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
        <div className="mx-auto max-w-4xl mt-2 rounded-2xl glass-strong border border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block text-base font-medium rounded-xl transition-all duration-200 ${pathname === item.href ? 'px-3 py-2 text-dark-primary glass border border-white/30' : 'px-0 py-2 text-dark-primary/80 hover:text-dark-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
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
