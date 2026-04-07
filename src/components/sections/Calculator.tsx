"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

export const Calculator = () => {
  const [investment, setInvestment] = useState(1000);
  
  const monthlyProfit = useMemo(() => investment * 0.2, [investment]);
  const annualProfit = useMemo(() => {
    // Compound interest: A = P(1 + r)^n
    // Here r = 20% = 0.2, n = 12 months
    const total = investment * Math.pow(1.2, 12);
    return Math.floor(total - investment);
  }, [investment]);

  return (
    <div className="glass-card p-10 relative overflow-hidden border-white/10 shadow-2xl">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold tracking-tight text-white font-heading mb-2">
           Simulador de <span className="text-secondary">Proyección</span>
        </h3>
        <p className="text-secondary text-sm font-medium tracking-wide">Basado en rendimientos institucionales históricos</p>
      </div>

      <div className="space-y-12">
        <div className="space-y-8">
          <div className="flex justify-between items-end">
            <label className="text-secondary font-semibold uppercase tracking-widest text-[10px]">Capital Inicial</label>
            <div className="text-5xl font-bold text-white tracking-tighter font-heading">${investment.toLocaleString()}</div>
          </div>
          <input 
            type="range" 
            min="100" 
            max="10000" 
            step="100" 
            value={investment} 
            onChange={(e) => setInvestment(Number(e.target.value))}
            className="w-full h-1.5 bg-white/10 rounded-full appearance-none cursor-pointer accent-white"
          />
          <div className="flex justify-between text-[11px] font-medium text-white/20">
            <span>$100 USD</span>
            <span>$10,000 USD</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
          <div className="p-6 bg-white/5 rounded-3xl border border-white/5 space-y-2">
            <span className="text-[11px] font-bold text-secondary uppercase tracking-widest">Retorno Mensual</span>
            <div className="text-3xl font-bold text-white tracking-tight font-heading">+${monthlyProfit.toLocaleString()}</div>
            <p className="text-[11px] text-white/30 font-medium tracking-tight flex items-center gap-1">
               <TrendingUp className="w-3 h-3 text-emerald-400" />
               ROI: 20% Estimado
            </p>
          </div>
          <div className="p-6 bg-white/5 rounded-3xl border border-white/5 space-y-2">
            <span className="text-[11px] font-bold text-secondary uppercase tracking-widest">En 12 Meses:</span>
            <div className="text-3xl font-bold text-secondary tracking-tight font-heading">${(investment + annualProfit).toLocaleString()}</div>
            <p className="text-[11px] text-white/30 font-medium tracking-tight">Interés Compuesto</p>
          </div>
        </div>

        <motion.a 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="https://bingxdao.com/invite/GZ1CEV"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-6 btn-apple text-lg flex items-center justify-center gap-3"
        >
           Comenzar Ahora
           <ArrowRight className="w-5 h-5" />
        </motion.a>
      </div>
    </div>
  );
};
