"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="py-16 border-t border-blue-200/40 dark:border-cyan-500/30 bg-white/70 dark:bg-[#02040a]/95 backdrop-blur-2xl transition-colors duration-500 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          
          {/* Brand & Bio */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white font-black text-sm shadow-lg shadow-blue-500/30">
                TN
              </div>
              <span className="text-gray-900 dark:text-white font-bold text-lg tracking-tight">Tanjila Akter</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-sm font-light max-w-sm">
              Faran Digital Academy Web Engineering Capstone Portfolio. Crafting scalable web apps with modern UI/UX aesthetics.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
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
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-blue-200/40 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm font-light">
            © {new Date().getFullYear()} Tanjila Akter · FDA Web Engineering Internship Capstone. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 text-xs sm:text-sm font-medium transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-cyan-400 text-xs sm:text-sm font-medium transition-colors">
              LinkedIn
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}