"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

const TREATMENTS = [
  {
    title: "Harmonização Facial",
    description: "Protocolos personalizados para realçar sua beleza natural com sutileza.",
    // NOVO LINK: Mais estável e em alta definição
    img: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070",
    colSpan: "md:col-span-2",
    bg: "bg-amber-50"
  },
  {
    title: "Lentes de Contato",
    description: "O sorriso dos sonhos com tecnologia 3D.",
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974",
    colSpan: "md:col-span-1",
    bg: "bg-stone-50"
  },
  {
    title: "Bioestimuladores",
    description: "Recupere o colágeno e a firmeza da pele.",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070",
    colSpan: "md:col-span-1",
    bg: "bg-stone-100"
  },
  {
    title: "Protocolos VIP",
    description: "Atendimento exclusivo em horário estendido em Teresina.",
    img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070",
    colSpan: "md:col-span-2",
    bg: "bg-amber-100/50"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "circOut" } }
};

export default function TreatmentsSection() {
  return (
    <section id="tratamentos" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 max-w-2xl"
        >
          <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-[10px] pl-1">Nossa Expertise</span>
          <h2 className="text-4xl md:text-5xl font-light text-stone-900 mt-4 leading-tight font-serif italic">
            Protocolos exclusivos desenhados para a sua melhor versão.
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {TREATMENTS.map((t, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={cn(
                "group relative h-[400px] rounded-[2.5rem] overflow-hidden p-10 flex flex-col justify-between border border-stone-100/50 transition-all duration-500",
                t.colSpan,
                t.bg
              )}
            >
              <div className="relative z-10">
                <div className="mb-6 p-3 bg-white w-fit rounded-2xl shadow-sm group-hover:bg-amber-600 group-hover:text-white transition-colors duration-500">
                  <SparklesIcon size={20} />
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-3">{t.title}</h3>
                <p className="text-stone-600 max-w-xs leading-relaxed">{t.description}</p>
              </div>

              <div className="relative z-10 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-stone-900 group/btn w-fit cursor-pointer">
                SAIBA MAIS 
                <div className="p-2 bg-white rounded-full group-hover/btn:bg-stone-900 group-hover/btn:text-white transition-all duration-300">
                   <ArrowUpRight size={14} className="group-hover/btn:rotate-45 transition-transform"/>
                </div>
              </div>

              <div className="absolute inset-0 z-0">
                 <Image
                   src={t.img}
                   alt={`Tratamento de ${t.title}`}
                   fill
                   className="object-cover opacity-30 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
                   sizes="(max-width: 768px) 100vw, 50vw"
                 />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const SparklesIcon = ({ size, className }: { size: number, className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
);