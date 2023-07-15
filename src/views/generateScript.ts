import {
  AvalonCharacterSetting,
  QuestCharacterSetting,
} from '../state/playerSetting';
import { t } from '@lingui/macro';

type GenerateAvalonScriptParams = Omit<
  AvalonCharacterSetting,
  'totalNumberOfPlayer'
> & {
  numberOfEvil: number;
  useLancelotAlternativeRules: boolean;
  isNewbieMode: boolean;
};

interface GenerateQuestScriptParams extends QuestCharacterSetting {}

export const generateQuestScript = ({
  isClericPresent,
  isMutineerPresent,
  isBlindHunterPresent,
  isChangelingPresent,
  isArthurPresent,
  isMorganLeFayPresent,
  isScionPresent,
  isLancelotPresent,
}: GenerateQuestScriptParams): string[] => {
  let s0: string;
  // let countUnknowEvil = (+isChangelingPresent as number) + (+isBlindHunterPresent as number) + (+isScionPresent as number) + (+isMutineerPresent as number);
  let s_unknownEvils = [
    isChangelingPresent ? 'Changeling' : '',
    isBlindHunterPresent ? 'BlindHunter' : '',
    isScionPresent ? 'Scion' : '',
    isMutineerPresent ? 'Mutineer' : '',
  ];
  s_unknownEvils = s_unknownEvils.filter((s) => s !== '');
  if (s_unknownEvils.length > 1) {
    s0 = s_unknownEvils.join(',').replace(/,(?=[^,]*$)/, ' 同');
    s0 = `除 ${s0} 以外，所有壞人擘大眼`;
  } else if (s_unknownEvils.length == 1) {
    s0 = `除 ${s_unknownEvils} 以外，所有壞人擘大眼`;
  } else {
    s0 = '所有壞人擘大眼';
  }

  const s2 = `所有壞人合埋眼。${
    isMorganLeFayPresent && isScionPresent
      ? 'Scion 豎起手指公。Morgan Le Fay擘大眼'
      : ''
  }`;
  const s3 = `${
    isMorganLeFayPresent && isScionPresent
      ? 'Scion 收起手指公。Morgan Le Fay 合埋眼'
      : ''
  }`;
  const s4 = `${
    isMorganLeFayPresent && isArthurPresent
      ? 'Morgan Le Fay 豎起手指公。Arthur 擘大眼'
      : ''
  }`;
  const s5 = `${
    isMorganLeFayPresent && isArthurPresent
      ? 'Morgan Le Fay 收起手指公。Arthur 合埋眼'
      : ''
  }`;
  const s6 = `${
    isClericPresent ? 'First leader 如果係壞人就豎起手指公。Cleric 擘大眼' : ''
  }`;
  const s7 = `${
    isClericPresent ? 'First leader 收起手指公。Cleric 合埋眼' : ''
  }`;
  const s8 = isLancelotPresent ? '兩個蘭斯洛特開眼確認身份' : '';
  const s9 = isLancelotPresent ? '兩個蘭斯洛特合埋眼' : '';
  const s99 = '所有人擘大眼';

  return [s0, s2, s3, s4, s5, s6, s7, s8, s9, s99].filter((s) => !!s);
};

export const generateAvalonScript = ({
  useLancelotAlternativeRules,
  isLancelotPresent,
  isMordredPresent,
  isMorganaPresent,
  isOberonPresent,
  isPercivalPresent,
  isNewbieMode,
  numberOfEvil,
}: GenerateAvalonScriptParams): string[] => {
  let numEvilOpenEyes = numberOfEvil;
  // isMordredPresent && numOtherEvil--;
  isOberonPresent && numEvilOpenEyes--;
  // isMorganaPresent && numOtherEvil--;
  isLancelotPresent && numEvilOpenEyes--;

  // const script1 = '';
  // let scriptEvil = '所有人合埋眼，伸手握拳放係枱上，所有壞人開眼';
  const scriptAlternativeRule = useLancelotAlternativeRules
    ? t`兩個蘭斯洛特開眼確認身份`
    : '';
  const scriptAlternativeRule2 = useLancelotAlternativeRules
    ? t`兩個蘭斯洛特合埋眼`
    : '';
  let scriptEvil = t`所有壞人擘大眼`;
  if (isLancelotPresent && isOberonPresent) {
    scriptEvil =
      t`除【奧柏倫同壞蘭斯洛特】以外，` +
      scriptEvil +
      t`，壞蘭斯洛特豎起手指公`;
  } else if (isOberonPresent) {
    scriptEvil = t`除左【奧柏倫】以外，` + scriptEvil;
  } else if (isLancelotPresent)
    scriptEvil =
      t`除左【壞蘭斯洛特】以外，` + scriptEvil + t`，壞蘭斯洛特豎起手指公`;
  if (isNewbieMode) scriptEvil += t`，總共有` + numEvilOpenEyes + t`個壞人開眼`;

  const scriptEvil2 = t`所有壞人合埋眼`;
  const scriptEvil3 =
    (isMordredPresent ? t`除左【莫德雷德】以外，` : '') +
    t`壞人豎起手指公。梅林擘大眼` +
    (isNewbieMode
      ? t`，總共有` +
        (numberOfEvil - (isMordredPresent as unknown as number)) +
        t`隻手指公`
      : '');
  // const numOfEvilShown = numberOfEvil - (+isMordredPresent);
  // const scriptGood = '';
  // ，`總共有 ${numOfEvilShown} 個壞人，如果數目有錯，請出聲。`;
  const scriptGood2 = t`梅林合埋眼，壞人收起手指公`;
  const scriptGood3 = isPercivalPresent
    ? t`【梅林】` +
      (isMorganaPresent ? `及【莫甘娜】` : '') +
      t`豎起手指公，【派西維爾】擘大眼。`
    : '';
  const scriptGood4 = isPercivalPresent
    ? t`【梅林】` +
      (isMorganaPresent ? t`及【莫甘娜】` : '') +
      t`收起手指公，【派西維爾】合埋眼。`
    : '';
  const scriptGood5 = `所有人擘大眼`;
  return [
    scriptAlternativeRule,
    scriptAlternativeRule2,
    scriptEvil,
    scriptEvil2,
    scriptEvil3,
    scriptGood2,
    scriptGood3,
    scriptGood4,
    scriptGood5,
  ].filter((s) => !!s);
};
