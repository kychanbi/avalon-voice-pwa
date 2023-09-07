import { i18n } from '@lingui/core';
import { Language } from './state/playerSetting';

export const locales = {
  'en-GB': 'English',
  'zh-hk': '中文',
};

export async function dynamicActivate(locale: Language) {
  console.log('dynamicActivate locale', locale);
  const { messages } = await import(`./locales/${locale}/messages`);
  console.log('dynamicActivate messages', messages);
  i18n.load(locale, messages);
  i18n.activate(locale);
}
