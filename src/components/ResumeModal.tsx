import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaTimes, 
  FaPrint, 
  FaDownload, 
  FaBriefcase, 
  FaGraduationCap, 
  FaCode, 
  FaAward, 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedin, 
  FaGithub, 
  FaArrowLeft 
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { PERSONAL_INFO, EDUCATION, EXPERIENCES, PROJECTS, CERTIFICATIONS } from '../data/portfolioData';
import PROFILE_PHOTO from "../assets/profile.jpg";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] bg-[#0b0f29] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col text-slate-100"
        >
          {/* Modal Header Controls (Hidden during print) */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 backdrop-blur-md print:hidden">
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-bold text-cyan-300 border border-cyan-500/30 transition-all cursor-pointer"
              >
                <FaArrowLeft /> Back to Main Page
              </button>
              <h3 className="hidden sm:block font-mono text-sm text-slate-300 font-semibold ml-2">
                Valteti_Trimurthulu_Resume.pdf
              </h3>
            </div>
            <div className="flex items-center gap-3">
              {/* Direct PDF Download */}
              <a
                href="/Valteti_Trimurthulu_Resume.pdf"
                download="Valteti_Trimurthulu_Resume.pdf"
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 border border-cyan-400/40 text-xs font-bold text-white shadow-lg transition-all cursor-pointer"
              >
                <FaDownload className="text-xs" /> Download PDF
              </a>

              {/* Print Button */}
              <button
                onClick={handlePrint}
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-xs font-medium text-slate-200 transition-all cursor-pointer"
              >
                <FaPrint className="text-xs" /> Print
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all cursor-pointer"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>
            </div>
          </div>

          {/* Resume Content View */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-[#0b0f29]" id="resume-print-area">
            {/* Header / Name Banner */}
            <div className="border-b border-white/10 pb-6 flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="flex items-center gap-5">
                <div className="relative w-20 h-20 rounded-2xl p-[2px] bg-gradient-to-tr from-cyan-400 via-purple-500 to-indigo-500 flex-shrink-0 shadow-lg">
                  <img
                    src={PROFILE_PHOTO}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-full object-cover rounded-[14px]"
                  />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white uppercase">
                    {PERSONAL_INFO.name}
                  </h1>
                  <p className="text-base font-semibold text-cyan-400 mt-0.5">
                    {PERSONAL_INFO.title}
                  </p>
                  <p className="text-xs text-slate-400 mt-1.5 max-w-lg">
                    {PERSONAL_INFO.bio}
                  </p>
                </div>
              </div>

              <div className="text-xs text-slate-300 space-y-1.5 font-mono">
                <a
                  href={PERSONAL_INFO.gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-cyan-300 transition-colors"
                >
                  <FaEnvelope className="text-cyan-400" />
                  <span>{PERSONAL_INFO.email}</span>
                </a>
                <div className="flex items-center gap-2">
                  <FaPhone className="text-cyan-400" />
                  <span>{PERSONAL_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-cyan-400" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <a href={PERSONAL_INFO.leetcodeUrl} target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:underline flex items-center gap-1 font-bold">
                    <SiLeetcode /> LeetCode
                  </a>
                  <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:underline flex items-center gap-1">
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline flex items-center gap-1">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Education Section */}
            <div>
              <h2 className="text-lg font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                <FaGraduationCap /> Education
              </h2>
              <div className="space-y-4">
                {EDUCATION.map((edu) => (
                  <div key={edu.id} className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between text-sm">
                      <span className="font-bold text-slate-100">{edu.degree}</span>
                      <span className="text-xs font-mono text-cyan-300 bg-cyan-950/60 px-2.5 py-0.5 rounded border border-cyan-800/40">{edu.period}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mt-1">
                      <span>{edu.institution}, {edu.location}</span>
                      <span className="font-semibold text-purple-300">{edu.grade}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Internship & Leadership Experience */}
            <div>
              <h2 className="text-lg font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                <FaBriefcase /> Internship & Leadership Experience
              </h2>
              <div className="space-y-4">
                {EXPERIENCES.map((exp) => (
                  <div key={exp.id} className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                      <h3 className="font-bold text-white text-base">{exp.role}</h3>
                      <span className="text-xs font-mono text-purple-300">{exp.period}</span>
                    </div>
                    <div className="text-xs text-cyan-400 mb-2 font-medium">
                      {exp.company} • {exp.location}
                    </div>
                    <ul className="list-disc list-inside text-xs text-slate-300 space-y-1">
                      {exp.description.map((desc, idx) => (
                        <li key={idx}>{desc}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Projects */}
            <div>
              <h2 className="text-lg font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
                <FaCode /> Core Projects
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="bg-white/5 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                    <div>
                      <h3 className="font-bold text-slate-100 text-sm">{proj.title}</h3>
                      <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                        {proj.shortDescription}
                      </p>
                    </div>
                    <div className="mt-3 pt-2 border-t border-white/10 flex flex-wrap gap-1">
                      {proj.techStack.map((tech) => (
                        <span key={tech} className="text-[10px] bg-slate-800 text-slate-300 px-1.5 py-0.5 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications & Technical Skills */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
                  <FaAward /> Certifications
                </h2>
                <ul className="space-y-2 text-xs text-slate-300">
                  {CERTIFICATIONS.map((cert) => (
                    <li key={cert.id} className="flex items-center justify-between bg-white/5 p-2 rounded-lg">
                      <span className="font-medium text-slate-200">{cert.title}</span>
                      <span className="text-[11px] text-cyan-400">{cert.issuer}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold uppercase tracking-wider text-purple-400 flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
                  <FaCode /> Technical Skills
                </h2>
                <div className="text-xs space-y-2 text-slate-300">
                  <div>
                    <strong className="text-slate-100">Languages:</strong> Java, JavaScript, Python, HTML5, CSS3
                  </div>
                  <div>
                    <strong className="text-slate-100">Frameworks & Web:</strong> React.js, Node.js, Spring Boot (Basics), REST APIs
                  </div>
                  <div>
                    <strong className="text-slate-100">Databases & Tools:</strong> MySQL, MongoDB, Git, GitHub, VS Code, WordPress
                  </div>
                  <div>
                    <strong className="text-slate-100">Core Concepts:</strong> OOP, Data Structures, Problem Solving
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions (Hidden during print) */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 print:hidden">
              <button
                onClick={onClose}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 hover:text-white font-bold text-xs border border-white/10 transition-all cursor-pointer"
              >
                <FaArrowLeft className="text-cyan-400" /> Back to Main Page
              </button>

              <a
                href="/Valteti_Trimurthulu_Resume.pdf"
                download="Valteti_Trimurthulu_Resume.pdf"
                className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-bold text-xs border border-cyan-400/40 shadow-lg transition-all cursor-pointer"
              >
                <FaDownload className="text-xs" /> Download Resume (PDF)
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};