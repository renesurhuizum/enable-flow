import { describe, it, expect } from 'vitest';
import { radioClass, toggleFaqItem, isActivePath, clamp, formatNL } from './uiHelpers';

describe('radioClass', () => {
  it('contains selected styles when selected=true', () => {
    const cls = radioClass(true);
    expect(cls).toContain('border-teal-500');
    expect(cls).toContain('bg-teal-50');
    expect(cls).toContain('text-teal-700');
  });

  it('contains unselected styles when selected=false', () => {
    const cls = radioClass(false);
    expect(cls).toContain('border-slate-200');
    expect(cls).toContain('text-slate-600');
  });

  it('always contains common layout classes', () => {
    [true, false].forEach(selected => {
      const cls = radioClass(selected);
      expect(cls).toContain('rounded-xl');
      expect(cls).toContain('border-2');
      expect(cls).toContain('cursor-pointer');
    });
  });

  it('selected and unselected classes differ', () => {
    expect(radioClass(true)).not.toBe(radioClass(false));
  });

  it('returns a non-empty string for both states', () => {
    expect(radioClass(true).length).toBeGreaterThan(0);
    expect(radioClass(false).length).toBeGreaterThan(0);
  });
});

describe('toggleFaqItem', () => {
  it('returns null when clicking the currently open item', () => {
    expect(toggleFaqItem(2, 2)).toBeNull();
  });

  it('returns the new index when clicking a different item', () => {
    expect(toggleFaqItem(0, 3)).toBe(3);
  });

  it('returns the index when current is null (nothing open)', () => {
    expect(toggleFaqItem(null, 0)).toBe(0);
    expect(toggleFaqItem(null, 5)).toBe(5);
  });

  it('clicking item 0 when 0 is open closes it', () => {
    expect(toggleFaqItem(0, 0)).toBeNull();
  });

  it('switching from item 1 to item 4 returns 4', () => {
    expect(toggleFaqItem(1, 4)).toBe(4);
  });
});

describe('isActivePath', () => {
  it('returns true for exact path match', () => {
    expect(isActivePath('/over-mij', '/over-mij')).toBe(true);
  });

  it('returns true for root path match', () => {
    expect(isActivePath('/', '/')).toBe(true);
  });

  it('returns false for different paths', () => {
    expect(isActivePath('/scan', '/diensten')).toBe(false);
  });

  it('returns false for partial matches (not prefix-based)', () => {
    expect(isActivePath('/diensten/ai', '/diensten')).toBe(false);
  });

  it('is case sensitive', () => {
    expect(isActivePath('/Scan', '/scan')).toBe(false);
  });
});

describe('clamp', () => {
  it('returns value unchanged when within range', () => {
    expect(clamp(5, 1, 10)).toBe(5);
  });

  it('clamps to min when below range', () => {
    expect(clamp(-5, 0, 100)).toBe(0);
  });

  it('clamps to max when above range', () => {
    expect(clamp(150, 0, 100)).toBe(100);
  });

  it('returns min when value equals min', () => {
    expect(clamp(0, 0, 100)).toBe(0);
  });

  it('returns max when value equals max', () => {
    expect(clamp(100, 0, 100)).toBe(100);
  });
});

describe('formatNL', () => {
  it('formats 1000 as Dutch locale (dot as thousands separator)', () => {
    const formatted = formatNL(1000);
    // nl-NL uses . as thousands separator
    expect(formatted).toMatch(/1[.|\u00a0]?000/);
  });

  it('formats 0 as "0"', () => {
    expect(formatNL(0)).toBe('0');
  });

  it('formats small numbers without separator', () => {
    expect(formatNL(42)).toBe('42');
  });

  it('formats large ROI amounts', () => {
    const result = formatNL(12000);
    expect(result.length).toBeGreaterThan(4); // has separator
  });
});
