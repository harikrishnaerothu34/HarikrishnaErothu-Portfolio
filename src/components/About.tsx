import React from 'react';
import { ABOUT_DETAILS, PERSONAL_INFO } from '../data/portfolioData';
import {
  Code,
  BrainCircuit,
  Cloud,
  Trophy,
  GraduationCap,
  Sparkles,
  MapPin,
} from 'lucide-react';

export const About: React.FC = () => {
  const getIcon = (title: string) => {
    if (title.includes('Full-Stack')) return <Code className="w-5 h-5 text-sky-500" />;
    if (title.includes('AI & LLM')) return <BrainCircuit className="w-5 h-5 text-indigo-400" />;
    if (title.includes('Cloud')) return <Cloud className="w-5 h-5 text-cyan-400" />;
    return <Trophy className="w-5 h-5 text-amber-400" />;
  };

  return (
    <section id="about" className="py-20 relative border-t border-zinc-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            {ABOUT_DETAILS.headline}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl">
            A developer profile bridging core software engineering with cutting-edge AI technologies.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Narrative & Quick Credentials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-7 rounded-2xl bg-white/60 dark:bg-slate-900/40 border border-zinc-200/80 dark:border-slate-800/80 space-y-4">
              {ABOUT_DETAILS.paragraphs.map((p, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-normal"
                >
                  {p}
                </p>
              ))}

              <div className="pt-4 border-t border-zinc-200/60 dark:border-slate-800/60 flex flex-col gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                <div className="flex items-center gap-2.5">
                  <GraduationCap className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>
                    B.Tech in Information Technology •{' '}
                    <strong className="text-zinc-800 dark:text-zinc-200">GMRIT (2023–2027)</strong>
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-sky-500 shrink-0" />
                  <span>{PERSONAL_INFO.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Key Focus Areas */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {ABOUT_DETAILS.highlights.map((item, idx) => (
              <div
                key={idx}
                className="group p-5 rounded-xl border border-zinc-200/80 dark:border-slate-800/80 bg-white/40 dark:bg-slate-900/30 hover:bg-white/80 dark:hover:bg-slate-900/80 transition-all duration-200 hover:border-sky-500/40 hover:-translate-y-0.5 shadow-xs"
              >
                <div className="w-10 h-10 rounded-lg bg-zinc-100 dark:bg-slate-800 border border-zinc-200 dark:border-slate-700/60 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {getIcon(item.title)}
                </div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-sky-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
