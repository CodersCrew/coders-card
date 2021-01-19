import React from 'react';
import { makeStyles, Tab as MuiTab, TabProps as MuiTabProps } from '@material-ui/core';

export type FilterTabProps = MuiTabProps;

const useStyles = makeStyles((theme) => ({
  tab: {
    minWidth: 95,
    '&.MuiTab-textColorPrimary': {
      color: theme.palette.secondary,
    },

    '&.MuiTab-textColorPrimary.Mui-selected': {
      color: 'theme.palette.primary.main',
    },
  },
}));

export const FilterTab = (props: FilterTabProps) => {
  const classes = useStyles();

  return <MuiTab label="All" className={classes.tab} {...props} />;
};
