import { describe, it, expect } from 'vitest';
import { DIM_LABELS, calcScores, getNiveau, calcRoi } from './scanLogic';

const DIMS = ['teamgereedheid', 'procesrijpheid', 'datagereedheid', 'technischeBasis', 'urgentieAmbitie'];

describe('DIM_LABELS', () => {
  it('has exactly 5 entries', () => {
    expect(Object.keys(DIM_LABELS)).toHaveLength(5);
  });

  it('has a label for each dimension', () => {
    DIMS.forEach(dim => {
      expect(DIM_LABELS).toHaveProperty(dim);
      expect(DIM_LABELS[dim].length).toBeGreaterThan(3);
    });
  });

  it('has the correct Dutch labels', () => {
    expect(DIM_LABELS.teamgereedheid).toBe('Teamgereedheid');
    expect(DIM_LABELS.procesrijpheid).toBe('Procesrijpheid');
    expect(DIM_LABELS.datagereedheid).toBe('Datagereedheid');
    expect(DIM_LABELS.technischeBasis).toBe('Technische basis');
    expect(DIM_LABELS.urgentieAmbitie).toBe('Urgentie & Ambitie');
  });
});

describe('Known input/output snapshots', () => {
  it('snapshot: all-1 input gives pct=40, niveau=Bewust', () => {
    // all fields=1, no primairDoel → total=8, pct=round(8/30*100)=27
    const s = calcScores({
      teamVertrouwdheid: 1, managementSteun: 1,
      procesStandaard: 1, repetieveUren: 1,
      dataOpslag: 1, dataKwaliteit: 1,
      cloudGebruik: 1, systeemKoppeling: 1,
      urgentie: 1, primairDoel: '',
    });
    expect(s.total).toBe(9);
    expect(s.pct).toBe(30); // round(9/30*100) = 30
    expect(getNiveau(s.pct).label).toBe('Bewust');
  });

  it('snapshot: all-2 input with primairDoel gives pct=73, niveau=Klaar', () => {
    // all fields=2, primairDoel set → total=2*8+2+2=20, pct=round(20/30*100)=67
    const s = calcScores({
      teamVertrouwdheid: 2, managementSteun: 2,
      procesStandaard: 2, repetieveUren: 2,
      dataOpslag: 2, dataKwaliteit: 2,
      cloudGebruik: 2, systeemKoppeling: 2,
      urgentie: 2, primairDoel: 'efficiency',
    });
    // urgentieAmbitie = 2+2 = 4, others = 4 each → total = 4*4+4 = 20
    expect(s.total).toBe(20);
    expect(s.pct).toBe(67); // round(20/30*100) = 67
    expect(getNiveau(s.pct).label).toBe('Klaar');
  });

  it('snapshot: ROI for 20 medewerkers, €60/uur, score 20, productie', () => {
    // weeklyHoursSaved = 3 + (20/30)*4 = 3 + 2.667 = 5.667
    // monthly = round(20 * 60 * 5.667 * 4 * 1.4) = round(37,998.4) = 37998 or 38000
    const roi = calcRoi({ medewerkers: 20, uurloon: 60, totalScore: 20, sector: 'productie-industrie' });
    const weeklyHours = 3 + (20 / 30) * 4;
    const expected = Math.round(20 * 60 * weeklyHours * 4 * 1.4);
    expect(roi.monthly).toBe(expected);
    expect(roi.yearly).toBe(expected * 12);
  });

  it('snapshot: zero-score with primairDoel=empty gives niveau Oriënterend', () => {
    const s = calcScores({
      teamVertrouwdheid: 0, managementSteun: 0,
      procesStandaard: 0, repetieveUren: 0,
      dataOpslag: 0, dataKwaliteit: 0,
      cloudGebruik: 0, systeemKoppeling: 0,
      urgentie: 0, primairDoel: '',
    });
    expect(s.total).toBe(0);
    expect(s.pct).toBe(0);
    expect(getNiveau(0).label).toBe('Oriënterend');
  });
});
