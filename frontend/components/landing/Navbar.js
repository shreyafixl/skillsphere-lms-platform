'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, LogIn } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#resources' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="h-14 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-base text-gray-900 hidden sm:inline">SkillSphere</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-gray-600 hover:text-gray-900 transition-colors text-xs font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-2">
            <button className="flex items-center gap-1.5 px-3 py-1.5 text-gray-700 hover:text-gray-900 transition-colors text-xs">
              <LogIn size={16} />
              <span className="font-medium">Sign In</span>
            </button>
            <button className="px-4 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all text-xs">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors text-xs font-medium"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex gap-2 pt-2 px-3">
                <button className="flex-1 px-3 py-1.5 text-gray-700 border border-gray-200 rounded-lg font-medium hover:bg-gray-50 transition-colors text-xs">
                  Sign In
                </button>
                <button className="flex-1 px-3 py-1.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium hover:shadow-lg transition-all text-xs">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
