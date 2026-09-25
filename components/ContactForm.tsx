'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      projectType: formData.get('projectType'),
      budget: formData.get('budget'),
      timeline: formData.get('timeline'),
      description: formData.get('description'),
      existingWebsite: formData.get('existingWebsite'),
      referenceWebsite: formData.get('referenceWebsite'),
      honeypot: formData.get('honeypot'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-16 md:py-20 bg-[#07111F]">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="bg-[#0D1B2A] rounded-xl border border-white/8 p-6 md:p-10 text-center max-w-3xl mx-auto">
            <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <h3 className="text-[clamp(28px,3.5vw,42px)] font-bold text-white leading-[1.15] mb-3">
              Project Request Received
            </h3>
            <p className="text-[#94A3B8] mb-4 leading-relaxed text-base">
              Thanks for sharing your project details. I've received your request and will review the information before getting back to you.
            </p>
            <div className="bg-[#2F80FF]/10 border border-[#2F80FF]/30 rounded-lg p-4 mb-4">
              <p className="text-[#2F80FF] font-medium text-sm">
                Expected response: Within 24 hours
              </p>
            </div>
            <a
              href="#"
              className="inline-block bg-[#2F80FF] text-white px-6 py-3 rounded-lg hover:bg-[#2F80FF]/90 transition-all hover:translate-y-[-2px] font-medium text-sm"
            >
              Back to Home
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#07111F]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[45%_55%] gap-8 md:gap-12 items-center">
          <div className="space-y-5">
            <h2 className="text-[clamp(40px,4vw,52px)] font-bold text-white leading-[1.1]">
              Have something worth building?
            </h2>
            <p className="text-base md:text-lg text-[#94A3B8] leading-relaxed max-w-[480px]">
              Tell me what you're working on. Let's turn the idea into a practical digital product.
            </p>
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="https://wa.me/254700000000"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] text-white px-6 py-3 rounded-lg hover:bg-[#25D366]/90 transition-all hover:translate-y-[-2px] font-medium text-base flex items-center justify-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="mailto:kipkoechkevin611@gmail.com"
                className="border border-white/20 text-white px-6 py-3 rounded-lg hover:border-[#2F80FF] hover:text-[#2F80FF] transition-all hover:translate-y-[-2px] font-medium text-base text-center"
              >
                Email Me
              </a>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="bg-[#0D1B2A] rounded-xl border border-white/8 p-6 md:p-8">
              {error && (
                <div className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 rounded-lg mb-5 text-sm">
                  {error}
                </div>
              )}

              <div className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-[#07111F] border border-white/10 focus:border-[#2F80FF] focus:outline-none transition-all text-white placeholder-[#94A3B8] text-sm"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-[#07111F] border border-white/10 focus:border-[#2F80FF] focus:outline-none transition-all text-white placeholder-[#94A3B8] text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-medium text-white mb-2">
                    WhatsApp / Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full px-3 py-2.5 rounded-lg bg-[#07111F] border border-white/10 focus:border-[#2F80FF] focus:outline-none transition-all text-white placeholder-[#94A3B8] text-sm"
                    placeholder="+254 7XX XXX XXX"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="projectType" className="block text-xs font-medium text-white mb-2">
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      required
                      className="w-full px-3 py-2.5 rounded-lg bg-[#07111F] border border-white/10 focus:border-[#2F80FF] focus:outline-none transition-all text-white text-sm"
                    >
                      <option value="">Select type</option>
                      <option value="Business Website">Business Website</option>
                      <option value="E-commerce Website">E-commerce Website</option>
                      <option value="Custom Web Application">Custom Web Application</option>
                      <option value="Management System">Management System</option>
                      <option value="Website Redesign">Website Redesign</option>
                      <option value="API Integration">API Integration</option>
                      <option value="Maintenance / Support">Maintenance / Support</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-xs font-medium text-white mb-2">
                      Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      className="w-full px-3 py-2.5 rounded-lg bg-[#07111F] border border-white/10 focus:border-[#2F80FF] focus:outline-none transition-all text-white text-sm"
                    >
                      <option value="">Select range</option>
                      <option value="Under KSh 30,000">Under KSh 30,000</option>
                      <option value="KSh 30,000 – 75,000">KSh 30,000 – 75,000</option>
                      <option value="KSh 75,000 – 150,000">KSh 75,000 – 150,000</option>
                      <option value="KSh 150,000 – 300,000">KSh 150,000 – 300,000</option>
                      <option value="KSh 300,000+">KSh 300,000+</option>
                      <option value="Not sure yet">Not sure yet</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-xs font-medium text-white mb-2">
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    required
                    rows={4}
                    maxLength={2000}
                    className="w-full px-3 py-2.5 rounded-lg bg-[#07111F] border border-white/10 focus:border-[#2F80FF] focus:outline-none transition-all text-white placeholder-[#94A3B8] resize-none text-sm"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <input
                  type="text"
                  name="honeypot"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2F80FF] text-white px-6 py-3 rounded-lg hover:bg-[#2F80FF]/90 transition-all hover:translate-y-[-2px] font-medium text-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Project Request →'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
