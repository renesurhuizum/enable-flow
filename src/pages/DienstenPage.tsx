import React, { useState } from 'react';
import ProcessSection from '../components/sections/ProcessSection';
import CTASection from '../components/sections/CTASection';

const SERVICES = [
  {
    id: 'quickscan',
    label: 'AI QUICKSCAN',
    price: '€395',
    period: 'éénmalig',
    tagline: 'Weet binnen een week waar AI jou tijd bespaart.',
    features: [
      'Analyse van jouw processen op AI-kansen',
      'Concrete ROI-berekening per kans',
      'Prioriteitenlijst met aanbevolen tools',
      'Persoonlijk gesprek met René',
    ],
    cta: 'Plan een Quickscan',
    href: 'https://calendly.com/enableflow-info/30min',
    highlight: false,
    badge: null,
  },
  {
    id: 'starter',
    label: 'AI STARTER',
    price: '€995',
    period: 'éénmalig',
    tagline: 'Jouw eerste automatisering live in 2 weken.',
    features: [
      'Alles uit de Quickscan',
      'Implementatie van 1–2 automatiseringen',
      'Training van jouw team',
      '30 dagen nazorg',
    ],
    cta: 'Start met AI Starter',
    href: 'https://calendly.com/enableflow-info/30min',
    highlight: true,
    badge: '⭐ Meest gekozen',
  },
  {
    id: 'partnership',
    label: 'AI PARTNERSHIP',
    price: '€495',
    period: '/maand',
    tagline: 'Continue AI-begeleiding terwijl je bedrijf groeit.',
    features: [
      'Doorlopende implementatie & optimalisatie',
      'Maandelijkse voortgangssessie',
      'Team-trainingen op aanvraag',
      'Prioriteits-support',
    ],
    cta: 'Bespreek Partnership',
    href: 'https://calendly.com/enableflow-info/30min',
    highlight: false,
    badge: null,
  },
] as const;

const FAQ_ITEMS = [
  {
    q: 'Moet ik al Microsoft 365 of andere tools hebben?',
    a: 'Nee. René bekijkt samen met je welke tools het beste passen bij jouw situatie. Soms zijn bestaande tools al voldoende — en soms is een eenvoudige oplossing beter dan een duur pakket.',
  },
  {
    q: 'Wat als de automatisering niet oplevert wat ik verwacht?',
    a: 'We starten altijd met een scan. Als de kansen er niet zijn, zeggen we dat eerlijk — zonder verdere verplichting. Geen resultaat = geen doorgang.',
  },
  {
    q: 'Kan ik stoppen wanneer ik wil?',
    a: 'Ja. Het Partnership is maandelijks opzegbaar. De Quickscan en AI Starter zijn éénmalige trajecten zonder doorlopende verplichting.',
  },
];

export const DienstenPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">

      {/* 01 — Hero */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.12em] uppercase text-emerald-600 mb-4">
            Diensten & Prijzen
          </p>
          <h1 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-[-0.04em] text-[#0d0d0d] mb-6">
            Van scan naar automatisering in 3 stappen.
          </h1>
          <p className="text-lg text-[#555] leading-[1.7] max-w-2xl mx-auto">
            Geen langlopende trajecten. Geen vage rapporten. Jouw eerste AI-automatisering is live binnen 2 weken.
          </p>
        </div>
      </section>

      {/* 02 — Pricing */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {SERVICES.map((s) => (
              <div
                key={s.id}
                className={`relative bg-white rounded-2xl p-8 flex flex-col ${
                  s.highlight
                    ? 'border-2 border-emerald-500 scale-[1.03] shadow-xl'
                    : 'border border-slate-200 shadow-md'
                }`}
              >
                {s.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-xs font-bold px-5 py-1.5 rounded-full shadow-lg whitespace-nowrap">
                    {s.badge}
                  </div>
                )}
                <p className="text-xs font-bold tracking-[0.08em] uppercase text-slate-400 mb-3">
                  {s.label}
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className="text-4xl font-black tracking-[-0.04em] text-[#0d0d0d]">
                    {s.price}
                  </span>
                  <span className="text-slate-400 text-sm">{s.period}</span>
                </div>
                <p className="font-bold text-[#0d0d0d] mb-6">{s.tagline}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-[#555]">
                      <svg
                        aria-hidden="true"
                        className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block text-center py-3 px-6 rounded-[10px] font-bold text-sm transition-all ${
                    s.highlight
                      ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-[0_4px_18px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_24px_rgba(16,185,129,0.45)]'
                      : 'border border-slate-200 text-[#0d0d0d] hover:border-emerald-300 hover:text-emerald-700'
                  }`}
                >
                  {s.cta}
                </a>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-sm mt-8">
            Mogelijk deels vergoed via subsidie. Vraag René ernaar.
          </p>
        </div>
      </section>

      {/* 03 — Process */}
      <ProcessSection />

      {/* 04 — FAQ */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-black tracking-[-0.04em] text-[#0d0d0d] mb-8">
            Veelgestelde vragen
          </h2>
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-[#0d0d0d] text-sm hover:bg-slate-50 transition-colors"
                  aria-expanded={openFaq === i}
                >
                  {item.q}
                  <span aria-hidden="true" className="text-slate-400 ml-4 flex-shrink-0">
                    {openFaq === i ? '−' : '+'}
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-[#555] text-sm leading-[1.7]">
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — CTA */}
      <CTASection />

    </div>
  );
};
