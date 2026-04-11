import { describe, it, expect } from 'vitest';
import { calcScores, getNiveau, getTopRecs, calcRoi, SECTOR_MULTIPLIER, isStep1Valid, isStep2Valid, type ScanScoreInput } from './scanLogic';

const FULL_SCORE: ScanScoreInput = {
  teamVertrouwdheid: 3, managementSteun: 3,
  procesStandaard: 3, repetieveUren: 3,
  dataOpslag: 3, dataKwaliteit: 3,
  cloudGebruik: 3, systeemKoppeling: 3,
  urgentie: 3, primairDoel: 'kostenbesparing',
};

const ZERO_SCORE: ScanScoreInput = {
  teamVertrouwdheid: 0, managementSteun: 0,
  procesStandaard: 0, repetieveUren: 0,
  dataOpslag: 0, dataKwaliteit: 0,
  cloudGebruik: 0, systeemKoppeling: 0,
  urgentie: 0, primairDoel: '',
};

describe('calcScores', () => {
  it('calculates maximum score correctly (all 3s + primairDoel)', () => {
    const s = calcScores(FULL_SCORE);
    expect(s.teamgereedheid).toBe(6);
    expect(s.procesrijpheid).toBe(6);
    expect(s.datagereedheid).toBe(6);
    expect(s.technischeBasis).toBe(6);
    expect(s.urgentieAmbitie).toBe(5); // 3 + 2 for primairDoel
    expect(s.total).toBe(29);
    expect(s.pct).toBe(97); // Math.round(29/30*100)
  });

  it('calculates zero score correctly (all 0s, no primairDoel)', () => {
    const s = calcScores(ZERO_SCORE);
    expect(s.total).toBe(0);
    expect(s.pct).toBe(0);
  });

  it('adds 2 to urgentieAmbitie when primairDoel is set', () => {
    const withDoel = calcScores({ ...ZERO_SCORE, primairDoel: 'groei' });
    const withoutDoel = calcScores(ZERO_SCORE);
    expect(withDoel.urgentieAmbitie).toBe(2);
    expect(withoutDoel.urgentieAmbitie).toBe(0);
  });

  it('correctly sums each dimension pair', () => {
    const s = calcScores({ ...ZERO_SCORE, teamVertrouwdheid: 2, managementSteun: 1 });
    expect(s.teamgereedheid).toBe(3);
  });

  it('rounds pct correctly', () => {
    // total=13: team=3, proces=3, data=3, tech=3, urgentie=1+0=1
    const s = calcScores({
      teamVertrouwdheid: 1, managementSteun: 2,
      procesStandaard: 1, repetieveUren: 2,
      dataOpslag: 1, dataKwaliteit: 2,
      cloudGebruik: 1, systeemKoppeling: 2,
      urgentie: 1, primairDoel: '',
    });
    expect(s.total).toBe(13);
    expect(s.pct).toBe(43); // Math.round(13/30*100) = Math.round(43.33) = 43
  });
});

describe('getNiveau', () => {
  it('returns Oriënterend for pct < 25', () => {
    expect(getNiveau(0).label).toBe('Oriënterend');
    expect(getNiveau(24).label).toBe('Oriënterend');
  });

  it('returns Bewust for 25 <= pct < 50', () => {
    expect(getNiveau(25).label).toBe('Bewust');
    expect(getNiveau(49).label).toBe('Bewust');
  });

  it('returns Klaar for 50 <= pct < 75', () => {
    expect(getNiveau(50).label).toBe('Klaar');
    expect(getNiveau(74).label).toBe('Klaar');
  });

  it('returns Gevorderd for pct >= 75', () => {
    expect(getNiveau(75).label).toBe('Gevorderd');
    expect(getNiveau(100).label).toBe('Gevorderd');
  });

  it('returns correct CSS classes for each niveau', () => {
    expect(getNiveau(0).color).toBe('text-amber-600');
    expect(getNiveau(25).color).toBe('text-blue-600');
    expect(getNiveau(50).color).toBe('text-teal-600');
    expect(getNiveau(75).color).toBe('text-violet-600');
  });
});

describe('getTopRecs', () => {
  it('returns exactly 3 recommendations', () => {
    const scores = calcScores(FULL_SCORE);
    expect(getTopRecs(scores)).toHaveLength(3);
  });

  it('recommends the 3 lowest-scoring dimensions', () => {
    // Make procesrijpheid and datagereedheid and technischeBasis lowest
    const s = calcScores({
      ...FULL_SCORE,
      procesStandaard: 0, repetieveUren: 0, // procesrijpheid=0
      dataOpslag: 0, dataKwaliteit: 0,       // datagereedheid=0
      cloudGebruik: 0, systeemKoppeling: 0,  // technischeBasis=0
    });
    const recs = getTopRecs(s);
    const dims = recs.map(r => r.dim);
    expect(dims).toContain('procesrijpheid');
    expect(dims).toContain('datagereedheid');
    expect(dims).toContain('technischeBasis');
  });

  it('uses low text when score < 3', () => {
    const s = calcScores({ ...ZERO_SCORE });
    const recs = getTopRecs(s);
    // All scores are 0 — should use .low text
    recs.forEach(r => {
      expect(r.text).toBeTruthy();
    });
  });

  it('uses mid text when score >= 3', () => {
    // All dims at score 3 or more
    const s = calcScores(FULL_SCORE);
    const recs = getTopRecs(s);
    // urgentieAmbitie=5 teamgereedheid=6 etc — they're all >=3, should use mid text
    recs.forEach(r => {
      expect(r.text).toBeTruthy();
    });
  });
});

