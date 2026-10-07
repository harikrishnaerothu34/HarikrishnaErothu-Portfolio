import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center justify-center p-2 rounded-lg border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-500/50 ${
        theme === 'dark'
          ? 'bg-slate-900/80 border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 hover:bg-slate-800'
          : 'bg-white border-zinc-200 text-zinc-600 hover:text-zinc-900 hover:border-zinc-300 hover:bg-zinc-100 shadow-xs'
      } ${className}`}
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-200 hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-slate-700 transition-transform duration-200 hover:-rotate-12" />
      )}
    </button>
  );
};
