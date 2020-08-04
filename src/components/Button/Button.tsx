import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, makeStyles } from '@material-ui/core';


export type ButtonProps = MuiButtonProps;

const useStyles = makeStyles((theme) => ({
  button: {
    '&.MuiButton-containedPrimary': {
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(1),
    },
  },
}));

export const Button = (props: ButtonProps) => {
  const classes = useStyles();

  return <MuiButton className={classes.button} {...props} />;

};
