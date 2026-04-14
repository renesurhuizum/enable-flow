import React from 'react';
import { Link } from 'react-router-dom';
import CTASection from '../components/sections/CTASection';

const TASK_TYPES = [
  {
    id: 'communicatie',
    title: 'Communicatie automatiseren',
    subtitle: 'Stop met handmatig schrijven — laat AI de concepten maken.',
    colorBg: 'bg-emerald-50',
    colorBorder: 'border-emerald-200',
    colorBadge: 'bg-emerald-100 text-emerald-700',
    colorHeading: 'text-emerald-700',
    useCases: [
      {
        id: 'email-drafting',
        name: 'E-mail drafting',
        tool: 'Microsoft Copilot',
        saving: '−3u/week',
        description:
          'Automatisch concept-e-mails in Outlook op basis van een korte briefing. In jouw schrijfstijl, direct verstuurbaar.',
      },
      {
        id: 'vergadernotities',
        name: 'Vergadernotities',
        tool: 'Teams Copilot',
        saving: '−2u/week',
        description:
          'Vergaderingen automatisch samenvatten met actiepunten, besluiten en follow-ups — direct na afloop klaar.',
      },
      {
        id: 'klantcommunicatie',
        name: 'Klantcommunicatie',
        tool: 'ChatGPT / Claude',
        saving: '−2u/week',
        description:
          'Standaard klantberichten, offertebevestigingen en follow-ups automatisch opstellen op basis van jouw inputs.',
      },
    ],
  },
  {
    id: 'data',
    title: 'Data & rapportage',
    subtitle: 'Van ruwe data naar bruikbaar inzicht, zonder formule-kennis.',
    colorBg: 'bg-blue-50',
    colorBorder: 'border-blue-200',
    colorBadge: 'bg-blue-100 text-blue-700',
    colorHeading: 'text-blue-700',
    useCases: [
      {
        id: 'excel-analyses',
        name: 'Excel-analyses',
        tool: 'Copilot + Excel',
        saving: '−1.5u/week',
        description:
          'Stel vragen in gewoon Nederlands aan je spreadsheet. Draaitabellen, grafieken en inzichten zonder formules.',
      },
      {
        id: 'voortgangsrapportages',
        name: 'Voortgangsrapportages',
        tool: 'Copilot + Word',
        saving: '−1u/week',
        description:
          'Wekelijkse of maandelijkse rapportages automatisch genereren op basis van bestaande data.',
      },
      {
        id: 'klantinzichten',
        name: 'Klantinzichten',
        tool: 'Claude / ChatGPT',
        saving: '−1.5u/week',
        description:
          'Analyseer klantfeedback, reviews en enquêtes op schaal. Ontdek trends en verbeterpunten in minuten.',
      },
    ],
  },
  {
    id: 'documenten',
    title: 'Documenten & content',
    subtitle: 'Professionele documenten in minuten, in jouw eigen stijl.',
    colorBg: 'bg-violet-50',
    colorBorder: 'border-violet-200',
    colorBadge: 'bg-violet-100 text-violet-700',
    colorHeading: 'text-violet-700',
    useCases: [
      {
        id: 'presentaties',
        name: 'Presentaties',
        tool: 'PowerPoint + AI',
        saving: '−2u/week',
        description:
          'Professionele slides op basis van een briefing of bestaand document. Visueel opgemaakt, direct bruikbaar.',
      },
      {
        id: 'offertes',
        name: 'Offertes & voorstellen',
        tool: 'Word + AI',
        saving: '−1.5u/week',
        description:
          'Gepersonaliseerde offertes en projectvoorstellen in minuten — consistent, professioneel en in jouw tone.',
      },
      {
        id: 'handleidingen',
        name: 'Handleidingen & procedures',
        tool: 'ChatGPT / Copilot',
        saving: '−1u/week',
        description:
          'Interne documentatie, handleidingen en procedures snel opstellen of updaten.',
      },
    ],
  },
  {
    id: 'processen',
    title: 'Processen verbinden',
    subtitle: 'Zet repetitief werk op de automatische piloot.',
    colorBg: 'bg-amber-50',
    colorBorder: 'border-amber-200',
    colorBadge: 'bg-amber-100 text-amber-700',
    colorHeading: 'text-amber-700',
    useCases: [
      {
        id: 'crm-koppelingen',
        name: 'CRM-koppelingen',
        tool: 'n8n + AI',
        saving: '−3u/week',
        description:
          'Verbind je CRM, e-mail en boekhouding automatisch. Nieuwe leads worden direct verwerkt zonder handmatig werk.',
      },
      {
        id: 'automatische-triggers',
        name: 'Automatische triggers',
        tool: 'n8n + Make',
        saving: '−2u/week',
        description:
          'Stel workflows in die automatisch starten bij specifieke events — nieuwe order, ingevuld formulier, ontvangen e-mail.',
      },
      {
        id: 'factuurverwerking',
        name: 'Factuurverwerking',
        tool: 'n8n + AI',
        saving: '−1.5u/week',
        description:
          'Inkomende facturen automatisch herkennen, categoriseren en doorsturen naar de juiste persoon of systeem.',
      },
    ],
  },
] as const;

export const UseCasesPage = () => {
  return (
    <div className="min-h-screen bg-white">

      {/* 01 — Hero */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-xs font-bold tracking-[0.12em] uppercase text-emerald-600 mb-4">
            Use Cases
          </p>
          <h1 className="text-4xl md:text-5xl font-black leading-[1.05] tracking-[-0.04em] text-[#0d0d0d] mb-6">
            Wat wij voor jouw team automatiseren.
          </h1>
          <p className="text-lg text-[#555] leading-[1.7] max-w-2xl mx-auto">
            Concrete toepassingen met meetbare tijdsbesparing — geen theorie, maar resultaten die je morgen al kunt inzetten.
          </p>
        </div>
      </section>

      {/* 02 — Taaktype-secties */}
      <div className="divide-y divide-slate-100">
        {TASK_TYPES.map((type) => (
          <section key={type.id} className="py-16 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8">
                <h2 className={`text-2xl font-black tracking-[-0.04em] mb-2 ${type.colorHeading}`}>
                  {type.title}
                </h2>
                <p className="text-[#555]">{type.subtitle}</p>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {type.useCases.map((uc) => (
                  <div
                    key={uc.id}
                    className={`rounded-2xl p-6 border ${type.colorBg} ${type.colorBorder}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-bold text-[#0d0d0d] text-base">{uc.name}</h3>
                      <span
                        className={`text-xs font-bold px-2 py-1 rounded-full flex-shrink-0 ml-2 ${type.colorBadge}`}
                      >
                        {uc.saving}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 font-medium mb-3">{uc.tool}</p>
                    <p className="text-[#555] text-sm leading-[1.7]">{uc.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* 03 — Callout */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-[#0d0d0d] mb-1">
                Niet gevonden wat je zoekt?
              </p>
              <p className="text-[#555] text-sm">
                Elke organisatie heeft unieke processen. René kijkt graag mee wat er bij jou mogelijk is.
              </p>
            </div>
            <Link
              to="/scan"
              className="flex-shrink-0 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-3 rounded-[10px] font-bold text-sm shadow-[0_4px_18px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_24px_rgba(16,185,129,0.45)] transition-shadow whitespace-nowrap"
            >
              Plan een gratis scan <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 04 — CTA */}
      <CTASection />

    </div>
  );
};
