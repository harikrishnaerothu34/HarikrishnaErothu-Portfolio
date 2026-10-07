import React, { useState } from 'react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectCard } from './ProjectCard';
import { Sparkles, Filter } from 'lucide-react';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'AI / LLM' | 'Full-Stack' | 'Machine Learning'>('All');

  const filteredProjects =
    filter === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-20 relative border-t border-zinc-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Production &amp; Research Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
              Featured Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl">
              Real-world systems, machine learning models, and full-stack platforms engineered with high standards.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1">
            <span className="text-xs font-mono text-zinc-400 hidden sm:inline-flex items-center gap-1 mr-1">
              <Filter className="w-3 h-3" /> Filter:
            </span>
            {(['All', 'AI / LLM', 'Full-Stack', 'Machine Learning'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  filter === cat
                    ? 'bg-sky-500 text-slate-950 font-semibold shadow-xs'
                    : 'bg-zinc-100 dark:bg-slate-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-slate-800 hover:text-zinc-900 dark:hover:text-zinc-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Recruiter Callout */}
        <div className="mt-14 p-6 rounded-2xl glass-panel border border-zinc-200/80 dark:border-slate-800/80 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100">
              Looking for architecture documentation or code walkthroughs?
            </h4>
            <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-0.5">
              I am glad to discuss system design, API contracts, model parameters, and trade-offs.
            </p>
          </div>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg text-xs font-semibold bg-zinc-900 dark:bg-slate-100 text-white dark:text-slate-950 hover:bg-zinc-800 dark:hover:bg-white transition-all whitespace-nowrap shrink-0"
          >
            Schedule a Technical Chat
          </a>
        </div>
      </div>
    </section>
  );
};
