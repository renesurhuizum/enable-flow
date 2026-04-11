// Pure business logic extracted from ScanForm for testability

export interface ScanScoreInput {
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
}

export interface ScanScores {
  teamgereedheid: number;
  procesrijpheid: number;
  datagereedheid: number;
  technischeBasis: number;
  urgentieAmbitie: number;
  total: number;
  pct: number;
}

export interface NiveauResult {
  label: string;
  color: string;
  bg: string;
  border: string;
}

export const SECTOR_MULTIPLIER: Record<string, number> = {
  'zakelijke-dienstverlening': 1.2,
  'productie-industrie': 1.4,
  'retail-ecommerce': 1.1,
  'zorg-welzijn': 1.0,
  'overheid-publiek': 0.9,
  'anders': 1.0,
};

export const RECS: Record<string, { low: string; mid: string }> = {
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

export function calcScores(d: ScanScoreInput): ScanScores {
  const teamgereedheid = d.teamVertrouwdheid + d.managementSteun;
  const procesrijpheid = d.procesStandaard + d.repetieveUren;
  const datagereedheid = d.dataOpslag + d.dataKwaliteit;
  const technischeBasis = d.cloudGebruik + d.systeemKoppeling;
  const urgentieAmbitie = d.urgentie + (d.primairDoel ? 2 : 0);
  const total = teamgereedheid + procesrijpheid + datagereedheid + technischeBasis + urgentieAmbitie;
  const pct = Math.round((total / 30) * 100);
  return { teamgereedheid, procesrijpheid, datagereedheid, technischeBasis, urgentieAmbitie, total, pct };
}

export function getNiveau(pct: number): NiveauResult {
  if (pct < 25) return { label: 'Oriënterend', color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200' };
  if (pct < 50) return { label: 'Bewust', color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' };
  if (pct < 75) return { label: 'Klaar', color: 'text-teal-600', bg: 'bg-teal-50', border: 'border-teal-200' };
  return { label: 'Gevorderd', color: 'text-violet-600', bg: 'bg-violet-50', border: 'border-violet-200' };
}

export function getTopRecs(scores: ScanScores): { dim: string; text: string }[] {
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

export interface Step1Fields {
  naam: string;
  bedrijf: string;
  email: string;
  telefoon: string;
  bedrijfsgrootte: string;
  sector: string;
}

export interface Step2Fields {
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
}

export function isStep1Valid(d: Step1Fields): boolean {
  return !!(d.naam && d.bedrijf && d.email && d.telefoon && d.bedrijfsgrootte && d.sector);
}

export function isStep2Valid(d: Step2Fields): boolean {
  return [
    d.teamVertrouwdheid, d.managementSteun,
    d.procesStandaard, d.repetieveUren,
    d.dataOpslag, d.dataKwaliteit,
    d.cloudGebruik, d.systeemKoppeling,
    d.urgentie,
  ].every(v => v >= 0) && !!d.primairDoel;
}

export function calcRoi(params: {
  medewerkers: number;
  uurloon: number;
  totalScore: number;
  sector: string;
}): { monthly: number; yearly: number } {
  const sectorMul = SECTOR_MULTIPLIER[params.sector] ?? 1.0;
  const weeklyHoursSaved = 3 + (params.totalScore / 30) * 4;
  const monthly = Math.round(params.medewerkers * params.uurloon * weeklyHoursSaved * 4 * sectorMul);
  return { monthly, yearly: monthly * 12 };
}
