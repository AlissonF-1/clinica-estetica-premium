"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed w-full z-50 transition-all duration-500 px-6",
      isScrolled ? "py-4" : "py-8"
    )}>
      <div className={cn(
        "max-w-7xl mx-auto rounded-full transition-all duration-500 flex items-center justify-between px-8",
        isScrolled ? "bg-white/80 backdrop-blur-md shadow-lg border border-stone-200/50 h-16" : "bg-transparent h-20"
      )}>
        <div className="text-xl font-light text-stone-900 tracking-tighter">
          CLÍNICA<span className="font-serif italic text-amber-600">ESTÉTICA.</span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-stone-500">
          <a href="#tratamentos" className="hover:text-amber-600 transition-colors">Tratamentos</a>
          <a href="#sobre" className="hover:text-amber-600 transition-colors">A Clínica</a>
          <a href="#contato" className="bg-stone-900 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition-all">Agendar Agora</a>
        </div>
      </div>
    </nav>
  );
}