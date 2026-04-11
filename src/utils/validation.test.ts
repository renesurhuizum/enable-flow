import { describe, it, expect } from 'vitest';
import { isValidEmail } from './validation';

describe('isValidEmail', () => {
  it('accepts a standard email address', () => {
    expect(isValidEmail('test@example.com')).toBe(true);
  });

  it('accepts email with subdomain', () => {
    expect(isValidEmail('user@mail.example.nl')).toBe(true);
  });

  it('accepts email with plus sign', () => {
    expect(isValidEmail('user+tag@example.com')).toBe(true);
  });

  it('rejects empty string', () => {
    expect(isValidEmail('')).toBe(false);
  });

  it('rejects email without @', () => {
    expect(isValidEmail('userexample.com')).toBe(false);
  });

  it('rejects email without domain', () => {
    expect(isValidEmail('user@')).toBe(false);
  });

  it('rejects email without TLD', () => {
    expect(isValidEmail('user@example')).toBe(false);
  });

  it('rejects email with spaces', () => {
    expect(isValidEmail('user @example.com')).toBe(false);
  });

  it('rejects email with leading @', () => {
    expect(isValidEmail('@example.com')).toBe(false);
  });

  it('accepts uppercase characters in local part', () => {
    expect(isValidEmail('User.Name@Example.com')).toBe(true);
  });

  it('accepts all-uppercase email', () => {
    expect(isValidEmail('INFO@ENABLEFLOW.NL')).toBe(true);
  });

  it('accepts numeric local part', () => {
    expect(isValidEmail('123456@example.com')).toBe(true);
  });

  it('accepts international TLD like .photography or .io', () => {
    expect(isValidEmail('user@example.io')).toBe(true);
    expect(isValidEmail('contact@studio.photography')).toBe(true);
  });

  it('rejects email with only spaces', () => {
    expect(isValidEmail('   ')).toBe(false);
  });

  it('accepts double dot in domain (regex is intentionally permissive)', () => {
    // The regex /^[^\s@]+@[^\s@]+\.[^\s@]+$/ does not prohibit consecutive dots
    // in the domain — dots are not \s or @. This documents the known behavior.
    expect(isValidEmail('user@exam..ple.com')).toBe(true);
  });
});
