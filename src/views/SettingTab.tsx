import React, { useContext, useState } from 'react';
import {
  InputLabel, Select, MenuItem, makeStyles, FormControl, FormControlLabel, Checkbox, FormGroup,
} from '@material-ui/core';
import {
  CharacterSetting, defaultCharacterSetting, SettingContext,
} from '../state/playerSetting';

import { Constants } from '../Constant';

const useStyle = makeStyles((theme) => ({
  settingTab: {
    backgroundColor: theme.palette.background.paper,
    width: '70%',
    height: '80%',
    padding: '3em',
    minWidth: 320,
  },
  selectFormControl: {
    margin: theme.spacing(1),
    minWidth: '10em',
  },
}));

const labels = Constants.label;

const SettingTab = () => {
  const classes = useStyle();
  const { allPlayerSetting, editSetting } = useContext(SettingContext);
  // const [currNumOfPlayers, setCurrNumOfPlayers] = useState<string>(
  //   allPlayerSetting.totalNumberOfPlayer ?? defaultCharacterSetting.totalNumberOfPlayer,
  // );
  const [formState, setFormState] = useState<CharacterSetting>(
    allPlayerSetting ?? defaultCharacterSetting,
  );

  const handleChange = <K extends keyof CharacterSetting>(
    event: React.ChangeEvent<{ name?: string | undefined, value: unknown, checked?: boolean }>,
  ) => {
    const name = event.target.name as K;
    const value = event.target.value as CharacterSetting[K];
    const checked = event.target.checked as boolean;
    const newVal = checked === undefined ? value : checked;
    setFormState({ ...formState, [name]: newVal });
    editSetting(name, newVal);
  };

  return (
    <div className={classes.settingTab}>
      <FormControl className={classes.selectFormControl}>
        <InputLabel>Number of Player</InputLabel>
        <Select
          labelId="select-total-number-of-player-label"
          id="select-total-number-of-player"
          value={formState.totalNumberOfPlayer}
          onChange={handleChange}
          name="totalNumberOfPlayer"
        >
          {Object.keys(
            Constants.totalNumberOfPlayers,
          ).map(
            (n) => <MenuItem value={n} key={n}>{n}</MenuItem>,
          )}
        </Select>
      </FormControl>
      <FormGroup>
        <FormControlLabel
          control={(
            <Checkbox
              checked={formState.isPercivalPresent}
              onChange={handleChange}
              name="isPercivalPresent"
              color="primary"
            />
          )}
          label={labels.isPercivalPresent}
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={formState.isMordredPresent}
              onChange={handleChange}
              name={'isMordredPresent'}
              color="primary"
            />
          )}
          label={labels.isMordredPresent}
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={formState.isMorganaPresent}
              onChange={handleChange}
              name={'isMorganaPresent'}
              color="primary"
            />
          )}
          label={labels.isMorganaPresent}
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={formState.isOberonPresent}
              onChange={handleChange}
              name={'isOberonPresent'}
              color="primary"
            />
          )}
          label={labels.isOberonPresent}
        />
        <FormControlLabel
          control={(
            <Checkbox
              checked={formState.isLancelotPresent}
              onChange={handleChange}
              name={'isLancelotPresent'}
              color="primary"
            />
          )}
          label={labels.isLancelotPresent}
        />
      </FormGroup>
    </div>
  );
};
export { SettingTab };
