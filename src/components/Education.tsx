import React from 'react';
import { EDUCATION_DATA } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2 } from 'lucide-react';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative border-t border-zinc-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Education
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Undergraduate foundation in Information Technology with specialized coursework in distributed computing and algorithms.
          </p>
        </div>

        {/* Education Card */}
        <div className="glass-panel p-7 sm:p-8 rounded-2xl border border-zinc-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 max-w-4xl shadow-sm">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-zinc-200/60 dark:border-slate-800/60">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-500 shrink-0 mt-1">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                  {EDUCATION_DATA.degree} in {EDUCATION_DATA.major}
                </h3>
                <p className="text-base font-semibold text-sky-600 dark:text-sky-400 mt-0.5">
                  {EDUCATION_DATA.institution}
                </p>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{EDUCATION_DATA.duration}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Andhra Pradesh, India</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 font-semibold">
                    {EDUCATION_DATA.status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Coursework */}
          <div className="mt-6 space-y-3">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-2">
              <BookOpen className="w-3.5 h-3.5 text-sky-500" />
              <span>Relevant Engineering Coursework</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {EDUCATION_DATA.coursework.map((course, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-zinc-100/70 dark:bg-slate-950/60 border border-zinc-200/60 dark:border-slate-800/80 text-xs font-medium text-zinc-700 dark:text-zinc-300"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>

          {/* Academic Highlights */}
          <div className="mt-6 pt-5 border-t border-zinc-200/60 dark:border-slate-800/60 space-y-2">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
              Academic &amp; Research Highlights
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
              {EDUCATION_DATA.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
