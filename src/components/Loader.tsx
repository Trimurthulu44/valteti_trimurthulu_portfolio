import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoaderProps {
  onComplete: () => void;
}

export const Loader: React.FC<LoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing Portfolio System...');

  useEffect(() => {
    const texts = [
      'Loading Portfolio Components...',
      'Compiling Java & React Engines...',
      'Initializing Modern UI...',
      'Ready!',
    ];

    // Accelerate loading progress for instant page load
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => onComplete(), 150);
          return 100;
        }
        const next = prev + 25;
        if (next > 25 && next < 50) setStatusText(texts[0]);
        if (next >= 50 && next < 75) setStatusText(texts[1]);
        if (next >= 75 && next < 95) setStatusText(texts[2]);
        if (next >= 95) setStatusText(texts[3]);
        return Math.min(next, 100);
      });
    }, 25);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        key="portfolio-loader"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        onClick={onComplete}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050816] text-white overflow-hidden cursor-pointer"
      >
        {/* Background glow effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

        {/* Monogram / Logo Box */}
        <div className="relative mb-8 flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            className="w-28 h-28 rounded-3xl p-[2px] bg-gradient-to-tr from-cyan-400 via-purple-500 to-indigo-600 shadow-[0_0_30px_rgba(139,92,246,0.3)]"
          >
            <div className="w-full h-full bg-[#050816] rounded-[22px] flex items-center justify-center">
              <span className="text-3xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-indigo-400">
                VT
              </span>
            </div>
          </motion.div>
          <div className="absolute -inset-2 bg-purple-500/20 rounded-3xl blur-xl animate-pulse -z-10" />
        </div>

        {/* Percentage Counter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="text-5xl font-extrabold tracking-tight font-mono text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400">
            {progress}%
          </div>
          <p className="mt-2 text-xs uppercase tracking-[0.25em] text-slate-400 font-medium h-5">
            {statusText}
          </p>
        </motion.div>

        {/* Morphing Progress Bar */}
        <div className="w-64 h-1.5 bg-white/10 rounded-full overflow-hidden p-[1px] backdrop-blur-md border border-white/10 shadow-[0_0_15px_rgba(139,92,246,0.2)]">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-indigo-500"
            style={{ width: `${progress}%` }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        {/* Subtle tagline footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.2 }}
          className="absolute bottom-10 text-xs text-slate-500 tracking-widest uppercase font-mono"
        >
          Valteti Trimurthulu • Full Stack Engineering
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
};
