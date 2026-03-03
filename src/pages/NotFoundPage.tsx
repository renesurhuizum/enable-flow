import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
  useEffect(() => {
    document.title = 'Pagina niet gevonden | EnableFlow AI';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-7xl font-bold text-teal-500 mb-4">404</p>
        <h1 className="text-2xl font-bold text-slate-900 mb-3">
          Pagina niet gevonden
        </h1>
        <p className="text-slate-600 mb-8">
          De pagina die je zoekt bestaat niet of is verplaatst.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
          >
            Terug naar home
          </Link>
          <Link
            to="/contact"
            className="bg-white text-slate-700 px-6 py-3 rounded-full font-semibold border-2 border-slate-200 hover:border-teal-400 hover:text-teal-700 transition-all duration-200"
          >
            Neem contact op
          </Link>
        </div>
      </div>
    </div>
  );
};
