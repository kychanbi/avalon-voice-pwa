import React, { useEffect, useState } from 'react';
import { Constants } from '../Constant';

export interface CharacterSetting {
  totalNumberOfPlayer: string,
  isPercivalPresent: boolean,
  isMordredPresent: boolean,
  isMorganaPresent: boolean,
  isOberonPresent: boolean,
  isLancelotPresent: boolean,
}

export interface AllSetting extends CharacterSetting, VoiceSetting {
  // numberOfGood: number,
  // numberOfEvil: number,
  isDarkMode: boolean,
  isNewbieMode: boolean,
}

export interface VoiceSetting {
  speakingRate: number,
  countingRate: number,
}

export interface PresetSetting extends CharacterSetting {
  desc: string
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
  speakingRate: 0.8,
  countingRate: 0.9,
  isDarkMode: false,
  isNewbieMode: false,
};

export enum SettingProps {
  totalNumberOfPlayer = 'totalNumberOfPlayer',
  isPercivalPresent = 'isPercivalPresent',
  isMordredPresent = 'isMordredPresent',
  isMorganaPresent = 'isMorganaPresent',
  isOberonPresent = 'isOberonPresent',
  isLancelotPresent = 'isLancelotPresent',
  isDarkMode = 'isDarkMode'
  // numberOfGood = 'numberOfGood',
  // numberOfEvil = 'numberOfEvil',
}

interface GoodEvilNumber {
  numberOfGood: number,
  numberOfEvil: number
}

export function calcGoodEvilNumber(total: string): GoodEvilNumber{
  return {
    numberOfGood: Constants.totalNumberOfPlayers[total].good,
    numberOfEvil: Constants.totalNumberOfPlayers[total].evil,
  } as GoodEvilNumber;
}

interface SettingContextType {
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

interface SettingContextProviderProp {
  children: React.ReactNode
}

export const SettingContextProvider = ({ children }: SettingContextProviderProp) => {
  const [allSetting, setAllSetting] = useState<AllSetting>(
    defaultAllSetting,
  );
  const editAllCharacterSettings = (value: CharacterSetting) => {
    const tempSetting = { ...allSetting, ...value };
    setAllSetting(tempSetting);
  };
  const editSetting = (settingType: SettingProps, value: any) => {
    const tempSetting = { ...allSetting, [settingType]: value };
    setAllSetting(tempSetting);
  };
  return (
    <SettingContext.Provider value={{ allSetting, editSetting, editAllCharacterSettings }}>
      {children}
    </SettingContext.Provider>
  );
};
