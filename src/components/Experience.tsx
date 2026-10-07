import React from 'react';
import { EXPERIENCE_DATA } from '../data/portfolioData';
import { Briefcase, Calendar, MapPin, CheckCircle2, Edit3 } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative border-t border-zinc-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Roles</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Technical Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Hands-on technical leadership in competitive hackathons and academic engineering initiatives.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6 max-w-4xl">
          {EXPERIENCE_DATA.map((exp) => (
            <div
              key={exp.id}
              className={`glass-panel p-6 sm:p-7 rounded-2xl border transition-all duration-200 ${
                exp.isCustomizableNotice
                  ? 'border-dashed border-sky-500/40 bg-sky-500/5 dark:bg-sky-500/5'
                  : 'border-zinc-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 hover:border-sky-500/30'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 pb-4 border-b border-zinc-200/60 dark:border-slate-800/60">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100">
                      {exp.role}
                    </h3>
                    {exp.isCustomizableNotice && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-sky-500/20 text-sky-600 dark:text-sky-300 font-semibold">
                        <Edit3 className="w-3 h-3" /> Customizable
                      </span>
                    )}
                  </div>
                  <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 mt-0.5">
                    {exp.organization}
                  </p>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-2 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{exp.period}</span>
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                    <span>{exp.location}</span>
                  </span>
                </div>
              </div>

              {/* Responsibilities & Impact */}
              <div className="mt-4 space-y-2">
                <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
                  {exp.description.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mt-5 pt-3 border-t border-zinc-200/60 dark:border-slate-800/60 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded text-[11px] font-mono bg-zinc-100 dark:bg-slate-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-slate-700/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
