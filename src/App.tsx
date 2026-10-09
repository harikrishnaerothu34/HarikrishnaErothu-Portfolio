import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#F7F5EF] text-[#252724] font-sans antialiased selection:bg-[#245B4A]/15 selection:text-[#245B4A] min-h-screen flex flex-col relative overflow-x-hidden">
      {/* Sticky Modern Navbar */}
      <Navbar />

      {/* Main Page Content */}
      <main className="flex-grow">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Certifications />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
