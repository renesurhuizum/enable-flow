import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-teal-400 to-teal-600 rounded-lg"></div>
              <span className="text-lg font-bold text-white">
                Enable<span className="text-teal-400">Flow</span> <span className="text-slate-500">AI</span>
              </span>
            </div>
            <p className="text-sm">
              Slimmer werken met AI voor Noord-Nederlandse ondernemers.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm mb-2">📍 Noord-Nederland</p>
            <p className="text-sm mb-2">
              <a href="mailto:info@enableflow.nl" className="hover:text-teal-400 transition-colors">
                📧 info@enableflow.nl
              </a>
            </p>
            <p className="text-sm">
              <a href="tel:+31630534740" className="hover:text-teal-400 transition-colors">
                📞 06 30 53 47 40
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Regio</h4>
            <p className="text-sm">
              Groningen • Leeuwarden • Drachten • Assen • Heerenveen
            </p>
            <p className="text-sm mt-2 text-slate-500">
              Noord-Nederland
            </p>
            <div className="mt-4">
              <Link to="/over-mij" className="text-sm text-slate-400 hover:text-teal-400 transition-colors">
                Over mij
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>© 2025 EnableFlow AI. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};
