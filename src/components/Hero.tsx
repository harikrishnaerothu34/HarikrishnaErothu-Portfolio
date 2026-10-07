import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  ArrowDown,
  Download,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeTab, setActiveTab] = useState<'stack' | 'terminal'>('stack');

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & Primary CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6 text-left">
            {/* Recruiter Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 dark:bg-sky-500/10 text-sky-700 dark:text-sky-300 text-xs font-medium backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Open to Software Engineering & Full-Stack Opportunities (2026–2027)</span>
            </div>

            {/* Candidate Name */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 font-sans">
                {PERSONAL_INFO.name}
              </h1>

              {/* Roles / Specialization */}
              <div className="flex flex-wrap items-center gap-2 text-base sm:text-lg font-semibold text-sky-600 dark:text-sky-400">
                <span>Full-Stack Developer</span>
                <span className="text-zinc-400 dark:text-zinc-600">|</span>
                <span>AI &amp; LLM Enthusiast</span>
                <span className="text-zinc-400 dark:text-zinc-600">|</span>
                <span>Cloud Computing</span>
              </div>
            </div>

            {/* Professional Summary */}
            <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-2xl font-normal">
              {PERSONAL_INFO.bioShort}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2 w-full sm:w-auto">
              {/* View Projects */}
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-all duration-200 shadow-sm hover:shadow-sky-500/20 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              {/* Download / View Resume */}
              <button
                onClick={onOpenResume}
                type="button"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold border border-zinc-300 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 hover:bg-zinc-100 dark:hover:bg-slate-800 text-zinc-800 dark:text-zinc-200 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Download className="w-4 h-4 text-sky-500" />
                <span>Download Resume</span>
              </button>

              {/* GitHub Button */}
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border border-zinc-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 hover:border-zinc-400 dark:hover:border-slate-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-all"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              {/* LinkedIn Button */}
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium border border-zinc-200 dark:border-slate-800 bg-white/60 dark:bg-slate-900/60 hover:border-zinc-400 dark:hover:border-slate-700 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-all"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4 text-[#0a66c2]" />
                <span>LinkedIn</span>
              </a>
            </div>

            {/* Quick Proof-of-work Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4 w-full border-t border-zinc-200/80 dark:border-slate-800/80">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 font-mono">
                  4+
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">Core Projects</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 font-mono">
                  🏆 1st
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">Hackathon Winner</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 font-mono">
                  160+
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">LeetCode Solved</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 font-mono">
                  AWS
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">Cloud Certified</div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Developer Telemetry Card */}
          <div className="lg:col-span-5 w-full">
            <div className="glass-panel rounded-2xl overflow-hidden shadow-2xl border border-zinc-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-950/80">
              {/* Window Header */}
              <div className="px-4 py-3 bg-zinc-100/90 dark:bg-slate-900/90 border-b border-zinc-200 dark:border-slate-800/80 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                  <span className="ml-2 font-mono text-xs text-zinc-500 dark:text-zinc-400">
                    engineer@harikrishna:~
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveTab('stack')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'stack'
                        ? 'bg-sky-500/20 text-sky-600 dark:text-sky-400 font-semibold'
                        : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
                    }`}
                  >
                    stack.json
                  </button>
                  <button
                    onClick={() => setActiveTab('terminal')}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono transition-colors ${
                      activeTab === 'terminal'
                        ? 'bg-sky-500/20 text-sky-600 dark:text-sky-400 font-semibold'
                        : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
                    }`}
                  >
                    terminal
                  </button>
                </div>
              </div>

              {/* Window Body */}
              <div className="p-5 font-mono text-xs text-zinc-700 dark:text-zinc-300 min-h-[310px] flex flex-col justify-between">
                {activeTab === 'stack' ? (
                  <div className="space-y-2 leading-relaxed">
                    <p className="text-zinc-400 dark:text-zinc-500">// Technical Competencies Profile</p>
                    <p className="text-zinc-800 dark:text-zinc-200 font-semibold">
                      <span className="text-sky-600 dark:text-sky-400">const</span> developer = &#123;
                    </p>
                    <div className="pl-4 space-y-1.5">
                      <p>
                        <span className="text-purple-600 dark:text-purple-400">name</span>:{' '}
                        <span className="text-emerald-600 dark:text-emerald-300">"{PERSONAL_INFO.name}"</span>,
                      </p>
                      <p>
                        <span className="text-purple-600 dark:text-purple-400">education</span>:{' '}
                        <span className="text-emerald-600 dark:text-emerald-300">"B.Tech IT @ GMRIT (2023-2027)"</span>,
                      </p>
                      <p>
                        <span className="text-purple-600 dark:text-purple-400">coreSpecialties</span>: [
                        <span className="text-amber-600 dark:text-amber-300">"Full-Stack Web"</span>,{' '}
                        <span className="text-amber-600 dark:text-amber-300">"AI/LLM Solutions"</span>,{' '}
                        <span className="text-amber-600 dark:text-amber-300">"Cloud"</span>],
                      </p>
                      <p>
                        <span className="text-purple-600 dark:text-purple-400">activeStack</span>: &#123;
                      </p>
                      <div className="pl-4 text-zinc-600 dark:text-zinc-400 space-y-1">
                        <p>frontend: <span className="text-sky-600 dark:text-sky-300">["React", "JavaScript", "HTML/CSS"]</span>,</p>
                        <p>backend: <span className="text-sky-600 dark:text-sky-300">["Node.js", "Express", "Flask", "Django"]</span>,</p>
                        <p>data_ai: <span className="text-sky-600 dark:text-sky-300">["Python", "Scikit-learn", "LLMs", "Postgres"]</span>,</p>
                        <p>cloud_ops: <span className="text-sky-600 dark:text-sky-300">["AWS", "Git", "REST APIs"]</span>,</p>
                      </div>
                      <p>&#125;,</p>
                      <p>
                        <span className="text-purple-600 dark:text-purple-400">hackathonPodium</span>:{' '}
                        <span className="text-emerald-600 dark:text-emerald-400 font-bold">"1st Place NSRIT & AU Runner-up"</span>,
                      </p>
                    </div>
                    <p className="text-zinc-800 dark:text-zinc-200 font-semibold">&#125;;</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <span className="text-emerald-500">➜</span>
                      <span className="text-sky-400">~/harikrishna</span>
                      <span>git status</span>
                    </div>
                    <p className="text-zinc-400">On branch main. Ready for production deployment.</p>

                    <div className="flex items-center gap-2 text-zinc-500 pt-2">
                      <span className="text-emerald-500">➜</span>
                      <span className="text-sky-400">~/harikrishna</span>
                      <span>curl -s /api/status</span>
                    </div>
                    <div className="p-2.5 rounded bg-zinc-900/90 text-emerald-400 text-[11px] leading-relaxed border border-emerald-500/20">
                      &#123; "status": "200 OK", "role": "Software Engineer", "relocation": "Flexible", "learningVelocity": "High" &#125;
                    </div>

                    <div className="flex items-center gap-2 text-zinc-500 pt-2">
                      <span className="text-emerald-500">➜</span>
                      <span className="text-sky-400">~/harikrishna</span>
                      <span className="animate-pulse">_</span>
                    </div>
                  </div>
                )}

                {/* Footer status bar in widget */}
                <div className="pt-3 border-t border-zinc-200 dark:border-slate-800/80 flex items-center justify-between text-[11px] text-zinc-500">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Clean Architecture Verified</span>
                  </div>
                  <div className="flex items-center gap-1 text-sky-500 dark:text-sky-400">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Recruiter Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
