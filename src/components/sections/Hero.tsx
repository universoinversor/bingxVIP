"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { ArrowRight, ShieldCheck, TrendingUp } from "lucide-react";
import { Calculator } from "./Calculator";
import Image from "next/image";

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
      {/* Background Depth */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-[120px]" />
      </div>

      {/* FOUNDER PORTRAIT - High-end style */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-0 right-0 w-auto h-[95vh] pointer-events-none z-10 flex items-end hidden lg:flex select-none"
      >
        <div className="relative h-full w-[700px]">
           <Image 
             src="/assets/img/founder_portrait.png" 
             alt="Edwin Muñoz" 
             fill 
             priority
             className="object-contain object-bottom grayscale-[0.2]"
           />
           <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent opacity-80" />
           <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
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
               <ShieldCheck className="w-4 h-4 text-[#00e5ff]" />
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
               
               {/* Scanning bar effect */}
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
                   className="btn-apple text-sm px-14 py-5 flex items-center gap-3 group relative overflow-hidden uppercase tracking-[0.2em] font-black"
                 >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00e5ff]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
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
