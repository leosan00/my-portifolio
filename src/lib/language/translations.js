import i18n from 'sveltekit-i18n';
import lang from './lang.json';

/** @type {import('sveltekit-i18n').Config} */
const config = ({
  initLocale: 'en',
  fallbackLocale: 'en',
  translations: {
    en: { lang },
    pt: { lang },
  },
  loaders: [
    {
      locale: 'pt',
      key: 'home',
      loader: async () => (
        await import('./pt/home.json')
      ).default,
    },
    {
      locale: 'pt',
      key: 'about',
      routes: ['/about'],
      loader: async () => (
        await import('./pt/about.json')
      ).default,
    },
    {
      locale: 'pt',
      key: 'projects',
      routes: ['/projects'],
      loader: async () => (
        await import('./pt/projects.json')
      ).default,
    },
    {
      locale: 'pt',
      key: 'experience',
      routes: ['/experience'],
      loader: async () => (
        await import('./pt/experience.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'home',
      loader: async () => (
        await import('./en/home.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'about',
      routes: ['/about'],
      loader: async () => (
        await import('./en/about.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'projects',
      routes: ['/projects'],
      loader: async () => (
        await import('./en/projects.json')
      ).default,
    },
    {
      locale: 'en',
      key: 'experience',
      routes: ['/experience'],
      loader: async () => (
        await import('./en/experience.json')
      ).default,
    }
  ],
});

export const { t, locale, locales, loading, translations, loadTranslations } = new i18n(config);