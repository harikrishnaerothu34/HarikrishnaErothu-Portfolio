import { EXPERIENCE_DATA } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Experience = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 border-b border-[#E5E1D8]" id="experience">
      <ScrollReveal className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e8f0ec] text-[#245B4A] text-xs font-semibold mb-2">
          ROLES &amp; RESPONSIBILITIES
        </div>
        <h2 className="text-3xl font-bold text-[#252724] tracking-tight">
          Leadership &amp; Project Experience
        </h2>
        <p className="text-base text-[#68645C] mt-2">
          Hands-on technical coordination and project leadership across capstone initiatives and collaborative systems.
        </p>
      </ScrollReveal>

      <div className="space-y-5">
        {EXPERIENCE_DATA.map((item, idx) => {
          const isOngoing = item.badgeType === 'ongoing';
          return (
            <ScrollReveal key={item.project} delay={idx * 150}>
              <div
                className="bg-white border border-[#E5E1D8] rounded-2xl p-6 shadow-subtle hover:border-[#245B4A]/40 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-3 border-b border-[#E5E1D8]">
                  <div>
                    <div className="flex items-center gap-2 flex-wrap mb-1">
                      <span
                        className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded border ${
                          isOngoing
                            ? 'text-[#C66B4E] bg-[#faeeea] border-[#C66B4E]/25'
                            : 'text-[#245B4A] bg-[#e8f0ec] border-[#245B4A]/20'
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#252724]">
                      {item.role} — {item.project}
                    </h3>
                    <p className="text-xs font-semibold text-[#245B4A]">{item.type}</p>
                  </div>
                  <span className="text-xs font-mono font-medium text-[#252724] bg-[#FAF9F6] border border-[#E5E1D8] px-3 py-1 rounded-md self-start md:self-auto">
                    {item.timeline}
                  </span>
                </div>
                <p className="mt-3 text-sm text-[#68645C] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};
