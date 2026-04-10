import React from 'react';

export const SubsidieSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-violet-50 to-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-violet-100 rounded-full blur-3xl opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-100 rounded-full blur-3xl opacity-30 pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-violet-100">
          <div className="grid md:grid-cols-2 gap-0">

            {/* Links: content */}
            <div className="p-10 md:p-12">
              <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full mb-6">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Subsidie Groningen
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Tot 50% vergoed via MKB subsidie
              </h2>

              <p className="text-slate-600 mb-6 leading-relaxed">
                Groningse ondernemers kunnen via de <strong>MKB Digitalisering & Robotisering subsidie</strong> tot <strong>€100.000</strong> aanvragen voor AI-implementatie — met 50% kostenvergoeding. De deadline is <strong>oktober 2026</strong>.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700 text-sm">Tot €100.000 subsidie voor Groningse MKB-bedrijven</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700 text-sm">50% van de kosten worden vergoed</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-violet-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-slate-700 text-sm">Ik help bij de aanvraag — van A tot Z</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <span className="text-slate-700 text-sm font-medium text-teal-700">Deadline: oktober 2026 — wacht niet te lang</span>
                </li>
              </ul>

              <a
                href="https://calendly.com/enableflow-info/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white px-7 py-3.5 rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-200"
              >
                Vraag gratis subsidiecheck aan →
              </a>
            </div>

            {/* Rechts: rekenvoorbeeld */}
            <div className="bg-gradient-to-br from-violet-600 to-violet-700 p-10 md:p-12 text-white flex flex-col justify-center">
              <p className="text-violet-200 text-sm font-semibold uppercase tracking-wider mb-6">Rekenvoorbeeld</p>

              <div className="space-y-4 mb-8">
                <div className="bg-white/10 rounded-2xl p-5">
                  <p className="text-violet-200 text-xs mb-1">AI implementatietraject</p>
                  <p className="text-white text-2xl font-bold">€10.000</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-px bg-white/20"></div>
                  <span className="text-violet-300 text-sm">50% subsidie</span>
                  <div className="flex-1 h-px bg-white/20"></div>
                </div>
                <div className="bg-white/20 rounded-2xl p-5 border border-white/30">
                  <p className="text-violet-200 text-xs mb-1">Jij betaalt effectief</p>
                  <p className="text-white text-3xl font-bold">€5.000</p>
                  <p className="text-violet-200 text-xs mt-1">+ terugverdientijd gemiddeld 6 maanden</p>
                </div>
              </div>

              <p className="text-violet-200 text-sm leading-relaxed">
                Ben je gevestigd in Groningen? Dan is de kans groot dat je in aanmerking komt. Vraag nu een gratis check aan.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
