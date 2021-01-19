import React from 'react';
import { Chip as MuiChip, ChipProps as MuiChipProps, makeStyles } from '@material-ui/core';

export type TagProps = MuiChipProps;

const useStyles = makeStyles((theme) => ({
  MuiChip: {
    ...theme.typography.subtitle2,
    backgroundColor: theme.palette.background.tag,
    borderRadius: '4px',
    height: '24px',
    color: theme.palette.text.white,

    '&.MuiChip-colorSecondary': {
      backgroundColor: theme.palette.success.main,
    },

    '&.MuiChip-colorPrimary': {
      backgroundColor: theme.palette.text.secondary,
    },
  },
}));

export const Tag = (props: TagProps) => {
  const classes = useStyles();

  return <MuiChip className={classes.MuiChip} {...props} />;
};
