import React from 'react';
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Animated background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-300 to-cyan-300 rounded-full blur-3xl opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-purple-200 via-pink-200 to-cyan-200 rounded-full blur-3xl opacity-20"></div>

      {/* Floating gradient orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full blur-2xl opacity-40 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-2xl opacity-40 animate-pulse" style={{animationDelay: '2s'}}></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 mb-6">
          Supercharge the way you work
        </h1>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          AI Consultancy voor MKB in Noord-Nederland. We helpen je slimmer werken met Microsoft Copilot 365, Claude en Gemini.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="group relative bg-gradient-to-r from-teal-500 via-cyan-500 to-purple-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
          >
            <span className="relative z-10">Gratis AI Consult →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Link>
          <Link
            to="/contact"
            className="bg-white text-slate-700 px-8 py-4 rounded-full font-semibold text-lg border-2 border-purple-300 hover:border-purple-500 hover:text-purple-600 hover:shadow-lg transition-all duration-200"
          >
            AI Readiness Scan →
          </Link>
        </div>
      </div>
    </section>
  );
};
