import { useEffect, useState } from "react";

type Theme = "light" | "dark";
const KEY = "cyto-theme";

/** Light by default, whatever the phone's own setting is. */
function defaultTheme(): Theme {
  return "light";
}

export function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(() => {
    const t = document.documentElement.dataset.theme;
    return t === "dark" || t === "light" ? t : defaultTheme();
  });
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelectorAll('meta[name="theme-color"]')
      .forEach((m) => m.setAttribute("content", theme === "dark" ? "#121110" : "#f5f1e8"));
  }, [theme]);
  const toggle = () =>
    setTheme((t) => {
      const next = t === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
  return [theme, toggle];
}
