export default function Navbar() {
  return (
    <nav className="fixed w-full backdrop-blur-lg bg-black/30 border-b border-white/10 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-violet-400">
          Shamruth Gopal
        </h1>

        <div className="hidden md:flex space-x-8 text-sm">
          <a href="#home" className="hover:text-violet-400">Home</a>
          <a href="#about" className="hover:text-violet-400">About</a>
          <a href="#skills" className="hover:text-violet-400">Skills</a>
          <a href="#projects" className="hover:text-violet-400">Projects</a>
          <a href="#contact" className="hover:text-violet-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}
