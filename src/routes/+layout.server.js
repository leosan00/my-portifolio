import { locales, loadTranslations, translations, defaultLocale } from '$lib/language/translations';
import { selectedLanguage } from '$lib/stores/selectedLanguage';


/** @type {import('./$types').LayoutServerLoad} */
export const load = async ({ url, cookies, request }) => {
  const { pathname } = url;
  
  // Try to get the locale from cookie
  let locale = (cookies.get('lang') || '').toLowerCase();

  let cookieBanner = cookies.get('cookies-banner-accepted')==='true';

  // Get user preferred locale
  if (!locale) {
    locale = `${`${request.headers.get('accept-language')}`.match(/[a-zA-Z]+?(?=-|_|,|;)/)}`.toLowerCase();
  }

  // Get defined locales
  const supportedLocales = locales.get().map((l) => l.toLowerCase());

  // Use default locale if current locale is not supported
  if (!supportedLocales.includes(locale)) {
    locale = defaultLocale;
  }

  await loadTranslations(locale, pathname); // keep this just before the `return`

  return {
    cookieBanner,
    i18n: { locale, route: pathname },
    translations: translations.get(), // `translations` on server contain all translations loaded by different clients
  };
};