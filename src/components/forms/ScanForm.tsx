import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { isValidEmail } from '../../utils/validation';

// ─── Types ───────────────────────────────────────────────────────────────────

interface ScanFormData {
  // Stap 1 – Bedrijfsprofiel
  naam: string;
  bedrijf: string;
  email: string;
  telefoon: string;
  bedrijfsgrootte: string;
  sector: string;
  // Stap 2 – AI Readiness (scores 0-3 per vraag)
  teamVertrouwdheid: number;
  managementSteun: number;
  procesStandaard: number;
  repetieveUren: number;
  dataOpslag: number;
  dataKwaliteit: number;
  cloudGebruik: number;
  systeemKoppeling: number;
  urgentie: number;
  primairDoel: string;
  // Stap 3 – ROI
  medewerkers: number;
  uurloon: number;
}

// ─── Scoring helpers ──────────────────────────────────────────────────────────

const SECTOR_MULTIPLIER: Record<string, number> = {
  'zakelijke-dienstverlening': 1.2,
  'productie-industrie': 1.4,
  'retail-ecommerce': 1.1,
  'zorg-welzijn': 1.0,
  'overheid-publiek': 0.9,
  'anders': 1.0,
};

function calcScores(d: ScanFormData) {
  const teamgereedheid = d.teamVertrouwdheid + d.managementSteun;
  const procesrijpheid = d.procesStandaard + d.repetieveUren;
  const datagereedheid = d.dataOpslag + d.dataKwaliteit;
  const technischeBasis = d.cloudGebruik + d.systeemKoppeling;
  const urgentieAmbitie = d.urgentie + (d.primairDoel ? 2 : 0);
  const total = teamgereedheid + procesrijpheid + datagereedheid + technischeBasis + urgentieAmbitie;
  const pct = Math.round((total / 30) * 100);
  return { teamgereedheid, procesrijpheid, datagereedheid, technischeBasis, urgentieAmbitie, total, pct };
}

