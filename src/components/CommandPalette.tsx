import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaSearch,
  FaTimes,
  FaTerminal,
  FaCode,
  FaRocket,
  FaTrophy,
  FaFileAlt,
  FaCopy,
  FaExternalLinkAlt,
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { scroller } from 'react-scroll';
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audioSynth';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResumeModal: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  onOpenResumeModal,
}) => {
  const [query, setQuery] = useState('');

  // Keyboard shortcut listener for Cmd+K / Ctrl+K / ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        soundFx.playClick();
        if (isOpen) onClose();
        else {
          // Open handled by parent or toggle
        }
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    {
      id: 'core',
      title: 'Warp to Core Overview',
      subtitle: 'Main spatial hero display',
      icon: <FaTerminal className="text-cyan-400" />,
      run: () => {
        scroller.scrollTo('hero', { smooth: true, duration: 600, offset: -70 });
        onClose();
      },
    },
    {
      id: 'galaxy',
      title: 'Explore Skill Galaxy',
      subtitle: 'Interactive orbiting technology galaxy',
      icon: <FaCode className="text-purple-400" />,
      run: () => {
        scroller.scrollTo('galaxy', { smooth: true, duration: 600, offset: -70 });
        onClose();
      },
    },
    {
      id: 'projects',
      title: 'Launch Project Applications',
      subtitle: 'Holographic desktop project windows',
      icon: <FaTerminal className="text-emerald-400" />,
      run: () => {
        scroller.scrollTo('projects', { smooth: true, duration: 600, offset: -70 });
        onClose();
      },
    },
    {
      id: 'journey',
      title: 'Inspect Developer Journey',
      subtitle: 'Academic history (8.6 CGPA) & milestones',
      icon: <FaRocket className="text-amber-400" />,
      run: () => {
        scroller.scrollTo('journey', { smooth: true, duration: 600, offset: -70 });
        onClose();
      },
    },
    {
      id: 'artifacts',
      title: 'Artifact Gallery & Certifications',
      subtitle: 'Verified credentials with LinkedIn links',
      icon: <FaTrophy className="text-amber-300" />,
      run: () => {
        scroller.scrollTo('certifications', { smooth: true, duration: 600, offset: -70 });
        onClose();
      },
    },
    {
      id: 'leetcode',
      title: 'Open LeetCode Profile (@TrimurthuluV)',
      subtitle: 'Algorithm problem solving activity',
      icon: <SiLeetcode className="text-amber-500" />,
      run: () => {
        window.open(PERSONAL_INFO.leetcodeUrl, '_blank');
        onClose();
      },
    },
    {
      id: 'resume',
      title: 'Download Official Resume (PDF)',
      subtitle: 'Print/Save full professional resume',
      icon: <FaFileAlt className="text-indigo-400" />,
      run: () => {
        onOpenResumeModal();
        onClose();
      },
    },
  ];

  const filtered = actions.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.subtitle.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 p-4 sm:p-6 bg-black/80 backdrop-blur-xl flex items-start justify-center pt-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -20 }}
          className="cyber-glass-glow border border-purple-500/50 rounded-3xl max-w-2xl w-full p-4 relative shadow-2xl font-mono space-y-3"
        >
          {/* Search Header Input */}
          <div className="relative flex items-center border-b border-white/10 pb-3">
            <FaSearch className="absolute left-3 text-slate-400 text-sm" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a command, project, or section..."
              className="w-full pl-10 pr-10 py-2 bg-transparent text-slate-100 placeholder:text-slate-500 font-mono text-sm focus:outline-none"
            />
            <button
              onClick={onClose}
              className="absolute right-3 p-1.5 rounded-lg bg-white/5 text-slate-400 hover:text-white cursor-pointer"
            >
              <FaTimes />
            </button>
          </div>

          {/* Action List */}
          <div className="max-h-80 overflow-y-auto space-y-1.5">
            {filtered.length > 0 ? (
              filtered.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    soundFx.playClick();
                    item.run();
                  }}
                  onMouseEnter={() => soundFx.playHover()}
                  className="w-full p-3 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-purple-500/40 text-left flex items-center justify-between group transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-black/40 border border-white/10 text-base">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-100 group-hover:text-cyan-300">
                        {item.title}
                      </h4>
                      <p className="text-[10px] text-slate-400 font-body">{item.subtitle}</p>
                    </div>
                  </div>
                  <FaExternalLinkAlt className="text-[10px] text-slate-500 group-hover:text-cyan-300" />
                </button>
              ))
            ) : (
              <div className="p-6 text-center text-xs text-slate-500 font-mono">
                No matching commands found.
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] text-slate-500 font-mono px-2">
            <span>Press ESC to exit</span>
            <span>Valteti OS Command Palette</span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
