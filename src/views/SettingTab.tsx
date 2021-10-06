import React, { EventHandler, useContext, useState } from 'react';
import {
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  FormControl, FormControlLabel, Checkbox, FormGroup, Slider, Typography, Fab,
  Button, ButtonGroup,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {
  AllSetting,
  defaultAllSetting, SettingContext,
} from '../state/playerSetting';
import { Constants } from '../Constant';

const useStyle = makeStyles((theme) => ({
  settingTab: {
    backgroundColor: theme.palette.background.paper,
    width: '70%',
    height: '80%',
    padding: '5em 3em',
    minWidth: 320,
  },
  selectFormControl: {
    margin: `${theme.spacing(1)}px 0`,
    minWidth: '10em',
  },
  sliderWrap: {
    maxWidth: '55vw',
  },
  closeBtn: {
    position: 'absolute',
    top: theme.spacing(3),
    right: theme.spacing(3),
    cursor: 'pointer',
  },
  presetBtn: {
    margin: `${theme.spacing(2)}px 0`,
  },
}));

const labels = Constants.label;

const SettingTab = ({ closeDialog }: { closeDialog: EventHandler<any> }) => {
  const classes = useStyle();
  const { allSetting, editSetting, editAllCharacterSettings } = useContext(SettingContext);
  const [formState, setFormState] = useState<AllSetting>(
    allSetting ?? defaultAllSetting,
  );

  const handleChange = <K extends keyof AllSetting>(
    event: React.ChangeEvent<{ name?: string | undefined, value: unknown, checked?: boolean }>,
  ) => {
    const name = event.target.name as K;
    const value = event.target.value as AllSetting[K];
    const checked = event.target.checked as boolean;
    const newVal = checked === undefined ? value : checked;
    setFormState({ ...formState, [name]: newVal });
    editSetting(name, newVal);
  };
  const handleSliderChange = (name: string) => (
    event: React.ChangeEvent<{}>,
    value: number | number[],
  ) => {
    if (Array.isArray(value)) return;
    setFormState({ ...formState, [name]: value });
    editSetting(name, value);
  };

  const handlePresetClick = (id: string) => {
    const setting = Constants.presets[id];
    setFormState({ ...formState, ...setting });
    editAllCharacterSettings(setting);
  };

  return (
    <div className={classes.settingTab}>
      <Fab className={classes.closeBtn} onClick={closeDialog}>
        <CloseIcon />
      </Fab>
      <ButtonGroup className={classes.presetBtn} color='default'>
        {Object.keys(Constants.presets).map((key) => (
          <Button key={key} id={key} onClick={(() => handlePresetClick(key))}>
            {' '}
            {Constants.presets[key].desc}
          </Button>
        ))}
      </ButtonGroup>
      <FormControl className={classes.selectFormControl}>
        <InputLabel>總人數</InputLabel>
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
              name="isMordredPresent"
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
              name="isMorganaPresent"
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
              name="isOberonPresent"
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
              name="isLancelotPresent"
              color="primary"
            />
          )}
          label={labels.isLancelotPresent}
        />
        <div className={classes.sliderWrap}>
          <Typography gutterBottom>
            speaking speed :
            {' '}
            {formState.speakingRate}
          </Typography>
          <Slider
            name="speakingRate"
            defaultValue={formState.speakingRate}
            value={formState.speakingRate}
            onChange={handleSliderChange('speakingRate')}
            valueLabelDisplay="auto"
            min={0.5}
            max={1.5}
            step={0.05}
          />
        </div>
        <div className={classes.sliderWrap}>
          <Typography gutterBottom>
            counting speed :
            {' '}
            {formState.countingRate}
          </Typography>
          <Slider
            name="countingRate"
            defaultValue={formState.countingRate}
            value={formState.countingRate}
            onChange={handleSliderChange('countingRate')}
            valueLabelDisplay="auto"
            min={0.6}
            max={1.6}
            step={0.06}
          />
        </div>
      </FormGroup>
    </div>
  );
};
export { SettingTab };
