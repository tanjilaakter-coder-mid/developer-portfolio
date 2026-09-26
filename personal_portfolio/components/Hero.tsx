"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const floatingShapes = [
  { type: 'dot', top: "15%", left: "15%", size: "w-2 h-2", duration: 15, path: { x: [0, 60, -50, 0], y: [0, -80, 50, 0] } },
  { type: 'cross', top: "45%", left: "85%", size: "w-4 h-4", duration: 20, path: { x: [0, -50, 60, 0], y: [0, 100, -60, 0] } },
  { type: 'ring', top: "75%", left: "10%", size: "w-5 h-5", duration: 18, path: { x: [0, 80, -90, 0], y: [0, -70, 100, 0] } },
  { type: 'dot', top: "85%", left: "65%", size: "w-3 h-3", duration: 25, path: { x: [0, -100, 50, 0], y: [0, -50, 60, 0] } },
  { type: 'cross', top: "25%", left: "55%", size: "w-3.5 h-3.5", duration: 22, path: { x: [0, 90, -50, 0], y: [0, 50, -70, 0] } },
  { type: 'ring', top: "60%", left: "35%", size: "w-6 h-6", duration: 19, path: { x: [0, -80, 50, 0], y: [0, 80, -90, 0] } },
  { type: 'dot', top: "10%", left: "80%", size: "w-2.5 h-2.5", duration: 17, path: { x: [0, -60, 40, 0], y: [0, 60, -40, 0] } },
  { type: 'cross', top: "80%", left: "85%", size: "w-3 h-3", duration: 24, path: { x: [0, -70, 70, 0], y: [0, -80, 50, 0] } },
  { type: 'ring', top: "20%", left: "5%", size: "w-6 h-6", duration: 21, path: { x: [0, 100, -60, 0], y: [0, 80, -100, 0] } },
  { type: 'dot', top: "50%", left: "3%", size: "w-2.5 h-2.5", duration: 16, path: { x: [0, 70, -70, 0], y: [0, -50, 80, 0] } },
  { type: 'cross', top: "35%", left: "92%", size: "w-4 h-4", duration: 19, path: { x: [0, -80, 40, 0], y: [0, -60, 70, 0] } },
  { type: 'ring', top: "90%", left: "30%", size: "w-4 h-4", duration: 23, path: { x: [0, 60, -80, 0], y: [0, -100, 40, 0] } },
  { type: 'dot', top: "5%", left: "45%", size: "w-2 h-2", duration: 14, path: { x: [0, -40, 60, 0], y: [0, 50, -50, 0] } },
  { type: 'dot', top: "30%", left: "30%", size: "w-3 h-3", duration: 21, path: { x: [0, 50, -60, 0], y: [0, 70, -70, 0] } },
];

