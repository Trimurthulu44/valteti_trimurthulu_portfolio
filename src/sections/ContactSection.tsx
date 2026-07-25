import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub, FaCheck, FaCopy } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setSubmitted(true);

    // Open user's email client directly addressed to valtetitrimurthulu207@gmail.com
    const subject = encodeURIComponent(formData.subject || `Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`Hi Valteti Trimurthulu,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${subject}&body=${body}`;
    
    // Open Gmail compose directly in a new window or fallback to mailto
    window.open(gmailComposeUrl, '_blank');
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;

    // Fire festive celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#8b5cf6', '#4f46e5', '#38bdf8'],
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 4000);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-purple-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-4"
          >
            <FaEnvelope />
            <span>Get In Touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400">Connect</span>
          </motion.h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Open to software engineering roles, full-stack internships, hackathons, and technical collaborations.
          </p>
        </div>

        {/* Content Layout: Contact Information Cards + Interactive Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-4"
          >
            {/* Email Card */}
            <div className="glass-card p-6 rounded-3xl flex items-center justify-between group hover:border-cyan-500/50 transition-all">
              <a
                href={PERSONAL_INFO.gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 flex-1 cursor-pointer"
                title={`Click to email ${PERSONAL_INFO.email}`}
              >
                <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                  <FaEnvelope />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">Direct Email</span>
                  <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {PERSONAL_INFO.email}
                  </span>
                </div>
              </a>
              <button
                type="button"
                onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all ml-2"
                title="Copy Email Address"
              >
                {copiedText === 'email' ? <FaCheck className="text-emerald-400 text-xs" /> : <FaCopy className="text-xs" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-card p-6 rounded-3xl flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 text-xl">
                  <FaPhone />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-slate-400 block">Phone / Mobile</span>
                  <a href={`tel:${PERSONAL_INFO.phone}`} className="text-sm font-bold text-white hover:text-purple-300 transition-colors">
                    {PERSONAL_INFO.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all"
                title="Copy Phone"
              >
                {copiedText === 'phone' ? <FaCheck className="text-emerald-400 text-xs" /> : <FaCopy className="text-xs" />}
              </button>
            </div>

            {/* Location Card */}
            <div className="glass-card p-6 rounded-3xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-xl">
                <FaMapMarkerAlt />
              </div>
              <div>
                <span className="text-[11px] font-mono uppercase text-slate-400 block">Location</span>
                <span className="text-sm font-bold text-white">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            {/* Social Channels Card */}
            <div className="glass-card p-6 rounded-3xl space-y-3">
              <span className="text-xs font-mono uppercase text-slate-400 block">Official Profiles</span>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-200 hover:text-purple-400 flex items-center justify-center gap-1.5 transition-all"
                >
                  <FaLinkedin className="text-base text-purple-400" /> LinkedIn
                </a>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-200 hover:text-cyan-400 flex items-center justify-center gap-1.5 transition-all"
                >
                  <FaGithub className="text-base text-cyan-400" /> GitHub
                </a>
                <a
                  href={PERSONAL_INFO.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-200 hover:text-amber-400 flex items-center justify-center gap-1.5 transition-all"
                >
                  <SiLeetcode className="text-base text-amber-400" /> LeetCode
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Premium Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 rounded-3xl border-white/10 relative overflow-hidden">
              <h3 className="text-2xl font-bold text-white mb-2">Send a Direct Message</h3>
              <p className="text-xs text-slate-400 mb-6">
                Fill out the form below and your message will be dispatched directly to Valteti's inbox.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-purple-950/40 border border-purple-500/50 text-center space-y-3 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-3xl mx-auto">
                    <FaPaperPlane />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Dispatched!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    Thank you for reaching out, {formData.name || 'friend'}. Your message has been transmitted and Valteti will reply promptly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Alexander Vance"
                        className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="alexander@company.com"
                        className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Subject / Role Title
                    </label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Software Engineer Opportunity / Project Inquiry"
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1.5">
                      Message Content *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your message here..."
                      className="w-full px-4 py-3 rounded-2xl bg-white/5 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 border border-purple-400/30 shadow-[0_0_25px_rgba(139,92,246,0.3)] transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <FaPaperPlane /> Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
