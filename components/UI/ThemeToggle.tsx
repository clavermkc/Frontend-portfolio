"use client";
import { useTheme } from "@/lib/useTheme";
import { Sun, Moon } from "lucide-react";
import { useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onClick={toggleTheme}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Toggle theme"
      className="
        p-2
        bg-transparent
        border-none
        cursor-pointer
        transition-all
        duration-200
        focus:outline-none
        focus:ring-2
        focus:ring-[var(--color-terminal-green)]/30
        rounded
      "
      title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <Sun 
          size={20} 
          className={`
            transition-all duration-200
            ${isHovered 
              ? 'text-[var(--color-terminal-green)] scale-110' 
              : 'text-[var(--foreground)]'
            }
          `} 
        />
      ) : (
        <Moon 
          size={20} 
          className={`
            transition-all duration-200
            ${isHovered 
              ? 'text-[var(--color-terminal-green)] scale-110' 
              : 'text-[var(--foreground)]'
            }
          `} 
        />
      )}
    </button>
  );
}