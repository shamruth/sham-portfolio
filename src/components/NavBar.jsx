import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        theme === "dark"
          ? "backdrop-blur-lg bg-black/30 border-b border-white/10"
          : "bg-white/70 backdrop-blur-md border-b border-slate-200"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-xl font-bold text-violet-500">
          Shamruthya Gopal N
        </h1>

        {/* NAV LINKS */}
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

              {/* Animated Underline */}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] w-0 transition-all duration-300 group-hover:w-full ${
                  theme === "dark"
                    ? "bg-violet-500"
                    : "bg-violet-500"
                }`}
              ></span>
            </a>
          ))}

          {/* THEME TOGGLE */}
          <button
            onClick={() =>
              setTheme(theme === "dark" ? "light" : "dark")
            }
            className={`p-2 rounded-full transition ${
              theme === "dark"
                ? "bg-white/10 hover:bg-white/20"
                : "bg-slate-100 hover:bg-slate-200"
            }`}
          >
            {theme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>

        </div>
      </div>
    </nav>
  );
}
