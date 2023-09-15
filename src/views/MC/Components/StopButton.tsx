import React, { EventHandler } from 'react';
import { Fab } from '@material-ui/core';
import StopIcon from '@material-ui/icons/Stop';

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
export default StopButton;
