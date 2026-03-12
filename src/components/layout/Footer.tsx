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
            <h4 className="text-white font-semibold mb-4">Navigatie</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-teal-400 transition-colors">Home</Link></li>
              <li><Link to="/diensten" className="hover:text-teal-400 transition-colors">Diensten</Link></li>
              <li><Link to="/use-cases" className="hover:text-teal-400 transition-colors">Use Cases</Link></li>
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
