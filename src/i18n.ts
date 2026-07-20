import i18next from 'i18next';
import { resume, type Locale } from './data/resume';

export async function getTranslations(locale: Locale) {
  const instance = i18next.createInstance();
  await instance.init({
    lng: locale,
    fallbackLng: 'es',
    resources: {
      es: { translation: resume.es.ui },
      en: { translation: resume.en.ui },
    },
    interpolation: { escapeValue: false },
  });
  return { t: instance.t.bind(instance) };
}
