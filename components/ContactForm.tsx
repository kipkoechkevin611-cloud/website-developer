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
      <div className="bg-white rounded-xl p-8 md:p-12 border border-gray-100 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Project Request Received
        </h3>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Thanks for sharing your project details. I've received your request and will review the information before getting back to you.
        </p>
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <p className="text-blue-700 font-medium">
            Expected response: Within 24 hours
          </p>
        </div>
        <a
          href="#home"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          Back to Home
        </a>
      </div>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Have a Project in Mind? Let's Build It.
          </h2>
          <p className="text-lg text-gray-600">
            Tell me what you're looking to build. The more details you provide, the better I can understand your requirements and prepare a suitable response.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8 md:p-12 border border-gray-100">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-900 mb-2">
                WhatsApp / Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="+254 7XX XXX XXX"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="projectType" className="block text-sm font-medium text-gray-900 mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select project type</option>
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
                <label htmlFor="budget" className="block text-sm font-medium text-gray-900 mb-2">
                  Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
                >
                  <option value="">Select budget range</option>
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
              <label htmlFor="timeline" className="block text-sm font-medium text-gray-900 mb-2">
                Timeline
              </label>
              <select
                id="timeline"
                name="timeline"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all bg-white"
              >
                <option value="">Select timeline</option>
                <option value="ASAP">ASAP</option>
                <option value="Within 2 weeks">Within 2 weeks</option>
                <option value="2–4 weeks">2–4 weeks</option>
                <option value="1–2 months">1–2 months</option>
                <option value="Flexible">Flexible</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-900 mb-2">
                Project Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={5}
                maxLength={2000}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell me about your project, what you want to achieve, and any websites or applications you like."
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="existingWebsite" className="block text-sm font-medium text-gray-900 mb-2">
                  Existing Website (Optional)
                </label>
                <input
                  type="url"
                  id="existingWebsite"
                  name="existingWebsite"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="https://yourwebsite.com"
                />
              </div>

              <div>
                <label htmlFor="referenceWebsite" className="block text-sm font-medium text-gray-900 mb-2">
                  Reference Website (Optional)
                </label>
                <input
                  type="url"
                  id="referenceWebsite"
                  name="referenceWebsite"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="https://websiteyoulike.com"
                />
              </div>
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
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Project Request'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
