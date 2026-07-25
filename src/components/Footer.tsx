import React from 'react';
import { Link } from 'react-scroll';
import { FaArrowUp, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { PERSONAL_INFO } from '../data/portfolioData';
import PROFILE_PHOTO from "../assets/profile.jpg";

export const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#050816]/90 backdrop-blur-xl pt-12 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 via-purple-500 to-amber-400 p-[1px] shadow-[0_0_20px_rgba(6,182,212,0.4)] overflow-hidden">
              <img
                src={PROFILE_PHOTO}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover rounded-[11px]"
              />
            </div>
            <div>
              <span className="font-bold font-display text-white text-base block">{PERSONAL_INFO.name}</span>
              <span className="text-[10px] text-cyan-300 font-mono">Full Stack Java & React Developer</span>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-medium">
            <Link to="about" smooth={true} duration={500} offset={-70} className="hover:text-cyan-300 transition-colors cursor-pointer">About</Link>
            <Link to="dashboard" smooth={true} duration={500} offset={-70} className="hover:text-cyan-300 transition-colors cursor-pointer">Dashboard</Link>
            <Link to="skills" smooth={true} duration={500} offset={-70} className="hover:text-cyan-300 transition-colors cursor-pointer">Skills</Link>
            <Link to="experience" smooth={true} duration={500} offset={-70} className="hover:text-cyan-300 transition-colors cursor-pointer">Experience</Link>
            <Link to="projects" smooth={true} duration={500} offset={-70} className="hover:text-cyan-300 transition-colors cursor-pointer">Projects</Link>
            <Link to="certifications" smooth={true} duration={500} offset={-70} className="hover:text-cyan-300 transition-colors cursor-pointer">Certifications</Link>
            <Link to="contact" smooth={true} duration={500} offset={-70} className="hover:text-cyan-300 transition-colors cursor-pointer">Contact</Link>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-amber-400 hover:scale-105 transition-all"
              title="LeetCode Profile"
            >
              <SiLeetcode className="text-sm" />
            </a>
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-all"
            >
              <FaGithub className="text-sm" />
            </a>
            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-purple-400 border border-white/10 transition-all"
              title="LinkedIn Profile"
            >
              <FaLinkedin className="text-sm" />
            </a>
            <a
              href={PERSONAL_INFO.gmailUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-cyan-400 border border-white/10 transition-all"
              title={`Compose email to ${PERSONAL_INFO.email}`}
            >
              <FaEnvelope className="text-sm text-cyan-400" />
            </a>
            <Link
              to="hero"
              smooth={true}
              duration={600}
              className="p-3 rounded-xl bg-purple-600/30 hover:bg-purple-600/50 border border-purple-500/40 text-purple-300 hover:text-white transition-all cursor-pointer flex items-center justify-center shadow-lg"
              title="Back to top"
            >
              <FaArrowUp className="text-xs" />
            </Link>
          </div>

        </div>

        {/* Copyright Notice */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-2">
          <span>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</span>
          <span className="text-cyan-400 font-bold">
            Built with React, TypeScript & Tailwind CSS
          </span>
        </div>
      </div>
    </footer>
  );
};
