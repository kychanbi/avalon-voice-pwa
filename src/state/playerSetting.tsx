import React, { useEffect, useState } from 'react';
import { Constants } from '../Constant';

interface CharacterSetting {
  totalNumberOfPlayer: number,
  isPercivalPresent: boolean,
  isMordredPresent: boolean,
  isMorganaPresent: boolean,
  isOberonPresent: boolean,
}

interface AllPlayerSetting {
  totalNumberOfPlayer: number,
  isPercivalPresent: boolean,
  isMordredPresent: boolean,
  isMorganaPresent: boolean,
  isOberonPresent: boolean,
  numberOfGood: number,
  numberOfEvil: number,
}

const defaultAllPlayerSetting = {
  totalNumberOfPlayer: 5,
  isPercivalPresent: false,
  isMordredPresent: false,
  isMorganaPresent: false,
  isOberonPresent: false,
  numberOfGood: 3,
  numberOfEvil: 2,
};

const defaultCharacterSetting: CharacterSetting = {
  totalNumberOfPlayer: 5,
  isPercivalPresent: false,
  isMordredPresent: false,
  isMorganaPresent: false,
  isOberonPresent: false,
};

enum SettingProps {
  totalNumberOfPlayer = 'totalNumberOfPlayer',
  isPercivalPresent = 'isPercivalPresent',
  isMordredPresent = 'isMordredPresent',
  isMorganaPresent = 'isMorganaPresent',
  isOberonPresent = 'isOberonPresent',
  // numberOfGood = 'numberOfGood',
  // numberOfEvil = 'numberOfEvil',
}

interface GoodEvilNumber {
  numberOfGood: number,
  numberOfEvil: number
}

function calcGoodEvilNumber(total: number): GoodEvilNumber {
  return {
    numberOfGood: Constants.totalNumberOfPlayers[total.toString()]?.good,
    numberOfEvil: Constants.totalNumberOfPlayers[total.toString()]?.evil,
  } as GoodEvilNumber;
}

interface SettingContextType {
  allPlayerSetting: AllPlayerSetting,
  editSetting: Function
}

const SettingContext = React.createContext<SettingContextType>({
  allPlayerSetting: defaultAllPlayerSetting,
  editSetting: () => {
  },
});

interface SettingContextProviderProp {
  children: React.ReactNode
}

const SettingContextProvider = ({ children }: SettingContextProviderProp) => {
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
    const { numberOfGood, numberOfEvil } = calcGoodEvilNumber(currentSetting.totalNumberOfPlayer);
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

export { SettingContextProvider, SettingContext, SettingProps };
