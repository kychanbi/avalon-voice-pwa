import React, {
  EventHandler, useCallback, useContext, useEffect, useState,
} from 'react';
import {
  Box, Card, Fab, makeStyles, Typography,
} from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import { AllSetting, SettingContext } from '../state/playerSetting';
import {
  endSpeaking, speak,
} from '../utils/utils';

interface settingDisplayProps {
  gameSetting: AllSetting
}

const useStyles = makeStyles((theme) => ({
  mcCard: {
    padding: theme.spacing(2),
  },
  playBtnWrap: {
    width: '100%',
    padding: '1em 0',
    textAlign: 'center',
  },
}));

const CurrentSettingDisplay = ({ gameSetting }: settingDisplayProps) => {
  const {
    numberOfGood, numberOfEvil, totalNumberOfPlayer,
  } = gameSetting;
  return (
    <Box>
      <Typography variant="subtitle1">
        總人數:
        {' '}
        {totalNumberOfPlayer}
      </Typography>
      <Typography variant="subtitle1">
        好人:
        {' '}
        {numberOfGood}
        {' '}
        個
      </Typography>
      <Typography variant="subtitle1">
        壞人:
        {' '}
        {numberOfEvil}
        {' '}
        個
      </Typography>
    </Box>
  );
};
const generateScript = ({
  isLancelotPresent,
  isMordredPresent,
  isMorganaPresent,
  isOberonPresent,
  isPercivalPresent,
}: AllSetting): string[] => {
  // let numOtherEvil = numberOfEvil;
  // isMordredPresent && numOtherEvil--;
  // isOberonPresent && numOtherEvil--;
  // isMorganaPresent && numOtherEvil--;
  // isLancelotPresent && numOtherEvil--;

  // const script1 = '';
  // let scriptEvil = '所有人合埋眼，伸手握拳放係枱上，所有壞人開眼';
  let scriptEvil = '所有壞人擘大眼';
  if (isLancelotPresent && isOberonPresent) scriptEvil = `除【奧柏倫同蘭斯洛特】以外，${scriptEvil}，蘭斯洛特豎起手指公`;
  else if (isOberonPresent) scriptEvil = `除左【奧柏倫】以外，${scriptEvil}`;
  else if (isLancelotPresent) scriptEvil = `除左【蘭斯洛特】以外，${scriptEvil}，蘭斯洛特豎起手指公`;
  const scriptEvil2 = '所有壞人合埋眼';
  const scriptEvil3 = `${isMordredPresent ? '除左【莫德雷德】以外，' : ''}壞人豎起手指公。梅林擘大眼`;
  // const numOfEvilShown = numberOfEvil - (+isMordredPresent);
  // const scriptGood = '';
  // ，`總共有 ${numOfEvilShown} 個壞人，如果數目有錯，請出聲。`;
  const scriptGood2 = '梅林合埋眼，壞人收起手指公';
  const scriptGood3 = isPercivalPresent ? `【梅林】${isMorganaPresent ? '及【莫甘娜】' : ''} 豎起手指公，【派西維爾】擘大眼。
` : '';
  const scriptGood4 = isPercivalPresent ? `【梅林】${isMorganaPresent ? '及【莫甘娜】' : ''} 收起手指公，【派西維爾】合埋眼。` : '';
  const scriptGood5 = '所有人擘大眼';
  return [
    scriptEvil, scriptEvil2, scriptEvil3,
    scriptGood2, scriptGood3, scriptGood4, scriptGood5,
  ].filter((s) => !!s);
};

const addLineBreaksToScript = (script: string[]): (string | JSX.Element)[] => (script).map(
  // eslint-disable-next-line react/jsx-key
  (x) => [x, <br />],
).reduce(
  (ac, curr) => (ac.concat(curr)), [],
);

const PlayButton = (props: { playOnClick: EventHandler<any> }) => {
  const { playOnClick } = props;
  return (
    <div onClick={playOnClick} role="button" tabIndex={0} onKeyDown={playOnClick}>
      <Fab variant="extended" color="primary">
        <PlayArrowIcon />
        {' '}
        Click to Play Script
      </Fab>
    </div>
  );
};

const StopButton = (props: { stopPlaying: EventHandler<any> }) => {
  const { stopPlaying } = props;
  return (
    <div onClick={stopPlaying} role="button" tabIndex={0} onKeyDown={stopPlaying}>
      <Fab variant="extended" color="secondary">
        <StopIcon />
      </Fab>
    </div>
  );
};

const useMCPageHook = () => {
  // const synthesize = useSynthesize();

  const { allSetting } = useContext(SettingContext);
  const [scriptArr, setScriptText] = useState<string[]>([]);
  const [scriptDisplay, setScriptDisplay] = useState<(string | JSX.Element)[]>([]);
  useEffect(() => {
    const s = generateScript(allSetting);
    const t = addLineBreaksToScript(s);
    setScriptText(s);
    setScriptDisplay(t);
  }, [allSetting]);

  const playScript = useCallback(() => {
    endSpeaking();
    // const lastSentence = scriptArr.pop() as string;
    scriptArr.forEach((s) => {
      speak('五，四，三，二，一．', allSetting.countingRate);
      speak(s, allSetting.speakingRate);
      // await pauseSpeaking(5);
    });
    // console.log('lastSentence',lastSentence)
    // speak(lastSentence);
    // synthesize(scriptText.join(' '));
  }, [scriptArr]);
  return {
    scriptArr, allSetting, playScript, scriptDisplay,
  };
};

export const MCPage = () => {
  const classes = useStyles();
  const {
    scriptDisplay, allSetting, playScript,
  } = useMCPageHook();
  // TODO : add loading state when SpeechSynthesisVoice is not loaded
  return (
    <Card variant="outlined" className={classes.mcCard}>
      <CurrentSettingDisplay gameSetting={allSetting} />
      <Typography>
        {scriptDisplay}
      </Typography>
      <div className={classes.playBtnWrap}>
        <PlayButton playOnClick={playScript} />
      </div>
      <div className={classes.playBtnWrap}>
        <StopButton stopPlaying={endSpeaking} />
      </div>
    </Card>
  );
};
