import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PROFILE_PHOTO from "../assets/profile.jpg";
import { PERSONAL_INFO } from '../data/portfolioData';
import { soundFx } from '../utils/audioSynth';

interface BootupSequenceProps {
  onComplete: () => void;
}

export const BootupSequence: React.FC<BootupSequenceProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<'seed' | 'portal' | 'exploding' | 'revealed'>('seed');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Accelerated Loading Counter
  useEffect(() => {
    let timer: NodeJS.Timeout;
    let current = 0;

    const tick = () => {
      // Non-linear acceleration: slow at first (0-30), then rapid acceleration (30-100)
      let step = 1;
      if (current < 20) step = Math.random() * 2 + 1;
      else if (current < 50) step = Math.random() * 4 + 2;
      else if (current < 80) step = Math.random() * 7 + 4;
      else step = Math.random() * 12 + 6;

      current = Math.min(100, Math.floor(current + step));
      setProgress(current);

      if (current === 20 && stage === 'seed') {
        setStage('portal');
      }

      if (current < 100) {
        // Interval speeds up as current increases
        const delay = Math.max(15, 120 - current * 0.9);
        timer = setTimeout(tick, delay);
      } else {
        // Reached 100% -> Trigger Portal Particle Explosion
        soundFx.playBootChime();
        setStage('exploding');
        setTimeout(() => {
          setStage('revealed');
          setTimeout(() => {
            onComplete();
          }, 1200);
        }, 1000);
      }
    };

    timer = setTimeout(tick, 300);
    return () => clearTimeout(timer);
  }, [onComplete]);

  // Particle Canvas explosion on 100% completion
  useEffect(() => {
    if (stage !== 'exploding' && stage !== 'revealed') return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    const particleCount = 180;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;
      alpha: number;
    }> = [];

    const colors = ['#06b6d4', '#a855f7', '#f59e0b', '#ec4899', '#38bdf8'];

    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 14 + 4;
      particles.push({
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 4 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
      });
    }

    let animId: number;
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.012;

        if (p.alpha > 0) {
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.alpha);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 12;
          ctx.shadowColor = p.color;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });

      if (particles.some((p) => p.alpha > 0)) {
        animId = requestAnimationFrame(render);
      }
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [stage]);

  const handleSkip = () => {
    soundFx.playBootChime();
    onComplete();
  };

  return (
    <AnimatePresence>
      <motion.div
        key="bootup-overlay"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 bg-[#030712] flex flex-col items-center justify-center overflow-hidden font-mono select-none"
      >
        {/* Canvas for Particle Burst */}
        <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-30" />

        {/* Ambient Grid Lines */}
        <div className="absolute inset-0 bg-cyber-grid opacity-20 pointer-events-none" />

        {/* Skip Intro Button */}
        <button
          onClick={handleSkip}
          className="absolute top-6 right-6 z-40 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-400 hover:text-cyan-300 transition-all backdrop-blur-md cursor-pointer flex items-center gap-2"
        >
          <span>Skip Intro</span>
          <span className="text-[10px] text-slate-500 font-mono">ESC / CLICK</span>
        </button>

        {/* Center Portal / Core Assembly */}
        <div className="relative w-80 h-80 flex items-center justify-center">
          
          {/* Stage 1: Tiny Energy Core */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: stage === 'seed' ? [0.2, 1, 0.8, 1.2] : [1, 1.4, 0.5],
              opacity: [0, 1, 0.8, 1],
            }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse' }}
            className="w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_35px_#06b6d4] z-20"
          />

          {/* Stage 2: Rotating Portal Rings & Electric Threads */}
          {(stage === 'portal' || stage === 'exploding' || stage === 'revealed') && (
            <>
              {/* Outer Cyan Ring */}
              <motion.div
                initial={{ scale: 0, opacity: 0, rotate: 0 }}
                animate={{
                  scale: stage === 'exploding' ? 2.5 : 1,
                  opacity: stage === 'exploding' ? 0 : 0.8,
                  rotate: 360,
                }}
                transition={{
                  rotate: { duration: 8, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 0.8 },
                }}
                className="absolute inset-2 rounded-full border-2 border-dashed border-cyan-400/60 shadow-[0_0_30px_rgba(6,182,212,0.4)] pointer-events-none"
              />

              {/* Inner Purple Counter-Rotating Arc */}
              <motion.div
                initial={{ scale: 0, opacity: 0, rotate: 360 }}
                animate={{
                  scale: stage === 'exploding' ? 3 : 1,
                  opacity: stage === 'exploding' ? 0 : 0.9,
                  rotate: 0,
                }}
                transition={{
                  rotate: { duration: 12, repeat: Infinity, ease: 'linear' },
                  scale: { duration: 0.8 },
                }}
                className="absolute inset-8 rounded-full border-2 border-purple-500/80 border-t-transparent border-b-transparent shadow-[0_0_30px_rgba(168,85,247,0.5)] pointer-events-none"
              />

              {/* Amber Accelerator Arc */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.7, rotate: -360 }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-16 rounded-full border border-amber-400/50 border-r-transparent border-l-transparent pointer-events-none"
              />
            </>
          )}

          {/* Stage 3: Particle Convergence into Profile Photo */}
          <AnimatePresence>
            {(stage === 'exploding' || stage === 'revealed') && (
              <motion.div
                initial={{ scale: 0, opacity: 0, rotate: -45 }}
                animate={{ scale: [0, 1.2, 1], opacity: 1, rotate: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className="absolute z-30 w-48 h-48 rounded-full overflow-hidden border-2 border-cyan-400 shadow-[0_0_50px_rgba(6,182,212,0.8)]"
              >
                <img
                  src={PROFILE_PHOTO}
                  alt={PERSONAL_INFO?.name || 'Valteti Trimurthulu'}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-40" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Progress & System Telemetry Status */}
        <div className="mt-8 text-center space-y-2 z-30">
          <div className="flex items-center justify-center gap-3">
            <span className="text-xs font-mono text-cyan-400 tracking-wider">VALTETI OS BOOT SEQUENCE</span>
            <span className="px-2 py-0.5 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 text-[10px] font-bold">
              v3.0 QUANTUM
            </span>
          </div>

          {/* Big Digital Progress Counter */}
          <div className="text-4xl sm:text-5xl font-black font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-300 to-amber-300">
            {progress}%
          </div>

          {/* Telemetry Log Message */}
          <p className="text-xs text-slate-400 font-mono h-5">
            {progress < 25 && '⚡ INITIALIZING QUANTUM CORE ARCHITECTURE...'}
            {progress >= 25 && progress < 55 && '🔮 SYNCHRONIZING LEETCODE & JAVA PIPELINE...'}
            {progress >= 55 && progress < 85 && '🌌 ASSEMBLING INTERACTIVE SKILL GALAXY...'}
            {progress >= 85 && progress < 100 && '🚀 RENDERING HOLOGRAPHIC DESKTOP ENV...'}
            {progress === 100 && '✨ SYSTEM ONLINE — WELCOME MASTER'}
          </p>

          {/* Sleek Progress Bar */}
          <div className="w-64 sm:w-80 h-1.5 bg-slate-900 rounded-full border border-white/10 overflow-hidden mx-auto mt-2">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-amber-400 rounded-full shadow-[0_0_15px_#06b6d4]"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
