"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(isDark);
  }, []);

  const toggleDarkMode = () => {
    const htmlTag = document.documentElement;
    if (htmlTag.classList.contains('dark')) {
      htmlTag.classList.remove('dark');
      setDarkMode(false);
    } else {
      htmlTag.classList.add('dark');
      setDarkMode(true);
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 py-4 bg-white/70 dark:bg-[#02040a]/80 backdrop-blur-xl border-b border-blue-200/40 dark:border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="#" className="flex items-center group relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 rounded-2xl blur-lg opacity-50 group-hover:opacity-90 transition duration-300"></div>
          <div className="relative px-4 py-2 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 border border-white/20 text-white font-black text-sm tracking-wider shadow-md flex items-center gap-1.5 group-hover:scale-105 transition-transform">
            <span>TN</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_#ffffff]"></span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#about" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
            About
          </Link>
          <Link href="#skills" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
            Skills
          </Link>
          <Link href="#workflow" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
            Workflow
          </Link>
          <Link href="#projects" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
            Projects
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
            Testimonials
          </Link>
          <Link href="#contact" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Right Actions & Buttons */}
        <div className="flex items-center gap-3 sm:gap-4">
          
          {/* Dark/Light Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            type="button"
            className="relative flex items-center w-28 h-10 rounded-full bg-gradient-to-r from-blue-900/70 via-sky-900/70 to-blue-800/70 border border-cyan-400/30 shadow-[inset_0_2px_6px_rgba(0,0,0,0.5),0_0_15px_rgba(56,189,248,0.2)] p-1.5 transition-all overflow-hidden backdrop-blur-md group cursor-pointer"
            aria-label="Toggle Theme"
          >
            <span className={`absolute left-3 text-xs font-semibold tracking-wider text-cyan-200 transition-opacity duration-300 ${darkMode ? 'opacity-100' : 'opacity-0'}`}>
              Dark
            </span>
            <span className={`absolute right-3 text-xs font-semibold tracking-wider text-cyan-200 transition-opacity duration-300 ${darkMode ? 'opacity-0' : 'opacity-100'}`}>
              Light
            </span>

            <div 
              className={`absolute flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-cyan-300 via-blue-500 to-indigo-600 border border-white/40 shadow-[0_4px_12px_rgba(0,0,0,0.4),inset_0_2px_4px_rgba(255,255,255,0.6)] backdrop-blur-xl text-white text-xs transition-transform duration-500 ease-in-out ${
                darkMode ? 'translate-x-[64px]' : 'translate-x-0'
              }`}
            >
              {darkMode ? (
                <svg className="w-4 h-4 text-white drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              ) : (
                <svg className="w-4 h-4 text-yellow-100 drop-shadow-[0_0_4px_rgba(255,255,0,0.8)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              )}
            </div>
          </button>

          {/* Let's Talk Active Button */}
          <Link
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/50 hover:scale-105 transition-all"
          >
            Let's Talk
          </Link>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl bg-gray-100 dark:bg-[#06112e] border border-gray-300 dark:border-cyan-500/40 text-gray-800 dark:text-white focus:outline-none"
            aria-label="Toggle Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

        </div>

      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-[#06112e]/98 backdrop-blur-2xl border-b border-blue-200/40 dark:border-cyan-500/30 px-6 py-6 shadow-xl"
          >
            <nav className="flex flex-col gap-4">
              <Link 
                href="#about" 
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              >
                About
              </Link>
              <Link 
                href="#skills" 
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              >
                Skills
              </Link>
              <Link 
                href="#workflow" 
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              >
                Workflow
              </Link>
              <Link 
                href="#projects" 
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              >
                Projects
              </Link>
              <Link 
                href="#testimonials" 
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              >
                Testimonials
              </Link>
              <Link 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="text-base font-medium text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
              >
                Contact
              </Link>
              <div className="pt-2 border-t border-gray-200 dark:border-white/10">
                <Link
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/30"
                >
                  Let's Talk
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}