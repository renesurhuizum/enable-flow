const TOOLS = [
  'Microsoft 365',
  'Copilot',
  'n8n',
  'ChatGPT',
  'Claude',
  'Make',
];

export default function SocialProofBar() {
  return (
    <section className="bg-slate-50 border-y border-slate-100 py-6 px-4">
      <div className="max-w-6xl mx-auto">
        <p className="text-center text-xs font-semibold text-slate-400 tracking-widest uppercase mb-5">
          Wij werken met de tools die jouw team al kent
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {TOOLS.map(tool => (
            <span
              key={tool}
              className="text-sm font-bold text-slate-400 tracking-tight hover:text-slate-600 transition-colors"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
