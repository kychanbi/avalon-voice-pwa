import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core';
import React, { useContext } from 'react';
import { SettingContext } from '../../../state/playerSetting';
import { endSpeaking } from '../../../utils/speakingUtils';

export const SelectVoice = () => {
  const { selectedVoice, voices, setSelectedVoice } =
    useContext(SettingContext);
  const handleSelectVoice = (event: React.ChangeEvent<{ value: unknown }>) => {
    endSpeaking();
    const value = event.target.value as string;
    const pickedVoice = voices.find((voice) => voice.voiceURI === value);
    setSelectedVoice(pickedVoice);
  };
  return (
    <FormControl
      key={'select-voice-form-control'}
      variant={'filled'}
      fullWidth
      style={{ marginBottom: '2em' }}
    >
      <InputLabel id={'select-voice-input-label'}>Voice</InputLabel>
      <Select
        key={'select-voice-select'}
        labelId="select-voice-input-label"
        id="select-voice"
        value={selectedVoice?.voiceURI || ''}
        onChange={handleSelectVoice}
        name="selectedVoice"
      >
        {voices.map((voice) => (
          <MenuItem key={voice.voiceURI} value={voice.voiceURI}>
            {voice.name} ({voice.voiceURI})
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
