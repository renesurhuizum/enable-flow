// Form data types
export interface FormData {
  naam: string;
  bedrijf: string;
  email: string;
  telefoon: string;
  bedrijfsgrootte: string;
  sector: string;
  hasMicrosoft365: string;
  uitdaging: string;
  timeline: string;
  // Scan-only fields
  aiUsage: string;
  doelen: string[];
}

export type FormType = 'consult' | 'scan';
