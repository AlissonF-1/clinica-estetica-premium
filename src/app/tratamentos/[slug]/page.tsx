"use client";

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Calendar, Clock, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// --- DADOS DOS TRATAMENTOS (Simulando um banco de dados) ---
// As chaves devem bater exatamente com os links definidos no componente anterior
const TREATMENT_DETAILS: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  heroImg: string;
  benefits: string[];
  duration: string;
  recovery: string;
  results: string;
  faq: { q: string; a: string }[];
}> = {
  "harmonizacao-facial": {
    title: "Harmonização Facial",
    subtitle: "Realce sua beleza natural com equilíbrio e simetria.",
    description: "A harmonização facial não é sobre transformar quem você é, mas sobre realçar seus melhores traços. Utilizamos um conjunto de procedimentos estéticos combinados (preenchedores, toxina botulínica, fios de sustentação) para equilibrar as proporções do rosto, corrigir assimetrias e promover um rejuvenescimento global, sempre priorizando a naturalidade.",
    heroImg: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2070",
    duration: "45 a 90 minutos",
    recovery: "Imediata a 3 dias (edema leve)",
    results: "Imediatos, com auge em 15-30 dias",
    benefits: [
      "Definição do contorno mandibular",
      "Correção de 'bigode chinês' e olheiras",
      "Restauração do volume perdido",
      "Aparência mais descansada e jovial"
    ],
    faq: [
      { q: "O resultado fica artificial?", a: "Não. Nossa filosofia é 'menos é mais'. Buscamos a melhor versão do seu próprio rosto." },
      { q: "Quanto tempo dura?", a: "Depende dos produtos utilizados, variando geralmente de 12 a 24 meses." }
    ]
  },
  "lentes-de-contato": {
    title: "Lentes de Contato",
    subtitle: "O sorriso perfeito desenhado digitalmente para você.",
    description: "Lâminas ultra-finas de porcelana ou resina, projetadas através de tecnologia 3D para corrigir cor, formato, tamanho e posição dos dentes. É o procedimento ideal para quem busca um sorriso de alto padrão, branco e alinhado, com durabilidade excepcional e resistência.",
    heroImg: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1974",
    duration: "2 a 3 sessões",
    recovery: "Nenhuma (procedimento minimamente invasivo)",
    results: "Definitivos (manutenção anual)",
    benefits: [
      "Correção de dentes manchados ou amarelados",
      "Fechamento de espaços (diastemas)",
      "Sorriso harmônico e simétrico",
      "Alta resistência a manchas futuras"
    ],
    faq: [
      { q: "Precisa desgastar o dente?", a: "O desgaste é mínimo e seletivo, apenas o necessário para o encaixe perfeito da lente." },
      { q: "Posso comer de tudo?", a: "Sim, as lentes têm resistência comparável ao esmalte dental natural." }
    ]
  },
  "bioestimuladores": {
    title: "Bioestimuladores",
    subtitle: "Pele firme e rejuvenescida de dentro para fora.",
    description: "Bioestimuladores são substâncias injetáveis que, ao serem absorvidas pelo organismo, provocam uma reação inflamatória controlada que estimula os fibroblastos a produzirem novo colágeno. O resultado é uma pele mais firme, espessa e com menos flacidez, tanto no rosto quanto no corpo.",
    heroImg: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070",
    duration: "30 a 60 minutos",
    recovery: "Imediata, pode haver leves hematomas",
    results: "Progressivos (pico em 3 meses)",
    benefits: [
      "Melhora da flacidez facial e corporal",
      "Efeito lifting natural",
      "Melhora da qualidade e textura da pele",
      "Resultados duradouros (até 2 anos)"
    ],
    faq: [
      { q: "Qual a diferença para o preenchimento?", a: "O preenchedor dá volume. O bioestimulador trata a flacidez e a qualidade da pele." },
      { q: "Onde pode ser aplicado?", a: "Rosto, pescoço, mãos, abdômen, glúteos e coxas." }
    ]
  },
  "protocolos-vip": {
    title: "Protocolos VIP",
    subtitle: "Experiência exclusiva e atendimento premium.",
    description: "Um serviço desenhado para pacientes exigentes que valorizam privacidade, conforto e otimização de tempo. Nossos Protocolos VIP oferecem horários estendidos, sala de espera privativa, concierge dedicado e a possibilidade de realizar múltiplos procedimentos em uma única sessão intensiva (Day Clinic).",
    heroImg: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070",
    duration: "Personalizado (Day Clinic)",
    recovery: "Acompanhamento pós-procedimento 24h",
    results: "Experiência de alto luxo e eficiência",
    benefits: [
      "Horários flexíveis (noite/fim de semana)",
      "Privacidade total garantida",
      "Serviço de concierge e catering",
      "Otimização de tratamentos em visita única"
    ],
    faq: [
      { q: "Como agendar?", a: "O agendamento é feito através de uma linha exclusiva de atendimento concierge." },
      { q: "Inclui transporte?", a: "Dispomos de serviço de motorista parceiro mediante solicitação prévia." }
    ]
  }
};

