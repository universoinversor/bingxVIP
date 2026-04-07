"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Carlos R.",
    role: "Inversionista de Criptomonedas",
    content: "Las señales de Bull Traders Elite han transformado mi portafolio. Nunca pensé que copiar estrategias fuera tan efectivo.",
    rating: 5,
    avatar: "👨‍💻"
  },
  {
    name: "Elena M.",
    role: "Emprendedora",
    content: "Edwin Muñoz explica todo de forma cristalina. La transparencia es lo que más valoro de esta comunidad.",
    rating: 5,
    avatar: "👩‍💼"
  },
  {
    name: "Andrés V.",
    role: "Trader Independiente",
    content: "He probado muchos grupos, pero ninguno como este. El interés compuesto realmente funciona si sigues el plan.",
    rating: 5,
    avatar: "📈"
  },
  {
    name: "Sonia G.",
    role: "Accionista",
    content: "La tecnología del tablero de mandos es increíble. Me siento en total control de mis inversiones.",
    rating: 5,
    avatar: "👩‍🔬"
  }
];

export const TestimonialScroller = () => {
  return (
    <section className="py-32 bg-[#030712] relative overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-20 space-y-4">
        <h2 className="text-4xl md:text-7xl font-black text-white italic tracking-tighter uppercase leading-none">
           LO QUE DICEN NUESTROS <br />
           <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary drop-shadow-[0_0_30px_rgba(0,229,255,0.3)]">
             INVERSIONISTAS
           </span>
        </h2>
        <p className="text-slate-500 text-lg md:text-xl font-medium max-w-xl mx-auto">
          Cientos de traders ya están operando con la metodología de <span className="text-white">Edwin Muñoz</span>.
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div
           animate={{ x: ["0%", "-50%"] }}
           transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
           className="flex items-center gap-8 whitespace-nowrap"
        >
          {[...testimonials, ...testimonials].map((testimonial, i) => (
             <div 
               key={i} 
               className="w-[400px] p-8 glass-effect rounded-[40px] border-white/5 relative group/card hover:border-primary/20 transition-all flex flex-col gap-6"
             >
                <div className="flex items-center gap-4">
                   <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl">
                      {testimonial.avatar}
                   </div>
                   <div>
                      <div className="text-white font-black uppercase italic tracking-widest text-sm">{testimonial.name}</div>
                      <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{testimonial.role}</div>
                   </div>
                </div>

                <div className="relative">
                   <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/10 group-hover/card:text-primary/20 transition-colors" />
                   <p className="text-slate-300 text-lg leading-relaxed italic font-medium whitespace-normal">
                      "{testimonial.content}"
                   </p>
                </div>

                <div className="flex gap-1">
                   {[...Array(testimonial.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                   ))}
                </div>
             </div>
          ))}
        </motion.div>
        
        {/* Gradient Overlays */}
        <div className="absolute inset-y-0 left-0 w-60 bg-gradient-to-r from-[#030712] to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-60 bg-gradient-to-l from-[#030712] to-transparent z-10" />
      </div>
    </section>
  );
};
