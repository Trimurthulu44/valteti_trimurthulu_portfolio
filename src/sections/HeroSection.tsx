import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaFileAlt, FaCode, FaGithub, FaLinkedin, FaEnvelope, FaJava, FaReact, FaDatabase } from 'react-icons/fa';
import { SiSpringboot, SiJavascript, SiPython, SiMysql, SiMongodb, SiHtml5, SiCss, SiGit, SiLeetcode } from 'react-icons/si';
import { PERSONAL_INFO } from '../data/portfolioData';
import PROFILE_PHOTO from "../assets/profile.jpg";

interface HeroSectionProps {
  onOpenResume: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenResume }) => {
  // Motion values for 3D card tilt on mouse move
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [12, -12]);
  const rotateY = useTransform(x, [-150, 150], [-12, 12]);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const floatingTechIcons = [
    { icon: <FaJava className="text-amber-500" />, label: 'Java', position: '-top-7 left-1/2 -translate-x-1/2' },
    { icon: <SiPython className="text-blue-400" />, label: 'Python', position: 'top-2 -left-6' },
    { icon: <SiMysql className="text-sky-400" />, label: 'SQL', position: 'top-2 -right-6' },
    { icon: <SiGit className="text-red-500" />, label: 'Git', position: 'top-1/2 -right-12 -translate-y-1/2' },
    { icon: <SiMongodb className="text-emerald-400" />, label: 'MongoDB', position: 'bottom-16 -right-8' },
    { icon: <SiHtml5 className="text-orange-500" />, label: 'HTML5', position: 'bottom-0 right-2' },
    { icon: <SiCss className="text-blue-500" />, label: 'CSS3', position: 'bottom-0 left-2' },
    { icon: <FaReact className="text-cyan-400" />, label: 'React', position: 'bottom-16 -left-8' },
    { icon: <SiJavascript className="text-yellow-400" />, label: 'JS', position: 'top-1/2 -left-12 -translate-y-1/2' },
  ];

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline, Bio & Action Buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6"
          >
            {/* Status Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-pill border-purple-500/30 text-xs font-medium text-purple-200 shadow-lg shadow-purple-950/20"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for Full-Stack & Developer Opportunities</span>
            </motion.div>

            {/* Main Name Heading with Premium Display Typography */}
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-indigo-500/10 border border-purple-400/20 text-purple-300 font-display text-sm sm:text-base font-semibold tracking-wide">
                <span className="text-base sm:text-lg animate-bounce">👋</span>
                <span>Hello world, I'm</span>
              </div>
              
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-display tracking-tight text-white leading-tight">
                <span className="bg-gradient-to-r from-white via-slate-100 to-slate-200 bg-clip-text text-transparent block sm:inline">
                  Valteti
                </span>{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-indigo-400 drop-shadow-[0_0_35px_rgba(139,92,246,0.5)] animate-text-shimmer">
                  Trimurthulu
                </span>
              </h1>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 pt-1">
                <span className="text-lg sm:text-2xl font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-300">
                  {PERSONAL_INFO.title}
                </span>
                <span className="hidden sm:inline text-slate-600">•</span>
                <span className="text-xs sm:text-sm font-code text-cyan-300 px-3 py-1 rounded-lg bg-cyan-950/40 border border-cyan-800/40">
                  Full Stack • Java • React • AI
                </span>
              </div>
            </div>

            {/* Subtitle / Bio Paragraph */}
            <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenResume}
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 shadow-[0_0_25px_rgba(139,92,246,0.4)] hover:shadow-[0_0_35px_rgba(6,182,212,0.6)] transition-all hover:scale-105 active:scale-95"
              >
                <FaFileAlt className="text-cyan-300 group-hover:rotate-12 transition-transform" />
                <span>View & Download Resume</span>
              </button>

              <Link
                to="projects"
                smooth={true}
                duration={600}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl text-sm font-bold text-slate-200 glass-card hover:bg-white/10 border-white/15 hover:border-purple-400/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
              >
                <FaCode className="text-purple-400 group-hover:translate-x-1 transition-transform" />
                <span>Explore Projects</span>
              </Link>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Connect:</span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-pill hover:bg-white/15 text-slate-300 hover:text-white transition-all hover:scale-110"
                  title="GitHub"
                >
                  <FaGithub className="text-lg" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-pill hover:bg-white/15 text-slate-300 hover:text-purple-400 transition-all hover:scale-110"
                  title="LinkedIn Profile"
                >
                  <FaLinkedin className="text-lg" />
                </a>
                <a
                  href={PERSONAL_INFO.leetcodeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-pill hover:bg-white/15 text-slate-300 hover:text-amber-400 transition-all hover:scale-110"
                  title="LeetCode Profile"
                >
                  <SiLeetcode className="text-lg text-amber-400" />
                </a>
                <a
                  href={PERSONAL_INFO.gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl glass-pill hover:bg-white/15 text-slate-300 hover:text-cyan-400 transition-all hover:scale-110"
                  title={`Compose email to ${PERSONAL_INFO.email}`}
                >
                  <FaEnvelope className="text-lg" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Profile Picture with 3D Tilt, Rotating Ring & Neon Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center order-first lg:order-last relative"
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center cursor-pointer group"
            >
              {/* Outer Slow Rotating Gradient Ring */}
              <div className="absolute inset-[-12px] rounded-full bg-gradient-to-tr from-cyan-500 via-purple-600 to-amber-500 opacity-60 blur-md animate-spin-slow" />

              {/* Glowing Background Blur Orbs */}
              <div className="absolute -inset-4 bg-purple-600/30 rounded-full blur-2xl group-hover:bg-cyan-500/40 transition-all" />

              {/* Main Glassmorphic Photo Container Frame */}
              <div className="relative w-full h-full rounded-full p-2 glass-card border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden flex items-center justify-center z-10">
                <img
                  src={PROFILE_PHOTO}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  loading="eager"
                  className="w-full h-full object-cover rounded-full filter contrast-105 brightness-105 transition-transform duration-500 group-hover:scale-105"
                />

                {/* Inner Ambient Glow Highlight */}
                <div className="absolute inset-0 rounded-full ring-1 ring-white/20 pointer-events-none" />
              </div>

              {/* Floating Technology Orbit Icons */}
              {floatingTechIcons.map((tech, idx) => (
                <motion.div
                  key={tech.label}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3 + idx, repeat: Infinity, ease: 'easeInOut' }}
                  className={`absolute ${tech.position} z-20 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl glass-pill border-white/15 text-xs font-semibold text-slate-200 shadow-xl`}
                >
                  <span className="text-base">{tech.icon}</span>
                  <span className="font-mono text-[11px]">{tech.label}</span>
                </motion.div>
              ))}

              {/* Bottom Accent Name Badge */}
              <div className="absolute -bottom-4 z-20 px-4 py-1.5 rounded-full bg-[#050816]/90 border border-purple-500/40 backdrop-blur-md shadow-xl text-center">
                <span className="text-xs font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-amber-300">
                  Valteti Trimurthulu
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
