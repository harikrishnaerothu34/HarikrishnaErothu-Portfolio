import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero = () => {
  return (
    <section className="pt-12 pb-20 md:py-24 border-b border-[#E5E1D8] bg-[#F7F5EF]" id="home">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Hero Left Column */}
        <div className="lg:col-span-7 flex flex-col items-start space-y-6">
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#252724] tracking-tight leading-tight">
              {PERSONAL_INFO.firstName} <span className="text-[#245B4A]">{PERSONAL_INFO.lastName}</span>
            </h1>
            <p className="text-lg sm:text-xl font-semibold text-[#252724]/85">
              Full-Stack Developer <span className="text-[#C66B4E] font-normal mx-1">|</span> AI &amp; LLM Enthusiast <span className="text-[#C66B4E] font-normal mx-1">|</span> Cloud Computing
            </p>
          </div>

          <p className="text-base sm:text-lg text-[#68645C] max-w-2xl leading-relaxed">
            {PERSONAL_INFO.bio}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            <a
              className="inline-flex items-center gap-2 bg-[#245B4A] hover:bg-[#1b473a] text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-sm transition-all duration-150 hover:-translate-y-0.5"
              href="#projects"
            >
              <span>View Projects</span>
              <span className="material-symbols-outlined text-base">arrow_downward</span>
            </a>

            <a
              className="inline-flex items-center gap-2 bg-white text-[#252724] border border-[#E5E1D8] hover:border-[#245B4A]/40 hover:bg-[#FAF9F6] px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 hover:-translate-y-0.5 shadow-subtle"
              download={PERSONAL_INFO.resumeDownloadName}
              href={PERSONAL_INFO.resumePdf}
            >
              <span className="material-symbols-outlined text-base text-[#68645C]">download</span>
              <span>Download Resume</span>
            </a>

            <a
              className="inline-flex items-center gap-2 bg-white text-[#252724] border border-[#E5E1D8] hover:border-[#245B4A]/40 hover:bg-[#FAF9F6] px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 shadow-subtle"
              href={PERSONAL_INFO.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              title="View Resume in new browser tab"
            >
              <span className="material-symbols-outlined text-base text-[#68645C]">visibility</span>
              <span>View Resume</span>
            </a>

            <a
              className="inline-flex items-center gap-2 bg-white text-[#252724] border border-[#E5E1D8] hover:border-[#245B4A]/40 hover:bg-[#FAF9F6] px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 shadow-subtle"
              href={PERSONAL_INFO.githubUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-base text-[#68645C]">code</span>
              <span>GitHub</span>
            </a>

            <a
              className="inline-flex items-center gap-2 bg-white text-[#252724] border border-[#E5E1D8] hover:border-[#245B4A]/40 hover:bg-[#FAF9F6] px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-150 shadow-subtle"
              href={PERSONAL_INFO.linkedinUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-base text-[#68645C]">share</span>
              <span>LinkedIn</span>
            </a>
          </div>

          {/* Highlight Badges */}
          <div className="flex flex-wrap items-center gap-3 pt-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#E5E1D8] rounded-lg text-xs font-medium text-[#252724] shadow-subtle">
              <span className="material-symbols-outlined text-sm text-[#245B4A]">school</span>
              GMRIT (2023–2027)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#E5E1D8] rounded-lg text-xs font-medium text-[#252724] shadow-subtle">
              <span className="material-symbols-outlined text-sm text-[#C66B4E]">emoji_events</span>
              Hackathon Winner (NSRIT 1st)
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white border border-[#E5E1D8] rounded-lg text-xs font-medium text-[#252724] shadow-subtle">
              <span className="material-symbols-outlined text-sm text-[#245B4A]">verified</span>
              AWS Certified &amp; LeetCode 160+
            </span>
          </div>
        </div>

        {/* Hero Right Column: Profile Card */}
        <div className="lg:col-span-5">
          <div className="bg-white border border-[#E5E1D8] rounded-2xl p-6 sm:p-8 shadow-card flex flex-col justify-between space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#E5E1D8]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#e8f0ec] text-[#245B4A] flex items-center justify-center font-bold text-base border border-[#245B4A]/20">
                  <span className="material-symbols-outlined text-xl">person</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#252724] tracking-tight">Candidate Profile</h3>
                  <p className="text-xs text-[#68645C] font-medium">B.Tech Information Technology</p>
                </div>
              </div>
            </div>

            <div className="space-y-3.5">
              <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E5E1D8]">
                <div className="text-[11px] font-bold text-[#9E998F] uppercase tracking-wider mb-1">Education</div>
                <div className="text-sm font-semibold text-[#252724]">{PERSONAL_INFO.education.institution}</div>
                <div className="text-xs text-[#68645C] font-mono mt-0.5">{PERSONAL_INFO.education.degree}</div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E5E1D8]">
                <div className="text-[11px] font-bold text-[#9E998F] uppercase tracking-wider mb-1">Core Focus</div>
                <div className="text-xs font-medium text-[#252724] leading-relaxed">
                  {PERSONAL_INFO.education.focus}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#E5E1D8]">
                <div className="text-[11px] font-bold text-[#9E998F] uppercase tracking-wider mb-1">Location</div>
                <div className="text-xs font-semibold text-[#252724]">{PERSONAL_INFO.location}</div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-[#68645C] border-t border-[#E5E1D8]">
              <span className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm text-[#9E998F]">location_on</span>
                {PERSONAL_INFO.location}
              </span>
              <a className="font-semibold text-[#245B4A] hover:text-[#1b473a] flex items-center gap-0.5" href="#contact">
                Get in Touch <span className="material-symbols-outlined text-xs">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
