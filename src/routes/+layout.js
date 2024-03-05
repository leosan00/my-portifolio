import {addTranslations, setLocale, setRoute } from '$lib/language/translations';
import { acceptedCookies } from '$lib/stores/cookieStore';
import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
import { selectedLanguage } from '$lib/stores/selectedLanguage';

 
inject({ mode: dev ? 'development' : 'production' });

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ data }) => {

  const { i18n, translations, cookieBanner } = data;
  const { locale, route } = i18n;

   acceptedCookies.set(cookieBanner);

  let selectedLocale = '';

  selectedLanguage.subscribe(($selectedLanguage) => {

    if(cookieBanner){
      selectedLocale = locale;
      $selectedLanguage = locale;
    }else{
      selectedLocale = $selectedLanguage;
    }
  });

  addTranslations(translations);
  await setRoute(route);
  await setLocale(selectedLocale);

  return {};
}