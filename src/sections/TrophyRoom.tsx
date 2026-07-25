import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaAward,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaLinkedin,
  FaTrophy,
  FaMedal,
  FaTimes,
  FaShieldAlt,
  FaCertificate,
} from 'react-icons/fa';
import { CERTIFICATIONS, HACKATHONS, PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audioSynth';

export const TrophyRoom: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<typeof CERTIFICATIONS[0] | null>(null);

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full cyber-glass-glow text-xs font-mono text-cyan-300 mb-3"
          >
            <FaTrophy className="text-amber-400" />
            <span>ARTIFACT SHOWCASE & VERIFICATIONS</span>
          </motion.div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Certified <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-purple-300 to-cyan-300">Artifact Gallery</span>
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-sm font-body">
            Industry credentials and competitive hackathon honors verified by global tech leaders. Click any credential to verify directly on LinkedIn.
          </p>
        </div>

        {/* Hackathon Badges Top Highlight */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {HACKATHONS.map((h, i) => (
            <motion.div
              key={h.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-3xl cyber-glass-amber border border-amber-500/40 relative shadow-2xl flex items-start gap-4 group hover:scale-105 transition-all"
            >
              <div className="p-3.5 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 shrink-0">
                <FaTrophy className="text-2xl group-hover:rotate-12 transition-transform" />
              </div>
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-amber-300 font-bold uppercase tracking-wider block">
                  {h.badge}
                </span>
                <h4 className="text-lg font-bold font-display text-white">
                  {h.title}
                </h4>
                <p className="text-xs text-slate-300 font-body">
                  {h.organizer} • {h.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certificate Artifacts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="cyber-glass rounded-3xl p-6 border border-white/10 hover:border-purple-500/50 shadow-2xl flex flex-col justify-between group transition-all relative overflow-hidden"
            >
              {/* Refractive Light Sweep Line */}
              <div className="absolute -inset-full top-0 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:translate-x-full transition-transform duration-1000 pointer-events-none" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyan-300 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 font-bold">
                    {cert.issuer}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 font-bold">
                    {cert.year || 'Certified'}
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-3 rounded-2xl bg-purple-950/80 border border-purple-500/40 text-purple-300 shrink-0">
                    <FaCertificate className="text-xl group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h3>
                  </div>
                </div>

                {cert.skills && cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-slate-300 font-mono">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons: LinkedIn Verification & Details */}
              <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between">
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => soundFx.playHover()}
                  onClick={() => soundFx.playClick()}
                  className="px-3.5 py-1.5 rounded-xl bg-purple-950/80 hover:bg-purple-900 text-purple-200 border border-purple-500/40 text-xs font-mono font-bold flex items-center gap-1.5 transition-all shadow-md cursor-pointer hover:scale-105"
                  title="Verify directly on LinkedIn"
                >
                  <FaLinkedin className="text-cyan-400 text-sm" />
                  <span>Check on LinkedIn</span>
                  <FaExternalLinkAlt className="text-[9px]" />
                </a>

                <button
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedCert(cert);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all text-xs font-mono cursor-pointer"
                >
                  Inspect
                </button>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Certificate Detail Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 p-4 bg-black/80 backdrop-blur-xl flex items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="cyber-glass-glow border border-purple-500/50 rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl font-mono space-y-4"
              >
                <button
                  onClick={() => {
                    soundFx.playClick();
                    setSelectedCert(null);
                  }}
                  className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer"
                >
                  <FaTimes />
                </button>

                <div className="flex items-center gap-2">
                  <FaShieldAlt className="text-emerald-400 text-base" />
                  <span className="text-xs text-emerald-300 font-bold uppercase">AUTHENTICATED CREDENTIAL</span>
                </div>

                <h3 className="text-2xl font-bold font-display text-white">
                  {selectedCert.title}
                </h3>

                <p className="text-xs text-cyan-300 font-bold">
                  Issued by {selectedCert.issuer} {selectedCert.year ? `(${selectedCert.year})` : ''}
                </p>

                {selectedCert.skills && selectedCert.skills.length > 0 && (
                  <div className="space-y-1.5 pt-2">
                    <span className="text-xs font-bold text-slate-300">VALIDATED SKILLS:</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedCert.skills.map((s, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded bg-purple-950/80 text-purple-200 border border-purple-500/30 text-xs">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Authenticated Artifact</span>

                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-lg"
                  >
                    <FaLinkedin className="text-sm" /> Check on LinkedIn <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>

              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
