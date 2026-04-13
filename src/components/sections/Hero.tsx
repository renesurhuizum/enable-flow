import ROICard from './ROICard';

export default function Hero() {
  return (
    <section className="bg-white pt-16 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_420px] gap-14 items-start">

          {/* ── LEFT ───────────────────────────────── */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-3.5 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-bold text-emerald-700 tracking-wide">
                Hands-on AI · Noord-Nederland
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-[-0.04em] text-[#0d0d0d] mb-5">
              Stop met<br />
              handmatig<br />
              <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                werk doen.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-slate-500 leading-relaxed max-w-md mb-9">
              Enable Flow implementeert AI-automatisering die écht werkt voor
              jouw bedrijf — persoonlijk begeleid, hands-on, en zonder gedoe.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-4">
              <a
                href="/scan"
                className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-emerald-500/30 hover:opacity-90 transition-opacity"
              >
                Doe de gratis scan →
              </a>
              <a
                href="https://calendly.com/enableflow-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-[#0d0d0d] hover:text-emerald-600 transition-colors"
              >
                <span className="w-7 h-7 rounded-full border border-slate-200 flex items-center justify-center text-xs">
                  ▶
                </span>
                Plan een gesprek
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 mt-10 pt-8 border-t border-slate-100">
              <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
                <div className="text-2xl font-black tracking-tight text-emerald-700">
                  5<span className="text-base font-bold">+ uur</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1 leading-snug font-medium">
                  bespaard per<br />medewerker/week
                </div>
              </div>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="text-2xl font-black tracking-tight text-blue-700">
                  2<span className="text-base font-bold"> wk</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1 leading-snug font-medium">
                  naar eerste werkende<br />automatisering
                </div>
              </div>
              <div className="bg-violet-50 border border-violet-200 rounded-xl p-4">
                <div className="text-2xl font-black tracking-tight text-violet-700">
                  12<span className="text-base font-bold">+</span>
                </div>
                <div className="text-[11px] text-slate-500 mt-1 leading-snug font-medium">
                  bedrijven in Noord-NL<br />gingen je voor
                </div>
              </div>
            </div>
          </div>

          {/* ── RIGHT ──────────────────────────────── */}
          <div className="lg:pt-2">
            <ROICard />
          </div>

        </div>
      </div>
    </section>
  );
}
