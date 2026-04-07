"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faq = [
  {
    q: "¿Necesito experiencia para empezar?",
    a: "No. El Copy Trading está diseñado precisamente para principiantes. Tú copias a expertos que ya saben operar."
  },
  {
    q: "¿Es seguro mi dinero en BingX?",
    a: "Sí. BingX es un exchange regulado y cuenta con un fondo de protección para usuarios, además de auditorías constantes."
  },
  {
    q: "¿Puedo retirar mi dinero cuando quiera?",
    a: "Absolutamente. Tus fondos no están bloqueados. Puedes retirar tus ganancias o tu capital en cualquier momento."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-black/40">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-16 text-white font-heading">
          Preguntas <span className="text-secondary">Frecuentes</span>
        </h2>

        <div className="space-y-4">
           {faq.map((item, i) => (
              <div 
                key={i} 
                className="glass-effect rounded-2xl overflow-hidden border-white/5 bg-white/5 cursor-pointer group hover:bg-white/10 transition-all text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                 <div className="p-6 flex items-center justify-between">
                    <span className="text-lg font-bold text-white uppercase italic tracking-widest">{item.q}</span>
                    <ChevronDown className={`w-6 h-6 text-primary transition-transform ${openIndex === i ? 'rotate-180' : ''}`} />
                 </div>
                 {openIndex === i && (
                    <motion.div 
                       initial={{ height: 0, opacity: 0 }}
                       animate={{ height: "auto", opacity: 1 }}
                       className="px-6 pb-6 text-slate-500 font-bold italic text-sm border-t border-white/5 pt-4"
                    >
                       {item.a}
                    </motion.div>
                 )}
              </div>
           ))}
        </div>

        <div className="mt-12 text-center">
            <a 
              href="https://bingxdao.com/invite/GZ1CEV"
              target="_blank"
              rel="noopener noreferrer"
              className="px-12 py-5 bg-primary text-white font-black rounded-2xl text-lg uppercase tracking-widest btn-glow shadow-primary/40 inline-flex items-center gap-4"
            >
               Crear Cuenta Gratis Ahora
            </a>
        </div>
      </div>
    </section>
  );
};
