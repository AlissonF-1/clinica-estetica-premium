"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Star } from 'lucide-react';
import Image from 'next/image';

const Badge = ({ children }: { children: React.ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] mb-6"
  >
    {children}
  </motion.div>
);

const PrimaryButton = ({ text }: { text: string }) => (
  <motion.button 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="group relative flex items-center justify-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-stone-800 transition-all duration-300 shadow-2xl shadow-stone-900/20 overflow-hidden w-full sm:w-auto"
  >
    <span className="relative z-10">{text}</span>
    <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
    <div className="absolute inset-0 bg-gradient-to-r from-amber-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
  </motion.button>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 bg-[#FCFBF9] overflow-hidden">
      
      {/* BACKGROUND OTIMIZADO (Sem lag) */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Mobile: Gradiente estático (Leve) */}
        <div className="block md:hidden absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-amber-50/50 to-transparent" />
        
        {/* Desktop: Animação completa (Só carrega em telas grandes) */}
        <div className="hidden md:block">
            <motion.div 
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[100px] will-change-transform" 
            />
            <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
            className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-stone-200/40 rounded-full blur-[80px] will-change-transform" 
            />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -20 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <Badge>
            <Sparkles size={14} className="text-amber-500" />
            Excelência em Estética & Odonto
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light text-stone-900 leading-[1.1] tracking-tight mb-6 md:mb-8">
            Sua beleza tratada como <br className="hidden md:block" />
            <span className="font-serif italic text-amber-600 block md:inline mt-2 md:mt-0">uma obra de arte.</span>
          </h1>
          
          <p className="text-base md:text-lg text-stone-500 mb-8 md:mb-10 leading-relaxed max-w-lg">
            Protocolos personalizados que unem tecnologia avançada e sensibilidade artística para realçar sua essência com naturalidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center">
            <PrimaryButton text="AGENDAR AVALIAÇÃO" />
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-start"
            >
              <div className="flex -space-x-3">
                {[
                  "https://i.pravatar.cc/150?u=a",
                  "https://i.pravatar.cc/150?u=b",
                  "https://i.pravatar.cc/150?u=c"
                ].map((src, i) => (
                  <div key={i} className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-[#FCFBF9] overflow-hidden shadow-sm">
                    <Image src={src} alt="Paciente" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] leading-tight">
                <span className="text-stone-900 text-sm font-bold tracking-tight">+2.5k Pacientes</span> <br /> 
                em Teresina - PI
              </div>
            </motion.div>
          </div>

          <div className="mt-12 md:mt-16 grid grid-cols-2 gap-6 border-t border-stone-200 pt-8">
            {[
              { icon: <ShieldCheck size={20}/>, label: "Segurança Total" },
              { icon: <Star size={20} fill="currentColor"/>, label: "Premium Care" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 cursor-default">
                <div className="p-2 bg-stone-100 rounded-lg text-amber-600">{item.icon}</div>
                <span className="text-xs md:text-sm font-bold text-stone-600 uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Imagem Principal */}
        <motion.div 
          className="relative mt-8 lg:mt-0"
          initial={{ opacity: 0, scale: 0.9 }} // Reduzi a escala inicial para pesar menos na animação
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="relative aspect-[4/5] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border-[8px] md:border-[12px] border-white">
             <Image 
               src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800" // Usei w=800 para carregar uma imagem menor (antes era 2070px!)
               alt="Procedimento Estético"
               fill
               priority
               className="object-cover"
               sizes="(max-width: 768px) 100vw, 50vw" // Importante para performance
             />
             <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent pointer-events-none" />
          </div>
          
          <motion.div 
            animate={{ y: [0, -10, 0] }} // Reduzi o movimento
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 left-4 md:-bottom-6 md:-left-6 bg-white/95 backdrop-blur-md p-4 md:p-6 rounded-3xl border border-white shadow-xl max-w-[200px] md:max-w-[240px] z-20"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              <p className="text-stone-900 font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em]">Status: Disponível</p>
            </div>
            <p className="text-amber-600 font-serif italic text-lg md:text-xl leading-tight">Vagas abertas para esta semana</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}