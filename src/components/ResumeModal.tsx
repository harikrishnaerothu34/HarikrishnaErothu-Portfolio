import React, { useEffect } from 'react';
import { PERSONAL_INFO, PROJECTS_DATA, CERTIFICATIONS_DATA, EDUCATION_DATA } from '../data/portfolioData';
import { X, Download, Printer, Mail, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-2xl bg-white dark:bg-slate-900 border border-zinc-200 dark:border-slate-800 shadow-2xl overflow-hidden">
        {/* Modal Top Actions Bar */}
        <div className="px-5 py-3.5 bg-zinc-100 dark:bg-slate-950 border-b border-zinc-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Resume Preview • Erothu Harikrishna
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-slate-800 transition-colors"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Erothu_Harikrishna_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-sky-500 hover:bg-sky-400 text-slate-950 transition-colors shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              type="button"
              className="p-1.5 rounded-lg text-zinc-500 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable ATS Resume Content */}
        <div className="overflow-y-auto p-6 sm:p-10 font-sans text-zinc-900 dark:text-zinc-100 bg-white dark:bg-slate-900 leading-relaxed text-xs sm:text-sm">
          {/* Header */}
          <div className="text-center pb-6 border-b border-zinc-300 dark:border-slate-700">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-semibold text-sky-600 dark:text-sky-400 mt-1">
              Full-Stack Web Developer | AI &amp; LLM Enthusiast | Cloud Computing
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mt-2.5 text-xs text-zinc-600 dark:text-zinc-400">
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-sky-500" /> {PERSONAL_INFO.location}
              </span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-1 hover:underline">
                <Mail className="w-3.5 h-3.5 text-sky-500" /> {PERSONAL_INFO.email}
              </a>
              <a href={PERSONAL_INFO.linkedinUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                <LinkedinIcon className="w-3.5 h-3.5 text-[#0a66c2]" /> LinkedIn
              </a>
              <a href={PERSONAL_INFO.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:underline">
                <GithubIcon className="w-3.5 h-3.5 text-zinc-700 dark:text-zinc-300" /> GitHub
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="py-5 border-b border-zinc-200 dark:border-slate-800">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
              Education
            </h2>
            <div className="flex justify-between items-baseline">
              <span className="font-bold">{EDUCATION_DATA.institution}</span>
              <span className="text-xs font-mono text-zinc-500">{EDUCATION_DATA.duration}</span>
            </div>
            <div className="text-xs text-zinc-600 dark:text-zinc-300">
              {EDUCATION_DATA.degree} in {EDUCATION_DATA.major} • Andhra Pradesh, India
            </div>
            <div className="text-xs text-zinc-500 mt-1">
              Relevant Coursework: DSA, DBMS, Cloud Computing, AI/ML, Operating Systems, Web Technologies.
            </div>
          </div>

          {/* Technical Skills */}
          <div className="py-5 border-b border-zinc-200 dark:border-slate-800 space-y-1.5 text-xs">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
              Technical Skills
            </h2>
            <p>
              <strong className="font-semibold">Languages:</strong> Python, JavaScript, Java, C, SQL
            </p>
            <p>
              <strong className="font-semibold">Frontend:</strong> HTML5, CSS3, JavaScript, Angular, Bootstrap
            </p>
            <p>
              <strong className="font-semibold">Backend:</strong> Node.js, Express.js, Flask, Django, REST APIs
            </p>
            <p>
              <strong className="font-semibold">AI / ML / Data:</strong> Machine Learning, Generative AI, LLM Applications, Scikit-learn, Pandas, NumPy
            </p>
            <p>
              <strong className="font-semibold">Databases &amp; Cloud:</strong> PostgreSQL, SQL, AWS (Cloud Foundations)
            </p>
            <p>
              <strong className="font-semibold">Developer Tools:</strong> Git, GitHub, VS Code, Postman
            </p>
          </div>

          {/* Featured Projects */}
          <div className="py-5 border-b border-zinc-200 dark:border-slate-800 space-y-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-1">
              Key Projects
            </h2>

            {PROJECTS_DATA.map((proj) => (
              <div key={proj.id} className="space-y-1">
                <div className="flex justify-between items-baseline">
                  <span className="font-bold text-sm">{proj.name}</span>
                  <span className="text-[11px] font-mono text-zinc-500">{proj.technologies.slice(0, 3).join(', ')}</span>
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-300">{proj.description}</p>
                <ul className="list-disc list-inside text-xs text-zinc-500 dark:text-zinc-400 pl-1">
                  {proj.keyFeatures.slice(0, 2).map((kf, i) => (
                    <li key={i}>{kf}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Achievements & Hackathons */}
          <div className="py-5 border-b border-zinc-200 dark:border-slate-800">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
              Hackathon Victories &amp; Achievements
            </h2>
            <ul className="space-y-1.5 text-xs text-zinc-700 dark:text-zinc-300">
              <li>
                🏆 <strong>1st Place Winner – Student Innovation Category</strong>: NSRIT Hackathon (Team AspireX)
              </li>
              <li>
                🥈 <strong>Runner-Up (2nd Place)</strong>: Andhra University Hackathon
              </li>
              <li>
                ⚡ <strong>Active Finalist &amp; Competitor</strong>: Centurion University, AITAM, and GMRIT Hackathons
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div className="pt-5">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
              Certifications
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {CERTIFICATIONS_DATA.map((c) => (
                <div key={c.id}>
                  • <strong>{c.title}</strong> — {c.issuer}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
