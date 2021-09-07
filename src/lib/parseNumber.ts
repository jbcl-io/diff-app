export const parseNumber = (value: string): number => {
  if (value.trim().length === 0) {
    return NaN;
  }

  return Number(value);
};
