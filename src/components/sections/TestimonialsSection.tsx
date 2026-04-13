export default function TestimonialsSection() {
  return (
    <section className="bg-violet-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black tracking-[-0.03em] text-[#0d0d0d] mb-3">
          Wat klanten zeggen
        </h2>
        <p className="text-slate-500 text-lg mb-12 max-w-lg">
          Noord-Nederlandse bedrijven die al werken met AI-automatisering van Enable Flow.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-7 border border-violet-200 shadow-sm">
            <div className="text-4xl text-violet-300 font-black leading-none mb-4">"</div>
            <p className="text-[17px] text-slate-700 leading-relaxed font-medium mb-5">
              Dankzij Enable Flow besparen we ruim 12 uur per week op administratieve taken. René heeft alles hands-on opgezet — binnen twee weken stonden de eerste automatiseringen live.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-violet-200 flex items-center justify-center text-sm font-bold text-violet-700">
                JD
              </div>
              <div>
                <div className="text-sm font-bold text-[#0d0d0d]">Jan de Vries</div>
                <div className="text-xs text-slate-500">Directeur · Voorbeeld BV, Groningen</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-7 border border-violet-200 shadow-sm">
            <div className="text-4xl text-violet-300 font-black leading-none mb-4">"</div>
            <p className="text-[17px] text-slate-700 leading-relaxed font-medium mb-5">
              Eindelijk iemand die niet alleen advies geeft maar ook echt implementeert. De ROI was binnen de eerste maand al duidelijk.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-violet-200 flex items-center justify-center text-sm font-bold text-violet-700">
                MK
              </div>
              <div>
                <div className="text-sm font-bold text-[#0d0d0d]">Maria Kuiper</div>
                <div className="text-xs text-slate-500">Operations Manager · Voorbeeld BV, Assen</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
