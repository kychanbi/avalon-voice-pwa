import { i18n } from '@lingui/core';
import { Language } from './state/playerSetting';

export const locales = {
  'en-GB': 'English',
  'zh-HK': '中文',
};

export async function dynamicActivate(locale: Language) {
  const { messages } = await import(`./locales/${locale}/messages`);
  i18n.load(locale, messages);
  i18n.activate(locale);
}
