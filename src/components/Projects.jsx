import React from 'react';
import { projects } from '../data/projects';
import ProjectCard from './ProjectCard';

export const Projects = () => (
  <section id="projects" className="py-16 bg-orange-300 border-4 border-black shadow-[8px_8px_0_0_#000] mx-auto max-w-5xl mt-8">
    <h2 className="text-4xl font-extrabold mb-6 text-center text-black uppercase">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, idx) => (
        <ProjectCard key={idx} {...project} />
      ))}
    </div>
  </section>
);
