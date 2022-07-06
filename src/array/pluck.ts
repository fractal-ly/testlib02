export const pluck = <T, K extends keyof T>(key: K, array: T[]): T[K][] => {
  return array.map((item) => item[key]);
};
