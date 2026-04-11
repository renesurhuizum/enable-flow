import { describe, it, expect } from 'vitest';
import { calcSimpleRoi } from './roiCalculator';

describe('calcSimpleRoi', () => {
  it('calculates monthly savings correctly with default 5h/week', () => {
    // 10 employees × €50/h × 5h × 4 weeks = €10,000
    const result = calcSimpleRoi({ employees: 10, hourlyRate: 50 });
    expect(result.monthly).toBe(10_000);
  });

  it('yearly is always 12x monthly', () => {
    const result = calcSimpleRoi({ employees: 10, hourlyRate: 50 });
    expect(result.yearly).toBe(result.monthly * 12);
  });

  it('scales linearly with employees', () => {
    const single = calcSimpleRoi({ employees: 1, hourlyRate: 50 });
    const ten = calcSimpleRoi({ employees: 10, hourlyRate: 50 });
    expect(ten.monthly).toBe(single.monthly * 10);
  });

  it('scales linearly with hourly rate', () => {
    const low = calcSimpleRoi({ employees: 10, hourlyRate: 25 });
    const high = calcSimpleRoi({ employees: 10, hourlyRate: 50 });
    expect(high.monthly).toBe(low.monthly * 2);
  });

  it('respects custom weeklyHoursSaved', () => {
    const default5 = calcSimpleRoi({ employees: 10, hourlyRate: 50 });
    const custom10 = calcSimpleRoi({ employees: 10, hourlyRate: 50, weeklyHoursSaved: 10 });
    expect(custom10.monthly).toBe(default5.monthly * 2);
  });

  it('returns 0 when employees is 0', () => {
    const result = calcSimpleRoi({ employees: 0, hourlyRate: 50 });
    expect(result.monthly).toBe(0);
    expect(result.yearly).toBe(0);
  });

  it('returns 0 when hourlyRate is 0', () => {
    const result = calcSimpleRoi({ employees: 10, hourlyRate: 0 });
    expect(result.monthly).toBe(0);
  });

  it('matches the exact ROICalculator component formula', () => {
    // Verify the extracted formula matches: employees * hourlyRate * 5 * 4
    const employees = 25;
    const hourlyRate = 60;
    const expected = employees * hourlyRate * 5 * 4;
    const result = calcSimpleRoi({ employees, hourlyRate });
    expect(result.monthly).toBe(expected);
  });
});
