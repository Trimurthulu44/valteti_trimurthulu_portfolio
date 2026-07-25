import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaCode, FaCopy, FaCheck, FaPlay } from 'react-icons/fa';
import { PERSONAL_INFO, STATS, PROJECTS, SKILL_CATEGORIES } from '../data/portfolioData';

export const TerminalSection: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<Array<{ command: string; output: React.ReactNode }>>([
    {
      command: 'valteti --init',
      output: (
        <div className="space-y-1 text-emerald-400 font-mono text-xs sm:text-sm">
          <p className="text-cyan-300 font-bold">🚀 Valteti Trimurthulu Developer CLI v2.5.0</p>
          <p className="text-slate-300">Type <span className="text-amber-300 font-bold">'help'</span> or click quick commands below to inspect profile payload.</p>
        </div>
      ),
    },
  ]);
  const [copied, setCopied] = useState(false);

  const handleCommand = (cmd: string) => {
    const cleanCmd = cmd.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    let outputNode: React.ReactNode;

    switch (cleanCmd) {
      case 'help':
        outputNode = (
          <div className="text-xs sm:text-sm font-mono text-slate-300 space-y-1">
            <p className="text-cyan-300 font-bold">Available Commands:</p>
            <p><span className="text-amber-300 font-bold">about</span> - Display personal bio & engineering overview</p>
            <p><span className="text-amber-300 font-bold">skills</span> - List primary technical stack & frameworks</p>
            <p><span className="text-amber-300 font-bold">projects</span> - View featured web & software projects</p>
            <p><span className="text-amber-300 font-bold">metrics</span> - View quantitative metrics & rankings</p>
            <p><span className="text-amber-300 font-bold">contact</span> - Output direct contact links & social handles</p>
            <p><span className="text-amber-300 font-bold">clear</span> - Clear terminal window</p>
          </div>
        );
        break;

      case 'about':
        outputNode = (
          <div className="text-xs sm:text-sm font-mono space-y-2 text-slate-200">
            <p className="text-purple-300 font-bold">{PERSONAL_INFO.name} — {PERSONAL_INFO.title}</p>
            <p className="text-slate-300">{PERSONAL_INFO.aboutDetailed}</p>
            <p className="text-cyan-300">Degree: B.E. CSE @ Prathyusha Engineering College (CGPA: 8.6)</p>
          </div>
        );
        break;

      case 'skills':
        outputNode = (
          <div className="text-xs sm:text-sm font-mono space-y-2">
            {SKILL_CATEGORIES.map((cat) => (
              <div key={cat.title}>
                <span className="text-cyan-300 font-bold">[{cat.title}]: </span>
                <span className="text-slate-300">{cat.skills.map((s) => s.name).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        outputNode = (
          <div className="text-xs sm:text-sm font-mono space-y-2">
            {PROJECTS.map((p, i) => (
              <div key={p.id} className="border-l-2 border-purple-500 pl-3">
                <p className="text-amber-300 font-bold">{i + 1}. {p.title} ({p.category})</p>
                <p className="text-slate-300">{p.shortDescription}</p>
                <p className="text-purple-300">Stack: {p.techStack.join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'metrics':
        outputNode = (
          <div className="text-xs sm:text-sm font-mono space-y-1 text-slate-300">
            {STATS.map((s) => (
              <p key={s.id}>
                <span className="text-cyan-300 font-bold">{s.label}: </span>
                <span className="text-amber-300 font-bold">{s.value}{s.suffix}</span> ({s.subtext})
              </p>
            ))}
          </div>
        );
        break;

      case 'contact':
        outputNode = (
          <div className="text-xs sm:text-sm font-mono space-y-1 text-slate-300">
            <p><span className="text-cyan-300 font-bold">Email: </span>{PERSONAL_INFO.email}</p>
            <p><span className="text-cyan-300 font-bold">Phone: </span>{PERSONAL_INFO.phone}</p>
            <p><span className="text-cyan-300 font-bold">LinkedIn: </span>{PERSONAL_INFO.linkedinUrl}</p>
            <p><span className="text-cyan-300 font-bold">GitHub: </span>{PERSONAL_INFO.githubUrl}</p>
            <p><span className="text-cyan-300 font-bold">LeetCode: </span>{PERSONAL_INFO.leetcodeUrl}</p>
          </div>
        );
        break;

      default:
        outputNode = (
          <p className="text-rose-400 font-mono text-xs sm:text-sm">
            Command not recognized: '{cleanCmd}'. Type <span className="text-amber-300 font-bold">'help'</span> for a list of available options.
          </p>
        );
    }

    setHistory((prev) => [...prev, { command: cmd, output: outputNode }]);
    setInput('');
  };

  const copyJson = () => {
    const payload = JSON.stringify(
      {
        developer: PERSONAL_INFO.name,
        title: PERSONAL_INFO.title,
        cgpa: PERSONAL_INFO.cgpa,
        leetcode: PERSONAL_INFO.leetcodeUrl,
        linkedin: PERSONAL_INFO.linkedinUrl,
        github: PERSONAL_INFO.githubUrl,
      },
      null,
      2
    );
    navigator.clipboard.writeText(payload);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-purple-500/30 text-xs font-mono uppercase tracking-widest text-cyan-300 mb-3"
          >
            <FaTerminal />
            <span>Developer Shell Console</span>
          </motion.div>
          <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
            Interactive <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-amber-300">Terminal</span>
          </h2>
          <p className="mt-2 text-slate-400 text-xs sm:text-sm">
            Inspect profile data payload directly in a command-line environment.
          </p>
        </div>

        {/* Terminal Window Box */}
        <div className="glass-card rounded-3xl border border-white/10 overflow-hidden shadow-2xl bg-[#070b19]/90">
          
          {/* Title Bar */}
          <div className="px-5 py-3.5 bg-black/40 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="ml-2 text-xs font-mono text-slate-400 font-medium hidden sm:inline">
                valteti@portfolio-shell:~
              </span>
            </div>

            <button
              onClick={copyJson}
              className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-cyan-300 bg-white/5 hover:bg-white/10 px-3 py-1 rounded-lg border border-white/10 transition-all"
            >
              {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
              <span>{copied ? 'Copied JSON!' : 'Copy JSON'}</span>
            </button>
          </div>

          {/* Terminal Console Output */}
          <div className="p-5 sm:p-6 min-h-[260px] max-h-[380px] overflow-y-auto space-y-4 font-mono">
            {history.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs sm:text-sm text-cyan-400">
                  <span className="text-purple-400">valteti@dev:~$</span>
                  <span className="text-white font-bold">{item.command}</span>
                </div>
                <div className="pl-4 border-l border-purple-500/30">
                  {item.output}
                </div>
              </div>
            ))}
          </div>

          {/* Preset Buttons */}
          <div className="p-3 bg-black/30 border-t border-white/5 flex flex-wrap items-center gap-2 text-xs font-mono">
            <span className="text-slate-500 px-2">Quick Cmds:</span>
            {['help', 'about', 'skills', 'projects', 'metrics', 'contact', 'clear'].map((cmd) => (
              <button
                key={cmd}
                onClick={() => handleCommand(cmd)}
                className="px-2.5 py-1 rounded-md bg-purple-950/50 hover:bg-purple-900/80 text-purple-200 border border-purple-800/40 transition-colors cursor-pointer"
              >
                {cmd}
              </button>
            ))}
          </div>

          {/* Interactive Input Line */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleCommand(input);
            }}
            className="p-3.5 bg-black/50 border-t border-white/10 flex items-center gap-2 font-mono text-xs sm:text-sm"
          >
            <span className="text-purple-400 font-bold">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type 'help', 'skills', or 'projects'..."
              className="w-full bg-transparent text-slate-100 focus:outline-none placeholder:text-slate-600 font-mono"
            />
            <button
              type="submit"
              className="px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs flex items-center gap-1 transition-all"
            >
              <FaPlay className="text-[10px]" /> Run
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};
