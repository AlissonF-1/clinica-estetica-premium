"use client";

import React from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contato" className="py-24 px-6 bg-white">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-12">
          <span className="text-amber-600 font-serif italic text-xl">Exclusividade</span>
          <h2 className="text-3xl md:text-4xl font-light text-stone-900 mt-2">
            Inicie sua transformação.
          </h2>
        </div>

        <form className="space-y-6">
          {/* Nome */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
              Nome Completo
            </label>
            <input 
              type="text" 
              placeholder="Ex: Ana Silva" 
              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
            />
          </div>

          {/* WhatsApp */}
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">
              WhatsApp
            </label>
            <input 
              type="tel" 
              placeholder="(86) 99999-9999" 
              className="w-full bg-stone-50 border border-stone-200 rounded-xl px-4 py-4 text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-500 transition-all"
            />
          </div>

          {/* Checkbox LGPD */}
          <div className="flex items-start gap-3 p-4 bg-amber-50/50 rounded-xl border border-amber-100">
            <div className="mt-1">
               <input type="checkbox" id="lgpd" className="accent-amber-600 w-4 h-4 cursor-pointer" />
            </div>
            <label htmlFor="lgpd" className="text-xs text-stone-500 leading-relaxed cursor-pointer">
              Autorizo o processamento dos meus dados para fins de agendamento clínico, conforme a <strong>LGPD</strong>. Meus dados sensíveis serão mantidos em sigilo absoluto.
            </label>
          </div>

          {/* Botão Corrigido */}
          <button 
            type="button" // Mude para type="submit" quando integrar o backend
            className="group w-full bg-stone-900 text-white font-bold py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-stone-800 active:scale-[0.98] transition-all shadow-xl shadow-stone-900/10"
          >
            <span>SOLICITAR ORÇAMENTO</span>
            <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>
        </form>

        <div className="mt-8 flex justify-center items-center gap-2 text-stone-400 text-[10px] uppercase tracking-widest">
          <CheckCircle2 size={12} className="text-green-500" />
          <span>Resposta em até 1 hora</span>
        </div>
      </div>
    </section>
  );
}