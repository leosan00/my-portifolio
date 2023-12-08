import i18n from 'sveltekit-i18n';
import lang from './lang.json';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
  initLocale: 'pt',
  fallbackLocale: 'pt',
  translations: {
    en: { lang },
    pt: { lang },
  },
  loaders: [
    {
      locale: 'pt',
      key: 'home',
      routes: ['/'],
      loader: async () => (
        await import('./pt/home.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'home',
      routes: ['/'],
      loader: async () => (
        await import('./en/home.json')
      ).default,
    },
    // {
    //   locale: 'en',
    //   key: 'about',
    //   routes: ['/about'],
    //   loader: async () => (
    //     await import('./en/about.json')
    //   ).default,
    // },
    // {
    //   locale: 'cs',
    //   key: 'common',
    //   loader: async () => (
    //     await import('./cs/common.json')
    //   ).default,
    // },
    // {
    //   locale: 'cs',
    //   key: 'home',
    //   routes: ['/'],
    //   loader: async () => (
    //     await import('./cs/home.json')
    //   ).default,
    // },
    // {
    //   locale: 'cs',
    //   key: 'about',
    //   routes: ['/about'],
    //   loader: async () => (
    //     await import('./cs/about.json')
    //   ).default,
    // },
  ],
});

export const { t, locale, locales, loading, translations, loadTranslations } = new i18n(config);