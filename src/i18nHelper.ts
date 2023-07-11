import { i18n } from '@lingui/core';

export const locales = {
  en: 'English',
  zh: '中文',
};
export const defaultLocale = 'zh';

export async function dynamicActivate(locale: string) {
  const { messages } = await import(`./locales/${locale}/messages`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}
