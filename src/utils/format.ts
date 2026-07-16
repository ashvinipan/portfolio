/** Format a date as e.g. "Jul 14, 2026". */
export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/** ISO date (YYYY-MM-DD) for datetime attributes. */
export function isoDate(date: Date): string {
  return date.toISOString().split('T')[0];
}
