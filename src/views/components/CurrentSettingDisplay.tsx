import {
  AllSetting,
  calcGoodEvilNumber,
  defaultAllSetting,
} from '../../state/playerSetting';
import { Box, Typography } from '@material-ui/core';
import React from 'react';
import { t } from '@lingui/macro';

interface settingDisplayProps {
  gameSetting: AllSetting;
}
const CurrentSettingDisplay = ({ gameSetting }: settingDisplayProps) => {
  const { totalNumberOfPlayer } = gameSetting.avalonCharacterSetting;
  const { numberOfGood, numberOfEvil } = calcGoodEvilNumber(
    totalNumberOfPlayer ??
      defaultAllSetting.avalonCharacterSetting.totalNumberOfPlayer,
  );
  return (
    <Box>
      <Typography variant="subtitle1">{t`總人數: ${totalNumberOfPlayer}`}</Typography>
      <Typography variant="subtitle1">{t`好人: ${numberOfGood} 個`}</Typography>
      <Typography variant="subtitle1">{t`壞人: ${numberOfEvil} 個`}</Typography>
    </Box>
  );
};

export default CurrentSettingDisplay;
