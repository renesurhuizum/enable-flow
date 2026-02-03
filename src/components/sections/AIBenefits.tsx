import React from 'react';

export const AIBenefits = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white via-purple-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Benefits */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Waarom AI implementeren in jouw bedrijf?
            </h2>
            <p className="text-lg text-slate-700 mb-6">
              AI-tools zoals Microsoft Copilot 365, Claude en Gemini transformeren de manier waarop MKB-bedrijven werken. Van automatisering van repetitieve taken tot intelligente data-analyse - AI helpt je team productiever en slimmer te werken.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">⚡</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">30-40% tijdsbesparing</h3>
                  <p className="text-slate-600 text-sm">Automatiseer repetitieve taken zoals e-mail drafting, rapportages en data-entry met AI-assistentie.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">💡</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Betere beslissingen</h3>
                  <p className="text-slate-600 text-sm">AI analyseert grote hoeveelheden data en geeft actionable insights voor strategische besluitvorming.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">🚀</span>
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Concurrentievoordeel</h3>
                  <p className="text-slate-600 text-sm">Bedrijven die nu AI adopteren, zijn klaar voor de toekomst en blijven hun concurrenten voor.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Visual/Image placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 rounded-2xl p-8 shadow-2xl relative overflow-hidden aspect-square flex items-center justify-center">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20"></div>

              {/* Center content - Data visualization placeholder */}
              <div className="relative z-10 text-center">
                <div className="text-8xl mb-4">📊</div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Data-Driven Beslissingen
                </h3>
                <p className="text-slate-300 text-sm">
                  AI analyseert jouw data en geeft direct actionable insights
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
