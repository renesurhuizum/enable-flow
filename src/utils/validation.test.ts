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
});
