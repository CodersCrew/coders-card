import React from 'react';
import { Tab as MuiTab, TabProps as MuiTabProps, makeStyles } from '@material-ui/core';

export type TabProps = MuiTabProps;

const useStyles = makeStyles((theme) => ({
  Tab: {
    '&.MuiButton-containedPrimary': {
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(1),
    },
    '&.MuiButton-contained': {
      width: '158px',
      height: '40x',
    },
    '&.MuiButton-containedSizeSmall': {
      width: '150px',
      height: '32px',
    },
  },
}));

export const Button = (props: TabProps) => {
  const classes = useStyles();

  return <MuiTab className={classes.Tab} {...props} />;
};
