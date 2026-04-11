import { describe, it, expect } from 'vitest';
import { validateConsultForm, type ConsultFormData } from './validation';

const VALID: ConsultFormData = {
  naam: 'Jan Jansen',
  bedrijf: 'Acme BV',
  email: 'jan@acme.nl',
  telefoon: '0612345678',
  bedrijfsgrootte: '10-50',
  sector: 'zakelijke-dienstverlening',
  hasMicrosoft365: 'ja',
  uitdaging: 'Wil processen automatiseren',
  timeline: '3-maanden',
};

describe('validateConsultForm', () => {
  it('returns null for a fully valid form', () => {
    expect(validateConsultForm(VALID)).toBeNull();
  });

  it('returns error when naam is empty', () => {
    expect(validateConsultForm({ ...VALID, naam: '' })).toBe('Naam is verplicht');
  });

  it('returns error when naam is only whitespace', () => {
    expect(validateConsultForm({ ...VALID, naam: '   ' })).toBe('Naam is verplicht');
  });

  it('returns error when bedrijf is empty', () => {
    expect(validateConsultForm({ ...VALID, bedrijf: '' })).toBe('Bedrijfsnaam is verplicht');
  });

  it('returns email error for invalid email', () => {
    expect(validateConsultForm({ ...VALID, email: 'niet-een-email' })).toBe('Voer een geldig e-mailadres in');
  });

  it('returns email error for empty email', () => {
    expect(validateConsultForm({ ...VALID, email: '' })).toBe('Voer een geldig e-mailadres in');
  });

  it('returns error when telefoon is empty', () => {
    expect(validateConsultForm({ ...VALID, telefoon: '' })).toBe('Telefoonnummer is verplicht');
  });

  it('validates naam before email (priority order)', () => {
    // Both naam and email invalid — naam error comes first
    const err = validateConsultForm({ ...VALID, naam: '', email: 'bad' });
    expect(err).toBe('Naam is verplicht');
  });

  it('optional fields do not affect validity', () => {
    // uitdaging, timeline, hasMicrosoft365, bedrijfsgrootte, sector can be empty
    expect(validateConsultForm({
      ...VALID,
      uitdaging: '',
      timeline: '',
      hasMicrosoft365: '',
      bedrijfsgrootte: '',
      sector: '',
    })).toBeNull();
  });
});
