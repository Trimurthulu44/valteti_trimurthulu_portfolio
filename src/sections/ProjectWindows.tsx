import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaExternalLinkAlt,
  FaGithub,
  FaSearch,
  FaTerminal,
  FaWindowMaximize,
  FaWindowMinimize,
  FaTimes,
  FaCode,
  FaCheck,
  FaLayerGroup,
  FaLaptopCode,
  FaArrowLeft,
} from 'react-icons/fa';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { soundFx } from '../utils/audioSynth';

export const ProjectWindows: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const categories = ['All', 'Full Stack', 'Web Application', 'Voice & AI'];

  const filteredProjects = PROJECTS.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory =
      activeCategory === 'All' ||
      project.category.toLowerCase().includes(activeCategory.toLowerCase()) ||
      (activeCategory === 'Full Stack' && project.category.includes('Full Stack')) ||
      (activeCategory === 'Web Application' && project.category.includes('Web')) ||
      (activeCategory === 'Voice & AI' && (project.category.includes('Voice') || project.category.includes('AI')));

    return matchesSearch && matchesCategory;
  });

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full cyber-glass-glow text-xs font-mono text-cyan-300 mb-3"
          >
            <FaTerminal className="text-purple-400" />
            <span>HOLOGRAPHIC APPLICATION ENVIRONMENT</span>
          </motion.div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-amber-300">Application Suite</span>
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-sm font-body">
            Desktop window instances engineered with modern full-stack architectures, clean state engines, and expressive UI controls.
          </p>

          {/* Interactive Search & Filter Controls */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-3xl mx-auto cyber-glass p-3 rounded-2xl border border-white/10">
            <div className="relative w-full sm:w-72">
              <FaSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects or tech stack..."
                className="w-full pl-9 pr-4 py-2 rounded-xl bg-black/40 border border-white/10 text-slate-100 placeholder:text-slate-500 font-mono text-xs focus:outline-none focus:border-cyan-400/60"
              />
            </div>

            <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    soundFx.playClick();
                    setActiveCategory(cat);
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className={`px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white border border-cyan-400/50 shadow-md'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Windows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
              className="cyber-glass rounded-3xl border border-white/10 overflow-hidden shadow-2xl flex flex-col group transition-all duration-300 transform-style-3d hover:border-purple-500/50 hover:shadow-[0_15px_45px_rgba(168,85,247,0.2)]"
            >
              
              {/* OS Desktop Window Title Bar */}
              <div className="os-window-header px-4 py-3 flex items-center justify-between select-none">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                  <span className="ml-2 font-mono text-[11px] text-slate-300 font-bold truncate max-w-[150px]">
                    {project.title.toLowerCase().replace(/\s+/g, '-')}.app
                  </span>
                </div>

                <div className="flex items-center gap-2 text-slate-400 text-xs">
                  <span className="px-2 py-0.5 rounded bg-black/40 text-[9px] font-mono text-cyan-300 border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Application Preview Header */}
              <div className="relative h-48 bg-[#030712] overflow-hidden group-hover:brightness-110 transition-all">
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent z-10" />
                
                {/* Visual Icon Header fallback / Graphic */}
                <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-radial-gradient">
                  <div className="p-4 rounded-2xl cyber-glass border border-white/10 text-cyan-300 group-hover:scale-110 group-hover:text-amber-300 transition-all shadow-xl">
                    <FaLaptopCode className="text-4xl" />
                  </div>
                  <span className="mt-3 font-mono text-xs text-slate-400 font-bold tracking-wider">
                    {project.title}
                  </span>
                </div>
              </div>

              {/* Window Body & Metadata */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold font-display text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-xs font-body line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[10px] font-mono font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Footer Buttons */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedProject(project);
                    }}
                    onMouseEnter={() => soundFx.playHover()}
                    className="px-3 py-1.5 rounded-xl bg-purple-950/60 hover:bg-purple-900/80 text-purple-200 border border-purple-500/40 text-xs font-mono font-bold transition-all cursor-pointer"
                  >
                    Inspect Specs
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={() => soundFx.playHover()}
                        onClick={() => soundFx.playClick()}
                        className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-300 border border-white/10 transition-all text-xs flex items-center gap-1.5"
                        title="Source Code"
                      >
                        <FaGithub className="text-sm" /> Source Code
                      </a>
                    )}
                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

        {/* Full Architecture Spec Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 p-4 sm:p-6 bg-black/80 backdrop-blur-xl flex items-center justify-center overflow-y-auto"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                className="cyber-glass-glow border border-purple-500/50 rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl font-mono"
              >
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedProject(null);
                    }}
                    className="px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-cyan-300 font-bold text-xs flex items-center gap-2 border border-cyan-500/30 transition-all cursor-pointer"
                  >
                    <FaArrowLeft /> Back to Projects
                  </button>

                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedProject(null);
                    }}
                    className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white cursor-pointer"
                    aria-label="Close project modal"
                  >
                    <FaTimes />
                  </button>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30 text-xs font-bold">
                      {selectedProject.category}
                    </span>
                    <span className="text-xs text-slate-400">SPECIFICATION DISPATCH</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black font-display text-white">
                    {selectedProject.title}
                  </h3>

                  <p className="text-slate-300 text-sm font-body leading-relaxed">
                    {selectedProject.shortDescription}
                  </p>

                  {selectedProject.problem && (
                    <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                      <span className="text-[11px] font-bold text-amber-300 block">PROBLEM STATEMENT:</span>
                      <p className="text-xs text-slate-300 font-body">{selectedProject.problem}</p>
                    </div>
                  )}

                  {selectedProject.solution && (
                    <div className="p-3.5 rounded-2xl bg-cyan-950/40 border border-cyan-500/30 space-y-1">
                      <span className="text-[11px] font-bold text-cyan-300 block">ENGINEERED SOLUTION:</span>
                      <p className="text-xs text-slate-200 font-body">{selectedProject.solution}</p>
                    </div>
                  )}

                  {/* Highlights / Features List */}
                  {selectedProject.features && (
                    <div className="space-y-2 pt-2">
                      <span className="text-xs text-purple-300 font-bold block">KEY SYSTEM CAPABILITIES:</span>
                      <ul className="space-y-1.5 text-xs text-slate-300 font-body">
                        {selectedProject.features.map((feat, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <FaCheck className="text-cyan-400 text-xs mt-0.5 shrink-0" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack List */}
                  <div className="pt-3">
                    <span className="text-xs text-slate-400 block mb-2">FULL ARCHITECTURE STACK:</span>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.techStack.map((tech) => (
                        <span key={tech} className="px-3 py-1 rounded-xl bg-white/10 border border-white/20 text-xs text-cyan-300 font-bold">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-3">
                    <button
                      onClick={() => {
                        soundFx.playClick();
                        setSelectedProject(null);
                      }}
                      className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white font-medium text-xs flex items-center gap-2 border border-white/10 transition-all cursor-pointer"
                    >
                      <FaArrowLeft className="text-cyan-400" /> Back to Projects
                    </button>

                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold text-xs flex items-center gap-2 transition-all shadow-lg"
                      >
                        <FaGithub className="text-base" /> View Source Code
                      </a>
                    )}
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
