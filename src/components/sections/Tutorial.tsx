"use client";

import { motion } from "framer-motion";
import { Users, CreditCard, Zap } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "REGISTRO ELITE",
    desc: "Crea tu cuenta oficial bajo nuestra red para beneficios exclusivos. Solo necesitas un correo.",
    cta: "REGISTRARSE EN BINGX",
    link: "https://bingxdao.com/invite/GZ1CEV",
    icon: Users
  },
  {
    num: "02",
    title: "FONDEO ESTRATÉGICO",
    desc: "Deposita mediante P2P, tarjeta o transferencia cripto. Mínimo recomendado: $100 USD.",
    cta: "SOPORTE DEPÓSITO",
    link: "https://chat.whatsapp.com/FL9Dfop2qcZ7n4f72sPhcK",
    icon: CreditCard
  },
  {
    num: "03",
    title: "COPYTRADING ACTIVO",
    desc: "Únete a nuestro grupo y activa el copiado automático con un solo clic. ¡Gana mientras duermes!",
    cta: "UNIRSE AL GRUPO VIP",
    link: "https://chat.whatsapp.com/FL9Dfop2qcZ7n4f72sPhcK",
    icon: Zap
  }
];

export const Tutorial = () => {
  return (
    <section id="tutorial" className="py-16 lg:py-40 bg-[#06080d] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 cyber-grid-overlay opacity-20" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] font-black tracking-[0.5em] mb-12 uppercase"
        >
           ELITE ROADMAP • STEP-BY-STEP
        </motion.div>

        <h2 className="text-4xl sm:text-5xl md:text-8xl font-black italic tracking-tighter uppercase mb-16 lg:mb-24 text-white font-heading text-glow-blue leading-none">
          CÓMO <span className="text-secondary underline decoration-[#00e5ff]/20 underline-offset-8">EMPEZAR</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
          <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent hidden lg:block -translate-y-1/2" />
          
          {steps.map((step, i) => (
            <motion.div 
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="relative z-10 glass-card p-8 sm:p-12 border-white/5 group hover:border-[#00e5ff]/20 transition-all duration-500"
            >
              <div className="hud-corner hud-corner-tl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="hud-corner hud-corner-br opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/5 rounded-3xl flex items-center justify-center text-3xl sm:text-4xl font-black text-white shadow-2xl mx-auto border border-white/10 mb-8 sm:mb-10 relative group-hover:scale-110 transition-transform">
                <div className="absolute inset-0 bg-[#00e5ff]/10 rounded-3xl animate-pulse opacity-50" />
                <span className="text-glow-blue z-10">{step.num}</span>
              </div>
              
              <h3 className="text-xl sm:text-2xl font-black text-white italic uppercase tracking-tighter mb-4 font-heading">{step.title}</h3>
              <p className="text-white/40 text-[13px] sm:text-sm font-medium leading-relaxed tracking-wide mb-8 sm:mb-10 max-w-[280px] mx-auto italic">{step.desc}</p>
              
              <motion.a 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={step.link}
                target={step.link.startsWith("http") ? "_blank" : undefined}
                className="block w-full py-4 px-6 bg-white text-black font-black uppercase tracking-widest text-[9px] sm:text-[10px] rounded-full border border-white shadow-[0_10px_30px_rgba(255,255,255,0.1)] group-hover:shadow-[0_10px_40px_rgba(255,255,255,0.2)] transition-all"
              >
                 {step.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 lg:mt-24 p-6 sm:p-8 bg-blue-500/5 rounded-3xl border border-blue-500/20 flex flex-col sm:flex-row items-center gap-6">
           <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 shrink-0">
              <Zap size={24} className="fill-current" />
           </div>
           <div className="text-center sm:text-left flex-1">
              <div className="text-white font-black text-sm uppercase tracking-widest mb-1">¿Necesitas asistencia técnica?</div>
              <div className="text-white/40 text-[11px] sm:text-xs font-medium italic">Nuestro soporte regional está disponible 24/7 para ayudarte en el proceso.</div>
           </div>
           <a href="https://chat.whatsapp.com/FL9Dfop2qcZ7n4f72sPhcK" className="text-blue-500 font-black text-[11px] sm:text-xs uppercase tracking-[0.2em] hover:underline underline-offset-4 whitespace-nowrap">CONTACTAR SOPORTE →</a>
        </div>
      </div>
    </section>
  );
};
