"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Microscope, Syringe, HeartPulse } from 'lucide-react';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const TREATMENTS = [
  {
    title: "Harmonização Facial",
    desc: "Protocolos personalizados para realçar sua beleza natural com sutileza.",
    icon: <Sparkles className="text-amber-600" />,
    size: "md:col-span-2",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070"
  },
  {
    title: "Lentes de Contato",
    desc: "O sorriso dos sonhos com tecnologia 3D.",
    icon: <Microscope className="text-amber-600" />,
    size: "md:col-span-1",
    img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974"
  },
  {
    title: "Bioestimuladores",
    desc: "Recupere a firmeza e o colágeno da sua pele.",
    icon: <Syringe className="text-amber-600" />,
    size: "md:col-span-1",
    img: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070"
  },
  {
    title: "Protocolos VIP",
    desc: "Experiência completa de rejuvenescimento e bem-estar.",
    icon: <HeartPulse className="text-amber-600" />,
    size: "md:col-span-2",
    img: "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=2070"
  }
];

export default function TreatmentsSection() {
  return (
    <section id="tratamentos" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Header da Seção */}
        <div className="mb-20 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-amber-600 font-bold uppercase tracking-[0.3em] text-xs"
          >
            Nossa Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-light text-stone-900 mt-4 mb-6"
          >
            Tratamentos <span className="font-serif italic text-stone-500">Exclusivos</span>
          </motion.h2>
          <div className="h-1 w-20 bg-amber-200 rounded-full md:mx-0 mx-auto" />
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TREATMENTS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "group relative h-[400px] rounded-[2.5rem] overflow-hidden border border-stone-100 bg-stone-50 transition-all duration-500 hover:shadow-2xl hover:shadow-stone-200",
                t.size
              )}
            >
              {/* Imagem de Fundo com Overlay */}
              <Image
                src={t.img}
                alt={`Tratamento de ${t.title}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
                sizes="(max-width: 768px) 100vw, 33vw"
                />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />

              {/* Conteúdo do Card */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 border border-stone-100 group-hover:border-amber-200 transition-colors">
                  {t.icon}
                </div>
                <h3 className="text-2xl font-bold text-stone-900 mb-2 tracking-tight">{t.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed max-w-[280px]">
                  {t.desc}
                </p>
                
                {/* Link Discreto */}
                <div className="mt-6 flex items-center gap-2 text-stone-900 font-black text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                  Saiba mais <div className="h-px w-8 bg-stone-900" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}