// --- COMPONENTE PRINCIPAL ---
export default function TreatmentDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;
  const [data, setData] = useState<typeof TREATMENT_DETAILS[string] | null>(null);

  useEffect(() => {
    if (slug && TREATMENT_DETAILS[slug]) {
      setData(TREATMENT_DETAILS[slug]);
    } else if (slug) {
      // Opcional: Redirecionar para 404 se o slug não existir
      // router.push('/404'); 
    }
  }, [slug, router]);

  if (!data) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-stone-50">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-8 bg-amber-600 rounded-full mb-4"></div>
          <p className="text-stone-400 font-serif">Carregando detalhes...</p>
        </div>
      </div>
    );
  }

  return (
    <article className="bg-white min-h-screen pb-20">
      {/* HEADER / HERO */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <Image
          src={data.heroImg}
          alt={data.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/90 via-stone-900/40 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link 
              href="/#tratamentos" // Volta para a âncora na home
              className="inline-flex items-center gap-2 text-white/80 hover:text-amber-400 transition-colors mb-6 text-sm uppercase tracking-widest font-bold"
            >
              <ArrowLeft size={16} /> Voltar para Tratamentos
            </Link>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-2 italic">
              {data.title}
            </h1>
            <p className="text-xl text-stone-200 font-light max-w-2xl">
              {data.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* COLUNA PRINCIPAL (ESQUERDA) */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-2 space-y-12"
          >
            {/* Descrição */}
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl shadow-stone-200/50 border border-stone-100">
              <h2 className="text-2xl font-bold text-stone-900 mb-6 flex items-center gap-3">
                <span className="w-8 h-[2px] bg-amber-600 block"></span>
                Sobre o Procedimento
              </h2>
              <p className="text-stone-600 leading-relaxed text-lg">
                {data.description}
              </p>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
                <InfoCard icon={<Clock size={20}/>} label="Duração da Sessão" value={data.duration} />
                <InfoCard icon={<Calendar size={20}/>} label="Tempo de Recuperação" value={data.recovery} />
                <InfoCard icon={<ShieldCheck size={20}/>} label="Resultados Esperados" value={data.results} />
              </div>
            </div>

            {/* FAQ */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-stone-900">Perguntas Frequentes</h3>
              <div className="grid gap-4">
                {data.faq.map((item, i) => (
                  <div key={i} className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                    <h4 className="font-bold text-stone-800 mb-2">{item.q}</h4>
                    <p className="text-stone-600 text-sm">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SIDEBAR (DIREITA) */}
          <motion.aside 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Card de Benefícios */}
            <div className="bg-stone-900 text-white p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-amber-600/20 rounded-full blur-2xl"></div>
              
              <h3 className="text-xl font-serif italic mb-6">Principais Benefícios</h3>
              <ul className="space-y-4">
                {data.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-300 text-sm">
                    <CheckCircle2 className="text-amber-500 shrink-0 mt-0.5" size={18} />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Agendamento */}
            <div className="bg-amber-50 p-8 rounded-3xl border border-amber-100 text-center sticky top-8">
              <h3 className="text-amber-900 font-bold text-lg mb-2">Interessado neste tratamento?</h3>
              <p className="text-amber-800/70 text-sm mb-6">Agende uma avaliação personalizada para descobrir se este é o protocolo ideal para você.</p>
              
              <button className="w-full py-4 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-bold uppercase tracking-widest text-xs transition-all shadow-lg shadow-amber-600/20 hover:shadow-amber-600/40">
                Agendar Avaliação
              </button>
              <p className="text-[10px] text-amber-800/50 mt-4 uppercase tracking-widest font-semibold">
                Atendimento em Teresina
              </p>
            </div>
          </motion.aside>

        </div>
      </div>
    </article>
  );
}

// Pequeno componente auxiliar para os cards de informação
const InfoCard = ({ icon, label, value }: { icon: React.ReactNode, label: string, value: string }) => (
  <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-xl">
    <div className="text-amber-600 bg-white p-2 rounded-lg shadow-sm">
      {icon}
    </div>
    <div>
      <h4 className="text-xs font-bold text-stone-400 uppercase tracking-wider mb-1">{label}</h4>
      <p className="text-stone-800 font-medium text-sm">{value}</p>
    </div>
  </div>
);