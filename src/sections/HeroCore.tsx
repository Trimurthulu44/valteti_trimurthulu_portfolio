import React from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaTerminal, FaCode, FaFileAlt, FaGithub, FaLinkedin, FaCheckCircle, FaAward, FaDatabase, FaJava, FaReact, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode, SiSpringboot, SiPython, SiMysql, SiJavascript } from 'react-icons/si';
import { PERSONAL_INFO, STATS } from '../data/portfolioData';
import PROFILE_PHOTO from "../assets/profile.jpg";
import { soundFx } from '../utils/audioSynth';

interface HeroCoreProps {
  onOpenResumeModal: () => void;
}

export const HeroCore: React.FC<HeroCoreProps> = ({ onOpenResumeModal }) => {
  // 3D Mouse Parallax Motion Values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-300, 300], [12, -12]);
  const rotateY = useTransform(x, [-300, 300], [-12, 12]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="hero" className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden z-10">
      
      {/* Background Depth Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Interactive Pods */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Live System Beacon */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full cyber-glass-glow border-cyan-500/30 text-xs font-mono text-cyan-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping inline-block" />
              <span>QUANTUM SYSTEM ARCHITECT & FULL-STACK ENGINE</span>
            </div>

            {/* Main Name Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black font-display tracking-tight text-white leading-[1.08]">
                VALTETI <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-amber-300 drop-shadow-[0_0_35px_rgba(168,85,247,0.4)]">
                  TRIMURTHULU
                </span>
              </h1>
              <p className="text-lg sm:text-2xl font-mono text-slate-300 font-semibold tracking-wide">
                Full Stack Developer & Java Specialist
              </p>
            </div>

            {/* Bio Synopsis */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-body">
              Engineering high-performance enterprise web systems, scalable Java microservices, dynamic voice-controlled applications, and algorithmic data structures. Focused on clean architecture, 8.6 CGPA academic rigor, and real-time interactive user experiences.
            </p>

            {/* Telemetry Metric Widgets */}
            <div className="grid grid-cols-3 gap-3 pt-2 max-w-xl mx-auto lg:mx-0">
              <div className="p-3.5 rounded-2xl cyber-glass border-purple-500/30 text-center lg:text-left">
                <span className="text-[10px] font-mono uppercase text-slate-400 block">Academic CGPA</span>
                <span className="text-2xl sm:text-3xl font-black font-display text-cyan-300">8.6</span>
                <span className="text-[10px] text-slate-400 block">B.E. CSE @ PEC</span>
              </div>

              <a
                href={PERSONAL_INFO.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className="p-3.5 rounded-2xl cyber-glass-amber border-amber-500/40 text-center lg:text-left hover:scale-105 transition-transform group cursor-pointer"
              >
                <span className="text-[10px] font-mono uppercase text-amber-300 flex items-center justify-center lg:justify-start gap-1">
                  <SiLeetcode className="text-amber-400" /> LeetCode
                </span>
                <span className="text-2xl sm:text-3xl font-black font-display text-amber-300 group-hover:text-amber-200">
                  @TrimurthuluV
                </span>
                <span className="text-[10px] text-amber-200/80 block">Click to Visit ↗</span>
              </a>

              <div className="p-3.5 rounded-2xl cyber-glass border-cyan-500/30 text-center lg:text-left">
                <span className="text-[10px] font-mono uppercase text-slate-400 block">Project Stack</span>
                <span className="text-2xl sm:text-3xl font-black font-display text-purple-300">15+</span>
                <span className="text-[10px] text-slate-400 block">Full Stack Apps</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-4">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-[0_0_30px_rgba(168,85,247,0.4)] border border-cyan-300/40 flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
              >
                <FaTerminal /> Launch Project Apps
              </Link>

              <Link
                to="galaxy"
                spy={true}
                smooth={true}
                offset={-70}
                duration={600}
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className="px-6 py-3.5 rounded-2xl cyber-glass hover:bg-white/10 text-slate-200 font-bold text-sm border border-white/20 flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
              >
                <FaCode className="text-cyan-400" /> Skill Galaxy
              </Link>

              <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenResumeModal();
                }}
                onMouseEnter={() => soundFx.playHover()}
                className="px-5 py-3.5 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-300 font-bold text-sm border border-white/10 flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
              >
                <FaFileAlt className="text-amber-400" /> Resume
              </button>

              <a
                href={PERSONAL_INFO.gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => soundFx.playHover()}
                onClick={() => soundFx.playClick()}
                className="px-5 py-3.5 rounded-2xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 font-bold text-sm border border-cyan-500/40 flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
                title={`Compose email to ${PERSONAL_INFO.email}`}
              >
                <FaEnvelope className="text-cyan-400" /> Email Me
              </a>
            </div>

          </motion.div>

          {/* Right Column: Holographic 3D Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col items-center justify-center perspective-1000"
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY }}
              className="relative w-72 h-72 sm:w-88 sm:h-88 flex items-center justify-center cursor-pointer group transform-style-3d transition-transform duration-200 ease-out"
            >
              {/* Outer Slow Rotating Neon Ring */}
              <div className="absolute inset-[-14px] rounded-full bg-gradient-to-tr from-cyan-500 via-purple-600 to-amber-400 opacity-70 blur-md animate-spin-slow" />

              {/* Counter Rotating Dotted Energy Arc */}
              <div className="absolute inset-[-24px] rounded-full border-2 border-dashed border-cyan-400/50 animate-spin-reverse pointer-events-none" />

              {/* Glowing Background Blur Orbs */}
              <div className="absolute -inset-6 bg-purple-600/35 rounded-full blur-2xl group-hover:bg-cyan-500/45 transition-all" />

              {/* Holographic Portrait Circle Frame */}
              <div className="relative w-full h-full rounded-full p-2 bg-[#030712] border-2 border-purple-500/50 shadow-[0_0_50px_rgba(168,85,247,0.5)] overflow-hidden">
                <img
                  src={PROFILE_PHOTO}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
                />

                {/* Subtle Refractive Reflection Overlay */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/10 via-transparent to-purple-500/20 pointer-events-none" />
              </div>

              {/* Orbiting Tech Badges Floating Around Portrait */}
              {[
                { icon: <FaJava className="text-amber-400" />, label: 'Java', pos: 'top-2 -left-4' },
                { icon: <SiSpringboot className="text-emerald-400" />, label: 'Spring Boot', pos: 'bottom-8 -left-6' },
                { icon: <FaReact className="text-cyan-400" />, label: 'React', pos: 'top-6 -right-6' },
                { icon: <SiMysql className="text-blue-400" />, label: 'MySQL', pos: 'bottom-4 -right-4' },
              ].map((badge, idx) => (
                <motion.div
                  key={idx}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4 + idx, repeat: Infinity, ease: 'easeInOut' }}
                  className={`absolute ${badge.pos} z-20 px-3 py-1.5 rounded-2xl cyber-glass border border-white/20 shadow-xl flex items-center gap-2 text-xs font-mono font-bold text-slate-100 hover:scale-110 transition-transform`}
                >
                  <span className="text-sm">{badge.icon}</span>
                  <span className="hidden sm:inline">{badge.label}</span>
                </motion.div>
              ))}

              {/* Bottom Holographic Name Plate */}
              <div className="absolute -bottom-5 z-30 px-5 py-2 rounded-full cyber-glass-glow border border-purple-400/50 text-center shadow-2xl backdrop-blur-xl">
                <span className="text-xs font-bold font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-purple-300 to-amber-300 tracking-wider">
                  VALTETI TRIMURTHULU
                </span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
