"use client";

import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 glass-effect border-b border-white/5">
      <div className="absolute inset-0 scanline opacity-20" />
      <div className="container mx-auto px-3 sm:px-6 h-14 sm:h-20 flex items-center justify-between relative">
        
        {/* HUD LOGO AREA */}
        <div className="relative p-1 sm:p-2 flex items-center gap-1.5 sm:gap-3">
          <div className="hud-corner hud-corner-tl" />
          <div className="hud-corner hud-corner-tr" />
          <div className="hud-corner hud-corner-bl" />
          <div className="hud-corner hud-corner-br" />
          <div className="text-base sm:text-2xl font-bold tracking-tighter text-white font-heading flex flex-col leading-none">
            <span className="text-glow-blue">BULL</span>
            <span className="text-secondary text-[7px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] mt-0.5 sm:mt-1 font-black">TRADERS</span>
          </div>
          
          <div className="h-5 sm:h-8 w-[1px] bg-white/10 mx-1 sm:mx-2" />
          
          {/* Status Indicator */}
          <div className="hidden lg:flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00ff7f] animate-pulse shadow-[0_0_8px_rgba(0,255,127,0.8)]" />
            <span className="text-[10px] text-white/40 uppercase tracking-widest font-medium">System Online</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          <a href="#hero" className="text-secondary hover:text-white transition-all font-medium text-[11px] lg:text-[13px] uppercase tracking-wider">Inicio</a>
          <a href="#results" className="text-secondary hover:text-white transition-all font-medium text-[11px] lg:text-[13px] uppercase tracking-wider">Resultados</a>
          <a href="#tutorial" className="text-secondary hover:text-white transition-all font-medium text-[11px] lg:text-[13px] uppercase tracking-wider">Guía</a>
        </div>

        <div className="flex items-center gap-1.5 sm:gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://bingxdao.com/invite/GZ1CEV"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex btn-apple-secondary text-[9px] lg:text-[10px] px-4 lg:px-6 py-2 uppercase tracking-widest font-black border-white/10 hover:border-[#00e5ff]/50 transition-colors"
          >
            Registro
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 229, 255, 0.3)" }}
            whileTap={{ scale: 0.95 }}
            href="https://chat.whatsapp.com/FL9Dfop2qcZ7n4f72sPhcK"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-apple text-[8px] sm:text-[10px] px-3 sm:px-8 py-1.5 sm:py-2.5 uppercase tracking-widest font-black border border-white/10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000" />
            Únete <span className="hidden xs:inline sm:inline">Ahora</span>
          </motion.a>
        </div>
      </div>
    </nav>
  );
};
