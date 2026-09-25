"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as Theme | null;
    if (!stored) return;

    const timeoutId = window.setTimeout(() => {
      setTheme(stored);
      document.documentElement.setAttribute("data-theme", stored);
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.setAttribute("data-theme", next);
  };

  return { theme, toggleTheme };
}
