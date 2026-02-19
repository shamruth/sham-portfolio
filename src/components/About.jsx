import React from 'react';
import { motion } from 'framer-motion';
import ProgressBar from './ProgressBar';

const skills = [
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 85 },
  { name: 'TailwindCSS', level: 80 },
  { name: 'Framer Motion', level: 75 },
  { name: 'MongoDB', level: 70 },
];

export const About = () => (
  <section className="py-16 bg-green-300 border-4 border-black shadow-[8px_8px_0_0_#000] mx-auto max-w-3xl mt-8">
    <h2 className="text-4xl font-extrabold mb-6 text-center text-black uppercase">About Me</h2>
    <p className="mb-8 text-black text-center font-bold">
      MERN Stack Developer based in India. Passionate about building scalable, performant web applications with modern UI/UX. Experienced in React, Node.js, and cloud deployment.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {skills.map(skill => (
        <div key={skill.name} className="mb-4">
          <div className="flex justify-between mb-1">
            <span className="font-bold text-black">{skill.name}</span>
            <span className="text-sm text-black font-bold">{skill.level}%</span>
          </div>
          <ProgressBar value={skill.level} />
        </div>
      ))}
    </div>
  </section>
);
