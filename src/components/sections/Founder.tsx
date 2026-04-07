"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote, ArrowRight } from "lucide-react";

export const Founder = () => {
  return (
    <section id="founder" className="py-20 lg:py-40 relative bg-black">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Portrait Col */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
             <div className="absolute inset-0 bg-white/5 blur-[120px] rounded-full scale-90" />
             <div className="relative group overflow-hidden rounded-[32px] lg:rounded-[40px] border border-white/10 aspect-[4/5] bg-white/5">
                <Image 
                  src="/assets/img/founder_portrait.png" 
                  alt="Edwin Muñoz - Fundador" 
                  fill 
                  className="w-full h-full object-cover object-top grayscale-[0.3] hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
                
                {/* Minimalist Legend */}
                <div className="absolute bottom-6 lg:bottom-8 left-6 lg:left-8 right-6 lg:right-8 glass-effect p-4 lg:p-6 rounded-2xl lg:rounded-3xl border-white/10">
                   <div className="text-secondary text-[10px] lg:text-[11px] font-bold uppercase tracking-widest mb-1">FOUNDER & CEO</div>
                   <div className="text-white font-bold text-xl lg:text-2xl tracking-tight">Edwin Muñoz</div>
                </div>
             </div>
          </motion.div>

          {/* Quote Col */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8 lg:space-y-12"
          >
             <Quote className="w-10 h-10 lg:w-12 lg:h-12 text-white opacity-20" />
             
             <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white leading-[1.1] font-heading text-balance">
                "No solo copies operaciones, <br />
                <span className="text-secondary">copia el éxito."</span>
             </h2>

             <p className="text-secondary text-xl md:text-2xl leading-relaxed font-light">
                Hemos democratizado el acceso al capital institucional. Lo que antes era exclusivo para unos pocos, hoy está en tus manos a través de nuestra infraestructura en BingX.
             </p>

             <div className="flex items-center gap-4 pt-4">
                <div className="h-[1px] w-12 bg-white/20" />
                <div className="text-white/40 font-medium uppercase tracking-[0.2em] text-[12px]">Liderazgo • Universo Inversor</div>
             </div>

             <div className="pt-8">
                <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="https://wa.me/573183002448" 
                  className="btn-apple text-lg px-12 py-5 inline-flex items-center gap-4 group"
                >
                   Seguir Estrategia Elite
                   <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
