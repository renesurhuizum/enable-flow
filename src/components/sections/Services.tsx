import React from 'react';

export const Services = () => {
  return (
    <section id="diensten" className="py-20 px-4 bg-gradient-to-br from-slate-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-violet-300 to-rose-300 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-teal-300 to-cyan-300 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Onze Diensten
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Van strategie tot implementatie - we begeleiden je volledige AI-transformatie met hands-on ondersteuning en praktische oplossingen.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Service 1: Consultancy */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-200 to-teal-200 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-400 to-teal-500 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Consultancy</h3>
              <ul className="space-y-2 mb-6">
                <li className="text-slate-600 flex items-start text-sm">
                  <span className="text-teal-500 mr-2 font-bold">✓</span>
                  <span>Gratis AI Readiness Scan</span>
                </li>
                <li className="text-slate-600 flex items-start text-sm">
                  <span className="text-teal-500 mr-2 font-bold">✓</span>
                  <span>AI Strategie Workshop</span>
                </li>
                <li className="text-slate-600 flex items-start text-sm">
                  <span className="text-teal-500 mr-2 font-bold">✓</span>
                  <span>Business case ontwikkeling</span>
                </li>
              </ul>
              <p className="text-sm font-medium text-slate-500">Prijs op aanvraag</p>
            </div>
          </div>

          {/* Service 2: Implementation (Popular) */}
          <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden border-2 border-violet-400 transform md:scale-105">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-violet-500 via-rose-500 to-violet-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-xl z-20 animate-pulse">
              ⭐ Populair
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-200 to-rose-200 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

            <div className="relative z-10 mt-2">
              <div className="w-14 h-14 bg-gradient-to-br from-violet-400 to-violet-600 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Implementatie</h3>
              <ul className="space-y-2 mb-6">
                <li className="text-slate-600 flex items-start text-sm">
                  <span className="text-violet-500 mr-2 font-bold">✓</span>
                  <span>Microsoft Copilot 365 uitrol</span>
                </li>
                <li className="text-slate-600 flex items-start text-sm">
                  <span className="text-violet-500 mr-2 font-bold">✓</span>
                  <span>Procesautomatisering</span>
                </li>
                <li className="text-slate-600 flex items-start text-sm">
                  <span className="text-violet-500 mr-2 font-bold">✓</span>
                  <span>Custom AI-oplossingen</span>
                </li>
              </ul>
              <p className="text-sm font-medium text-slate-500">Prijs op aanvraag</p>
            </div>
          </div>

          {/* Service 3: Training */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-rose-200 to-violet-200 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

            <div className="relative z-10">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-400 to-rose-600 rounded-xl mb-4 flex items-center justify-center">
                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">AI Training</h3>
              <ul className="space-y-2 mb-6">
                <li className="text-slate-600 flex items-start text-sm">
                  <span className="text-rose-500 mr-2 font-bold">✓</span>
                  <span>Prompt Engineering Basics</span>
                </li>
                <li className="text-slate-600 flex items-start text-sm">
                  <span className="text-rose-500 mr-2 font-bold">✓</span>
                  <span>AI voor Management</span>
                </li>
                <li className="text-slate-600 flex items-start text-sm">
                  <span className="text-rose-500 mr-2 font-bold">✓</span>
                  <span>Copilot voor teams</span>
                </li>
              </ul>
              <p className="text-sm font-medium text-slate-500">Prijs op aanvraag</p>
            </div>
          </div>
        </div>

        {/* Additional SEO Content - How we work */}
        <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 md:p-12 shadow-xl border border-slate-200">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 text-center">
            Hoe werken wij?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                1
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Analyse & Advies</h4>
              <p className="text-slate-600 text-sm">
                We starten met een gratis AI Readiness Scan om jouw huidige situatie, processen en kansen in kaart te brengen.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                2
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Strategie & Plan</h4>
              <p className="text-slate-600 text-sm">
                Op basis van de scan ontwikkelen we samen een concrete AI-strategie met haalbare doelen en verwachte ROI.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-teal-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                3
              </div>
              <h4 className="font-bold text-slate-900 mb-2">Implementatie & Training</h4>
              <p className="text-slate-600 text-sm">
                We rollen AI-tools uit, trainen jouw team en zorgen voor succesvolle adoptie met doorlopende ondersteuning.
              </p>
            </div>
          </div>

          <div className="mt-10 bg-sky-50 rounded-xl p-6 border-2 border-teal-200">
            <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="text-2xl">🎯</span>
              Waarom EnableFlow AI?
            </h4>
            <p className="text-slate-700 mb-4">
              Als lokaal AI-consultancy bureau in Noord-Nederland kennen we de uitdagingen van MKB-bedrijven. We spreken jouw taal, geen corporate jargon. We komen bij je langs, denken mee en implementeren hands-on. Geen langdradige adviezen, maar concrete resultaten.
            </p>
            <div className="grid sm:grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-teal-500 font-bold">✓</span>
                <span className="text-slate-700">Specialisatie in Microsoft 365 omgevingen</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-500 font-bold">✓</span>
                <span className="text-slate-700">Ervaring met Claude & Gemini integraties</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-teal-500 font-bold">✓</span>
                <span className="text-slate-700">Praktische workshops & hands-on training</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-cyan-500 font-bold">✓</span>
                <span className="text-slate-700">Lokaal in Noord-Nederland (persoonlijke service)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
