import React from 'react';
import './App.css';
import { Main } from './views/Main';
import { SettingContextProvider } from './state/playerSetting';

function App(){
  return (
    <SettingContextProvider>
      <Main />
    </SettingContextProvider>
  );
}

export default App;
