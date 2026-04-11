import { describe, it, expect } from 'vitest';
import { RECS, getTopRecs, calcScores, type ScanScoreInput } from './scanLogic';

const DIMS = ['teamgereedheid', 'procesrijpheid', 'datagereedheid', 'technischeBasis', 'urgentieAmbitie'];

describe('RECS content coverage', () => {
  it('has entries for all 5 dimensions', () => {
    DIMS.forEach(dim => {
      expect(RECS).toHaveProperty(dim);
    });
  });

  it('each dimension has a non-empty .low text', () => {
    DIMS.forEach(dim => {
      expect(RECS[dim].low.length).toBeGreaterThan(20);
    });
  });

  it('each dimension has a non-empty .mid text', () => {
    DIMS.forEach(dim => {
      expect(RECS[dim].mid.length).toBeGreaterThan(20);
    });
  });

  it('low and mid texts are different for each dimension', () => {
    DIMS.forEach(dim => {
      expect(RECS[dim].low).not.toBe(RECS[dim].mid);
    });
  });
});

describe('getTopRecs threshold: score < 3 → low, score >= 3 → mid', () => {
  // Force a single dim to score exactly 0 (below threshold) and check .low text is used
  it('uses .low text when dim score is 0', () => {
    const s = calcScores({
      teamVertrouwdheid: 0, managementSteun: 0, // teamgereedheid=0
      procesStandaard: 3, repetieveUren: 3,
      dataOpslag: 3, dataKwaliteit: 3,
      cloudGebruik: 3, systeemKoppeling: 3,
      urgentie: 3, primairDoel: 'groei',
    });
    const recs = getTopRecs(s);
    const teamRec = recs.find(r => r.dim === 'teamgereedheid');
    expect(teamRec).toBeDefined();
    expect(teamRec!.text).toBe(RECS.teamgereedheid.low);
  });

  it('uses .low text when dim score is 2 (< 3)', () => {
    const s = calcScores({
      teamVertrouwdheid: 1, managementSteun: 1, // teamgereedheid=2
      procesStandaard: 3, repetieveUren: 3,
      dataOpslag: 3, dataKwaliteit: 3,
      cloudGebruik: 3, systeemKoppeling: 3,
      urgentie: 3, primairDoel: 'groei',
    });
    const recs = getTopRecs(s);
    const teamRec = recs.find(r => r.dim === 'teamgereedheid');
    expect(teamRec).toBeDefined();
    expect(teamRec!.text).toBe(RECS.teamgereedheid.low);
  });

  it('uses .mid text when dim score is 3 (= threshold)', () => {
    // Make technischeBasis=3 (lowest), everything else higher
    const s = calcScores({
      teamVertrouwdheid: 3, managementSteun: 3,     // teamgereedheid=6
      procesStandaard: 3, repetieveUren: 3,          // procesrijpheid=6
      dataOpslag: 3, dataKwaliteit: 3,               // datagereedheid=6
      cloudGebruik: 1, systeemKoppeling: 2,          // technischeBasis=3 (lowest)
      urgentie: 3, primairDoel: 'groei',             // urgentieAmbitie=5
    });
    const recs = getTopRecs(s);
    const techRec = recs.find(r => r.dim === 'technischeBasis');
    expect(techRec).toBeDefined();
    expect(techRec!.text).toBe(RECS.technischeBasis.mid);
  });

  it('uses .mid text when dim score is 4 (> threshold)', () => {
    const s = calcScores({
      teamVertrouwdheid: 2, managementSteun: 2, // teamgereedheid=4
      procesStandaard: 3, repetieveUren: 3,
      dataOpslag: 3, dataKwaliteit: 3,
      cloudGebruik: 3, systeemKoppeling: 3,
      urgentie: 3, primairDoel: 'groei',
    });
    const recs = getTopRecs(s);
    const teamRec = recs.find(r => r.dim === 'teamgereedheid');
    expect(teamRec).toBeDefined();
    expect(teamRec!.text).toBe(RECS.teamgereedheid.mid);
  });
});

describe('RECS text quality', () => {
  it('all texts mention actionable concepts', () => {
    // Each text should be an actual recommendation (not empty or placeholder)
    DIMS.forEach(dim => {
      expect(RECS[dim].low).toMatch(/\w{5,}/); // at least one 5-char word
      expect(RECS[dim].mid).toMatch(/\w{5,}/);
    });
  });
});
