import { SKILLS_GROUPS } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Skills = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 border-b border-[#E5E1D8]" id="skills">
      <ScrollReveal className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e8f0ec] text-[#245B4A] text-xs font-semibold mb-2">
          CORE CAPABILITIES
        </div>
        <h2 className="text-3xl font-bold text-[#252724] tracking-tight">Skills &amp; Technologies</h2>
        <p className="text-base text-[#68645C] mt-2">
          Structured toolsets and technologies applied across academic coursework and development projects.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILLS_GROUPS.map((group, idx) => {
          const isAiGroup = group.category === 'AI / ML / LLM';
          return (
            <ScrollReveal key={group.category} delay={idx * 75}>
              <div className="h-full bg-white border border-[#E5E1D8] rounded-2xl p-6 shadow-subtle hover:shadow-card transition-all">
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#E5E1D8]">
                  <div className="flex items-center gap-2.5">
                    <span
                      className={`material-symbols-outlined text-xl ${
                        isAiGroup ? 'text-[#C66B4E]' : 'text-[#245B4A]'
                      }`}
                    >
                      {group.icon}
                    </span>
                    <h3 className="text-base font-bold text-[#252724]">{group.category}</h3>
                  </div>
                  <span className="text-xs text-[#9E998F] font-mono">{group.sublabel}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white border border-[#E5E1D8] rounded-lg text-xs font-medium text-[#252724] hover:border-[#245B4A] transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};