function getNiveau(pct: number) {
  if (pct < 25) return { label: 'Oriënterend', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
  if (pct < 50) return { label: 'Bewust', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' };
  if (pct < 75) return { label: 'Klaar', color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-200' };
  return { label: 'Gevorderd', color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-200' };
}

// ─── Aanbevelingen lookup ─────────────────────────────────────────────────────

const RECS: Record<string, { low: string; mid: string }> = {
  teamgereedheid: {
    low: 'Begin met een korte AI-kennismaking voor het hele team (2 uur). Zorg dat iedereen begrijpt wat AI wél en niet kan — dit bepaalt het succes van elke verdere stap.',
    mid: 'Verdiep het gebruik met hands-on workshops per afdeling. Focus op dagelijkse taken die medewerkers al kennen.',
  },
  procesrijpheid: {
    low: 'Documenteer eerst de 3 meest tijdrovende processen. AI automatiseren zonder documentatie leidt tot chaos — dit fundament loont de investering.',
    mid: 'Automatiseer de meest gestandaardiseerde processen als eerste. Repetitieve taken zoals e-mail drafts, vergaderverslagen en rapportages zijn direct winstgevend.',
  },
  datagereedheid: {
    low: 'Centraliseer jouw meest gebruikte data in één systeem (SharePoint, Google Drive of een CRM). Verspreid data is de grootste rem op AI-adoptie.',
    mid: 'Verbeter de datakwaliteit in jouw kernprocessen. AI is zo goed als de data die het krijgt — inconsistente data leidt tot onbetrouwbare uitkomsten.',
  },
  technischeBasis: {
    low: 'Overweeg een overstap naar Microsoft 365 of Google Workspace. Deze platformen hebben AI ingebouwd en vormen de snelste route naar productiewinst.',
    mid: 'Koppel jouw meest gebruikte systemen. Een CRM dat praat met jouw e-mail en agenda is al genoeg om AI-assistenten effectief in te zetten.',
  },
  urgentieAmbitie: {
    low: 'Verken concrete use cases in jouw sector. Een gratis consult helpt om de business case helder te maken voor het management.',
    mid: 'Prioriteer 1-2 concrete AI-projecten met meetbare KPIs. Succes op kleine schaal creëert draagvlak voor verdere uitrol.',
  },
};

function getTopRecs(scores: ReturnType<typeof calcScores>): { dim: string; text: string }[] {
  const dims = [
    { key: 'teamgereedheid', score: scores.teamgereedheid },
    { key: 'procesrijpheid', score: scores.procesrijpheid },
    { key: 'datagereedheid', score: scores.datagereedheid },
    { key: 'technischeBasis', score: scores.technischeBasis },
    { key: 'urgentieAmbitie', score: scores.urgentieAmbitie },
  ];
  return dims
    .sort((a, b) => a.score - b.score)
    .slice(0, 3)
    .map(({ key, score }) => ({
      dim: key,
      text: score < 3 ? RECS[key].low : RECS[key].mid,
    }));
}

const DIM_LABELS: Record<string, string> = {
  teamgereedheid: 'Teamgereedheid',
  procesrijpheid: 'Procesrijpheid',
  datagereedheid: 'Datagereedheid',
  technischeBasis: 'Technische basis',
  urgentieAmbitie: 'Urgentie & Ambitie',
};

// ─── Component ────────────────────────────────────────────────────────────────

const EMPTY: ScanFormData = {
  naam: '', bedrijf: '', email: '', telefoon: '', bedrijfsgrootte: '', sector: '',
  teamVertrouwdheid: -1, managementSteun: -1,
  procesStandaard: -1, repetieveUren: -1,
  dataOpslag: -1, dataKwaliteit: -1,
  cloudGebruik: -1, systeemKoppeling: -1,
  urgentie: -1, primairDoel: '',
  medewerkers: 10, uurloon: 50,
};

export const ScanForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<ScanFormData>(EMPTY);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const scores = useMemo(() => calcScores(data), [data]);
  const niveau = useMemo(() => getNiveau(scores.pct), [scores.pct]);
  const topRecs = useMemo(() => getTopRecs(scores), [scores]);

  const sectorMul = SECTOR_MULTIPLIER[data.sector] || 1.0;
  const weeklyHoursSaved = 3 + (scores.total / 30) * 4;
  const monthlySavings = Math.round(data.medewerkers * data.uurloon * weeklyHoursSaved * 4 * sectorMul);
  const yearlySavings = monthlySavings * 12;

  // ── Stap validaties
  const step1Valid = data.naam && data.bedrijf && isValidEmail(data.email) && data.telefoon && data.bedrijfsgrootte && data.sector;
  const step2Valid = [
    data.teamVertrouwdheid, data.managementSteun,
    data.procesStandaard, data.repetieveUren,
    data.dataOpslag, data.dataKwaliteit,
    data.cloudGebruik, data.systeemKoppeling,
    data.urgentie,
  ].every(v => v >= 0) && data.primairDoel;

  const handleSubmit = async () => {
    setSubmitError('');
    setIsSubmitting(true);
    try {
      const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL || 'https://renedeboer.app.n8n.cloud/webhook/enableflow-contact';
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'scan',
          submittedAt: new Date().toISOString(),
          ...data,
          scores: { teamgereedheid: scores.teamgereedheid, procesrijpheid: scores.procesrijpheid, datagereedheid: scores.datagereedheid, technischeBasis: scores.technischeBasis, urgentieAmbitie: scores.urgentieAmbitie },
          totalScore: scores.total,
          scorePercent: scores.pct,
          niveau: niveau.label,
          estimatedROI: { monthly: monthlySavings, yearly: yearlySavings },
          topOpportunities: topRecs.map(r => DIM_LABELS[r.dim]),
        }),
      });
      if (!response.ok) throw new Error('failed');
      setSubmitted(true);
    } catch {
      setSubmitError('Er ging iets mis. Probeer het opnieuw of stuur een e-mail naar info@enableflow.nl.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const radioClass = (selected: boolean) =>
    `flex-1 text-center py-2.5 px-2 rounded-xl border-2 cursor-pointer text-sm font-medium transition-all ${
      selected ? 'border-teal-500 bg-teal-50 text-teal-700' : 'border-slate-200 hover:border-teal-300 text-slate-600'
    }`;

  const set = (key: keyof ScanFormData, val: ScanFormData[keyof ScanFormData]) =>
    setData(prev => ({ ...prev, [key]: val }));

  // ── Resultaten scherm
  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border-2 border-teal-200 overflow-hidden">
          {/* Score header */}
          <div className={`p-8 text-center ${niveau.bg} border-b ${niveau.border}`}>
            <p className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-2">Jouw AI Readiness Score</p>
            <div className="inline-flex items-center gap-4 mb-3">
              <span className={`text-7xl font-bold ${niveau.color}`}>{scores.pct}</span>
              <span className="text-slate-400 text-3xl font-light">/100</span>
            </div>
            <div className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold ${niveau.color} ${niveau.bg} border ${niveau.border}`}>
              {niveau.label}
            </div>
            <p className="text-slate-600 mt-3 text-sm max-w-lg mx-auto">
              Goed om in kaart te hebben! Hieronder zie je per dimensie hoe je scoort en wat de belangrijkste kansen zijn.
            </p>
          </div>

          <div className="p-8">
            {/* Dimensie scores */}
            <h3 className="font-bold text-slate-900 mb-4">Score per dimensie</h3>
            <div className="space-y-3 mb-8">
              {[
                { key: 'teamgereedheid', score: scores.teamgereedheid },
                { key: 'procesrijpheid', score: scores.procesrijpheid },
                { key: 'datagereedheid', score: scores.datagereedheid },
                { key: 'technischeBasis', score: scores.technischeBasis },
                { key: 'urgentieAmbitie', score: scores.urgentieAmbitie },
              ].map(({ key, score }) => (
                <div key={key}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-medium text-slate-700">{DIM_LABELS[key]}</span>
                    <span className={`font-bold ${score < 3 ? 'text-amber-600' : score < 5 ? 'text-teal-600' : 'text-violet-600'}`}>
                      {score}/6
                    </span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${score < 3 ? 'bg-amber-400' : score < 5 ? 'bg-teal-500' : 'bg-violet-500'}`}
                      style={{ width: `${(score / 6) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Top 3 aanbevelingen */}
            <h3 className="font-bold text-slate-900 mb-4">Top 3 aanbevelingen voor jou</h3>
            <div className="space-y-3 mb-8">
              {topRecs.map((rec, i) => (
                <div key={rec.dim} className="flex gap-3 bg-slate-50 rounded-xl p-4">
                  <span className="w-6 h-6 rounded-full bg-teal-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{i + 1}</span>
                  <div>
                    <p className="text-xs font-semibold text-teal-600 mb-0.5">{DIM_LABELS[rec.dim]}</p>
                    <p className="text-slate-700 text-sm">{rec.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ROI */}
            <div className="bg-slate-900 rounded-2xl p-6 text-center mb-8">
              <p className="text-white/70 text-sm mb-1">Indicatieve maandelijkse besparing</p>
              <p className="text-4xl font-bold text-white mb-1">€{monthlySavings.toLocaleString('nl-NL')}</p>
              <p className="text-white/60 text-sm">€{yearlySavings.toLocaleString('nl-NL')} per jaar · gebaseerd op {data.medewerkers} medewerkers à €{data.uurloon}/uur</p>
            </div>

            {/* CTA */}
            <div className="text-center bg-teal-50 rounded-2xl p-6 border border-teal-100">
              <p className="font-bold text-slate-900 mb-1">Klaar om dit te verfijnen?</p>
              <p className="text-slate-600 text-sm mb-4">Plan een gratis gesprek in — René neemt je mee door de resultaten en geeft concrete vervolgstappen.</p>
              <Link to="/contact" className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-200">
                Plan een gratis gesprek →
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ── Stap indicator
  const StepIndicator = () => (
    <div className="flex items-center justify-center gap-2 mb-8">
      {[1, 2, 3].map((s) => (
        <React.Fragment key={s}>
          <div className={`flex items-center gap-2 ${step === s ? 'text-teal-700' : step > s ? 'text-slate-400' : 'text-slate-300'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all ${
              step === s ? 'border-teal-500 bg-teal-500 text-white' :
              step > s ? 'border-slate-300 bg-slate-100 text-slate-500' :
              'border-slate-200 text-slate-300'
            }`}>{s}</div>
            <span className="text-sm font-medium hidden sm:inline">
              {s === 1 ? 'Bedrijfsprofiel' : s === 2 ? 'AI Readiness' : 'ROI & Resultaat'}
            </span>
          </div>
          {s < 3 && <div className={`flex-1 h-0.5 max-w-12 ${step > s ? 'bg-teal-300' : 'bg-slate-200'}`} />}
        </React.Fragment>
      ))}
    </div>
  );

  const inputClass = 'w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-teal-400 focus:ring-4 focus:ring-teal-100 outline-none transition-all';

  // ── Stap 1: Bedrijfsprofiel
  const Step1 = () => (
    <div className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Naam <span className="text-red-500">*</span></label>
          <input type="text" required value={data.naam} onChange={(e) => set('naam', e.target.value)} className={inputClass} placeholder="Je naam" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Bedrijf <span className="text-red-500">*</span></label>
          <input type="text" required value={data.bedrijf} onChange={(e) => set('bedrijf', e.target.value)} className={inputClass} placeholder="Bedrijfsnaam" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">E-mail <span className="text-red-500">*</span></label>
          <input type="email" required value={data.email} onChange={(e) => set('email', e.target.value)}
            className={`w-full px-4 py-3 rounded-xl border-2 focus:ring-4 outline-none transition-all ${data.email && !isValidEmail(data.email) ? 'border-red-300 focus:border-red-400 focus:ring-red-100' : 'border-slate-200 focus:border-teal-400 focus:ring-teal-100'}`}
            placeholder="je@email.nl" />
          {data.email && !isValidEmail(data.email) && <p className="text-red-600 text-sm mt-1">Voer een geldig e-mailadres in</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Telefoon <span className="text-red-500">*</span></label>
          <input type="tel" required value={data.telefoon} onChange={(e) => set('telefoon', e.target.value)} className={inputClass} placeholder="06-12345678" />
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Bedrijfsgrootte <span className="text-red-500">*</span></label>
          <select required value={data.bedrijfsgrootte} onChange={(e) => set('bedrijfsgrootte', e.target.value)} className={inputClass}>
            <option value="">Selecteer...</option>
            <option value="1-10">1-10 medewerkers</option>
            <option value="11-50">11-50 medewerkers</option>
            <option value="51-100">51-100 medewerkers</option>
            <option value="100+">100+ medewerkers</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">Sector <span className="text-red-500">*</span></label>
          <select required value={data.sector} onChange={(e) => set('sector', e.target.value)} className={inputClass}>
            <option value="">Selecteer...</option>
            <option value="zakelijke-dienstverlening">Zakelijke dienstverlening</option>
            <option value="productie-industrie">Productie/industrie</option>
            <option value="retail-ecommerce">Retail/e-commerce</option>
            <option value="zorg-welzijn">Zorg & welzijn</option>
            <option value="overheid-publiek">Overheid/publieke sector</option>
            <option value="anders">Anders</option>
          </select>
        </div>
      </div>
    </div>
  );

  // ── Stap 2: AI Readiness
  const RadioGroup = ({ label, name, value, options, onChange }: {
    label: string; name: string; value: number;
    options: { val: number; text: string }[]; onChange: (v: number) => void;
  }) => (
    <div>
      <p className="text-sm font-medium text-slate-700 mb-2">{label} <span className="text-red-500">*</span></p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {options.map(({ val, text }) => (
          <label key={val} className={radioClass(value === val)}>
            <input type="radio" name={name} className="sr-only" checked={value === val} onChange={() => onChange(val)} />
            {text}
          </label>
        ))}
      </div>
    </div>
  );

  const Step2 = () => (
    <div className="space-y-6">
      {/* Live score preview */}
      {scores.total > 0 && (
        <div className={`rounded-xl p-4 border ${niveau.border} ${niveau.bg} flex items-center gap-4`}>
          <div className="text-center">
            <span className={`text-3xl font-bold ${niveau.color}`}>{scores.pct}</span>
            <span className="text-slate-400 text-sm">/100</span>
          </div>
          <div>
            <p className={`font-semibold text-sm ${niveau.color}`}>{niveau.label}</p>
            <p className="text-xs text-slate-500">Score op basis van ingevulde vragen — wordt bijgewerkt</p>
          </div>
        </div>
      )}

      <div className="bg-teal-50 rounded-xl p-4 border border-teal-100">
        <p className="font-semibold text-teal-900 text-sm mb-1">Dimensie A — Teamgereedheid</p>
        <p className="text-teal-700 text-xs">Hoe klaar is jouw team om AI te omarmen?</p>
      </div>
      <RadioGroup label="Hoe vertrouwd is jouw team met AI-tools?"
        name="teamVertrouwdheid" value={data.teamVertrouwdheid}
        options={[{ val: 0, text: 'Nog nooit gebruikt' }, { val: 1, text: 'Gehoord, niet gebruikt' }, { val: 2, text: 'Af en toe' }, { val: 3, text: 'Dagelijks gebruik' }]}
        onChange={(v) => set('teamVertrouwdheid', v)} />
      <RadioGroup label="Hoe staat het management tegenover AI?"
        name="managementSteun" value={data.managementSteun}
        options={[{ val: 0, text: 'Sceptisch' }, { val: 1, text: 'Neutraal' }, { val: 2, text: 'Geïnteresseerd' }, { val: 3, text: 'Actief voorstander' }]}
        onChange={(v) => set('managementSteun', v)} />

      <div className="bg-violet-50 rounded-xl p-4 border border-violet-100">
        <p className="font-semibold text-violet-900 text-sm mb-1">Dimensie B — Procesrijpheid</p>
        <p className="text-violet-700 text-xs">Hoe gestructureerd en documenteerbaar zijn jouw processen?</p>
      </div>
      <RadioGroup label="Hoe gestandaardiseerd zijn jullie werkprocessen?"
        name="procesStandaard" value={data.procesStandaard}
        options={[{ val: 0, text: 'Ad hoc / per persoon' }, { val: 1, text: 'Deels gedocumenteerd' }, { val: 2, text: 'Grotendeels vastgelegd' }, { val: 3, text: 'Volledig gedocumenteerd' }]}
        onChange={(v) => set('procesStandaard', v)} />
      <RadioGroup label="Hoeveel uur per week gaat op aan repetitieve taken?"
        name="repetieveUren" value={data.repetieveUren}
        options={[{ val: 0, text: 'Minder dan 5u' }, { val: 1, text: '5–15 uur' }, { val: 2, text: '15–30 uur' }, { val: 3, text: 'Meer dan 30u' }]}
        onChange={(v) => set('repetieveUren', v)} />

      <div className="bg-sky-50 rounded-xl p-4 border border-sky-100">
        <p className="font-semibold text-sky-900 text-sm mb-1">Dimensie C — Datagereedheid</p>
        <p className="text-sky-700 text-xs">Hoe beschikbaar en betrouwbaar is jullie bedrijfsdata?</p>
      </div>
      <RadioGroup label="Hoe is jullie bedrijfsdata opgeslagen?"
        name="dataOpslag" value={data.dataOpslag}
        options={[{ val: 0, text: 'Verspreid (mail/papier)' }, { val: 1, text: 'Deels gecentraliseerd' }, { val: 2, text: 'Grotendeels in systemen' }, { val: 3, text: 'Centraal & toegankelijk' }]}
        onChange={(v) => set('dataOpslag', v)} />
      <RadioGroup label="Hoe betrouwbaar en consistent is jullie data?"
        name="dataKwaliteit" value={data.dataKwaliteit}
        options={[{ val: 0, text: 'Veel fouten / verouderd' }, { val: 1, text: 'Redelijk' }, { val: 2, text: 'Grotendeels betrouwbaar' }, { val: 3, text: 'Hoge kwaliteit' }]}
        onChange={(v) => set('dataKwaliteit', v)} />

      <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
        <p className="font-semibold text-emerald-900 text-sm mb-1">Dimensie D — Technische basis</p>
        <p className="text-emerald-700 text-xs">Hoe klaar is jullie infrastructuur voor AI-integratie?</p>
      </div>
      <RadioGroup label="Gebruik je Microsoft 365 / Google Workspace?"
        name="cloudGebruik" value={data.cloudGebruik}
        options={[{ val: 0, text: 'Geen van beide' }, { val: 1, text: 'Basis (mail/agenda)' }, { val: 2, text: 'Actief gebruik' }, { val: 3, text: 'Volledig geïntegreerd' }]}
        onChange={(v) => set('cloudGebruik', v)} />
      <RadioGroup label="Zijn jullie systemen aan elkaar gekoppeld?"
        name="systeemKoppeling" value={data.systeemKoppeling}
        options={[{ val: 0, text: 'Losse eilanden' }, { val: 1, text: 'Enkele koppelingen' }, { val: 2, text: 'Meeste gekoppeld' }, { val: 3, text: 'Volledig geïntegreerd' }]}
        onChange={(v) => set('systeemKoppeling', v)} />

      <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
        <p className="font-semibold text-orange-900 text-sm mb-1">Dimensie E — Urgentie & Ambitie</p>
        <p className="text-orange-700 text-xs">Hoe groot is de drive om AI te adopteren?</p>
      </div>
      <RadioGroup label="Hoe urgent is het verbeteren van efficiency voor jouw bedrijf?"
        name="urgentie" value={data.urgentie}
        options={[{ val: 0, text: 'Niet urgent' }, { val: 1, text: 'Zou mooi zijn' }, { val: 2, text: 'Belangrijk' }, { val: 3, text: 'Topprioriteit' }]}
        onChange={(v) => set('urgentie', v)} />

      <div>
        <p className="text-sm font-medium text-slate-700 mb-2">Wat is jouw primaire doel met AI? <span className="text-red-500">*</span></p>
        <div className="grid sm:grid-cols-2 gap-2">
          {['Tijdsbesparing & efficiëntie', 'Kostenbesparing', 'Betere beslissingen & data', 'Klantenservice verbeteren', 'Groei / schaal vergroten', 'Anders'].map((doel) => (
            <label key={doel} className={radioClass(data.primairDoel === doel)}>
              <input type="radio" name="primairDoel" className="sr-only" checked={data.primairDoel === doel} onChange={() => set('primairDoel', doel)} />
              {doel}
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  // ── Stap 3: ROI
  const Step3 = () => (
    <div className="space-y-6">
      <div className={`rounded-2xl p-6 text-center ${niveau.bg} border ${niveau.border}`}>
        <p className="text-sm text-slate-500 mb-1">Jouw huidige AI Readiness Score</p>
        <p className={`text-6xl font-bold ${niveau.color} mb-1`}>{scores.pct}</p>
        <p className={`inline-block px-3 py-1 rounded-full text-sm font-bold ${niveau.color} ${niveau.bg} border ${niveau.border}`}>{niveau.label}</p>
      </div>

      <p className="text-slate-600 text-sm text-center">Voer jouw bedrijfsgegevens in om de indicatieve ROI te berekenen:</p>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-3">
          Aantal medewerkers: <span className="text-teal-600 font-bold">{data.medewerkers}</span>
        </label>
        <input type="range" min="1" max="200" value={data.medewerkers}
          onChange={(e) => set('medewerkers', Number(e.target.value))}
          className="w-full h-2 bg-gradient-to-r from-teal-200 to-violet-200 rounded-lg appearance-none cursor-pointer accent-teal-600" />
        <div className="flex justify-between text-xs text-slate-400 mt-1"><span>1</span><span>50</span><span>100</span><span>150</span><span>200</span></div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">Gemiddeld uurloon</label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-semibold">€</span>
          <input type="number" min="20" max="200" value={data.uurloon}
            onChange={(e) => set('uurloon', Number(e.target.value))}
            className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-teal-500 focus:ring-4 focus:ring-teal-100 outline-none font-semibold transition-all" />
        </div>
      </div>

      <div className="bg-slate-900 rounded-2xl p-6 text-center">
        <p className="text-white/70 text-sm mb-1">Indicatieve maandelijkse besparing</p>
        <p className="text-5xl font-bold text-white mb-1">€{monthlySavings.toLocaleString('nl-NL')}</p>
        <p className="text-white/60 text-sm">€{yearlySavings.toLocaleString('nl-NL')} per jaar</p>
        <p className="text-white/40 text-xs mt-2">
          Gebaseerd op ~{weeklyHoursSaved.toFixed(1)} uur/week besparing per medewerker (afhankelijk van jouw readiness score)
        </p>
      </div>

      {submitError && (
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4">
          <p className="text-red-800 font-semibold">⚠ {submitError}</p>
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-2xl shadow-xl border-2 border-teal-200 p-8">
        <StepIndicator />

        {step === 1 && (
          <>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">Jouw bedrijfsprofiel</h2>
            <p className="text-slate-600 text-sm mb-6">Stap 1 van 3 — Basisinformatie voor een persoonlijk rapport</p>
            <Step1 />
            <div className="mt-6 flex justify-end">
              <button onClick={() => step1Valid && setStep(2)} disabled={!step1Valid}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed">
                Volgende: AI Readiness →
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">AI Readiness — 5 dimensies</h2>
            <p className="text-slate-600 text-sm mb-6">Stap 2 van 3 — 10 korte vragen, je score wordt live bijgewerkt</p>
            <Step2 />
            <div className="mt-6 flex justify-between">
              <button onClick={() => setStep(1)} className="text-slate-600 hover:text-slate-900 px-6 py-3 rounded-full font-medium transition-all border-2 border-slate-200 hover:border-slate-300">
                ← Terug
              </button>
              <button onClick={() => step2Valid && setStep(3)} disabled={!step2Valid}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all disabled:opacity-40 disabled:cursor-not-allowed">
                Volgende: ROI & Resultaat →
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-2xl font-bold text-slate-900 mb-1">ROI & Jouw resultaat</h2>
            <p className="text-slate-600 text-sm mb-6">Stap 3 van 3 — Bereken de indicatieve besparing en ontvang jouw rapport</p>
            <Step3 />
            <div className="mt-6 flex justify-between">
              <button onClick={() => setStep(2)} className="text-slate-600 hover:text-slate-900 px-6 py-3 rounded-full font-medium transition-all border-2 border-slate-200 hover:border-slate-300">
                ← Terug
              </button>
              <button onClick={handleSubmit} disabled={isSubmitting}
                className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white px-8 py-3 rounded-full font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                {isSubmitting ? 'Versturen...' : 'Bekijk mijn volledige rapport →'}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
