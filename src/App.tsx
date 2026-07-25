import React, { useState } from 'react';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { Navbar } from './components/Navbar';
import { HeroSection } from './sections/HeroSection';
import { AboutSection } from './sections/AboutSection';
import { DashboardSection } from './sections/DashboardSection';
import { SkillsSection } from './sections/SkillsSection';
import { ExperienceSection } from './sections/ExperienceSection';
import { ProjectsSection } from './sections/ProjectsSection';
import { EducationSection } from './sections/EducationSection';
import { CertificationsSection } from './sections/CertificationsSection';
import { TerminalSection } from './sections/TerminalSection';
import { ContactSection } from './sections/ContactSection';
import { ResumeModal } from './components/ResumeModal';
import { Footer } from './components/Footer';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050816] text-slate-100 overflow-x-hidden font-sans selection:bg-purple-600 selection:text-white">
      {/* 1. Atmospheric Aurora Particle Canvas */}
      <BackgroundCanvas />

      {/* 2. Sticky Glassmorphism Navigation Bar */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* 3. Portfolio Content Sections */}
      <main className="relative z-10 space-y-8">
        <HeroSection onOpenResume={() => setResumeOpen(true)} />
        <AboutSection />
        <DashboardSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <CertificationsSection />
        <TerminalSection />
        <ContactSection />
      </main>

      {/* 4. Footer */}
      <Footer />

      {/* 5. Printable Resume Modal */}
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </div>
  );
}
