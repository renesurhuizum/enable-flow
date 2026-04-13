// Pure UI helper functions extracted from components for testability

/**
 * Returns Tailwind CSS classes for a radio/toggle button.
 * selected=true → teal highlight; selected=false → neutral with hover.
 */
export function radioClass(selected: boolean): string {
  return `flex-1 text-center py-2.5 px-2 rounded-xl border-2 cursor-pointer text-sm font-medium transition-all ${
    selected
      ? 'border-teal-500 bg-teal-50 text-teal-700'
      : 'border-slate-200 hover:border-teal-300 text-slate-600'
  }`;
}

/**
 * Toggle an accordion/FAQ item: clicking the open item closes it (returns null),
 * clicking a different item opens it (returns that index).
 */
export function toggleFaqItem(current: number | null, index: number): number | null {
  return current === index ? null : index;
}

/**
 * Returns whether a nav path is the currently active route.
 */
export function isActivePath(pathname: string, path: string): boolean {
  return pathname === path;
}

/**
 * Clamps a number between min and max (inclusive).
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Formats a number as Dutch-locale currency string (e.g. 1234 → "1.234").
 */
export function formatNL(amount: number): string {
  return amount.toLocaleString('nl-NL');
}
