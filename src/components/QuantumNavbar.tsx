import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import {
  FaTerminal,
  FaVolumeUp,
  FaVolumeMute,
  FaSearch,
  FaGithub,
  FaLinkedin,
  FaCode,
  FaBars,
  FaTimes,
  FaFileAlt,
  FaGlobe,
  FaRocket,
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audioSynth';

interface QuantumNavbarProps {
  onOpenCommandPalette: () => void;
  onOpenResumeModal: () => void;
}

export const QuantumNavbar: React.FC<QuantumNavbarProps> = ({
  onOpenCommandPalette,
  onOpenResumeModal,
}) => {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('core');

  // Live Digital Clock (UTC/Local)
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })
      );
    };
    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  const toggleAudio = () => {
    const newState = soundFx.toggleSound();
    setSoundEnabled(newState);
  };

  const navItems = [
    { id: 'hero', label: 'Core', icon: <FaGlobe />, mode: 'core' },
    { id: 'galaxy', label: 'Galaxy', icon: <FaCode />, mode: 'galaxy' },
    { id: 'projects', label: 'Apps', icon: <FaTerminal />, mode: 'apps' },
    { id: 'journey', label: 'Journey', icon: <FaRocket />, mode: 'journey' },
    { id: 'certifications', label: 'Artifacts', icon: <SiLeetcode />, mode: 'trophies' },
    { id: 'terminal', label: 'Terminal', icon: <FaTerminal />, mode: 'terminal' },
  ];

  return (
    <>
      {/* Top OS System Bar */}
      <header className="fixed top-0 left-0 right-0 z-40 px-3 sm:px-6 py-2.5 bg-[#030712]/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between font-mono text-xs select-none">
        
        {/* Left: OS Branding & System Telemetry */}
        <div className="flex items-center gap-3">
          <a
            href="#hero"
            onClick={() => soundFx.playClick()}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-500 via-purple-600 to-amber-400 p-[1px] shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-[#030712] rounded-[7px] flex items-center justify-center font-bold text-cyan-300 font-display text-xs">
                V
              </div>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="font-bold text-slate-100 font-display tracking-wide group-hover:text-cyan-300 transition-colors">
                VALTETI OS
              </span>
              <span className="text-[10px] text-slate-400">QUANTUM CORE v3.0</span>
            </div>
          </a>

          {/* Core Online Status Pill */}
          <div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-[10px] font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span>CORE ONLINE</span>
          </div>
        </div>

        {/* Center: Live Clock & Quick Command Palette Trigger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenCommandPalette();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-cyan-300 transition-all cursor-pointer group shadow-sm"
          >
            <FaSearch className="text-cyan-400 text-xs group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline text-xs">Search / Quick Launch</span>
            <kbd className="px-1.5 py-0.5 rounded bg-black/50 text-[10px] text-slate-400 border border-white/10 font-mono">
              ⌘K
            </kbd>
          </button>

          <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-lg bg-black/40 border border-white/10 text-slate-300 text-[11px]">
            <span className="text-purple-400 font-bold">UTC:</span>
            <span className="font-mono text-cyan-300 font-bold">{currentTime}</span>
          </div>
        </div>

        {/* Right: Audio Toggle, Resume, Profiles */}
        <div className="flex items-center gap-2">
          {/* Sound FX Toggle */}
          <button
            onClick={toggleAudio}
            onMouseEnter={() => soundFx.playHover()}
            className={`p-2 rounded-xl border transition-all cursor-pointer ${
              soundEnabled
                ? 'bg-purple-950/80 text-purple-300 border-purple-500/50 shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                : 'bg-white/5 text-slate-400 border-white/10 hover:text-white'
            }`}
            title={soundEnabled ? 'Audio FX Enabled' : 'Enable Interactive Audio FX'}
          >
            {soundEnabled ? <FaVolumeUp className="text-sm text-cyan-300" /> : <FaVolumeMute className="text-sm" />}
          </button>

          {/* LeetCode Icon Shortcut */}
          <a
            href={PERSONAL_INFO.leetcodeUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
            className="p-2 rounded-xl bg-amber-950/40 hover:bg-amber-900/60 border border-amber-500/40 text-amber-400 transition-all hover:scale-105 shadow-[0_0_15px_rgba(245,158,11,0.25)]"
            title="LeetCode Profile (@TrimurthuluV)"
          >
            <SiLeetcode className="text-sm" />
          </a>

          {/* LinkedIn */}
          <a
            href={PERSONAL_INFO.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-purple-400 transition-all hover:scale-105"
            title="LinkedIn Profile"
          >
            <FaLinkedin className="text-sm" />
          </a>

          {/* GitHub */}
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-cyan-400 transition-all hover:scale-105"
            title="GitHub Repositories"
          >
            <FaGithub className="text-sm" />
          </a>

          {/* Resume Button */}
          <button
            onClick={() => {
              soundFx.playClick();
              onOpenResumeModal();
            }}
            onMouseEnter={() => soundFx.playHover()}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs shadow-lg border border-purple-400/30 transition-all cursor-pointer"
          >
            <FaFileAlt className="text-xs" />
            <span>Resume</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="sm:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Floating OS Mode Switcher / Navigation Dock (Desktop Bottom Center) */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 hidden sm:flex items-center gap-1.5 p-2 rounded-2xl cyber-glass-glow shadow-[0_10px_40px_rgba(0,0,0,0.8)] border border-purple-500/30">
        {navItems.map((item) => (
          <Link
            key={item.id}
            to={item.id}
            spy={true}
            smooth={true}
            offset={-70}
            duration={600}
            onSetActive={() => setActiveSection(item.mode)}
            onMouseEnter={() => soundFx.playHover()}
            onClick={() => soundFx.playClick()}
            className={`relative px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all flex items-center gap-2 cursor-pointer select-none ${
              activeSection === item.mode
                ? 'text-white bg-gradient-to-r from-cyan-600 via-purple-600 to-indigo-600 shadow-[0_0_20px_rgba(168,85,247,0.5)] border border-cyan-400/40'
                : 'text-slate-400 hover:text-white hover:bg-white/10'
            }`}
          >
            <span className="text-xs">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-14 left-0 right-0 z-40 p-4 bg-[#030712]/95 border-b border-white/10 backdrop-blur-2xl sm:hidden font-mono"
          >
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-60}
                  duration={600}
                  onClick={() => {
                    soundFx.playClick();
                    setMobileMenuOpen(false);
                  }}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs font-bold text-slate-200 hover:text-cyan-300 flex items-center gap-2"
                >
                  {item.icon}
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>

            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => {
                  soundFx.playClick();
                  onOpenResumeModal();
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 rounded-xl bg-purple-600 text-white font-bold text-xs flex items-center justify-center gap-2"
              >
                <FaFileAlt /> Download Resume
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
