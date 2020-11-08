import React from 'react';
import { makeStyles, Tab as MuiTab, TabProps as MuiTabProps } from '@material-ui/core';

export type TabProps = MuiTabProps;

const useStyles = makeStyles((theme) => ({
  tab: {
    minWidth: '95px',
    '&.MuiTab-textColorPrimary': {
      color: theme.palette.secondary,
    },

    '&.MuiTab-textColorPrimary.Mui-selected': {
      color: 'theme.palette.primary.main',
    },
  },
}));

export const FilterTab = (props: TabProps) => {
  const classes = useStyles();

  return <MuiTab label="All" className={classes.tab} {...props} />;
};
