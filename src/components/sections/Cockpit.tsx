"use client";

import { motion } from "framer-motion";
import { MessageCircle, Zap, ArrowRight } from "lucide-react";

export const Cockpit = () => {
  return (
    <section 
      id="cockpit" 
      className="py-40 bg-black relative overflow-hidden"
    >
      {/* Abstract Depth Layer */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 cyber-grid-overlay opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[#00e5ff] text-[12px] font-black tracking-[0.3em] mb-10 uppercase relative overflow-hidden"
        >
           <div className="absolute inset-0 scanline opacity-30 h-1" />
           <Zap className="w-4 h-4 fill-current animate-pulse" />
           Acceso Prioritario • v2.0
        </motion.div>

        <div className="relative inline-block mb-12">
           {/* HUD Brackets around heading */}
           <div className="hud-corner hud-corner-tl -translate-x-4 -translate-y-4 scale-150 border-white/20" />
           <div className="hud-corner hud-corner-tr translate-x-4 -translate-y-4 scale-150 border-white/20" />
           <div className="hud-corner hud-corner-bl -translate-x-4 translate-y-4 scale-150 border-white/20" />
           <div className="hud-corner hud-corner-br translate-x-4 translate-y-4 scale-150 border-white/20" />
           
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-5xl md:text-8xl font-black tracking-tighter text-white font-heading text-balance lg:px-20 leading-[0.85]"
           >
              Toma el <br />
              <span className="text-secondary text-glow-blue uppercase">Control Directo</span> <br />
              de tu Capital
           </motion.h2>
        </div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-white/60 text-lg md:text-2xl font-light max-w-3xl mx-auto leading-relaxed mb-20 tracking-wide"
        >
          Únete a la comunidad de <span className="text-white font-bold text-glow-blue">Edwin Muñoz</span>. Experimenta la precisión institucional que define el éxito en <span className="text-white font-black italic">BingX</span>.
        </motion.p>

        <div className="flex flex-col sm:flex-row justify-center gap-10 items-center">
            <motion.a 
              whileHover={{ scale: 1.05, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/573183002448?text=EDWIN%20VENGO%20HACER%20MUCHO%20DINERO%20EN%20BINGX%20CONTIGO" 
              className="group relative px-10 sm:px-16 py-5 sm:py-6 bg-white !text-black font-black rounded-full text-lg sm:text-xl flex items-center gap-6 shadow-[0_20px_50px_rgba(255,255,255,0.15)] transition-all overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              HABLAR CON EDWIN <MessageCircle className="w-7 h-7 fill-black" />
            </motion.a>
            
            <motion.a 
              whileHover={{ scale: 1.05, borderColor: "#00e5ff" }}
              whileTap={{ scale: 0.95 }}
              href="https://chat.whatsapp.com/FL9Dfop2qcZ7n4f72sPhcK"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 sm:px-16 py-5 sm:py-6 border border-white/20 text-white font-black rounded-full text-lg sm:text-xl hover:bg-white/5 transition-all flex items-center gap-6 group uppercase tracking-widest"
            >
              Unirse al Grupo <Zap className="w-7 h-7 group-hover:translate-x-2 transition-transform text-[#00e5ff]" />
            </motion.a>
        </div>
        
        <div className="mt-32 pt-10 border-t border-white/5 flex flex-wrap justify-center gap-12 text-[10px] text-white/20 uppercase tracking-[0.5em] font-black">
           <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> API: CONNECTED</span>
           <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> REGION: LATAM</span>
           <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-blue-500" /> TYPE: INSTITUTIONAL</span>
        </div>
      </div>
    </section>
  );
};
