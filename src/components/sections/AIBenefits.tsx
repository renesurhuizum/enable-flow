import React from 'react';

export const AIBenefits = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-slate-50 to-cyan-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Benefits */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Waarom AI implementeren in jouw bedrijf?
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              Meer dan de helft van de werkdag gaat op aan taken die ook door AI gedaan kunnen worden. Minder repetitief werk, snellere beslissingen en een team dat zich kan focussen op wat écht waarde toevoegt.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">⚡</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">30-40% tijdsbesparing</h3>
                  <p className="text-slate-600 text-sm">Automatiseer repetitieve taken zoals e-mail drafting, rapportages en data-entry met AI-assistentie.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">💡</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Betere beslissingen</h3>
                  <p className="text-slate-600 text-sm">AI analyseert grote hoeveelheden data en geeft actionable insights voor strategische besluitvorming.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">🚀</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Concurrentievoordeel</h3>
                  <p className="text-slate-600 text-sm">Bedrijven die nu AI adopteren, zijn klaar voor de toekomst en blijven hun concurrenten voor.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Outcomes */}
          <div className="relative">
            <div className="bg-slate-900 rounded-2xl p-8 shadow-xl">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Wat jij ervan merkt
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-white">Minder e-mail chaos</h4>
                    </div>
                    <p className="text-slate-300 text-sm">Drafts, samenvattingen en actiepunten automatisch — jouw inbox werkt voor jou.</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-white">Snellere rapportages</h4>
                    </div>
                    <p className="text-slate-300 text-sm">Data-analyse en presentaties in minuten, niet uren — meer tijd voor wat écht telt.</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <h4 className="font-bold text-white">Betere klantenservice</h4>
                    </div>
                    <p className="text-slate-300 text-sm">Direct antwoord, zonder wachttijd of zoekwerk — tevreden klanten, minder druk op je team.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
