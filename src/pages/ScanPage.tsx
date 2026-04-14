import React from 'react';
import { ScanForm } from '../components/forms/ScanForm';

const BENEFITS = [
  {
    id: 'score',
    label: 'AI Readiness Score',
    sub: '0–100 met niveau-indicatie',
  },
  {
    id: 'kansen',
    label: 'Top 3 kansen',
    sub: 'Concrete aanbevelingen op maat',
  },
  {
    id: 'roi',
    label: 'Indicatieve ROI',
    sub: 'Maandelijkse & jaarlijkse besparing',
  },
] as const;

export const ScanPage = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.12em] uppercase text-emerald-600 mb-4">
            Gratis &amp; vrijblijvend
          </p>
          <h1 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-[-0.04em] text-[#0d0d0d] mb-6">
            Ontdek in 10 minuten wat AI voor jouw bedrijf kan doen.
          </h1>
          <p className="text-lg text-[#555] leading-[1.7] max-w-2xl mx-auto mb-10">
            Je krijgt direct je score, top 3 kansen en een indicatieve ROI-berekening. René neemt het daarna persoonlijk met je door.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
            {BENEFITS.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl p-4 shadow-sm border border-slate-100 text-center"
              >
                <div className="w-10 h-10 bg-emerald-50 border border-emerald-200 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="font-semibold text-[#0d0d0d] text-sm">{item.label}</p>
                <p className="text-[#555] text-xs mt-1">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulier */}
      <section className="pb-24 px-6">
        <ScanForm />
      </section>

    </div>
  );
};
