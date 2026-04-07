"use client";

import { motion } from "framer-motion";

const prices = [
  { name: "Bitcoin", price: "$65,432", change: "+2.4%", emoji: "🚀" },
  { name: "Ethereum", price: "$3,450", change: "+1.8%", emoji: "💎" },
  { name: "Solana", price: "$145", change: "+5.2%", emoji: "🔥" },
  { name: "Pepe", price: "$0.000008", change: "+12%", emoji: "📈" },
  { name: "Bitcoin", price: "$65,432", change: "+2.4%", emoji: "🚀" } // Seamless loop
];

export const Ticker = () => {
  return (
    <div className="w-full bg-black/40 border-y border-white/5 py-4 overflow-hidden whitespace-nowrap relative z-20">
      <motion.div 
        animate={{ x: [0, -1000] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="inline-flex gap-16 pr-16"
      >
        {prices.map((item, i) => (
          <div key={i} className="flex items-center gap-4 text-sm font-bold tracking-widest uppercase italic">
            <span className="text-xl">{item.emoji}</span>
            <span className="text-white">{item.name}:</span>
            <span className="text-secondary">{item.price}</span>
            <span className="text-emerald-500">({item.change})</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
