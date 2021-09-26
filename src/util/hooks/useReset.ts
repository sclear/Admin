/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { deepClone } from "./../tool";

export default function useReset<T = any>(
  data: any,
  cloneData: any
): {
  data: T;
  reset: () => void;
} {
  return {
    data: deepClone(cloneData),
    reset(): void {
      for (const key in data) {
        data[key] = cloneData[key];
      }
    },
  };
}
