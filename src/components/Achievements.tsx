import { ACHIEVEMENTS_DATA } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Achievements = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 border-b border-[#E5E1D8]" id="achievements">
      <ScrollReveal className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e8f0ec] text-[#245B4A] text-xs font-semibold mb-2">
          COMPETITIONS &amp; RECOGNITION
        </div>
        <h2 className="text-3xl font-bold text-[#252724] tracking-tight">Achievements</h2>
        <p className="text-base text-[#68645C] mt-2">
          Recognized hackathon participation and solution showcases validating practical problem solving under constraints.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ACHIEVEMENTS_DATA.map((item, idx) => {
          const isTerracotta = item.badgeType === 'terracotta';
          const isForest = item.badgeType === 'forest';

          return (
            <ScrollReveal key={item.title} delay={idx * 120}>
              <div
                className={`h-full bg-white border border-[#E5E1D8] rounded-2xl p-6 shadow-subtle transition-all ${
                  isTerracotta
                    ? 'hover:border-[#C66B4E]/60'
                    : 'hover:border-[#245B4A]/50'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${
                    isTerracotta
                      ? 'bg-[#faeeea] text-[#C66B4E]'
                      : isForest
                      ? 'bg-[#e8f0ec] text-[#245B4A]'
                      : 'bg-[#FAF9F6] text-[#252724] border border-[#E5E1D8]'
                  }`}
                >
                  <span className="material-symbols-outlined text-2xl">{item.icon}</span>
                </div>

                <span
                  className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded border ${
                    isTerracotta
                      ? 'text-[#C66B4E] bg-[#faeeea] border-[#C66B4E]/25'
                      : isForest
                      ? 'text-[#245B4A] bg-[#e8f0ec] border-[#245B4A]/20'
                      : 'text-[#252724] bg-[#FAF9F6] border-[#E5E1D8]'
                  }`}
                >
                  {item.badge}
                </span>

                <h3 className="text-lg font-bold text-[#252724] mt-2">{item.title}</h3>
                <p className="text-sm text-[#68645C] mt-2 leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};
