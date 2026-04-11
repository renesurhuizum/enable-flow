// Email validation utility
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Consult form validation — returns error message or null
export interface ConsultFormData {
  naam: string;
  bedrijf: string;
  email: string;
  telefoon: string;
  bedrijfsgrootte: string;
  sector: string;
  hasMicrosoft365: string;
  uitdaging: string;
  timeline: string;
}

export function validateConsultForm(data: ConsultFormData): string | null {
  if (!data.naam.trim()) return 'Naam is verplicht';
  if (!data.bedrijf.trim()) return 'Bedrijfsnaam is verplicht';
  if (!isValidEmail(data.email)) return 'Voer een geldig e-mailadres in';
  if (!data.telefoon.trim()) return 'Telefoonnummer is verplicht';
  return null;
}
