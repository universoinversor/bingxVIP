"use client";

import { motion } from "framer-motion";
import { Star, TrendingUp, Users, ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";

const traders = [
  {
    name: "Alpha Prime",
    badge: "INSTITUTIONAL",
    roi: "+452.8%",
    winRate: "92%",
    copiers: "3,421",
    seed: "AlphaPrime",
    featured: false,
  },
  {
    name: "Lumina Alpha",
    badge: "VERIFIED ELITE",
    roi: "+890.4%",
    winRate: "96%",
    copiers: "8,105",
    seed: "Lumina",
    featured: true,
  },
  {
    name: "Safe Horizon",
    badge: "LOW VOLATILITY",
    roi: "+125.2%",
    winRate: "99%",
    copiers: "12,504",
    seed: "SafeHorizon",
    featured: false,
  }
];

export const Elite = () => {
  return (
    <section id="traders" className="py-32 relative bg-black">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white font-heading mb-8"
          >
            Nuestros <span className="text-secondary">Estrategas Elite</span>
          </motion.h2>
          <p className="text-secondary text-lg md:text-xl font-light leading-relaxed">
            Accede a las estrategias de los traders con mayor consistencia en el mercado institucional.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {traders.map((trader, i) => (
            <motion.div 
              key={trader.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={`glass-card p-8 flex flex-col relative ${trader.featured ? 'border-white/20' : ''}`}
            >
              {trader.featured && (
                 <div className="absolute top-6 right-6 px-3 py-1 bg-white text-black text-[10px] font-bold rounded-full uppercase tracking-wider z-20">
                    MOST COPIED
                 </div>
              )}

              <div className="flex items-center gap-5 mb-10">
                <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white/5 border border-white/10 p-1">
                  <img 
                    src={`https://api.dicebear.com/9.x/avataaars/svg?seed=${trader.seed}`} 
                    alt={trader.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="text-left">
                   <h3 className="text-xl font-semibold text-white tracking-tight">{trader.name}</h3>
                   <span className="text-secondary text-[11px] font-bold uppercase tracking-widest">{trader.badge}</span>
                </div>
              </div>

              <div className="space-y-6 mb-12 flex-grow">
                 <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <span className="text-secondary text-sm font-medium">ROI (30d)</span>
                    <span className="text-white font-bold text-xl">{trader.roi}</span>
                 </div>
                 <div className="flex justify-between items-center pb-4 border-b border-white/5">
                    <span className="text-secondary text-sm font-medium">Win Rate</span>
                    <span className="text-white font-bold text-xl">{trader.winRate}</span>
                 </div>
                 <div className="flex justify-between items-center">
                    <span className="text-secondary text-sm font-medium">Inversores</span>
                    <span className="text-white font-bold text-xl">{trader.copiers}</span>
                 </div>
              </div>

              <motion.a 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="https://bingxdao.com/invite/GZ1CEV"
                className={`w-full py-4 rounded-full font-bold text-sm text-center transition-all ${trader.featured ? 'btn-apple' : 'btn-apple-secondary'}`}
              >
                Copiar Estrategia
              </motion.a>

            </motion.div>
          ))}
        </div>

        <div className="mt-20 text-center">
            <a href="https://bingxdao.com/invite/GZ1CEV" className="inline-flex items-center gap-2 text-white/40 hover:text-white transition-all text-sm font-medium uppercase tracking-[0.2em] group">
                Ver Ranking Institucional
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
      </div>
    </section>
  );
};
