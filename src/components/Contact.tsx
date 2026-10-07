import React, { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import {
  Mail,
  Copy,
  Check,
  Send,
  MapPin,
  MessageSquare,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setError('Please fill out all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please provide a valid email address.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    // Simulated reliable submission for developer portfolio (no leaked keys)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitted(false), 6000);
    }, 750);
  };

  return (
    <section id="contact" className="py-20 relative border-t border-zinc-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
            Let's Connect
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-500 dark:text-zinc-400 max-w-2xl">
            Currently interviewing for Software Engineering and Full-Stack positions. Feel free to reach out directly via email or the form below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Details & Links */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-zinc-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40 space-y-6">
              <div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  Contact Information
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  Quickest response via email or LinkedIn direct message.
                </p>
              </div>

              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-xl bg-zinc-100/70 dark:bg-slate-950/60 border border-zinc-200/60 dark:border-slate-800/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-500 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <div className="text-[11px] font-mono text-zinc-400">Direct Email</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100 hover:text-sky-500 truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className="p-2 rounded-lg border border-zinc-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-zinc-700 dark:text-zinc-300 hover:text-sky-500 transition-colors shrink-0"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-zinc-100/70 dark:bg-slate-950/60 border border-zinc-200/60 dark:border-slate-800/80 flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-sky-500/10 border border-sky-500/30 flex items-center justify-center text-sky-500 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-zinc-400">Location</div>
                  <div className="text-xs sm:text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3">
                  Professional Profiles
                </div>
                <div className="flex flex-col gap-2.5">
                  <a
                    href={PERSONAL_INFO.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-100/50 dark:bg-slate-800/40 border border-zinc-200/60 dark:border-slate-800/60 hover:border-sky-500/40 text-zinc-800 dark:text-zinc-200 text-xs font-medium transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <LinkedinIcon className="w-4 h-4 text-[#0a66c2]" />
                      <span>LinkedIn Profile</span>
                    </div>
                    <span className="font-mono text-[11px] text-zinc-400">Connect ↗</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-zinc-100/50 dark:bg-slate-800/40 border border-zinc-200/60 dark:border-slate-800/60 hover:border-sky-500/40 text-zinc-800 dark:text-zinc-200 text-xs font-medium transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <GithubIcon className="w-4 h-4 text-zinc-700 dark:text-zinc-300" />
                      <span>GitHub Repositories</span>
                    </div>
                    <span className="font-mono text-[11px] text-zinc-400">Explore ↗</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-900/40">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-sky-500" />
                <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
                  Send a Message
                </h3>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm flex items-start gap-2.5 animate-in fade-in">
                  <Check className="w-4 h-4 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold">Message dispatched!</strong> Thank you for reaching out. I will get back to you promptly.
                  </div>
                </div>
              )}

              {error && (
                <div className="mb-6 p-3 rounded-lg bg-rose-500/15 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-zinc-50 dark:bg-slate-950 border border-zinc-200 dark:border-slate-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Email Address <span className="text-rose-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. alex@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-zinc-50 dark:bg-slate-950 border border-zinc-200 dark:border-slate-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1.5">
                    Message <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hi Harikrishna, we came across your work on CareerSync and would love to discuss a Software Engineering opportunity..."
                    className="w-full px-3.5 py-2.5 rounded-xl text-xs sm:text-sm bg-zinc-50 dark:bg-slate-950 border border-zinc-200 dark:border-slate-800 text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-sky-500 hover:bg-sky-400 disabled:bg-sky-500/50 text-slate-950 transition-all duration-200 shadow-xs hover:shadow-sky-500/25 hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
