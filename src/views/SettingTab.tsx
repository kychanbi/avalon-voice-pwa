import React, { EventHandler, useContext, useState } from 'react';
import {
  InputLabel,
  Select,
  MenuItem,
  makeStyles,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Slider,
  Typography,
  Fab,
  Button,
  ButtonGroup,
  Tabs,
  Tab,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import {
  AllSetting,
  defaultAllSetting,
  GameMode,
  Language,
  SettingContext,
} from '../state/playerSetting';
import { Constants } from '../Constant';
import { TabPanel } from './components/TabPanel';
import { Trans } from '@lingui/macro';
import { dynamicActivate } from '../i18nHelper';

const useStyle = makeStyles((theme) => ({
  settingTab: {
    backgroundColor: theme.palette.background.paper,
    width: '70%',
    height: '80%',
    padding: '3em 1.5em 5em',
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
    zIndex: 10,
  },
  presetBtn: {
    margin: `${theme.spacing(2)}px 0`,
  },
}));

const labels = Constants.label;

const SettingTab = ({ closeDialog }: { closeDialog: EventHandler<any> }) => {
  const classes = useStyle();
  const { allSetting, editSetting, editAllCharacterSettings } =
    useContext(SettingContext);
  const { avalonCharacterSetting, questCharacterSetting } = allSetting;
  const [formState, setFormState] = useState<AllSetting>(
    allSetting ?? defaultAllSetting,
  );
  console.log('SettingTab', formState.language);

  const handleSwitchLang = async (
    event: React.ChangeEvent<{}>,
    value: Language,
  ) => {
    if (!value) return;
    await dynamicActivate(value);

    setFormState((prevFormState) => ({ ...prevFormState, language: value }));
    editSetting('language', value);
    if (value === 'zh-hk') {
      setFormState((prevFormState) => ({
        ...prevFormState,
        speakingRate: 0.8,
      }));
      editSetting('speakingRate', 0.8);
    } else {
      setFormState((prevFormState) => ({
        ...prevFormState,
        speakingRate: 0.65,
      }));
      editSetting('speakingRate', 0.65);
    }
  };
  const handleSwitchTab = (event: React.ChangeEvent<{}>, value: GameMode) => {
    setFormState((prevFormState) => ({ ...prevFormState, gameMode: value }));
    editSetting('gameMode', value);
  };
  const handleChange = <K extends keyof AllSetting>(
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: unknown;
      checked?: boolean;
    }>,
  ) => {
    const name = event.target.name as K;
    const value = event.target.value as AllSetting[K];
    const checked = event.target.checked as boolean;
    const newVal = checked === undefined ? value : checked;

    setFormState((prevFormState) => ({ ...prevFormState, [name]: newVal }));
    editSetting(name, newVal);
  };
  const handleSliderChange =
    (name: string) =>
    (event: React.ChangeEvent<{}>, value: number | number[]) => {
      if (Array.isArray(value)) return;
      setFormState((prevFormState) => ({ ...prevFormState, [name]: value }));
      editSetting(name, value);
    };

  const handlePresetClick = (id: string) => {
    const setting = Constants.presets[id];
    setFormState((prevFormState) => ({ ...prevFormState, ...setting }));
    editAllCharacterSettings(setting);
  };

  return (
    <div className={classes.settingTab}>
      <Fab className={classes.closeBtn} onClick={closeDialog}>
        <CloseIcon />
      </Fab>
      <ToggleButtonGroup
        value={formState.language}
        exclusive
        onChange={handleSwitchLang}
      >
        <ToggleButton value={'en-GB'}>English</ToggleButton>
        <ToggleButton value={'zh-hk'}>中文</ToggleButton>
      </ToggleButtonGroup>
      <Tabs
        value={formState.gameMode}
        onChange={handleSwitchTab}
        aria-label="tab"
      >
        <Tab label="Avalon" value={GameMode.Avalon} />
        <Tab label="Quest" value={GameMode.Quest} />
      </Tabs>
      <TabPanel value={GameMode.Avalon} currentTab={formState.gameMode}>
        <ButtonGroup className={classes.presetBtn} color="default">
          {Object.keys(Constants.presets).map((key) => (
            <Button key={key} id={key} onClick={() => handlePresetClick(key)}>
              {' '}
              {Constants.presets[key].desc}
            </Button>
          ))}
        </ButtonGroup>
        <FormControl className={classes.selectFormControl}>
          <InputLabel>
            <Trans>總人數</Trans>
          </InputLabel>
          <Select
            labelId="select-total-number-of-player-label"
            id="select-total-number-of-player"
            value={avalonCharacterSetting.totalNumberOfPlayer}
            onChange={handleChange}
            name="avalonCharacterSetting.totalNumberOfPlayer"
          >
            {Object.keys(Constants.totalNumberOfPlayers).map((n) => (
              <MenuItem value={n} key={n}>
                {n}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={avalonCharacterSetting.isPercivalPresent}
                onChange={handleChange}
                name="avalonCharacterSetting.isPercivalPresent"
                color="primary"
              />
            }
            label={labels.isPercivalPresent}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={avalonCharacterSetting.isMordredPresent}
                onChange={handleChange}
                name="avalonCharacterSetting.isMordredPresent"
                color="primary"
              />
            }
            label={labels.isMordredPresent}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={avalonCharacterSetting.isMorganaPresent}
                onChange={handleChange}
                name="avalonCharacterSetting.isMorganaPresent"
                color="primary"
              />
            }
            label={labels.isMorganaPresent}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={avalonCharacterSetting.isOberonPresent}
                onChange={handleChange}
                name="avalonCharacterSetting.isOberonPresent"
                color="primary"
              />
            }
            label={labels.isOberonPresent}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={avalonCharacterSetting.isLancelotPresent}
                onChange={handleChange}
                name="avalonCharacterSetting.isLancelotPresent"
                color="primary"
              />
            }
            label={labels.isLancelotPresent}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={avalonCharacterSetting.useLancelotAlternativeRules}
                onChange={handleChange}
                name="avalonCharacterSetting.useLancelotAlternativeRules"
                color="primary"
              />
            }
            label={labels.useLancelotAlternativeRules}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={formState.isNewbieMode}
                onChange={handleChange}
                name="isNewbieMode"
                color="primary"
              />
            }
            label={labels.isNewbieMode}
          />
        </FormGroup>
      </TabPanel>
      <TabPanel value={GameMode.Quest} currentTab={formState.gameMode}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={questCharacterSetting.isClericPresent}
                onChange={handleChange}
                name="questCharacterSetting.isClericPresent"
                color="primary"
              />
            }
            label={labels.isClericPresent}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={questCharacterSetting.isArthurPresent}
                onChange={handleChange}
                name="questCharacterSetting.isArthurPresent"
                color="primary"
              />
            }
            label={labels.isArthurPresent}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={questCharacterSetting.isBlindHunterPresent}
                onChange={handleChange}
                name="questCharacterSetting.isBlindHunterPresent"
                color="primary"
              />
            }
            label={labels.isBlindHunterPresent}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={questCharacterSetting.isMorganLeFayPresent}
                onChange={handleChange}
                name="questCharacterSetting.isMorganLeFayPresent"
                color="primary"
              />
            }
            label={labels.isMorganLeFayPresent}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={questCharacterSetting.isMutineerPresent}
                onChange={handleChange}
                name="questCharacterSetting.isMutineerPresent"
                color="primary"
              />
            }
            label={labels.isMutineerPresent}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={questCharacterSetting.isChangelingPresent}
                onChange={handleChange}
                name="questCharacterSetting.isChangelingPresent"
                color="primary"
              />
            }
            label={labels.isChangelingPresent}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={questCharacterSetting.isScionPresent}
                onChange={handleChange}
                name="questCharacterSetting.isScionPresent"
                color="primary"
              />
            }
            label={labels.isScionPresent}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={questCharacterSetting.isLancelotPresent}
                onChange={handleChange}
                name="questCharacterSetting.isLancelotPresent"
                color="primary"
              />
            }
            label={labels.isLancelotPresent}
          />
        </FormGroup>
      </TabPanel>
      <div className={classes.sliderWrap}>
        <Typography gutterBottom>
          speaking speed : {formState.speakingRate}
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
          counting speed : {formState.countingRate}
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
    </div>
  );
};
export { SettingTab };
