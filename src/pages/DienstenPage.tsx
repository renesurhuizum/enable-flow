import React from 'react';
import { Link } from 'react-router-dom';
import ProcessSection from '../components/sections/ProcessSection';

export const DienstenPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      {/* Hero Header */}
      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            Wat we doen
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Van scan tot resultaat
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Wij implementeren AI die écht werkt voor jouw bedrijf — geen standaard pakketjes, maar maatwerk op basis van jouw processen en doelen.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-8 px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Service 1: Consultancy */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-200 to-teal-200 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl mb-4 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-1">AI Quickscan</h2>
                <p className="text-2xl font-bold text-teal-600 mb-3">€395 <span className="text-sm font-normal text-slate-500">eenmalig</span></p>
                <p className="text-slate-600 text-sm mb-5">
                  We brengen jouw huidige situatie in kaart en bepalen samen waar AI de meeste waarde toevoegt voor jouw bedrijf.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="text-slate-600 flex items-start text-sm">
                    <span className="text-teal-500 mr-2 font-bold">✓</span>
                    <span>Diepgaande analyse van jouw processen</span>
                  </li>
                  <li className="text-slate-600 flex items-start text-sm">
                    <span className="text-teal-500 mr-2 font-bold">✓</span>
                    <span>Concrete AI-kansen in kaart gebracht</span>
                  </li>
                  <li className="text-slate-600 flex items-start text-sm">
                    <span className="text-teal-500 mr-2 font-bold">✓</span>
                    <span>Stappenplan met verwachte ROI</span>
                  </li>
                  <li className="text-slate-600 flex items-start text-sm">
                    <span className="text-teal-500 mr-2 font-bold">✓</span>
                    <span>Concrete aanbevelingen, geen vage rapporten</span>
                  </li>
                </ul>
                <a
                  href="https://calendly.com/enableflow-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center w-full bg-teal-50 hover:bg-teal-100 text-teal-700 font-semibold py-2 px-4 rounded-xl text-sm transition-colors duration-200"
                >
                  Boek een gesprek →
                </a>
              </div>
            </div>

            {/* Service 2: Implementation (Popular) */}
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden border-2 border-violet-400 transform md:scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 to-violet-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl z-20">
                ⭐ Populair
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-200 to-violet-100 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

              <div className="relative z-10 mt-2">
                <div className="w-14 h-14 bg-gradient-to-br from-violet-400 to-violet-600 rounded-xl mb-4 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-1">AI Starter</h2>
                <p className="text-2xl font-bold text-violet-600 mb-3">€995 <span className="text-sm font-normal text-slate-500">eenmalig</span></p>
                <p className="text-slate-600 text-sm mb-5">
                  We rollen AI-tools hands-on uit in jouw organisatie — van procesautomatisering tot AI-assistenten. Inclusief begeleiding van het team.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="text-slate-600 flex items-start text-sm">
                    <span className="text-violet-500 mr-2 font-bold">✓</span>
                    <span>Tijdrovende processen automatiseren</span>
                  </li>
                  <li className="text-slate-600 flex items-start text-sm">
                    <span className="text-violet-500 mr-2 font-bold">✓</span>
                    <span>AI-assistenten voor jouw team</span>
                  </li>
                  <li className="text-slate-600 flex items-start text-sm">
                    <span className="text-violet-500 mr-2 font-bold">✓</span>
                    <span>Eerste resultaten binnen 2 weken</span>
                  </li>
                  <li className="text-slate-600 flex items-start text-sm">
                    <span className="text-violet-500 mr-2 font-bold">✓</span>
                    <span>Doorlopende ondersteuning na livegang</span>
                  </li>
                </ul>
                <a
                  href="https://calendly.com/enableflow-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded-xl text-sm transition-colors duration-200"
                >
                  Boek een gesprek →
                </a>
              </div>
            </div>

            {/* Service 3: Training */}
            <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-teal-200 to-violet-200 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-400 to-teal-600 rounded-xl mb-4 flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-1">AI Partnership</h2>
                <p className="text-2xl font-bold text-teal-600 mb-3">€495 <span className="text-sm font-normal text-slate-500">/ maand</span></p>
                <p className="text-slate-600 text-sm mb-5">
                  Doorlopende AI-begeleiding voor jouw bedrijf — zodat iedereen AI daadwerkelijk gebruikt en er waarde uit haalt.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="text-slate-600 flex items-start text-sm">
                    <span className="text-teal-500 mr-2 font-bold">✓</span>
                    <span>Doorlopende AI-begeleiding & optimalisatie</span>
                  </li>
                  <li className="text-slate-600 flex items-start text-sm">
                    <span className="text-teal-500 mr-2 font-bold">✓</span>
                    <span>Trainingen voor management & teams</span>
                  </li>
                  <li className="text-slate-600 flex items-start text-sm">
                    <span className="text-teal-500 mr-2 font-bold">✓</span>
                    <span>Maandelijkse voortgangssessie</span>
                  </li>
                  <li className="text-slate-600 flex items-start text-sm">
                    <span className="text-teal-500 mr-2 font-bold">✓</span>
                    <span>Op locatie of online — volledig op maat</span>
                  </li>
                </ul>
                <a
                  href="https://calendly.com/enableflow-info/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center w-full bg-teal-50 hover:bg-teal-100 text-teal-700 font-semibold py-2 px-4 rounded-xl text-sm transition-colors duration-200"
                >
                  Boek een gesprek →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <ProcessSection />

      <section className="py-8 px-4 pb-20">
        <div className="max-w-6xl mx-auto">
          {/* CTA */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Klaar om aan de slag te gaan?
            </h2>
            <p className="text-slate-600 mb-8 max-w-xl mx-auto">
              Start met een gratis AI Readiness Scan of plan direct een vrijblijvend gesprek in.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/enableflow-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Plan gratis kennismakingsgesprek →
              </a>
              <Link
                to="/scan"
                className="bg-white text-slate-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-slate-200 hover:border-teal-400 hover:text-teal-700 hover:shadow-md transition-all duration-200"
              >
                Doe de gratis AI Scan →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
