const STEPS = [
  {
    num: '01',
    title: 'Gratis scan',
    duration: '~1 uur',
    description:
      'René brengt jouw processen in kaart en identificeert de drie grootste AI-kansen. Je krijgt direct een concrete ROI-inschatting.',
  },
  {
    num: '02',
    title: 'Plan op maat',
    duration: '1 week',
    description:
      'Op basis van de scan ontwerpt René een concreet automatiseringsplan — welke tools, welke processen, in welke volgorde.',
  },
  {
    num: '03',
    title: 'Live automatisering',
    duration: '1–2 weken',
    description:
      'We implementeren, testen en trainen jouw team. Je gaat live met werkende automatiseringen — geen proof of concept, maar écht resultaat.',
  },
];

export default function ProcessSection() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black tracking-[-0.03em] text-[#0d0d0d] mb-4">
          Van scan naar resultaat in 3 stappen
        </h2>
        <p className="text-slate-500 text-lg mb-14 max-w-lg">
          Geen langlopende trajecten. Geen eindeloze adviesronden. Concrete resultaten vanaf week één.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {STEPS.map(step => (
            <div key={step.num}>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-emerald-600 text-white text-sm font-black flex items-center justify-center tracking-tight">
                  {step.num}
                </span>
                <span className="inline-flex items-center bg-white border border-slate-200 rounded-full px-3 py-1 text-xs font-semibold text-slate-500">
                  {step.duration}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#0d0d0d] mb-2">{step.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <a
          href="/scan"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-emerald-500/30 hover:opacity-90 transition-opacity"
        >
          Begin met de gratis scan →
        </a>
      </div>
    </section>
  );
}
