import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import AnimatedBlobs from './AnimatedBlobs';

export const Hero = () => (
  <section id="hero" className="relative flex flex-col items-center justify-center min-h-[80vh] pt-32 pb-16 bg-blue-400 border-4 border-black shadow-[12px_12px_0_0_#000]">
    <AnimatedBlobs />
    <motion.h1
      className="text-6xl md:text-8xl font-extrabold text-black text-center leading-tight drop-shadow-[4px_4px_0_#fff]"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <span className="block">Hi, I'm [Your Name]</span>
      <span className="block text-pink-500 mt-2">Building Scalable Full Stack Applications</span>
    </motion.h1>
    <motion.div
      className="flex gap-6 mt-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <MagneticButton href="#projects">View Projects</MagneticButton>
      <MagneticButton href="#contact">Contact Me</MagneticButton>
      <MagneticButton href="/resume.pdf" download>Download Resume</MagneticButton>
    </motion.div>
  </section>
);
