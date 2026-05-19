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
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-200/60 bg-white/80 backdrop-blur-xl">
      
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        {/* Logo */}
        <Link href="/" className="flex shrink-0 items-center gap-3">
          
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 shadow-md">
            <span className="text-6xl font-bold text-white">S</span>
          </div>

          <span className="hidden text-3xl font-bold tracking-tight text-zinc-900 sm:block">
            SkillSphere
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-14 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xl font-semibold tracking-tight text-zinc-600 transition-all duration-200 hover:-translate-y-[1px] hover:text-zinc-950"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden shrink-0 items-center gap-6 md:flex">
          
          <button className="text-xl font-semibold text-zinc-600 transition-all duration-200 hover:text-zinc-950">
            Sign In
          </button>

          <button className="rounded-2xl bg-zinc-950 px-7 py-3.5 text-xl font-semibold text-white transition-all duration-200 hover:bg-zinc-800 hover:shadow-lg">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 transition-colors hover:bg-zinc-100 md:hidden"
        >
          {isOpen ? (
            <X className="h-7 w-7 text-zinc-900" />
          ) : (
            <Menu className="h-7 w-7 text-zinc-900" />
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
                  className="rounded-xl px-4 py-4 text-lg font-medium text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                >
                  {link.label}
                </a>
              ))}

              <div className="mt-4 flex flex-col gap-3 border-t border-zinc-200 pt-4">
                
                <button className="rounded-xl border border-zinc-300 px-4 py-4 text-lg font-semibold text-zinc-700 transition-colors hover:bg-zinc-100">
                  Sign In
                </button>

                <button className="rounded-xl bg-zinc-950 px-4 py-4 text-lg font-semibold text-white transition-all hover:bg-zinc-800">
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
