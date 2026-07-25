import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCode, FaGithub, FaTimes, FaCheckCircle, FaLaptopCode, FaRocket, FaArrowLeft } from 'react-icons/fa';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

export const ProjectsSection: React.FC = () => {
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

  const categories = ['All', 'Full Stack', 'Web Application', 'AI & Machine Learning'];

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
      (activeCategory === 'AI & Machine Learning' && (project.category.includes('AI') || project.category.includes('ML')));

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
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-purple-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-4"
          >
            <FaCode />
            <span>Featured Software Engineering Portfolio</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400">Projects</span>
          </motion.h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Real-world full-stack and frontend web applications engineered for scalability, intuitive UI, and smooth performance.
          </p>

          {/* Interactive Search & Filter Bar */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-2xl mx-auto">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="🔍 Search projects by keyword or tech (e.g., React, Java, Audio)..."
              className="w-full px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-slate-100 placeholder:text-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500/50 backdrop-blur-md transition-all"
            />

            <div className="flex flex-wrap items-center justify-center gap-2 w-full sm:w-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg border border-purple-400/40'
                      : 'bg-white/5 text-slate-400 hover:text-white border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden flex flex-col justify-between border-white/10 group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* Thumbnail Container */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-[#050816]/40 to-transparent" />

                {/* Category Badge */}
                <span className="absolute top-4 left-4 text-[10px] font-mono font-bold uppercase tracking-wider bg-purple-950/80 text-cyan-300 px-3 py-1 rounded-full border border-purple-500/40 backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              {/* Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-3 leading-relaxed">
                    {project.shortDescription}
                  </p>
                </div>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/10">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-[10px] font-mono bg-white/5 text-slate-300 px-2.5 py-1 rounded-lg border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Bottom Action Line */}
                <div className="flex items-center justify-between pt-2">
                  <span className="text-xs font-semibold text-purple-400 group-hover:text-cyan-300 flex items-center gap-1.5 transition-colors">
                    <FaLaptopCode /> View Details & Code
                  </span>
                  <span className="text-xs text-slate-500 font-mono">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Project Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl bg-[#0b0f29] border border-white/10 rounded-3xl shadow-2xl overflow-hidden text-slate-100 my-8"
            >
              {/* Modal Banner */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f29] via-[#0b0f29]/60 to-transparent" />
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 left-4 px-3.5 py-2 rounded-xl bg-black/70 hover:bg-black/90 border border-white/20 text-white font-bold text-xs flex items-center gap-2 transition-all hover:scale-105 z-10 cursor-pointer"
                  aria-label="Back to projects"
                >
                  <FaArrowLeft className="text-cyan-400" />
                  <span>Back to Projects</span>
                </button>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 text-white transition-all z-10 cursor-pointer"
                  aria-label="Close project modal"
                >
                  <FaTimes />
                </button>

                <div className="absolute bottom-4 left-6 right-6">
                  <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest block mb-1">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {selectedProject.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                
                {/* Problem & Solution */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="glass-card p-5 rounded-2xl border-white/10">
                    <h4 className="text-sm font-bold text-purple-400 uppercase tracking-wider mb-2">
                      The Problem
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {selectedProject.problem}
                    </p>
                  </div>

                  <div className="glass-card p-5 rounded-2xl border-white/10">
                    <h4 className="text-sm font-bold text-cyan-400 uppercase tracking-wider mb-2">
                      The Solution
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {selectedProject.solution}
                    </p>
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
                    <FaRocket className="text-purple-400" /> Key Features & Capabilities
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedProject.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/5">
                        <FaCheckCircle className="text-cyan-400 mt-0.5 text-xs flex-shrink-0" />
                        <span className="text-xs text-slate-200">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono bg-purple-950/60 text-purple-200 px-3 py-1 rounded-lg border border-purple-800/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white font-medium text-xs transition-all border border-white/10 cursor-pointer"
                  >
                    <FaArrowLeft className="text-cyan-400" /> Back to Projects
                  </button>

                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold text-xs shadow-lg transition-all"
                  >
                    <FaGithub className="text-base" /> View Source Code
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
