export const formatYear = (date: Date): string => {
  return date.getFullYear().toString();
};

export const formatDate = (date: Date): string => {
  return date.getFullYear().toString();
};

export const formatPostDate = (date: Date): string => {
  const formatter = new Intl.DateTimeFormat('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  });
  return formatter.format(date);
};
