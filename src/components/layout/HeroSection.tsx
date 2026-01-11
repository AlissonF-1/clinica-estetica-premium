"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Star } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const Badge = ({ children }: { children: React.ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-xs font-bold uppercase tracking-[0.15em] mb-6"
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
      {/* Background Decorativo */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-amber-100/30 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.6, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-stone-200/40 rounded-full blur-[100px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }} 
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Badge>
            <Sparkles size={14} className="text-amber-500" />
            Excelência em Estética & Odonto
          </Badge>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl font-light text-stone-900 leading-[1.1] tracking-tight mb-8"
          >
            Sua beleza tratada como <br />
            <span className="font-serif italic text-amber-600">uma obra de arte.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg text-stone-500 mb-10 leading-relaxed max-w-lg"
          >
            Protocolos personalizados que unem tecnologia avançada e sensibilidade artística para realçar sua essência com naturalidade.
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-8 items-center">
            <PrimaryButton text="AGENDAR AVALIAÇÃO" />
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center gap-4"
            >
              {/* Fotos fictícias de pacientes satisfeitos */}
              <div className="flex -space-x-3">
                {[
                  "https://i.pravatar.cc/150?u=a",
                  "https://i.pravatar.cc/150?u=b",
                  "https://i.pravatar.cc/150?u=c"
                ].map((src, i) => (
                  <div key={i} className="relative w-12 h-12 rounded-full border-4 border-[#FCFBF9] overflow-hidden shadow-sm">
                    <Image src={src} alt="Paciente Satisfeito" fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] leading-tight">
                <span className="text-stone-900 text-sm font-bold tracking-tight">+2.5k Pacientes</span> <br /> 
                em Teresina - PI
              </div>
            </motion.div>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-6 border-t border-stone-200 pt-8">
            {[
              { icon: <ShieldCheck size={20}/>, label: "Segurança Total" },
              { icon: <Star size={20} fill="currentColor"/>, label: "Premium Care" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="flex items-center gap-3 cursor-default"
              >
                <div className="p-2 bg-stone-100 rounded-lg text-amber-600">{item.icon}</div>
                <span className="text-sm font-bold text-stone-600 uppercase tracking-wider">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Imagem Principal com Animação de Floating */}
        <motion.div 
          className="relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "circOut" }}
        >
          <div className="relative aspect-[4/5] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.12)] border-[12px] border-white">
             <Image 
               src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070" 
               alt="Procedimento Estético"
               fill
               priority
               className="object-cover transition-transform duration-1000"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-stone-900/30 via-transparent to-transparent pointer-events-none" />
          </div>
          
          {/* Card Flutuante com Animação Viva */}
          <motion.div 
            animate={{ 
              y: [0, -15, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              duration: 5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-xl p-6 rounded-3xl border border-white shadow-xl max-w-[240px] z-20"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-stone-900 font-black text-[10px] uppercase tracking-[0.2em]">Status: Disponível</p>
            </div>
            <p className="text-amber-600 font-serif italic text-xl leading-tight">Vagas abertas para esta semana</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}