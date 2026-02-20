import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Download } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function Hero() {
  const { theme } = useTheme();

  const cardStyle =
    theme === "dark"
      ? "bg-white/5 backdrop-blur-xl border border-white/10"
      : "bg-[#e0e5ec] shadow-[9px_9px_16px_#a3b1c6,-9px_-9px_16px_#ffffff]";

  const brutalAccentButton =
    "bg-yellow-400 border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition";

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center text-center md:text-left">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-violet-500">Shamruth</span>
          </h1>

          {/* Sub Heading */}
          <h2 className="mt-6 text-2xl text-violet-500 font-medium">
            Full-Stack Developer | Unreal Engine Creator | AI Enthusiast
          </h2>

          <p className="mt-6 text-lg opacity-80">
            I’m a full-stack developer focused on building scalable and
            performance-driven web applications using the MERN stack.
            Alongside web development, I create immersive 3D environments
            using Unreal Engine and develop intelligent systems powered
            by deep learning.
            <br /><br />
            From award-winning project expos to real-world hardware
            simulations and AI-based attendance systems, I enjoy
            transforming ideas into impactful digital solutions that
            combine creativity with engineering precision.
          </p>

  <div className="flex gap-6 mt-8">

  {/* GitHub */}
  <a
    href="https://github.com/shamruth"
    target="_blank"
    rel="noopener noreferrer"
    className={`transition-all duration-300 p-2 rounded-md ${
      theme === "dark"
        ? "hover:bg-white/10 hover:backdrop-blur-md hover:border hover:border-white/10 hover:shadow-[0_8px_20px_rgba(139,92,246,0.35)] hover:-translate-y-[2px]"
        : "bg-white border border-black shadow-[3px_3px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
    }`}
  >
    <Github size={22} />
  </a>

  {/* LinkedIn */}
  <a
    href="https://www.linkedin.com/in/shamruth28022006/"
    target="_blank"
    rel="noopener noreferrer"
    className={`transition-all duration-300 p-2 rounded-md ${
      theme === "dark"
        ? "hover:bg-white/10 hover:backdrop-blur-md hover:border hover:border-white/10 hover:shadow-[0_8px_20px_rgba(139,92,246,0.35)] hover:-translate-y-[2px]"
        : "bg-white border border-black shadow-[3px_3px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
    }`}
  >
    <Linkedin size={22} />
  </a>

  {/* Instagram */}
  <a
    href="https://www.instagram.com/shamruthya_gopal/"
    target="_blank"
    rel="noopener noreferrer"
    className={`transition-all duration-300 p-2 rounded-md ${
      theme === "dark"
        ? "hover:bg-white/10 hover:backdrop-blur-md hover:border hover:border-white/10 hover:shadow-[0_8px_20px_rgba(139,92,246,0.35)] hover:-translate-y-[2px]"
        : "bg-white border border-black shadow-[3px_3px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none"
    }`}
  >
    <Instagram size={22} />
  </a>

</div>

          <a
            href="/Shamruth_resume.pdf"
            download
            className={`mt-8 inline-block px-8 py-3 rounded-xl transition hover:scale-105 ${
              theme === "dark"
                ? `${cardStyle}`
                : brutalAccentButton
            }`}
          >
            <Download className="inline mr-2" size={18} />
            Download CV
          </a>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
        <div className={`${cardStyle} p-3 rounded-full overflow-hidden flex items-center justify-center`}>
        <img
            src="/images/profile_pic.jpg"
            className="w-[280px] h-[280px] md:w-[360px] md:h-[360px] object-cover object-[center_35%] rounded-full"
            alt="Profile"
        />
        </div>


        </motion.div>
      </div>
    </section>
  );
}
