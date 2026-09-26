"use client";

import { motion } from 'framer-motion';

const skillsShapes = [
  { type: 'dot', top: "20%", left: "10%", size: "w-2 h-2", duration: 17, path: { x: [0, -50, 40, 0], y: [0, 40, -50, 0] } },
  { type: 'cross', top: "70%", left: "85%", size: "w-4 h-4", duration: 21, path: { x: [0, 60, -40, 0], y: [0, -60, 40, 0] } },
  { type: 'ring', top: "30%", left: "90%", size: "w-5 h-5", duration: 19, path: { x: [0, -40, 60, 0], y: [0, 50, -40, 0] } },
];

const skillsList = [
  { 
    name: "Next.js", 
    level: "Advanced", 
    desc: "App Router, SSR, Performance",
    svgIcon: (
      <svg className="w-8 h-8 text-gray-900 dark:text-white" viewBox="0 0 128 128" fill="currentColor">
        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64 64-28.7 64-64S99.3 0 64 0zm31.8 107.5H85.2L42.8 51.5v56H31V20.5h10.6l42.4 56v-56h11.8v87z"/>
      </svg>
    )
  },
  { 
    name: "React.js", 
    level: "Advanced", 
    desc: "Hooks, Context, Components",
    svgIcon: (
      <svg className="w-9 h-9 text-[#61dafb]" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
        <circle cx="0" cy="0" r="2.3" fill="currentColor"/>
        <g stroke="currentColor" strokeWidth="1.2" fill="none">
          <ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    )
  },
  { 
    name: "Tailwind CSS", 
    level: "Expert", 
    desc: "Responsive Design, Glassmorphism",
    svgIcon: (
      <svg className="w-9 h-9 text-[#38bdf8]" viewBox="0 0 54 33" fill="currentColor">
        <path d="M27 0c-7.2 0-11.7 3.6-13.5 10.8 2.7-3.6 5.85-4.95 9.45-4.05 2.05.51 3.52 1.99 5.14 3.63C31.5 13.05 35.44 17 43.5 17c7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.05-.51-3.52-1.99-5.14-3.63C39 6.95 35.06 3 27 3zm-13.5 15C6.3 15 1.8 18.6 0 25.8c2.7-3.6 5.85-4.95 9.45-4.05 2.05.51 3.52 1.99 5.14 3.63 3.41 3.42 7.35 7.37 15.41 7.37 7.2 0 11.7-3.6 13.5-10.8-2.7 3.6-5.85 4.95-9.45 4.05-2.05-.51-3.52-1.99-5.14-3.63C25.5 22.05 21.56 18.1 13.5 18.1z"/>
      </svg>
    )
  },
  { 
    name: "JavaScript (ES6+)", 
    level: "Advanced", 
    desc: "Async/Await, DOM Manipulation",
    svgIcon: (
      <div className="w-9 h-9 bg-[#f7df1e] rounded-xl flex items-center justify-center font-black text-black text-sm shadow-sm">
        JS
      </div>
    )
  },
  { 
    name: "Figma", 
    level: "Expert", 
    desc: "UI/UX Prototyping, Wireframing",
    svgIcon: (
      <svg className="w-7 h-7" viewBox="0 0 38 57" fill="none">
        <path d="M19 14.25C19 9.14738 14.8526 5 9.75 5C4.64738 5 0.5 9.14738 0.5 14.25C0.5 19.3526 4.64738 23.5 9.75 23.5H19V14.25Z" fill="#F24E1E"/>
        <path d="M28.5 5C23.3974 5 19.25 9.14738 19.25 14.25C19.25 19.3526 23.3974 23.5 28.5 23.5C33.6026 23.5 37.75 19.3526 37.75 14.25C37.75 9.14738 33.6026 5 28.5 5Z" fill="#FF7262"/>
        <path d="M19 32.75C19 37.8526 14.8526 42 9.75 42C4.64738 42 0.5 37.8526 0.5 32.75C0.5 27.6474 4.64738 23.5 9.75 23.5H19V32.75Z" fill="#A259FF"/>
        <circle cx="28.5" cy="32.75" r="9.25" fill="#1ABCFE"/>
        <path d="M9.75 60C14.8526 60 19 55.8526 19 50.75V42H9.75C4.64738 42 0.5 46.1474 0.5 51.25C0.5 56.3526 4.64738 60 9.75 60Z" fill="#0ACF83"/>
      </svg>
    )
  },
  { 
    name: "HTML5 & CSS3", 
    level: "Expert", 
    desc: "Semantic Markup, Flexbox/Grid",
    svgIcon: (
      <div className="w-9 h-9 bg-[#264de4] rounded-xl flex items-center justify-center font-black text-white text-xs shadow-sm">
        CSS3
      </div>
    )
  },
  { 
    name: "Git & GitHub", 
    level: "Proficient", 
    desc: "Version Control, Collaboration",
    svgIcon: (
      <svg className="w-8 h-8 text-gray-900 dark:text-white" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    )
  },
  { 
    name: "Responsive UI", 
    level: "Expert", 
    desc: "Mobile-First Architecture",
    svgIcon: (
      <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    )
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-gradient-to-b from-transparent via-sky-50/50 dark:via-[#020617]/70 to-transparent">
      
      {/* Background Floating Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {skillsShapes.map((shape, index) => (
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
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7, ease: "easeOut" }} 
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-200/40 dark:bg-blue-500/10 border border-blue-300 dark:border-blue-500/20 backdrop-blur-md mb-4 shadow-sm">
            <span className="text-blue-700 dark:text-cyan-400 font-semibold tracking-[0.25em] text-[10px] uppercase">
              Expertise & Tech Stack
            </span>
          </div>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Skills <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400">Matrix</span>
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsList.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
              whileHover={{ y: -10, scale: 1.03, transition: { duration: 0.3, ease: "easeInOut" } }}
              className="bg-white/70 dark:bg-white/[0.05] backdrop-blur-2xl border border-blue-200/60 dark:border-white/10 p-6 rounded-3xl shadow-[0_15px_35px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] flex flex-col justify-between group transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 dark:bg-white/10 shadow-inner flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {skill.svgIcon}
                  </div>
                  <span className="px-3 py-1 rounded-full bg-blue-600/10 dark:bg-cyan-500/15 text-blue-700 dark:text-cyan-300 text-[10px] font-extrabold uppercase tracking-widest border border-blue-400/20">
                    {skill.level}
                  </span>
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {skill.name}
                </h4>
                
                <p className="text-xs text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                  {skill.desc}
                </p>
              </div>

              <div className="w-full bg-blue-100 dark:bg-white/10 h-1.5 rounded-full mt-6 overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level === 'Expert' ? '95%' : skill.level === 'Advanced' ? '88%' : '75%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
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