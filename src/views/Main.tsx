import React, { useState } from 'react';
import { Dialog, Fab, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { SettingTab } from './SettingTab';
import { SettingContextProvider } from '../state/playerSetting';
import { MCPage } from './MC';
import SettingsIcon from '@material-ui/icons/Settings';
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100vw',
    height: '100vh',
    position: 'relative',
    boxSizing: 'border-box',
    padding: theme.spacing(2),
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
}));

export const Main = () => {
  const classes = useStyles();

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(true);
  const btnOnClick = () => {
    setIsDialogOpen(true);
  };
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <SettingContextProvider>
      <div className={classes.root}>
        <MCPage />
        <Dialog open={isDialogOpen} onClose={closeDialog} fullWidth>
          <SettingTab closeDialog={closeDialog} />
        </Dialog>
        <Fab color="secondary" aria-label="edit" onClick={btnOnClick} className={classes.fab}>
          <SettingsIcon />
        </Fab>
      </div>
    </SettingContextProvider>
  );
};
