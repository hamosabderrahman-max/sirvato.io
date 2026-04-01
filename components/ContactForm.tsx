"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submission
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-card p-8 text-center">
        <div className="mb-4 text-neon-green text-4xl">✓</div>
        <h3 className="font-grotesk font-bold text-2xl text-white mb-2">
          Message received.
        </h3>
        <p className="text-soft-grey">
          We&apos;ll be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="glass-card p-8 flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-grotesk text-soft-grey uppercase tracking-wider">
            Name
          </label>
          <input
            type="text"
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Your name"
            className="bg-black border border-neon-green/20 rounded-md px-4 py-2.5 text-sm text-white placeholder-soft-grey/50 focus:outline-none focus:border-neon-green/60 transition-colors"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-xs font-grotesk text-soft-grey uppercase tracking-wider">
            Email
          </label>
          <input
            type="email"
            name="email"
            required
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="bg-black border border-neon-green/20 rounded-md px-4 py-2.5 text-sm text-white placeholder-soft-grey/50 focus:outline-none focus:border-neon-green/60 transition-colors"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-grotesk text-soft-grey uppercase tracking-wider">
          Company
        </label>
        <input
          type="text"
          name="company"
          value={form.company}
          onChange={handleChange}
          placeholder="Your company (optional)"
          className="bg-black border border-neon-green/20 rounded-md px-4 py-2.5 text-sm text-white placeholder-soft-grey/50 focus:outline-none focus:border-neon-green/60 transition-colors"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-xs font-grotesk text-soft-grey uppercase tracking-wider">
          Message
        </label>
        <textarea
          name="message"
          required
          value={form.message}
          onChange={handleChange}
          placeholder="Tell us about your digital empire..."
          rows={5}
          className="bg-black border border-neon-green/20 rounded-md px-4 py-2.5 text-sm text-white placeholder-soft-grey/50 focus:outline-none focus:border-neon-green/60 transition-colors resize-none"
        />
      </div>
      <button
        type="submit"
        className="py-3 px-8 bg-neon-green text-black font-grotesk font-semibold rounded-md hover:shadow-neon-sm transition-all duration-200"
      >
        Send Message
      </button>
    </form>
  );
}
