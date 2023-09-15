import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
  calcGoodEvilNumber,
  GameMode,
  SettingContext,
} from '../../state/playerSetting';
import { generateAvalonScript, generateQuestScript } from './generateScript';
import { endSpeaking, speak } from '../../utils/speakingUtils';
import { t } from '@lingui/macro';

const addLineBreaksToScript = (script: string[]): (string | JSX.Element)[] =>
  script.map((x) => [x, <br />]).reduce((ac, curr) => ac.concat(curr), []);

export const useMCPageHook = () => {
  const { allSetting, selectedVoice, areVoicesLoaded } =
    useContext(SettingContext);
  const { questCharacterSetting, avalonCharacterSetting, isNewbieMode } =
    allSetting;
  const [scriptArr, setScriptText] = useState<string[]>([]);
  const [scriptDisplay, setScriptDisplay] = useState<(string | JSX.Element)[]>(
    [],
  );
  const { numberOfEvil } = calcGoodEvilNumber(
    avalonCharacterSetting.totalNumberOfPlayer,
  );
  useEffect(() => {
    const s =
      allSetting.gameMode === GameMode.Avalon
        ? generateAvalonScript({
            ...avalonCharacterSetting,
            numberOfEvil,
            isNewbieMode,
          })
        : generateQuestScript({
            ...questCharacterSetting,
          });
    const t = addLineBreaksToScript(s);
    setScriptText(s);
    setScriptDisplay(t);
  }, [allSetting]);

  const playScript = useCallback(() => {
    endSpeaking();
    scriptArr.forEach((s) => {
      speak(t`三，二，一．`, allSetting.countingRate, selectedVoice);
      speak(s, allSetting.speakingRate, selectedVoice);
    });
  }, [scriptArr, allSetting.language, selectedVoice]);
  return {
    scriptArr,
    allSetting,
    playScript,
    scriptDisplay,
    areVoicesLoaded,
  };
};
