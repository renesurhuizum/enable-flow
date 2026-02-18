import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-sky-50 to-white relative overflow-hidden">
      {/* Subtle warm background shape */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-60"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-4">
          Noord-Nederland
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Supercharge the way you work
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Slimmer werken met AI — voor Noord-Nederlandse ondernemers. Praktische begeleiding bij Microsoft Copilot 365, Claude en Gemini.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Gratis AI Consult →
          </Link>
          <Link
            to="/contact"
            className="bg-white text-slate-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-slate-200 hover:border-teal-400 hover:text-teal-700 hover:shadow-md transition-all duration-200"
          >
            AI Readiness Scan →
          </Link>
        </div>
        <p className="mt-6 text-sm text-slate-500">
          Gratis & vrijblijvend · Lokaal in Noord-Nederland · Reactie binnen 24 uur
        </p>
      </div>
    </section>
  );
};
