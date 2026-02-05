import { en } from "./en.js";
import { zhCN } from "./zh-CN.js";

export type Locale = "en" | "zh-CN";

const LOCALES: Record<Locale, Record<string, string>> = {
  en: en as unknown as Record<string, string>,
  "zh-CN": zhCN as unknown as Record<string, string>,
};

let currentLocale: Locale = "en";

export function setCurrentLocale(locale: Locale) {
  currentLocale = locale;
}

export function getCurrentLocale(): Locale {
  return currentLocale;
}

/**
 * Translate a key to the current locale. Falls back to English if key is missing.
 */
export function t(key: string): string {
  const locale = LOCALES[currentLocale];
  if (locale && key in locale && locale[key]) {
    return locale[key];
  }
  const fallback = LOCALES.en;
  return (fallback && fallback[key]) ?? key;
}
