/** @type {import('@lingui/conf').LinguiConfig} */
export default {
  locales: ['en-GB', 'zh-HK'],
  sourceLocale: 'zh-HK',
  catalogs: [
    {
      path: 'src/locales/{locale}/messages',
      include: ['src'],
    },
  ],
  format: 'po',
};
