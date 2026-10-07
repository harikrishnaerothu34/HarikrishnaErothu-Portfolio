import React, { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { FileText, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy
      const sections = navLinks.map((l) => l.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#home"
            className="flex items-center gap-2.5 group focus:outline-none"
            aria-label="Erothu Harikrishna Home"
          >
            <div className="w-9 h-9 rounded-lg bg-slate-900 dark:bg-slate-800 border border-slate-700/60 dark:border-sky-500/30 flex items-center justify-center font-mono font-bold text-sky-400 text-sm group-hover:border-sky-400 group-hover:scale-105 transition-all shadow-xs">
              EH
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-zinc-900 dark:text-zinc-100 group-hover:text-sky-500 transition-colors">
                Harikrishna
              </span>
              <span className="text-[10px] uppercase font-mono tracking-wider text-zinc-500 dark:text-zinc-400">
                Full-Stack / AI
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-zinc-100/70 dark:bg-slate-900/60 border border-zinc-200/80 dark:border-slate-800/80 rounded-full px-3 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-sky-500/10 text-sky-600 dark:text-sky-400 font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Action CTAs & Controls */}
          <div className="hidden sm:flex items-center gap-3">
            <ThemeToggle />

            <button
              onClick={onOpenResume}
              type="button"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 shadow-sm transition-all duration-200 hover:shadow-sky-500/20 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-b border-zinc-200 dark:border-slate-800/80 px-4 pt-3 pb-6 mt-3 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-1.5">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-sky-500/15 text-sky-500 dark:text-sky-400 font-semibold'
                      : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-slate-800'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-3 border-t border-zinc-200 dark:border-slate-800 flex items-center justify-between">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenResume();
                }}
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>View & Download Resume</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
