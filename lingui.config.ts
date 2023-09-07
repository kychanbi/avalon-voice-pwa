/** @type {import('@lingui/conf').LinguiConfig} */
export default {
  locales: ['en-GB', 'zh-hk'],
  sourceLocale: 'zh-hk',
  catalogs: [
    {
      path: 'src/locales/{locale}/messages',
      include: ['src'],
    },
  ],
  format: 'po',
};
