import React, { useCallback, useContext, useEffect, useState } from 'react';
import {
  Card,
  CircularProgress,
  makeStyles,
  Typography,
} from '@material-ui/core';

import {
  calcGoodEvilNumber,
  GameMode,
  SettingContext,
} from '../../state/playerSetting';
import { checkIfIos, endSpeaking, speak } from '../../utils/utils';
import { generateAvalonScript, generateQuestScript } from './generateScript';
import { t } from '@lingui/macro';
import PlayButton from './components/PlayButton';
import StopButton from './components/StopButton';
import CurrentSettingDisplay from './components/CurrentSettingDisplay';

const useStyles = makeStyles((theme) => ({
  mcCard: {
    padding: theme.spacing(2),
    height: '100%',
  },
  playBtnWrap: {
    width: '100%',
    padding: '1em 0',
    textAlign: 'center',
  },
}));

const addLineBreaksToScript = (script: string[]): (string | JSX.Element)[] =>
  script
    .map(
      // eslint-disable-next-line react/jsx-key
      (x) => [x, <br />],
    )
    .reduce((ac, curr) => ac.concat(curr), []);

const useMCPageHook = () => {
  const { allSetting } = useContext(SettingContext);
  const { questCharacterSetting, avalonCharacterSetting, isNewbieMode } =
    allSetting;
  const [scriptArr, setScriptText] = useState<string[]>([]);
  const [scriptDisplay, setScriptDisplay] = useState<(string | JSX.Element)[]>(
    [],
  );
  const [areVoicesLoaded, setAreVoicesLoad] = useState(false);
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

  const checkIfVoiceLoaded = useCallback(() => {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();
    if (voices.length > 0) {
      setAreVoicesLoad(true);
    }
  }, [setAreVoicesLoad]);

  // const { i18n } = useLingui();

  useEffect(() => {
    if (checkIfIos()) {
      checkIfVoiceLoaded();
    } else {
      window.speechSynthesis.onvoiceschanged = checkIfVoiceLoaded;
      checkIfVoiceLoaded();
    }
  }, []);
  const playScript = useCallback(() => {
    endSpeaking();
    scriptArr.forEach((s) => {
      speak(t`三，二，一．`, allSetting.countingRate, allSetting.language);
      speak(s, allSetting.speakingRate, allSetting.language);
    });
  }, [scriptArr, allSetting.language]);
  return {
    scriptArr,
    allSetting,
    playScript,
    scriptDisplay,
    areVoicesLoaded,
  };
};

export const MCPage = () => {
  const classes = useStyles();
  const { scriptDisplay, allSetting, playScript, areVoicesLoaded } =
    useMCPageHook();
  return (
    <Card variant="outlined" className={classes.mcCard}>
      <CurrentSettingDisplay gameSetting={allSetting} />
      <Typography>{scriptDisplay}</Typography>
      <div className={classes.playBtnWrap}>
        {areVoicesLoaded ? (
          <PlayButton playOnClick={playScript} />
        ) : (
          <CircularProgress />
        )}
      </div>
      <div className={classes.playBtnWrap}>
        <StopButton stopPlaying={endSpeaking} />
      </div>
    </Card>
  );
};
