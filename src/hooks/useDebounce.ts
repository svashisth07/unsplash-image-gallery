import { useEffect } from "react";

export const useDebounce = (
  value: string,
  callback: (value: string) => void,
  delay: number
) => {
  useEffect(() => {
    const timeout = setTimeout(() => callback(value), delay);
    return () => clearTimeout(timeout);
  }, [value, delay, callback]);
};
