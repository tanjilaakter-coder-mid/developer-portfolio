"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const projectsList = [
  {
    title: "BuildPro",
    category: "Construction & Site Management",
    description: "Advanced site management and safety tools designed specifically for hardworking teams on the ground.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    image: "/images/buildpro.png",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "AgriDirect",
    category: "Agri-Tech & E-Commerce",
    description: "Direct marketplace connecting farmers and buyers seamlessly with home delivery and live crop listings.",
    tech: ["React", "Dashboard", "Tailwind"],
    image: "/images/agridirect.png",
    liveUrl: "#",
    githubUrl: "#"
  },
  {
    title: "English A2Z",
    category: "AI Learning & Chat Platform",
    description: "Interactive AI-powered English learning assistant tracking queries, knowledge base, and student progress.",
    tech: ["Next.js", "AI Integration", "Tailwind"],
    image: "/images/english-a2z.png",
    liveUrl: "#",
    githubUrl: "#"
  }
];

const projectsShapes = [
  { type: 'dot', top: "15%", left: "8%", size: "w-2.5 h-2.5", duration: 16, path: { x: [0, 50, -40, 0], y: [0, -40, 50, 0] } },
  { type: 'ring', top: "85%", left: "92%", size: "w-5 h-5", duration: 22, path: { x: [0, -60, 50, 0], y: [0, 50, -60, 0] } },
  { type: 'cross', top: "50%", left: "95%", size: "w-4 h-4", duration: 18, path: { x: [0, -40, 40, 0], y: [0, -50, 40, 0] } },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative overflow-hidden bg-gradient-to-b from-transparent via-blue-50/60 dark:via-[#020617]/75 to-transparent">
      
      {/* Background Floating Animated Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {projectsShapes.map((shape, index) => (
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
          transition={{ duration: 0.7, ease: "easeOut" }} 
          className="flex flex-col sm:flex-row items-center justify-between mb-16 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-200/40 dark:bg-blue-500/10 border border-blue-300 dark:border-blue-500/20 backdrop-blur-md mb-3 shadow-sm">
              <span className="text-blue-700 dark:text-cyan-400 font-semibold tracking-[0.25em] text-[10px] uppercase">
                Portfolio Showcase
              </span>
            </div>
            <h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400">Work</span>
            </h3>
          </div>

          <Link href="#contact" className="px-6 py-3 rounded-full bg-white/60 dark:bg-white/5 border border-blue-200 dark:border-white/10 text-gray-800 dark:text-gray-200 font-medium hover:border-blue-500 transition-all shadow-sm text-sm">
            View All Projects →
          </Link>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-white/70 dark:bg-white/[0.05] backdrop-blur-2xl border border-blue-200/60 dark:border-white/15 p-6 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_25px_50px_rgba(0,0,0,0.4)] flex flex-col justify-between group overflow-hidden relative"
            >
              {/* Card Glow Effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-400/40 transition-all"></div>

              <div>
                {/* Clean Browser Mockup Thumbnail (No Black Border) */}
                <div className="w-full h-48 rounded-2xl bg-white dark:bg-gray-900 border border-blue-200/80 dark:border-white/15 mb-6 relative overflow-hidden shadow-sm flex flex-col">
                  
                  {/* Mockup Header Bar */}
                  <div className="h-6 bg-gray-100 dark:bg-gray-800/80 border-b border-gray-200 dark:border-white/10 flex items-center px-3 gap-1.5 flex-shrink-0">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                  </div>

                  {/* Image Container */}
                  <div className="relative w-full flex-1">
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                </div>

                <span className="text-xs font-bold text-blue-600 dark:text-cyan-400 uppercase tracking-widest">
                  {project.category}
                </span>

                <h4 className="text-2xl font-bold text-gray-900 dark:text-white mt-2 mb-3 group-hover:text-blue-600 dark:group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h4>

                <p className="text-sm text-gray-600 dark:text-gray-300 font-light leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-blue-500/10 dark:bg-white/10 text-[11px] font-semibold text-blue-800 dark:text-cyan-300 border border-blue-400/20 dark:border-white/10">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between pt-4 border-t border-blue-200/50 dark:border-white/10">
                  <a href={project.liveUrl} className="text-xs font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors flex items-center gap-1">
                    Live Demo ↗
                  </a>
                  <a href={project.githubUrl} className="text-xs font-bold text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                    GitHub Code
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}