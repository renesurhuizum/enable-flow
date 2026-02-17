import React from 'react';
import { ContactForm } from '../components/forms/ContactForm';

export const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Hero Header */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6">
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
              Neem contact op
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Klaar om slimmer te werken met AI?
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Kies tussen een vrijblijvend consult of een grondige AI Readiness Scan met persoonlijk rapport. We helpen je graag op weg.
            </p>
          </div>

          {/* Stats bar */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-12">
            <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-stone-100">
              <p className="text-2xl font-bold text-teal-600">24u</p>
              <p className="text-xs text-slate-500 mt-1">Reactietijd</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-stone-100">
              <p className="text-2xl font-bold text-slate-700">100%</p>
              <p className="text-xs text-slate-500 mt-1">Gratis & vrijblijvend</p>
            </div>
            <div className="bg-white rounded-xl p-4 text-center shadow-sm border border-stone-100">
              <p className="text-2xl font-bold text-amber-600">Noord-NL</p>
              <p className="text-xs text-slate-500 mt-1">Lokaal & persoonlijk</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm defaultTab="consult" showContactHeader={false} />

      {/* Direct contact info */}
      <section className="py-16 px-4 bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Liever direct contact?
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email */}
            <a
              href="mailto:info@enableflow.nl"
              className="group bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="w-14 h-14 bg-teal-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-1">E-mail</h3>
              <p className="text-teal-300 text-sm">info@enableflow.nl</p>
            </a>

            {/* Phone */}
            <a
              href="tel:+31630534740"
              className="group bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="w-14 h-14 bg-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-1">Telefoon</h3>
              <p className="text-amber-300 text-sm">06 30 53 47 40</p>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/renedeboer97/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white/10 rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 text-center"
            >
              <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </div>
              <h3 className="font-bold text-white mb-1">LinkedIn</h3>
              <p className="text-blue-300 text-sm">Volg ons voor AI-tips</p>
            </a>
          </div>

          {/* Location info */}
          <div className="mt-10 text-center">
            <p className="text-slate-400 text-sm">
              Gevestigd in <span className="text-white font-semibold">Groningen</span> — actief in heel <span className="text-white font-semibold">Noord-Nederland</span>
            </p>
            <p className="text-slate-500 text-xs mt-2">
              Maandag t/m vrijdag, 09:00 - 17:00
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
