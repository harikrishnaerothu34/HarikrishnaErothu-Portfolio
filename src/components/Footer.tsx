import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Code, ArrowUp } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-200/80 dark:border-slate-800/80 bg-zinc-100/60 dark:bg-slate-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Candidate Info */}
          <div className="text-center md:text-left space-y-1">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-base text-zinc-900 dark:text-zinc-100">
                {PERSONAL_INFO.name}
              </span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400">
              Full-Stack Developer | AI &amp; LLM Enthusiast | Cloud Computing
            </p>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-5">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>

            <span className="text-zinc-300 dark:text-zinc-700">•</span>

            <a
              href={PERSONAL_INFO.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-[#0a66c2]" />
              <span>LinkedIn</span>
            </a>

            <span className="text-zinc-300 dark:text-zinc-700">•</span>

            <a
              href={PERSONAL_INFO.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400 hover:text-amber-500 dark:hover:text-amber-400 transition-colors"
            >
              <Code className="w-4 h-4 text-amber-500" />
              <span>LeetCode</span>
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            type="button"
            className="p-2 rounded-lg border border-zinc-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 dark:hover:border-slate-700 transition-all text-xs flex items-center gap-1.5 cursor-pointer shadow-2xs"
            aria-label="Back to top"
          >
            <span className="text-xs">Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright & build notice */}
        <div className="mt-8 pt-6 border-t border-zinc-200/60 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-zinc-400 dark:text-zinc-500 text-center sm:text-left">
          <p>© {currentYear} {PERSONAL_INFO.name}. All rights reserved.</p>
          <p>Engineered with React, TypeScript &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
};
