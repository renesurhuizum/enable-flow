import React from 'react';
import { Link } from 'react-router-dom';

export const ProcessSection = () => {
  const steps = [
    {
      number: '01',
      title: 'Scan & Diagnose',
      tagline: 'Begrijpen eerst, automatiseren tweede.',
      points: [
        'We brengen jouw processen, knelpunten en doelen in kaart',
        'We kijken naar je huidige tools en waar data \'vastloopt\'',
        'We bepalen samen wat wél en niet zinvol is om te automatiseren',
      ],
      gradient: 'from-teal-500 to-teal-600',
    },
    {
      number: '02',
      title: 'Ontwerp & Implementatie',
      tagline: 'Maatwerk, getest vóór livegang.',
      points: [
        'We kiezen de oplossingen met de hoogste impact voor jouw situatie',
        'We bouwen en testen in een echte omgeving met jouw eigen data',
        'We leggen elke keuze uit in begrijpelijke taal — geen jargon',
      ],
      gradient: 'from-violet-500 to-violet-600',
    },
    {
      number: '03',
      title: 'Lancering & Groei',
      tagline: 'Geen eenmalig project, maar doorlopend resultaat.',
      points: [
        'We lanceren met duidelijke meetpunten en vangnetten',
        'We monitoren, verzamelen feedback van jouw team en sturen bij',
        'We blijven verbeteren zodat het systeem meegroeit met je bedrijf',
      ],
      gradient: 'from-teal-400 to-teal-500',
    },
  ];

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            Onze aanpak
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Zo werken wij
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Een bewezen aanpak die begint met jouw bedrijf — niet met tools.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-1/2 -translate-x-1/2 w-[calc(66%-4rem)] h-0.5 bg-gradient-to-r from-teal-200 via-violet-200 to-teal-200 z-0" style={{left: 'calc(16.66% + 2rem)', width: 'calc(66.66% - 4rem)'}}></div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step) => (
              <div key={step.number} className="group flex flex-col">
                {/* Number badge */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.gradient} flex items-center justify-center flex-shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                  <div className="h-px flex-1 bg-slate-100 md:hidden"></div>
                </div>

                {/* Content */}
                <div className="bg-slate-50 rounded-2xl p-6 flex-1 border border-slate-100 group-hover:border-teal-200 group-hover:shadow-md transition-all duration-300">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-teal-600 text-sm font-medium mb-4 italic">{step.tagline}</p>
                  <ul className="space-y-2.5">
                    {step.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-slate-600 text-sm">
                        <svg className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">Benieuwd waar AI jouw bedrijf kan helpen?</p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-teal-600 hover:bg-teal-700 text-white px-8 py-3.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Doe de gratis scan →
          </Link>
        </div>
      </div>
    </section>
  );
};
