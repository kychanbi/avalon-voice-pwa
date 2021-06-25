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
  numberOfGood: number,
  numberOfEvil: number,
}

export interface VoiceSetting {
  speakingRate: number,
  countingRate: number,
}

export interface PresetSetting extends CharacterSetting {
  desc: string
}

export interface SettingFormState extends VoiceSetting, CharacterSetting {
}

export const defaultFormSettingState: SettingFormState = {
  totalNumberOfPlayer: '5',
  isPercivalPresent: false,
  isMordredPresent: false,
  isMorganaPresent: false,
  isOberonPresent: false,
  isLancelotPresent: false,
  speakingRate: 0.8,
  countingRate: 0.9,
};

const defaultAllSetting: AllSetting = {
  numberOfGood: 3,
  numberOfEvil: 2,
  ...defaultFormSettingState,
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

function calcGoodEvilNumber(total: string): GoodEvilNumber{
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
  const [currentSetting, setCurrentSetting] = useState<SettingFormState>(defaultFormSettingState);
  const [allSetting, setAllSetting] = useState<AllSetting>(
    defaultAllSetting,
  );
  const editAllCharacterSettings = (value: CharacterSetting) => {
    const tempSetting = { ...currentSetting, ...value };
    setCurrentSetting(tempSetting);
  };
  const editSetting = (settingType: SettingProps, value: any) => {
    const tempSetting = { ...currentSetting, [settingType]: value };
    setCurrentSetting(tempSetting);
  };
  useEffect(() => {
    const { numberOfGood, numberOfEvil } = calcGoodEvilNumber(
      currentSetting.totalNumberOfPlayer ?? defaultFormSettingState.totalNumberOfPlayer,
    );
    const tempSetting: AllSetting = {
      ...currentSetting, numberOfGood, numberOfEvil,
    };
    setAllSetting(tempSetting);
  }, [currentSetting]);
  return (
    <SettingContext.Provider value={{ allSetting, editSetting, editAllCharacterSettings }}>
      {children}
    </SettingContext.Provider>
  );
};
