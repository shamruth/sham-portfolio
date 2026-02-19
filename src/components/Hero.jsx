import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-violet-400">Shamruth</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg">
            Passionate MERN Stack Developer & AI Enthusiast
            building scalable systems and immersive 3D experiences.
          </p>

          {/* SOCIAL LINKS */}
          <div className="flex gap-5 mt-8">
            <a href="https://github.com/yourusername" target="_blank">
              <Github className="hover:text-violet-400" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank">
              <Linkedin className="hover:text-violet-400" />
            </a>
            <a href="https://instagram.com/yourusername" target="_blank">
              <Instagram className="hover:text-violet-400" />
            </a>
          </div>

          {/* DOWNLOAD CV */}
          <a
            href="/resume.pdf"
            download
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-violet-600 rounded-xl hover:bg-violet-700 transition"
          >
            <Download size={18} />
            Download CV
          </a>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <img
            src="public/images/profile_pic.jpg"
            alt="Profile"
            className="w-100 h-100 object-cover rounded-full border-4 border-violet-500 shadow-2xl shadow-violet-500/30"
          />
        </motion.div>
      </div>
    </section>
  );
}
