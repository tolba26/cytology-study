import { useEffect, useState } from "react";

const KEY = "cyto-ar";

/** Show or hide the Arabic line under every point. Remembered on this device. */
export function useArabic(): [boolean, () => void] {
  const [on, setOn] = useState(() => document.documentElement.dataset.ar !== "off");
  useEffect(() => {
    document.documentElement.dataset.ar = on ? "on" : "off";
  }, [on]);
  const toggle = () =>
    setOn((v) => {
      try {
        localStorage.setItem(KEY, v ? "off" : "on");
      } catch {
        /* ignore */
      }
      return !v;
    });
  return [on, toggle];
}
