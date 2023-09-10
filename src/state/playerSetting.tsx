import React, { useState } from 'react';
import { Constants } from '../Constant';
import { useVoices } from './useVoices';

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

export type Language = 'en-GB' | 'zh-HK';

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
  language: 'zh-HK',
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

type SettingContextType = {
  allSetting: AllSetting;
  editSetting: Function;
  editAllCharacterSettings: Function;
} & ReturnType<typeof useVoices>;

export const SettingContext = React.createContext<SettingContextType>({
  allSetting: defaultAllSetting,
  editSetting: () => {},
  editAllCharacterSettings: () => {},
  voices: [],
  selectedVoice: undefined,
  setSelectedVoice: () => {},
  areVoicesLoaded: false,
});

interface SettingContextProviderProp {
  children: React.ReactNode;
}

export const SettingContextProvider = ({
  children,
}: SettingContextProviderProp) => {
  const [allSetting, setAllSetting] = useState<AllSetting>(defaultAllSetting);
  const { selectedVoice, voices, setSelectedVoice, areVoicesLoaded } =
    useVoices(allSetting.language);

  const editAllCharacterSettings = (value: AvalonCharacterSetting) => {
    setAllSetting((oldSetting) => ({
      ...oldSetting,
      avalonCharacterSetting: {
        ...oldSetting.avalonCharacterSetting,
        ...value,
      },
    }));
  };
  const editSetting = (name: string, value: any) => {
    if (name.includes('.')) {
      setAllSetting((oldSetting) => {
        const [subSetting, settingType] = name.split('.');
        let tempSetting =
          oldSetting[
            subSetting as 'avalonCharacterSetting' | 'questCharacterSetting'
          ];
        tempSetting = {
          ...tempSetting,
          [settingType]: value,
        };
        return {
          ...oldSetting,
          [subSetting]: tempSetting,
        };
      });
    } else {
      setAllSetting((oldSetting) => ({
        ...oldSetting,
        [name]: value,
      }));
    }
  };
  return (
    <SettingContext.Provider
      value={{
        allSetting,
        editSetting,
        editAllCharacterSettings,
        selectedVoice,
        voices,
        setSelectedVoice,
        areVoicesLoaded,
      }}
    >
      {children}
    </SettingContext.Provider>
  );
};
