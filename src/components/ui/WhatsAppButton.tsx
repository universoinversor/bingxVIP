"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-10 right-10 z-[100]">
      {/* Glow Pulse */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-20 animate-pulse" />
      
      <a 
        href="https://wa.me/573183002448?text=EDWIN%20VENGO%20HACER%20MUCHO%20DINERO%20EN%20BINGX%20CONTIGO" 
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all group"
      >
        <MessageCircle className="w-8 h-8 text-white fill-current" />
        
        {/* Label Popup */}
        <span className="absolute right-20 px-4 py-2 bg-black/80 backdrop-blur-md text-white text-[10px] font-black rounded border border-white/10 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-2xl">
           <span className="text-glow-green">Hablar con Edwin</span>
        </span>
      </a>
    </div>
  );
};
