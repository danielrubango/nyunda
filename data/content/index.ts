import { en } from "./en";
import { fr } from "./fr";

export type Locale = "en" | "fr";

export const locales: Locale[] = ["en", "fr"];

export const localeNames: Record<Locale, string> = {
  en: "English",
  fr: "Français",
};

export const defaultLocale: Locale = "fr";

export const content = {
  en,
  fr,
} as const;

export type Content = typeof en;

export function getContent(locale: Locale = defaultLocale): Content {
  return content[locale];
}
