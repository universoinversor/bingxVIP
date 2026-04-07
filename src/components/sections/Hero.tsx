"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";

// Floating BTC Particles Component
const BTCParticles = () => {
  const [particles, setParticles] = useState<any[]>([]);
  
  useEffect(() => {
    // Generate random particles
    const p = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 30 + 15,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 4
    }));
    setParticles(p);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: "110%", x: `${p.x}%`, opacity: 0 }}
          animate={{ 
            y: "-10%",
            opacity: [0, 0.7, 0.7, 0],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: p.duration, 
            repeat: Infinity, 
            delay: p.delay,
            ease: "linear" 
          }}
          className="absolute text-[#f7931a] drop-shadow-[0_0_10px_rgba(247,147,26,0.4)]"
          style={{ width: p.size, height: p.size }}
        >
           <svg viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
             <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.556.358 9.126 1.96 2.696 8.472-1.213 14.9.392c6.43 1.602 10.339 8.113 8.738 14.512zm-4.115-5.391c.315-2.107-1.29-3.239-3.486-3.993l.711-2.854-1.737-.433-.693 2.782c-.456-.114-.925-.221-1.39-.327l.699-2.805-1.738-.433-.711 2.854c-.38-.087-.751-.173-1.111-.264l.002-.007-2.399-.599-.463 1.858s1.29.296 1.263.315c.704.175.83.642.809 1.011l-.81 3.25c.049.013.111.031.18.058l-.183-.046-1.135 4.548c-.086.214-.306.535-.8.412.018.026-1.263-.315-1.263-.315l-.863 1.99 2.264.566c.421.106.833.214 1.238.312l-.718 2.883 1.737.433.711-2.852c.475.129.936.252 1.383.367l-.703 2.825 1.738.433.718-2.88c2.964.561 5.192.335 6.13-2.348.755-2.159-.036-3.404-1.597-4.214 1.137-.262 1.993-1.011 2.222-2.559zm-3.974 5.584c-.538 2.16-4.177 1.016-5.354.723l.955-3.83c1.177.294 4.975.874 4.399 3.107zm.54-5.617c-.49 1.963-3.488.966-4.469.722l.865-3.47c.981.243 4.129.7 3.604 2.748z" />
           </svg>
        </motion.div>
      ))}
    </div>
  );
};

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // Mouse Tracking for subtle parallax
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  
  const tiltX = useTransform(springY, [0, 1], [-2, 2]);
  const tiltY = useTransform(springX, [0, 1], [2, -2]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth);
      mouseY.set(e.clientY / innerHeight);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section 
      ref={containerRef} 
      id="hero" 
      className="relative min-h-screen pt-24 lg:pt-32 pb-16 lg:pb-20 flex items-center justify-center overflow-hidden bg-black"
    >
      <BTCParticles />

      {/* Background Depth */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]" />
      </div>

      {/* HOLOGRAPHIC FOUNDER PORTRAIT - Floating in background */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ 
          opacity: [0.3, 0.5, 0.3],
          scale: 1,
          y: [0, -15, 0]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut"
        }}
        className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 px-4"
      >
        <div className="relative w-full max-w-[800px] aspect-square lg:aspect-auto lg:h-[90vh] lg:w-[800px]">
           <Image 
             src="/assets/img/founder_portrait.png" 
             alt="Edwin Muñoz Hologram" 
             fill 
             priority
             className="object-contain object-center lg:object-right-bottom mix-blend-screen opacity-60 grayscale-[1] brightness-[1.8] contrast-[1.4]"
             style={{ 
               filter: "drop-shadow(0 0 30px #00e5ff) hue-rotate(160deg)" 
             }}
           />
           {/* Scanlines overlay for the hologram */}
           <div className="absolute inset-0 bg-scanlines opacity-40" />
           <motion.div 
              animate={{ opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 0.15, repeat: Infinity }}
              className="absolute inset-0 bg-[#00e5ff]/10 pointer-events-none" 
           />
        </div>
      </motion.div>

      <div className="container mx-auto px-6 relative z-30">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content Area */}
          <div className="lg:col-span-12 xl:col-span-12 text-center flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-[13px] font-medium tracking-tight mb-8 relative"
            >
               <div className="absolute inset-0 bg-white/5 animate-pulse rounded-full" />
               <Zap className="w-4 h-4 text-[#00e5ff]" />
               Estrategias Verificadas • By Edwin Muñoz
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-[44px] sm:text-7xl md:text-8xl lg:text-[140px] font-bold leading-[0.95] sm:leading-[0.9] text-white tracking-tighter font-heading text-gradient text-balance relative"
            >
               Universo <br />
               <span className="text-white/40 text-glow-blue">Inversor</span>
               
               <motion.div 
                 animate={{ top: ["0%", "100%", "0%"] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                 className="absolute left-0 w-full h-[2px] bg-[#00e5ff]/30 blur-[1px] z-10 pointer-events-none hidden lg:block"
               />
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-secondary text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto mt-12 leading-relaxed font-light tracking-wide"
            >
               Eleva tu capital con la precisión de la élite. <br />
               <span className="text-white font-medium text-glow-blue uppercase tracking-widest text-sm mt-4 block">Inversión institucional, accesible para ti.</span>
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-8 items-center justify-center mt-16"
            >
               <div className="relative group">
                 <div className="hud-corner hud-corner-tl opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="hud-corner hud-corner-tr opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="hud-corner hud-corner-bl opacity-0 group-hover:opacity-100 transition-opacity" />
                 <div className="hud-corner hud-corner-br opacity-0 group-hover:opacity-100 transition-opacity" />
                 <a 
                   href="https://chat.whatsapp.com/FL9Dfop2qcZ7n4f72sPhcK"
                   className="bg-[#00e5ff] text-black text-[12px] px-14 py-5 flex items-center justify-center gap-3 group relative overflow-hidden uppercase tracking-[0.2em] font-black rounded-full"
                 >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    Empezar ahora
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                 </a>
               </div>
               
               <div className="relative group">
                 <a 
                   href="#traders"
                   className="btn-apple-secondary text-sm px-14 py-5 uppercase tracking-[0.2em] font-bold border-white/5 hover:border-[#00e5ff]/50 transition-colors"
                 >
                    Ver resultados
                 </a>
               </div>
            </motion.div>

            {/* Stats Summary */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-12 lg:mt-20 flex flex-wrap justify-center gap-8 lg:gap-12 text-white/40 text-[10px] sm:text-sm uppercase tracking-[0.2em] font-medium"
            >
               <div className="flex flex-col items-center">
                  <span className="text-2xl text-white font-heading tracking-normal mb-1">99.9%</span>
                  Precisión
               </div>
               <div className="h-10 w-[1px] bg-white/10 hidden sm:block" />
               <div className="flex flex-col items-center">
                  <span className="text-2xl text-white font-heading tracking-normal mb-1">+500</span>
                  Inversores
               </div>
               <div className="h-10 w-[1px] bg-white/10 hidden sm:block" />
               <div className="flex flex-col items-center">
                  <span className="text-2xl text-white font-heading tracking-normal mb-1">24/7</span>
                  Soporte Elite
               </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
