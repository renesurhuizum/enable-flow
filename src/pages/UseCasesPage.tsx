import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const industries = [
  {
    name: 'Sales & Marketing',
    gradient: 'from-teal-400 via-teal-500 to-teal-600',
    icon: '📈',
    useCases: [
      'Lead generation & nurturing',
      'Geautomatiseerde email campaigns',
      'Content creatie voor social media',
      'Sales forecasting',
    ],
  },
  {
    name: 'Customer Service',
    gradient: 'from-purple-400 via-purple-500 to-purple-600',
    icon: '💬',
    useCases: [
      '24/7 chatbot ondersteuning',
      'Ticket classificatie & routing',
      'Sentiment analyse',
      'Antwoord suggesties voor support teams',
    ],
  },
  {
    name: 'Operations & Finance',
    gradient: 'from-pink-400 via-pink-500 to-pink-600',
    icon: '💼',
    useCases: [
      'Factuurverwerking',
      'Contract analyse',
      'Data-entry automatisering',
      'Budget forecasting',
    ],
  },
  {
    name: 'HR & Recruitment',
    gradient: 'from-cyan-400 via-cyan-500 to-cyan-600',
    icon: '👥',
    useCases: [
      'CV screening',
      'Interview scheduling',
      'Onboarding documentatie',
      'Employee feedback analyse',
    ],
  },
];

const concreteExamples = [
  {
    title: 'Email Drafting',
    description: 'Automatisch concept emails in Outlook met Copilot',
    icon: '✉️',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    title: 'Meeting Notes',
    description: 'Vergaderingen automatisch samenvatten in Teams',
    icon: '📝',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Data Analysis',
    description: 'Excel rapporten genereren met één prompt',
    icon: '📊',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Document Creation',
    description: 'Professionele presentaties maken in minuten',
    icon: '📄',
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'Customer Insights',
    description: 'Klantfeedback analyseren en trends ontdekken',
    icon: '💡',
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Process Automation',
    description: 'Repetitieve taken automatiseren met AI workflows',
    icon: '⚡',
    gradient: 'from-indigo-500 to-purple-500',
  },
];

export const UseCasesPage = () => {
  const [employees, setEmployees] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(50);

  // Calculate monthly savings: employees × hourly rate × 5 hours/week × 4 weeks
  const monthlySavings = employees * hourlyRate * 5 * 4;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        {/* Animated background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-300 to-cyan-300 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-200 via-pink-200 to-cyan-200 rounded-full blur-3xl opacity-20"></div>

        {/* Floating gradient orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full blur-2xl opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-2xl opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            AI Use Cases voor jouw bedrijf
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ontdek hoe AI jouw dagelijkse processen kan automatiseren en je team productiever maakt
          </p>
        </div>
      </section>

      {/* Use Cases by Industry */}
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            AI toepassingen per branche
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Van sales tot HR: AI helpt in elke afdeling om efficiënter te werken
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                {/* Gradient icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.gradient} rounded-2xl flex items-center justify-center mb-4 text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {industry.icon}
                </div>

                {/* Industry name */}
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {industry.name}
                </h3>

                {/* Use cases list */}
                <ul className="space-y-2">
                  {industry.useCases.map((useCase, idx) => (
                    <li key={idx} className="flex items-start text-sm text-slate-600">
                      <span className="text-teal-500 mr-2 mt-0.5">•</span>
                      <span>{useCase}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concrete Examples Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">
            Concrete voorbeelden uit de praktijk
          </h2>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">
            Deze AI-toepassingen kun je morgen al inzetten
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {concreteExamples.map((example) => (
              <div
                key={example.title}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Icon with gradient background */}
                <div className={`w-14 h-14 bg-gradient-to-br ${example.gradient} rounded-xl flex items-center justify-center mb-4 text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {example.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {example.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed">
                  {example.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-16 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">
            Bereken jouw potentiële besparing
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            Hoeveel tijd en geld kan AI jouw organisatie opleveren?
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
            {/* Input: Number of employees */}
            <div className="mb-8">
              <label className="block text-slate-700 font-semibold mb-3">
                Aantal medewerkers: <span className="text-teal-600">{employees}</span>
              </label>
              <input
                type="range"
                min="1"
                max="100"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                className="w-full h-2 bg-gradient-to-r from-teal-200 to-purple-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>1</span>
                <span>100</span>
              </div>
            </div>

            {/* Input: Hourly rate */}
            <div className="mb-8">
              <label className="block text-slate-700 font-semibold mb-3">
                Gemiddeld uurloon (€)
              </label>
              <input
                type="number"
                min="20"
                max="200"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full px-4 py-3 border-2 border-slate-200 rounded-lg focus:border-teal-500 focus:outline-none text-slate-900 font-semibold"
              />
            </div>

            {/* Result Card */}
            <div className="bg-gradient-to-br from-teal-500 via-cyan-500 to-purple-500 rounded-2xl p-8 text-center shadow-2xl">
              <p className="text-white/90 text-sm font-semibold mb-2 uppercase tracking-wide">
                Potentiële maandelijkse besparing
              </p>
              <p className="text-5xl md:text-6xl font-bold text-white mb-4">
                €{monthlySavings.toLocaleString('nl-NL')}
              </p>
              <p className="text-white/80 text-sm">
                Gebaseerd op gemiddeld 5 uur tijdsbesparing per medewerker per week
              </p>
            </div>

            {/* Additional info */}
            <div className="mt-6 p-4 bg-slate-50 rounded-lg">
              <p className="text-sm text-slate-600 text-center">
                <span className="font-semibold">Dit berekent:</span> {employees} medewerkers × €{hourlyRate}/uur × 5 uur/week × 4 weken = €{monthlySavings.toLocaleString('nl-NL')}/maand
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400 to-cyan-400 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Benieuwd wat AI voor jouw bedrijf kan betekenen?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Plan een gratis AI Readiness Scan en ontdek jouw potentieel
          </p>
          <Link
            to="/contact"
            className="inline-block group relative bg-gradient-to-r from-teal-500 via-cyan-500 to-purple-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">Plan je gratis AI Readiness Scan →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
        </div>
      </section>
    </div>
  );
};
