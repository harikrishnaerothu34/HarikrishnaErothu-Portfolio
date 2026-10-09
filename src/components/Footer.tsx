import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-[#E5E1D8]">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#68645C]">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#252724]">{PERSONAL_INFO.name}</span>
          <span>•</span>
          <span>Developer Portfolio</span>
        </div>
        <div className="flex items-center gap-6">
          <a
            className="hover:text-[#245B4A] transition-colors"
            href={PERSONAL_INFO.githubUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="hover:text-[#245B4A] transition-colors"
            href={PERSONAL_INFO.linkedinUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            className="hover:text-[#245B4A] transition-colors"
            href={PERSONAL_INFO.leetcodeUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            LeetCode
          </a>
          <a
            className="hover:text-[#245B4A] transition-colors"
            href={`mailto:${PERSONAL_INFO.email}`}
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
