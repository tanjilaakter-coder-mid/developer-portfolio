"use client";

import { motion } from 'framer-motion';

const aboutShapes = [
  { type: 'dot', top: "10%", left: "5%", size: "w-2.5 h-2.5", duration: 16, path: { x: [0, 40, -40, 0], y: [0, -50, 40, 0] } },
  { type: 'ring', top: "80%", left: "90%", size: "w-5 h-5", duration: 20, path: { x: [0, -60, 50, 0], y: [0, 60, -50, 0] } },
  { type: 'cross', top: "40%", left: "95%", size: "w-4 h-4", duration: 22, path: { x: [0, -40, 40, 0], y: [0, -40, 50, 0] } },
  { type: 'dot', top: "90%", left: "15%", size: "w-2 h-2", duration: 18, path: { x: [0, 50, -30, 0], y: [0, -30, 40, 0] } },
];

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-gradient-to-b from-transparent via-blue-50/70 dark:via-[#020617]/80 to-transparent">
      
      {/* Background Floating Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {aboutShapes.map((shape, index) => (
          <motion.div
            key={index}
            animate={{ x: shape.path.x, y: shape.path.y, rotate: shape.type !== 'dot' ? [0, 180, 360] : 0, opacity: [0.2, 0.6, 0.2] }}
            transition={{ duration: shape.duration, repeat: Infinity, ease: "linear" }}
            className="absolute flex items-center justify-center text-blue-400/60 dark:text-cyan-400/50"
            style={{ top: shape.top, left: shape.left }}
          >
            {shape.type === 'dot' && <div className={`${shape.size} bg-blue-500/70 dark:bg-cyan-400 rounded-full shadow-[0_0_10px_currentColor]`}></div>}
            {shape.type === 'ring' && <div className={`${shape.size} rounded-full border-[1.5px] border-currentColor`}></div>}
            {shape.type === 'cross' && (
              <svg className={shape.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            )}
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7 }} 
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-200/40 dark:bg-blue-500/10 border border-blue-300 dark:border-blue-500/20 backdrop-blur-md mb-4 shadow-sm">
            <span className="text-blue-700 dark:text-cyan-400 font-semibold tracking-[0.25em] text-[10px] uppercase">
              Get To Know Me
            </span>
          </div>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Architecting <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400">Digital Experiences</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1 */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="lg:col-span-7 bg-white/75 dark:bg-white/[0.06] backdrop-blur-2xl border border-white/80 dark:border-white/15 p-8 sm:p-10 rounded-[2.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_30px_70px_rgba(0,0,0,0.5)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3.5 py-1 rounded-full bg-blue-500/15 text-blue-700 dark:text-cyan-300 text-xs font-bold uppercase tracking-widest border border-blue-400/30">
                  FDA Capstone 2026
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Islamabad, PK / Remote</span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 leading-snug">
                Bridging Graphic Design & Frontend Engineering
              </h4>
              
              <p className="text-gray-700 dark:text-gray-300 font-light text-sm sm:text-base leading-relaxed mb-4">
                Hello! I am <strong className="text-blue-700 dark:text-cyan-300 font-semibold">Tanjila Akter</strong>, a dedicated Web Engineering intern at <span className="text-blue-800 dark:text-cyan-400 font-semibold">Faran Digital Academy (FDA)</span>. My professional objective is to transform complex conceptual wireframes into high-performing, interactive web realities.
              </p>

              <p className="text-gray-600 dark:text-gray-400 font-light text-sm leading-relaxed mb-6">
                Over the past 8 weeks of intensive training, I’ve mastered modern component architecture, state management, and responsive styling using Next.js and Tailwind CSS.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-blue-200/60 dark:border-white/10">
              <div className="p-3 rounded-2xl bg-blue-500/5 dark:bg-white/5 border border-blue-200/50 dark:border-white/10 text-center">
                <p className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-cyan-400">35+</p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mt-1">Projects Done</p>
              </div>
              <div className="p-3 rounded-2xl bg-blue-500/5 dark:bg-white/5 border border-blue-200/50 dark:border-white/10 text-center">
                <p className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-cyan-400">8 Wk</p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mt-1">FDA Capstone</p>
              </div>
              <div className="p-3 rounded-2xl bg-blue-500/5 dark:bg-white/5 border border-blue-200/50 dark:border-white/10 text-center">
                <p className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-cyan-400">100%</p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-wider mt-1">Dedication</p>
              </div>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="lg:col-span-5 flex"
          >
            <div className="w-full rounded-[2.5rem] bg-gradient-to-br from-blue-600/20 via-sky-500/15 to-cyan-500/20 dark:from-blue-950/60 dark:via-[#091338]/80 dark:to-purple-950/50 backdrop-blur-2xl border border-white/80 dark:border-white/20 p-8 flex flex-col justify-between shadow-[0_30px_70px_rgba(0,0,0,0.2)] overflow-hidden relative group">
              
              <div className="absolute -top-16 -right-16 w-52 h-52 bg-cyan-400/30 rounded-full blur-3xl pointer-events-none"></div>
              
              <div className="relative z-10">
                <span className="px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-700 dark:text-cyan-300 text-xs font-extrabold uppercase tracking-widest border border-blue-400/30 shadow-sm">
                  Core Philosophy
                </span>
                <h5 className="text-2xl font-bold text-gray-900 dark:text-white mt-4">
                  UI/UX & Code Harmony
                </h5>
                <p className="text-sm text-gray-700 dark:text-gray-200 mt-3 font-medium leading-relaxed">
                  I believe a great product is born when meticulous design meets flawless engineering. Every color choice, spacing, and micro-interaction is purposeful.
                </p>

                <div className="flex flex-wrap gap-2 mt-5">
                  <span className="px-3 py-1 rounded-lg bg-white/40 dark:bg-white/10 text-xs font-semibold text-gray-800 dark:text-cyan-300 border border-white/30">Next.js App Router</span>
                  <span className="px-3 py-1 rounded-lg bg-white/40 dark:bg-white/10 text-xs font-semibold text-gray-800 dark:text-cyan-300 border border-white/30">Tailwind CSS</span>
                  <span className="px-3 py-1 rounded-lg bg-white/40 dark:bg-white/10 text-xs font-semibold text-gray-800 dark:text-cyan-300 border border-white/30">Framer Motion</span>
                  <span className="px-3 py-1 rounded-lg bg-white/40 dark:bg-white/10 text-xs font-semibold text-gray-800 dark:text-cyan-300 border border-white/30">Figma Design</span>
                </div>
              </div>

              <div className="relative z-10 bg-white/90 dark:bg-black/60 backdrop-blur-xl p-3.5 rounded-2xl border border-white/60 dark:border-white/15 flex items-center gap-3.5 shadow-xl mt-6">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white font-black text-sm shadow-inner">
                  TA
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 dark:text-white">Tanjila Akter</p>
                  <p className="text-[10px] font-semibold text-blue-600 dark:text-cyan-400 tracking-wider">FDA Web Engineering 2026</p>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}