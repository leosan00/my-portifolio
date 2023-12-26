import { loadTranslations } from '$lib/language/translations';

/** @type {import('@sveltejs/kit').Load} */
export const load = async ({ url }) => {
  const { pathname } = url;

  await loadTranslations('en', pathname); // keep this just before the `return`

  return {};
}