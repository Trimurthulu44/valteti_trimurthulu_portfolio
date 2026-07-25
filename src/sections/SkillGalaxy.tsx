import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaJava, FaReact, FaDatabase, FaGitAlt, FaHtml5, FaCss3Alt, FaTimes, FaCheckCircle, FaLaptopCode, FaCube } from 'react-icons/fa';
import { SiSpringboot, SiJavascript, SiPython, SiMysql, SiMongodb, SiLeetcode, SiTailwindcss } from 'react-icons/si';
import { SKILL_CATEGORIES, PROJECTS } from '../data/portfolioData';
import { soundFx } from '../utils/audioSynth';

interface SkillNode {
  id: string;
  name: string;
  category: string;
  level: number;
  icon: React.ReactNode;
  orbitRadius: number;
  speed: number;
  color: string;
  description: string;
  projectsCount: number;
}

export const SkillGalaxy: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillNode | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');

  // Flattened & Enhanced Skill Nodes for Orbit System
  const skillNodes: SkillNode[] = [
    {
      id: 'java',
      name: 'Java (Core & OOP)',
      category: 'Languages',
      level: 92,
      icon: <FaJava className="text-amber-400 text-2xl" />,
      orbitRadius: 130,
      speed: 18,
      color: 'from-amber-500 to-orange-600',
      description: 'Expert in Java OOP principles, Collection Framework, Multi-threading, Exception Handling, Data Structures, and Algorithmic problem solving.',
      projectsCount: 6,
    },
    {
      id: 'springboot',
      name: 'Spring Boot',
      category: 'Backend',
      level: 88,
      icon: <SiSpringboot className="text-emerald-400 text-2xl" />,
      orbitRadius: 190,
      speed: 24,
      color: 'from-emerald-500 to-green-600',
      description: 'Enterprise RESTful Web Services, Spring Data JPA, Spring Security, Microservices Architecture, and Hibernate ORM.',
      projectsCount: 4,
    },
    {
      id: 'react',
      name: 'React.js',
      category: 'Frontend',
      level: 90,
      icon: <FaReact className="text-cyan-400 text-2xl" />,
      orbitRadius: 130,
      speed: -22,
      color: 'from-cyan-400 to-blue-600',
      description: 'Single Page Applications, Modern Hooks, Custom State Management, Context API, Tailwind CSS, Component Modularisation, and Framer Motion.',
      projectsCount: 8,
    },
    {
      id: 'javascript',
      name: 'JavaScript (ES6+)',
      category: 'Frontend',
      level: 88,
      icon: <SiJavascript className="text-yellow-400 text-2xl" />,
      orbitRadius: 250,
      speed: 30,
      color: 'from-yellow-400 to-amber-500',
      description: 'Asynchronous JS, Promises, Async/Await, DOM manipulation, Web Speech API, Web Audio Synthesizers, and ES6+ features.',
      projectsCount: 10,
    },
    {
      id: 'mysql',
      name: 'MySQL Database',
      category: 'Databases',
      level: 86,
      icon: <SiMysql className="text-blue-400 text-2xl" />,
      orbitRadius: 190,
      speed: -28,
      color: 'from-blue-500 to-cyan-600',
      description: 'Relational Database Design, Complex SQL Joins, Indexing, Stored Procedures, Views, Normalized Schemas, and Query Optimization.',
      projectsCount: 5,
    },
    {
      id: 'mongodb',
      name: 'MongoDB',
      category: 'Databases',
      level: 82,
      icon: <SiMongodb className="text-emerald-500 text-2xl" />,
      orbitRadius: 250,
      speed: -35,
      color: 'from-emerald-400 to-teal-600',
      description: 'NoSQL Document Store, BSON Collections, Mongoose Schemas, Aggregation Framework, and JSON pipelines.',
      projectsCount: 4,
    },
    {
      id: 'python',
      name: 'Python',
      category: 'Languages',
      level: 85,
      icon: <SiPython className="text-cyan-300 text-2xl" />,
      orbitRadius: 310,
      speed: 38,
      color: 'from-blue-400 to-yellow-400',
      description: 'Object-Oriented Python, Automation Scripts, Speech Recognition Integration, Machine Learning basics, and Web Scraping.',
      projectsCount: 4,
    },
    {
      id: 'dsa',
      name: 'Data Structures & Algorithms',
      category: 'Core CS',
      level: 90,
      icon: <SiLeetcode className="text-amber-400 text-2xl" />,
      orbitRadius: 310,
      speed: -42,
      color: 'from-amber-400 to-purple-600',
      description: 'Arrays, Linked Lists, Trees, Graphs, Dynamic Programming, Sorting & Searching, Binary Search, and LeetCode problem solving.',
      projectsCount: 12,
    },
    {
      id: 'tailwind',
      name: 'Tailwind CSS',
      category: 'Frontend',
      level: 92,
      icon: <SiTailwindcss className="text-cyan-400 text-2xl" />,
      orbitRadius: 130,
      speed: 15,
      color: 'from-cyan-400 to-teal-500',
      description: 'Utility-first CSS, Responsive Grid Systems, Dark Mode, Custom Themes, Glassmorphism, and Animation keyframes.',
      projectsCount: 8,
    },
    {
      id: 'git',
      name: 'Git & GitHub',
      category: 'Tools',
      level: 88,
      icon: <FaGitAlt className="text-orange-500 text-2xl" />,
      orbitRadius: 250,
      speed: 26,
      color: 'from-orange-500 to-red-600',
      description: 'Version Control, Branching Workflows, Merge Conflicts Resolution, Pull Requests, Code Auditing, and Repository Management.',
      projectsCount: 15,
    },
  ];

  const categories = ['All', 'Frontend', 'Backend', 'Languages', 'Databases', 'Core CS'];

  const filteredNodes = skillNodes.filter(
    (node) => filterCategory === 'All' || node.category === filterCategory
  );

  return (
    <section id="galaxy" className="py-24 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full cyber-glass-glow text-xs font-mono text-cyan-300 mb-3"
          >
            <FaCube className="text-purple-400" />
            <span>INTERACTIVE SKILL GALAXY</span>
          </motion.div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Quantum <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-amber-300">Skill Orbit</span>
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-sm font-body">
            Technologies orbit in dynamic harmonic frequencies. Hover or select any node to inspect proficiency, architecture specs, and related project builds.
          </p>

          {/* Category Filter Pills */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  soundFx.playClick();
                  setFilterCategory(cat);
                }}
                onMouseEnter={() => soundFx.playHover()}
                className={`px-3.5 py-1.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] border border-cyan-400/50'
                    : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Orbit System Stage */}
        <div className="relative w-full h-[540px] sm:h-[620px] flex items-center justify-center border border-white/10 rounded-3xl cyber-glass bg-[#050818]/80 overflow-hidden shadow-2xl">
          
          {/* Orbital Grid Ring Guides */}
          <div className="absolute w-[260px] h-[260px] rounded-full border border-dashed border-cyan-500/20 pointer-events-none" />
          <div className="absolute w-[380px] h-[380px] rounded-full border border-dashed border-purple-500/20 pointer-events-none" />
          <div className="absolute w-[500px] h-[500px] rounded-full border border-dashed border-amber-500/20 pointer-events-none" />
          <div className="absolute w-[620px] h-[620px] rounded-full border border-dashed border-indigo-500/15 pointer-events-none" />

          {/* Central Glowing Quantum Core */}
          <div className="absolute z-20 flex flex-col items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.12, 1], rotate: 360 }}
              transition={{
                scale: { duration: 3, repeat: Infinity, ease: 'easeInOut' },
                rotate: { duration: 25, repeat: Infinity, ease: 'linear' },
              }}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-cyan-500 via-purple-600 to-amber-400 p-1 shadow-[0_0_50px_rgba(168,85,247,0.6)] cursor-pointer"
            >
              <div className="w-full h-full bg-[#030712] rounded-full flex flex-col items-center justify-center text-center p-2">
                <span className="text-cyan-300 font-display text-xs font-black tracking-widest">VALTETI</span>
                <span className="text-[9px] font-mono text-purple-300 font-bold">CORE</span>
              </div>
            </motion.div>
            <span className="mt-2 text-[10px] font-mono text-slate-400 bg-black/60 px-2.5 py-0.5 rounded-full border border-white/10">
              ORBITAL CENTER
            </span>
          </div>

          {/* Orbiting Skill Nodes */}
          {filteredNodes.map((node, index) => {
            const angleOffset = (index * (360 / filteredNodes.length) * Math.PI) / 180;
            return (
              <motion.div
                key={node.id}
                animate={{
                  rotate: node.speed > 0 ? 360 : -360,
                }}
                transition={{
                  duration: Math.abs(node.speed),
                  repeat: Infinity,
                  ease: 'linear',
                }}
                className="absolute pointer-events-none flex items-center justify-center"
                style={{
                  width: node.orbitRadius * 2,
                  height: node.orbitRadius * 2,
                }}
              >
                <div
                  className="absolute pointer-events-auto"
                  style={{
                    top: '50%',
                    left: '100%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <motion.button
                    whileHover={{ scale: 1.25, zIndex: 40 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedSkill(node);
                    }}
                    onMouseEnter={() => soundFx.playHover()}
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#030712]/90 border border-white/20 shadow-[0_0_20px_rgba(0,0,0,0.8)] flex items-center justify-center transition-all cursor-pointer group ${
                      selectedSkill?.id === node.id ? 'ring-2 ring-cyan-400 shadow-[0_0_30px_#06b6d4]' : ''
                    }`}
                    title={node.name}
                  >
                    <div className="group-hover:rotate-12 transition-transform">
                      {node.icon}
                    </div>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}

        </div>

        {/* Holographic Inspect Panel Modal */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              className="mt-8 p-6 rounded-3xl cyber-glass-glow border border-purple-500/40 relative shadow-2xl max-w-3xl mx-auto"
            >
              <button
                onClick={() => {
                  soundFx.playClick();
                  setSelectedSkill(null);
                }}
                className="absolute top-4 right-4 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer"
              >
                <FaTimes />
              </button>

              <div className="flex items-start gap-4">
                <div className="p-3.5 rounded-2xl bg-black/60 border border-white/10 shadow-lg">
                  {selectedSkill.icon}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-cyan-300 px-2.5 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/30">
                      {selectedSkill.category}
                    </span>
                    <span className="text-xs font-mono text-amber-300 font-bold">
                      {selectedSkill.projectsCount} Related Projects
                    </span>
                  </div>
                  <h3 className="text-2xl font-black font-display text-white">
                    {selectedSkill.name}
                  </h3>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-300 font-body leading-relaxed">
                {selectedSkill.description}
              </p>

              {/* Proficiency Level Metric Bar */}
              <div className="mt-5 space-y-1.5 font-mono">
                <div className="flex justify-between text-xs font-bold text-slate-300">
                  <span>SYSTEM PROFICIENCY / MASTERY</span>
                  <span className="text-cyan-300">{selectedSkill.level}%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-900 rounded-full border border-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${selectedSkill.level}%` }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-amber-400 rounded-full shadow-[0_0_15px_#06b6d4]"
                  />
                </div>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
