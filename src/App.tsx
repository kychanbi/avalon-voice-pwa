import React, { useEffect } from 'react';
import './App.css';
import { I18nProvider } from '@lingui/react';
import { i18n } from '@lingui/core';
import { Main } from './views/Main';
import {
  defaultAllSetting,
  SettingContextProvider,
} from './state/playerSetting';
import { dynamicActivate } from './i18nHelper';

function App() {
  useEffect(() => {
    dynamicActivate(defaultAllSetting.language);
  }, []);
  return (
    <SettingContextProvider>
      <I18nProvider i18n={i18n}>
        <Main />
      </I18nProvider>
    </SettingContextProvider>
  );
}

export default App;
