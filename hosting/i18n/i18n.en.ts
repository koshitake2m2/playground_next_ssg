import { I18nType } from "./i18n-type";

export const i18nEn = {
  lang: "en",
  greeting: "Hello",
  welcome: "Welcome",
  say: (words: string) => `say ${words}`,
  a: {
    b: "ab",
  },
} as const satisfies I18nType;
