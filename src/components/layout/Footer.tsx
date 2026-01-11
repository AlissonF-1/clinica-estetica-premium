"use client";

import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          
          {/* Brand & LGPD Statement */}
          <div className="col-span-2">
            <div className="text-2xl font-light text-white mb-6 tracking-tighter">
              CLÍNICA<span className="font-serif italic text-amber-500">ESTÉTICA.</span>
            </div>
            <p className="max-w-sm mb-8 leading-relaxed">
              Referência em Teresina para tratamentos de alta performance com naturalidade e segurança.
            </p>
            {/* Nota de LGPD */}
            <div className="p-4 bg-stone-800/50 rounded-2xl border border-stone-700/50 text-[11px] leading-snug">
              <p><strong>Aviso de Privacidade (LGPD):</strong> Coletamos seus dados apenas para agendamento e comunicações clínicas. Seus dados estão protegidos sob protocolos de criptografia e não são compartilhados com terceiros. Ao entrar em contato, você concorda com nossa política de tratamento de dados sensíveis.</p>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Conexão</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 hover:text-white transition cursor-pointer">
                <Mail size={16} className="text-amber-600" /> contato@clinica.com.br
              </li>
              <li className="flex items-center gap-3 hover:text-white transition cursor-pointer">
                <Phone size={16} className="text-amber-600" /> +55 (86) 99999-9999
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-amber-600" /> Teresina, Piauí
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">Social</h4>
            <div className="flex gap-4">
              <div className="p-3 bg-stone-800 rounded-full hover:bg-amber-600 hover:text-white transition cursor-pointer">
                <Instagram size={20} />
              </div>
              <div className="p-3 bg-stone-800 rounded-full hover:bg-amber-600 hover:text-white transition cursor-pointer">
                <Facebook size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-12 flex flex-col md:row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-stone-600">
          <p>© 2026 Clínica Estética Premium. Todos os direitos reservados.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <span className="hover:text-stone-400 cursor-pointer">Política de Privacidade</span>
            <span className="hover:text-stone-400 cursor-pointer">Termos de Uso</span>
          </div>
        </div>
      </div>

      {/* Botão de WhatsApp Flutuante */}
      <a 
        href="https://wa.me/5586999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300"
      >
        <Phone size={24} fill="currentColor" />
      </a>
    </footer>
  );
}