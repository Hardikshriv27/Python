"use client";

import { useState } from "react";
import { Sun, Moon } from "lucide-react";

const THEME_KEY = "triune_theme";

export default function ThemeToggle({ className = "" }) {
  const [isLight, setIsLight] = useState(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.getAttribute("data-theme") === "light";
  });

  function toggleTheme() {
    const next = isLight ? "dark" : "light";
    setIsLight(!isLight);
    if (next === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    try {
      localStorage.setItem(THEME_KEY, next);
    } catch {
      // storage unavailable — theme just won't persist
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
      aria-pressed={isLight}
      className={`flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-line)] text-paper transition-colors hover:border-paper/40 hover:bg-paper/5 ${className}`}
    >
      {isLight ? <Moon size={15} /> : <Sun size={15} />}
    </button>
  );
}
