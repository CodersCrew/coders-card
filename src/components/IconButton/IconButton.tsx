import React from 'react';
import { IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps, makeStyles } from '@material-ui/core';

export type IconButtonProps = MuiIconButtonProps;

const useStyles = makeStyles((theme) => ({
  muiIconButton: {
    color: theme.palette.background.paper,
    border: 'solid 2px',
    borderRadius: '8px',
    '&.MuiIconButton-colorInherit': {
      color: theme.palette.text.secondary,
    },
  },
}));

export const IconButton = (props: IconButtonProps) => {
  const classes = useStyles();

  return <MuiIconButton className={classes.muiIconButton} {...props} />;
};
