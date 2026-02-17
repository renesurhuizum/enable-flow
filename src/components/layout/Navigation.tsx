import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white/90 backdrop-blur-sm shadow-sm sticky top-0 z-50 border-b border-stone-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={closeMenu}>
            <div className="w-8 h-8 bg-gradient-to-br from-teal-500 to-teal-600 rounded-lg"></div>
            <span className="text-xl font-bold">
              <span className="text-slate-800">Enable</span>
              <span className="text-teal-600">Flow</span>
              <span className="text-slate-400 text-lg"> AI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors ${
                isActive('/')
                  ? 'text-teal-600'
                  : 'text-slate-700 hover:text-teal-600'
              }`}
            >
              Home
            </Link>
            <Link
              to="/over-mij"
              className={`text-sm font-medium transition-colors ${
                isActive('/over-mij')
                  ? 'text-teal-600'
                  : 'text-slate-700 hover:text-teal-600'
              }`}
            >
              Over mij
            </Link>
            <Link
              to="/use-cases"
              className={`text-sm font-medium transition-colors ${
                isActive('/use-cases')
                  ? 'text-teal-600'
                  : 'text-slate-700 hover:text-teal-600'
              }`}
            >
              Use Cases
            </Link>
            <Link
              to="/contact"
              className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full font-medium hover:shadow-md transition-all duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-stone-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Menu sluiten' : 'Menu openen'}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 border-t border-stone-200">
            <Link
              to="/"
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                isActive('/')
                  ? 'bg-teal-50 text-teal-600'
                  : 'text-slate-700 hover:bg-stone-50'
              }`}
            >
              Home
            </Link>
            <Link
              to="/over-mij"
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                isActive('/over-mij')
                  ? 'bg-teal-50 text-teal-600'
                  : 'text-slate-700 hover:bg-stone-50'
              }`}
            >
              Over mij
            </Link>
            <Link
              to="/use-cases"
              onClick={closeMenu}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                isActive('/use-cases')
                  ? 'bg-teal-50 text-teal-600'
                  : 'text-slate-700 hover:bg-stone-50'
              }`}
            >
              Use Cases
            </Link>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block mx-4 mt-4 text-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-medium transition-all duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
