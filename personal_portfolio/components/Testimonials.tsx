"use client";

import { motion } from 'framer-motion';

const testimonialsData = [
  {
    name: "Sarah Jenkins",
    role: "Product Manager at TechFlow",
    content: "Working with Tanjila was an absolute pleasure. Her attention to detail in UI/UX design and frontend implementation brought our product to life beyond expectations.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    name: "David Miller",
    role: "Creative Director",
    content: "Tanjila has a rare blend of strong graphic design aesthetics and solid technical frontend skills. The portfolio and web apps she builds are exceptionally smooth and modern.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
  {
    name: "Alex Rivera",
    role: "Startup Founder",
    content: "The dark mode and glassmorphism styling she implemented for our platform blew our users away. Highly professional, responsive, and incredibly talented!",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-transparent transition-colors duration-500">
      
      {/* Background Glow Accents */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-blue-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-200/50 dark:bg-slate-900/90 border border-blue-300 dark:border-cyan-500/40 backdrop-blur-md mb-4 shadow-sm">
            <span className="text-blue-700 dark:text-cyan-400 font-medium tracking-[0.2em] text-[10px] sm:text-xs uppercase">
              Client Feedback
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            What People <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400">Say</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonialsData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                transition: { duration: 0.2 } 
              }}
              className="bg-white dark:bg-[#0f1f4b] border border-blue-200 dark:border-cyan-500/50 rounded-3xl p-8 shadow-2xl dark:shadow-[0_0_35px_rgba(14,165,233,0.25)] flex flex-col justify-between transition-colors relative group"
            >
              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(item.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400 fill-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  ))}
                </div>

                {/* Content - Explicit White Text in Dark Mode */}
                <p className="text-gray-800 dark:text-gray-100 font-normal text-base leading-relaxed mb-8">
                  "{item.content}"
                </p>
              </div>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-white/20">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-cyan-400 shadow-sm flex-shrink-0">
                  <img 
                    src={item.avatar} 
                    alt={item.name} 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold text-base">{item.name}</h4>
                  <p className="text-blue-600 dark:text-cyan-300 text-xs font-semibold">{item.role}</p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}