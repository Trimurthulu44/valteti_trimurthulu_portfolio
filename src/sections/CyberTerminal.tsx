import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaTerminal,
  FaPaperPlane,
  FaCopy,
  FaCheck,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaPlay,
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audioSynth';

export const CyberTerminal: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const [inputCmd, setInputCmd] = useState('');
  const [terminalLogs, setTerminalLogs] = useState<Array<{ cmd: string; output: React.ReactNode }>>([
    {
      cmd: 'valteti --status',
      output: (
        <span className="text-emerald-400 font-mono text-xs">
          ✅ QUANTUM CORE DISPATCH READY • All communication channels operational.
        </span>
      ),
    },
  ]);

  const handleCopy = (text: string, label: string) => {
    soundFx.playClick();
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleCmdSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = inputCmd.trim().toLowerCase();
    if (!clean) return;

    soundFx.playClick();
    let out: React.ReactNode;

    switch (clean) {
      case 'help':
        out = (
          <div className="text-xs font-mono text-slate-300 space-y-1">
            <p><span className="text-cyan-300 font-bold">leetcode</span> - Open LeetCode profile (@TrimurthuluV)</p>
            <p><span className="text-cyan-300 font-bold">email</span> - Copy primary email address</p>
            <p><span className="text-cyan-300 font-bold">phone</span> - Copy contact phone number</p>
            <p><span className="text-cyan-300 font-bold">linkedin</span> - Open LinkedIn profile</p>
            <p><span className="text-cyan-300 font-bold">github</span> - Open GitHub profile</p>
            <p><span className="text-cyan-300 font-bold">clear</span> - Clear terminal logs</p>
          </div>
        );
        break;

      case 'leetcode':
        window.open(PERSONAL_INFO.leetcodeUrl, '_blank');
        out = <span className="text-amber-300 font-mono text-xs">🚀 Navigating to LeetCode profile: {PERSONAL_INFO.leetcodeUrl}</span>;
        break;

      case 'linkedin':
        window.open(PERSONAL_INFO.linkedinUrl, '_blank');
        out = <span className="text-purple-300 font-mono text-xs">🚀 Opening LinkedIn profile...</span>;
        break;

      case 'github':
        window.open(PERSONAL_INFO.githubUrl, '_blank');
        out = <span className="text-cyan-300 font-mono text-xs">🚀 Opening GitHub profile...</span>;
        break;

      case 'email':
      case 'mail':
        window.open(PERSONAL_INFO.gmailUrl, '_blank');
        window.location.href = `mailto:${PERSONAL_INFO.email}`;
        navigator.clipboard.writeText(PERSONAL_INFO.email);
        out = <span className="text-emerald-300 font-mono text-xs">✉️ Opening email compose for {PERSONAL_INFO.email}...</span>;
        break;

      case 'clear':
        setTerminalLogs([]);
        setInputCmd('');
        return;

      default:
        out = <span className="text-rose-400 font-mono text-xs">Unknown command: '{clean}'. Type 'help' for options.</span>;
    }

    setTerminalLogs((prev) => [...prev, { cmd: inputCmd, output: out }]);
    setInputCmd('');
  };

  const handleSubmitMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    soundFx.playWarp();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#06b6d4', '#a855f7', '#f59e0b'],
      });
    }, 1200);
  };

  return (
    <section id="terminal" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full cyber-glass-glow text-xs font-mono text-cyan-300 mb-3"
          >
            <FaTerminal className="text-purple-400" />
            <span>DIRECT COMMUNICATION DISPATCH</span>
          </motion.div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Cybernetic <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-amber-300">Contact Terminal</span>
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-sm font-body">
            Initiate real-time communications, inspect command lines, or dispatch encrypted messages directly to Valteti Trimurthulu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Links & Interactive Shell Console */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Pod */}
            <div className="cyber-glass rounded-3xl p-6 border border-white/10 space-y-4">
              <span className="text-xs font-mono uppercase text-cyan-300 font-bold block">
                DIRECT CONTACT ACCESS
              </span>

              <div className="space-y-3 font-mono text-xs">
                {/* Email */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between group hover:border-cyan-500/50 transition-all">
                  <a
                    href={PERSONAL_INFO.gmailUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 truncate text-slate-200 hover:text-cyan-300 transition-colors"
                    title={`Compose email to ${PERSONAL_INFO.email}`}
                  >
                    <FaEnvelope className="text-cyan-400 text-base shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="truncate">{PERSONAL_INFO.email}</span>
                  </a>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-300 transition-all cursor-pointer"
                    title="Copy Email"
                  >
                    {copiedField === 'email' ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                  </button>
                </div>

                {/* Phone */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-purple-400 text-base shrink-0" />
                    <span className="text-slate-200">{PERSONAL_INFO.phone}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-purple-300 transition-all cursor-pointer"
                  >
                    {copiedField === 'phone' ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                  </button>
                </div>

                {/* Location */}
                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <FaMapMarkerAlt className="text-amber-400 text-base shrink-0" />
                  <span className="text-slate-200">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              {/* Social Channels Row */}
              <div className="grid grid-cols-3 gap-2 pt-2">
                <a
                  href={PERSONAL_INFO.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl cyber-glass-amber border border-amber-500/40 text-xs font-bold text-amber-300 hover:scale-105 flex items-center justify-center gap-1.5 transition-all"
                >
                  <SiLeetcode className="text-amber-400" /> LeetCode
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-200 hover:text-purple-300 flex items-center justify-center gap-1.5 transition-all"
                >
                  <FaLinkedin className="text-purple-400" /> LinkedIn
                </a>
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-bold text-slate-200 hover:text-cyan-300 flex items-center justify-center gap-1.5 transition-all"
                >
                  <FaGithub className="text-cyan-400" /> GitHub
                </a>
              </div>

            </div>

            {/* Interactive Shell Output Box */}
            <div className="cyber-glass rounded-3xl p-5 border border-white/10 font-mono text-xs space-y-3 bg-[#030712]/90">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <span className="text-slate-400 font-bold">valteti@quantum-shell</span>
                <span className="text-[10px] text-cyan-300">Type 'help'</span>
              </div>

              <div className="max-h-40 overflow-y-auto space-y-2">
                {terminalLogs.map((log, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-purple-400 font-bold">$ {log.cmd}</p>
                    <div className="pl-3">{log.output}</div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleCmdSubmit} className="flex items-center gap-2 pt-2 border-t border-white/10">
                <span className="text-cyan-400 font-bold">$</span>
                <input
                  type="text"
                  value={inputCmd}
                  onChange={(e) => setInputCmd(e.target.value)}
                  placeholder="type 'leetcode', 'email', 'help'..."
                  className="w-full bg-transparent text-slate-100 focus:outline-none placeholder:text-slate-600 font-mono"
                />
                <button type="submit" className="text-cyan-400 hover:text-cyan-300 cursor-pointer">
                  <FaPlay className="text-[10px]" />
                </button>
              </form>
            </div>

          </div>

          {/* Right Column: Encrypted Message Dispatch Terminal Form */}
          <div className="lg:col-span-7">
            <div className="cyber-glass-glow rounded-3xl p-6 sm:p-8 border border-purple-500/40 relative shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-black font-display text-white">
                    Dispatch <span className="text-cyan-300">Encrypted Message</span>
                  </h3>
                  <p className="text-xs font-mono text-slate-400 mt-0.5">
                    Direct transmission to Valteti Trimurthulu's inbox
                  </p>
                </div>
                <div className="p-3 rounded-2xl bg-purple-950/80 border border-purple-500/40 text-purple-300 hidden sm:block">
                  <FaPaperPlane className="text-lg" />
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-emerald-950/80 border border-emerald-500/50 text-center space-y-3 font-mono"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/40 flex items-center justify-center mx-auto text-2xl shadow-[0_0_25px_rgba(16,185,129,0.5)]">
                    <FaCheck />
                  </div>
                  <h4 className="text-xl font-bold font-display text-white">
                    Transmission Dispatched Successfully!
                  </h4>
                  <p className="text-xs text-slate-300 font-body">
                    Thank you, {formData.name}! Your message has been transmitted. Valteti will respond promptly.
                  </p>
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setSubmitted(false);
                      setFormData({ name: '', email: '', message: '' });
                    }}
                    className="mt-4 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-xs cursor-pointer"
                  >
                    Send Another Transmission
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmitMessage} className="space-y-4 font-mono">
                  <div>
                    <label className="text-xs text-slate-300 font-bold block mb-1.5">
                      IDENTIFIER / YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full px-4 py-3 rounded-2xl bg-black/40 border border-white/10 text-slate-100 placeholder:text-slate-600 text-xs focus:outline-none focus:border-cyan-400/60 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-bold block mb-1.5">
                      RETURN EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-3 rounded-2xl bg-black/40 border border-white/10 text-slate-100 placeholder:text-slate-600 text-xs focus:outline-none focus:border-cyan-400/60 transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-bold block mb-1.5">
                      MESSAGE PAYLOAD *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Type your message, project opportunity, or collaboration offer here..."
                      className="w-full px-4 py-3 rounded-2xl bg-black/40 border border-white/10 text-slate-100 placeholder:text-slate-600 text-xs focus:outline-none focus:border-cyan-400/60 transition-all font-body"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    onMouseEnter={() => soundFx.playHover()}
                    className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-[0_0_30px_rgba(168,85,247,0.4)] border border-cyan-300/40 flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.02]"
                  >
                    {isSubmitting ? (
                      <span>ENCRYPTING & TRANSMITTING...</span>
                    ) : (
                      <>
                        <FaPaperPlane /> Dispatch Message Payload
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
