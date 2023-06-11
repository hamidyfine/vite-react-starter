import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import resources from './locales';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: resources.resources,
        ns: resources.ns,
        lng: resources.default.locale,
        defaultNS: resources.default.ns,
        fallbackLng: resources.default.locale,
        nonExplicitSupportedLngs: true,
        debug: false,
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
