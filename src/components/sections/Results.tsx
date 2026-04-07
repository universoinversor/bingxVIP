"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, ShieldCheck, Globe } from "lucide-react";

const stats = [
  { label: "ROI Promedio Mensual", value: "+18.4%", icon: TrendingUp, color: "text-green-500" },
  { label: "Inversores Activos", value: "12,500+", icon: Users, color: "text-blue-500" },
  { label: "Capital Protegido", value: "100%", icon: ShieldCheck, color: "text-purple-500" },
  { label: "Cobertura Global", value: "100+ Países", icon: Globe, color: "text-[#00e5ff]" },
];

export const Results = () => {
  return (
    <section id="results" className="py-20 lg:py-32 relative overflow-hidden bg-black">
      {/* HUD Background elements */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00e5ff]/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00e5ff]/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-7xl font-black tracking-tighter uppercase font-heading text-white mb-6"
          >
            Resultados que <span className="text-glow-blue underline decoration-[#00e5ff]/20">Hablan</span>
          </motion.h2>
          <p className="text-secondary max-w-2xl mx-auto text-lg font-light tracking-wide italic">Transparencia absoluta en cada operación institucional.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 relative group overflow-hidden border-white/5 hover:border-[#00e5ff]/30"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                <stat.icon size={64} className={stat.color} />
              </div>
              
              <div className="hud-corner hud-corner-tl opacity-50" />
              <div className="hud-corner hud-corner-br opacity-50" />

              <div className="relative z-10">
                <div className={`text-5xl font-black mb-4 ${stat.color} tracking-tighter font-heading`}>
                  {stat.value}
                </div>
                <div className="text-white/40 uppercase tracking-[0.2em] text-[10px] font-black">
                  {stat.label}
                </div>
              </div>
              
              {/* Decorative scanline on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#00e5ff]/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-[2000ms] ease-linear pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* PERFORMANCE CHART PLACEHOLDER MOCKUP */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 glass-card p-8 border-white/5 relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
             <div className="text-left">
                <h3 className="text-xl font-bold text-white uppercase tracking-widest mb-2 font-heading">
                   Trading Performance <span className="text-[#00e5ff]">v2.1</span>
                </h3>
                <p className="text-white/20 text-[10px] uppercase tracking-[0.5em]">Real-time Institutional Data Feed</p>
             </div>
             <div className="flex gap-4">
                <div className="px-6 py-2 rounded border border-white/10 text-white/50 text-xs font-black uppercase tracking-widest bg-white/5">Q1-2026</div>
                <div className="px-6 py-2 rounded border border-blue-500/50 text-blue-500 text-xs font-black uppercase tracking-widest bg-blue-500/5">LIVE ACCURACY</div>
             </div>
          </div>
          
          <div className="h-[300px] w-full flex items-end justify-between gap-4">
             {[35, 55, 45, 85, 65, 95, 75, 100, 90, 80, 110, 130].map((h, i) => (
               <motion.div 
                 key={i}
                 initial={{ height: 0 }}
                 whileInView={{ height: `${h}%` }}
                 transition={{ delay: i * 0.05, duration: 1 }}
                 viewport={{ once: true }}
                 className="flex-1 bg-gradient-to-t from-blue-600/20 via-blue-400/40 to-[#00e5ff] rounded-t relative group"
               >
                 <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-[8px] font-black opacity-0 group-hover:opacity-100 transition-opacity">
                   +{h}%
                 </div>
               </motion.div>
             ))}
          </div>
          
          <div className="grid grid-cols-12 gap-2 mt-4 text-white/10 text-[8px] font-black uppercase tracking-tighter text-center">
             {["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"].map(m => (
               <div key={m} className="col-span-1">{m}</div>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
