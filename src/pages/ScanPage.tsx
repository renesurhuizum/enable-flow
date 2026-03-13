import React from 'react';
import { ScanForm } from '../components/forms/ScanForm';

export const ScanPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Hero */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            Gratis & vrijblijvend
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Ontdek het AI-potentieel van jouw bedrijf
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            In 10 minuten brengen we jouw AI-gereedheid in kaart. Je krijgt direct je score, top 3 kansen en een indicatieve ROI-berekening. René neemt het daarna met je door in een gratis gesprek.
          </p>

          {/* What you get */}
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-4">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <p className="font-semibold text-slate-900 text-sm">AI Readiness Score</p>
              <p className="text-slate-500 text-xs mt-1">0–100 met niveau-indicatie</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-semibold text-slate-900 text-sm">Top 3 kansen</p>
              <p className="text-slate-500 text-xs mt-1">Concrete aanbevelingen op maat</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center">
              <div className="w-10 h-10 bg-gradient-to-br from-violet-400 to-violet-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="font-semibold text-slate-900 text-sm">Indicatieve ROI</p>
              <p className="text-slate-500 text-xs mt-1">Maandelijkse & jaarlijkse besparing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24 px-4">
        <ScanForm />
      </section>
    </div>
  );
};
