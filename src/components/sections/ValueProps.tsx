"use client";

import { motion } from "framer-motion";

const props = [
  {
    icon: "🧠",
    title: "Smart Copy Trading",
    desc: "Elige traders verificados con historial real. Copia sus movimientos automáticamente."
  },
  {
    icon: "🛡️",
    title: "Seguridad Bancaria",
    desc: "Tus activos están asegurados. BingX publica Pruebas de Reservas (PoR) mensualmente."
  },
  {
    icon: "💸",
    title: "Comisiones Bajas",
    desc: "Opera con las tarifas más competitivas del mercado. Más ganancias para ti."
  }
];

export const ValueProps = () => {
  return (
    <section id="props" className="py-24 bg-black/40">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase mb-16 text-white font-heading">
          Tu dinero trabaja <span className="text-secondary underline decoration-primary/20 decoration-8 underline-offset-8">por ti</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
           {props.map((prop, i) => (
              <motion.div 
                key={prop.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="p-10 glass-effect rounded-[32px] border-white/5 bg-white/5 space-y-6 hover:bg-white/10 transition-all group"
              >
                 <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">{prop.icon}</div>
                 <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">{prop.title}</h3>
                 <p className="text-slate-500 font-medium leading-relaxed italic text-sm">{prop.desc}</p>
              </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};
