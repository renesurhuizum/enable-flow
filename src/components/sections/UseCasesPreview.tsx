import { Link } from 'react-router-dom';

const USE_CASES = [
  { icon: '📧', name: 'E-mail drafting',       tool: 'Microsoft Copilot 365', saving: '−3u/week', color: 'cyan' },
  { icon: '🎙️', name: 'Vergadernotities',      tool: 'Teams Copilot',         saving: '−2u/week', color: 'violet' },
  { icon: '📊', name: 'Data-analyse',           tool: 'Excel + AI',            saving: '−1.5u/week', color: 'blue' },
  { icon: '📄', name: 'Document creatie',       tool: 'Word/PowerPoint + AI',  saving: '−2u/week', color: 'indigo' },
  { icon: '💡', name: 'Klantinzichten',         tool: 'Claude / ChatGPT',      saving: '−1.5u/week', color: 'amber' },
  { icon: '⚙️', name: 'Procesautomatisering',  tool: 'n8n + AI',              saving: '−3u/week', color: 'emerald' },
];

const COLOR_MAP: Record<string, { bg: string; badge: string; icon: string }> = {
  cyan:    { bg: 'bg-cyan-50 border-cyan-200',     badge: 'bg-cyan-100 text-cyan-700',     icon: 'bg-cyan-500/15' },
  violet:  { bg: 'bg-violet-50 border-violet-200', badge: 'bg-violet-100 text-violet-700', icon: 'bg-violet-500/15' },
  blue:    { bg: 'bg-blue-50 border-blue-200',     badge: 'bg-blue-100 text-blue-700',     icon: 'bg-blue-500/15' },
  indigo:  { bg: 'bg-indigo-50 border-indigo-200', badge: 'bg-indigo-100 text-indigo-700', icon: 'bg-indigo-500/15' },
  amber:   { bg: 'bg-amber-50 border-amber-200',   badge: 'bg-amber-100 text-amber-700',   icon: 'bg-amber-500/15' },
  emerald: { bg: 'bg-emerald-50 border-emerald-200', badge: 'bg-emerald-100 text-emerald-700', icon: 'bg-emerald-500/15' },
};

export default function UseCasesPreview() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black tracking-[-0.03em] text-[#0d0d0d] mb-3">
          Wat we voor jouw team automatiseren
        </h2>
        <p className="text-slate-500 text-lg mb-12 max-w-lg">
          Concrete voorbeelden met meetbare tijdsbesparing.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {USE_CASES.map(uc => {
            const c = COLOR_MAP[uc.color];
            return (
              <div
                key={uc.name}
                className={`border rounded-2xl p-5 flex items-center gap-4 ${c.bg}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0 ${c.icon}`}>
                  {uc.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-bold text-[#0d0d0d] truncate">{uc.name}</div>
                  <div className="text-xs text-slate-500 mt-0.5 truncate">{uc.tool}</div>
                </div>
                <span className={`text-xs font-bold px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0 ${c.badge}`}>
                  {uc.saving}
                </span>
              </div>
            );
          })}
        </div>

        <Link
          to="/use-cases"
          className="text-sm font-semibold text-emerald-600 hover:text-emerald-700 border-b-2 border-emerald-300 pb-0.5 transition-colors"
        >
          Bekijk alle use cases →
        </Link>
      </div>
    </section>
  );
}
