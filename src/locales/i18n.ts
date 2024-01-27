import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./en/translation.json";
import translationKO from "./ko/translation.json";

const resources = {
  en: {
    translations: translationEN
  },
  ko: {
    translations: translationKO
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "ko",
    fallbackLng: "en",
    
    ns: ["translations"],
    defaultNS: "translations",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
