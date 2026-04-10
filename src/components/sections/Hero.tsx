import React from 'react';
import { Link } from 'react-router-dom';
import { FlowBackground } from '../ui/FlowBackground';

export const Hero = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-sky-50 to-white relative overflow-hidden">
      {/* Animated SVG flow lines */}
      <FlowBackground />

      {/* Floating background blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50 animate-floatblob"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-sky-50 rounded-full blur-3xl opacity-60 animate-floatblob-alt"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-4">
          AI Consultancy voor MKB
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Laat AI het zware werk doen.
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Meer dan 5 uur tijdsbesparing per medewerker per week. Wij implementeren AI die écht werkt voor jouw bedrijf — hands-on, persoonlijk en zonder gedoe.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/enableflow-info/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-200"
          >
            Plan gratis kennismakingsgesprek →
          </a>
          <Link
            to="/scan"
            className="bg-white text-slate-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-slate-200 hover:border-teal-400 hover:text-teal-700 hover:shadow-md transition-all duration-200"
          >
            Doe de gratis Readiness Scan →
          </Link>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2">
            <span className="text-teal-600 font-bold text-lg">5+ uur/week</span>
            <span className="text-slate-500 text-sm">bespaard per medewerker</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-slate-200"></div>
          <div className="flex items-center gap-2">
            <span className="text-teal-600 font-bold text-lg">Gratis</span>
            <span className="text-slate-500 text-sm">Readiness Scan</span>
          </div>
          <div className="hidden sm:block w-px h-5 bg-slate-200"></div>
          <div className="flex items-center gap-2">
            <span className="text-teal-600 font-bold text-lg">Noord-Nederland</span>
            <span className="text-slate-500 text-sm">Op locatie bij je langs</span>
          </div>
        </div>
      </div>
    </section>
  );
};
