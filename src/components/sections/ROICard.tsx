import { useState } from 'react';
import { calcSimpleRoi } from '../../utils/roiCalculator';

export default function ROICard() {
  const [employees, setEmployees] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(40);
  const [weeklyHours, setWeeklyHours] = useState(5);

  const { monthly, yearly } = calcSimpleRoi({
    employees,
    hourlyRate,
    weeklyHoursSaved: weeklyHours,
  });

  const fmt = (n: number) =>
    '€' + Math.round(n).toLocaleString('nl-NL');

  return (
    <div className="bg-[#0d0d0d] rounded-2xl p-7 shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <span className="text-xs font-bold tracking-widest uppercase text-white/40">
          Bereken jouw besparing
        </span>
        <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          live berekening
        </span>
      </div>

      {/* Sliders */}
      <div className="space-y-5 mb-6">
        <SliderRow
          label="Aantal medewerkers"
          value={employees}
          unit="personen"
          min={1} max={100} step={1}
          onChange={setEmployees}
        />
        <SliderRow
          label="Gemiddeld uurtarief"
          value={hourlyRate}
          unit="/uur"
          prefix="€"
          min={15} max={150} step={5}
          onChange={setHourlyRate}
        />
        <SliderRow
          label="Tijdsbesparing per persoon"
          value={weeklyHours}
          unit="uur/week"
          min={1} max={15} step={1}
          onChange={setWeeklyHours}
        />
      </div>

      {/* Divider */}
      <div className="h-px bg-white/[0.07] mb-5" />

      {/* Result */}
      <div className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-xl p-4">
        <div className="flex items-baseline justify-between mb-1">
          <span className="text-xs text-white/45 font-medium">Maandelijkse besparing</span>
          <span className="text-sm font-bold text-white/70">{fmt(monthly)}</span>
        </div>
        <div className="flex items-baseline justify-between">
          <span className="text-xs text-white/45 font-medium">Per jaar</span>
          <span className="text-3xl font-black text-emerald-400 tracking-tight">{fmt(yearly)}</span>
        </div>
        <p className="text-[10px] text-white/25 mt-3 leading-relaxed">
          Op basis van {employees} personen × €{hourlyRate}/uur × {weeklyHours} uur/week.
          Indicatief — René bespreekt dit persoonlijk met je door.
        </p>
      </div>

      {/* CTA */}
      <a
        href="/scan"
        className="mt-4 block w-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white text-center py-3 rounded-xl text-sm font-bold shadow-lg shadow-emerald-500/25 hover:opacity-90 transition-opacity"
      >
        Bevestig mijn besparing gratis →
      </a>
    </div>
  );
}

/* ── Sub-component: SliderRow ─────────────────── */
interface SliderRowProps {
  label: string;
  value: number;
  unit: string;
  prefix?: string;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
}

function SliderRow({ label, value, unit, prefix = '', min, max, step, onChange }: SliderRowProps) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-2">
        <span className="text-xs font-semibold text-white/50">{label}</span>
        <span className="text-base font-black text-white tracking-tight">
          {prefix}{value} <span className="text-xs font-medium text-white/35">{unit}</span>
        </span>
      </div>
      <input
        type="range"
        min={min} max={max} step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full h-1 rounded-full appearance-none cursor-pointer
          bg-white/10
          [&::-webkit-slider-thumb]:appearance-none
          [&::-webkit-slider-thumb]:w-4
          [&::-webkit-slider-thumb]:h-4
          [&::-webkit-slider-thumb]:rounded-full
          [&::-webkit-slider-thumb]:bg-emerald-400
          [&::-webkit-slider-thumb]:border-2
          [&::-webkit-slider-thumb]:border-[#0d0d0d]
          [&::-webkit-slider-thumb]:shadow-[0_0_0_3px_rgba(52,211,153,0.2)]"
      />
    </div>
  );
}
