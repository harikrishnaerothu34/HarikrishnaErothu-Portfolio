import { ScrollReveal } from './ScrollReveal';

export const About = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 border-b border-[#E5E1D8]" id="about">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Narrative / Profile Overview */}
        <div className="lg:col-span-5">
          <ScrollReveal delay={50} className="space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e8f0ec] text-[#245B4A] text-xs font-semibold">
              ABOUT &amp; PHILOSOPHY
            </div>
            <h2 className="text-3xl font-bold text-[#252724] tracking-tight">
              Practical Engineering &amp; Problem Solving
            </h2>
            <p className="text-sm text-[#68645C] leading-relaxed">
              I specialize in architecting responsive web applications with decoupled services and integrating generative AI tools directly into end-user workflows. My approach bridges clean data pipelines, modular APIs, and intuitive UI design.
            </p>
            <p className="text-sm text-[#68645C] leading-relaxed">
              Whether working on real-time telemetry systems, oceanographic ML models, or insurance document automation, I emphasize testable implementations, clear documentation, and practical value.
            </p>

            <div className="p-4 rounded-xl bg-white border border-[#E5E1D8] shadow-subtle flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#faeeea] text-[#C66B4E] flex items-center justify-center font-bold">
                <span className="material-symbols-outlined text-xl">handshake</span>
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#252724] uppercase tracking-wide">
                  Collaborative Mindset
                </h4>
                <p className="text-xs text-[#68645C]">
                  Active hackathon contributor and technical project coordinator.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: 3 Core Pillars */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <ScrollReveal delay={100}>
            <div className="h-full bg-white border border-[#E5E1D8] rounded-2xl p-5 shadow-subtle hover:border-[#245B4A]/50 transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-[#e8f0ec] text-[#245B4A] flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-2xl">web</span>
              </div>
              <h3 className="text-base font-bold text-[#252724] mb-1">
                Full-Stack Web Development
              </h3>
              <p className="text-xs text-[#68645C] leading-relaxed">
                Responsive modern applications, modular component structures, and production-ready RESTful APIs.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="h-full bg-white border border-[#E5E1D8] rounded-2xl p-5 shadow-subtle hover:border-[#245B4A]/50 transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-[#faeeea] text-[#C66B4E] flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-2xl">psychology</span>
              </div>
              <h3 className="text-base font-bold text-[#252724] mb-1">
                Applied AI &amp; LLMs
              </h3>
              <p className="text-xs text-[#68645C] leading-relaxed">
                Generative AI workflows, document intelligence pipelines, and real-world machine learning solutions.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300} className="sm:col-span-2">
            <div className="bg-white border border-[#E5E1D8] rounded-2xl p-5 shadow-subtle hover:border-[#245B4A]/50 transition-all duration-200">
              <div className="w-10 h-10 rounded-xl bg-[#faeeea] text-[#C66B4E] flex items-center justify-center mb-3">
                <span className="material-symbols-outlined text-2xl">code_blocks</span>
              </div>
              <h3 className="text-base font-bold text-[#252724] mb-1">
                Data Structures &amp; Algorithms
              </h3>
              <p className="text-xs text-[#68645C] leading-relaxed">
                Structured problem solving with 160+ LeetCode problems solved across arrays, strings, two pointers, and search.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
