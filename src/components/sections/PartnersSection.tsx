import React from 'react';

const partners = [
  {
    name: 'Microsoft Copilot 365',
    icon: 'M',
    gradient: 'from-blue-500 via-blue-600 to-blue-700',
    bgColor: 'bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700',
    description: 'AI-assistent geïntegreerd in Word, Excel, PowerPoint, Outlook en Teams.',
  },
  {
    name: 'Claude (Anthropic)',
    icon: 'C',
    gradient: 'from-purple-500 via-pink-500 to-purple-600',
    bgColor: 'bg-gradient-to-br from-purple-500 via-pink-500 to-purple-600',
    description: 'Geavanceerde AI voor complexe analyse, strategie en content creatie.',
  },
  {
    name: 'Gemini (Google)',
    icon: 'G',
    gradient: 'from-teal-400 via-cyan-400 to-teal-500',
    bgColor: 'bg-gradient-to-br from-teal-400 via-cyan-400 to-teal-500',
    description: 'Multimodale AI voor tekst, beeld en data-analyse binnen Google Workspace.',
  },
];

export const PartnersSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
          AI-tools die wij implementeren
        </h2>
        <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
          Wij helpen je slimmer werken met de krachtigste AI-platforms
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Gradient icon */}
              <div className={`w-16 h-16 ${partner.bgColor} rounded-2xl flex items-center justify-center mb-6 text-white text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                {partner.icon}
              </div>

              {/* Partner name */}
              <h3 className="text-xl font-bold text-white mb-3">
                {partner.name}
              </h3>

              {/* Description */}
              <p className="text-slate-300 text-sm leading-relaxed">
                {partner.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
