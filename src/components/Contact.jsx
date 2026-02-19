import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    alert("Message Sent 🚀");
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-10 text-center text-violet-400">
        Contact Me
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          className="w-full p-4 bg-white/5 border border-white/10 rounded-xl"
          placeholder="Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          className="w-full p-4 bg-white/5 border border-white/10 rounded-xl"
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          className="w-full p-4 bg-white/5 border border-white/10 rounded-xl"
          placeholder="Message"
          rows="5"
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button className="px-8 py-4 bg-violet-600 rounded-xl hover:bg-violet-700">
          Send Message
        </button>
      </form>
    </section>
  );
}
