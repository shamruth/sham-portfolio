import React from 'react';
import { motion } from 'framer-motion';
import MagneticButton from './MagneticButton';
import AnimatedBlobs from './AnimatedBlobs';

export const Hero = () => (
  <section id="hero" className="relative flex items-center justify-center min-h-[80vh] pt-32 pb-16 bg-blue-400 border-4 border-black shadow-[12px_12px_0_0_#000]">
    <AnimatedBlobs />

    <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row-reverse items-center md:items-start gap-8">
      {/* Profile image */}
      <motion.div
        className="flex-shrink-0"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-36 h-36 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-black shadow-[6px_6px_0_0_#000] bg-white">
          <img
            src="/images/profile_pic.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
            style={{ objectPosition: '90% 40%' }}
          />
        </div>
      </motion.div>

      {/* Text + buttons */}
      <div className="flex-1 text-center md:text-left">
        <motion.h1
          className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-black leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="block">Hi, I'm [Your Name]</span>
          <span className="block text-pink-500 mt-2 text-lg md:text-2xl">Building Scalable Full Stack Applications</span>
        </motion.h1>

        <motion.div
          className="flex flex-wrap justify-center md:justify-start gap-4 mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <MagneticButton href="#projects">View Projects</MagneticButton>
          <MagneticButton href="#contact">Contact Me</MagneticButton>
          <MagneticButton href="/resume.pdf" download>Download Resume</MagneticButton>
        </motion.div>
      </div>
    </div>
  </section>
);
