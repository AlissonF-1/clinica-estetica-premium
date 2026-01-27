"use client";

import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 pt-24 pb-12 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 md:gap-16 mb-20">
          
          {/* Brand & LGPD Statement */}
          <div className="col-span-2">
            <div className="text-2xl font-light text-white mb-6 tracking-tighter">
              CLÍNICA<span className="font-serif italic text-amber-500">ESTÉTICA.</span>
            </div>
            <p className="max-w-sm mb-8 leading-relaxed text-sm md:text-base">
              Referência em Teresina para tratamentos de alta performance com naturalidade e segurança.
            </p>
            {/* Nota de LGPD */}
            <div className="p-4 bg-stone-800/50 rounded-2xl border border-stone-700/50 text-[10px] md:text-[11px] leading-snug">
              <p><strong>Aviso de Privacidade (LGPD):</strong> Coletamos seus dados apenas para agendamento e comunicações clínicas. Seus dados estão protegidos sob protocolos de criptografia e não são compartilhados com terceiros. Ao entrar em contato, você concorda com nossa política de tratamento de dados sensíveis.</p>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6 md:mb-8">Conexão</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3 hover:text-white transition cursor-pointer group">
                <Mail size={16} className="text-amber-600 group-hover:text-amber-500 transition" /> 
                <span className="break-all">contato@clinica.com.br</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition cursor-pointer group">
                <Phone size={16} className="text-amber-600 group-hover:text-amber-500 transition" /> 
                <span>+55 (86) 98876-7843</span>
              </li>
              <li className="flex items-center gap-3 group">
                <MapPin size={16} className="text-amber-600" /> 
                <span>Teresina, Piauí</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-6 md:mb-8">Social</h4>
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

        <div className="border-t border-stone-800 pt-12 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-widest text-stone-600 gap-4 text-center md:text-left">
          <p>© 2026 Clínica Estética Premium. Todos os direitos reservados. Alisson Flaynn</p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <span className="hover:text-stone-400 cursor-pointer">Política de Privacidade</span>
            <span className="hover:text-stone-400 cursor-pointer">Termos de Uso</span>
          </div>
        </div>
      </div>

      {/* BOTÃO WHATSAPP FLUTUANTE 
         - Ícone SVG original
         - Adicionei 'z-50' para garantir que fique acima de tudo
         - Adicionei 'aria-label' para acessibilidade e SEO
      */}
      <a 
        href="https://wa.me/5586988767843" 
        target="_blank" 
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-6 right-4 md:bottom-8 md:right-8 z-50 flex items-center justify-center bg-[#25D366] text-white w-14 h-14 md:w-16 md:h-16 rounded-full shadow-2xl hover:scale-110 hover:brightness-110 transition-all duration-300"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="32" 
          height="32" 
          viewBox="0 0 24 24" 
          fill="white"
          className="md:w-9 md:h-9" // Ajuste fino de tamanho do ícone interno
        >
           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </footer>
  );
}