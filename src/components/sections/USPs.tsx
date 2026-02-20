import React from 'react';

export const USPs = () => {
  return (
    <section className="py-20 px-4 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Waarom kiezen voor ons?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Lokaal, persoonlijk en resultaatgericht — AI-begeleiding zoals het hoort.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* USP 1 */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Lokaal & Persoonlijk</h3>
            <p className="text-slate-600 text-sm">Noord-Nederland, wij komen langs</p>
          </div>

          {/* USP 2 */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-600 rounded-2xl mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Hands-on</h3>
            <p className="text-slate-600 text-sm">Niet alleen advies, ook implementatie</p>
          </div>

          {/* USP 3 */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-violet-600 rounded-2xl mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Geen AI-hype</h3>
            <p className="text-slate-600 text-sm">Nuchter, eerlijk over wat AI wel/niet kan</p>
          </div>

          {/* USP 4 */}
          <div className="text-center group">
            <div className="w-16 h-16 bg-gradient-to-br from-teal-400 to-teal-500 rounded-2xl mx-auto mb-4 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-slate-900 mb-2">Betaalbaar</h3>
            <p className="text-slate-600 text-sm">Flexibele tarieven voor MKB</p>
          </div>
        </div>
      </div>
    </section>
  );
};
