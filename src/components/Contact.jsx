import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { useTheme } from "../context/ThemeContext";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { theme } = useTheme();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  const cardStyle =
    theme === "dark"
      ? "bg-white/5 backdrop-blur-xl border border-white/10"
      : "bg-[#e0e5ec] shadow-[8px_8px_16px_#a3b1c6,-8px_-8px_16px_#ffffff]";

  const inputStyle =
    theme === "dark"
      ? "bg-white/5 border border-white/10 focus:border-violet-500"
      : "bg-[#e0e5ec] shadow-inner";

  return (
    <SectionWrapper
      id="contact"
      className="py-24 px-6 max-w-4xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-12 text-center text-violet-400">
        Let’s Work Together
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className={`p-8 rounded-2xl ${cardStyle}`}
      >
        {success ? (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="flex flex-col items-center text-center"
          >
            <CheckCircle size={50} className="text-green-400 mb-4" />
            <h3 className="text-xl font-bold">
              Message Sent Successfully!
            </h3>
            <p className="opacity-70 mt-2">
              I’ll get back to you soon 🚀
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              required
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
              placeholder="Your Name"
              className={`w-full p-4 rounded-xl outline-none transition ${inputStyle}`}
            />

            <input
              required
              type="email"
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, email: e.target.value })
              }
              placeholder="Your Email"
              className={`w-full p-4 rounded-xl outline-none transition ${inputStyle}`}
            />

            <textarea
              required
              rows="5"
              value={form.message}
              onChange={(e) =>
                setForm({ ...form, message: e.target.value })
              }
              placeholder="Your Message"
              className={`w-full p-4 rounded-xl outline-none transition ${inputStyle}`}
            />

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className={`w-full py-4 rounded-xl transition flex items-center justify-center gap-2 ${
                theme === "dark"
                  ? "bg-violet-600 hover:bg-violet-700 text-white"
                  : "bg-yellow-400 border-2 border-black shadow-[4px_4px_0px_#000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none text-black"
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
              <Send size={18} />
            </motion.button>
          </form>
        )}
      </motion.div>
    </SectionWrapper>
  );
}
