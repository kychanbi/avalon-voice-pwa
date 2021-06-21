import React, { useContext, useState } from 'react';
import {
  InputLabel, Select, MenuItem, makeStyles, FormControl,
} from '@material-ui/core';
import { SettingContext, SettingProps } from '../state/playerSetting';

import { Constants } from '../Constant';

interface optionProps {
  val: string,
  key: string
}

const useStyle = makeStyles((theme) => ({
  settingTab: {
    backgroundColor: theme.palette.background.paper,
    width: '70%',
    height: '80%',
    padding: '3em',
    minWidth: 320,
  },
}));

const TotalNumberOfPlayerOption = (
  props: optionProps,
) => {
  console.log('TotalNumberOfPlayerOption', props);
  const { val, key } = props;
  console.log('TotalNumberOfPlayerOption', val);
  return (
    <div>
      <MenuItem key={key} value={val}>
        {val}
      </MenuItem>
    </div>
  );
};

const SettingTab = () => {
  const { allPlayerSetting, editSetting } = useContext(SettingContext);
  const [currVal, setCurVal] = useState(allPlayerSetting?.totalNumberOfPlayer);
  const [isNumberOfPlayerOpen, setIsNumberOfPlayerOpen] = useState(false);
  const totalNumberOfPlayerOnChange = (e: any) => {
    console.log('totalNumberOfPlayerOnChange', e);
    editSetting(SettingProps.totalNumberOfPlayer, e.target.value);
  };
  const numOfPlayerOnChange = (e: any) => {
    setCurVal(e?.target?.value);
    totalNumberOfPlayerOnChange(e);
  };

  const classes = useStyle();

  return (
    <div className={classes.settingTab}>
      <FormControl>
        <InputLabel>Number of Player</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={currVal}
          onChange={numOfPlayerOnChange}

        >
          {Object.keys(
            Constants.totalNumberOfPlayers,
          ).map(
            (n) => <MenuItem value={n} key={n}>{n}</MenuItem>,
          )}
        </Select>
      </FormControl>
    </div>
  );
};
export { SettingTab };
