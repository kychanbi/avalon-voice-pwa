import { PresetSetting } from "./state/playerSetting";

interface NumberOfPlayers {
  good: number,
  evil: number
}

interface ConstantsInterface {
  totalNumberOfPlayers:
    Record<string, NumberOfPlayers>,
  label:
    Record<string, string>,
  voice:string,
  presets: { [key: string]: PresetSetting; }
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
  },
  voice: 'zh-HK',
  presets: {
    "preset-6": {
      totalNumberOfPlayer: "6",
      isPercivalPresent: false,
      isMordredPresent: true,
      isMorganaPresent: false,
      isOberonPresent: false,
      isLancelotPresent: true,
      desc:"經典六人"
    },
    "preset-7": {
      totalNumberOfPlayer: "7",
      isPercivalPresent: false,
      isMordredPresent: true,
      isMorganaPresent: false,
      isOberonPresent: false,
      isLancelotPresent: true,
      desc:"經典七人"
    },
    "preset-8": {
      totalNumberOfPlayer: "8",
      isPercivalPresent: true,
      isMordredPresent: true,
      isMorganaPresent: true,
      isOberonPresent: false,
      isLancelotPresent: true,
      desc:"經典八人"
    }
  }
};
Object.freeze(Constants);

export { Constants };
