export default function ProjectCard({ project }) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:scale-105 transition">
      <h3 className="text-2xl font-bold text-violet-400">
        {project.title}
      </h3>
      <p className="text-gray-400 mt-4">{project.description}</p>
    </div>
  );
}
