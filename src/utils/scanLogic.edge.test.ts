import { describe, it, expect } from 'vitest';
import { calcScores, getNiveau, getTopRecs, calcRoi, SECTOR_MULTIPLIER, type ScanScoreInput } from './scanLogic';

// Helper to build a ScanScoreInput with a fixed total score spread evenly
function makeInputWithTotal(approxTotal: number): ScanScoreInput {
  // Distribute as evenly as possible across 8 dimensions (urgentie=0, no primairDoel)
  // team(2)+proces(2)+data(2)+tech(2)+urgentie(0) = 8 pairs → val per field
  const val = Math.floor(approxTotal / 8);
  return {
    teamVertrouwdheid: val, managementSteun: 0,
    procesStandaard: val, repetieveUren: 0,
    dataOpslag: val, dataKwaliteit: 0,
    cloudGebruik: val, systeemKoppeling: 0,
    urgentie: 0, primairDoel: '',
  };
}

describe('getNiveau boundary values', () => {
  it('exactly 25 returns Bewust (not Oriënterend)', () => {
    expect(getNiveau(25).label).toBe('Bewust');
  });

  it('exactly 50 returns Klaar (not Bewust)', () => {
    expect(getNiveau(50).label).toBe('Klaar');
  });

  it('exactly 75 returns Gevorderd (not Klaar)', () => {
    expect(getNiveau(75).label).toBe('Gevorderd');
  });

  it('24 returns Oriënterend', () => {
    expect(getNiveau(24).label).toBe('Oriënterend');
  });

  it('74 returns Klaar', () => {
    expect(getNiveau(74).label).toBe('Klaar');
  });

  it('returns correct bg class for all levels', () => {
    expect(getNiveau(10).bg).toBe('bg-amber-50');
    expect(getNiveau(30).bg).toBe('bg-blue-50');
    expect(getNiveau(60).bg).toBe('bg-teal-50');
    expect(getNiveau(80).bg).toBe('bg-violet-50');
  });
});

describe('calcScores edge cases', () => {
  it('pct caps sensibly at 97 for maximum valid input', () => {
    // max total = 9 fields × 3 + 2 (primairDoel) = 29 → 97%
    const s = calcScores({
      teamVertrouwdheid: 3, managementSteun: 3,
      procesStandaard: 3, repetieveUren: 3,
      dataOpslag: 3, dataKwaliteit: 3,
      cloudGebruik: 3, systeemKoppeling: 3,
      urgentie: 3, primairDoel: 'groei',
    });
    expect(s.pct).toBe(97);
    expect(s.total).toBe(29);
  });

  it('only urgentie contributes when all other fields are 0', () => {
    const s = calcScores({
      teamVertrouwdheid: 0, managementSteun: 0,
      procesStandaard: 0, repetieveUren: 0,
      dataOpslag: 0, dataKwaliteit: 0,
      cloudGebruik: 0, systeemKoppeling: 0,
      urgentie: 3, primairDoel: '',
    });
    expect(s.urgentieAmbitie).toBe(3);
    expect(s.total).toBe(3);
  });

  it('primairDoel adds exactly 2 regardless of urgentie value', () => {
    const without = calcScores({ teamVertrouwdheid: 0, managementSteun: 0,
      procesStandaard: 0, repetieveUren: 0, dataOpslag: 0, dataKwaliteit: 0,
      cloudGebruik: 0, systeemKoppeling: 0, urgentie: 2, primairDoel: '' });
    const with_ = calcScores({ ...without, urgentie: 2, primairDoel: 'x' } as unknown as ScanScoreInput);
    // Re-calc properly
    const withDoel = calcScores({ teamVertrouwdheid: 0, managementSteun: 0,
      procesStandaard: 0, repetieveUren: 0, dataOpslag: 0, dataKwaliteit: 0,
      cloudGebruik: 0, systeemKoppeling: 0, urgentie: 2, primairDoel: 'x' });
    expect(withDoel.urgentieAmbitie - without.urgentieAmbitie).toBe(2);
  });
});

