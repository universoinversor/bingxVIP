"use client";

import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="py-20 bg-black border-t border-white/10 text-center md:text-left selection:bg-rose-600 selection:text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          <div className="text-3xl font-black text-white font-heading">BingX</div>
          
          <div className="flex gap-10 text-xs font-black uppercase tracking-widest text-slate-500">
            <a href="#" className="hover:text-primary transition-colors italic">Política de Privacidad</a>
            <a href="#" className="hover:text-primary transition-colors italic">Términos de Uso</a>
          </div>
        </div>

        <div className="p-8 bg-white/5 rounded-2xl border border-white/5 text-xs text-slate-500 max-w-4xl mx-auto md:mx-0 leading-relaxed font-bold italic">
          <p>
            <strong className="text-white uppercase mr-2">Disclaimer Financiero:</strong> 
            El trading de criptomonedas y derivados conlleva riesgos significativos. Opera con responsabilidad y solo con capital que puedas permitirte perder. BingX no ofrece asesoramiento financiero.
          </p>
        </div>

        <p className="mt-12 text-[10px] font-black uppercase tracking-[0.2em] text-slate-700 italic">
          &copy; 2026 BingX Partner. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};
