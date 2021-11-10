import React, { EventHandler, useCallback, useContext, useEffect, useState } from 'react';
import { Box, Card, CircularProgress, Fab, makeStyles, Typography } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import {
  AllSetting, AvalonCharacterSetting,
  calcGoodEvilNumber,
  defaultAllSetting,
  GameMode, QuestCharacterSetting,
  SettingContext,
} from '../state/playerSetting';
import { endSpeaking, speak } from '../utils/utils';

interface settingDisplayProps{
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
  const {
    totalNumberOfPlayer,
  } = gameSetting;
  const {
    numberOfGood,
    numberOfEvil,
  } = calcGoodEvilNumber(
    totalNumberOfPlayer ?? defaultAllSetting.totalNumberOfPlayer,
  );
  return (
    <Box>
      <Typography variant='subtitle1'>
        總人數:
        {' '}
        {totalNumberOfPlayer}
      </Typography>
      <Typography variant='subtitle1'>
        好人:
        {' '}
        {numberOfGood}
        {' '}
        個
      </Typography>
      <Typography variant='subtitle1'>
        壞人:
        {' '}
        {numberOfEvil}
        {' '}
        個
      </Typography>
    </Box>
  );
};

interface GenerateQuestScriptParams extends QuestCharacterSetting{

}

const generateQuestScript = ({
  isClericPresent,
  isMutineerPresent,
  isBlindHunterPresent,
  isChangelingPresent,
  isArthurPresent,
  isMorganLeFayPresent,
  isScionPresent,
}: GenerateQuestScriptParams): string[] => {
  let s0: string;
  // let countUnknowEvil = (+isChangelingPresent as number) + (+isBlindHunterPresent as number) + (+isScionPresent as number) + (+isMutineerPresent as number);
  let s_unknownEvils = [isChangelingPresent ? 'Changeling' : '', isBlindHunterPresent ? 'BlindHunter' : '', isScionPresent ? 'Scion' : '', isMutineerPresent ? 'Mutineer' : ''];
  s_unknownEvils = s_unknownEvils.filter((s) => s !== '');
  if (s_unknownEvils.length > 1){
    s0 = s_unknownEvils.join(',')
      .replace(/,(?=[^,]*$)/, ' 同');
    s0 = `除 ${s0} 以外，所有壞人擘大眼`;
  } else if (s_unknownEvils.length == 1){
    s0 = `除 ${s_unknownEvils} 以外，所有壞人擘大眼`;
  }else{
    s0 = '所有壞人擘大眼';
  }

  const s2 = `所有壞人合埋眼。${isMorganLeFayPresent && isScionPresent ? 'Scion 豎起手指公。Morgan Le Fay擘大眼' : ''}`;
  const s3 = `${isMorganLeFayPresent && isScionPresent ? 'Scion 收起手指公。Morgan Le Fay 合埋眼' : ''}`;
  const s4 = `${isMorganLeFayPresent && isArthurPresent ? 'Morgan Le Fay 豎起手指公。Arthur 擘大眼' : ''}`;
  const s5 = `${isMorganLeFayPresent && isArthurPresent ? 'Morgan Le Fay 收起手指公。Arthur 合埋眼' : ''}`;
  const s6 = `${isClericPresent ? 'First leader 如果係壞人就豎起手指公。Cleric 擘大眼' : ''}`;
  const s7 = `${isClericPresent ? 'First leader 收起手指公。Cleric 合埋眼' : ''}`;

  return [s0, s2, s3, s4, s5, s6, s7].filter((s) => !!s);
};

interface GenerateAvalonScriptParams extends AvalonCharacterSetting{
  numberOfEvil: number,
  useLancelotAlternativeRules: boolean,
  isNewbieMode: boolean,
}

