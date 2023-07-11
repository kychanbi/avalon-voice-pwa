import React, { useEffect } from 'react';
import './App.css';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { Main } from './views/Main';
import { SettingContextProvider } from './state/playerSetting';
import { defaultLocale, dynamicActivate } from './i18nHelper';

function App() {
  useEffect(() => {
    dynamicActivate(defaultLocale);
  }, []);
  return (
    <I18nProvider i18n={i18n}>
      <SettingContextProvider>
        <Main />
      </SettingContextProvider>
    </I18nProvider>
  );
}

export default App;
