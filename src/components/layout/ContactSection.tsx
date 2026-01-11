"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, ShieldCheck, CheckCircle2, XCircle } from 'lucide-react';

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const formData = new FormData(e.currentTarget);
    // NOTA: Em produção, o ID vem do Formspree
    const response = await fetch("https://formspree.io/f/SEU_ID_AQUI", {
      method: "POST",
      body: formData,
      headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contato" className="py-32 px-6 bg-[#FCFBF9]">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-[3rem] shadow-2xl shadow-stone-200 border border-stone-100 overflow-hidden grid md:grid-cols-5">
          
          <div className="md:col-span-2 bg-stone-900 p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-light mb-6">Inicie sua <br /><span className="font-serif italic text-amber-500">jornada.</span></h3>
              <p className="text-stone-400 text-sm leading-relaxed">
                Estamos prontos para desenhar um protocolo exclusivo para você em nossa sede em Teresina.
              </p>
            </div>
            <div className="flex items-center gap-3 text-amber-500/50 text-[10px] font-bold uppercase tracking-widest">
              <ShieldCheck size={16} /> 100% Seguro & Privado
            </div>
          </div>

          <div className="md:col-span-3 p-12">
            {status === "success" ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                <CheckCircle2 className="w-16 h-16 text-amber-600 mx-auto mb-6" />
                <h4 className="text-2xl font-bold text-stone-900 mb-2">Solicitação Enviada!</h4>
                <p className="text-stone-500 text-sm">Entraremos em contato em breve para confirmar seu horário.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">Nome Completo</label>
                  <input required name="nome" type="text" className="w-full bg-stone-50 border border-stone-100 rounded-2xl p-4 outline-none focus:border-amber-200 transition-colors" placeholder="Ex: Alisson Flaynn" />
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] font-black text-stone-400 uppercase tracking-widest ml-1">WhatsApp</label>
                  <input required name="whatsapp" type="tel" className="w-full bg-stone-50 border border-stone-100 rounded-2xl p-4 outline-none focus:border-amber-200 transition-colors" placeholder="(86) 99999-9999" />
                </div>

                <div className="flex gap-3 items-start p-4 bg-amber-50/50 rounded-2xl border border-amber-100/50">
                  <input type="checkbox" className="mt-1 accent-amber-600" id="lgpd" required />
                  <label htmlFor="lgpd" className="text-[11px] text-stone-500 leading-snug">
                    Autorizo o processamento dos meus dados para fins de agendamento clínico, conforme a <strong>LGPD</strong>. Meus dados sensíveis serão mantidos em sigilo absoluto.
                  </label>
                </div>

                <button 
                  disabled={status === "sending"}
                  className="w-full bg-stone-900 text-white font-bold py-5 rounded-2xl hover:bg-amber-600 transition-all shadow-xl flex items-center justify-center gap-3 group disabled:opacity-50"
                >
                  {status === "sending" ? "ENVIANDO..." : "SOLICITAR ORÇAMENTO"} 
                  {status === "idle" && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                </button>

                {status === "error" && (
                  <p className="text-red-500 text-[10px] font-bold text-center flex items-center justify-center gap-2">
                    <XCircle size={14} /> Ocorreu um erro. Tente novamente.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}