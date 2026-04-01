"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare, Send } from "lucide-react";
import AnimatedText from "@/components/ui/AnimatedText";
import Badge from "@/components/ui/Badge";
import GradientText from "@/components/ui/GradientText";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@sirvato.io",
    href: "mailto:hello@sirvato.io",
  },
  {
    icon: MessageSquare,
    label: "Live Chat",
    value: "Available 24/7",
    href: "#",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "San Francisco, CA",
    href: "#",
  },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedText delay={0}>
            <div className="flex justify-center mb-4">
              <Badge variant="neon">Contact</Badge>
            </div>
          </AnimatedText>
          <AnimatedText delay={0.1}>
            <h2 className="text-4xl sm:text-5xl font-heading font-bold tracking-tight mb-4">
              Let&apos;s <GradientText>get in touch</GradientText>
            </h2>
          </AnimatedText>
          <AnimatedText delay={0.2}>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Have a question or ready to get started? Our team is here to help
              you unlock the full potential of Sirvato.
            </p>
          </AnimatedText>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Contact info */}
          <div className="lg:col-span-2">
            <AnimatedText delay={0.1}>
              <h3 className="text-xl font-heading font-semibold text-white mb-6">
                Contact information
              </h3>
            </AnimatedText>

            <div className="space-y-4 mb-10">
              {contactInfo.map(({ icon: Icon, label, value, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-dark-200 border border-white/5 hover:border-neon/20 transition-all duration-200 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-neon/10 border border-neon/20 flex items-center justify-center group-hover:bg-neon/20 transition-colors">
                    <Icon className="w-4 h-4 text-neon" />
                  </div>
                  <div>
                    <p className="text-xs text-white/40 mb-0.5">{label}</p>
                    <p className="text-sm text-white font-medium">{value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <AnimatedText delay={0.4}>
              <div className="p-5 rounded-xl bg-neon/5 border border-neon/20">
                <p className="text-sm text-neon font-heading font-medium mb-1">
                  Average response time
                </p>
                <p className="text-2xl font-heading font-bold text-white">
                  &lt; 2 hours
                </p>
                <p className="text-xs text-white/40 mt-1">
                  During business hours (Mon–Fri, 9am–6pm PT)
                </p>
              </div>
            </AnimatedText>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 p-8 rounded-2xl bg-dark-200 border border-white/5"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-16 h-16 rounded-full bg-neon/20 border border-neon/40 flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(0,255,136,0.3)]">
                  <Send className="w-6 h-6 text-neon" />
                </div>
                <h3 className="text-xl font-heading font-bold text-white mb-2">
                  Message sent!
                </h3>
                <p className="text-white/50 text-sm">
                  We&apos;ll get back to you within 2 hours during business hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full px-4 py-3 rounded-lg bg-dark-300 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/30 transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-white/60 mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 rounded-lg bg-dark-300 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/30 transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/60 mb-1.5">
                    Company
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Acme Inc."
                    className="w-full px-4 py-3 rounded-lg bg-dark-300 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/30 transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/60 mb-1.5">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your needs..."
                    className="w-full px-4 py-3 rounded-lg bg-dark-300 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-neon/50 focus:ring-1 focus:ring-neon/30 transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="group w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-lg font-heading font-semibold text-sm bg-neon text-dark hover:bg-neon/90 shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_30px_rgba(0,255,136,0.5)] transition-all duration-200"
                >
                  Send Message
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
