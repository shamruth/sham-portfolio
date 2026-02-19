import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileText } from "lucide-react";
import { projects } from "../data/projects";
import SectionWrapper from "./SectionWrapper";
import ProjectModal from "./ProjectModal";
import { useTheme } from "../context/ThemeContext";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const { theme } = useTheme();

  const cardStyle =
    theme === "dark"
      ? "bg-white/5 backdrop-blur-xl border border-white/10"
      : "bg-[#e0e5ec] shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]";

  return (
    <SectionWrapper
      id="projects"
      className="py-24 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-center text-violet-400 mb-16">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className={`group relative p-6 rounded-2xl transition duration-500 hover:-translate-y-3 hover:shadow-2xl ${cardStyle}`}
          >
            {/* 🌟 Glow Layer (Dark Mode Only) */}
            {theme === "dark" && (
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-600 to-indigo-600 opacity-0 group-hover:opacity-20 blur-xl transition duration-500"></div>
            )}

            {/* 🏆 Award Badge */}
            {project.title.includes("Position") && (
              <span
                className={`absolute top-4 right-4 px-3 py-1 text-xs rounded-full z-20 ${
                  theme === "dark"
                    ? "bg-violet-600 animate-pulse text-white"
                    : "bg-yellow-400 border-2 border-black text-black"
                }`}
              >
                🏆 Award
              </span>
            )}

            {/* Content */}
            <div className="relative z-10">
              <p className="text-sm text-violet-400 mb-2">
                {project.event}
              </p>

              <h3 className="text-xl font-bold">
                {project.title}
              </h3>

              <p
                className={`mt-4 ${
                  theme === "dark"
                    ? "text-gray-400"
                    : "text-slate-700"
                }`}
              >
                {project.description}
              </p>

              <button
                onClick={() => setSelectedProject(project)}
                className={`mt-6 inline-flex items-center gap-2 text-sm px-4 py-2 rounded-lg transition ${
                  theme === "dark"
                    ? "bg-violet-600 hover:bg-violet-700 text-white"
                    : "bg-yellow-400 border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                }`}
              >
                <FileText size={16} />
                View Presentation
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🎥 Modal Preview */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}
