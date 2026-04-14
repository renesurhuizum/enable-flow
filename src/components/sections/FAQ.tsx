import { useState } from 'react';

const FAQS = [
  {
    question: 'Wat kost een traject bij Enable Flow?',
    answer:
      'We starten altijd met een AI Strategiesessie (€395). René komt bij je langs, analyseert jouw processen, en geeft je een concreet plan. Op basis daarvan kies je voor een Starter-pakket (€995 éénmalig) of een doorlopend Partnership (€495/maand). Mogelijk deels vergoed via subsidie.',
  },
  {
    question: 'Hoe snel zie ik resultaat?',
    answer:
      'Na de Strategiesessie heb je direct inzicht in jouw AI-kansen. De eerste werkende automatisering is doorgaans live binnen 2 weken na de Starter.',
  },
  {
    question: 'Moet ik al Microsoft 365 of andere tools hebben?',
    answer:
      'Niet verplicht, maar wel handig. We werken met de tools die jouw team al kent — van Microsoft 365 tot n8n en ChatGPT. Wat je mist, helpen we je aanschaffen.',
  },
  {
    question: 'Kom je ook op locatie?',
    answer:
      'Ja, voor klanten in Noord-Nederland komen we altijd op locatie. Dat is voor ons geen uitzondering maar de norm — persoonlijk contact maakt het verschil.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-black tracking-[-0.03em] text-[#0d0d0d] mb-8">
          Veelgestelde vragen
        </h2>
        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-slate-50 transition-colors"
              >
                <span className="text-sm font-semibold text-[#0d0d0d] pr-4">{faq.question}</span>
                <span className="text-slate-400 flex-shrink-0 text-sm">
                  {open === i ? '−' : '+'}
                </span>
              </button>
              {open === i && (
                <div className="px-5 pb-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
