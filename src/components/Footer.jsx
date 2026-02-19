import { useTheme } from "../context/ThemeContext";

export default function Footer() {
  const { theme } = useTheme();

  return (
    <footer
  className={`mt-20 py-8 text-center text-sm tracking-wide transition ${
    theme === "dark"
      ? "border-t border-white/10 text-gray-400"
      : "border-t border-slate-200 text-slate-600"
  }`}
>
  © {new Date().getFullYear()} <span className="font-semibold text-violet-500">Shamruthya Gopal N</span>. All rights reserved.
</footer>

  );
}
