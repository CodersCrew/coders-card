import React from 'react';
import { Tab as MuiTab, TabProps as MuiTabProps, makeStyles } from '@material-ui/core';

export type TabProps = MuiTabProps;

const useStyles = makeStyles((theme) => ({
  Tab: {
    '&.MuiTab-textColorPrimary': {
      color: theme.palette,
    },

    '&.MuiTab-textColorPrimary.Mui-selected': {
      color: theme.palette.primary.main,
    },
  },
}));

export const FilterTab = (props: TabProps): JSX.Element => {
  const classes = useStyles();

  return <MuiTab label="All" className={classes.Tab} {...props} />;
};
