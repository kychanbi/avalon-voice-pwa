import React, { useState } from 'react';
import { Dialog, Fab, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import { SettingTab } from './SettingTab';
import { SettingContextProvider } from '../state/playerSetting';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100vw',
    height: '100vh',
    position: 'relative',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
}));

export const Main = () => {
  const classes = useStyles();

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const btnOnClick = (e: any) => {
    console.log(e);
    console.log('btn on click');
    setIsDialogOpen(true);
  };
  const closeDialog = () => {
    setIsDialogOpen(false);
  };
  return (
    <SettingContextProvider>
      <div className={classes.root}>
        <Dialog open={isDialogOpen} onClose={closeDialog} fullWidth>
          <SettingTab />
        </Dialog>
        <Fab color="primary" aria-label="edit" onClick={btnOnClick} className={classes.fab}>
          <EditIcon />
        </Fab>
      </div>
    </SettingContextProvider>
  );
};
