import React from 'react';
import type { Project } from '../types';
import {
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Layers,
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <article className="group glass-panel rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-900/40 hover:border-sky-500/40 transition-all duration-300 flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1">
      {/* Project Image Banner */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-zinc-200/60 dark:border-slate-800/60">
        <img
          src={project.image}
          alt={`${project.name} interface preview`}
          loading="lazy"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

        {/* Badge Overlay */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {project.highlightBadge && (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-semibold bg-sky-500/90 text-slate-950 backdrop-blur-md shadow-xs">
              <Sparkles className="w-3 h-3" />
              <span>{project.highlightBadge}</span>
            </span>
          )}
          <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-slate-900/85 text-zinc-300 border border-slate-700/60 backdrop-blur-md">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-4">
          {/* Header */}
          <div>
            <div className="flex items-center justify-between gap-2">
              <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-sky-500 transition-colors">
                {project.name}
              </h3>
              <span className="text-xs font-mono text-zinc-400">0{index + 1}</span>
            </div>
            <p className="text-xs sm:text-sm font-medium text-sky-600 dark:text-sky-400 mt-1">
              {project.tagline}
            </p>
          </div>

          {/* Problem Statement Callout */}
          <div className="p-3.5 rounded-xl bg-zinc-100/80 dark:bg-slate-950/60 border border-zinc-200/60 dark:border-slate-800/80 text-xs text-zinc-600 dark:text-zinc-300">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <strong className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Problem Solved:{' '}
                </strong>
                <span>{project.problemStatement}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {project.description}
          </p>

          {/* Key Features List */}
          <div className="space-y-2 pt-1">
            <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-sky-500" />
              <span>Key Features</span>
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-600 dark:text-zinc-300">
              {project.keyFeatures.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer: Tech Stack & Action Buttons */}
        <div className="space-y-4 pt-4 border-t border-zinc-200/60 dark:border-slate-800/60">
          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded text-[11px] font-mono font-medium bg-zinc-100 dark:bg-slate-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-slate-700/50"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all duration-200 shadow-xs hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold border border-zinc-300 dark:border-slate-700 bg-zinc-100/80 dark:bg-slate-800/80 hover:bg-zinc-200 dark:hover:bg-slate-700 text-zinc-800 dark:text-zinc-200 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <GithubIcon className="w-3.5 h-3.5" />
                <span>Source Code</span>
              </a>
            )}

            {!project.liveDemoUrl && !project.githubUrl && (
              <span className="text-xs text-zinc-400 font-mono italic">
                Repository Available On Request
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};
