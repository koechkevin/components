import { differenceInMinutes, endOfDay, format, isSameDay, startOfDay, subDays } from 'date-fns';

const isToday = (t1: Date, t0: Date) => {
  const start = startOfDay(t0);
  const end = endOfDay(t0);

  return isSameDay(t1, start) && isSameDay(t1, end);
};

const isYesterDay = (t1: Date, t0: Date) => {
  const yesterday = subDays(t0, 1);

  const start = startOfDay(yesterday);
  const end = endOfDay(yesterday);

  return isSameDay(t1, start) && isSameDay(t1, end);
};

export const dateFormat = (d1: Date, d0: Date = new Date()) => {
  if (isToday(d1, d0)) {
    return 'Today';
  }

  if (isYesterDay(d1, d0)) {
    return 'Yesterday';
  }

  return format(d1, 'EEEE, d LLL uuuu');
};

export const shortTimeStampFormat = (t: Date = new Date()) => {
  return format(t, 'h:mm a');
};

export const timeStampFormat = (t1: Date, t0: Date = new Date()) => {
  const diffInMinutes = differenceInMinutes(t0, t1);

  if (diffInMinutes < 1) {
    return 'Just now';
  }

  if (diffInMinutes <= 5) {
    return 'A few minutes ago';
  }

  if (diffInMinutes <= 59) {
    return `${diffInMinutes} minutes ago`;
  }

  if (isToday(t1, t0)) {
    return `Today ${format(t1, 'h:mm a')}`;
  }

  if (isYesterDay(t1, t0)) {
    return `Yesterday ${format(t1, 'h:mm a')}`;
  }

  return format(t1, 'd LLL Y, h:mm a');
};

export default timeStampFormat;
