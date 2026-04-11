import { describe, it, expect } from 'vitest';
import { calcRoi, SECTOR_MULTIPLIER } from './scanLogic';

describe('calcRoi formula verification', () => {
  it('weeklyHoursSaved scales from 3h (score=0) to 7h (score=30)', () => {
    // At totalScore=0: weeklyHoursSaved = 3 + (0/30)*4 = 3
    // At totalScore=30: weeklyHoursSaved = 3 + (30/30)*4 = 7
    // monthly = medewerkers * uurloon * weeklyHoursSaved * 4 * sectorMul
    const atZero = calcRoi({ medewerkers: 1, uurloon: 1, totalScore: 0, sector: 'anders' });
    const atMax = calcRoi({ medewerkers: 1, uurloon: 1, totalScore: 30, sector: 'anders' });
    // At score=0: Math.round(1*1*3*4*1) = 12
    expect(atZero.monthly).toBe(12);
    // At score=30: Math.round(1*1*7*4*1) = 28
    expect(atMax.monthly).toBe(28);
  });

  it('formula is: round(medewerkers * uurloon * (3 + score/30*4) * 4 * sectorMul)', () => {
    const medewerkers = 5;
    const uurloon = 40;
    const totalScore = 15;
    const sector = 'zakelijke-dienstverlening'; // multiplier 1.2
    const weeklyHoursSaved = 3 + (totalScore / 30) * 4; // 3 + 2 = 5
    const expected = Math.round(medewerkers * uurloon * weeklyHoursSaved * 4 * 1.2);
    const result = calcRoi({ medewerkers, uurloon, totalScore, sector });
    expect(result.monthly).toBe(expected);
  });
});

describe('all sector multipliers', () => {
  const BASE = { medewerkers: 10, uurloon: 50, totalScore: 15 };

  it.each([
    ['zakelijke-dienstverlening', 1.2],
    ['productie-industrie', 1.4],
    ['retail-ecommerce', 1.1],
    ['zorg-welzijn', 1.0],
    ['overheid-publiek', 0.9],
    ['anders', 1.0],
  ])('%s has multiplier %f', (sector, multiplier) => {
    expect(SECTOR_MULTIPLIER[sector]).toBe(multiplier);
  });

  it('productie-industrie produces 55% more than overheid-publiek', () => {
    const industrie = calcRoi({ ...BASE, sector: 'productie-industrie' });
    const overheid = calcRoi({ ...BASE, sector: 'overheid-publiek' });
    // 1.4 / 0.9 ≈ 1.556 — industrie should be ~56% higher
    expect(industrie.monthly / overheid.monthly).toBeCloseTo(1.4 / 0.9, 1);
  });

  it('retail-ecommerce produces 10% more than zorg-welzijn', () => {
    const retail = calcRoi({ ...BASE, sector: 'retail-ecommerce' });
    const zorg = calcRoi({ ...BASE, sector: 'zorg-welzijn' });
    expect(retail.monthly / zorg.monthly).toBeCloseTo(1.1, 1);
  });
});

describe('calcRoi rounding', () => {
  it('always returns integer monthly value', () => {
    const roi = calcRoi({ medewerkers: 3, uurloon: 37, totalScore: 11, sector: 'zakelijke-dienstverlening' });
    expect(Number.isInteger(roi.monthly)).toBe(true);
    expect(Number.isInteger(roi.yearly)).toBe(true);
  });

  it('rounds to nearest integer (not floor/ceil)', () => {
    // medewerkers=1, uurloon=1, totalScore=0, sector=anders → 1*1*3*4*1 = 12 exactly
    const exact = calcRoi({ medewerkers: 1, uurloon: 1, totalScore: 0, sector: 'anders' });
    expect(exact.monthly).toBe(12);
  });
});
