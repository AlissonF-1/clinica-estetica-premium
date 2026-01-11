"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const TESTIMONIALS = [
  {
    name: "Mariana Silva",
    role: "Paciente de Harmonização",
    content: "O atendimento da Dra. é diferenciado. Ela explicou cada etapa e o resultado ficou extremamente natural. Minha autoestima é outra!",
    avatar: "https://i.pravatar.cc/150?u=11"
  },
  {
    name: "Ricardo Gomes",
    role: "Lentes de Contato Dental",
    content: "Tecnologia de ponta. Fiz meu tratamento com scanner 3D e o conforto foi impressionante. Recomendo para quem busca o melhor em Teresina.",
    avatar: "https://i.pravatar.cc/150?u=12"
  },
  {
    name: "Ana Beatriz",
    role: "Protocolos de Pele",
    content: "Ambiente impecável e equipe muito atenciosa. Os bioestimuladores devolveram o viço que eu achava que tinha perdido.",
    avatar: "https://i.pravatar.cc/150?u=13"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-[10px]">Experiências Reais</span>
          <h2 className="text-4xl md:text-5xl font-light text-stone-900 mt-4 font-serif italic">
            O que nossos pacientes dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#FCFBF9] p-10 rounded-[2.5rem] border border-stone-100 relative group hover:border-amber-200 transition-colors duration-500"
            >
              <Quote className="absolute top-8 right-8 text-stone-200 group-hover:text-amber-100 transition-colors" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, star) => (
                  <Star key={star} size={14} className="text-amber-500" fill="currentColor" />
                ))}
              </div>

              <p className="text-stone-600 leading-relaxed mb-8 italic">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4">
                <Image
                    src={item.avatar}
                    alt={`Foto de ${item.name}`}
                    width={48} // Tamanho fixo (w-12 no tailwind = 48px)
                    height={48}
                    className="rounded-full grayscale group-hover:grayscale-0 transition-all"
                />
                <div>
                  <h4 className="text-stone-900 font-bold text-sm">{item.name}</h4>
                  <p className="text-stone-400 text-[10px] font-black uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}