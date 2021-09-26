/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const deepClone = (obj: any) => {
  const deepObj: any = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    const current = obj[key];
    deepObj[key] = typeof current === "object" ? deepClone(current) : obj[key];
  }
  return deepObj;
};
