export default function CTASection() {
  return (
    <section className="bg-[#0d0d0d] py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-black tracking-[-0.03em] text-white mb-4">
              Klaar om te starten?
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-md leading-relaxed">
              René belt je terug binnen 24 uur. Gratis en vrijblijvend — geen verkoopgesprek, maar een eerlijk gesprek over wat AI voor jouw bedrijf kan doen.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/scan"
                className="bg-gradient-to-r from-emerald-600 to-emerald-500 text-white px-6 py-3.5 rounded-xl text-sm font-bold shadow-lg shadow-emerald-500/25 hover:opacity-90 transition-opacity"
              >
                Doe de gratis scan →
              </a>
              <a
                href="https://calendly.com/enableflow-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 text-white px-6 py-3.5 rounded-xl text-sm font-bold hover:bg-white/5 transition-colors"
              >
                Plan een gesprek
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img
              src="/images/rene-profile.jpeg"
              alt="René de Boer — Enable Flow"
              className="w-24 h-24 rounded-full object-cover border-2 border-white/10"
            />
            <div className="text-center">
              <div className="text-sm font-bold text-white">René de Boer</div>
              <div className="text-xs text-white/40">Oprichter · Enable Flow</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
