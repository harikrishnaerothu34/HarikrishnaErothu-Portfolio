import { useState, useEffect } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_LINKS = [
  { label: 'Home', href: '#home', id: 'home' },
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Achievements', href: '#achievements', id: 'achievements' },
  { label: 'Certifications', href: '#certifications', id: 'certifications' },
  { label: 'Contact', href: '#contact', id: 'contact' },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('projects');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    NAV_LINKS.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F7F5EF]/90 backdrop-blur-md border-b border-[#E5E1D8] transition-all">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <a className="flex items-center gap-3 group" href="#home" aria-label="Go to top">
          <div className="w-9 h-9 rounded-xl bg-[#245B4A] text-white flex items-center justify-center font-bold text-sm tracking-tight shadow-sm group-hover:bg-[#1b473a] transition-all duration-150">
            EH
          </div>
          <div className="flex items-center gap-2">
            <span className="text-base font-bold text-[#252724] tracking-tight">
              Harikrishna<span className="text-[#245B4A]">.dev</span>
            </span>
          </div>
        </a>

        {/* Center Nav Links (Desktop) */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center bg-white px-4 py-1.5 rounded-full border border-[#E5E1D8] gap-6 text-sm shadow-subtle"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.label}
                className={`transition-colors ${
                  isActive
                    ? 'text-[#245B4A] font-semibold'
                    : 'text-[#68645C] font-medium hover:text-[#245B4A]'
                }`}
                href={link.href}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            className="inline-flex items-center gap-1.5 bg-[#245B4A] hover:bg-[#1b473a] text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-sm transition-all duration-150 hover:-translate-y-0.5 active:translate-y-0"
            href={PERSONAL_INFO.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            title="View Resume in new tab"
          >
            <span>Resume</span>
            <span className="material-symbols-outlined text-base">north_east</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border border-[#E5E1D8] bg-white text-[#252724] hover:border-[#245B4A]/50 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="material-symbols-outlined text-xl">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-b border-[#E5E1D8] px-6 py-4 space-y-3 shadow-card animate-in fade-in duration-150">
          <nav className="flex flex-col space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-[#252724] hover:bg-[#FAF9F6] hover:text-[#245B4A] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-[#E5E1D8] flex gap-2">
              <a
                href={PERSONAL_INFO.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-1.5 bg-[#245B4A] text-white py-2.5 rounded-xl text-sm font-semibold"
              >
                <span>View Resume</span>
                <span className="material-symbols-outlined text-base">north_east</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
