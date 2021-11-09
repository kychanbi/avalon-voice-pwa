import React from 'react';
import { Box } from '@material-ui/core';

interface TabPanelProps{
  children: React.ReactNode,
  value: string,
  currentTab: string,
}

export const TabPanel = ({
  children,
  value,
  currentTab,
}: TabPanelProps) => (
  <div
    role='tabpanel'
    hidden={value !== currentTab}
    id={`simple-tabpanel-${value}`}
    aria-labelledby={`simple-tab-${value}`}
  >
    {value === currentTab && (
      <Box sx={{ p: 0 }}>
        {children}
      </Box>
    )}
  </div>
);
