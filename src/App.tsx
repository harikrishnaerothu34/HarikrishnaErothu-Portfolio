import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { TechBackground } from './components/TechBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { CodingProfiles } from './components/CodingProfiles';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { ResumeSection } from './components/ResumeSection';
import { ResumeModal } from './components/ResumeModal';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const AppContent: React.FC = () => {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-zinc-50 dark:bg-[#090d16] text-zinc-900 dark:text-zinc-100 selection:bg-sky-500/25 selection:text-sky-400 transition-colors duration-300">
      {/* Subtle Dynamic Tech Canvas Background */}
      <TechBackground />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col">
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Certifications />
        <CodingProfiles />
        <Education />
        <Experience />
        <ResumeSection onOpenResume={() => setIsResumeModalOpen(true)} />
        <Contact />
      </main>

      {/* Recruiter-Ready Footer */}
      <Footer />

      {/* Interactive In-App Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
};

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
