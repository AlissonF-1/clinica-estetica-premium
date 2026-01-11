"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, MapPin } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="sobre" className="py-32 px-6 bg-[#FCFBF9] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Coluna da Imagem com Moldura Artística */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
           <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-[12px] border-white aspect-[3/4]">
            <Image
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974"
                alt="Dra. Especialista em Harmonização Orofacial"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
            />
            </div>
            
            {/* Elemento Decorativo (Atrás da imagem) */}
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl -z-0" />
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-stone-200/50 rounded-full blur-3xl -z-0" />
            
            {/* Badge de Localização */}
            <div className="absolute bottom-10 -right-6 bg-white p-6 rounded-2xl shadow-xl z-20 border border-stone-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-50 rounded-full text-amber-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Atendimento</p>
                  <p className="text-stone-900 font-bold">Teresina, Piauí</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Coluna de Texto */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
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
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-stone-100 text-amber-600">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="text-stone-900 font-bold text-lg mb-1">Formação de Elite</h4>
                  <p className="text-stone-500 text-sm">Especialização em Harmonização Orofacial avançada e cosmiatria clínica.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-stone-100 text-amber-600">
                  <Award size={24} />
                </div>
                <div>
                  <h4 className="text-stone-900 font-bold text-lg mb-1">Membro Titular</h4>
                  <p className="text-stone-500 text-sm">Atuação constante em congressos internacionais e técnicas minimamente invasivas.</p>
                </div>
              </div>
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