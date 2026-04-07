"use client";

import { motion } from "framer-motion";

const partners = ["Forbes", "Bloomberg", "CoinTelegraph", "TradingView"];

export const TrustSection = () => {
  return (
    <section id="trust" className="py-20 bg-black text-center">
      <div className="container mx-auto px-6">
        <p className="text-slate-500 font-black uppercase text-xs tracking-[0.3em] mb-12 italic">Más de 5 Millones de usuarios confían en BingX</p>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
           {partners.map((partner) => (
              <div key={partner} className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter italic font-heading">
                {partner}
              </div>
           ))}
        </div>
      </div>
    </section>
  );
};
