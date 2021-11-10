import React, { useState } from 'react';
import { Constants } from '../Constant';

export interface AvalonCharacterSetting{
  totalNumberOfPlayer: string,
  isPercivalPresent: boolean,
  isMordredPresent: boolean,
  isMorganaPresent: boolean,
  isOberonPresent: boolean,
  isLancelotPresent: boolean,
}

export interface QuestCharacterSetting{
  isClericPresent: boolean,
  isArthurPresent: boolean,
  isBlindHunterPresent: boolean,
  isMutineerPresent: boolean,
  isChangelingPresent: boolean,
  isScionPresent: boolean,
  isMorganLeFayPresent: boolean,
}

export enum GameMode{
  Avalon = 'avalon',
  Quest = 'quest',
}

export interface AllSetting extends AvalonCharacterSetting, QuestCharacterSetting, VoiceSetting{
  isDarkMode: boolean,
  isNewbieMode: boolean,
  useLancelotAlternativeRules: boolean,
  gameMode: GameMode
}

export interface VoiceSetting{
  speakingRate: number,
  countingRate: number,
}

export interface PresetSetting extends AvalonCharacterSetting{
  desc: string;
}

// export interface SettingFormState extends VoiceSetting, CharacterSetting {
//   isDarkMode: boolean,
//   isNewbieMode: boolean,
// }

// export const defaultFormSettingState: AllSetting = {

// };

export const defaultAllSetting: AllSetting = {
  totalNumberOfPlayer: '5',
  isPercivalPresent: false,
  isMordredPresent: false,
  isMorganaPresent: false,
  isOberonPresent: false,
  isLancelotPresent: false,
  useLancelotAlternativeRules: false,
  speakingRate: 0.8,
  countingRate: 0.9,
  isDarkMode: false,
  isNewbieMode: false,
  gameMode: GameMode.Avalon,
  isBlindHunterPresent: true,
  isClericPresent: true,
  isMutineerPresent: false,
  isArthurPresent: false,
  isChangelingPresent: false,
  isMorganLeFayPresent: true,
  isScionPresent: false,
};

interface GoodEvilNumber{
  numberOfGood: number,
  numberOfEvil: number
}

export function calcGoodEvilNumber(total: string): GoodEvilNumber{
  return {
    numberOfGood: Constants.totalNumberOfPlayers[total].good,
    numberOfEvil: Constants.totalNumberOfPlayers[total].evil,
  } as GoodEvilNumber;
}

interface SettingContextType{
  allSetting: AllSetting,
  editSetting: Function,
  editAllCharacterSettings: Function
}

export const SettingContext = React.createContext<SettingContextType>({
  allSetting: defaultAllSetting,
  editSetting: () => {
  },
  editAllCharacterSettings: () => {
  },
});

interface SettingContextProviderProp{
  children: React.ReactNode;
}

export const SettingContextProvider = ({ children }: SettingContextProviderProp) => {
  const [allSetting, setAllSetting] = useState<AllSetting>(
    defaultAllSetting,
  );
  const editAllCharacterSettings = (value: AvalonCharacterSetting) => {
    const tempSetting = { ...allSetting, ...value };
    setAllSetting(tempSetting);
  };
  const editSetting = (settingType: keyof AllSetting, value: any) => {
    const tempSetting = {
      ...allSetting,
      [settingType]: value,
    };
    setAllSetting(tempSetting);
  };
  return (
    <SettingContext.Provider value={{
      allSetting,
      editSetting,
      editAllCharacterSettings,
    }}>
      {children}
    </SettingContext.Provider>
  );
};
