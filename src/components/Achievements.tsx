import React from 'react';
import { Trophy, Award, Medal, Zap, Users, Flag } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-20 relative border-t border-zinc-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Competitive Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Hackathons &amp; Achievements
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Podium finishes and competitive experience in rapid software architecture and high-velocity engineering.
          </p>
        </div>

        {/* Podium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Card 1: 1st Place NSRIT Hackathon */}
          <div className="relative glass-panel rounded-2xl p-7 border border-amber-500/30 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent dark:from-amber-500/10 shadow-lg hover:border-amber-500/50 transition-all duration-300">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-500 shrink-0">
                <Trophy className="w-6 h-6" />
              </div>
              <div className="flex flex-col items-end">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-slate-950 uppercase tracking-wider shadow-xs">
                  🏆 Winner • 1st Place
                </span>
                <span className="text-[11px] font-mono text-zinc-400 mt-1">Student Innovation Category</span>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
              NSRIT Hackathon Champion
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-amber-600 dark:text-amber-400 mb-3 flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              <span>Team AspireX • NSRIT</span>
            </p>

            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
              Awarded 1st Place in the Student Innovation Category after constructing and demonstrating an end-to-end working software prototype under competitive hackathon conditions.
            </p>

            <div className="p-3 rounded-lg bg-zinc-100/70 dark:bg-slate-900/60 border border-zinc-200/60 dark:border-slate-800/80 text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-500 shrink-0" />
              <span>Key Focus: Rapid Prototyping, API Integration &amp; Technical Pitching</span>
            </div>
          </div>

          {/* Card 2: Runner-up AU Hackathon */}
          <div className="relative glass-panel rounded-2xl p-7 border border-sky-500/30 bg-gradient-to-br from-sky-500/5 via-transparent to-transparent dark:from-sky-500/10 shadow-lg hover:border-sky-500/50 transition-all duration-300">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-sky-500/20 border border-sky-500/30 flex items-center justify-center text-sky-400 shrink-0">
                <Medal className="w-6 h-6" />
              </div>
              <div className="flex flex-col items-end">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-700 dark:text-sky-300 border border-sky-500/30 uppercase tracking-wider">
                  🥈 Runner-Up • 2nd Place
                </span>
                <span className="text-[11px] font-mono text-zinc-400 mt-1">Inter-Collegiate Track</span>
              </div>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
              Andhra University Hackathon Runner-up
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-sky-600 dark:text-sky-400 mb-3 flex items-center gap-1.5">
              <Flag className="w-4 h-4" />
              <span>Andhra University (AU)</span>
            </p>

            <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed mb-4">
              Recognized as Runner-up for engineering a resilient software solution, architecting database persistence and responsive UI interactions within a high-pressure 24-hour sprint.
            </p>

            <div className="p-3 rounded-lg bg-zinc-100/70 dark:bg-slate-900/60 border border-zinc-200/60 dark:border-slate-800/80 text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
              <Zap className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Key Focus: Speed of Execution, Full-Stack Architecture &amp; Delivery</span>
            </div>
          </div>
        </div>

        {/* Participation and Finalist Hackathons Bar */}
        <div className="p-6 rounded-2xl glass-panel border border-zinc-200/80 dark:border-slate-800/80">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-3 border-b border-zinc-200/60 dark:border-slate-800/60">
            <div>
              <h4 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                <Award className="w-4 h-4 text-sky-500" />
                <span>Active Hackathon Participation &amp; Finalist Rounds</span>
              </h4>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                Consistently competing across regional engineering institutions to build practical solutions.
              </p>
            </div>
            <span className="text-xs font-mono text-sky-600 dark:text-sky-400 font-semibold">
              3+ Additional Competitions
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {[
              {
                name: 'Centurion University Hackathon',
                role: 'Team Prototyper',
                badge: 'Finalist',
              },
              {
                name: 'AITAM Hackathon',
                role: 'Full-Stack Developer',
                badge: 'Finalist',
              },
              {
                name: 'GMRIT Hackathon',
                role: 'Solution Architect',
                badge: 'Active Participant',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-xl bg-zinc-100/60 dark:bg-slate-950/60 border border-zinc-200/60 dark:border-slate-800/80 flex items-center justify-between"
              >
                <div>
                  <h5 className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
                    {item.name}
                  </h5>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
                    {item.role}
                  </p>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-zinc-200 dark:bg-slate-800 text-zinc-700 dark:text-zinc-300">
                  {item.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
