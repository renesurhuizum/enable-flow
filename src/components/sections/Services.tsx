const SERVICES = [
  {
    name: 'AI Strategiesessie',
    price: '€395',
    period: 'éénmalig',
    tagline: 'René analyseert jouw processen persoonlijk en laat zien wat AI concreet oplevert.',
    features: [
      'René komt bij je langs op locatie',
      'Analyse van jouw processen & AI-kansen',
      'Concreet implementatieplan met ROI',
      'Geen vage rapporten — direct actiegericht',
    ],
    cta: 'Plan een Strategiesessie',
    href: 'https://calendly.com/enableflow-info/30min',
    highlight: false,
  },
  {
    name: 'AI Starter',
    price: '€995',
    period: 'éénmalig',
    tagline: 'Jouw eerste automatisering live in 2 weken.',
    features: [
      'Alles uit de Strategiesessie',
      'Implementatie van 1–2 automatiseringen',
      'Training van jouw team',
      '30 dagen nazorg',
    ],
    cta: 'Start met AI Starter',
    href: '/scan',
    highlight: true,
    badge: '⭐ Meest gekozen',
  },
  {
    name: 'AI Partnership',
    price: '€495',
    period: '/maand',
    tagline: 'Continue AI-begeleiding terwijl je bedrijf groeit.',
    features: [
      'Doorlopende implementatie & optimalisatie',
      'Maandelijkse voortgangssessie',
      'Team-trainingen op aanvraag',
      'Prioriteits-support',
    ],
    cta: 'Bespreek Partnership',
    href: 'https://calendly.com/enableflow-info/30min',
    highlight: false,
  },
] as const;

export default function Services() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black tracking-[-0.03em] text-[#0d0d0d] mb-3">
          Kies wat bij je past
        </h2>
        <p className="text-slate-500 text-lg mb-14 max-w-lg">
          Van een eerste verkenning tot een vaste AI-partner. Altijd persoonlijk begeleid door René.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {SERVICES.map(s => (
            <div
              key={s.name}
              className={`relative bg-white rounded-2xl p-6 flex flex-col border transition-shadow hover:shadow-lg ${
                s.highlight
                  ? 'border-emerald-400 shadow-md ring-1 ring-emerald-400/30 md:scale-[1.03]'
                  : 'border-slate-200'
              }`}
            >
              {s.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                  {s.badge}
                </span>
              )}

              <div className="mb-4">
                <div className="text-xs font-bold tracking-widest uppercase text-slate-400 mb-1">{s.name}</div>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-black tracking-tight text-[#0d0d0d]">{s.price}</span>
                  <span className="text-sm text-slate-500">{s.period}</span>
                </div>
              </div>

              <p className="text-sm font-semibold text-[#0d0d0d] mb-4 leading-snug">{s.tagline}</p>

              <ul className="space-y-2.5 mb-6 flex-1">
                {s.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-slate-600">
                    <span className="text-emerald-500 font-bold mt-0.5 flex-shrink-0">✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`block text-center py-3 rounded-xl text-sm font-bold transition-opacity hover:opacity-90 ${
                  s.highlight
                    ? 'bg-gradient-to-r from-emerald-600 to-emerald-500 text-white shadow-lg shadow-emerald-500/25'
                    : 'border-2 border-slate-200 text-[#0d0d0d] hover:border-emerald-300'
                }`}
              >
                {s.cta}
              </a>
            </div>
          ))}
        </div>

        <p className="text-xs text-slate-400 text-center">
          Mogelijk deels vergoed via subsidie.{' '}
          <a href="https://calendly.com/enableflow-info/30min" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-600">
            Vraag René ernaar
          </a>.
        </p>
      </div>
    </section>
  );
}
