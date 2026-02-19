import { projects } from "../data/projects";
import { FileText } from "lucide-react";

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-violet-400 mb-16">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className="bg-gradient-to-br from-white/5 to-white/10 border border-white/10 p-6 rounded-2xl hover:scale-105 transition"
          >
            <p className="text-sm text-violet-400 mb-2">
              {project.event}
            </p>

            <h3 className="text-xl font-bold">
              {project.title}
            </h3>

            <p className="text-gray-400 mt-4">
              {project.description}
            </p>

            <a
              href={project.file}
              target="_blank"
              className="mt-6 inline-flex items-center gap-2 text-sm px-4 py-2 bg-violet-600 rounded-lg hover:bg-violet-700 transition"
            >
              <FileText size={16} />
              View Presentation
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
