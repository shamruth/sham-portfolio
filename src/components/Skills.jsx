import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { useTheme } from "../context/ThemeContext";

const skills = [
  // Programming
  { name: "C", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "Python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },

  // Web
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },

  // Game / 3D
  { name: "Unreal Engine 5", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg" },
  { name: "Blender", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/blender/blender-original.svg" },
];

export default function Skills() {
  const { theme } = useTheme();

  const lightCard =
    "bg-[#f6f6f3] shadow-[6px_6px_14px_#d4d3cd,-6px_-6px_14px_#ffffff]";

  return (
    <SectionWrapper
      id="skills"
      className="py-28 px-6 max-w-6xl mx-auto"
    >
      <h2 className="text-4xl font-bold text-violet-500 mb-16">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

        {skills.map((skill, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08 }}
            className={`p-8 rounded-2xl text-center transition-all duration-300 ${
              theme === "dark"
                ? "bg-white/5 backdrop-blur-xl border border-white/10 hover:shadow-violet-500/20 hover:shadow-xl"
                : `${lightCard} hover:shadow-lg`
            }`}
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-14 h-14 mx-auto mb-6 transition-transform duration-300 group-hover:scale-110"
            />

            <h3 className="text-lg font-semibold">
              {skill.name}
            </h3>
          </motion.div>
        ))}

      </div>
    </SectionWrapper>
  );
}
