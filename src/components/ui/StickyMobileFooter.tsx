"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export const StickyMobileFooter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 w-full p-6 z-[60] md:hidden pointer-events-none"
        >
          <div className="container mx-auto max-w-sm pointer-events-auto">
            <a 
              href="https://bingxdao.com/invite/GZ1CEV"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-14 bg-[#00e5ff] text-black font-black rounded-2xl flex items-center justify-center text-sm uppercase tracking-[0.2em] shadow-[0_10px_40px_rgba(0,229,255,0.4)] relative group overflow-hidden border border-white/20"
            >
               <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
               <span className="relative z-10 flex items-center gap-2">
                 REGISTRARSE EN BINGX ⚡
               </span>
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
