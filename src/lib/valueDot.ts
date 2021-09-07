export const hasDot = (value: string): boolean => {
  return value.includes(".");
};

export const addDot = (value: string): string => {
  return hasDot(value) ? value : `${value}.`;
};

export const removeDot = (value: string): string => {
  return hasDot(value) ? value.replaceAll(".", "") : value;
};

export const addRemoveDot = (value: string): string => {
  const v = value.toString();
  return hasDot(v) ? v.replaceAll(".", "") : `${v}.`;
};
