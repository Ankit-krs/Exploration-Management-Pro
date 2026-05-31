export const daysDiff = (startDateStr: string, endDateStr: string): number => {
  const start = new Date(startDateStr);
  const end = new Date(endDateStr);
  const diffTime = end.getTime() - start.getTime();
  if (diffTime < 0) return 0;
  return Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
};
