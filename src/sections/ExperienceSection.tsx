import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaCheckCircle, FaLaptopCode } from 'react-icons/fa';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-purple-500/30 text-xs font-mono uppercase tracking-widest text-purple-300 mb-4"
          >
            <FaBriefcase />
            <span>Professional Career & Leadership</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Experience & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">Leadership</span>
          </motion.h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Practical development internships and proven team leadership in competitive hackathons.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Glowing Connector Line */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-1/2 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-indigo-600 -translate-x-1/2 hidden sm:block opacity-40" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.15 }}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Node Ring */}
                  <div className="absolute left-4 sm:left-1/2 w-8 h-8 rounded-full bg-[#050816] border-2 border-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.8)] -translate-x-1/2 z-20 flex items-center justify-center hidden sm:flex">
                    <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  </div>

                  {/* Card Content Box */}
                  <div className="w-full sm:w-[calc(50%-2rem)]">
                    <div className="glass-card glass-card-hover p-6 rounded-3xl border-white/10 relative overflow-hidden group">
                      
                      {/* Badge Tag */}
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-mono font-bold text-cyan-300 bg-cyan-950/80 px-3 py-1 rounded-full border border-cyan-800/40 flex items-center gap-1.5">
                          {exp.type === 'Internship' ? <FaLaptopCode /> : <FaUsers />}
                          {exp.badge}
                        </span>
                        <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                          <FaCalendarAlt /> {exp.period}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>

                      <div className="text-xs font-medium text-purple-400 mt-1 flex items-center gap-2">
                        <span>{exp.company}</span>
                        <span>•</span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <FaMapMarkerAlt /> {exp.location}
                        </span>
                      </div>

                      <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-300">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <FaCheckCircle className="text-purple-400 mt-1 flex-shrink-0 text-xs" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Pills */}
                      <div className="mt-4 pt-4 border-t border-white/10 flex flex-wrap gap-1.5">
                        {exp.skills.map((skill) => (
                          <span
                            key={skill}
                            className="text-[11px] font-mono bg-white/5 text-slate-300 px-2.5 py-0.5 rounded-lg border border-white/10"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
