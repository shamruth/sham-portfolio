import { motion } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-slate-900 w-[90%] md:w-[80%] h-[85%] rounded-2xl p-6 relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-red-400 hover:scale-110 transition"
        >
          <X />
        </button>

        <h3 className="text-2xl font-bold text-violet-400 mb-4">
          {project.title}
        </h3>

        <iframe
          src={project.file}
          className="w-full h-[90%] rounded-xl border border-white/10"
        />
      </motion.div>
    </div>
  );
}
