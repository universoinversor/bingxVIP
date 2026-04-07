"use client";

import { motion } from "framer-motion";
import { Shield, CreditCard, Landmark, Zap, BarChart3, Medal } from "lucide-react";

const features = [
  {
    title: "Liquidez Institucional",
    value: "$500B+",
    desc: "Volumen diario negociado. La plataforma más líquida del mundo para copytrading.",
    icon: BarChart3
  },
  {
    title: "Patrocinador Oficial",
    value: "Chelsea FC",
    desc: "Alianza estratégica global con uno de los clubes más grandes de la Premier League.",
    icon: Medal
  },
  {
    title: "Seguridad Elite",
    value: "KYC & AML",
    desc: "Protocolos internacionales de seguridad y antilavado para proteger a los usuarios.",
    icon: Shield
  },
  {
    title: "Soporte Global",
    value: "100M+ Usuarios",
    desc: "Confianza masiva en más de 100 países con soporte regional 24/7.",
    icon: Globe
  }
];

function Globe({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <circle cx="12" cy="12" r="10" /><path d="M12 2a14.5 14.5 0 0 0 0 20" /><path d="M2 12h20" />
    </svg>
  );
}

export const BingXFeatures = () => {
  return (
    <section id="bingx-deep-dive" className="py-20 lg:py-40 bg-[#06080d] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 cyber-grid-overlay opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="relative inline-block border-l-4 border-[#00e5ff] pl-6 py-2">
               <h2 className="text-3xl md:text-6xl font-black italic tracking-tighter uppercase font-heading text-white leading-tight">
                 El Gigante <br />
                 <span className="text-secondary">detrás del Éxito</span>
               </h2>
               <div className="text-[10px] text-white/40 uppercase tracking-[0.5em] mt-6 font-black animate-pulse">BingX Institutional Partner</div>
            </div>
            
            <p className="text-white/60 text-xl font-light leading-relaxed max-w-xl italic">
              Fundada en 2018, BingX se ha consolidado como la plataforma de intercambio cripto social más grande del mundo, ofreciendo a inversores minoristas e institucionales acceso a mercados globales con seguridad de nivel bancario.
            </p>
            
            <div className="flex flex-wrap gap-8 items-center bg-white/5 p-8 rounded-2xl border border-white/5 backdrop-blur-3xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-blue-500/5 -translate-x-full group-hover:translate-x-full transition-transform duration-[3s]" />
               <img src="/assets/img/bingx_logo_white.png" alt="BingX" className="h-10 opacity-80" />
               <div className="h-10 w-[1px] bg-white/10 hidden md:block" />
               <div className="text-left">
                  <div className="text-white font-black text-2xl tracking-tighter uppercase font-heading text-glow-blue underline decoration-white/10 decoration-2">CHELSEA FC</div>
                  <div className="text-white/40 text-[9px] uppercase tracking-widest font-black">Official Strategic Partner</div>
               </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 relative">
            {features.map((feature, i) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="bg-white/5 p-8 border border-white/10 rounded-3xl relative group backdrop-blur-xl"
              >
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-20 transition-opacity">
                  <feature.icon size={48} className="text-[#00e5ff]" />
                </div>
                
                <div className="w-12 h-12 bg-[#00e5ff]/10 rounded-xl flex items-center justify-center text-[#00e5ff] mb-6">
                  <feature.icon size={24} strokeWidth={3} />
                </div>
                
                <h3 className="text-white font-black text-xs uppercase tracking-widest mb-2 opacity-40">{feature.title}</h3>
                <div className="text-white font-black text-3xl mb-4 tracking-tighter font-heading text-glow-blue">{feature.value}</div>
                <p className="text-white/40 text-xs font-medium leading-relaxed italic">{feature.desc}</p>
                
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-[#00e5ff]/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl pointer-events-none" />
              </motion.div>
            ))}
          </div>
        </div>

        {/* LIQUIDITY DATA TABLE - Cyber Style */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mt-32 p-8 border border-white/5 bg-black/40 rounded-3xl relative overflow-hidden"
        >
           <div className="flex flex-col md:flex-row items-center justify-between gap-10">
              <div className="text-left w-full md:w-auto">
                 <div className="text-[#00ff7f] text-[10px] font-black uppercase tracking-[0.5em] mb-2 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#00ff7f] animate-pulse" /> LIVE LIQUIDITY FEED
                 </div>
                 <div className="text-white font-black text-2xl tracking-tighter uppercase font-heading">OrderBook Depth</div>
              </div>
              
              <div className="flex-1 w-full flex flex-col gap-4">
                 <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden flex">
                    <div className="h-full bg-green-500 w-[65%]" />
                    <div className="h-full bg-red-500 w-[35%]" />
                 </div>
                 <div className="flex justify-between text-[8px] text-white/30 uppercase font-bold tracking-widest">
                    <span>institutional Bids: $12.4B</span>
                    <span>institutional Asks: $8.1B</span>
                 </div>
              </div>
              
              <motion.a 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 href="https://bingxdao.com/invite/GZ1CEV"
                 target="_blank"
                 className="px-10 py-4 bg-[#00e5ff] text-black font-black uppercase tracking-widest text-[10px] rounded-full shadow-[0_0_20px_rgba(0,229,255,0.3)] whitespace-nowrap"
              >
                 REGISTRARSE EN BINGX <Zap className="w-3 h-3 inline-block ml-2" />
              </motion.a>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
