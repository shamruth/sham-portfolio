const skills = [
  { name: "React", percent: 90 },
  { name: "Node.js", percent: 85 },
  { name: "MongoDB", percent: 80 },
  { name: "JavaScript", percent: 95 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-violet-400 mb-16">
        Skills
      </h2>

      <div className="grid md:grid-cols-4 gap-10 justify-items-center">
        {skills.map((skill, i) => (
          <div key={i} className="relative w-40 h-40">
            <svg className="transform -rotate-90 w-40 h-40">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="gray"
                strokeWidth="10"
                fill="transparent"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="#7c3aed"
                strokeWidth="10"
                fill="transparent"
                strokeDasharray={440}
                strokeDashoffset={440 - (440 * skill.percent) / 100}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <h4 className="text-lg font-bold">{skill.name}</h4>
              <p className="text-violet-400">{skill.percent}%</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
