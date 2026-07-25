import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt, FaCheckCircle, FaAward } from 'react-icons/fa';
import { EDUCATION } from '../data/portfolioData';

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-purple-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-4"
          >
            <FaGraduationCap />
            <span>Academic Qualifications</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Education <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400">Journey</span>
          </motion.h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Academic achievements and computer science specialization at Prathyusha Engineering College.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-6">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              className="glass-card glass-card-hover p-6 sm:p-8 rounded-3xl relative overflow-hidden group"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/40 inline-block mb-2">
                    {edu.period}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {edu.degree}
                  </h3>
                  <p className="text-xs sm:text-sm text-purple-300 mt-1 flex items-center gap-1.5 font-medium">
                    <FaMapMarkerAlt /> {edu.institution} • {edu.location}
                  </p>
                </div>

                <div className="flex flex-col items-start sm:items-end">
                  <span className="text-xs font-mono uppercase text-slate-400">Score / Grade</span>
                  <span className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 font-mono">
                    {edu.grade}
                  </span>
                </div>
              </div>

              {/* Highlights Bullet List */}
              <div className="space-y-2">
                {edu.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <FaCheckCircle className="text-purple-400 mt-1 text-xs flex-shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
