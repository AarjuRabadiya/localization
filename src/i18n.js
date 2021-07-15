import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
import Loginen from "./Locales/en/Loginen.json";
import Loginjp from "./Locales/jp/Loginjp.json";
import Logincn from "./Locales/cn/Logincn.json";

const resources = {
  en: {
    login: Loginen,
  },
  jp: {
    login: Loginjp,
  },
  cn: {
    login: Logincn,
  },
};
i18n
  //   .use(LanguageDetector)
  .use(initReactI18next)

  .init({
    debug: true,
    lang: "en",
    language: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    languageOptions: ["en", "jp", "cn"],
    resources: resources,
  });

export default i18n;
