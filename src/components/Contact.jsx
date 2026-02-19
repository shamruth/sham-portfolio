import React, { useState } from 'react';
import axios from 'axios';
import Button from './Button';

export const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!form.name || !form.email || !form.message) return 'All fields required.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) return 'Invalid email.';
    return '';
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const err = validate();
    if (err) { setError(err); return; }
    setStatus('sending');
    setError('');
    try {
      const res = await axios.post('/api/contact', form);
      if (res.data.success) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setError(res.data.error || 'Failed to send.');
      }
    } catch {
      setStatus('error');
      setError('Failed to send.');
    }
  };

  return (
    <section id="contact" className="py-16 bg-purple-300 border-4 border-black shadow-[8px_8px_0_0_#000] mx-auto max-w-2xl mt-8">
      <h2 className="text-4xl font-extrabold mb-6 text-center text-black uppercase">Contact Me</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="bg-white border-4 border-black px-4 py-2 font-bold text-black focus:outline-none focus:ring-2 focus:ring-black"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          disabled={status === 'sending'}
        />
        <input
          className="bg-white border-4 border-black px-4 py-2 font-bold text-black focus:outline-none focus:ring-2 focus:ring-black"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          disabled={status === 'sending'}
        />
        <textarea
          className="bg-white border-4 border-black px-4 py-2 font-bold text-black focus:outline-none focus:ring-2 focus:ring-black"
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          disabled={status === 'sending'}
          rows={5}
        />
        <Button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </Button>
        {status === 'success' && <div className="text-green-600 font-bold">Message sent!</div>}
        {error && <div className="text-red-600 font-bold">{error}</div>}
      </form>
    </section>
  );
};
