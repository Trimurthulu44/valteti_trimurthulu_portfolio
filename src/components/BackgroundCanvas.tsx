import React, { useEffect, useState } from 'react';
import Particles from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import { tsParticles } from '@tsparticles/engine';

export const BackgroundCanvas: React.FC = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    loadSlim(tsParticles).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050816]">
      {/* Animated Aurora Mesh */}
      <div className="absolute inset-0 aurora-bg opacity-70" />

      {/* Floating Animated Gradient Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[140px] animate-float pointer-events-none" />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[160px] animate-float pointer-events-none"
        style={{ animationDelay: '3s' }}
      />
      <div className="absolute top-[40%] right-[20%] w-[400px] h-[400px] bg-indigo-600/15 rounded-full blur-[120px] animate-pulse-glow pointer-events-none" />

      {/* SVG Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      {/* Noise Overlay */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      {/* Lightweight TSParticles */}
      {init && (
        <Particles
          id="tsparticles-portfolio"
          options={{
            background: {
              color: {
                value: 'transparent',
              },
            },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: 'grab',
                },
              },
              modes: {
                grab: {
                  distance: 140,
                  links: {
                    opacity: 0.2,
                  },
                },
              },
            },
            particles: {
              color: {
                value: ['#60a5fa', '#a855f7', '#38bdf8', '#818cf8'],
              },
              links: {
                color: '#a855f7',
                distance: 130,
                enable: true,
                opacity: 0.08,
                width: 1,
              },
              move: {
                direction: 'none',
                enable: true,
                outModes: {
                  default: 'bounce',
                },
                random: true,
                speed: 0.6,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                },
                value: 35,
              },
              opacity: {
                value: { min: 0.1, max: 0.4 },
              },
              shape: {
                type: 'circle',
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
          className="absolute inset-0 pointer-events-none"
        />
      )}
    </div>
  );
};