export default function Hero() {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const roles = ["Graphic Designer", "Frontend Developer", "UI/UX Enthusiast"];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];
      setText(isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1));
      setTypingSpeed(isDeleting ? 50 : 100);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, roles]);

  return (
    <section id="home" className="pt-28 pb-24 min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-blue-100 via-sky-50 to-indigo-100 dark:bg-gradient-to-br dark:from-[#020617] dark:via-[#091338] dark:to-[#030920] transition-colors duration-500">
      
      {/* Background Animated Shapes & Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {floatingShapes.map((shape, index) => (
          <motion.div
            key={index}
            animate={{ x: shape.path.x, y: shape.path.y, rotate: shape.type !== 'dot' ? [0, 180, 360] : 0, opacity: [0.2, 0.7, 0.2] }}
            transition={{ duration: shape.duration, repeat: Infinity, ease: "linear" }}
            className="absolute flex items-center justify-center text-blue-400/80 dark:text-cyan-400/70"
            style={{ top: shape.top, left: shape.left }}
          >
            {shape.type === 'dot' && <div className={`${shape.size} bg-blue-500/80 dark:bg-cyan-400 rounded-full shadow-[0_0_12px_currentColor]`}></div>}
            {shape.type === 'ring' && <div className={`${shape.size} rounded-full border-[2px] border-currentColor`}></div>}
            {shape.type === 'cross' && (
              <svg className={shape.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            )}
          </motion.div>
        ))}

        <motion.div animate={{ x: ['-20vw', '120vw'], y: ['-20vh', '120vh'], opacity: [0, 1, 0] }} transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 5, ease: "easeIn" }} className="absolute top-[10%] left-0 w-40 h-[1.5px] bg-gradient-to-r from-transparent via-blue-400 dark:via-cyan-300 to-transparent rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* LEFT SIDE: TEXT */}
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }} className="flex-1 text-center lg:text-left z-20 pt-10">
            
            <motion.div whileHover={{ scale: 1.05 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-200/50 dark:bg-slate-900/90 border border-blue-300 dark:border-cyan-500/40 backdrop-blur-md mb-8 shadow-sm">
              <span className="text-blue-700 dark:text-cyan-400 font-medium tracking-[0.2em] text-[10px] sm:text-xs uppercase">
                Welcome to my portfolio
              </span>
            </motion.div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-[1.1] tracking-tight">
              Hi, I'm <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500 dark:from-blue-400 dark:via-cyan-300 dark:to-white drop-shadow-sm">
                Tanjila Akter
              </span>
            </h1>
            
            <h2 className="text-xl md:text-3xl text-blue-800 dark:text-cyan-300 font-medium mb-6 h-10">
              I am a <span className="font-bold">{text}</span>
              <span className="animate-pulse">|</span>
            </h2>
            
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-10 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed">
              Designing Digital Futures That Inspire. I craft immersive digital experiences that blend aesthetic beauty with modern web technology and purposeful design.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-5 mb-8">
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="#projects" className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium shadow-[0_10px_30px_rgba(6,182,212,0.4)]">
                Explore My Work
              </motion.a>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} href="/resume.pdf" target="_blank" className="px-8 py-4 rounded-full bg-white/50 dark:bg-slate-900/90 border border-blue-300 dark:border-cyan-500/40 text-blue-800 dark:text-gray-200 font-medium hover:bg-blue-100 dark:hover:bg-slate-800 shadow-sm">
                Download Resume
              </motion.a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">Connect with me:</span>
              
              <motion.a whileHover={{ scale: 1.2, y: -3 }} href="https://linkedin.com" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/60 dark:bg-slate-900/90 border border-blue-200 dark:border-cyan-500/40 text-blue-700 dark:text-cyan-400 hover:bg-blue-600 hover:text-white shadow-md">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </motion.a>
              <motion.a whileHover={{ scale: 1.2, y: -3 }} href="https://facebook.com" target="_blank" rel="noreferrer" className="p-3 rounded-full bg-white/60 dark:bg-slate-900/90 border border-blue-200 dark:border-cyan-500/40 text-blue-700 dark:text-cyan-400 hover:bg-blue-600 hover:text-white shadow-md">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </motion.a>
              <motion.a whileHover={{ scale: 1.2, y: -3 }} href="mailto:your-email@example.com" className="p-3 rounded-full bg-white/60 dark:bg-slate-900/90 border border-blue-200 dark:border-cyan-500/40 text-blue-700 dark:text-cyan-400 hover:bg-blue-600 hover:text-white shadow-md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: IMAGE & GLASS CARD WITH BLUR CIRCLE */}
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="flex-1 flex justify-center lg:justify-end relative w-full">
            <motion.div animate={{ y: [-15, 15, -15] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }} className="relative w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] flex items-center justify-center">
              
              {/* Profile picture er pichone clear visible soft blue blur circle */}
              <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] bg-blue-300/60 dark:bg-cyan-500/30 rounded-full blur-xl opacity-90 z-0"></div>

              {/* Floating Tech Icons */}
              <motion.div whileHover={{ scale: 1.15 }} animate={{ y: [-10, 10, -10], rotate: 360 }} transition={{ y: { duration: 4, repeat: Infinity, ease: "easeInOut" }, rotate: { duration: 20, repeat: Infinity, ease: "linear" } }} className="absolute -left-6 top-10 w-14 h-14 bg-white/80 dark:bg-slate-900/95 backdrop-blur-md border border-white/50 dark:border-cyan-500/40 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.3)] z-30 cursor-pointer">
                <svg className="w-7 h-7 text-[#61dafb]" viewBox="-11.5 -10.23174 23 20.46348"><circle cx="0" cy="0" r="2.05" fill="currentColor"/><g stroke="currentColor" strokeWidth="1" fill="none"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>
              </motion.div>

              <motion.div whileHover={{ scale: 1.15 }} animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -right-4 top-20 w-14 h-14 bg-white/80 dark:bg-slate-900/95 backdrop-blur-md border border-white/50 dark:border-cyan-500/40 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.3)] z-30 cursor-pointer">
                <svg className="w-7 h-7 text-[#38bdf8]" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z"/></svg>
              </motion.div>

              <motion.div whileHover={{ scale: 1.15 }} animate={{ y: [-8, 8, -8] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute right-10 -bottom-6 w-14 h-14 bg-white/80 dark:bg-slate-900/95 backdrop-blur-md border border-white/50 dark:border-cyan-500/40 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(14,165,233,0.3)] z-30 cursor-pointer">
                <svg className="w-6 h-6" viewBox="0 0 38 57" fill="none"><path d="M19 14.25C19 9.14738 14.8526 5 9.75 5C4.64738 5 0.5 9.14738 0.5 14.25C0.5 19.3526 4.64738 23.5 9.75 23.5H19V14.25Z" fill="#F24E1E"/><path d="M28.5 5C23.3974 5 19.25 9.14738 19.25 14.25C19.25 19.3526 23.3974 23.5 28.5 23.5C33.6026 23.5 37.75 19.3526 37.75 14.25C37.75 9.14738 33.6026 5 28.5 5Z" fill="#FF7262"/><path d="M19 32.75C19 37.8526 14.8526 42 9.75 42C4.64738 42 0.5 37.8526 0.5 32.75C0.5 27.6474 4.64738 23.5 9.75 23.5H19V32.75Z" fill="#A259FF"/><circle cx="28.5" cy="32.75" r="9.25" fill="#1ABCFE"/><path d="M9.75 60C14.8526 60 19 55.8526 19 50.75V42H9.75C4.64738 42 0.5 46.1474 0.5 51.25C0.5 56.3526 4.64738 60 9.75 60Z" fill="#0ACF83"/></svg>
              </motion.div>

              {/* Main Circular Image */}
              <div className="absolute inset-0 bg-white/40 dark:bg-slate-900/80 backdrop-blur-2xl border border-white/60 dark:border-cyan-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.25),0_0_30px_rgba(14,165,233,0.3)] rounded-full p-4 z-10">
                <div className="relative w-full h-full overflow-hidden rounded-full bg-gradient-to-b from-blue-200/50 dark:from-[#0a1128] to-transparent">
                  <Image src="/images/profile.png" alt="Tanjila Akter" fill className="object-cover object-bottom" priority />
                  <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-blue-100 dark:from-[#02040a] to-transparent opacity-90"></div>
                </div>
              </div>

              {/* Frosted Glass 4+ Years Card */}
              <motion.div whileHover={{ scale: 1.05 }} animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute -left-4 sm:-left-12 bottom-12 bg-white/40 dark:bg-black/50 backdrop-blur-2xl border border-white/70 dark:border-white/25 px-6 py-4 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex items-center gap-4 z-20">
                <div className="relative">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center text-white font-bold text-xl shadow-inner border border-white/50">4+</div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-ping"></div>
                </div>
                <div>
                  <p className="text-gray-800 dark:text-gray-200 text-sm font-semibold">Years of</p>
                  <p className="text-blue-900 dark:text-cyan-300 font-black text-xs tracking-[0.2em] uppercase mt-0.5">Experience</p>
                </div>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} 
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center opacity-80 hover:opacity-100 transition-opacity cursor-pointer z-20"
      >
        <span className="text-[10px] uppercase tracking-widest text-blue-800 dark:text-cyan-300 mb-1.5 font-bold">Scroll Down</span>
        <div className="w-5 h-9 rounded-full border-2 border-blue-500/60 dark:border-cyan-400/60 flex justify-center p-1 backdrop-blur-sm">
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="w-1.5 h-1.5 bg-blue-600 dark:bg-cyan-400 rounded-full" />
        </div>
      </motion.div>

    </section>
  );
}