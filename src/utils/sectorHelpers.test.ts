import { describe, it, expect } from 'vitest';
import {
  SECTOR_OPTIONS,
  getSectorLabel,
  getSectorMultiplier,
  getAllSectorValues,
  isKnownSector,
} from './sectorHelpers';
import { SECTOR_MULTIPLIER } from './scanLogic';

describe('SECTOR_OPTIONS', () => {
  it('has exactly 6 entries', () => {
    expect(SECTOR_OPTIONS).toHaveLength(6);
  });

  it('every option has a non-empty value and label', () => {
    SECTOR_OPTIONS.forEach(o => {
      expect(o.value.length).toBeGreaterThan(0);
      expect(o.label.length).toBeGreaterThan(0);
    });
  });

  it('values match the keys in SECTOR_MULTIPLIER', () => {
    const values = SECTOR_OPTIONS.map(o => o.value).sort();
    const keys = Object.keys(SECTOR_MULTIPLIER).sort();
    expect(values).toEqual(keys);
  });

  it('includes "anders" as an option', () => {
    expect(SECTOR_OPTIONS.some(o => o.value === 'anders')).toBe(true);
  });
});

describe('getSectorLabel', () => {
  it('returns the Dutch label for a known sector', () => {
    expect(getSectorLabel('zakelijke-dienstverlening')).toBe('Zakelijke dienstverlening');
    expect(getSectorLabel('productie-industrie')).toBe('Productie / Industrie');
    expect(getSectorLabel('anders')).toBe('Anders');
  });

  it('returns null for an unknown sector', () => {
    expect(getSectorLabel('onbekend')).toBeNull();
    expect(getSectorLabel('')).toBeNull();
  });

  it('is case-sensitive', () => {
    expect(getSectorLabel('Zakelijke-Dienstverlening')).toBeNull();
  });
});

describe('getSectorMultiplier', () => {
  it('returns the correct multiplier for each known sector', () => {
    expect(getSectorMultiplier('zakelijke-dienstverlening')).toBe(1.2);
    expect(getSectorMultiplier('productie-industrie')).toBe(1.4);
    expect(getSectorMultiplier('retail-ecommerce')).toBe(1.1);
    expect(getSectorMultiplier('zorg-welzijn')).toBe(1.0);
    expect(getSectorMultiplier('overheid-publiek')).toBe(0.9);
    expect(getSectorMultiplier('anders')).toBe(1.0);
  });

  it('falls back to 1.0 for unknown sectors', () => {
    expect(getSectorMultiplier('onbekend')).toBe(1.0);
    expect(getSectorMultiplier('')).toBe(1.0);
  });

  it('productie-industrie has the highest multiplier', () => {
    const multipliers = Object.values(SECTOR_MULTIPLIER);
    expect(getSectorMultiplier('productie-industrie')).toBe(Math.max(...multipliers));
  });

  it('overheid-publiek has the lowest multiplier', () => {
    const multipliers = Object.values(SECTOR_MULTIPLIER);
    expect(getSectorMultiplier('overheid-publiek')).toBe(Math.min(...multipliers));
  });
});

describe('getAllSectorValues', () => {
  it('returns exactly 6 sector values', () => {
    expect(getAllSectorValues()).toHaveLength(6);
  });

  it('contains all expected sector keys', () => {
    const values = getAllSectorValues();
    expect(values).toContain('zakelijke-dienstverlening');
    expect(values).toContain('productie-industrie');
    expect(values).toContain('anders');
  });

  it('all returned values are known sectors (round-trip)', () => {
    getAllSectorValues().forEach(v => {
      expect(isKnownSector(v)).toBe(true);
    });
  });
});

describe('isKnownSector', () => {
  it('returns true for all known sectors', () => {
    expect(isKnownSector('zakelijke-dienstverlening')).toBe(true);
    expect(isKnownSector('productie-industrie')).toBe(true);
    expect(isKnownSector('anders')).toBe(true);
  });

  it('returns false for unknown sectors', () => {
    expect(isKnownSector('tech')).toBe(false);
    expect(isKnownSector('')).toBe(false);
    expect(isKnownSector('ANDERS')).toBe(false);
  });
});
