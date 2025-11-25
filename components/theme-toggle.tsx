"use client";

import { useTheme } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Bytt til lyst tema" : "Bytt til mørkt tema"}
      onClick={toggleTheme}
      className="rounded-md border border-slate-200 bg-white/60 text-slate-700 hover:bg-white dark:border-slate-700 dark:bg-[#202126] dark:text-slate-100"
    >
      {isDark ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  );
}
