import React, { useEffect, useRef } from 'react';

export const SpaceBackgroundCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse coordinates for dynamic aura light spotlight
    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Generate multi-depth spatial particles
    const starCount = 110;
    const stars: Array<{
      x: number;
      y: number;
      z: number; // Depth factor: 1 (far), 2 (mid), 3 (near)
      size: number;
      color: string;
      alpha: number;
      pulseSpeed: number;
    }> = [];

    const colors = ['#38bdf8', '#a855f7', '#06b6d4', '#f59e0b', '#ffffff'];

    for (let i = 0; i < starCount; i++) {
      const z = Math.random() < 0.6 ? 1 : Math.random() < 0.85 ? 2 : 3;
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        z,
        size: z === 1 ? Math.random() * 1.2 + 0.5 : z === 2 ? Math.random() * 2 + 1 : Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.7 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.005,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.01;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw Ambient Radial Cursor Spotlight
      const gradient = ctx.createRadialGradient(mouseX, mouseY, 10, mouseX, mouseY, 450);
      gradient.addColorStop(0, 'rgba(168, 85, 247, 0.12)');
      gradient.addColorStop(0.5, 'rgba(6, 182, 212, 0.06)');
      gradient.addColorStop(1, 'rgba(3, 7, 18, 0)');

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // 2. Render Stars & Parallax Motion
      stars.forEach((star) => {
        // Parallax drift based on mouse offset
        const offsetX = ((mouseX - width / 2) * star.z) / 120;
        const offsetY = ((mouseY - height / 2) * star.z) / 120;

        const posX = star.x + offsetX;
        const posY = star.y + offsetY;

        // Pulse alpha
        const currentAlpha = Math.abs(Math.sin(time * star.pulseSpeed * 5)) * 0.5 + 0.3;

        ctx.save();
        ctx.globalAlpha = Math.min(1, currentAlpha * (star.z / 2));
        ctx.fillStyle = star.color;

        if (star.z === 3) {
          ctx.shadowBlur = 10;
          ctx.shadowColor = star.color;
        }

        ctx.beginPath();
        ctx.arc((posX + width) % width, (posY + height) % height, star.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Aurora Gradient Orbs in Background */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600/20 rounded-full blur-[140px] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-600/20 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-amber-500/15 rounded-full blur-[140px] animate-pulse-glow" style={{ animationDelay: '4s' }} />

      {/* Cyber Grid Pattern */}
      <div className="absolute inset-0 bg-cyber-grid opacity-15 pointer-events-none" />
    </div>
  );
};
