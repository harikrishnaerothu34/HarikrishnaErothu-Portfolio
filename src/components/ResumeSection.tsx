import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Download, FileText, Sparkles, CheckCircle } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResume: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  return (
    <section id="resume" className="py-20 relative border-t border-zinc-200/60 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative glass-panel rounded-3xl p-8 sm:p-12 border border-sky-500/20 bg-gradient-to-br from-sky-500/5 via-transparent to-indigo-500/5 dark:from-sky-500/10 dark:to-indigo-500/10 text-center shadow-xl overflow-hidden">
          {/* Subtle top light bar */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

          {/* Section Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 mb-4">
            Want to know more about my experience?
          </h2>

          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-8 leading-relaxed">
            Download my ATS-formatted resume or review my project metrics, technical capabilities, and hackathon accomplishments in detail.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Erothu_Harikrishna_Resume.pdf"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all duration-200 shadow-sm hover:shadow-sky-500/25 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>

            <button
              onClick={onOpenResume}
              type="button"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-zinc-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-zinc-100 dark:hover:bg-slate-800 text-zinc-800 dark:text-zinc-200 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer shadow-xs"
            >
              <FileText className="w-4 h-4 text-sky-500" />
              <span>View Resume</span>
            </button>
          </div>

          {/* Quick Highlights underneath */}
          <div className="mt-8 pt-6 border-t border-zinc-200/60 dark:border-slate-800/60 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> ATS-Friendly Format
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Updated for 2026/2027 Roles
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Single-Page PDF Layout
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
