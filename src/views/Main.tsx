import React, {
  useCallback, useContext, useMemo, useState,
} from 'react';
import {
  createMuiTheme, Dialog, Fab, makeStyles, MuiThemeProvider,
} from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import BrightnessMediumIcon from '@material-ui/icons/BrightnessMedium';
import { SettingTab } from './SettingTab';
import { SettingContext } from '../state/playerSetting';
import { MCPage } from './MC';
import { Constants } from '../Constant';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: '100vw',
    height: '100vh',
    position: 'relative',
    boxSizing: 'border-box',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(3),
    right: theme.spacing(3),
  },
  fabLeft: {
    position: 'absolute',
    bottom: theme.spacing(3),
    left: theme.spacing(3),
  },
}));

export const Main = () => {
  const classes = useStyles();
  const { allSetting, editSetting } = useContext(SettingContext);
  const toggleDarkMode = useCallback(() => {
    const { isDarkMode } = allSetting;
    editSetting('isDarkMode', !isDarkMode);
  }, [allSetting.isDarkMode, editSetting]);

  const appliedTheme = useMemo(
    () => createMuiTheme(allSetting.isDarkMode ? Constants.theme.dark : Constants.theme.light),
    [allSetting],
  );

  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(true);
  const btnOnClick = () => {
    setIsDialogOpen(true);
  };
  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <MuiThemeProvider theme={appliedTheme}>
      <div className={classes.root}>
        <MCPage />
        <Dialog open={isDialogOpen} onClose={closeDialog} fullWidth>
          <SettingTab closeDialog={closeDialog} />
        </Dialog>
        <Fab color="secondary" aria-label="edit" onClick={btnOnClick} className={classes.fab}>
          <SettingsIcon />
        </Fab>
        <Fab color="secondary" aria-label="toggle dark mode" onClick={toggleDarkMode} className={classes.fabLeft}>
          <BrightnessMediumIcon />
        </Fab>
      </div>
    </MuiThemeProvider>
  );
};
