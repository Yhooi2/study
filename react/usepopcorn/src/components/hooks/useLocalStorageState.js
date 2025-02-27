import { useState, useEffect } from "react";

export function useLocalStorageState(initialValue, key) {
  const localValue = JSON.parse(localStorage.getItem(key));

  const [value, setValue] = useState(() =>
    localValue ? localValue : initialValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}
