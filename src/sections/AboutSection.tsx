import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaUserGraduate, FaTrophy, FaBriefcase, FaRocket, FaCheckCircle } from 'react-icons/fa';
import { PERSONAL_INFO, EDUCATION, EXPERIENCES } from '../data/portfolioData';
import PROFILE_PHOTO from "../assets/profile.jpg";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-purple-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-4"
          >
            <FaUserGraduate />
            <span>Engineering Story & Background</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Valteti</span>
          </motion.h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base leading-relaxed">
            Computer Science & Engineering student at Prathyusha Engineering College with a passion for building high-performance web applications and mastering Java ecosystem tools.
          </p>
        </div>

        {/* Content Grid: Story Card + Education Timeline & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Personal Story & Internship Spotlight */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Story Card */}
            <div className="glass-card glass-card-hover p-8 rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/10 rounded-bl-full pointer-events-none" />
              
              <div className="flex items-center gap-4 mb-5">
                <div className="relative w-16 h-16 rounded-2xl p-[2px] bg-gradient-to-tr from-cyan-400 via-purple-500 to-indigo-500 flex-shrink-0 shadow-[0_0_15px_rgba(139,92,246,0.3)]">
                  <img
                    src={PROFILE_PHOTO}
                    alt={PERSONAL_INFO.name}
                    referrerPolicy="no-referrer"
                    loading="eager"
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <FaRocket className="text-cyan-400 text-lg" />
                    <span>My Developer Journey</span>
                  </h3>
                  <span className="text-xs font-mono text-purple-300">Valteti Trimurthulu • CSE Engineer</span>
                </div>
              </div>
              
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                {PERSONAL_INFO.aboutDetailed}
              </p>

              <div className="space-y-3 border-t border-white/10 pt-6">
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Full Stack Engineering:</strong> Skilled in Java, Spring Boot REST APIs, React.js, and NoSQL/SQL databases.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Hackathons & Leadership:</strong> Participated in 5+ Hackathons (SIH, Cognizant, Google, and College Team Lead).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-emerald-400 mt-1 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Continuous Learning:</strong> Attended 20+ Technical Workshops in Java, AI, Web Development & Cloud.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-amber-400 mt-1 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">ACM Leadership:</strong> Active ACM Student Chapter Member & Marketing Lead (2025 – 2026).
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <FaCheckCircle className="text-indigo-400 mt-1 flex-shrink-0" />
                  <p className="text-xs sm:text-sm text-slate-300">
                    <strong className="text-white">Practical Experience:</strong> Completed Web Development Internship at Zyphotek Technology Solutions.
                  </p>
                </div>
              </div>
            </div>

            {/* Internship Spotlight Highlight Box */}
            <div className="glass-card p-6 rounded-3xl border-purple-500/30 bg-gradient-to-r from-purple-950/20 via-slate-900/40 to-cyan-950/20">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <FaBriefcase className="text-purple-400 text-lg" />
                  <span className="font-bold text-white text-base">Industry Internship</span>
                </div>
                <span className="text-xs font-mono text-cyan-300 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-500/30">
                  Zyphotek Technology Solutions
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Completed an offline Web Development Internship from June 2 to July 1, 2026. Enhanced hands-on problem-solving, frontend architecture, and practical engineering skills in a professional dev environment.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Key Metrics & Education Breakdown */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* CGPA Feature Box */}
            <div className="glass-card p-6 rounded-3xl border-cyan-500/30 relative overflow-hidden flex items-center justify-between">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block">Academic Excellence</span>
                <h4 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mt-1">
                  8.6 CGPA
                </h4>
                <span className="text-xs text-slate-300 mt-1 block">B.E. Computer Science & Engineering</span>
              </div>
              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-2xl">
                <FaGraduationCap />
              </div>
            </div>

            {/* Education Quick Cards */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-200 flex items-center gap-2">
                <FaGraduationCap className="text-purple-400" />
                <span>Academic Timeline</span>
              </h3>

              {EDUCATION.map((item) => (
                <div key={item.id} className="glass-card glass-card-hover p-5 rounded-2xl">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono text-purple-300 bg-purple-950/80 px-2.5 py-0.5 rounded border border-purple-800/40">
                      {item.period}
                    </span>
                    <span className="text-xs font-bold text-cyan-300">{item.grade}</span>
                  </div>
                  <h4 className="text-sm font-bold text-white mt-2">{item.degree}</h4>
                  <p className="text-xs text-slate-400 mt-1">{item.institution}, {item.location}</p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
