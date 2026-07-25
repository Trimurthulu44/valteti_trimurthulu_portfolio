import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaCode, FaAward, FaTrophy, FaMedal, FaChartLine, FaCheckDouble, FaUsers, FaBullhorn, FaLaptopCode } from 'react-icons/fa';
import { STATS } from '../data/portfolioData';

export const DashboardSection: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FaGraduationCap':
        return <FaGraduationCap className="text-2xl text-cyan-400" />;
      case 'FaCode':
        return <FaCode className="text-2xl text-purple-400" />;
      case 'FaAward':
        return <FaAward className="text-2xl text-blue-400" />;
      case 'FaTrophy':
        return <FaTrophy className="text-2xl text-emerald-400" />;
      case 'FaMedal':
        return <FaMedal className="text-2xl text-amber-400" />;
      case 'FaLaptopCode':
        return <FaLaptopCode className="text-2xl text-teal-400" />;
      case 'FaUsers':
        return <FaUsers className="text-2xl text-indigo-400" />;
      case 'FaBullhorn':
        return <FaBullhorn className="text-2xl text-pink-400" />;
      default:
        return <FaChartLine className="text-2xl text-purple-400" />;
    }
  };

  return (
    <section id="dashboard" className="py-24 relative z-10" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill border-purple-500/30 text-xs font-mono uppercase tracking-widest text-purple-300 mb-4"
          >
            <FaChartLine />
            <span>Quantitative Performance & Milestones</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-white tracking-tight"
          >
            Achievement <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-400 to-cyan-400">Dashboard</span>
          </motion.h2>
          <p className="mt-4 text-slate-400 text-sm sm:text-base">
            Verified academic, coding, leadership, and national assessment rankings at a glance.
          </p>
        </div>

        {/* Dashboard Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="glass-card glass-card-hover p-6 rounded-3xl relative overflow-hidden group"
            >
              {/* Background Ambient Glow */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-purple-600/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />

              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl glass-pill border-white/10 flex items-center justify-center shadow-lg">
                  {getIcon(stat.icon)}
                </div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                  Verified Metric
                </span>
              </div>

              {/* CountUp Value Display */}
              <div className="mt-2">
                <div className="text-4xl sm:text-5xl font-black text-white font-mono tracking-tight flex items-baseline gap-1">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      decimals={stat.decimals || 0}
                      separator=","
                    />
                  ) : (
                    '0'
                  )}
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                    {stat.suffix}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-200 mt-2">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {stat.subtext}
                </p>
              </div>

              {/* Bottom Subtle Progress Line */}
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span className="flex items-center gap-1 text-emerald-400">
                  <FaCheckDouble className="text-xs" /> Active Record
                </span>
                <span>Valteti Trimurthulu</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Visual Analytics Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 glass-card p-8 rounded-3xl border-purple-500/20 bg-gradient-to-r from-purple-950/20 via-slate-900/40 to-cyan-950/20 grid grid-cols-1 md:grid-cols-3 gap-6 items-center"
        >
          <div className="md:col-span-2 space-y-2">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <FaTrophy className="text-amber-400" />
              <span>National & Leadership Distinctions</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Shortlisted as Hackathon Team Lead in 2024 and re-selected in 2025 at Prathyusha Engineering College. Secured All India Rank 9058 in ICAT Aptitude Assessment. Active ACM Student Chapter Member & Marketing Lead (2025 – 2026).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3">
            <div className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-white/5 border border-white/10 text-center">
              <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-widest">ICAT Assessment</span>
              <span className="text-2xl font-black text-white font-mono mt-0.5">#9058</span>
              <span className="text-[10px] text-slate-400">All India Aptitude Ranking</span>
            </div>
            <div className="flex flex-col items-center justify-center p-3.5 rounded-2xl bg-purple-950/40 border border-purple-500/30 text-center">
              <span className="text-[10px] font-mono text-purple-300 uppercase tracking-widest">Club Leadership</span>
              <span className="text-xs font-bold text-white mt-0.5">ACM Member & Marketing Lead</span>
              <span className="text-[10px] font-mono text-purple-300">Session 2025 – 2026</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
