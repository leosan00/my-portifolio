import { loadTranslations } from '$lib/language/translations';
import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
 
inject({ mode: dev ? 'development' : 'production' });

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url }) => {
  const { pathname } = url;

  await loadTranslations('en', pathname); // keep this just before the `return`

  return {};
}