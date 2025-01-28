import { format } from 'date-fns';

export function formatDate(date: Date | null): string {
  if (!date) {
    return '';
  }

  return format(date, 'dd-MM-yyyy');
}

export function getDateMonth(date: Date | null): Date | undefined {
  if (!date) {
    return undefined;
  }

  return new Date(date.getUTCFullYear(), date.getUTCMonth());
}
