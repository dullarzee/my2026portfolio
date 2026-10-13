"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

/**
 *to default the theme to "dark" on mount
 *@returns {string} dark | light
 */
export function useDarkThemeInit() {
  const { setTheme, theme } = useTheme();
  useEffect(() => {
    setTheme(() => "dark");
  });

  return theme;
}
