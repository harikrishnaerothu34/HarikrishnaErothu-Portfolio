import React from 'react';
import { CERTIFICATIONS_DATA } from '../data/portfolioData';
import { Award, CheckCircle, ShieldCheck, Cloud, Cpu, Brain } from 'lucide-react';

export const Certifications: React.FC = () => {
  const getCertIcon = (cat: string) => {
    if (cat === 'Cloud') return <Cloud className="w-5 h-5 text-sky-400" />;
    if (cat.includes('AI')) return <Brain className="w-5 h-5 text-purple-400" />;
    return <Cpu className="w-5 h-5 text-emerald-400" />;
  };

  return (
    <section id="certifications" className="py-20 relative border-t border-zinc-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Professional Certifications
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Formal technical certifications validating cloud infrastructure, machine learning methodologies, and core CS fundamentals.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS_DATA.map((cert) => (
            <div
              key={cert.id}
              className="glass-panel p-6 sm:p-7 rounded-2xl border border-zinc-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 hover:border-sky-500/40 hover:-translate-y-0.5 transition-all duration-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="w-11 h-11 rounded-xl bg-zinc-100 dark:bg-slate-800 border border-zinc-200 dark:border-slate-700/60 flex items-center justify-center shrink-0">
                    {getCertIcon(cert.category)}
                  </div>
                  <span className="px-2.5 py-1 rounded text-[11px] font-mono font-medium bg-zinc-100 dark:bg-slate-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-slate-700/60">
                    {cert.category}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  {cert.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 mb-4 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Issuing Body: {cert.issuer}</span>
                </p>

                {/* Verified Competencies */}
                <div className="space-y-2 pt-2 border-t border-zinc-200/60 dark:border-slate-800/60">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    Competencies Validated:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skillsVerified.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs bg-zinc-100 dark:bg-slate-800/70 text-zinc-700 dark:text-zinc-300 border border-zinc-200/60 dark:border-slate-700/50"
                      >
                        <CheckCircle className="w-3 h-3 text-sky-500" />
                        <span>{skill}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-zinc-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] font-mono text-zinc-400">
                <span>Verified Curriculum</span>
                <span className="text-emerald-500 flex items-center gap-1 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5" /> Certified
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
