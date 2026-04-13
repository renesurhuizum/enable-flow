// Builds the webhook payload for the AI Readiness Scan form submission.
// Extracted from ScanForm.handleSubmit for testability.

import { DIM_LABELS, type ScanScores, type NiveauResult } from './scanLogic';

export interface ScanFormBaseData {
  naam: string;
  bedrijf: string;
  email: string;
  telefoon: string;
  bedrijfsgrootte: string;
  sector: string;
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
  medewerkers: number;
  uurloon: number;
}

export interface ScanPayload {
  formType: 'scan';
  submittedAt: string;
  naam: string;
  bedrijf: string;
  email: string;
  telefoon: string;
  bedrijfsgrootte: string;
  sector: string;
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
  medewerkers: number;
  uurloon: number;
  scores: {
    teamgereedheid: number;
    procesrijpheid: number;
    datagereedheid: number;
    technischeBasis: number;
    urgentieAmbitie: number;
  };
  totalScore: number;
  scorePercent: number;
  niveau: string;
  estimatedROI: { monthly: number; yearly: number };
  topOpportunities: string[];
}

export function buildScanPayload(
  data: ScanFormBaseData,
  scores: ScanScores,
  niveau: NiveauResult,
  estimatedROI: { monthly: number; yearly: number },
  topRecs: { dim: string; text: string }[],
  submittedAt?: string,
): ScanPayload {
  return {
    formType: 'scan',
    submittedAt: submittedAt ?? new Date().toISOString(),
    ...data,
    scores: {
      teamgereedheid: scores.teamgereedheid,
      procesrijpheid: scores.procesrijpheid,
      datagereedheid: scores.datagereedheid,
      technischeBasis: scores.technischeBasis,
      urgentieAmbitie: scores.urgentieAmbitie,
    },
    totalScore: scores.total,
    scorePercent: scores.pct,
    niveau: niveau.label,
    estimatedROI,
    topOpportunities: topRecs.map(r => DIM_LABELS[r.dim]),
  };
}
