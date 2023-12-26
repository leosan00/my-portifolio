import { loadTranslations,locale, addTranslations, setLocale, setRoute } from '$lib/language/translations';
import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
 
inject({ mode: dev ? 'development' : 'production' });

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ data }) => {

  const { i18n, translations } = data;
   const { locale, route } = i18n;

  addTranslations(data?.translations);
  await setRoute(route);
  await setLocale(locale);

  return {};
}