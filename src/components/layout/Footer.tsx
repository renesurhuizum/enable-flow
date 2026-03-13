import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <img src="/images/enableflow-logo-horizontal-reversed.svg" alt="EnableFlow AI" className="h-9 w-auto" />
            </div>
            <p className="text-sm">
              AI die écht werkt voor jouw bedrijf.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <p className="text-sm mb-2">
              <a href="mailto:info@enableflow.nl" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@enableflow.nl
              </a>
            </p>
            <p className="text-sm">
              <a href="tel:+31630534740" className="hover:text-teal-400 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                06 30 53 47 40
              </a>
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navigatie</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to="/diensten" className="hover:text-teal-400 transition-colors">Diensten</Link></li>
              <li><Link to="/use-cases" className="hover:text-teal-400 transition-colors">Use Cases</Link></li>
              <li><Link to="/scan" className="hover:text-teal-400 transition-colors">Gratis Scan</Link></li>
              <li><Link to="/over-mij" className="hover:text-teal-400 transition-colors">Over mij</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center text-sm">
          <p>© 2026 EnableFlow AI. Alle rechten voorbehouden.</p>
        </div>
      </div>
    </footer>
  );
};
