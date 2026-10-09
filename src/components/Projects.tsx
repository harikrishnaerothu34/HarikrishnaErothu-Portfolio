import { PROJECTS_DATA } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Projects = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-6 border-b border-[#E5E1D8]" id="projects">
      <ScrollReveal className="max-w-3xl mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e8f0ec] text-[#245B4A] text-xs font-semibold mb-2">
          PRODUCTION &amp; CAPSTONE SYSTEMS
        </div>
        <h2 className="text-3xl font-bold text-[#252724] tracking-tight">Featured Projects</h2>
        <p className="text-base text-[#68645C] mt-2">
          Practical web software, machine learning solutions, and AI-oriented platforms developed with modern engineering stacks.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {PROJECTS_DATA.map((project, idx) => {
          if (project.isFullWidth) {
            // Project 5: ClaimFlow AI (Full Width Card)
            return (
              <ScrollReveal
                key={project.id}
                delay={100}
                className="lg:col-span-2"
              >
                <article
                  className="bg-white border border-[#E5E1D8] rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:border-[#245B4A]/40 transition-all duration-300 flex flex-col group"
                >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  <div className="lg:col-span-5 relative aspect-video lg:aspect-auto border-b lg:border-b-0 lg:border-r border-[#E5E1D8] bg-[#FAF9F6] overflow-hidden">
                    <img
                      alt={`${project.name} Interface Mockup`}
                      className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                      src={project.image}
                      loading="lazy"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="inline-flex items-center gap-1 bg-[#245B4A] text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm">
                        {project.badge}
                      </span>
                    </div>
                  </div>

                  <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-bold text-[#252724] group-hover:text-[#245B4A] transition-colors">
                            {project.name}
                          </h3>
                          <p className="text-xs sm:text-sm font-semibold text-[#245B4A] mt-0.5">
                            {project.subtitle}
                          </p>
                        </div>
                        <span className="text-xs font-mono font-bold text-[#252724] bg-[#FAF9F6] border border-[#E5E1D8] px-2 py-0.5 rounded-md">
                          {project.number}
                        </span>
                      </div>

                      <p className="text-sm text-[#68645C] leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.map((tag) => (
                          <span
                            key={tag.name}
                            className={`px-2.5 py-0.5 rounded-md text-xs font-medium ${
                              tag.highlight
                                ? 'bg-[#e8f0ec] border border-[#245B4A]/20 text-[#245B4A] font-semibold'
                                : 'bg-[#FAF9F6] border border-[#E5E1D8] text-[#252724]'
                            }`}
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 pt-6 mt-6 border-t border-[#E5E1D8]">
                      {project.githubUrl && (
                        <a
                          className="inline-flex items-center gap-1.5 bg-white border border-[#E5E1D8] hover:bg-[#FAF9F6] hover:border-[#245B4A]/40 text-[#252724] px-4 py-2 rounded-xl text-xs font-medium transition-colors shadow-subtle"
                          href={project.githubUrl}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <span className="material-symbols-outlined text-sm">code</span>
                          <span>GitHub Repository</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            </ScrollReveal>
            );
          }

          // Projects 1-4 standard card layout
          const isTerracottaBadge = project.badgeColor === 'terracotta';
          const isCharcoalBadge = project.badgeColor === 'charcoal';

          return (
            <ScrollReveal key={project.id} delay={(idx % 2) * 120}>
              <article
                className="h-full bg-white border border-[#E5E1D8] rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover hover:border-[#245B4A]/40 transition-all duration-300 flex flex-col group"
              >
                <div className="relative w-full aspect-video border-b border-[#E5E1D8] bg-[#FAF9F6] overflow-hidden">
                  <img
                    alt={`${project.name} Interface Mockup`}
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-300"
                    src={project.image}
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span
                      className={`inline-flex items-center gap-1 text-white text-xs font-semibold px-2.5 py-1 rounded-md shadow-sm ${
                        isTerracottaBadge
                          ? 'bg-[#C66B4E]'
                          : isCharcoalBadge
                          ? 'bg-[#252724]'
                          : 'bg-[#245B4A]'
                      }`}
                    >
                      {project.badge}
                    </span>
                  </div>
                  <span className="absolute top-3 right-3 text-xs font-mono font-bold text-[#252724] bg-white/95 px-2 py-0.5 rounded-md border border-[#E5E1D8]">
                    {project.number}
                  </span>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <div>
                      {project.metaLabel && (
                        <div className="flex items-center gap-2 flex-wrap mb-1">
                          <span className="text-[11px] font-mono font-semibold text-[#245B4A] bg-[#e8f0ec] px-2 py-0.5 rounded border border-[#245B4A]/20">
                            {project.metaLabel}
                          </span>
                          {project.statusLabel && (
                            <span
                              className={`text-[11px] font-mono font-semibold px-2 py-0.5 rounded ${
                                project.statusType === 'ongoing'
                                  ? 'text-[#C66B4E] bg-[#faeeea] border border-[#C66B4E]/25'
                                  : 'text-[#68645C]'
                              }`}
                            >
                              {project.statusLabel}
                            </span>
                          )}
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-[#252724] group-hover:text-[#245B4A] transition-colors">
                        {project.name}
                      </h3>
                      <p className="text-xs font-semibold text-[#245B4A] mt-0.5">
                        {project.subtitle}
                      </p>
                    </div>

                    <p className="text-sm text-[#68645C] leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag.name}
                          className={`px-2.5 py-0.5 rounded-md text-xs font-medium ${
                            tag.highlight
                              ? 'bg-[#e8f0ec] border border-[#245B4A]/20 text-[#245B4A] font-semibold'
                              : 'bg-[#FAF9F6] border border-[#E5E1D8] text-[#252724]'
                          }`}
                        >
                          {tag.name}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-5 mt-4 border-t border-[#E5E1D8]">
                    {project.liveDemo && (
                      <a
                        className="inline-flex items-center gap-1.5 bg-[#245B4A] hover:bg-[#1b473a] text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors shadow-subtle"
                        href={project.liveDemo}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span>Live Demo</span>
                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                      </a>
                    )}

                    {project.paperUrl && (
                      <a
                        className="inline-flex items-center gap-1.5 bg-[#245B4A] hover:bg-[#1b473a] text-white px-4 py-2 rounded-xl text-xs font-semibold transition-colors shadow-subtle"
                        href={project.paperUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                        title="Read Published Research Paper in IJRPR"
                      >
                        <span className="material-symbols-outlined text-sm">description</span>
                        <span>📄 Read Published Paper</span>
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        className="inline-flex items-center gap-1.5 bg-white border border-[#E5E1D8] hover:bg-[#FAF9F6] hover:border-[#245B4A]/40 text-[#252724] px-4 py-2 rounded-xl text-xs font-medium transition-colors shadow-subtle"
                        href={project.githubUrl}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-sm">code</span>
                        <span>GitHub Repository</span>
                      </a>
                    )}
                  </div>
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </div>
    </section>
  );
};
