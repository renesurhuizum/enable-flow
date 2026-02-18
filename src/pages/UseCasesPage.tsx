import React from 'react';
import { Link } from 'react-router-dom';
import { ROICalculator } from '../components/sections/ROICalculator';

const industries = [
  {
    name: 'Sales & Marketing',
    gradient: 'from-teal-400 via-teal-500 to-teal-600',
    icon: '📈',
    description: 'AI transformeert sales en marketing door patronen te herkennen in klantgedrag, campagnes te personaliseren en leads sneller te converteren. Van automatische follow-up emails tot predictive lead scoring.',
    useCases: [
      {
        title: 'Lead generation & nurturing',
        detail: 'AI analyseert website-bezoekers en social media interacties om warme leads te identificeren. Copilot helpt bij het schrijven van gepersonaliseerde outreach berichten.',
      },
      {
        title: 'Geautomatiseerde email campaigns',
        detail: 'Laat AI de beste verzendtijd, onderwerpregel en content bepalen. A/B testing wordt automatisch uitgevoerd en geoptimaliseerd.',
      },
      {
        title: 'Content creatie voor social media',
        detail: 'Genereer social media posts, blog artikelen en ad copy in jouw tone-of-voice. Claude en ChatGPT leveren consistente content op schaal.',
      },
      {
        title: 'Sales forecasting',
        detail: 'Voorspel omzet nauwkeuriger met AI-modellen die historische data, seizoenspatronen en markttrends combineren.',
      },
    ],
  },
  {
    name: 'Customer Service',
    gradient: 'from-violet-400 via-violet-500 to-violet-600',
    icon: '💬',
    description: 'Verbeter klanttevredenheid en verkort wachttijden met AI-ondersteunde klantenservice. Van slimme chatbots tot real-time sentiment analyse die je team helpt om klanten beter te bedienen.',
    useCases: [
      {
        title: '24/7 chatbot ondersteuning',
        detail: 'Een AI-chatbot beantwoordt veelgestelde vragen direct, escaleert complexe vragen naar je team, en leert continu bij van eerdere interacties.',
      },
      {
        title: 'Ticket classificatie & routing',
        detail: 'AI categoriseert inkomende tickets automatisch op urgentie en onderwerp, en stuurt ze door naar de juiste medewerker.',
      },
      {
        title: 'Sentiment analyse',
        detail: 'Detecteer ontevreden klanten vroegtijdig door AI-analyse van e-mails, reviews en social media berichten. Voorkom churn door proactief te handelen.',
      },
      {
        title: 'Antwoord suggesties voor support teams',
        detail: 'Copilot geeft je support medewerkers real-time suggesties voor antwoorden, gebaseerd op de kennisbank en eerdere oplossingen.',
      },
    ],
  },
  {
    name: 'Operations & Finance',
    gradient: 'from-rose-400 via-rose-500 to-rose-600',
    icon: '💼',
    description: 'Stroomlijn je financiële processen en operaties met AI. Van automatische factuurverwerking tot geavanceerde budgetvoorspellingen — bespaar uren per week op administratieve taken.',
    useCases: [
      {
        title: 'Factuurverwerking',
        detail: 'AI leest en verwerkt facturen automatisch: herkent bedragen, BTW-nummers en leveranciers. Voorkom menselijke fouten en bespaar uren invoerwerk.',
      },
      {
        title: 'Contract analyse',
        detail: 'Laat AI contracten scannen op risico\'s, deadlines en afwijkende clausules. Binnen minuten een samenvatting van een contract van 50 pagina\'s.',
      },
      {
        title: 'Data-entry automatisering',
        detail: 'Automatiseer het overzetten van data tussen systemen. AI herkent patronen en vult formulieren, spreadsheets en databases automatisch in.',
      },
      {
        title: 'Budget forecasting',
        detail: 'AI combineert historische uitgaven, geplande projecten en marktdata voor nauwkeurigere budgetprognoses. Zie afwijkingen maanden eerder aankomen.',
      },
    ],
  },
  {
    name: 'HR & Recruitment',
    gradient: 'from-cyan-400 via-cyan-500 to-cyan-600',
    icon: '👥',
    description: 'Van werving tot onboarding: AI maakt HR-processen efficiënter en eerlijker. Bespaar tijd op administratieve taken en focus op wat echt telt — je mensen.',
    useCases: [
      {
        title: 'CV screening',
        detail: 'AI scant honderden CV\'s in minuten en matcht kandidaten op basis van vaardigheden, ervaring en cultuurfit. Objectiever en sneller dan handmatige screening.',
      },
      {
        title: 'Interview scheduling',
        detail: 'Automatiseer het plannen van interviews door agenda\'s te synchroniseren, beschikbaarheid te checken en uitnodigingen te versturen.',
      },
      {
        title: 'Onboarding documentatie',
        detail: 'Genereer gepersonaliseerde onboarding pakketten per functie. AI stelt de juiste handleidingen, trainingen en checklists samen.',
      },
      {
        title: 'Employee feedback analyse',
        detail: 'Analyseer medewerkerstevredenheids-enquêtes met AI om trends, verbeterpunten en quick wins te identificeren. Anoniem en objectief.',
      },
    ],
  },
];

