import React, {
  EventHandler,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  Box,
  Card,
  CircularProgress,
  Fab,
  makeStyles,
  Typography,
} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import {
  AllSetting,
  calcGoodEvilNumber,
  defaultAllSetting,
  GameMode,
  SettingContext,
} from '../state/playerSetting';
import { checkIfIos, endSpeaking, speak } from '../utils/utils';
import { generateAvalonScript, generateQuestScript } from './generateScript';

interface settingDisplayProps {
  gameSetting: AllSetting;
}

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

const CurrentSettingDisplay = ({ gameSetting }: settingDisplayProps) => {
  const { totalNumberOfPlayer } = gameSetting.avalonCharacterSetting;
  const { numberOfGood, numberOfEvil } = calcGoodEvilNumber(
    totalNumberOfPlayer ??
      defaultAllSetting.avalonCharacterSetting.totalNumberOfPlayer,
  );
  return (
    <Box>
      <Typography variant="subtitle1">總人數: {totalNumberOfPlayer}</Typography>
      <Typography variant="subtitle1">好人: {numberOfGood} 個</Typography>
      <Typography variant="subtitle1">壞人: {numberOfEvil} 個</Typography>
    </Box>
  );
};

const addLineBreaksToScript = (script: string[]): (string | JSX.Element)[] =>
  script
    .map(
      // eslint-disable-next-line react/jsx-key
      (x) => [x, <br />],
    )
    .reduce((ac, curr) => ac.concat(curr), []);

const PlayButton = (props: { playOnClick: EventHandler<any> }) => {
  const { playOnClick } = props;
  return (
    <div
      onClick={playOnClick}
      role="button"
      tabIndex={0}
      onKeyDown={playOnClick}
    >
      <Fab variant="extended" color="primary">
        <PlayArrowIcon /> Click to Play Script
      </Fab>
    </div>
  );
};

const StopButton = (props: { stopPlaying: EventHandler<any> }) => {
  const { stopPlaying } = props;
  return (
    <div
      onClick={stopPlaying}
      role="button"
      tabIndex={0}
      onKeyDown={stopPlaying}
    >
      <Fab variant="extended" color="secondary">
        <StopIcon />
      </Fab>
    </div>
  );
};

const useMCPageHook = () => {
  // const synthesize = useSynthesize();

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
    console.log('useMCpagehook', s);
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
    console.log('allSetting.language', allSetting.language);
    endSpeaking();
    scriptArr.forEach((s) => {
      speak('三，二，一．', allSetting.countingRate, allSetting.language);
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
