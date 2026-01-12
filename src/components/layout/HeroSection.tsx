"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Star } from 'lucide-react';
import Image from 'next/image';

// Variantes de animação leves (apenas Opacidade e Posição)
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: delay, ease: "easeOut" }
  })
};

const Badge = ({ children }: { children: React.ReactNode }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] mb-6"
  >
    {children}
  </motion.div>
);

const PrimaryButton = ({ text }: { text: string }) => (
  <button 
    className="group relative flex items-center justify-center gap-3 bg-stone-900 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-stone-800 transition-all duration-300 shadow-xl shadow-stone-900/10 overflow-hidden w-full sm:w-auto active:scale-95"
  >
    <span className="relative z-10">{text}</span>
    <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
    <div className="absolute inset-0 bg-gradient-to-r from-amber-200/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
  </button>
);

export default function HeroSection() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-24 pb-12 px-6 bg-[#FCFBF9] overflow-hidden">
      
      {/* TRUQUE DE PERFORMANCE: 
         Animações em CSS puro (Style tag abaixo) não bloqueiam a thread do React.
         O site carrega e a animação já está rodando lisa.
      */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
        @keyframes float-badge {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-blob-1 { animation: pulse-slow 8s infinite ease-in-out; }
        .animate-blob-2 { animation: pulse-slow 10s infinite ease-in-out reverse; }
        .animate-float { animation: float-badge 6s infinite ease-in-out; }
      `}</style>

      {/* BACKGROUND OTIMIZADO */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Mobile: Gradiente estático (Zero processamento) */}
        <div className="block md:hidden absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-amber-50/60 to-transparent" />
        
        {/* Desktop: Bolhas via CSS Puro (Sem Framer Motion aqui = Sem Lag) */}
        <div className="hidden md:block">
            <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-[100px] animate-blob-1 will-change-transform" />
            <div className="absolute bottom-[10%] left-[-5%] w-[400px] h-[400px] bg-stone-200/50 rounded-full blur-[80px] animate-blob-2 will-change-transform" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
        
        {/* Coluna Texto */}
        <motion.div 
          initial="hidden"
          animate="visible"
          custom={0}
        >
          <Badge>
            <Sparkles size={14} className="text-amber-500" />
            Excelência em Estética & Odonto
          </Badge>
          
          <motion.h1 
            variants={fadeUp} custom={0.1}
            className="text-4xl md:text-5xl lg:text-7xl font-light text-stone-900 leading-[1.1] tracking-tight mb-6 md:mb-8"
          >
            Sua beleza tratada como <br className="hidden md:block" />
            <span className="font-serif italic text-amber-600 block md:inline mt-2 md:mt-0">uma obra de arte.</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeUp} custom={0.2}
            className="text-base md:text-lg text-stone-500 mb-8 md:mb-10 leading-relaxed max-w-lg"
          >
            Protocolos personalizados que unem tecnologia avançada e sensibilidade artística para realçar sua essência com naturalidade.
          </motion.p>
          
          <motion.div variants={fadeUp} custom={0.3} className="flex flex-col sm:flex-row gap-6 md:gap-8 items-center">
            <PrimaryButton text="AGENDAR AVALIAÇÃO" />
            
            <div className="flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-start">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((_, i) => (
                  <div key={i} className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-[#FCFBF9] overflow-hidden shadow-sm bg-stone-200">
                    {/* Placeholder colorido ou imagem super leve */}
                     <Image 
                      src={`https://i.pravatar.cc/100?img=${i + 5}`} // Imagem menor (100px)
                      alt="Paciente" 
                      width={48} 
                      height={48} 
                      className="object-cover" 
                      unoptimized // Pula o processamento do Next para avatares externos (mais rápido)
                    />
                  </div>
                ))}
              </div>
              <div className="text-[10px] font-black text-stone-400 uppercase tracking-[0.2em] leading-tight">
                <span className="text-stone-900 text-sm font-bold tracking-tight">+2.5k Pacientes</span> <br /> 
                em Teresina - PI
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} custom={0.4} className="mt-12 md:mt-16 grid grid-cols-2 gap-6 border-t border-stone-200 pt-8">
            {[
              { icon: <ShieldCheck size={20}/>, label: "Segurança Total" },
              { icon: <Star size={20} fill="currentColor"/>, label: "Premium Care" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 cursor-default group">
                <div className="p-2 bg-stone-100 rounded-lg text-amber-600 group-hover:bg-amber-50 transition-colors">{item.icon}</div>
                <span className="text-xs md:text-sm font-bold text-stone-600 uppercase tracking-wider">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Coluna Imagem Principal */}
        <div className="relative mt-8 lg:mt-0 perspective-1000">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} // Curva Apple Ease
            className="relative z-10"
          >
            <div className={`relative aspect-[4/5] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-[8px] md:border-[12px] border-white transition-opacity duration-700 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}>
               <Image 
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=800"
                alt="Procedimento Estético"
                fill
                priority // Carrega primeiro que tudo
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                onLoad={() => setImgLoaded(true)} // Só mostra quando estiver pronta (evita flash)
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* Elemento flutuante movido para CSS puro para evitar jank */}
          <div 
            className="animate-float absolute -bottom-6 left-4 md:-bottom-6 md:-left-6 bg-white/90 backdrop-blur-md p-4 md:p-6 rounded-3xl border border-white shadow-xl max-w-[200px] md:max-w-[240px] z-20"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <p className="text-stone-900 font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em]">Status: Disponível</p>
            </div>
            <p className="text-amber-600 font-serif italic text-lg md:text-xl leading-tight">Vagas abertas para esta semana</p>
          </div>
        </div>

      </div>
    </section>
  );
}