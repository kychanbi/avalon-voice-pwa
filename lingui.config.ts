/** @type {import('@lingui/conf').LinguiConfig} */
export default {
  locales: ['en', 'zh'],
  sourceLocale: 'zh',
  catalogs: [
    {
      path: 'src/locales/{locale}/messages',
      include: ['src'],
    },
  ],
  format: 'po',
};