const concreteExamples = [
  {
    title: 'Email Drafting',
    description: 'Automatisch concept emails in Outlook met Copilot. Van klantcommunicatie tot interne updates — in je eigen schrijfstijl.',
    icon: '✉️',
    gradient: 'from-teal-500 to-cyan-500',
    tool: 'Microsoft Copilot 365',
  },
  {
    title: 'Meeting Notes',
    description: 'Vergaderingen automatisch samenvatten in Teams. Inclusief actiepunten, besluiten en follow-ups — direct na de meeting klaar.',
    icon: '📝',
    gradient: 'from-violet-500 to-rose-500',
    tool: 'Microsoft Copilot 365',
  },
  {
    title: 'Data Analysis',
    description: 'Excel rapporten genereren met één prompt. Draaitabellen, grafieken en inzichten — zonder formule-kennis. Stel vragen in gewoon Nederlands.',
    icon: '📊',
    gradient: 'from-rose-500 to-rose-500',
    tool: 'Microsoft Copilot 365',
  },
  {
    title: 'Document Creation',
    description: 'Professionele presentaties en rapporten maken in minuten. PowerPoint slides, Word documenten en proposals op basis van je briefing.',
    icon: '📄',
    gradient: 'from-cyan-500 to-blue-500',
    tool: 'Microsoft Copilot 365',
  },
  {
    title: 'Customer Insights',
    description: 'Klantfeedback analyseren en trends ontdekken. AI leest duizenden reviews, e-mails en enquêtes om actionable insights te geven.',
    icon: '💡',
    gradient: 'from-teal-400 to-cyan-500',
    tool: 'Claude / ChatGPT',
  },
  {
    title: 'Process Automation',
    description: 'Repetitieve taken automatiseren met AI workflows via n8n. Verbind je CRM, email, boekhouding en meer in slimme automatiseringen.',
    icon: '⚡',
    gradient: 'from-indigo-500 to-violet-500',
    tool: 'n8n + AI',
  },
];

export const UseCasesPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-violet-50">
      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-300 to-rose-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-300 to-cyan-300 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-3">
            AI Use Cases
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            AI Use Cases voor jouw bedrijf
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Ontdek hoe AI jouw dagelijkse processen kan automatiseren en je team productiever maakt. Van sales tot HR — concrete voorbeelden die je morgen al kunt inzetten.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">Sales & Marketing</span>
            <span className="bg-violet-100 text-violet-700 px-4 py-2 rounded-full text-sm font-medium">Customer Service</span>
            <span className="bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">Operations & Finance</span>
            <span className="bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium">HR & Recruitment</span>
          </div>
        </div>
      </section>

      {/* Use Cases by Industry - Expanded */}
      <section className="py-16 px-4 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              AI toepassingen per afdeling
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Elke afdeling heeft unieke kansen voor AI-implementatie. Hieronder vind je concrete toepassingen met uitleg hoe ze werken en wat ze opleveren.
            </p>
          </div>

          <div className="space-y-16">
            {industries.map((industry) => (
              <div key={industry.name} className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200">
                {/* Industry header */}
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${industry.gradient} rounded-2xl flex items-center justify-center text-3xl shadow-lg flex-shrink-0`}>
                    {industry.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      {industry.name}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </div>

                {/* Use cases grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {industry.useCases.map((useCase, idx) => (
                    <div key={idx} className="bg-slate-50 rounded-xl p-5 border border-slate-100 hover:border-slate-200 transition-colors">
                      <h4 className="font-bold text-slate-900 mb-2 flex items-start gap-2">
                        <span className="text-teal-500 mt-0.5">→</span>
                        {useCase.title}
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {useCase.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Concrete Examples Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-teal-400 uppercase tracking-wider mb-2">
              Praktijkvoorbeelden
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Concrete voorbeelden uit de praktijk
            </h2>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Deze AI-toepassingen kun je morgen al inzetten. Geen maandenlange implementaties, maar directe resultaten.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {concreteExamples.map((example) => (
              <div
                key={example.title}
                className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className={`w-14 h-14 bg-gradient-to-br ${example.gradient} rounded-xl flex items-center justify-center mb-4 text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {example.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {example.title}
                </h3>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-3">
                  {example.description}
                </p>

                {/* Tool badge */}
                <span className="inline-block bg-white/10 text-white/80 text-xs px-3 py-1 rounded-full border border-white/20">
                  {example.tool}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator - Reusable component */}
      <ROICalculator showCTA={false} />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-violet-400 to-rose-400 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400 to-cyan-400 rounded-full blur-3xl opacity-20"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Benieuwd wat AI voor jouw bedrijf kan betekenen?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Plan een gratis AI Readiness Scan en ontdek jouw potentieel. Binnen 48 uur ontvang je een persoonlijk rapport met concrete aanbevelingen.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-block group relative bg-gradient-to-r from-teal-500 via-cyan-500 to-violet-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Plan je gratis AI Readiness Scan →</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-rose-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link
              to="/contact"
              className="inline-block bg-white/10 backdrop-blur-sm text-white px-10 py-4 rounded-full font-semibold text-lg border border-white/30 hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              Of plan een gratis consult
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
