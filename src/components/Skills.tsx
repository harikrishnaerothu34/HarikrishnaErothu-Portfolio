import React, { useState } from 'react';
import { SKILLS_DATA } from '../data/portfolioData';
import {
  Code2,
  Layout,
  Server,
  Database,
  Brain,
  Cloud,
  Wrench,
  CheckCircle,
  Sparkles,
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = [
    'All',
    'Programming',
    'Frontend',
    'Backend',
    'AI / ML / LLM',
    'Databases',
    'Cloud',
    'Tools',
  ];

  const categoryIcons: Record<string, React.ReactNode> = {
    Programming: <Code2 className="w-4 h-4 text-sky-400" />,
    Frontend: <Layout className="w-4 h-4 text-emerald-400" />,
    Backend: <Server className="w-4 h-4 text-indigo-400" />,
    Databases: <Database className="w-4 h-4 text-amber-400" />,
    'AI / ML / LLM': <Brain className="w-4 h-4 text-purple-400" />,
    Cloud: <Cloud className="w-4 h-4 text-cyan-400" />,
    Tools: <Wrench className="w-4 h-4 text-rose-400" />,
  };

  const filteredSkills =
    selectedCategory === 'All'
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === selectedCategory);

  // Grouped skills for the organized category view
  const categoryGroups = [
    { title: 'Programming', skills: SKILLS_DATA.filter((s) => s.category === 'Programming') },
    { title: 'Frontend', skills: SKILLS_DATA.filter((s) => s.category === 'Frontend') },
    { title: 'Backend', skills: SKILLS_DATA.filter((s) => s.category === 'Backend') },
    { title: 'AI / ML / LLM', skills: SKILLS_DATA.filter((s) => s.category === 'AI / ML / LLM') },
    { title: 'Databases', skills: SKILLS_DATA.filter((s) => s.category === 'Databases') },
    { title: 'Cloud', skills: SKILLS_DATA.filter((s) => s.category === 'Cloud') },
    { title: 'Tools', skills: SKILLS_DATA.filter((s) => s.category === 'Tools') },
  ];

  return (
    <section id="skills" className="py-20 relative border-t border-zinc-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Proficiencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Skills &amp; Technologies
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Practical competencies utilized across web development, machine learning models, and cloud infrastructure.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-sky-500 text-slate-950 font-semibold shadow-xs'
                  : 'bg-zinc-100 dark:bg-slate-900/80 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-slate-800 hover:border-zinc-300 dark:hover:border-slate-700 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filtered Technology Badges or Grouped Cards */}
        {selectedCategory === 'All' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryGroups.map((group) => (
              <div
                key={group.title}
                className="glass-panel p-5 rounded-xl border border-zinc-200/80 dark:border-slate-800/80 bg-white/50 dark:bg-slate-900/40 hover:border-sky-500/30 transition-all duration-200"
              >
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-zinc-200/60 dark:border-slate-800/60">
                  <div className="p-1.5 rounded-md bg-zinc-100 dark:bg-slate-800">
                    {categoryIcons[group.title] || <Code2 className="w-4 h-4 text-sky-400" />}
                  </div>
                  <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    {group.title}
                  </h3>
                  <span className="ml-auto text-[11px] font-mono text-zinc-400">
                    {group.skills.length} techs
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-zinc-100 dark:bg-slate-800/80 border border-zinc-200/60 dark:border-slate-700/60 text-zinc-800 dark:text-zinc-200 hover:border-sky-500/40 hover:bg-white dark:hover:bg-slate-800 transition-all shadow-2xs"
                    >
                      <CheckCircle className="w-3 h-3 text-sky-500 shrink-0" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="glass-panel p-4 rounded-xl border border-zinc-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 flex flex-col items-center justify-center text-center gap-2 hover:border-sky-500/40 hover:scale-105 transition-all shadow-xs"
              >
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-slate-800">
                  {categoryIcons[skill.category] || <Code2 className="w-5 h-5 text-sky-400" />}
                </div>
                <span className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">
                  {skill.name}
                </span>
                <span className="text-[10px] font-mono text-zinc-400">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Clean Recruiter Note */}
        <div className="mt-10 p-4 rounded-xl border border-dashed border-zinc-300 dark:border-slate-800 bg-zinc-50/50 dark:bg-slate-900/20 text-xs text-zinc-500 dark:text-zinc-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-sky-500"></span>
            <span>Focus on production tooling, modular design, and robust API contracts.</span>
          </div>
          <span className="font-mono text-[11px] text-zinc-400">
            Skills represented as verified capabilities, not arbitrary percentages.
          </span>
        </div>
      </div>
    </section>
  );
};
