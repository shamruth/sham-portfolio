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
          ? "backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]"
          : "bg-white border-b border-slate-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="text-lg md:text-xl font-bold text-violet-500"
        >
          Shamruthya Gopal N
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">

          {navItems.map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
            className={`relative text-sm font-medium px-3 py-1 rounded-md transition-all duration-300 ${
              theme === "dark"
                ? "text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-md hover:border hover:border-white/10 hover:shadow-[0_8px_20px_rgba(139,92,246,0.25)] hover:-translate-y-[2px]"
                : "text-black hover:bg-white hover:border hover:border-black hover:shadow-[3px_3px_0px_#000] hover:-translate-x-[1px] hover:-translate-y-[1px]"
            }`}
            >
              {item}

              {/* Underline only in dark */}
              {theme === "dark" && (
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-violet-500 transition-all duration-300 hover:w-full"></span>
              )}
            </a>
          ))}

          {/* THEME TOGGLE */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 rounded-full transition ${
              theme === "dark"
                ? "bg-white/10 border border-white/10 backdrop-blur-md shadow-inner"
                : "border border-black"
            }`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

        </div>

        {/* MOBILE CONTROLS */}
        <div className="flex items-center gap-4 md:hidden">

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`p-2 rounded-full transition ${
              theme === "dark"
                ? "bg-white/10 border border-white/10 backdrop-blur-md shadow-inner"
                : "border border-black"
            }`}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>

      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div
          className={`md:hidden mx-4 mb-6 rounded-2xl p-6 space-y-5 transition-all duration-300 ${
            theme === "dark"
              ? "backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
              : "bg-white border border-black"
          }`}
        >
          {navItems.map((item, i) => (
            <a
              key={i}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={`block text-base font-medium transition-all ${
                theme === "dark"
                  ? "text-gray-300 hover:text-white hover:bg-white/10 hover:backdrop-blur-md hover:border hover:border-white/10 hover:shadow-[0_8px_20px_rgba(139,92,246,0.25)] hover:-translate-y-[2px] px-3 py-2 rounded-md transition-all duration-300"
                  : "text-black hover:border hover:border-black hover:shadow-[3px_3px_0px_#000] hover:-translate-x-[1px] hover:-translate-y-[1px] px-2 py-1"
              }`}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}