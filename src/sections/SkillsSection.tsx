import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaReact, FaServer, FaDatabase, FaBrain, FaCubes, FaProjectDiagram, FaLightbulb, FaDesktop, FaNetworkWired } from 'react-icons/fa';
import { SiOpenjdk, SiJavascript, SiPython, SiHtml5, SiTailwindcss, SiNodedotjs, SiSpringboot, SiMysql, SiMongodb, SiGit } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<number>(0);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'SiOpenjdk': return <SiOpenjdk className="text-amber-500" />;
      case 'SiJavascript': return <SiJavascript className="text-yellow-400" />;
      case 'SiPython': return <SiPython className="text-blue-400" />;
      case 'SiHtml5': return <SiHtml5 className="text-orange-500" />;
      case 'SiReact': return <FaReact className="text-cyan-400" />;
      case 'SiTailwindcss': return <SiTailwindcss className="text-cyan-300" />;
      case 'FaDesktop': return <FaDesktop className="text-indigo-400" />;
      case 'SiNodedotjs': return <SiNodedotjs className="text-emerald-500" />;
      case 'SiSpringboot': return <SiSpringboot className="text-green-400" />;
      case 'FaNetworkWired': return <FaNetworkWired className="text-purple-400" />;
      case 'SiMysql': return <SiMysql className="text-blue-500" />;
      case 'SiMongodb': return <SiMongodb className="text-emerald-400" />;
      case 'SiGit': return <SiGit className="text-red-400" />;
      case 'SiVisualstudiocode': return <VscCode className="text-blue-400" />;
      case 'FaCubes': return <FaCubes className="text-purple-400" />;
      case 'FaProjectDiagram': return <FaProjectDiagram className="text-cyan-400" />;
      case 'FaLightbulb': return <FaLightbulb className="text-yellow-400" />;
      default: return <FaLaptopCode className="text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-purple-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-4"
          >
            <FaLaptopCode />
            <span>Technical Capabilities</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400">Tech Stack</span>
          </motion.h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Comprehensive proficiency in full-stack Java engineering, web frameworks, and algorithmic problem solving.
          </p>
        </div>

        {/* Category Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(idx)}
              className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                activeCategory === idx
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-400/50 shadow-[0_0_20px_rgba(139,92,246,0.4)] scale-105'
                  : 'glass-card text-slate-400 hover:text-white border-white/10 hover:border-white/20'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {SKILL_CATEGORIES[activeCategory].skills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className="glass-card glass-card-hover p-6 rounded-3xl relative overflow-hidden group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl glass-pill border-white/10 flex items-center justify-center text-2xl shadow-inner group-hover:scale-110 transition-transform">
                    {getSkillIcon(skill.icon)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h3>
                    {skill.experience && (
                      <span className="text-xs text-slate-400 font-mono">
                        {skill.experience}
                      </span>
                    )}
                  </div>
                </div>

                <span className="text-xs font-mono font-bold text-purple-300 bg-purple-950/60 px-3 py-1 rounded-full border border-purple-800/40">
                  {skill.level}%
                </span>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden p-[1px] mt-2">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500 shadow-[0_0_10px_rgba(139,92,246,0.6)]"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
