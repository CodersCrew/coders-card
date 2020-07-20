import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, makeStyles } from '@material-ui/core';

export type ButtonProps = MuiButtonProps;

const useStyles = makeStyles((theme) => ({
  button: {
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

export const Button = (props: ButtonProps) => {
  const classes = useStyles();

  return <MuiButton className={classes.button} {...props} />;
};
