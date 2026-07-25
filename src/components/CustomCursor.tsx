import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.onclick !== null ||
          target.closest('a') ||
          target.closest('button') ||
          target.classList.contains('interactive'))
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden lg:block">
      {/* Small dot cursor */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 shadow-[0_0_12px_rgba(6,182,212,0.8)]"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
          scale: isHovered ? 2.2 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 400, mass: 0.1 }}
      />

      {/* Larger glowing trailing aura ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border border-purple-400/40 bg-purple-500/5 backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovered ? 1.8 : 1,
          borderColor: isHovered ? 'rgba(6,182,212,0.8)' : 'rgba(139,92,246,0.3)',
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 200, mass: 0.2 }}
      />
    </div>
  );
};
