/**
 *to default the theme to "dark" on mount
 *@returns {string} dark | light
 */
"use client";

import { useEffect } from "react";
import { useTheme } from "next-themes";

export function useDarkThemeInit() {
  const { setTheme, theme } = useTheme();
  useEffect(() => {
    setTheme(() => "dark");
  });

  return theme;
}
