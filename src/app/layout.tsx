import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

// 1. Definição das Fontes (Devem vir antes das exportações de config)
const sans = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

const serif = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair-display",
  display: "swap",
});

// 2. Configuração de Viewport
export const viewport: Viewport = {
  themeColor: "#FCFBF9",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

// 3. SEO e Metadados (Unificados em um único objeto)
export const metadata: Metadata = {
  metadataBase: new URL("https://clinica-estetica-premium.vercel.app"), 
  title: {
    default: "Clínica Estética Premium | Harmonização & Odonto em Teresina",
    template: "%s | Clínica Estética Premium"
  },
  description: "Referência em Teresina-PI em harmonização facial e estética avançada. Atendimento seguro conforme a LGPD.",
  keywords: ["estética teresina", "harmonização facial piauí", "segurança de dados médicos"],
  authors: [{ name: "Clínica Premium" }],
  creator: "Seu Nome ou Agência",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://www.clinicaesteticateresina.com.br",
    title: "Clínica Estética Premium | Teresina - PI",
    description: "Sua beleza tratada como obra de arte. Protocolos exclusivos de estética avançada.",
    siteName: "Clínica Estética Premium",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

// 4. Root Layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${sans.variable} ${serif.variable} font-sans antialiased bg-[#FCFBF9] text-stone-900`}>
        {children}
      </body>
    </html>
  );
}