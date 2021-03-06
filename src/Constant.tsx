import { PresetSetting } from './state/playerSetting';
import { ThemeOptions } from '@material-ui/core';

interface NumberOfPlayers {
  good: number,
  evil: number
}

interface ConstantsInterface {
  totalNumberOfPlayers:
    Record<string, NumberOfPlayers>,
  label:
    Record<string, string>,
  langs:string[],
  presets: { [key: string]: PresetSetting; },
  theme: {
    light: ThemeOptions,
    dark: ThemeOptions
  }
}

const Constants: ConstantsInterface = {
  totalNumberOfPlayers: {
    5: {
      good: 3,
      evil: 2,
    },
    6: {
      good: 4,
      evil: 2,
    },
    7: {
      good: 4,
      evil: 3,
    },
    8: {
      good: 5,
      evil: 3,
    },
    9: {
      good: 6,
      evil: 3,
    },
    10: {
      good: 6,
      evil: 4,
    },
  },
  label: {
    isPercivalPresent: '派西維爾',
    isMordredPresent: '莫德雷德',
    isMorganaPresent: '莫甘娜',
    isOberonPresent: '奧柏倫',
    isLancelotPresent: '蘭斯洛特',
    isClericPresent: 'Cleric',
    isBlindHunterPresent: 'BlindHunter',
    isMutineerPresent: 'Mutineer',
    isArthurPresent: 'Arthur',
    isChangelingPresent: 'Changeling',
    isScionPresent: 'Scion',
    isMorganLeFayPresent: 'Morgan Le Fay',
    isNewbieMode: '新手模式',
    useLancelotAlternativeRules: '使用蘭斯洛特相認規則',

  },
  langs: ['zh-HK', 'yue_HK_#Hant'],
  presets: {
    'preset-6': {
      totalNumberOfPlayer: '6',
      isPercivalPresent: false,
      isMordredPresent: false,
      isMorganaPresent: false,
      isOberonPresent: false,
      isLancelotPresent: true,
      useLancelotAlternativeRules: false,
      desc: '經典六人',
    },
    'preset-7': {
      totalNumberOfPlayer: '7',
      isPercivalPresent: false,
      isMordredPresent: false,
      isMorganaPresent: false,
      isOberonPresent: true,
      isLancelotPresent: true,
      useLancelotAlternativeRules: false,
      desc: '經典七人',
    },
    'preset-8': {
      totalNumberOfPlayer: '8',
      isPercivalPresent: true,
      isMordredPresent: true,
      isMorganaPresent: true,
      isOberonPresent: false,
      isLancelotPresent: true,
      useLancelotAlternativeRules: false,
      desc: '經典八人',
    },
  },
  theme: {
    light: {
      palette: {
        type: 'light',
      },
    },
    dark: {
      palette: {
        type: 'dark',
        // primary: {
        //   // Purple and green play nicely together.
        //   main: purple[500],
        // },
      },
    },
  },
};
Object.freeze(Constants);

export { Constants };
