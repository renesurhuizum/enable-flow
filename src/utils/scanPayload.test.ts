import { describe, it, expect } from 'vitest';
import { buildScanPayload, type ScanFormBaseData } from './scanPayload';
import { calcScores, getNiveau, getTopRecs, calcRoi } from './scanLogic';

const BASE_DATA: ScanFormBaseData = {
  naam: 'Jan Jansen',
  bedrijf: 'Acme BV',
  email: 'jan@acme.nl',
  telefoon: '0612345678',
  bedrijfsgrootte: '10-50',
  sector: 'zakelijke-dienstverlening',
  teamVertrouwdheid: 2, managementSteun: 2,
  procesStandaard: 2, repetieveUren: 2,
  dataOpslag: 2, dataKwaliteit: 2,
  cloudGebruik: 2, systeemKoppeling: 2,
  urgentie: 2, primairDoel: 'efficiency',
  medewerkers: 10,
  uurloon: 50,
};

function makePayload(overrides: Partial<ScanFormBaseData> = {}) {
  const data = { ...BASE_DATA, ...overrides };
  const scores = calcScores(data);
  const niveau = getNiveau(scores.pct);
  const topRecs = getTopRecs(scores);
  const roi = calcRoi({ medewerkers: data.medewerkers, uurloon: data.uurloon, totalScore: scores.total, sector: data.sector });
  return buildScanPayload(data, scores, niveau, roi, topRecs, '2026-04-12T00:00:00.000Z');
}

describe('buildScanPayload — structure', () => {
  it('always sets formType to "scan"', () => {
    expect(makePayload().formType).toBe('scan');
  });

  it('uses the provided submittedAt timestamp', () => {
    expect(makePayload().submittedAt).toBe('2026-04-12T00:00:00.000Z');
  });

  it('generates a valid ISO timestamp when submittedAt is omitted', () => {
    const scores = calcScores(BASE_DATA);
    const payload = buildScanPayload(BASE_DATA, scores, getNiveau(scores.pct), { monthly: 0, yearly: 0 }, []);
    expect(() => new Date(payload.submittedAt)).not.toThrow();
    expect(payload.submittedAt).toMatch(/^\d{4}-\d{2}-\d{2}T/);
  });

  it('includes all base data fields', () => {
    const p = makePayload();
    expect(p.naam).toBe('Jan Jansen');
    expect(p.bedrijf).toBe('Acme BV');
    expect(p.email).toBe('jan@acme.nl');
    expect(p.sector).toBe('zakelijke-dienstverlening');
    expect(p.medewerkers).toBe(10);
    expect(p.uurloon).toBe(50);
  });
});

describe('buildScanPayload — scores', () => {
  it('embeds all 5 dimension scores', () => {
    const p = makePayload();
    expect(p.scores).toHaveProperty('teamgereedheid');
    expect(p.scores).toHaveProperty('procesrijpheid');
    expect(p.scores).toHaveProperty('datagereedheid');
    expect(p.scores).toHaveProperty('technischeBasis');
    expect(p.scores).toHaveProperty('urgentieAmbitie');
  });

  it('sets totalScore and scorePercent correctly', () => {
    const p = makePayload();
    const scores = calcScores(BASE_DATA);
    expect(p.totalScore).toBe(scores.total);
    expect(p.scorePercent).toBe(scores.pct);
  });

  it('sets niveau label from getNiveau', () => {
    const p = makePayload();
    const scores = calcScores(BASE_DATA);
    const niveau = getNiveau(scores.pct);
    expect(p.niveau).toBe(niveau.label);
  });
});

describe('buildScanPayload — ROI and opportunities', () => {
  it('passes through estimatedROI unchanged', () => {
    const p = makePayload();
    expect(p.estimatedROI.monthly).toBeGreaterThan(0);
    expect(p.estimatedROI.yearly).toBe(p.estimatedROI.monthly * 12);
  });

  it('topOpportunities contains Dutch dimension labels', () => {
    const p = makePayload();
    expect(Array.isArray(p.topOpportunities)).toBe(true);
    expect(p.topOpportunities.length).toBe(3);
    const validLabels = ['Teamgereedheid', 'Procesrijpheid', 'Datagereedheid', 'Technische basis', 'Urgentie & Ambitie'];
    p.topOpportunities.forEach(label => {
      expect(validLabels).toContain(label);
    });
  });

  it('topOpportunities is empty when topRecs is empty', () => {
    const scores = calcScores(BASE_DATA);
    const p = buildScanPayload(BASE_DATA, scores, getNiveau(scores.pct), { monthly: 0, yearly: 0 }, [], '2026-04-12T00:00:00.000Z');
    expect(p.topOpportunities).toEqual([]);
  });
});

describe('buildScanPayload — different profiles', () => {
  it('Oriënterend profile produces low niveau label', () => {
    const p = makePayload({
      teamVertrouwdheid: 0, managementSteun: 0,
      procesStandaard: 0, repetieveUren: 0,
      dataOpslag: 0, dataKwaliteit: 0,
      cloudGebruik: 0, systeemKoppeling: 0,
      urgentie: 0, primairDoel: '',
    });
    expect(p.niveau).toBe('Oriënterend');
    expect(p.scorePercent).toBe(0);
  });

  it('Gevorderd profile produces high niveau label', () => {
    const p = makePayload({
      teamVertrouwdheid: 3, managementSteun: 3,
      procesStandaard: 3, repetieveUren: 3,
      dataOpslag: 3, dataKwaliteit: 3,
      cloudGebruik: 3, systeemKoppeling: 3,
      urgentie: 3, primairDoel: 'alles',
    });
    expect(p.niveau).toBe('Gevorderd');
    expect(p.scorePercent).toBeGreaterThanOrEqual(75);
  });
});
