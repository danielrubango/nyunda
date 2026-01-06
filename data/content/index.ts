import { en } from "./en";

export type Locale = "en";

export const locales: Locale[] = ["en"];

export const defaultLocale: Locale = "en";

export const content = {
  en,
} as const;

export type Content = typeof en;

export function getContent(locale: Locale = defaultLocale): Content {
  return content[locale];
}
