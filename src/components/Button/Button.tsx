import React from 'react';
import { Button as MuiButton, ButtonProps as MuiButtonProps, makeStyles } from '@material-ui/core';
import clsx from 'clsx';

export type ButtonProps = MuiButtonProps;

const useStyles = makeStyles((theme) => ({
  button: {
    '&.MuiButton-root': {
      backgroundColor: theme.palette.primary.main,
      padding: theme.spacing(1, 2),
    },
    '&.MuiButton-contained.Mui-disabled': {
      color: theme.palette.common.white,
      opacity: 0.7,
    },
  },
}));

export const Button = ({ className, href, ...props }: ButtonProps) => {
  const classes = useStyles();

  const linkProps = href ? { href, rel: 'noopener noreferrer', target: '_blank' } : {};

  return <MuiButton className={clsx(classes.button, className)} {...linkProps} {...props} />;
};
