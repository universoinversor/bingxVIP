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
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 w-full p-4 z-[60] md:hidden"
        >
          <a 
            href="https://bingxdao.com/invite/GZ1CEV"
            className="w-full h-16 bg-primary text-white font-black rounded-2xl flex items-center justify-center text-lg uppercase tracking-widest shadow-[0_-10px_30px_rgba(0,86,210,0.3)] btn-glow"
          >
             🚀 Empezar a Copiar
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
