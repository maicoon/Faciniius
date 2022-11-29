import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enJSon from './translation/en.json'
import ptBRJson from './translation/ptBR.json'

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'ptbr',
    interpolation: {
      escapeValue: false
    },
  
  resources: {
    ptbr: ptBRJson,
    en: enJSon
  }
})

export default i18n;
