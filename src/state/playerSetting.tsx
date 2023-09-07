import React, { useState } from 'react';
import { Constants } from '../Constant';

export interface AvalonCharacterSetting {
  totalNumberOfPlayer: string;
  isPercivalPresent: boolean;
  isMordredPresent: boolean;
  isMorganaPresent: boolean;
  isOberonPresent: boolean;
  isLancelotPresent: boolean;
  useLancelotAlternativeRules: boolean;
}

export interface QuestCharacterSetting {
  isClericPresent: boolean;
  isArthurPresent: boolean;
  isBlindHunterPresent: boolean;
  isMutineerPresent: boolean;
  isChangelingPresent: boolean;
  isScionPresent: boolean;
  isMorganLeFayPresent: boolean;
  isLancelotPresent: boolean;
}

export enum GameMode {
  Avalon = 'avalon',
  Quest = 'quest',
}

export type Language = 'en-GB' | 'zh-hk';

export interface AllSetting extends VoiceSetting {
  avalonCharacterSetting: AvalonCharacterSetting;
  questCharacterSetting: QuestCharacterSetting;
  isDarkMode: boolean;
  isNewbieMode: boolean;
  gameMode: GameMode;
  language: Language;
}

export interface VoiceSetting {
  speakingRate: number;
  countingRate: number;
}

export interface PresetSetting extends AvalonCharacterSetting {
  desc: string;
}

// export interface SettingFormState extends VoiceSetting, CharacterSetting {
//   isDarkMode: boolean,
//   isNewbieMode: boolean,
// }

// export const defaultFormSettingState: AllSetting = {

// };

export const defaultAllSetting: AllSetting = {
  avalonCharacterSetting: {
    totalNumberOfPlayer: '5',
    isPercivalPresent: false,
    isMordredPresent: false,
    isMorganaPresent: false,
    isOberonPresent: false,
    isLancelotPresent: false,
    useLancelotAlternativeRules: false,
  },
  speakingRate: 0.8,
  countingRate: 0.9,
  isDarkMode: false,
  isNewbieMode: false,
  gameMode: GameMode.Avalon,
  language: 'zh-hk',
  questCharacterSetting: {
    isBlindHunterPresent: true,
    isClericPresent: true,
    isMutineerPresent: false,
    isArthurPresent: false,
    isChangelingPresent: false,
    isMorganLeFayPresent: true,
    isScionPresent: false,
    isLancelotPresent: false,
  },
};

interface GoodEvilNumber {
  numberOfGood: number;
  numberOfEvil: number;
}

export function calcGoodEvilNumber(total: string): GoodEvilNumber {
  return {
    numberOfGood: Constants.totalNumberOfPlayers[total].good,
    numberOfEvil: Constants.totalNumberOfPlayers[total].evil,
  } as GoodEvilNumber;
}

interface SettingContextType {
  allSetting: AllSetting;
  editSetting: Function;
  editAllCharacterSettings: Function;
}

export const SettingContext = React.createContext<SettingContextType>({
  allSetting: defaultAllSetting,
  editSetting: () => {},
  editAllCharacterSettings: () => {},
});

interface SettingContextProviderProp {
  children: React.ReactNode;
}

export const SettingContextProvider = ({
  children,
}: SettingContextProviderProp) => {
  const [allSetting, setAllSetting] = useState<AllSetting>(defaultAllSetting);
  const editAllCharacterSettings = (value: AvalonCharacterSetting) => {
    let tempSetting = allSetting.avalonCharacterSetting;
    tempSetting = { ...tempSetting, ...value };
    setAllSetting({
      ...allSetting,
      avalonCharacterSetting: tempSetting,
    });
  };
  const editSetting = (name: string, value: any) => {
    console.log('editSetting', name, value);
    if (name.includes('.')) {
      const [subSetting, settingType] = name.split('.');
      let tempSetting =
        allSetting[
          subSetting as 'avalonCharacterSetting' | 'questCharacterSetting'
        ];
      tempSetting = {
        ...tempSetting,
        [settingType]: value,
      };
      setAllSetting({
        ...allSetting,
        [subSetting]: tempSetting,
      });
    } else {
      const tempSetting = {
        ...allSetting,
        [name]: value,
      };
      console.log('tempSetting', tempSetting);
      setAllSetting(tempSetting);
    }
  };
  return (
    <SettingContext.Provider
      value={{
        allSetting,
        editSetting,
        editAllCharacterSettings,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};
