const PAIN_POINTS = [
  'Elke week uren kwijt aan rapporten en e-mails die ook automatisch kunnen.',
  'Copy-paste werk dat je team frustreert en fouten oplevert.',
  'Concurrenten gaan sneller, maar je weet niet waar je moet beginnen.',
];

export default function PainSection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black tracking-[-0.03em] text-[#0d0d0d] mb-4">
          Herken jij dit?
        </h2>
        <p className="text-slate-500 text-lg mb-12 max-w-lg">
          De meeste MKB-bedrijven laten dagelijks uren liggen. Niet door gebrek aan ambitie — maar omdat niemand ze heeft geholpen dit anders in te richten.
        </p>

        <div className="space-y-4 mb-12">
          {PAIN_POINTS.map((point, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-5 rounded-2xl border border-slate-100 bg-slate-50 hover:border-slate-200 transition-colors"
            >
              <span className="w-6 h-6 rounded-full bg-red-100 text-red-500 flex items-center justify-center text-xs font-black flex-shrink-0 mt-0.5">
                ✕
              </span>
              <p className="text-[17px] text-slate-700 font-medium leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl px-6 py-5 inline-flex items-center gap-3">
          <span className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-black flex-shrink-0">
            ✓
          </span>
          <p className="text-emerald-800 font-semibold">
            Enable Flow pakt dit aan. Hands-on, persoonlijk, in Noord-Nederland.
          </p>
        </div>
      </div>
    </section>
  );
}
