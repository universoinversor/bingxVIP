"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { Gauge, Zap, Trophy, ShieldCheck, ArrowUpRight } from "lucide-react";

export const RacingSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const carX = useTransform(scrollYProgress, [0, 1], ["100%", "-100%"]);
  const carScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);
  const textY = useTransform(scrollYProgress, [0, 1], ["20px", "-20px"]);

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-[#030712] selection:bg-rose-600 selection:text-white">
      {/* Background Decorative Elements Ferrari Style */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-rose-600/20 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          {/* Driver Portrait Re-integrated */}
          <div className="relative group overflow-hidden rounded-[32px] border border-white/10 glass-effect">
            <div className="relative h-[600px]">
              <img 
                src="/assets/img/ferrari_driver.png" 
                alt="BingX Ferrari Partner" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-10 left-10 p-6 glass-effect rounded-2xl border-rose-600/30">
                 <div className="text-rose-500 text-[10px] font-black uppercase tracking-widest mb-1 italic">Official Partner</div>
                 <div className="text-white text-2xl font-black italic tracking-tighter uppercase font-heading">Scuderia Ferrari</div>
              </div>
            </div>
          </div>

          <motion.div style={{ y: textY }} className="space-y-10">
            <div className="flex items-center gap-6 mb-10">
               <div className="w-16 h-16 rounded-2xl bg-rose-600 flex items-center justify-center p-3 shadow-[0_0_20px_rgba(225,29,72,0.4)]">
                  <Image src="/assets/img/ferrari_driver.png" alt="Ferrari Logo" width={60} height={60} className="object-contain brightness-0 invert" />
               </div>
               <div className="text-white text-3xl font-black italic tracking-tighter uppercase font-heading">/// Scuderia <span className="text-rose-600">Ferrari</span> ///</div>
            </div>

            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-[0.8] text-white">
              Velocidad y <br />
              <span className="text-rose-600 drop-shadow-[0_0_30px_rgba(225,29,72,0.3)]">Precisión</span>
            </h2>

            <p className="text-slate-500 text-lg md:text-xl max-w-xl leading-relaxed font-bold italic border-l-4 border-rose-600 pl-6">
              Cada milisegundo cuenta. BingX te ofrece la infraestructura para ejecutar operaciones con la precisión de un cambio de neumáticos en F1.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
               {[
                 { icon: "🏎️", text: "Baja Latencia" },
                 { icon: "🏁", text: "Zero Slippage" },
                 { icon: "🛡️", text: "Seguridad Pro" },
                 { icon: "🏆", text: "Top Ranking" }
               ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.05, x: 10 }}
                    className="p-6 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-4 group cursor-pointer hover:bg-rose-600/10 transition-all font-heading"
                  >
                     <span className="text-3xl">{item.icon}</span>
                     <span className="text-white font-black text-sm uppercase italic tracking-widest">{item.text}</span>
                  </motion.div>
               ))}
            </div>

            <a 
              href="https://bingxdao.com/invite/GZ1CEV"
              className="px-12 py-6 bg-rose-600 text-white font-black rounded-[24px] hover:bg-rose-700 transition-all text-2xl uppercase italic tracking-tighter shadow-[0_0_30px_rgba(225,29,72,0.2)] flex items-center gap-4 group justify-center md:justify-start"
            >
              Únete al Equipo Élite 🚀
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
