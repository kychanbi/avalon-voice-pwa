import { i18n } from '@lingui/core';
import { Language } from './state/playerSetting';

export const locales = {
  en: 'English',
  zh: '中文',
};

export async function dynamicActivate(locale: Language) {
  console.log('locale', locale);
  const { messages } = await import(`./locales/${locale}/messages`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}
