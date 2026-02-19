export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center text-violet-400 mb-16">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-16">

        {/* TIMELINE */}
        <div className="space-y-12 border-l-2 border-violet-500 pl-6">
          <div>
            <h3 className="text-xl font-bold">10th Standard</h3>
            <p className="text-gray-400">Completed with strong academic foundation.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold">12th Standard</h3>
            <p className="text-gray-400">Focused on Computer Science fundamentals.</p>
          </div>

          <div>
            <h3 className="text-xl font-bold">Bachelor's Degree</h3>
            <p className="text-gray-400">Pursuing Computer Science Engineering.</p>
          </div>
        </div>

        {/* INTEREST CARDS */}
        <div className="grid gap-6">
          {["Full Stack Development", "AI & Machine Learning", "Cloud & DevOps"].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:scale-105 transition"
            >
              <h4 className="text-xl font-semibold text-violet-400">
                {item}
              </h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
