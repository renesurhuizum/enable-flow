import { describe, it, expect } from 'vitest';
import { calcScores, getNiveau, getTopRecs, calcRoi, type ScanScoreInput } from './scanLogic';

// Exhaustive invariant tests: verify properties that must ALWAYS hold

function makeInput(overrides: Partial<ScanScoreInput> = {}): ScanScoreInput {
  return {
    teamVertrouwdheid: 1, managementSteun: 1,
    procesStandaard: 1, repetieveUren: 1,
    dataOpslag: 1, dataKwaliteit: 1,
    cloudGebruik: 1, systeemKoppeling: 1,
    urgentie: 1, primairDoel: 'efficiency',
    ...overrides,
  };
}

// Simulate a range of plausible inputs
const SCORE_VALUES = [0, 1, 2, 3] as const;
const PRIMAIR_DOEL_VALUES = ['', 'kostenbesparing', 'groei', 'efficiency'];

describe('calcScores invariants', () => {
  it('pct is always between 0 and 100 for all valid score combos', () => {
    for (const v of SCORE_VALUES) {
      for (const doel of PRIMAIR_DOEL_VALUES) {
        const s = calcScores(makeInput({
          teamVertrouwdheid: v, managementSteun: v,
          procesStandaard: v, repetieveUren: v,
          dataOpslag: v, dataKwaliteit: v,
          cloudGebruik: v, systeemKoppeling: v,
          urgentie: v, primairDoel: doel,
        }));
        expect(s.pct).toBeGreaterThanOrEqual(0);
        expect(s.pct).toBeLessThanOrEqual(100);
      }
    }
  });

  it('total always equals sum of all dimension scores', () => {
    for (const v of SCORE_VALUES) {
      const s = calcScores(makeInput({ teamVertrouwdheid: v, managementSteun: v,
        procesStandaard: v, repetieveUren: v, dataOpslag: v, dataKwaliteit: v,
        cloudGebruik: v, systeemKoppeling: v, urgentie: v, primairDoel: '' }));
      expect(s.total).toBe(s.teamgereedheid + s.procesrijpheid + s.datagereedheid + s.technischeBasis + s.urgentieAmbitie);
    }
  });

  it('each dimension score is non-negative for non-negative inputs', () => {
    for (const v of SCORE_VALUES) {
      const s = calcScores(makeInput({ teamVertrouwdheid: v, managementSteun: v }));
      expect(s.teamgereedheid).toBeGreaterThanOrEqual(0);
      expect(s.procesrijpheid).toBeGreaterThanOrEqual(0);
      expect(s.datagereedheid).toBeGreaterThanOrEqual(0);
      expect(s.technischeBasis).toBeGreaterThanOrEqual(0);
      expect(s.urgentieAmbitie).toBeGreaterThanOrEqual(0);
    }
  });
});

describe('getNiveau invariants', () => {
  it('returns a label for every integer pct 0–100', () => {
    const validLabels = ['Oriënterend', 'Bewust', 'Klaar', 'Gevorderd'];
    for (let pct = 0; pct <= 100; pct++) {
      expect(validLabels).toContain(getNiveau(pct).label);
    }
  });

  it('is monotonically non-decreasing (higher pct → same or higher tier)', () => {
    const tierOrder = ['Oriënterend', 'Bewust', 'Klaar', 'Gevorderd'];
    let prev = 0;
    for (let pct = 0; pct <= 100; pct++) {
      const tier = tierOrder.indexOf(getNiveau(pct).label);
      expect(tier).toBeGreaterThanOrEqual(prev);
      prev = tier;
    }
  });
});

describe('getTopRecs invariants', () => {
  it('always returns exactly 3 recommendations', () => {
    for (const v of SCORE_VALUES) {
      for (const doel of PRIMAIR_DOEL_VALUES) {
        const s = calcScores(makeInput({
          teamVertrouwdheid: v, managementSteun: v,
          procesStandaard: v, repetieveUren: v,
          dataOpslag: v, dataKwaliteit: v,
          cloudGebruik: v, systeemKoppeling: v,
          urgentie: v, primairDoel: doel,
        }));
        expect(getTopRecs(s)).toHaveLength(3);
      }
    }
  });

  it('all returned dims are known dimension keys', () => {
    const knownDims = ['teamgereedheid', 'procesrijpheid', 'datagereedheid', 'technischeBasis', 'urgentieAmbitie'];
    const s = calcScores(makeInput());
    getTopRecs(s).forEach(r => {
      expect(knownDims).toContain(r.dim);
    });
  });

  it('no duplicate dims in result', () => {
    for (const v of SCORE_VALUES) {
      const s = calcScores(makeInput({ teamVertrouwdheid: v }));
      const recs = getTopRecs(s);
      const dims = recs.map(r => r.dim);
      expect(new Set(dims).size).toBe(3);
    }
  });
});

describe('calcRoi invariants', () => {
  it('monthly is always non-negative', () => {
    const sectors = ['anders', 'productie-industrie', 'overheid-publiek', 'unknown'];
    for (const sector of sectors) {
      for (const score of [0, 10, 20, 30]) {
        const roi = calcRoi({ medewerkers: 10, uurloon: 50, totalScore: score, sector });
        expect(roi.monthly).toBeGreaterThanOrEqual(0);
      }
    }
  });

  it('yearly is always exactly 12x monthly', () => {
    for (const score of [0, 5, 15, 25, 30]) {
      const roi = calcRoi({ medewerkers: 7, uurloon: 45, totalScore: score, sector: 'zakelijke-dienstverlening' });
      expect(roi.yearly).toBe(roi.monthly * 12);
    }
  });
});
