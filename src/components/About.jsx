import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import SectionWrapper from "./SectionWrapper";
import { Globe, Gamepad2, Brain } from "lucide-react";

export default function About() {
  const { theme } = useTheme();

  const lightCard =
    "bg-[#f6f6f3] shadow-[6px_6px_14px_#d4d3cd,-6px_-6px_14px_#ffffff]";

  return (
    <SectionWrapper
      id="about"
      className="py-28 px-6 max-w-6xl mx-auto"
    >
      {/* HEADING */}
      <h2 className="text-4xl font-bold text-violet-500 mb-16">
        About Me
      </h2>

      {/* ================= TIMELINE ================= */}
      <div className="mb-24">
        <div className="relative border-l-2 border-violet-500 pl-8 space-y-16">

          {/* 12th */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-[9px] w-4 h-4 bg-violet-500 rounded-full"></div>

            <h3 className="text-xl font-semibold">
              12th Standard – Higher Secondary
            </h3>
            <p className="text-slate-600 mt-2">
              Bharathi Vidya Bhavan Higher Secondary School, Erode
            </p>
            <p className="text-slate-500">
              2022 – 2023
            </p>
          </motion.div>

          {/* BE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="absolute -left-[9px] w-4 h-4 bg-violet-500 rounded-full"></div>

            <h3 className="text-xl font-semibold">
              Bachelor of Engineering in Computer Science and Engineering
            </h3>
            <p className="text-slate-600 mt-2">
              Velalar College of Engineering and Technology, Erode
            </p>
            <p className="text-slate-500">
              2023 – 2027
            </p>
          </motion.div>

        </div>
      </div>

      {/* ================= INTERESTS ================= */}
      <h2 className="text-4xl font-bold text-violet-500 mb-12">
        My Interests
      </h2>

      <div className="grid md:grid-cols-3 gap-10">

        {/* Web Dev */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className={`p-10 rounded-2xl text-center transition hover:scale-105 ${
            theme === "dark"
              ? "bg-white/5 backdrop-blur-lg border border-white/10"
              : lightCard
          }`}
        >
          <Globe size={40} className="mx-auto text-violet-500 mb-6" />
          <h3 className="text-xl font-semibold">
            Web Development
          </h3>
        </motion.div>

        {/* Game Dev */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className={`p-10 rounded-2xl text-center transition hover:scale-105 ${
            theme === "dark"
              ? "bg-white/5 backdrop-blur-lg border border-white/10"
              : lightCard
          }`}
        >
          <Gamepad2 size={40} className="mx-auto text-violet-500 mb-6" />
          <h3 className="text-xl font-semibold">
            Game Development
          </h3>
        </motion.div>

        {/* AI ML */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className={`p-10 rounded-2xl text-center transition hover:scale-105 ${
            theme === "dark"
              ? "bg-white/5 backdrop-blur-lg border border-white/10"
              : lightCard
          }`}
        >
          <Brain size={40} className="mx-auto text-violet-500 mb-6" />
          <h3 className="text-xl font-semibold">
            AI & ML Learning
          </h3>
        </motion.div>

      </div>
    </SectionWrapper>
  );
}
