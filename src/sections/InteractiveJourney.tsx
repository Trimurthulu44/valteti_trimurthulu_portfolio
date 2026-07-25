import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaGraduationCap,
  FaAward,
  FaCode,
  FaRocket,
  FaBriefcase,
  FaCheckCircle,
  FaChevronRight,
  FaLaptopCode,
} from 'react-icons/fa';
import { SiLeetcode, SiSpringboot } from 'react-icons/si';
import { PERSONAL_INFO, EDUCATION, HACKATHONS } from '../data/portfolioData';
import { soundFx } from '../utils/audioSynth';

export const InteractiveJourney: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'timeline' | 'academic' | 'achievements'>('timeline');

  const journeySteps = [
    {
      year: '2021 - 2025',
      title: 'Bachelor of Engineering in CSE',
      institution: 'Prathyusha Engineering College, Chennai',
      metric: 'CGPA: 8.6 / 10',
      icon: <FaGraduationCap className="text-cyan-400 text-xl" />,
      tag: 'ACADEMIC EXCELLENCE',
      description:
        'Specialized in Computer Science & Engineering. Rigorous foundation in Data Structures, Object-Oriented Programming, Database Management Systems, Operating Systems, and Software Engineering.',
    },
    {
      year: '2023 - Present',
      title: 'Algorithmic Problem Solving & DSA Mastery',
      institution: 'LeetCode & Competitive Coding',
      metric: 'Profile: @TrimurthuluV',
      icon: <SiLeetcode className="text-amber-400 text-xl" />,
      tag: 'PROBLEM SOLVING',
      description:
        'Solved hundreds of algorithmic challenges across Arrays, Linked Lists, Binary Trees, Dynamic Programming, Graphs, and Hash Tables. Continuous commitment to optimal time/space complexity.',
    },
    {
      year: '2023 - 2024',
      title: 'Full Stack Java & Spring Boot Engineering',
      institution: 'Enterprise Software & Voice Apps',
      metric: '15+ Enterprise Projects Built',
      icon: <SiSpringboot className="text-emerald-400 text-xl" />,
      tag: 'SYSTEM ARCHITECTURE',
      description:
        'Architected robust REST APIs, web engines, speech-synthesis web tools, e-commerce applications, and custom audio synthesizers using Spring Boot, React, MySQL, and Tailwind CSS.',
    },
    {
      year: '2024 - 2025',
      title: 'Smart India Hackathon Finalist & Tech Competitions',
      institution: 'National Hackathons & Code Fests',
      metric: 'SIH Finalist & 1st Rank Tech Fest',
      icon: <FaAward className="text-purple-400 text-xl" />,
      tag: 'HONORS & BADGES',
      description:
        'Selected as Smart India Hackathon Finalist. Winner of Inter-College Technical Symposiums for presenting full-stack real-time web solutions under high-pressure sprint timelines.',
    },
  ];

  return (
    <section id="journey" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full cyber-glass-glow text-xs font-mono text-cyan-300 mb-3"
          >
            <FaRocket className="text-purple-400" />
            <span>CINEMATIC STORY & MILESTONES</span>
          </motion.div>
          <h2 className="text-3xl sm:text-5xl font-black font-display text-white tracking-tight">
            Developer <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-amber-300">Journey Map</span>
          </h2>
          <p className="mt-3 text-slate-300 text-xs sm:text-sm font-body">
            An interactive neural path showcasing academic distinction (8.6 CGPA), algorithmic problem solving, and full-stack innovations.
          </p>
        </div>

        {/* Neural Timeline Path Container */}
        <div className="relative border-l-2 border-dashed border-purple-500/40 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {journeySteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Node Beacon Circle */}
              <div className="absolute -left-[33px] sm:-left-[49px] top-1.5 w-10 h-10 rounded-full bg-[#030712] border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.6)] flex items-center justify-center group-hover:scale-110 transition-transform">
                {step.icon}
              </div>

              {/* Step Card Content */}
              <div className="cyber-glass rounded-3xl p-6 border border-white/10 group-hover:border-purple-500/50 shadow-2xl transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-mono text-cyan-300 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 font-bold">
                    {step.tag}
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-bold">
                    {step.year}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-display text-white mt-3 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>

                <div className="flex flex-wrap items-center gap-3 mt-1 font-mono text-xs text-amber-300 font-bold">
                  <span>{step.institution}</span>
                  <span className="text-slate-500">•</span>
                  <span className="text-purple-300">{step.metric}</span>
                </div>

                <p className="mt-3 text-slate-300 text-xs sm:text-sm font-body leading-relaxed">
                  {step.description}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
