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

          {/* Right column - AI Tools */}
          <div className="relative">
            <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-pink-900 rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-6">
                  AI-tools die wij implementeren
                </h3>
                <div className="space-y-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">M</span>
                      </div>
                      <h4 className="font-bold text-white">Microsoft Copilot 365</h4>
                    </div>
                    <p className="text-slate-300 text-sm">AI-assistent geïntegreerd in Word, Excel, PowerPoint, Outlook en Teams.</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">C</span>
                      </div>
                      <h4 className="font-bold text-white">Claude (Anthropic)</h4>
                    </div>
                    <p className="text-slate-300 text-sm">Geavanceerde AI voor complexe analyse, strategie en content creatie.</p>
                  </div>

                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">G</span>
                      </div>
                      <h4 className="font-bold text-white">Gemini (Google)</h4>
                    </div>
                    <p className="text-slate-300 text-sm">Multimodale AI voor tekst, beeld en data-analyse binnen Google Workspace.</p>
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
