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
              <div className="text-2xl mb-1">📊</div>
              <p className="font-semibold text-slate-900 text-sm">AI Readiness Score</p>
              <p className="text-slate-500 text-xs mt-1">0–100 met niveau-indicatie</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center">
              <div className="text-2xl mb-1">🎯</div>
              <p className="font-semibold text-slate-900 text-sm">Top 3 kansen</p>
              <p className="text-slate-500 text-xs mt-1">Concrete aanbevelingen op maat</p>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center">
              <div className="text-2xl mb-1">💰</div>
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
