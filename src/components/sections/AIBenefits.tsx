import React from 'react';

export const AIBenefits = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white via-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
          Waarom AI implementeren in jouw bedrijf?
        </h2>
        <p className="text-lg text-slate-700 mb-12">
          AI-tools zoals Microsoft Copilot 365, Claude en Gemini transformeren de manier waarop MKB-bedrijven werken. Van automatisering van repetitieve taken tot intelligente data-analyse - AI helpt je team productiever en slimmer te werken.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">⚡</span>
            </div>
            <h3 className="font-bold text-slate-900 mb-2">30-40% tijdsbesparing</h3>
            <p className="text-slate-600 text-sm">Automatiseer repetitieve taken zoals e-mail drafting, rapportages en data-entry met AI-assistentie.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">💡</span>
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Betere beslissingen</h3>
            <p className="text-slate-600 text-sm">AI analyseert grote hoeveelheden data en geeft actionable insights voor strategische besluitvorming.</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-2xl">🚀</span>
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Concurrentievoordeel</h3>
            <p className="text-slate-600 text-sm">Bedrijven die nu AI adopteren, zijn klaar voor de toekomst en blijven hun concurrenten voor.</p>
          </div>
        </div>
      </div>
    </section>
  );
};
