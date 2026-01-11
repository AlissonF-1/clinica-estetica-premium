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

// Configuração da animação em cascata
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
};
  
const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function TestimonialsSection() {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-[10px]">Experiências Reais</span>
          <h2 className="text-4xl md:text-5xl font-light text-stone-900 mt-4 font-serif italic">
            O que nossos pacientes dizem
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -10, borderColor: 'rgba(251, 191, 36, 0.4)' }} // Sobe e muda a cor da borda
              className="bg-[#FCFBF9] p-10 rounded-[2.5rem] border border-stone-100 relative group transition-all duration-500 cursor-default hover:shadow-xl hover:shadow-amber-100/20"
            >
              <Quote className="absolute top-8 right-8 text-stone-200 group-hover:text-amber-200 transition-colors duration-500" size={40} />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, star) => (
                  <motion.div
                    key={star}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 + star * 0.05 }} // Anima as estrelas uma por uma
                  >
                    <Star size={14} className="text-amber-500" fill="currentColor" />
                  </motion.div>
                ))}
              </div>

              <p className="text-stone-600 leading-relaxed mb-8 italic relative z-10">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden group-hover:ring-2 ring-amber-200 transition-all">
                    <Image 
                        src={item.avatar} 
                        alt={item.name} 
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                    />
                </div>
                <div>
                  <h4 className="text-stone-900 font-bold text-sm group-hover:text-amber-700 transition-colors">{item.name}</h4>
                  <p className="text-stone-400 text-[10px] font-black uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}