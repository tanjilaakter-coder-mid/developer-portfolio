"use client";

import { motion } from 'framer-motion';

const workflowSteps = [
  {
    step: "01",
    title: "Discover",
    desc: "Understanding user needs, business goals, and technical requirements through deep research.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    )
  },
  {
    step: "02",
    title: "Define",
    desc: "Synthesizing insights to outline project scope, architecture, and core functional features.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
      </svg>
    )
  },
  {
    step: "03",
    title: "Design",
    desc: "Crafting modern glassmorphism UI, wireframes, and high-fidelity prototypes in Figma.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.5 7.5"/><path d="M11 13l4 4"/>
      </svg>
    )
  },
  {
    step: "04",
    title: "Prototype",
    desc: "Building scalable components with Next.js, Tailwind CSS, and fluid Framer Motion animations.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
      </svg>
    )
  },
  {
    step: "05",
    title: "Deliver",
    desc: "Rigorous testing, performance optimization, and seamless deployment for production readiness.",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
      </svg>
    )
  }
];

const workflowShapes = [
  { type: 'dot', top: "15%", left: "5%", size: "w-3.5 h-3.5", duration: 15, path: { x: [0, 60, -50, 0], y: [0, -50, 60, 0] } },
  { type: 'ring', top: "80%", left: "92%", size: "w-6 h-6", duration: 20, path: { x: [0, -70, 60, 0], y: [0, 60, -70, 0] } },
  { type: 'cross', top: "40%", left: "95%", size: "w-5 h-5", duration: 18, path: { x: [0, -50, 50, 0], y: [0, -60, 50, 0] } },
  { type: 'dot', top: "75%", left: "8%", size: "w-2.5 h-2.5", duration: 14, path: { x: [0, 40, -40, 0], y: [0, 40, -50, 0] } },
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-28 relative overflow-hidden bg-gradient-to-b from-transparent via-blue-50/50 dark:via-[#020617]/80 to-transparent">
      
      {/* Enhanced Background Floating Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {workflowShapes.map((shape, index) => (
          <motion.div
            key={index}
            animate={{ x: shape.path.x, y: shape.path.y, rotate: shape.type !== 'dot' ? [0, 180, 360] : 0, opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: shape.duration, repeat: Infinity, ease: "linear" }}
            className="absolute flex items-center justify-center text-blue-500/70 dark:text-cyan-400/70"
            style={{ top: shape.top, left: shape.left }}
          >
            {shape.type === 'dot' && <div className={`${shape.size} bg-blue-500 dark:bg-cyan-400 rounded-full shadow-[0_0_15px_currentColor]`}></div>}
            {shape.type === 'ring' && <div className={`${shape.size} rounded-full border-2 border-currentColor`}></div>}
            {shape.type === 'cross' && (
              <svg className={shape.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
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
          transition={{ duration: 0.7, ease: "easeOut" }} 
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-200/40 dark:bg-blue-500/10 border border-blue-300 dark:border-blue-500/20 backdrop-blur-md mb-4 shadow-sm">
            <span className="text-blue-700 dark:text-cyan-400 font-semibold tracking-[0.25em] text-[10px] uppercase">
              Methodology & Execution
            </span>
          </div>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400">Workflow</span>
          </h3>
        </motion.div>

        {/* Workflow Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {workflowSteps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white/70 dark:bg-white/[0.05] backdrop-blur-2xl border border-blue-200/60 dark:border-white/10 p-6 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/10 dark:bg-white/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="text-2xl font-black text-blue-500/20 dark:text-white/20 tracking-tighter">
                    {item.step}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {item.title}
                </h4>

                <p className="text-xs text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Bottom Line Accent */}
              <div className="w-full bg-blue-100 dark:bg-white/10 h-1 rounded-full mt-6 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: "easeOut" }}
                  className="bg-gradient-to-r from-blue-600 to-cyan-400 h-full rounded-full"
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}