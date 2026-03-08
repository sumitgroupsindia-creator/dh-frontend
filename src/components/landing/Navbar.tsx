'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 relative">
              <img src="/logo.svg" alt="DH Financial Services" className="w-full h-full object-contain drop-shadow-sm" />
            </div>
            <div>
              <h1 className="text-xl font-extrabold text-primary-500 font-heading tracking-tight">DH Financial</h1>
              <p className="text-[11px] text-gray-400 -mt-0.5 font-medium tracking-wider uppercase">Services</p>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-primary-500 font-semibold text-sm transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-0.5 after:bg-accent-500 after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-accent text-sm px-6 py-2.5 rounded-brand">
              Get Started
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-gray-700 p-2 rounded-brand hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-100 bg-white rounded-b-brand-lg shadow-brand">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block py-3.5 px-5 text-gray-700 hover:text-primary-500 hover:bg-primary-50/50 font-semibold text-sm transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a href="#contact" className="btn-accent text-sm w-full text-center block rounded-brand" onClick={() => setIsOpen(false)}>
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
