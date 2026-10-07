import React from 'react';
import { CODING_STATS } from '../data/portfolioData';
import {
  Code,
  ExternalLink,
  Flame,
  CheckCircle2,
  TrendingUp,
  Info,
} from 'lucide-react';

export const CodingProfiles: React.FC = () => {
  return (
    <section id="dsa" className="py-20 relative border-t border-zinc-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-3">
              <Code className="w-3.5 h-3.5" />
              <span>Algorithmic Rigor</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Data Structures &amp; Algorithms
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl">
              Consistent competitive programming and algorithmic problem-solving practice on LeetCode.
            </p>
          </div>

          <a
            href={CODING_STATS.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 transition-all duration-200 shadow-xs hover:scale-[1.02] active:scale-[0.98] shrink-0"
          >
            <span>Visit LeetCode Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: LeetCode Profile Summary Card */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-7 rounded-2xl border border-zinc-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-200/60 dark:border-slate-800/60">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center font-bold text-amber-500">
                  <Code className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                    LeetCode Profile
                  </h3>
                  <p className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    @{CODING_STATS.username}
                  </p>
                </div>
              </div>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                <Flame className="w-3.5 h-3.5" />
                <span>Active</span>
              </span>
            </div>

            {/* Total Solved Metric */}
            <div className="p-4 rounded-xl bg-zinc-100/70 dark:bg-slate-950/60 border border-zinc-200/60 dark:border-slate-800/80">
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                  Total Solved Problems
                </span>
                <span className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-100 font-mono">
                  {CODING_STATS.totalSolved}+
                </span>
              </div>
              <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                Core emphasis on Medium-difficulty interview questions and pattern recognition.
              </p>
            </div>

            {/* Difficulty Breakdown */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400">
                Difficulty Breakdown
              </h4>

              {/* Easy */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-emerald-600 dark:text-emerald-400">Easy</span>
                  <span className="font-mono text-zinc-600 dark:text-zinc-300">
                    {CODING_STATS.easySolved} Solved
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-200 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-emerald-500 rounded-full"
                    style={{
                      width: `${(CODING_STATS.easySolved / CODING_STATS.totalSolved) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Medium */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-amber-600 dark:text-amber-400">
                    Medium (Interview Core)
                  </span>
                  <span className="font-mono text-zinc-600 dark:text-zinc-300">
                    {CODING_STATS.mediumSolved} Solved
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-200 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full"
                    style={{
                      width: `${(CODING_STATS.mediumSolved / CODING_STATS.totalSolved) * 100}%`,
                    }}
                  />
                </div>
              </div>

              {/* Hard */}
              <div className="space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="font-medium text-rose-600 dark:text-rose-400">Hard</span>
                  <span className="font-mono text-zinc-600 dark:text-zinc-300">
                    {CODING_STATS.hardSolved} Solved
                  </span>
                </div>
                <div className="w-full h-2 rounded-full bg-zinc-200 dark:bg-slate-800 overflow-hidden">
                  <div
                    className="h-full bg-rose-500 rounded-full"
                    style={{
                      width: `${(CODING_STATS.hardSolved / CODING_STATS.totalSolved) * 100}%`,
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Disclaimer / Note */}
            <div className="p-3 rounded-lg bg-zinc-100/50 dark:bg-slate-800/40 text-[11px] text-zinc-500 dark:text-zinc-400 flex items-start gap-2 border border-zinc-200/60 dark:border-slate-700/50">
              <Info className="w-3.5 h-3.5 text-sky-500 shrink-0 mt-0.5" />
              <span>
                Baseline statistics provided from profile; metrics can be dynamically adjusted or cross-checked via the verified profile link.
              </span>
            </div>
          </div>

          {/* Right Column: Topics Mastered & Problem Solving Philosophy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-zinc-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40">
              <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                Core Algorithmic Topics &amp; Patterns
              </h3>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-6">
                Proficiency in common software engineering interview data structures and algorithmic paradigms.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {CODING_STATS.topTopics.map((topic, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-3.5 rounded-xl bg-zinc-100/70 dark:bg-slate-950/60 border border-zinc-200/60 dark:border-slate-800/80 flex items-center justify-between"
                  >
                    <div className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-sky-500" />
                      <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                        {topic.name}
                      </span>
                    </div>
                    <span className="text-xs font-mono font-medium text-zinc-500 dark:text-zinc-400 bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-zinc-200/60 dark:border-slate-800">
                      ~{topic.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Problem Solving Discipline Callout */}
            <div className="glass-panel p-6 rounded-2xl border border-zinc-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40">
              <h4 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 mb-2 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                <span>Approach to Complexity &amp; Optimization</span>
              </h4>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                Prioritizing time and space complexity trade-offs, clean modular helper abstractions, edge-case coverage, and clear variable naming for production-maintainable code.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
