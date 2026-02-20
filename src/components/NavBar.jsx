import { useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        theme === "dark"
          ? "backdrop-blur-lg bg-black/30 border-b border-white/10"
          : "bg-white/80 backdrop-blur-md border-b border-slate-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">

        {/* Logo */}
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className={`text-lg md:text-xl font-bold px-3 py-1 rounded-md transition-all duration-300 ${
              theme === "dark"
                ? "text-violet-500 hover:opacity-80"
                : "bg-[#fefae0] border-2 border-black shadow-[3px_3px_0px_#000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none text-black"
            }`}
          >
            Shamruthya Gopal N
          </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              className={`relative group text-sm font-medium transition-colors duration-300 ${
                theme === "dark"
                  ? "text-gray-300 hover:text-white"
                  : "text-slate-700 hover:text-violet-600"
              }`}
            >
              {item}
              <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-violet-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 rounded-full transition ${
              theme === "dark"
                ? "bg-white/10 hover:bg-white/20"
                : "bg-slate-100 hover:bg-slate-200"
            }`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-4 md:hidden">

          {/* Theme Toggle (Visible on Mobile) */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 rounded-full transition ${
              theme === "dark"
                ? "bg-white/10"
                : "bg-slate-100"
            }`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div
          className={`md:hidden px-6 pb-6 space-y-4 transition-all duration-300 ${
            theme === "dark"
              ? "bg-black/90 text-white"
              : "bg-white text-slate-800"
          }`}
        >
          {navItems.map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium hover:text-violet-500 transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}