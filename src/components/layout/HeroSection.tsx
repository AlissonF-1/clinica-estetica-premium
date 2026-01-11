"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';
// --- SUB-COMPONENTES DE UI ---
const Badge = ({ children }: { children: React.ReactNode }) => (
  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-xs font-bold uppercase tracking-[0.15em] mb-6">
    {children}
  </div>
);

const PrimaryButton = ({ text }: { text: string }) => (
  <button className="group relative flex items-center justify-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-stone-800 transition-all duration-300 shadow-2xl shadow-stone-900/20 overflow-hidden w-full sm:w-auto">
    <span className="relative z-10">{text}</span>
    <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
    <div className="absolute inset-0 bg-gradient-to-r from-amber-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
  </button>
);

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 bg-[#FCFBF9] overflow-hidden">
      {/* Background Decorativo - Efeito de profundidade */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-stone-200/40 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }}
        >
          <Badge>
            <Sparkles size={14} className="text-amber-500" />
            Excelência em Estética & Odonto
          </Badge>
          
          <h1 className="text-5xl md:text-7xl font-light text-stone-900 leading-[1.1] tracking-tight mb-8">
            Sua beleza tratada como <br />
            <span className="font-serif italic text-amber-600">uma obra de arte.</span>
          </h1>
          
          <p className="text-lg text-stone-500 mb-10 leading-relaxed max-w-lg">
            Protocolos personalizados que unem tecnologia avançada e sensibilidade artística para realçar sua essência com naturalidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center">
            <PrimaryButton text="AGENDAR AVALIAÇÃO" />
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-[#FCFBF9] bg-stone-200 shadow-sm" />
                ))}
              </div>
              <div className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] leading-tight">
                <span className="text-stone-900 text-sm">+2.5k Pacientes</span> <br /> 
                em Teresina - PI
              </div>
            </div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-stone-200 pt-8">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-stone-100 rounded-lg text-amber-600"><ShieldCheck size={20}/></div>
              <span className="text-sm font-bold text-stone-600 uppercase tracking-wider">Segurança Total</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-stone-100 rounded-lg text-amber-600"><Star size={20} fill="currentColor"/></div>
              <span className="text-sm font-bold text-stone-600 uppercase tracking-wider">Premium Care</span>
            </div>
          </div>
        </motion.div>

        {/* Imagem Principal com Efeito Glassmorphism */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
      

          <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border-[12px] border-white">
            {/* Use o componente Image do Next.js */}
            <Image
              src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070"
              alt="Procedimento Estético Facial em Clínica Premium"
              fill // Preenche o container pai
              priority // Carrega imediatamente (está acima da dobra)
              className="object-cover transform hover:scale-105 transition-transform duration-1000"
              sizes="(max-width: 768px) 100vw, 50vw" // Dica de performance para mobile vs desktop
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent pointer-events-none" />
          </div>
          
          {/* Card Flutuante de Confiança */}
          <motion.div 
            className="absolute -bottom-6 -left-6 bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-white shadow-xl max-w-[240px]"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <p className="text-stone-900 font-black text-xs uppercase tracking-widest mb-2">Próxima Vaga</p>
            <p className="text-amber-600 font-serif italic text-lg leading-tight">Disponível para esta semana</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}