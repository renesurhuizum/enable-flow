// Sector-related helpers used in scan results and ROI calculations.
import { SECTOR_MULTIPLIER } from './scanLogic';

export interface SectorOption {
  value: string;
  label: string;
}

export const SECTOR_OPTIONS: SectorOption[] = [
  { value: 'zakelijke-dienstverlening', label: 'Zakelijke dienstverlening' },
  { value: 'productie-industrie', label: 'Productie / Industrie' },
  { value: 'retail-ecommerce', label: 'Retail / E-commerce' },
  { value: 'zorg-welzijn', label: 'Zorg / Welzijn' },
  { value: 'overheid-publiek', label: 'Overheid / Publiek' },
  { value: 'anders', label: 'Anders' },
];

/**
 * Returns the human-readable label for a sector value, or null if unknown.
 */
export function getSectorLabel(value: string): string | null {
  return SECTOR_OPTIONS.find(o => o.value === value)?.label ?? null;
}

/**
 * Returns the ROI multiplier for a sector. Falls back to 1.0 for unknown sectors.
 */
export function getSectorMultiplier(sector: string): number {
  return SECTOR_MULTIPLIER[sector] ?? 1.0;
}

/**
 * Returns all known sector values.
 */
export function getAllSectorValues(): string[] {
  return SECTOR_OPTIONS.map(o => o.value);
}

/**
 * Returns true if the given sector value is a recognised sector.
 */
export function isKnownSector(sector: string): boolean {
  return sector in SECTOR_MULTIPLIER;
}