describe('getTopRecs ordering', () => {
  it('returns dims sorted ascending by score', () => {
    // Make scores: team=0, proces=1, data=2, tech=3, urgentie=5
    const s = calcScores({
      teamVertrouwdheid: 0, managementSteun: 0, // team=0
      procesStandaard: 0, repetieveUren: 1,     // proces=1
      dataOpslag: 1, dataKwaliteit: 1,           // data=2
      cloudGebruik: 1, systeemKoppeling: 2,      // tech=3
      urgentie: 3, primairDoel: 'x',             // urgentie=3+2=5
    });
    const recs = getTopRecs(s);
    // The 3 lowest should be: team(0), proces(1), data(2)
    const dims = recs.map(r => r.dim);
    expect(dims[0]).toBe('teamgereedheid'); // lowest first
    expect(dims).toContain('procesrijpheid');
    expect(dims).toContain('datagereedheid');
    expect(dims).not.toContain('urgentieAmbitie');
  });

  it('all recommendations have non-empty text', () => {
    const s = calcScores({
      teamVertrouwdheid: 1, managementSteun: 1,
      procesStandaard: 2, repetieveUren: 2,
      dataOpslag: 3, dataKwaliteit: 3,
      cloudGebruik: 1, systeemKoppeling: 1,
      urgentie: 2, primairDoel: 'efficiency',
    });
    getTopRecs(s).forEach(r => {
      expect(r.text.length).toBeGreaterThan(10);
      expect(r.dim).toBeTruthy();
    });
  });
});

describe('calcRoi edge cases', () => {
  it('returns 0 when medewerkers is 0', () => {
    const roi = calcRoi({ medewerkers: 0, uurloon: 50, totalScore: 15, sector: 'anders' });
    expect(roi.monthly).toBe(0);
    expect(roi.yearly).toBe(0);
  });

  it('returns 0 when uurloon is 0', () => {
    const roi = calcRoi({ medewerkers: 10, uurloon: 0, totalScore: 15, sector: 'anders' });
    expect(roi.monthly).toBe(0);
  });

  it('yearly is always 12x monthly', () => {
    const roi = calcRoi({ medewerkers: 7, uurloon: 45, totalScore: 20, sector: 'zakelijke-dienstverlening' });
    expect(roi.yearly).toBe(roi.monthly * 12);
  });

  it('zorg-welzijn has multiplier 1.0 (same as anders)', () => {
    const zorg = calcRoi({ medewerkers: 10, uurloon: 50, totalScore: 15, sector: 'zorg-welzijn' });
    const anders = calcRoi({ medewerkers: 10, uurloon: 50, totalScore: 15, sector: 'anders' });
    expect(zorg.monthly).toBe(anders.monthly);
  });

  it('totalScore=0 uses base 3h/week (formula: 3 + 0/30*4 = 3)', () => {
    // weeklyHoursSaved = 3 + (0/30)*4 = 3
    // monthly = round(10 * 50 * 3 * 4 * 1.0) = 6000
    const roi = calcRoi({ medewerkers: 10, uurloon: 50, totalScore: 0, sector: 'anders' });
    expect(roi.monthly).toBe(6_000);
  });

  it('totalScore=30 uses max 7h/week (formula: 3 + 30/30*4 = 7)', () => {
    // weeklyHoursSaved = 3 + (30/30)*4 = 7
    // monthly = round(10 * 50 * 7 * 4 * 1.0) = 14000
    const roi = calcRoi({ medewerkers: 10, uurloon: 50, totalScore: 30, sector: 'anders' });
    expect(roi.monthly).toBe(14_000);
  });

  it('retail-ecommerce multiplier 1.1 produces 10% more than anders', () => {
    const base = calcRoi({ medewerkers: 10, uurloon: 50, totalScore: 15, sector: 'anders' });
    const retail = calcRoi({ medewerkers: 10, uurloon: 50, totalScore: 15, sector: 'retail-ecommerce' });
    expect(retail.monthly).toBeCloseTo(base.monthly * 1.1, 0);
  });
});

describe('getNiveau CSS classes', () => {
  it('returns correct border class for each niveau', () => {
    expect(getNiveau(10).border).toBe('border-amber-200');
    expect(getNiveau(30).border).toBe('border-blue-200');
    expect(getNiveau(60).border).toBe('border-teal-200');
    expect(getNiveau(80).border).toBe('border-violet-200');
  });
});

describe('SECTOR_MULTIPLIER exact values', () => {
  it('zakelijke-dienstverlening is 1.2', () => {
    expect(SECTOR_MULTIPLIER['zakelijke-dienstverlening']).toBe(1.2);
  });

  it('retail-ecommerce is 1.1', () => {
    expect(SECTOR_MULTIPLIER['retail-ecommerce']).toBe(1.1);
  });

  it('zorg-welzijn is 1.0', () => {
    expect(SECTOR_MULTIPLIER['zorg-welzijn']).toBe(1.0);
  });

  it('overheid-publiek is 0.9', () => {
    expect(SECTOR_MULTIPLIER['overheid-publiek']).toBe(0.9);
  });

  it('has exactly 6 sectors', () => {
    expect(Object.keys(SECTOR_MULTIPLIER)).toHaveLength(6);
  });
});
