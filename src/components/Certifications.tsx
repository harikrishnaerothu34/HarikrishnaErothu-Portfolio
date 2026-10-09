import { CERTIFICATIONS_DATA, PERSONAL_INFO } from '../data/portfolioData';

export const Certifications = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 border-b border-[#E5E1D8]" id="certifications">
      <div className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e8f0ec] text-[#245B4A] text-xs font-semibold mb-2">
          CREDENTIALS &amp; ALGORITHMS
        </div>
        <h2 className="text-3xl font-bold text-[#252724] tracking-tight">
          Certifications &amp; Coding Profile
        </h2>
        <p className="text-base text-[#68645C] mt-2">
          Verified academic and professional credentials alongside active problem solving.
        </p>
      </div>

      {/* 4 Distinct Certification Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {CERTIFICATIONS_DATA.map((cert) => {
          const isTerracotta = cert.badgeType === 'terracotta';
          const isForest = cert.badgeType === 'forest';

          return (
            <div
              key={cert.title}
              className="p-5 rounded-2xl bg-white border border-[#E5E1D8] shadow-subtle hover:border-[#245B4A]/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center mb-3 ${
                    isTerracotta
                      ? 'bg-[#faeeea] text-[#C66B4E]'
                      : isForest
                      ? 'bg-[#e8f0ec] text-[#245B4A]'
                      : 'bg-[#FAF9F6] text-[#252724] border border-[#E5E1D8]'
                  }`}
                >
                  <span className="material-symbols-outlined text-xl">{cert.icon}</span>
                </div>
                <h3 className="text-sm font-bold text-[#252724]">{cert.title}</h3>
                <p className="text-xs text-[#68645C] mt-1">{cert.issuer}</p>
              </div>
              <span
                className={`mt-4 text-[11px] font-mono font-medium ${
                  isTerracotta
                    ? 'text-[#C66B4E]'
                    : isForest
                    ? 'text-[#245B4A]'
                    : 'text-[#68645C]'
                }`}
              >
                {cert.badge}
              </span>
            </div>
          );
        })}
      </div>

      {/* LeetCode Practice Banner Card */}
      <div className="bg-white border border-[#E5E1D8] rounded-2xl p-6 shadow-subtle hover:shadow-card transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#245B4A] text-white flex items-center justify-center shadow-subtle shrink-0">
            <span className="material-symbols-outlined text-2xl">terminal</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold text-[#252724]">LeetCode Practice</h3>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#e8f0ec] text-[#245B4A] border border-[#245B4A]/20">
                160+ Solved
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#68645C] mt-0.5">
              Focus on Data Structures &amp; Algorithms: Arrays, Strings, Two Pointers, and Binary Search.
            </p>
          </div>
        </div>

        <div>
          <a
            className="inline-flex items-center gap-1.5 bg-[#245B4A] hover:bg-[#1b473a] text-white px-5 py-2.5 rounded-xl text-xs font-semibold transition-colors shadow-subtle whitespace-nowrap"
            href={PERSONAL_INFO.leetcodeUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            <span>View LeetCode Profile</span>
            <span className="material-symbols-outlined text-sm">open_in_new</span>
          </a>
        </div>
      </div>
    </section>
  );
};
