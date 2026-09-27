"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-gradient-to-b from-transparent via-blue-50/60 dark:via-[#020617]/75 to-transparent">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.7, ease: "easeOut" }} 
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-200/40 dark:bg-blue-500/10 border border-blue-300 dark:border-blue-500/20 backdrop-blur-md mb-3 shadow-sm">
            <span className="text-blue-700 dark:text-cyan-400 font-semibold tracking-[0.25em] text-[10px] uppercase">
              Get In Touch
            </span>
          </div>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400">Together</span>
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mt-4 max-w-xl mx-auto font-light text-sm">
            Have a project in mind, want to collaborate, or just want to say hi? Feel free to drop a message below!
          </p>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/70 dark:bg-white/[0.05] backdrop-blur-2xl border border-blue-200/60 dark:border-white/15 p-8 sm:p-10 rounded-[2.5rem] shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_25px_50px_rgba(0,0,0,0.4)] relative overflow-hidden"
        >
          {/* Background Glow */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-400/20 rounded-full blur-3xl pointer-events-none"></div>

          <form 
            action="https://formspree.io/f/xwlpwrnd" 
            method="POST" 
            className="space-y-6 relative z-10"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  name="name" 
                  id="name" 
                  required 
                  placeholder="John Doe"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/50 dark:bg-gray-900/80 border border-blue-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition-colors text-sm" 
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                  Your Email
                </label>
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  required 
                  placeholder="john@example.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-white/50 dark:bg-gray-900/80 border border-blue-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition-colors text-sm" 
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-2">
                Your Message
              </label>
              <textarea 
                name="message" 
                id="message" 
                rows={5} 
                required 
                placeholder="Write your message here..."
                className="w-full px-4 py-3.5 rounded-xl bg-white/50 dark:bg-gray-900/80 border border-blue-200 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 dark:focus:border-cyan-400 transition-colors text-sm resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-semibold shadow-lg shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 text-sm tracking-wider uppercase"
            >
              Send Message 🚀
            </button>
          </form>

        </motion.div>

      </div>
    </section>
  );
}