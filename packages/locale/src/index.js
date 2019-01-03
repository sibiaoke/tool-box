const LOCALE_KEY = '@sibiaoke/LOCALE';
const DEFAULT_LOCALE = 'en';

const serverLocaleMap = {
  en: 'en_US',
  zh: 'zh_CN'
};

export function getLocale() {
  return localStorage.getItem(LOCALE_KEY) || DEFAULT_LOCALE;
}

export function saveLocale(locale = DEFAULT_LOCALE) {
  return localStorage.setItem(LOCALE_KEY, locale);
}

export function getServerLocale() {
  return serverLocaleMap[getLocale()];
}
