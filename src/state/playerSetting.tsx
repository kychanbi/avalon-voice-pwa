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

export interface AllPlayerSetting extends CharacterSetting {
  numberOfGood: number,
  numberOfEvil: number,
}

export interface voiceSetting {
  speakingRate: number,

}

export const defaultCharacterSetting: CharacterSetting = {
  totalNumberOfPlayer: '5',
  isPercivalPresent: false,
  isMordredPresent: false,
  isMorganaPresent: false,
  isOberonPresent: false,
  isLancelotPresent: false,
};
const defaultAllPlayerSetting: AllPlayerSetting = {
  numberOfGood: 3,
  numberOfEvil: 2,
  ...defaultCharacterSetting,
};

export enum SettingProps {
  totalNumberOfPlayer = 'totalNumberOfPlayer',
  isPercivalPresent = 'isPercivalPresent',
  isMordredPresent = 'isMordredPresent',
  isMorganaPresent = 'isMorganaPresent',
  isOberonPresent = 'isOberonPresent',
  isLancelotPresent = 'isLancelotPresent',
  // numberOfGood = 'numberOfGood',
  // numberOfEvil = 'numberOfEvil',
}

interface GoodEvilNumber {
  numberOfGood: number,
  numberOfEvil: number
}

function calcGoodEvilNumber(total: string): GoodEvilNumber {
  return {
    numberOfGood: Constants.totalNumberOfPlayers[total].good,
    numberOfEvil: Constants.totalNumberOfPlayers[total].evil,
  } as GoodEvilNumber;
}

interface SettingContextType {
  allPlayerSetting: AllPlayerSetting,
  editSetting: Function
}

export const SettingContext = React.createContext<SettingContextType>({
  allPlayerSetting: defaultAllPlayerSetting,
  editSetting: () => {
  },
});

interface SettingContextProviderProp {
  children: React.ReactNode
}

export const SettingContextProvider = ({ children }: SettingContextProviderProp) => {
  const [currentSetting, setCurrentSetting] = useState<CharacterSetting>(defaultCharacterSetting);
  const [allPlayerSetting, setAllPlayerSetting] = useState<AllPlayerSetting>(
    defaultAllPlayerSetting,
  );
  const editSetting = (settingType: SettingProps, value: any) => {
    console.log('editSetting', settingType, value);
    const tempSetting = { ...currentSetting, [settingType]: value };
    setCurrentSetting(tempSetting);
  };
  useEffect(() => {
    const { numberOfGood, numberOfEvil } = calcGoodEvilNumber(
      currentSetting.totalNumberOfPlayer ?? defaultCharacterSetting.totalNumberOfPlayer,
    );
    const tempSetting: AllPlayerSetting = {
      ...currentSetting, numberOfGood, numberOfEvil,
    };
    setAllPlayerSetting(tempSetting);
  }, [currentSetting]);
  return (
    <SettingContext.Provider value={{ allPlayerSetting, editSetting }}>
      {children}
    </SettingContext.Provider>
  );
};
