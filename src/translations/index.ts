import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en_translation from './locales/en.json';
import vi_translation from './locales/vi.json';

export const defaultNS = 'translation';
export const resources = {
  en: {
    translation: en_translation,
  },
  vi: {
    translation: vi_translation,
  },
} as const;

i18n.use(initReactI18next).init({
  lng: 'vi',
  fallbackLng: 'en',
  resources,
  defaultNS,
  ns: ['translation'],
  compatibilityJSON: 'v3',
});

export default i18n;
