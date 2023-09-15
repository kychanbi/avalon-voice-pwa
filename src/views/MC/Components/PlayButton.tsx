import React, { EventHandler } from 'react';
import { Fab } from '@material-ui/core';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const PlayButton = (props: { playOnClick: EventHandler<any> }) => {
  const { playOnClick } = props;
  return (
    <div
      onClick={playOnClick}
      role="button"
      tabIndex={0}
      onKeyDown={playOnClick}
    >
      <Fab variant="extended" color="primary">
        <PlayArrowIcon /> Click to Play Script
      </Fab>
    </div>
  );
};

export default PlayButton;
