import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaAward, FaCheckCircle, FaMedal, FaExternalLinkAlt, FaFigma, FaLaptopCode, FaTrophy, FaCode, FaGithub, FaUsers, FaLinkedin } from 'react-icons/fa';
import { SiOpenjdk, SiPython, SiHtml5, SiMongodb, SiGoogle } from 'react-icons/si';
import { CERTIFICATIONS, HACKATHONS, PERSONAL_INFO } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'hackathons' | 'certifications'>('all');

  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'SiOpenjdk': return <SiOpenjdk className="text-amber-500" />;
      case 'SiPython': return <SiPython className="text-blue-400" />;
      case 'SiHtml5': return <SiHtml5 className="text-orange-500" />;
      case 'SiMongodb': return <SiMongodb className="text-emerald-400" />;
      case 'FaFigma': return <FaFigma className="text-purple-400" />;
      case 'SiGoogle': return <SiGoogle className="text-red-400" />;
      case 'FaMedal': return <FaMedal className="text-yellow-400" />;
      case 'FaTrophy': return <FaTrophy className="text-amber-400" />;
      case 'FaLaptopCode': return <FaLaptopCode className="text-cyan-400" />;
      default: return <FaAward className="text-cyan-400" />;
    }
  };

  return (
    <section id="certifications" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-purple-500/30 text-xs font-mono uppercase tracking-widest text-purple-300 mb-4"
          >
            <FaAward />
            <span>Verified Credentials & Competitions</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Hackathons & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">Certifications</span>
          </motion.h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Leadership in Google Solution Challenge, PEC Hackathons, SIH, and verified technical credentials.
          </p>

          {/* Interactive Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold font-mono transition-all duration-300 ${
                activeTab === 'all'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 border border-purple-400/30 scale-105'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              All Highlights
            </button>
            <button
              onClick={() => setActiveTab('hackathons')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold font-mono transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'hackathons'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 border border-purple-400/30 scale-105'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              <FaTrophy className="text-amber-400 text-xs" />
              Hackathons ({HACKATHONS.length})
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold font-mono transition-all duration-300 flex items-center gap-2 ${
                activeTab === 'certifications'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25 border border-purple-400/30 scale-105'
                  : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
              }`}
            >
              <FaCheckCircle className="text-emerald-400 text-xs" />
              Certifications ({CERTIFICATIONS.length})
            </button>
          </div>
        </div>

        {/* Hackathons Showcase Grid */}
        {(activeTab === 'all' || activeTab === 'hackathons') && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-sm border border-amber-500/30">
                <FaTrophy />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Hackathon Achievements & Leadership
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {HACKATHONS.map((hack, idx) => (
                <motion.div
                  key={hack.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className="glass-card glass-card-hover p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between group border border-white/10 hover:border-purple-500/40"
                >
                  <div className="absolute top-0 right-0 w-28 h-28 bg-amber-500/10 rounded-bl-full pointer-events-none group-hover:bg-amber-500/20 transition-all" />

                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="text-[11px] font-mono font-semibold text-amber-400 bg-amber-950/80 px-3 py-1 rounded-full border border-amber-800/50 flex items-center gap-1.5">
                        <FaTrophy className="text-[10px]" /> {hack.badge}
                      </span>
                      <span className="text-xs text-slate-400 font-mono font-bold">
                        {hack.year}
                      </span>
                    </div>

                    <h4 className="text-lg font-extrabold text-white group-hover:text-amber-300 transition-colors">
                      {hack.title}
                    </h4>
                    <p className="text-xs font-mono text-purple-300 mt-1 flex items-center gap-1.5">
                      <FaUsers className="text-purple-400" /> {hack.role}
                    </p>
                    <p className="text-xs text-slate-400 mt-0.5 font-medium">
                      Org: {hack.organizer}
                    </p>

                    <div className="mt-4 p-3 rounded-2xl bg-white/5 border border-white/5">
                      <span className="text-xs font-bold text-cyan-300 block mb-1">
                        Project: {hack.projectTitle}
                      </span>
                      <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">
                        {hack.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {hack.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono bg-purple-950/50 text-purple-200 px-2.5 py-0.5 rounded-md border border-purple-800/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5">
                      <FaCheckCircle className="text-xs" /> Verified Competition
                    </span>
                    <span className="text-[11px] font-mono text-purple-300 bg-purple-950/60 px-2.5 py-0.5 rounded-full border border-purple-800/40">
                      {hack.year}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Certifications Cards Grid */}
        {(activeTab === 'all' || activeTab === 'certifications') && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm border border-purple-500/30">
                <FaAward />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Verified Technical Certifications
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.4 }}
                  className="glass-card glass-card-hover p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between group"
                >
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${cert.badgeColor} opacity-10 rounded-bl-full pointer-events-none group-hover:opacity-25 transition-opacity`} />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl glass-pill border-white/10 flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform">
                        {getCertIcon(cert.icon)}
                      </div>
                      <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950/80 px-2.5 py-1 rounded-full border border-cyan-800/40">
                        {cert.issuer}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-xs text-slate-400 font-mono mt-1">
                      Issued by {cert.issuer} {cert.year ? `• ${cert.year}` : ''}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[10px] font-mono bg-white/5 text-slate-300 px-2 py-0.5 rounded border border-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span className="flex items-center gap-1 text-emerald-400">
                      <FaCheckCircle className="text-xs" /> Verified Credential
                    </span>
                    <a
                      href={PERSONAL_INFO.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-300 hover:text-cyan-200 hover:underline flex items-center gap-1.5 cursor-pointer font-medium"
                    >
                      <FaLinkedin className="text-purple-400 text-xs" /> Check on LinkedIn <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

