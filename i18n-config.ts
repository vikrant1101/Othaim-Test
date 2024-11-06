export const i18n = {
  locales: ["en", "ar"],
  defaultLocale: "en",
  prefixDefault:false
};

export type I18nConfig = typeof i18n;
export type Locale = I18nConfig["locales"][number];
