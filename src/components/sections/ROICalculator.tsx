import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ROICalculatorProps {
  showCTA?: boolean;
  compact?: boolean;
}

export const ROICalculator: React.FC<ROICalculatorProps> = ({
  showCTA = true,
  compact = false,
}) => {
  const [employees, setEmployees] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(50);

  // Calculate monthly savings: employees x hourly rate x 5 hours/week x 4 weeks
  const monthlySavings = employees * hourlyRate * 5 * 4;
  const yearlySavings = monthlySavings * 12;

  return (
    <section className={`${compact ? 'py-12' : 'py-16'} px-4 relative`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wider mb-2">
            ROI Calculator
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
            Bereken jouw potentiële besparing
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Hoeveel tijd en geld kan AI jouw organisatie opleveren?
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
          {/* Input: Number of employees */}
          <div className="mb-8">
            <label htmlFor="roi-employees" className="block text-slate-700 font-semibold mb-3">
              Aantal medewerkers: <span className="text-teal-600 text-xl">{employees}</span>
            </label>
            <input
              id="roi-employees"
              type="range"
              min="1"
              max="100"
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              className="w-full h-2 bg-gradient-to-r from-teal-200 to-violet-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
            />
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>1</span>
              <span>25</span>
              <span>50</span>
              <span>75</span>
              <span>100</span>
            </div>
          </div>

          {/* Input: Hourly rate */}
          <div className="mb-8">
            <label htmlFor="roi-hourly-rate" className="block text-slate-700 font-semibold mb-3">
              Gemiddeld uurloon
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-semibold">€</span>
              <input
                id="roi-hourly-rate"
                type="number"
                min="20"
                max="200"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full pl-10 pr-4 py-3 border-2 border-stone-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none text-slate-900 font-semibold transition-all"
              />
            </div>
          </div>

          {/* Result Card */}
          <div className="bg-slate-900 rounded-2xl p-8 text-center shadow-xl">
            <p className="text-white/90 text-sm font-semibold mb-2 uppercase tracking-wide">
              Potentiële maandelijkse besparing
            </p>
            <p className="text-5xl md:text-6xl font-bold text-white mb-2">
              €{monthlySavings.toLocaleString('nl-NL')}
            </p>
            <p className="text-white/70 text-sm mb-4">
              Dat is <span className="font-bold text-white">€{yearlySavings.toLocaleString('nl-NL')}</span> per jaar
            </p>
            <p className="text-white/60 text-xs">
              Gebaseerd op gemiddeld 5 uur tijdsbesparing per medewerker per week
            </p>
          </div>

          {/* Calculation breakdown */}
          <div className="mt-4 p-4 bg-slate-50 rounded-xl">
            <p className="text-sm text-slate-600 text-center">
              <span className="font-semibold">Berekening:</span> {employees} medewerkers × €{hourlyRate}/uur × 5 uur/week × 4 weken = <span className="font-bold text-teal-600">€{monthlySavings.toLocaleString('nl-NL')}/maand</span>
            </p>
          </div>

          {/* CTA */}
          {showCTA && (
            <div className="mt-6 text-center">
              <Link
                to="/contact"
                className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200"
              >
                Ontdek jouw exacte besparingspotentieel →
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
