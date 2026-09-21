'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#0D1B2A]/90 backdrop-blur-md border-b border-white/8'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a
            href="#"
            className="text-2xl font-bold text-white hover:text-[#2F80FF] transition-colors"
          >
            Kevin
          </a>

          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#94A3B8] hover:text-white transition-colors font-medium text-sm tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-[#FF8A3D] text-white px-6 py-2.5 rounded-lg hover:bg-[#FF8A3D]/90 transition-colors font-medium text-sm"
            >
              Start a Project
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0D1B2A]/95 backdrop-blur-md border-t border-white/8">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-[#94A3B8] hover:text-white transition-colors font-medium text-lg py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="block bg-[#FF8A3D] text-white px-6 py-3 rounded-lg hover:bg-[#FF8A3D]/90 transition-colors font-medium text-center mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Start a Project
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
