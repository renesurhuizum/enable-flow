import { describe, it, expect } from 'vitest';
import { isStep1Valid, isStep2Valid, type Step1Fields, type Step2Fields } from './scanLogic';

const VALID_STEP1: Step1Fields = {
  naam: 'Jan Jansen',
  bedrijf: 'Acme BV',
  email: 'jan@acme.nl',
  telefoon: '0612345678',
  bedrijfsgrootte: '10-50',
  sector: 'zakelijke-dienstverlening',
};

const VALID_STEP2: Step2Fields = {
  teamVertrouwdheid: 2, managementSteun: 1,
  procesStandaard: 2, repetieveUren: 3,
  dataOpslag: 1, dataKwaliteit: 2,
  cloudGebruik: 2, systeemKoppeling: 1,
  urgentie: 2, primairDoel: 'efficiency',
};

describe('isStep1Valid', () => {
  it('returns true when all fields are filled', () => {
    expect(isStep1Valid(VALID_STEP1)).toBe(true);
  });

  it('returns false when naam is empty', () => {
    expect(isStep1Valid({ ...VALID_STEP1, naam: '' })).toBe(false);
  });

  it('returns false when bedrijf is empty', () => {
    expect(isStep1Valid({ ...VALID_STEP1, bedrijf: '' })).toBe(false);
  });

  it('returns false when email is empty', () => {
    expect(isStep1Valid({ ...VALID_STEP1, email: '' })).toBe(false);
  });

  it('returns false when telefoon is empty', () => {
    expect(isStep1Valid({ ...VALID_STEP1, telefoon: '' })).toBe(false);
  });

  it('returns false when bedrijfsgrootte is empty', () => {
    expect(isStep1Valid({ ...VALID_STEP1, bedrijfsgrootte: '' })).toBe(false);
  });

  it('returns false when sector is empty', () => {
    expect(isStep1Valid({ ...VALID_STEP1, sector: '' })).toBe(false);
  });

  it('returns false when all fields are empty', () => {
    expect(isStep1Valid({ naam: '', bedrijf: '', email: '', telefoon: '', bedrijfsgrootte: '', sector: '' })).toBe(false);
  });
});

describe('isStep2Valid', () => {
  it('returns true when all scores >= 0 and primairDoel set', () => {
    expect(isStep2Valid(VALID_STEP2)).toBe(true);
  });

  it('returns false when primairDoel is empty', () => {
    expect(isStep2Valid({ ...VALID_STEP2, primairDoel: '' })).toBe(false);
  });

  it('returns false when any score is -1 (unset)', () => {
    expect(isStep2Valid({ ...VALID_STEP2, teamVertrouwdheid: -1 })).toBe(false);
    expect(isStep2Valid({ ...VALID_STEP2, urgentie: -1 })).toBe(false);
    expect(isStep2Valid({ ...VALID_STEP2, dataKwaliteit: -1 })).toBe(false);
  });

  it('returns true when all scores are 0 and primairDoel set (0 is valid)', () => {
    expect(isStep2Valid({
      teamVertrouwdheid: 0, managementSteun: 0,
      procesStandaard: 0, repetieveUren: 0,
      dataOpslag: 0, dataKwaliteit: 0,
      cloudGebruik: 0, systeemKoppeling: 0,
      urgentie: 0, primairDoel: 'kostenbesparing',
    })).toBe(true);
  });

  it('returns false when multiple scores are -1', () => {
    expect(isStep2Valid({ ...VALID_STEP2, teamVertrouwdheid: -1, managementSteun: -1 })).toBe(false);
  });
});
