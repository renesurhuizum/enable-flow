import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-teal-400 via-cyan-400 to-purple-500 rounded-lg"></div>
            <span className="text-xl font-bold">
              <span className="text-slate-800">Enable</span>
              <span className="bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">Flow</span>
              <span className="text-slate-500 text-lg"> AI</span>
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
              className="bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all duration-200"
            >
              Contact
            </Link>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-200"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
