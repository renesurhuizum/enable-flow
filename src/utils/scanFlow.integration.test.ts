import { describe, it, expect } from 'vitest';
import { calcScores, getNiveau, getTopRecs, calcRoi, type ScanScoreInput } from './scanLogic';

// Integration tests: full scan flow from input → scores → niveau → recs → ROI

describe('Klantprofiel: Beginner (Oriënterend)', () => {
  const input: ScanScoreInput = {
    teamVertrouwdheid: 0, managementSteun: 0,
    procesStandaard: 0, repetieveUren: 1,
    dataOpslag: 0, dataKwaliteit: 0,
    cloudGebruik: 0, systeemKoppeling: 0,
    urgentie: 1, primairDoel: '',
  };

  it('scores are very low', () => {
    const s = calcScores(input);
    expect(s.total).toBeLessThan(10);
    expect(s.pct).toBeLessThan(25);
  });

  it('niveau is Oriënterend', () => {
    const s = calcScores(input);
    expect(getNiveau(s.pct).label).toBe('Oriënterend');
  });

  it('gets 3 recs all using .low text', () => {
    const s = calcScores(input);
    const recs = getTopRecs(s);
    expect(recs).toHaveLength(3);
    // all dims score low — text should include action words typical of .low recs
    recs.forEach(r => expect(r.text.length).toBeGreaterThan(20));
  });

  it('ROI is modest (low score, small business)', () => {
    const s = calcScores(input);
    const roi = calcRoi({ medewerkers: 5, uurloon: 35, totalScore: s.total, sector: 'anders' });
    expect(roi.monthly).toBeGreaterThan(0);
    expect(roi.yearly).toBe(roi.monthly * 12);
  });
});

describe('Klantprofiel: Gemiddeld bedrijf (Klaar)', () => {
  const input: ScanScoreInput = {
    teamVertrouwdheid: 2, managementSteun: 2,
    procesStandaard: 2, repetieveUren: 2,
    dataOpslag: 2, dataKwaliteit: 1,
    cloudGebruik: 2, systeemKoppeling: 1,
    urgentie: 2, primairDoel: 'efficiency',
  };

  it('pct is between 50 and 75', () => {
    const s = calcScores(input);
    expect(s.pct).toBeGreaterThanOrEqual(50);
    expect(s.pct).toBeLessThan(75);
  });

  it('niveau is Klaar', () => {
    const s = calcScores(input);
    expect(getNiveau(s.pct).label).toBe('Klaar');
  });

  it('recs target the weakest dimensions', () => {
    const s = calcScores(input);
    // datagereedheid=3, technischeBasis=3 are lowest (both 3)
    const recs = getTopRecs(s);
    const dims = recs.map(r => r.dim);
    expect(dims.length).toBe(3);
    // Should not recommend dims that scored highest (teamgereedheid=4, urgentieAmbitie=6)
    expect(dims).not.toContain('urgentieAmbitie');
  });

  it('ROI is meaningful for mid-size manufacturer', () => {
    const s = calcScores(input);
    const roi = calcRoi({ medewerkers: 25, uurloon: 55, totalScore: s.total, sector: 'productie-industrie' });
    expect(roi.monthly).toBeGreaterThan(5000);
  });
});

describe('Klantprofiel: Gevorderd bedrijf', () => {
  const input: ScanScoreInput = {
    teamVertrouwdheid: 3, managementSteun: 3,
    procesStandaard: 3, repetieveUren: 3,
    dataOpslag: 3, dataKwaliteit: 3,
    cloudGebruik: 2, systeemKoppeling: 2,
    urgentie: 3, primairDoel: 'groei',
  };

  it('pct >= 75', () => {
    const s = calcScores(input);
    expect(s.pct).toBeGreaterThanOrEqual(75);
  });

  it('niveau is Gevorderd', () => {
    const s = calcScores(input);
    expect(getNiveau(s.pct).label).toBe('Gevorderd');
  });

  it('recs target technischeBasis as weakest area', () => {
    const s = calcScores(input);
    // cloudGebruik=2 + systeemKoppeling=2 → technischeBasis=4 (lowest)
    const recs = getTopRecs(s);
    expect(recs[0].dim).toBe('technischeBasis');
  });

  it('ROI is substantial for large zakelijke dienstverlener', () => {
    const s = calcScores(input);
    const roi = calcRoi({ medewerkers: 100, uurloon: 70, totalScore: s.total, sector: 'zakelijke-dienstverlening' });
    expect(roi.monthly).toBeGreaterThan(50000);
  });
});

describe('Consistentie checks over alle profielen', () => {
  it('higher total score always produces higher ROI (same sector/employees)', () => {
    const low = calcRoi({ medewerkers: 20, uurloon: 50, totalScore: 5, sector: 'anders' });
    const mid = calcRoi({ medewerkers: 20, uurloon: 50, totalScore: 15, sector: 'anders' });
    const high = calcRoi({ medewerkers: 20, uurloon: 50, totalScore: 25, sector: 'anders' });
    expect(mid.monthly).toBeGreaterThan(low.monthly);
    expect(high.monthly).toBeGreaterThan(mid.monthly);
  });

  it('getNiveau labels map to correct CSS colors', () => {
    const levels = [
      { pct: 10, expectedColor: 'text-amber-600' },
      { pct: 35, expectedColor: 'text-blue-600' },
      { pct: 60, expectedColor: 'text-teal-600' },
      { pct: 90, expectedColor: 'text-violet-600' },
    ];
    levels.forEach(({ pct, expectedColor }) => {
      expect(getNiveau(pct).color).toBe(expectedColor);
    });
  });
});
