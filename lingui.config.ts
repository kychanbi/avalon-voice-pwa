/** @type {import('@lingui/conf').LinguiConfig} */
module.exports = {
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
