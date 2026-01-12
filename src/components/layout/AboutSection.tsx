"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, MapPin } from 'lucide-react';
import Image from 'next/image';

// Variantes de animação para manter o código limpo e performático
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } // Easing "suave" estilo Apple
  }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -30 }, // Reduzi de -50 para -30 (menos pixels = mais fluidez visual)
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
  }
};

const slideInRight = {
  hidden: { opacity: 0, x: 30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }
  }
};

export default function AboutSection() {
  return (
    <section id="sobre" className="py-32 px-6 bg-[#FCFBF9] overflow-hidden relative">
      
      {/* OTIMIZAÇÃO 1: Camada de Background Estática
        Tiramos os elementos de Blur de dentro do motion.div. 
        Agora a GPU renderiza o borrão uma vez e não precisa movê-lo.
      */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-amber-100/40 rounded-full blur-3xl -z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-stone-200/40 rounded-full blur-3xl -z-0 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Coluna da Imagem */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }} // Margin ajuda a carregar um pouco antes
            variants={slideInLeft}
            className="relative will-change-transform" // Dica para a GPU
          >
            {/* Container da Imagem */}
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-[3/4] transform-gpu">
             <Image
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974"
                alt="Dra. Especialista em Harmonização Orofacial"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                priority={false} // Lazy load natural já que é a segunda seção
            />
            </div>
            
            {/* Badge de Localização - Movimento independente sutil */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-10 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-stone-100 hidden md:block" // Escondi no mobile muito pequeno pra evitar quebra de layout, ou pode manter block se preferir
            >
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-50 rounded-full text-amber-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Atendimento</p>
                  <p className="text-stone-900 font-bold">Teresina, Piauí</p>
                </div>
              </div>
            </motion.div>

            {/* Versão Mobile do Badge (Opcional, para não quebrar o layout lateralmente) */}
            <div className="md:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white p-4 rounded-xl shadow-lg z-20 border border-stone-100 w-max">
               <div className="flex items-center gap-2">
                <div className="p-1.5 bg-amber-50 rounded-full text-amber-600">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Atendimento</p>
                  <p className="text-stone-900 font-bold text-sm">Teresina, Piauí</p>
                </div>
              </div>
            </div>

          </motion.div>

          {/* Coluna de Texto */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={slideInRight}
            className="will-change-transform"
          >
            <span className="text-amber-600 font-bold uppercase tracking-[0.3em] text-xs">A Mente por trás da Clínica</span>
            <h2 className="text-4xl md:text-6xl font-light text-stone-900 mt-6 mb-8 leading-tight">
              Ciência e arte em <br />
              <span className="font-serif italic text-stone-500">perfeita harmonia.</span>
            </h2>
            
            <p className="text-lg text-stone-600 mb-8 leading-relaxed italic">
              "Acredito que a verdadeira estética não é sobre transformar, mas sobre revelar a beleza que já existe em cada traço, respeitando a sua identidade."
            </p>

            <div className="space-y-8">
              {/* Item 1 */}
              <motion.div variants={fadeInUp} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-stone-100 text-amber-600">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-stone-900 font-bold text-lg mb-1">Formação de Elite</h4>
                  <p className="text-stone-500 text-sm">Especialização em Harmonização Orofacial avançada e cosmiatria clínica.</p>
                </div>
              </motion.div>

              {/* Item 2 */}
              <motion.div variants={fadeInUp} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-stone-100 text-amber-600">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-stone-900 font-bold text-lg mb-1">Membro Titular</h4>
                  <p className="text-stone-500 text-sm">Atuação constante em congressos internacionais e técnicas minimamente invasivas.</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-12 p-8 rounded-[2rem] bg-stone-100 border border-stone-200">
              <p className="text-stone-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">Registro Profissional</p>
              <p className="text-stone-900 font-serif italic text-xl">CRM/PI 00000 • RQE 0000</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}