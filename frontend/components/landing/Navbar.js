'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Resources', href: '#resources' },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-200/40 bg-white/70 backdrop-blur-2xl">
      
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0 group">
          
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-500 shadow-lg shadow-purple-500/20 group-hover:shadow-xl group-hover:shadow-purple-500/30 transition-all duration-300">
            <span className="text-lg font-bold text-white">S</span>
          </div>

          <span className="hidden text-xl font-bold tracking-tight text-zinc-900 sm:block">
            SkillSphere
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-14">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-lg font-semibold text-zinc-600 transition-colors hover:text-zinc-950"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6 shrink-0">
          
          <Link href="/login" className="text-lg font-semibold text-zinc-600 transition-colors hover:text-zinc-950">
            Sign In
          </Link>

          <Link href="/signup" className="rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-7 py-3.5 text-lg font-bold text-white transition-all hover:shadow-lg hover:shadow-purple-500/30">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 transition-colors hover:bg-zinc-100 md:hidden"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-zinc-900" />
          ) : (
            <Menu className="h-6 w-6 text-zinc-900" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          
          <div className="mx-auto max-w-7xl px-6 py-6">
            
            <div className="flex flex-col gap-2">
              
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-xl px-4 py-3 text-base font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-4 flex flex-col gap-3 border-t border-zinc-200 pt-4">
                
                <Link href="/login" className="rounded-xl border border-zinc-300 px-4 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 block text-center">
                  Sign In
                </Link>

                <Link href="/signup" className="rounded-xl bg-gradient-to-r from-violet-600 to-purple-600 px-4 py-3 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/30 block text-center">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