const generateAvalonScript = ({
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
  const scriptAlternativeRule = useLancelotAlternativeRules ? '兩個蘭斯洛特開眼確認身份' : '';
  const scriptAlternativeRule2 = useLancelotAlternativeRules ? '兩個蘭斯洛特合埋眼' : '';
  let scriptEvil = '所有壞人擘大眼';
  if (isLancelotPresent && isOberonPresent){
    scriptEvil = `除【奧柏倫同壞蘭斯洛特】以外，${scriptEvil}，壞蘭斯洛特豎起手指公`;
  } else if (isOberonPresent){
    scriptEvil = `除左【奧柏倫】以外，${scriptEvil}`;
  } else if (isLancelotPresent) scriptEvil = `除左【壞蘭斯洛特】以外，${scriptEvil}，壞蘭斯洛特豎起手指公`;
  if (isNewbieMode) scriptEvil += `，總共有${numEvilOpenEyes}個壞人開眼`;

  const scriptEvil2 = '所有壞人合埋眼';
  const scriptEvil3 = `${isMordredPresent ? '除左【莫德雷德】以外，' : ''}壞人豎起手指公。梅林擘大眼${isNewbieMode ? `，總共有${numberOfEvil}隻手指公` : ''}`;
  // const numOfEvilShown = numberOfEvil - (+isMordredPresent);
  // const scriptGood = '';
  // ，`總共有 ${numOfEvilShown} 個壞人，如果數目有錯，請出聲。`;
  const scriptGood2 = '梅林合埋眼，壞人收起手指公';
  const scriptGood3 = isPercivalPresent ? `【梅林】${isMorganaPresent ? '及【莫甘娜】' : ''} 豎起手指公，【派西維爾】擘大眼。` : '';
  const scriptGood4 = isPercivalPresent ? `【梅林】${isMorganaPresent ? '及【莫甘娜】' : ''} 收起手指公，【派西維爾】合埋眼。` : '';
  const scriptGood5 = '所有人擘大眼';
  return [
    scriptAlternativeRule, scriptAlternativeRule2,
    scriptEvil, scriptEvil2, scriptEvil3,
    scriptGood2, scriptGood3, scriptGood4, scriptGood5,
  ].filter((s) => !!s);
};

const addLineBreaksToScript = (script: string[]): (string | JSX.Element)[] => (script).map(
  // eslint-disable-next-line react/jsx-key
  (x) => [x, <br />],
)
  .reduce(
    (ac, curr) => (ac.concat(curr)), [],
  );

const PlayButton = (props: { playOnClick: EventHandler<any> }) => {
  const { playOnClick } = props;
  return (
    <div onClick={playOnClick} role='button' tabIndex={0} onKeyDown={playOnClick}>
      <Fab variant='extended' color='primary'>
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
    <div onClick={stopPlaying} role='button' tabIndex={0} onKeyDown={stopPlaying}>
      <Fab variant='extended' color='secondary'>
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
  const [areVoicesLoaded, setAreVoicesLoad] = useState(false);
  const { numberOfEvil } = calcGoodEvilNumber(
    allSetting.totalNumberOfPlayer,
  );
  useEffect(() => {
    const s = allSetting.gameMode === GameMode.Avalon
      ? generateAvalonScript({
        ...allSetting,
        numberOfEvil,
      })
      : generateQuestScript({
        ...allSetting,
      });
    const t = addLineBreaksToScript(s);
    setScriptText(s);
    setScriptDisplay(t);
  }, [allSetting]);

  useEffect(() => {
    const synth = window.speechSynthesis;
    synth.getVoices();
    synth.onvoiceschanged = () => {
      const voices = synth.getVoices();
      if (voices.length > 0){
        setAreVoicesLoad(true);
      }
    };
  }, []);
  const playScript = useCallback(() => {
    endSpeaking();
    scriptArr.forEach((s) => {
      speak('三，二，一．', allSetting.countingRate);
      speak(s, allSetting.speakingRate);
    });
  }, [scriptArr]);
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
  const {
    scriptDisplay,
    allSetting,
    playScript,
    areVoicesLoaded,
  } = useMCPageHook();
  return (
    <Card variant='outlined' className={classes.mcCard}>
      <CurrentSettingDisplay gameSetting={allSetting} />
      <Typography>
        {scriptDisplay}
      </Typography>
      <div className={classes.playBtnWrap}>
        {areVoicesLoaded ? <PlayButton playOnClick={playScript} /> : <CircularProgress />}
      </div>
      <div className={classes.playBtnWrap}>
        <StopButton stopPlaying={endSpeaking} />
      </div>
    </Card>
  );
};
