"use client";

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Workflow from '@/components/Workflow';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent relative overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Workflow />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}