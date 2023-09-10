import React from 'react';
import {
  Card,
  CircularProgress,
  makeStyles,
  Typography,
} from '@material-ui/core';

import PlayButton from './Components/PlayButton';
import StopButton from './Components/StopButton';
import CurrentSettingDisplay from './Components/CurrentSettingDisplay';
import { endSpeaking } from '../../utils/speakingUtils';
import { useMCPageHook } from './UseMCPageHook';
import { SelectVoice } from './Components/SelectVoice';

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

export const MCPage = () => {
  const classes = useStyles();
  const { scriptDisplay, allSetting, playScript, areVoicesLoaded } =
    useMCPageHook();
  return (
    <Card variant="outlined" className={classes.mcCard}>
      <SelectVoice />
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
