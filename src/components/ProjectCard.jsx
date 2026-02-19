import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = ({ image, title, description, tech, github, demo }) => (
  <motion.div
    className="flex flex-col h-full bg-white border-4 border-black shadow-[6px_6px_0_0_#000] p-6 transition-transform"
    whileHover={{ y: -8, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <img src={image} alt={title} className="border-4 border-black mb-4 w-full h-40 object-cover" loading="lazy" />
    <h3 className="text-2xl font-extrabold mb-2 text-black uppercase">{title}</h3>
    <p className="text-black font-bold mb-4">{description}</p>
    <div className="flex flex-wrap gap-2 mb-4">
      {tech.map((t, i) => (
        <span key={i} className="bg-pink-300 border-2 border-black text-black px-2 py-1 text-xs font-bold uppercase shadow-[2px_2px_0_0_#000]">{t}</span>
      ))}
    </div>
    <div className="mt-auto flex gap-2">
      <a href={github} target="_blank" rel="noopener" className="bg-yellow-200 border-2 border-black text-black font-bold uppercase px-4 py-2 shadow-[2px_2px_0_0_#000] hover:bg-black hover:text-yellow-200 transition-colors duration-150">GitHub</a>
      <a href={demo} target="_blank" rel="noopener" className="bg-yellow-200 border-2 border-black text-black font-bold uppercase px-4 py-2 shadow-[2px_2px_0_0_#000] hover:bg-black hover:text-yellow-200 transition-colors duration-150">Live Demo</a>
    </div>
  </motion.div>
);

export default ProjectCard;