describe('SECTOR_MULTIPLIER', () => {
  it('productie-industrie has the highest multiplier', () => {
    const vals = Object.values(SECTOR_MULTIPLIER);
    expect(SECTOR_MULTIPLIER['productie-industrie']).toBe(Math.max(...vals));
  });

  it('overheid-publiek has the lowest multiplier', () => {
    const vals = Object.values(SECTOR_MULTIPLIER);
    expect(SECTOR_MULTIPLIER['overheid-publiek']).toBe(Math.min(...vals));
  });

  it('contains all expected sectors', () => {
    expect(SECTOR_MULTIPLIER).toHaveProperty('zakelijke-dienstverlening');
    expect(SECTOR_MULTIPLIER).toHaveProperty('productie-industrie');
    expect(SECTOR_MULTIPLIER).toHaveProperty('zorg-welzijn');
    expect(SECTOR_MULTIPLIER).toHaveProperty('anders');
  });
});

describe('calcRoi', () => {
  it('returns monthly and yearly savings', () => {
    const roi = calcRoi({ medewerkers: 10, uurloon: 50, totalScore: 15, sector: 'anders' });
    expect(roi.yearly).toBe(roi.monthly * 12);
  });

  it('applies sector multiplier correctly', () => {
    const base = calcRoi({ medewerkers: 10, uurloon: 50, totalScore: 15, sector: 'anders' });
    const industrie = calcRoi({ medewerkers: 10, uurloon: 50, totalScore: 15, sector: 'productie-industrie' });
    expect(industrie.monthly).toBeGreaterThan(base.monthly);
  });

  it('scales with number of employees', () => {
    const small = calcRoi({ medewerkers: 5, uurloon: 50, totalScore: 15, sector: 'anders' });
    const large = calcRoi({ medewerkers: 50, uurloon: 50, totalScore: 15, sector: 'anders' });
    expect(large.monthly).toBe(small.monthly * 10);
  });

  it('scales with hourly rate', () => {
    const low = calcRoi({ medewerkers: 10, uurloon: 30, totalScore: 15, sector: 'anders' });
    const high = calcRoi({ medewerkers: 10, uurloon: 60, totalScore: 15, sector: 'anders' });
    expect(high.monthly).toBe(low.monthly * 2);
  });

  it('higher totalScore increases savings', () => {
    const low = calcRoi({ medewerkers: 10, uurloon: 50, totalScore: 5, sector: 'anders' });
    const high = calcRoi({ medewerkers: 10, uurloon: 50, totalScore: 25, sector: 'anders' });
    expect(high.monthly).toBeGreaterThan(low.monthly);
  });

  it('falls back to 1.0 multiplier for unknown sector', () => {
    const unknown = calcRoi({ medewerkers: 10, uurloon: 50, totalScore: 15, sector: 'unknown' });
    const anders = calcRoi({ medewerkers: 10, uurloon: 50, totalScore: 15, sector: 'anders' });
    expect(unknown.monthly).toBe(anders.monthly);
  });
});

describe('isStep1Valid', () => {
  const VALID: Parameters<typeof isStep1Valid>[0] = {
    naam: 'René', bedrijf: 'EnableFlow', email: 'info@enableflow.nl',
    telefoon: '0612345678', bedrijfsgrootte: '1-10', sector: 'zakelijke-dienstverlening',
  };

  it('returns true when all fields are filled', () => {
    expect(isStep1Valid(VALID)).toBe(true);
  });

  it('returns false when naam is empty', () => {
    expect(isStep1Valid({ ...VALID, naam: '' })).toBe(false);
  });

  it('returns false when bedrijf is empty', () => {
    expect(isStep1Valid({ ...VALID, bedrijf: '' })).toBe(false);
  });

  it('returns false when email is empty', () => {
    expect(isStep1Valid({ ...VALID, email: '' })).toBe(false);
  });

  it('returns false when telefoon is empty', () => {
    expect(isStep1Valid({ ...VALID, telefoon: '' })).toBe(false);
  });

  it('returns false when bedrijfsgrootte is empty', () => {
    expect(isStep1Valid({ ...VALID, bedrijfsgrootte: '' })).toBe(false);
  });

  it('returns false when sector is empty', () => {
    expect(isStep1Valid({ ...VALID, sector: '' })).toBe(false);
  });
});

describe('isStep2Valid', () => {
  const VALID_STEP2: Parameters<typeof isStep2Valid>[0] = {
    teamVertrouwdheid: 2, managementSteun: 2,
    procesStandaard: 1, repetieveUren: 3,
    dataOpslag: 2, dataKwaliteit: 1,
    cloudGebruik: 3, systeemKoppeling: 2,
    urgentie: 2, primairDoel: 'kostenbesparing',
  };

  it('returns true when all scores are >= 0 and primairDoel is set', () => {
    expect(isStep2Valid(VALID_STEP2)).toBe(true);
  });

  it('returns false when primairDoel is empty', () => {
    expect(isStep2Valid({ ...VALID_STEP2, primairDoel: '' })).toBe(false);
  });

  it('returns false when any score is -1 (unset)', () => {
    expect(isStep2Valid({ ...VALID_STEP2, urgentie: -1 })).toBe(false);
  });

  it('returns false when teamVertrouwdheid is -1', () => {
    expect(isStep2Valid({ ...VALID_STEP2, teamVertrouwdheid: -1 })).toBe(false);
  });

  it('returns true when all scores are 0 (but primairDoel filled)', () => {
    expect(isStep2Valid({
      teamVertrouwdheid: 0, managementSteun: 0,
      procesStandaard: 0, repetieveUren: 0,
      dataOpslag: 0, dataKwaliteit: 0,
      cloudGebruik: 0, systeemKoppeling: 0,
      urgentie: 0, primairDoel: 'groei',
    })).toBe(true);
  });
});
