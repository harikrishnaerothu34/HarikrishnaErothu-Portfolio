import { useState } from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ScrollReveal } from './ScrollReveal';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const formspreeEndpoint =
    import.meta.env.VITE_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xbjnyqvo';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage('Please fill in all required fields.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setErrorMessage('');
    setIsSubmitting(true);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _replyto: formData.email,
          _subject: `Portfolio Message from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 8000);
      } else {
        const errorData = await response.json().catch(() => null);
        const detail =
          errorData && errorData.errors && errorData.errors.length > 0
            ? errorData.errors.map((e: { message: string }) => e.message).join(', ')
            : 'Form delivery service returned an error.';
        setErrorMessage(
          `${detail} Click below to send directly via your email client to ${PERSONAL_INFO.email}.`
        );
      }
    } catch {
      setErrorMessage(
        `Unable to reach the email delivery server. Click below to send directly via email to ${PERSONAL_INFO.email}.`
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const mailtoFallback = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
    `Portfolio Inquiry from ${formData.name || 'Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section className="py-20 max-w-7xl mx-auto px-6" id="contact">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Info Column */}
        <div className="lg:col-span-5">
          <ScrollReveal delay={50} className="space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#e8f0ec] text-[#245B4A] text-xs font-semibold">
                GET IN TOUCH
              </div>
              <h2 className="text-3xl font-bold text-[#252724] tracking-tight">Let's Connect</h2>
              <p className="text-sm text-[#68645C] leading-relaxed">
                I am actively looking for software engineering, full-stack, and applied AI developer roles for 2026–2027. Feel free to send a message or contact directly.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-[#E5E1D8] shadow-subtle">
                <div className="w-9 h-9 rounded-lg bg-[#e8f0ec] text-[#245B4A] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">mail</span>
                </div>
                <div className="overflow-hidden">
                  <div className="text-[11px] font-bold text-[#9E998F] uppercase tracking-wider">
                    Email Address
                  </div>
                  <a
                    className="text-xs sm:text-sm font-semibold text-[#252724] hover:text-[#245B4A] transition-colors truncate block"
                    href={`mailto:${PERSONAL_INFO.email}`}
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white border border-[#E5E1D8] shadow-subtle">
                <div className="w-9 h-9 rounded-lg bg-[#faeeea] text-[#C66B4E] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-xl">location_on</span>
                </div>
                <div>
                  <div className="text-[11px] font-bold text-[#9E998F] uppercase tracking-wider">
                    Location
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-[#252724]">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Contact Form Column */}
        <div className="lg:col-span-7">
          <ScrollReveal delay={150}>
            <div className="bg-white border border-[#E5E1D8] rounded-2xl p-6 sm:p-8 shadow-card">
            <h3 className="text-xl font-bold text-[#252724] mb-1">Send a Message</h3>
            <p className="text-xs sm:text-sm text-[#68645C] mb-6">
              Connects via Formspree or direct inbox dispatch.
            </p>

            {submitted && (
              <div
                className="mb-4 p-4 rounded-xl bg-[#e8f0ec] text-[#245B4A] border border-[#245B4A]/20 text-sm font-medium animate-in fade-in"
                role="alert"
              >
                Message sent successfully! Thank you for reaching out.
              </div>
            )}

            {errorMessage && (
              <div className="mb-4 p-4 rounded-xl bg-[#faeeea] text-[#C66B4E] border border-[#C66B4E]/30 text-xs sm:text-sm space-y-2">
                <p>{errorMessage}</p>
                <div>
                  <a
                    href={mailtoFallback}
                    className="inline-flex items-center gap-1.5 font-semibold text-[#245B4A] underline hover:text-[#1b473a]"
                  >
                    <span>Click here to open mail app &rarr;</span>
                  </a>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4" id="contactForm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#252724] mb-1" htmlFor="nameInput">
                    Your Name
                  </label>
                  <input
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E1D8] focus:border-[#245B4A] focus:ring-1 focus:ring-[#245B4A] text-sm text-[#252724] bg-white placeholder:text-[#9E998F] outline-none transition-all"
                    id="nameInput"
                    name="name"
                    placeholder="Alex Turner"
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#252724] mb-1" htmlFor="emailInput">
                    Your Email
                  </label>
                  <input
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E1D8] focus:border-[#245B4A] focus:ring-1 focus:ring-[#245B4A] text-sm text-[#252724] bg-white placeholder:text-[#9E998F] outline-none transition-all"
                    id="emailInput"
                    name="email"
                    placeholder="alex@example.com"
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#252724] mb-1" htmlFor="messageInput">
                  Message
                </label>
                <textarea
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E5E1D8] focus:border-[#245B4A] focus:ring-1 focus:ring-[#245B4A] text-sm text-[#252724] bg-white placeholder:text-[#9E998F] outline-none transition-all resize-y"
                  id="messageInput"
                  name="message"
                  placeholder="Hi Harikrishna, I came across your portfolio and would like to connect..."
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#245B4A] hover:bg-[#1b473a] text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-150 shadow-subtle disabled:opacity-50 cursor-pointer"
                id="submitBtn"
                type="submit"
                disabled={isSubmitting}
              >
                <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
  );
};
