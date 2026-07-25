import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaFileAlt, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { PERSONAL_INFO } from '../data/portfolioData';
import PROFILE_PHOTO from "../assets/profile.jpg";

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', target: 'about' },
    { name: 'Dashboard', target: 'dashboard' },
    { name: 'Skills', target: 'skills' },
    { name: 'Experience', target: 'experience' },
    { name: 'Projects', target: 'projects' },
    { name: 'Certifications', target: 'certifications' },
    { name: 'Contact', target: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 sm:px-8 py-4 transition-all duration-300">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
          scrolled
            ? 'glass-card border-white/10 bg-[#050816]/70 shadow-[0_10px_30px_rgba(0,0,0,0.5)] px-6 py-3'
            : 'bg-transparent px-4 py-2'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Animated VT Logo */}
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer group flex items-center gap-3"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-indigo-600 p-[1px] shadow-[0_0_15px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all overflow-hidden">
              <img
                src={PROFILE_PHOTO}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover rounded-[11px]"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-bold font-display tracking-tight text-slate-100 group-hover:text-cyan-300 transition-colors">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-[10px] font-mono text-cyan-400/90 tracking-wider uppercase">
                Full Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 p-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.target}
                to={link.target}
                spy={true}
                smooth={true}
                duration={500}
                activeClass="bg-purple-600/30 text-cyan-300 border-purple-500/40 shadow-[0_0_10px_rgba(139,92,246,0.3)]"
                className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer border border-transparent"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border border-purple-400/30 shadow-[0_0_20px_rgba(139,92,246,0.3)] transition-all hover:scale-105 active:scale-95 cursor-pointer"
            >
              <FaFileAlt className="text-cyan-300 group-hover:rotate-12 transition-transform" />
              <span>Resume</span>
            </button>

            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-all hover:scale-110"
              title="GitHub Profile"
            >
              <FaGithub className="text-base" />
            </a>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-purple-400 transition-all hover:scale-110"
              title="LinkedIn Profile"
            >
              <FaLinkedin className="text-base" />
            </a>

            <a
              href={PERSONAL_INFO.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-amber-400 transition-all hover:scale-110"
              title="LeetCode Profile"
            >
              <SiLeetcode className="text-base text-amber-400" />
            </a>

            <a
              href={PERSONAL_INFO.gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-cyan-400 transition-all hover:scale-110"
              title={`Compose email to ${PERSONAL_INFO.email}`}
            >
              <FaEnvelope className="text-base text-cyan-400" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FaTimes className="text-lg" /> : <FaBars className="text-lg" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Glassmorphism Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-20 left-4 right-4 glass-card border-white/10 bg-[#050816]/95 p-6 rounded-2xl shadow-2xl space-y-4"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.target}
                  to={link.target}
                  smooth={true}
                  duration={500}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-cyan-300 transition-all cursor-pointer flex items-center justify-between border border-transparent hover:border-white/10"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-mono text-slate-500">→</span>
                </Link>
              ))}

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                className="w-full mt-2 px-4 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 border border-purple-400/30 flex items-center justify-center gap-2 cursor-pointer shadow-lg"
              >
                <FaFileAlt className="text-cyan-300" />
                <span>View & Download Resume</span>
              </button>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-around">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-white font-medium"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-slate-300 hover:text-purple-400 font-medium"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href={PERSONAL_INFO.leetcodeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-amber-300 hover:text-amber-400 font-medium"
              >
                <SiLeetcode className="text-amber-400" /> LeetCode
              </a>
              <a
                href={PERSONAL_INFO.gmailUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs text-cyan-300 hover:text-cyan-400 font-medium"
              >
                <FaEnvelope className="text-cyan-400" /> Email
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
