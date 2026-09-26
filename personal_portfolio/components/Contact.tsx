"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulating form submission (Can be connected to Formspree or EmailJS later)
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-transparent transition-colors duration-500">
      
      {/* Background Glow Accents */}
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
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
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white tracking-tight">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400">Amazing Together</span>
          </h2>
        </motion.div>

        {/* Contact Form Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-[#0f1f4b] border border-blue-200 dark:border-cyan-500/40 rounded-3xl p-8 sm:p-12 shadow-2xl dark:shadow-[0_0_35px_rgba(14,165,233,0.2)] relative"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name" 
                  required 
                  placeholder="John Doe" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#06112e] border border-gray-300 dark:border-cyan-500/30 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  placeholder="john@example.com" 
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#06112e] border border-gray-300 dark:border-cyan-500/30 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">Message</label>
              <textarea 
                name="message" 
                rows={5} 
                required 
                placeholder="Write your message here..." 
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-[#06112e] border border-gray-300 dark:border-cyan-500/30 text-gray-900 dark:text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white font-bold text-base shadow-lg shadow-blue-500/30 hover:shadow-cyan-500/50 hover:scale-[1.01] transition-all cursor-pointer disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-emerald-400 text-center font-medium mt-4">Message sent successfully! Thank you for reaching out.</p>
            )}

          </form>
        </motion.div>

      </div>
    </section>
  );
}